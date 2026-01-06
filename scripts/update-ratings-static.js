const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const baseUrl =
  process.env.RATINGS_BASE_URL || "https://travel.lucky20220528.workers.dev";
const outputPath = process.env.RATINGS_OUTPUT || "ratings.json";
const delayMs = Number(process.env.RATINGS_DELAY_MS || 120);

function normalizeKey(value) {
  return String(value || "").trim().toLowerCase();
}

async function loadQueries() {
  const moduleUrl = pathToFileURL(path.resolve(__dirname, "../worker/places.js")).href;
  const module = await import(moduleUrl);
  return Array.isArray(module.PLACE_QUERIES) ? module.PLACE_QUERIES : [];
}

async function fetchSnapshot() {
  try {
    const response = await fetch(`${baseUrl}/api/ratings`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ratings: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    return { updatedAt: "", items: {} };
  }
}

async function fetchPlace(query) {
  const response = await fetch(`${baseUrl}/api/places?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch place: ${response.status}`);
  }
  return response.json();
}

function sleep(ms) {
  if (!ms) {
    return Promise.resolve();
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const [snapshot, queries] = await Promise.all([fetchSnapshot(), loadQueries()]);
  const items = snapshot.items && typeof snapshot.items === "object" ? snapshot.items : {};
  const missing = queries.filter((query) => !items[normalizeKey(query)]);

  for (const query of missing) {
    try {
      const data = await fetchPlace(query);
      const key = normalizeKey(query);
      items[key] = {
        query: data.query || query,
        placeId: data.placeId || "",
        name: data.name || "",
        rating: typeof data.rating === "number" ? data.rating : null,
        ratingCount: typeof data.ratingCount === "number" ? data.ratingCount : null,
        popularity: data.popularity || "정보 없음",
        source: data.source || "Google",
        updatedAt: data.updatedAt || new Date().toISOString()
      };
    } catch (error) {
      console.error(`Failed to fetch ${query}: ${error.message}`);
    }
    await sleep(delayMs);
  }

  const payload = { updatedAt: new Date().toISOString(), items };
  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  const count = Object.keys(items).length;
  console.log(`Saved ${count} ratings to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
