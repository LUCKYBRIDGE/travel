const DEFAULT_CACHE_SECONDS = 60 * 60 * 24 * 7;
const FALLBACK_ORIGIN = "*";

function parseAllowedOrigins(env) {
  const raw = env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || FALLBACK_ORIGIN;
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function resolveCorsOrigin(requestOrigin, allowedOrigins) {
  if (!allowedOrigins.length) {
    return FALLBACK_ORIGIN;
  }
  if (allowedOrigins.includes(FALLBACK_ORIGIN)) {
    return FALLBACK_ORIGIN;
  }
  if (!requestOrigin) {
    return allowedOrigins[0];
  }
  return allowedOrigins.includes(requestOrigin) ? requestOrigin : "";
}

function buildCorsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
}

function jsonResponse(body, status, origin, cacheSeconds) {
  const headers = new Headers(buildCorsHeaders(origin));
  headers.set("Content-Type", "application/json; charset=utf-8");
  if (cacheSeconds) {
    headers.set("Cache-Control", `public, max-age=${cacheSeconds}`);
  }
  return new Response(JSON.stringify(body), { status, headers });
}

function withCors(response, origin) {
  const headers = new Headers(response.headers);
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

function inferPopularity(count) {
  if (typeof count !== "number") {
    return "정보 없음";
  }
  if (count >= 2000) {
    return "관광객 많음";
  }
  if (count >= 500) {
    return "보통";
  }
  return "관광객 적은 편";
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google API error (${response.status})`);
  }
  return response.json();
}

async function resolvePlaceId(query, apiKey, language) {
  const params = new URLSearchParams({
    input: query,
    inputtype: "textquery",
    fields: "place_id,name",
    language,
    key: apiKey
  });
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${params.toString()}`;
  const data = await fetchJson(url);
  const candidate = data.candidates && data.candidates[0];
  if (!candidate || !candidate.place_id) {
    return null;
  }
  return { placeId: candidate.place_id, name: candidate.name || "" };
}

async function fetchPlaceDetails(placeId, apiKey, language) {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: "place_id,name,rating,user_ratings_total",
    language,
    key: apiKey
  });
  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;
  return fetchJson(url);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const allowedOrigins = parseAllowedOrigins(env);
    const requestOrigin = request.headers.get("Origin") || "";
    const origin = resolveCorsOrigin(requestOrigin, allowedOrigins) || "null";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: buildCorsHeaders(origin) });
    }

    if (request.method !== "GET") {
      return jsonResponse({ error: "method not allowed" }, 405, origin);
    }

    if (requestOrigin && origin === "null") {
      return jsonResponse({ error: "origin not allowed" }, 403, origin);
    }

    if (url.pathname !== "/api/places") {
      return jsonResponse({ error: "not found" }, 404, origin);
    }

    const apiKey = env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      return jsonResponse({ error: "missing api key" }, 500, origin);
    }

    const query = url.searchParams.get("query");
    const placeIdParam = url.searchParams.get("placeId");
    const language = url.searchParams.get("lang") || "ko";
    if (!query && !placeIdParam) {
      return jsonResponse({ error: "missing query" }, 400, origin);
    }

    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;
    const cached = await cache.match(cacheKey);
    if (cached) {
      return withCors(cached, origin);
    }

    let placeId = placeIdParam;
    let placeName = "";

    if (!placeId) {
      const resolved = await resolvePlaceId(query, apiKey, language);
      if (!resolved) {
        return jsonResponse({ error: "place not found" }, 404, origin);
      }
      placeId = resolved.placeId;
      placeName = resolved.name || "";
    }

    const details = await fetchPlaceDetails(placeId, apiKey, language);
    const result = details.result || {};
    const rating = typeof result.rating === "number" ? result.rating : null;
    const ratingCount =
      typeof result.user_ratings_total === "number" ? result.user_ratings_total : null;

    const payload = {
      query: query || "",
      placeId,
      name: result.name || placeName || "",
      rating,
      ratingCount,
      popularity: inferPopularity(ratingCount),
      source: "Google",
      updatedAt: new Date().toISOString()
    };

    const cacheSeconds = Number(env.CACHE_SECONDS || DEFAULT_CACHE_SECONDS);
    const response = jsonResponse(payload, 200, origin, cacheSeconds);
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  }
};
