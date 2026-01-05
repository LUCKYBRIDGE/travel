(() => {
  const data = window.TRIP_DATA;
  const sections = {
    overview: document.getElementById("overview"),
    day1: document.getElementById("day1"),
    day2: document.getElementById("day2"),
    day3: document.getElementById("day3"),
    map: document.getElementById("map"),
    budget: document.getElementById("budget"),
    checklist: document.getElementById("checklist")
  };
  const toast = document.getElementById("toast");

  const STORAGE = {
    options: "travel:options",
    choices: "travel:choices",
    checklist: "travel:checklist",
    routeMode: "travel:route-mode",
    coords: "travel:coords",
    routes: "travel:routes",
    ratings: "travel:ratings",
    syncCode: "travel:sync-code",
    syncMeta: "travel:sync-meta"
  };

  const state = {
    options: loadStorage(STORAGE.options, {}),
    choices: loadStorage(STORAGE.choices, {}),
    checklist: loadStorage(STORAGE.checklist, {}),
    routeMode: loadStorage(STORAGE.routeMode, data.routeSettings?.mode || "hybrid"),
    coords: loadStorage(STORAGE.coords, {}),
    routes: loadStorage(STORAGE.routes, {}),
    ratings: loadStorage(STORAGE.ratings, {}),
    syncCode: loadStorage(STORAGE.syncCode, ""),
    syncMeta: loadStorage(STORAGE.syncMeta, {})
  };
  const placeDetails = data.placeDetails || {};

  function loadStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function buildMapLink(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  function getPlaceDetails(mapQuery) {
    if (!mapQuery) {
      return null;
    }
    const key = mapQuery.trim().toLowerCase();
    const base = placeDetails[key] || null;
    const override = state.ratings[key] || null;
    if (!override) {
      return base;
    }
    if (!base) {
      return { ...override };
    }
    return {
      ...base,
      ...override,
      ratingSource: override.ratingSource || base.ratingSource
    };
  }

  function formatRating(detail) {
    if (!detail || !detail.rating) {
      return "평점 입력 필요";
    }
    const source = detail.ratingSource || "Google";
    const count =
      typeof detail.ratingCount === "number"
        ? `, 리뷰 ${detail.ratingCount.toLocaleString("ko-KR")}개`
        : "";
    return `${detail.rating} (${source}${count})`;
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return String(value);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  }

  function isPlainObject(value) {
    return value && typeof value === "object" && !Array.isArray(value);
  }

  function renderDetailLine(label, items, fallback) {
    const value = Array.isArray(items)
      ? items.length
        ? items.join(" · ")
        : fallback
      : items || fallback;
    return `
      <div class="place-line">
        <span class="label">${label}</span>
        <span>${value}</span>
      </div>
    `;
  }

  function buildLocationText(info) {
    const parts = [];
    if (info.building) {
      parts.push(info.building);
    }
    if (info.floor) {
      parts.push(info.floor);
    }
    if (info.area) {
      parts.push(info.area);
    }
    return parts.join(" · ");
  }

  function renderLinks(detail, mapQuery) {
    if (!mapQuery) {
      return "";
    }
    const links = Array.isArray(detail.links) ? detail.links : [];
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      `${mapQuery} 공식 사이트`
    )}`;
    const merged = [
      ...links,
      { label: "공식 사이트 검색", url: searchUrl },
      { label: "구글 지도", url: buildMapLink(mapQuery) }
    ];
    return `
      <div class="place-links">
        ${merged
          .map(
            (link) => `
              <a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderNearbyList(nearby) {
    if (!nearby || nearby.length === 0) {
      return "";
    }
    return `
      <div class="nearby-list">
        ${nearby
          .map((item) => {
            const detail = getPlaceDetails(item.mapQuery) || item;
            const locationLines = [
              detail.building || item.building
                ? renderDetailLine("건물", detail.building || item.building)
                : "",
              detail.floor || item.floor
                ? renderDetailLine("층", detail.floor || item.floor)
                : "",
              detail.area || item.area ? renderDetailLine("구역", detail.area || item.area) : ""
            ]
              .filter(Boolean)
              .join("");
            return `
              <div class="nearby-card">
                <div class="nearby-header">
                  <strong>${item.name}</strong>
                  ${item.type ? `<span class="tag neutral">${item.type}</span>` : ""}
                </div>
                <div class="muted">평점: ${formatRating(detail)}</div>
                ${locationLines}
                ${renderDetailLine("특징", detail.features, "정보 준비중")}
                ${renderDetailLine("장점", detail.pros, "정보 준비중")}
                ${renderDetailLine("단점", detail.cons, "정보 준비중")}
                ${detail.popularity ? renderDetailLine("관광객", detail.popularity) : ""}
                ${detail.ratingUpdatedAt ? renderDetailLine("업데이트", formatDate(detail.ratingUpdatedAt)) : ""}
                <div class="map-actions">
                  <a href="${buildMapLink(item.mapQuery)}" target="_blank" rel="noreferrer">지도 열기</a>
                  <button type="button" data-copy="${item.mapQuery}">검색어 복사</button>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderPlaceCard(mapQuery, title, options = {}) {
    if (!mapQuery) {
      return "";
    }
    const detail = getPlaceDetails(mapQuery) || {};
    const summary = detail.summary
      ? detail.summary
      : detail.features && detail.features.length
      ? `한눈에 보기: ${detail.features.join(", ")}`
      : "";
    const locationLines = [
      detail.building ? renderDetailLine("건물", detail.building) : "",
      detail.floor ? renderDetailLine("층", detail.floor) : "",
      detail.area ? renderDetailLine("구역", detail.area) : ""
    ]
      .filter(Boolean)
      .join("");
    const content = `
      <div class="place-top">
        <span class="label">Google 지도</span>
        <a href="${buildMapLink(mapQuery)}" target="_blank" rel="noreferrer">열기</a>
        <span class="rating">평점: ${formatRating(detail)}</span>
      </div>
      ${summary ? `<div class="place-summary">${summary}</div>` : ""}
      ${locationLines}
      ${renderDetailLine("특징", detail.features, "정보 준비중")}
      ${renderDetailLine("장점", detail.pros, "정보 준비중")}
      ${renderDetailLine("단점", detail.cons, "정보 준비중")}
      ${detail.popularity ? renderDetailLine("관광객", detail.popularity) : ""}
      ${detail.ratingUpdatedAt ? renderDetailLine("업데이트", formatDate(detail.ratingUpdatedAt)) : ""}
      ${renderLinks(detail, mapQuery)}
      ${
        getRatingApiBase()
          ? `<div class="place-actions"><button type="button" data-rating-update="${mapQuery}">평점 업데이트</button></div>`
          : ""
      }
      ${options.showNearby ? renderNearbyList(detail.nearby) : ""}
    `;

    if (options.collapsible) {
      return `
        <details class="place-info">
          <summary>장소 정보 · ${title || mapQuery}</summary>
          ${content}
        </details>
      `;
    }

    return `
      <div class="place-info">
        <div class="place-title">${title || "장소 정보"}</div>
        ${content}
      </div>
    `;
  }

  function normalizeKey(value) {
    return String(value || "").trim().toLowerCase();
  }

  function buildSharePayload() {
    return {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      appVersion: data.meta?.version || null,
      state: {
        options: state.options,
        choices: state.choices,
        checklist: state.checklist,
        routeMode: state.routeMode,
        routes: state.routes,
        coords: state.coords,
        ratings: state.ratings
      }
    };
  }

  function getShareTextarea() {
    return document.getElementById("sharePayload");
  }

  function writeSharePayload(payload) {
    const textarea = getShareTextarea();
    if (!textarea) {
      return "";
    }
    const text = JSON.stringify(payload, null, 2);
    textarea.value = text;
    return text;
  }

  function normalizeShareState(rawState) {
    const base = isPlainObject(rawState) ? rawState : {};
    return {
      options: isPlainObject(base.options) ? base.options : {},
      choices: isPlainObject(base.choices) ? base.choices : {},
      checklist: isPlainObject(base.checklist) ? base.checklist : {},
      routeMode: typeof base.routeMode === "string" ? base.routeMode : state.routeMode,
      routes: isPlainObject(base.routes) ? base.routes : {},
      coords: isPlainObject(base.coords) ? base.coords : {},
      ratings: isPlainObject(base.ratings) ? base.ratings : {}
    };
  }

  function applySharePayload(payload) {
    if (!isPlainObject(payload)) {
      throw new Error("invalid payload");
    }
    const rawState = isPlainObject(payload.state) ? payload.state : payload;
    const next = normalizeShareState(rawState);
    state.options = next.options;
    state.choices = next.choices;
    state.checklist = next.checklist;
    state.routeMode = next.routeMode;
    state.routes = next.routes;
    state.coords = next.coords;
    state.ratings = next.ratings;
    saveStorage(STORAGE.options, state.options);
    saveStorage(STORAGE.choices, state.choices);
    saveStorage(STORAGE.checklist, state.checklist);
    saveStorage(STORAGE.routeMode, state.routeMode);
    saveStorage(STORAGE.routes, state.routes);
    saveStorage(STORAGE.coords, state.coords);
    saveStorage(STORAGE.ratings, state.ratings);
    render();
  }

  function downloadSharePayload(payload) {
    const text = JSON.stringify(payload, null, 2);
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `kyoto-trip-share-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function getRatingApiBase() {
    return String(data.ratingApi?.baseUrl || "").replace(/\/$/, "");
  }

  function getSyncApiBase() {
    return String(data.syncApi?.baseUrl || data.ratingApi?.baseUrl || "").replace(/\/$/, "");
  }

  function buildRatingUrl(query) {
    const base = getRatingApiBase();
    if (!base || !query) {
      return "";
    }
    return `${base}/api/places?query=${encodeURIComponent(query)}`;
  }

  function buildSyncUrl(code) {
    const base = getSyncApiBase();
    if (!base) {
      return "";
    }
    if (code) {
      return `${base}/api/sync?code=${encodeURIComponent(code)}`;
    }
    return `${base}/api/sync`;
  }

  async function fetchRatingUpdate(query) {
    const url = buildRatingUrl(query);
    if (!url) {
      throw new Error("rating api not configured");
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("rating api error");
    }
    return response.json();
  }

  async function fetchSyncSave(code, payload) {
    const url = buildSyncUrl();
    if (!url) {
      throw new Error("sync api not configured");
    }
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, payload })
    });
    if (!response.ok) {
      throw new Error("sync save failed");
    }
    return response.json();
  }

  async function fetchSyncLoad(code) {
    const url = buildSyncUrl(code);
    if (!url) {
      throw new Error("sync api not configured");
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("sync load failed");
    }
    return response.json();
  }

  function applyRatingUpdate(mapQuery, payload) {
    const key = mapQuery.trim().toLowerCase();
    const rating = typeof payload.rating === "number" ? payload.rating : null;
    const ratingCount =
      typeof payload.ratingCount === "number" ? payload.ratingCount : null;
    const popularity = payload.popularity || "";
    const updatedAt = payload.updatedAt || new Date().toISOString();
    state.ratings[key] = {
      rating,
      ratingCount,
      popularity,
      ratingSource: payload.source || "Google",
      ratingUpdatedAt: updatedAt
    };
    saveStorage(STORAGE.ratings, state.ratings);
  }

  function setSyncCode(code) {
    state.syncCode = code || "";
    saveStorage(STORAGE.syncCode, state.syncCode);
  }

  function setSyncMeta(meta) {
    state.syncMeta = meta || {};
    saveStorage(STORAGE.syncMeta, state.syncMeta);
  }

  function getSyncCodeInput() {
    return document.getElementById("syncCode");
  }

  function getSyncCodeValue() {
    const input = getSyncCodeInput();
    return input ? input.value.trim().toUpperCase() : "";
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getBulkRatingQueries() {
    const items = collectMapItems();
    const unique = new Set();
    items.forEach((item) => {
      if (item.query) {
        unique.add(item.query);
      }
    });
    return Array.from(unique);
  }

  function buildRouteKey(fromQuery, toQuery) {
    return `${normalizeKey(fromQuery)}__${normalizeKey(toQuery)}`;
  }

  function getRouteHint(fromQuery, toQuery) {
    const hints = data.routeHints || [];
    const fromKey = normalizeKey(fromQuery);
    const toKey = normalizeKey(toQuery);
    let hint = hints.find(
      (item) => normalizeKey(item.from) === fromKey && normalizeKey(item.to) === toKey
    );
    if (!hint) {
      hint = hints.find(
        (item) =>
          normalizeKey(item.from) === toKey &&
          normalizeKey(item.to) === fromKey &&
          item.bidirectional !== false
      );
    }
    return hint || null;
  }

  function formatDuration(min, max) {
    if (!min && !max) {
      return "정보 없음";
    }
    if (!max || min === max) {
      return `${min}분`;
    }
    return `${min}~${max}분`;
  }

  function formatRouteCost(option) {
    const min = option.costMin ?? 0;
    const max = option.costMax ?? min;
    if (min === 0 && max === 0) {
      return option.note ? option.note : "무료";
    }
    const formattedMin = min.toLocaleString("ja-JP");
    const formattedMax = max.toLocaleString("ja-JP");
    const base = min === max ? `${formattedMin}엔` : `${formattedMin}~${formattedMax}엔`;
    if (option.unit === "per_person") {
      const groupMin = min * data.travelers.count;
      const groupMax = max * data.travelers.count;
      const groupText =
        groupMin === groupMax
          ? `${groupMin.toLocaleString("ja-JP")}엔`
          : `${groupMin.toLocaleString("ja-JP")}~${groupMax.toLocaleString("ja-JP")}엔`;
      return `${base}/인 (5인 ${groupText})`;
    }
    if (option.unit === "per_car") {
      const cars = option.cars || 1;
      const groupMin = min * cars;
      const groupMax = max * cars;
      const groupText =
        groupMin === groupMax
          ? `${groupMin.toLocaleString("ja-JP")}엔`
          : `${groupMin.toLocaleString("ja-JP")}~${groupMax.toLocaleString("ja-JP")}엔`;
      return `${base}/대 (x${cars} = ${groupText})`;
    }
    return base;
  }

  function shouldShowOnline() {
    return state.routeMode === "hybrid" || state.routeMode === "online";
  }

  function buildDirectionsLink(fromQuery, toQuery, mode = "transit") {
    const origin = encodeURIComponent(fromQuery);
    const destination = encodeURIComponent(toQuery);
    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=${mode}`;
  }

  function formatDistance(distanceKm) {
    if (!distanceKm && distanceKm !== 0) {
      return "정보 없음";
    }
    return `${distanceKm.toFixed(1)}km`;
  }

  function formatDurationValue(durationMin) {
    if (!durationMin && durationMin !== 0) {
      return "정보 없음";
    }
    return `${Math.round(durationMin)}분`;
  }

  function renderRouteOptions(options) {
    if (!options || options.length === 0) {
      return `<div class="muted">오프라인 이동 정보 없음</div>`;
    }
    const hasDistance = options.some((option) => option.distanceKm);
    return `
      <div class="route-options">
        ${options
          .map(
            (option) => `
              <div class="route-option">
                <div>
                  <strong>${option.mode}</strong>
                  <span class="muted">${formatDuration(option.timeMin, option.timeMax)}</span>
                </div>
                <div class="muted">${formatRouteCost(option)}</div>
                ${option.distanceKm ? `<div class="muted">거리 ${option.distanceKm}km</div>` : ""}
                ${option.note ? `<div class="muted">${option.note}</div>` : ""}
              </div>
            `
          )
          .join("")}
      </div>
      ${hasDistance ? "" : `<div class="muted">거리 정보는 온라인 업데이트로 확인 가능</div>`}
    `;
  }

  function renderRouteCard(fromBlock, toBlock, index) {
    const fromQuery = fromBlock.location?.mapQuery;
    const toQuery = toBlock.location?.mapQuery;
    if (!fromQuery || !toQuery) {
      return "";
    }
    if (normalizeKey(fromQuery) === normalizeKey(toQuery)) {
      return "";
    }
    const hint = getRouteHint(fromQuery, toQuery);
    const offlineOptions = hint?.options || [];
    const onlineRoute = getOnlineRoute(fromQuery, toQuery);
    const onlineActive = shouldShowOnline();
    const showOffline = state.routeMode !== "online";
    const onlineLabel = onlineRoute
      ? `온라인(자동차) · ${formatDistance(onlineRoute.distanceKm)} · ${formatDurationValue(
          onlineRoute.durationMin
        )}`
      : "온라인 정보 없음";
    const updatedAt = onlineRoute?.updatedAt
      ? new Date(onlineRoute.updatedAt).toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit"
        })
      : null;

    return `
      <div class="route-card" style="--delay: ${index * 0.04 + 0.02}s">
        <div class="route-head">
          <div>
            <strong>이동</strong>
            <span class="muted">${fromBlock.location.name} → ${toBlock.location.name}</span>
          </div>
          <div class="route-actions">
            <a href="${buildDirectionsLink(fromQuery, toQuery)}" target="_blank" rel="noreferrer">동선 지도</a>
            ${
              onlineActive
                ? `<button type="button" data-route-update data-route-from="${fromQuery}" data-route-to="${toQuery}">실시간 업데이트</button>`
                : ""
            }
          </div>
        </div>
        ${
          onlineActive
            ? `<div class="route-online">
                <span>${onlineLabel}</span>
                ${updatedAt ? `<span class="muted">업데이트 ${updatedAt}</span>` : ""}
              </div>`
            : ""
        }
        ${showOffline ? renderRouteOptions(offlineOptions) : ""}
      </div>
    `;
  }

  function getOnlineRoute(fromQuery, toQuery) {
    const key = buildRouteKey(fromQuery, toQuery);
    return state.routes[key] || null;
  }

  async function geocodePlace(query) {
    const key = normalizeKey(query);
    if (state.coords[key]) {
      return state.coords[key];
    }
    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      query
    )}`;
    const response = await fetch(url, { headers: { "Accept-Language": "ja,en" } });
    const payload = await response.json();
    if (!payload || !payload.length) {
      return null;
    }
    const result = {
      lat: parseFloat(payload[0].lat),
      lon: parseFloat(payload[0].lon)
    };
    state.coords[key] = result;
    saveStorage(STORAGE.coords, state.coords);
    return result;
  }

  async function fetchOsrmRoute(fromCoords, toCoords, profile) {
    const url = `https://router.project-osrm.org/route/v1/${profile}/${fromCoords.lon},${fromCoords.lat};${toCoords.lon},${toCoords.lat}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    const payload = await response.json();
    if (!payload.routes || !payload.routes.length) {
      return null;
    }
    const route = payload.routes[0];
    return {
      distanceKm: route.distance / 1000,
      durationMin: route.duration / 60,
      geometry: route.geometry.coordinates.map((coord) => [coord[1], coord[0]])
    };
  }

  async function updateOnlineRoute(fromQuery, toQuery) {
    const profile = data.routeSettings?.onlineProfile || "driving";
    const fromCoords = await geocodePlace(fromQuery);
    const toCoords = await geocodePlace(toQuery);
    if (!fromCoords || !toCoords) {
      return null;
    }
    const result = await fetchOsrmRoute(fromCoords, toCoords, profile);
    if (!result) {
      return null;
    }
    const key = buildRouteKey(fromQuery, toQuery);
    state.routes[key] = {
      ...result,
      fromQuery,
      toQuery,
      updatedAt: Date.now(),
      profile
    };
    saveStorage(STORAGE.routes, state.routes);
    return state.routes[key];
  }

  function getOptionSelection(group) {
    const stored = state.options[group.id];
    if (group.mode === "multi") {
      if (Array.isArray(stored)) {
        return stored;
      }
      return Array.isArray(group.default) ? group.default : [];
    }
    return stored || group.default || group.options[0]?.id;
  }

  function setOptionSelection(groupId, mode, value, checked) {
    if (mode === "multi") {
      const current = new Set(state.options[groupId] || []);
      if (checked) {
        current.add(value);
      } else {
        current.delete(value);
      }
      state.options[groupId] = Array.from(current);
    } else {
      state.options[groupId] = value;
    }
    saveStorage(STORAGE.options, state.options);
  }

  function getChoiceSelection(blockId, group) {
    const key = `${blockId}:${group.id}`;
    const stored = state.choices[key];
    if (group.mode === "multi") {
      if (Array.isArray(stored)) {
        return stored;
      }
      return [];
    }
    return stored || null;
  }

  function setChoiceSelection(blockId, group, value, checked) {
    const key = `${blockId}:${group.id}`;
    if (group.mode === "multi") {
      const current = new Set(state.choices[key] || []);
      if (checked) {
        current.add(value);
      } else {
        current.delete(value);
      }
      state.choices[key] = Array.from(current);
    } else {
      state.choices[key] = value;
    }
    saveStorage(STORAGE.choices, state.choices);
  }

  function timeToMinutes(time) {
    if (!time) {
      return Number.MAX_SAFE_INTEGER;
    }
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  function buildDayBlocks(day) {
    const blocks = [...(day.baseBlocks || [])];
    (day.optionGroups || []).forEach((group) => {
      const selection = getOptionSelection(group);
      const selectedIds = group.mode === "multi" ? selection : [selection];
      group.options.forEach((option) => {
        if (selectedIds.includes(option.id)) {
          (option.blocks || []).forEach((block) => {
            blocks.push({ ...block, variant: option.label });
          });
        }
      });
    });

    return blocks
      .map((block, index) => ({ ...block, _order: index }))
      .sort((a, b) => {
        const ta = timeToMinutes(a.start);
        const tb = timeToMinutes(b.start);
        if (ta === tb) {
          return a._order - b._order;
        }
        return ta - tb;
      });
  }

  function renderOverview() {
    const meta = data.meta;
    const day1 = data.days.find((day) => day.id === "day1");
    const day1Group = day1.optionGroups?.[0];
    const day1Selection = day1Group
      ? day1Group.options.find((opt) => opt.id === getOptionSelection(day1Group))
      : null;
    const syncEnabled = Boolean(getSyncApiBase());
    const syncMeta = state.syncMeta || {};
    const syncDate = syncMeta.updatedAt ? formatDate(syncMeta.updatedAt) : "";

    sections.overview.innerHTML = `
      <div class="section-head">
        <div>
          <h2>여행 개요</h2>
          <p class="section-sub">${meta.subtitle}</p>
        </div>
      </div>
      <div class="grid two">
        <div class="card" style="--delay: 0.05s">
          <h3>${meta.title}</h3>
          <p class="muted">${meta.dateRange} · ${meta.travelers}</p>
          <ul>
            ${meta.notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </div>
        <div class="card" style="--delay: 0.1s">
          <h3>선택된 1일차 버전</h3>
          <p>${day1Selection ? day1Selection.label : ""}</p>
          <p class="muted">${day1Selection ? day1Selection.summary : ""}</p>
        </div>
      </div>
      <div class="grid three" style="margin-top: 20px;">
        ${data.passes
          .map(
            (pass, index) => `
              <div class="card" style="--delay: ${0.12 + index * 0.05}s">
                <h3>${pass.name}</h3>
                <p class="muted">${pass.detail}</p>
                <div class="chips">
                  ${pass.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="card share-card" style="margin-top: 20px; --delay: 0.32s">
        <h3>내 코스 공유</h3>
        <p class="muted">
          기기마다 저장된 선택 내용이 다를 수 있어요. 아래 JSON을 공유하면 같은 코스로 동기화됩니다.
        </p>
        <div class="share-actions">
          <button type="button" data-share-export>내보내기</button>
          <button type="button" data-share-copy>복사</button>
          <label class="share-upload">
            파일 가져오기
            <input type="file" data-share-file accept="application/json" />
          </label>
        </div>
        <textarea
          id="sharePayload"
          rows="6"
          placeholder="내보내기 또는 공유받은 JSON을 붙여넣어 주세요."
        ></textarea>
        <div class="share-actions">
          <button type="button" data-share-import>붙여넣기 가져오기</button>
          <button type="button" data-share-clear>지우기</button>
        </div>
        <div class="sync-card">
          <h4>공유 코드 동기화</h4>
          <p class="muted">
            ${syncEnabled ? "코드를 공유하면 여러 기기에서 동일한 코스를 불러올 수 있어요." : "동기화 기능은 서버 설정이 필요합니다."}
          </p>
          <div class="sync-actions">
            <input
              id="syncCode"
              type="text"
              placeholder="공유 코드 입력"
              value="${state.syncCode || ""}"
            />
            <button type="button" data-sync-create ${syncEnabled ? "" : "disabled"}>코드 생성+저장</button>
            <button type="button" data-sync-save ${syncEnabled ? "" : "disabled"}>저장</button>
            <button type="button" data-sync-load ${syncEnabled ? "" : "disabled"}>불러오기</button>
            <button type="button" data-sync-copy>복사</button>
          </div>
          ${syncDate ? `<div class="muted">최근 동기화: ${syncDate}</div>` : ""}
        </div>
      </div>
    `;
  }

  function renderOptionGroup(group) {
    const selection = getOptionSelection(group);
    const selectedIds = group.mode === "multi" ? selection : [selection];
    return `
      <div class="card option-group">
        <div>
          <h3>${group.title}</h3>
          ${group.help ? `<p class="muted">${group.help}</p>` : ""}
        </div>
        <div class="option-list">
          ${group.options
            .map((option) => {
              const checked = selectedIds.includes(option.id);
              return `
                <label class="option-item ${checked ? "selected" : ""}">
                  <input
                    type="${group.mode === "multi" ? "checkbox" : "radio"}"
                    name="option-${group.id}"
                    value="${option.id}"
                    data-option-group="${group.id}"
                    data-option-mode="${group.mode}"
                    ${checked ? "checked" : ""}
                  />
                  <div class="option-meta">
                    <strong>${option.label}</strong>
                    ${option.summary ? `<span>${option.summary}</span>` : ""}
                    ${checked ? `<span class="option-selected">선택됨</span>` : ""}
                  </div>
                </label>
              `;
            })
            .join("")}
        </div>
      </div>
    `;
  }

  function renderChoiceGroup(blockId, group) {
    const selection = getChoiceSelection(blockId, group);
    const selectedIds = group.mode === "multi" ? selection : [selection];
    const selectedLabels = group.options
      .filter((option) => selectedIds.includes(option.id))
      .map((option) => option.label);
    return `
      <div class="choice-group">
        <div class="choice-title">${group.title}</div>
        ${group.note ? `<div class="choice-note">${group.note}</div>` : ""}
        ${selectedLabels.length ? `<div class="choice-selected">선택됨: ${selectedLabels.join(", ")}</div>` : ""}
        ${group.options
          .map((option) => {
            const checked = selectedIds.includes(option.id);
            const placeInfo = option.mapQuery
              ? renderPlaceCard(option.mapQuery, option.label, { collapsible: true, showNearby: false })
              : "";
            return `
              <div class="choice-item ${checked ? "selected" : ""}">
                <label class="choice-label">
                  <input
                    type="${group.mode === "multi" ? "checkbox" : "radio"}"
                    name="choice-${blockId}-${group.id}"
                    value="${option.id}"
                    data-choice-group="${group.id}"
                    data-choice-mode="${group.mode}"
                    data-block-id="${blockId}"
                    ${checked ? "checked" : ""}
                  />
                  <div class="option-meta">
                    <strong>${option.label}</strong>
                    ${option.note ? `<span>${option.note}</span>` : ""}
                    ${option.menu ? `<span class="option-menu">메뉴: ${option.menu}</span>` : ""}
                    ${option.where ? `<span class="option-where">위치: ${option.where}</span>` : ""}
                    ${option.desc ? `<span class="option-desc">${option.desc}</span>` : ""}
                    ${checked ? `<span class="option-selected">선택됨</span>` : ""}
                  </div>
                </label>
                ${placeInfo}
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function formatCost(cost) {
    if (!cost) {
      return "";
    }
    const min = cost.min ?? cost.amount ?? 0;
    const max = cost.max ?? cost.amount ?? min;
    const formattedMin = min.toLocaleString("ja-JP");
    const formattedMax = max.toLocaleString("ja-JP");
    if (min === 0 && max === 0) {
      return "무료";
    }
    if (min === max) {
      return `${formattedMin}엔`;
    }
    return `${formattedMin}~${formattedMax}엔`;
  }

  function renderCosts(costs) {
    if (!costs || costs.length === 0) {
      return "";
    }
    return `
      <div class="block-row">
        <span class="label">예상 비용</span>
        <span>
          ${costs
            .map((cost) => `${cost.label}: ${formatCost(cost)}`)
            .join(" · ")}
        </span>
      </div>
    `;
  }

  function renderBlock(block, index, context = {}) {
    const tags = (block.tags || []).map((tag) => {
      const alert = tag.includes("현금") || tag.includes("대기");
      return `<span class="tag ${alert ? "alert" : ""}">${tag}</span>`;
    });
    let placeInfo = "";
    if (block.location && block.location.mapQuery) {
      const key = block.location.mapQuery.trim().toLowerCase();
      const detail = getPlaceDetails(block.location.mapQuery);
      const canShowNearby = detail && detail.nearby && detail.nearby.length;
      const showNearby = canShowNearby && context.nearbySet && !context.nearbySet.has(key);
      if (showNearby && context.nearbySet) {
        context.nearbySet.add(key);
      }
      placeInfo = renderPlaceCard(block.location.mapQuery, block.location.name, { showNearby });
    }

    return `
      <article class="block" style="--delay: ${index * 0.04}s">
        <div class="block-time">
          ${block.start ? `${block.start}~${block.end || ""}` : "시간 유동"}
        </div>
        <div class="block-body">
          <div class="block-step">순서 ${index + 1}</div>
          <div class="block-title">
            <h4>${block.title}</h4>
            ${block.variant ? `<span>${block.variant}</span>` : ""}
          </div>
          ${tags.length ? `<div class="chips">${tags.join("")}</div>` : ""}
          ${block.summary ? `<div class="block-summary">${block.summary}</div>` : ""}
          ${block.details ? `<ul>${block.details.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
          ${block.location ? `<div class="block-row"><span class="label">장소</span><span>${block.location.name}</span></div>` : ""}
          ${block.where ? `<div class="block-row"><span class="label">건물/층</span><span>${block.where}</span></div>` : ""}
          ${placeInfo}
          ${renderCosts(block.costs)}
          ${(block.choices || []).map((group) => renderChoiceGroup(block.id, group)).join("")}
        </div>
      </article>
    `;
  }

  function renderDay(day, section) {
    const optionGroups = (day.optionGroups || []).map(renderOptionGroup).join("");
    const blocks = buildDayBlocks(day);
    const context = { nearbySet: new Set() };
    const timeline = [];
    blocks.forEach((block, index) => {
      timeline.push(renderBlock(block, index, context));
      const next = blocks[index + 1];
      if (next && block.location?.mapQuery && next.location?.mapQuery) {
        timeline.push(renderRouteCard(block, next, index));
      }
    });
    const selectionSummary = (day.optionGroups || [])
      .map((group) => {
        const selection = getOptionSelection(group);
        const selectedIds = group.mode === "multi" ? selection : [selection];
        const selectedLabels = group.options
          .filter((option) => selectedIds.includes(option.id))
          .map((option) => option.label);
        if (!selectedLabels.length) {
          return null;
        }
        return `<div class="summary-row"><span class="label">${group.title}</span><span>${selectedLabels.join(", ")}</span></div>`;
      })
      .filter(Boolean)
      .join("");

    section.innerHTML = `
      <div class="section-head">
        <div>
          <h2>${day.label} · ${day.title}</h2>
          <p class="section-sub">${day.description || ""}</p>
        </div>
      </div>
      ${selectionSummary ? `<div class="card day-summary"><h3>현재 선택 요약</h3>${selectionSummary}</div>` : ""}
      ${optionGroups}
      <div class="timeline">
        ${timeline.join("")}
      </div>
      ${day.tips && day.tips.length
        ? `<div class="card" style="margin-top: 18px"><h3>운영 팁</h3><ul>${day.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul></div>`
        : ""}
    `;
  }

  function collectMapItems() {
    const items = new Map();

    data.days.forEach((day) => {
      const blocks = buildDayBlocks(day);
      blocks.forEach((block) => {
        if (block.location && block.location.mapQuery) {
          const key = block.location.mapQuery.toLowerCase();
          const detail = getPlaceDetails(block.location.mapQuery);
          const summary = detail?.summary
            ? detail.summary
            : detail?.features?.length
            ? `한눈에 보기: ${detail.features.join(", ")}`
            : "";
          items.set(key, {
            day: day.label,
            title: block.location.name || block.title,
            query: block.location.mapQuery,
            note: block.title,
            optional: false,
            rating: formatRating(detail),
            summary,
            popularity: detail?.popularity || "",
            ratingUpdatedAt: detail?.ratingUpdatedAt || "",
            building: detail?.building || "",
            floor: detail?.floor || "",
            area: detail?.area || ""
          });
          if (detail && Array.isArray(detail.nearby)) {
            detail.nearby.forEach((nearby) => {
              if (!nearby.mapQuery) {
                return;
              }
              const nearbyKey = nearby.mapQuery.toLowerCase();
              if (!items.has(nearbyKey)) {
                const nearbyDetail = getPlaceDetails(nearby.mapQuery) || nearby;
                const nearbySummary =
                  nearbyDetail?.summary ||
                  (nearbyDetail?.features?.length
                    ? `한눈에 보기: ${nearbyDetail.features.join(", ")}`
                    : "");
                items.set(nearbyKey, {
                  day: day.label,
                  title: nearby.name,
                  query: nearby.mapQuery,
                  note: `근처 추천 · ${block.title}`,
                  optional: true,
                  rating: formatRating(nearbyDetail),
                  summary: nearbySummary,
                  popularity: nearbyDetail?.popularity || "",
                  ratingUpdatedAt: nearbyDetail?.ratingUpdatedAt || "",
                  building: nearbyDetail?.building || nearby.building || "",
                  floor: nearbyDetail?.floor || nearby.floor || "",
                  area: nearbyDetail?.area || nearby.area || ""
                });
              }
            });
          }
        }
        (block.choices || []).forEach((group) => {
          const selection = getChoiceSelection(block.id, group);
          const selectedIds = group.mode === "multi" ? selection : [selection];
          group.options.forEach((option) => {
            if (!option.mapQuery) {
              return;
            }
            const key = option.mapQuery.toLowerCase();
            const isSelected = selectedIds.includes(option.id);
            const existing = items.get(key);
            const detail = getPlaceDetails(option.mapQuery);
            const summary = detail?.summary
              ? detail.summary
              : detail?.features?.length
              ? `한눈에 보기: ${detail.features.join(", ")}`
              : "";
            if (!existing || (existing.optional && isSelected)) {
              items.set(key, {
                day: day.label,
                title: option.label,
                query: option.mapQuery,
                note: block.title,
                optional: !isSelected,
                rating: formatRating(detail),
                summary,
                popularity: detail?.popularity || "",
                ratingUpdatedAt: detail?.ratingUpdatedAt || "",
                building: detail?.building || "",
                floor: detail?.floor || "",
                area: detail?.area || ""
              });
            }
          });
        });
      });
    });

    return Array.from(items.values());
  }

  function renderMap() {
    const items = collectMapItems();
    const grouped = items.reduce((acc, item) => {
      if (!acc[item.day]) {
        acc[item.day] = [];
      }
      acc[item.day].push(item);
      return acc;
    }, {});
    const routeModes = [
      {
        id: "offline",
        label: "오프라인",
        note: "사전 입력된 이동 정보만 사용"
      },
      {
        id: "hybrid",
        label: "하이브리드",
        note: "오프라인 기본 + 실시간 업데이트"
      },
      {
        id: "online",
        label: "온라인",
        note: "실시간 거리/시간만 표시"
      }
    ];

    sections.map.innerHTML = `
      <div class="section-head">
        <div>
          <h2>지도 · 공식 링크</h2>
          <p class="section-sub">현재 선택된 옵션 기준. 선택지를 바꾸면 리스트가 갱신됩니다. 평점은 수동 입력 값입니다.</p>
        </div>
      </div>
      <div class="card route-settings">
        <h3>경로 계산 모드</h3>
        <p class="muted">온라인 모드는 네트워크가 있을 때만 동작합니다.</p>
        <div class="route-mode-options">
          ${routeModes
            .map(
              (mode) => `
                <label class="route-mode">
                  <input
                    type="radio"
                    name="route-mode"
                    value="${mode.id}"
                    data-route-mode
                    ${state.routeMode === mode.id ? "checked" : ""}
                  />
                  <div>
                    <strong>${mode.label}</strong>
                    <div class="muted">${mode.note}</div>
                  </div>
                </label>
              `
            )
            .join("")}
        </div>
      </div>
      ${
        getRatingApiBase()
          ? `
            <div class="card rating-bulk">
              <h3>평점 일괄 업데이트</h3>
              <p class="muted">전체 장소 기준으로 한 번에 갱신합니다. 호출 횟수만큼 API가 사용됩니다.</p>
              <div class="rating-bulk-actions">
                <button type="button" data-rating-bulk>전체 업데이트</button>
                <span class="muted">대상: ${getBulkRatingQueries().length}곳</span>
              </div>
            </div>
          `
          : ""
      }
      ${Object.entries(grouped)
        .map(
          ([day, list], index) => `
            <div class="card" style="--delay: ${index * 0.05}s">
              <h3>${day}</h3>
              <div class="map-list">
                ${list
                  .map(
                    (item) => `
                      <div class="map-item">
                        <div>
                          <strong>${item.title}</strong>
                          ${item.optional ? `<span class="tag neutral">선택지</span>` : ""}
                          <div class="muted">${item.note}</div>
                          <div class="muted">평점: ${item.rating || "평점 입력 필요"}</div>
                          ${buildLocationText(item) ? `<div class="muted">위치: ${buildLocationText(item)}</div>` : ""}
                          ${item.popularity ? `<div class="muted">관광객: ${item.popularity}</div>` : ""}
                          ${item.ratingUpdatedAt ? `<div class="muted">업데이트: ${formatDate(item.ratingUpdatedAt)}</div>` : ""}
                          ${item.summary ? `<div class="muted">${item.summary}</div>` : ""}
                        </div>
                        <div class="map-actions">
                          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noreferrer">지도 열기</a>
                          <a href="https://www.google.com/search?q=${encodeURIComponent(`${item.query} 공식 사이트`)}" target="_blank" rel="noreferrer">공식 사이트 검색</a>
                          ${getRatingApiBase() ? `<button type="button" data-rating-update="${item.query}">평점 업데이트</button>` : ""}
                          <button type="button" data-copy="${item.query}">검색어 복사</button>
                        </div>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
          `
        )
        .join("")}
    `;
  }

  function normalizeCost(cost) {
    if (!cost) {
      return null;
    }
    const min = cost.min ?? cost.amount ?? 0;
    const max = cost.max ?? cost.amount ?? min;
    return { ...cost, min, max };
  }

  function computeBudget() {
    const summary = {
      total: { min: 0, max: 0 },
      cash: { min: 0, max: 0 },
      categories: {}
    };

    data.days.forEach((day) => {
      const blocks = buildDayBlocks(day);
      blocks.forEach((block) => {
        accumulateCosts(block.costs, summary);
        (block.choices || []).forEach((group) => {
          const selection = getChoiceSelection(block.id, group);
          const selectedIds = group.mode === "multi" ? selection : [selection];
          group.options.forEach((option) => {
            if (selectedIds.includes(option.id)) {
              accumulateCosts([option.cost], summary);
            }
          });
        });
      });
    });

    return summary;
  }

  function accumulateCosts(costs, summary) {
    if (!costs) {
      return;
    }
    costs.forEach((cost) => {
      const normalized = normalizeCost(cost);
      if (!normalized) {
        return;
      }
      const multiplier = normalized.unit === "per_person" ? data.travelers.count : 1;
      const min = normalized.min * multiplier;
      const max = normalized.max * multiplier;
      summary.total.min += min;
      summary.total.max += max;
      if (normalized.payment === "cash") {
        summary.cash.min += min;
        summary.cash.max += max;
      }
      const category = normalized.category || "etc";
      if (!summary.categories[category]) {
        summary.categories[category] = { min: 0, max: 0 };
      }
      summary.categories[category].min += min;
      summary.categories[category].max += max;
    });
  }

  function formatRange(range) {
    const min = range.min;
    const max = range.max;
    if (!min && !max) {
      return "-";
    }
    const formattedMin = min.toLocaleString("ja-JP");
    const formattedMax = max.toLocaleString("ja-JP");
    if (min === max) {
      return `${formattedMin}엔`;
    }
    return `${formattedMin}~${formattedMax}엔`;
  }

  function renderBudget() {
    const summary = computeBudget();
    const categories = Object.entries(summary.categories);

    sections.budget.innerHTML = `
      <div class="section-head">
        <div>
          <h2>예산 요약 (5인 기준)</h2>
          <p class="section-sub">선택된 옵션/식당 기준 예상 범위입니다.</p>
        </div>
      </div>
      <div class="budget-grid">
        <div class="card budget-card" style="--delay: 0.05s">
          <h3>총합 예상</h3>
          <p class="muted">${formatRange(summary.total)}</p>
        </div>
        <div class="card budget-card" style="--delay: 0.1s">
          <h3>현금 필요 예상</h3>
          <p class="muted">${formatRange(summary.cash)}</p>
        </div>
      </div>
      <div class="grid three" style="margin-top: 18px;">
        ${categories
          .map(
            ([category, range], index) => `
              <div class="card" style="--delay: ${0.12 + index * 0.05}s">
                <h3>${categoryLabel(category)}</h3>
                <p class="muted">${formatRange(range)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }

  function categoryLabel(category) {
    const labels = {
      meal: "식사",
      transport: "교통",
      ticket: "입장료",
      shopping: "쇼핑",
      etc: "기타"
    };
    return labels[category] || category;
  }

  function renderChecklist() {
    const grouped = data.checklist.reduce((acc, item) => {
      const key = `${item.day}:${item.category}`;
      if (!acc[key]) {
        acc[key] = { day: item.day, category: item.category, items: [] };
      }
      acc[key].items.push(item);
      return acc;
    }, {});

    sections.checklist.innerHTML = `
      <div class="section-head">
        <div>
          <h2>체크리스트</h2>
          <p class="section-sub">여행 중 확인이 필요한 작업을 체크하세요.</p>
        </div>
      </div>
      <div class="grid two">
        ${Object.values(grouped)
          .map((group, index) => {
            const dayLabel = data.days.find((day) => day.id === group.day)?.label || group.day;
            return `
              <div class="card" style="--delay: ${index * 0.05}s">
                <h3>${dayLabel} · ${group.category}</h3>
                <div class="checklist-group">
                  ${group.items
                    .map(
                      (item) => `
                        <label class="checklist-item">
                          <input
                            type="checkbox"
                            data-checklist="${item.id}"
                            ${state.checklist[item.id] ? "checked" : ""}
                          />
                          <span>${item.label}</span>
                        </label>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function render() {
    renderOverview();
    renderDay(data.days[0], sections.day1);
    renderDay(data.days[1], sections.day2);
    renderDay(data.days[2], sections.day3);
    renderMap();
    renderBudget();
    renderChecklist();
  }

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("[data-option-group]")) {
      setOptionSelection(
        target.dataset.optionGroup,
        target.dataset.optionMode,
        target.value,
        target.checked
      );
      render();
    }

    if (target.matches("[data-choice-group]")) {
      setChoiceSelection(
        target.dataset.blockId,
        { id: target.dataset.choiceGroup, mode: target.dataset.choiceMode },
        target.value,
        target.checked
      );
      render();
    }

    if (target.matches("[data-checklist]")) {
      state.checklist[target.dataset.checklist] = target.checked;
      saveStorage(STORAGE.checklist, state.checklist);
      renderChecklist();
    }

    if (target.matches("[data-route-mode]")) {
      state.routeMode = target.value;
      saveStorage(STORAGE.routeMode, state.routeMode);
      render();
      showToast("경로 모드가 변경됐어요");
    }

    if (target.matches("[data-share-file]")) {
      const file = target.files && target.files[0];
      if (!file) {
        return;
      }
      file
        .text()
        .then((text) => {
          const payload = JSON.parse(text);
          applySharePayload(payload);
          writeSharePayload(payload);
          showToast("공유 데이터 적용 완료");
        })
        .catch(() => {
          showToast("파일 가져오기 실패");
        })
        .finally(() => {
          target.value = "";
        });
    }
  });

  document.addEventListener("click", (event) => {
    const syncCreate = event.target.closest("[data-sync-create]");
    if (syncCreate) {
      if (!getSyncApiBase()) {
        showToast("동기화 API 설정 필요");
        return;
      }
      syncCreate.disabled = true;
      syncCreate.textContent = "생성 중...";
      const payload = buildSharePayload();
      fetchSyncSave("", payload)
        .then((result) => {
          setSyncCode(result.code);
          setSyncMeta({ updatedAt: result.updatedAt });
          render();
          showToast(`공유 코드 생성 완료: ${result.code}`);
        })
        .catch(() => {
          showToast("코드 생성 실패");
        })
        .finally(() => {
          syncCreate.disabled = false;
          syncCreate.textContent = "코드 생성+저장";
        });
      return;
    }

    const syncSave = event.target.closest("[data-sync-save]");
    if (syncSave) {
      if (!getSyncApiBase()) {
        showToast("동기화 API 설정 필요");
        return;
      }
      const code = getSyncCodeValue();
      if (!code) {
        showToast("공유 코드를 입력하세요");
        return;
      }
      syncSave.disabled = true;
      syncSave.textContent = "저장 중...";
      const payload = buildSharePayload();
      fetchSyncSave(code, payload)
        .then((result) => {
          setSyncCode(result.code);
          setSyncMeta({ updatedAt: result.updatedAt });
          render();
          showToast("동기화 저장 완료");
        })
        .catch(() => {
          showToast("동기화 저장 실패");
        })
        .finally(() => {
          syncSave.disabled = false;
          syncSave.textContent = "저장";
        });
      return;
    }

    const syncLoad = event.target.closest("[data-sync-load]");
    if (syncLoad) {
      if (!getSyncApiBase()) {
        showToast("동기화 API 설정 필요");
        return;
      }
      const code = getSyncCodeValue();
      if (!code) {
        showToast("공유 코드를 입력하세요");
        return;
      }
      syncLoad.disabled = true;
      syncLoad.textContent = "불러오는 중...";
      fetchSyncLoad(code)
        .then((result) => {
          if (!result.payload) {
            throw new Error("missing payload");
          }
          applySharePayload(result.payload);
          setSyncCode(result.code || code);
          setSyncMeta({ updatedAt: result.updatedAt });
          writeSharePayload(result.payload);
          render();
          showToast("동기화 불러오기 완료");
        })
        .catch(() => {
          showToast("동기화 불러오기 실패");
        })
        .finally(() => {
          syncLoad.disabled = false;
          syncLoad.textContent = "불러오기";
        });
      return;
    }

    const syncCopy = event.target.closest("[data-sync-copy]");
    if (syncCopy) {
      const code = getSyncCodeValue() || state.syncCode;
      if (!code) {
        showToast("공유 코드가 없습니다");
        return;
      }
      navigator.clipboard
        .writeText(code)
        .then(() => showToast("공유 코드 복사 완료"))
        .catch(() => showToast("복사 실패"));
      return;
    }

    const bulkButton = event.target.closest("[data-rating-bulk]");
    if (bulkButton) {
      if (!getRatingApiBase()) {
        showToast("평점 API 설정 필요");
        return;
      }
      const queries = getBulkRatingQueries();
      if (!queries.length) {
        showToast("업데이트할 장소가 없습니다");
        return;
      }
      bulkButton.disabled = true;
      let success = 0;
      let failed = 0;
      (async () => {
        for (let index = 0; index < queries.length; index += 1) {
          bulkButton.textContent = `업데이트 중 ${index + 1}/${queries.length}`;
          try {
            const payload = await fetchRatingUpdate(queries[index]);
            applyRatingUpdate(queries[index], payload);
            success += 1;
          } catch (error) {
            failed += 1;
          }
          await sleep(350);
        }
        render();
        const failureNote = failed ? ` · 실패 ${failed}곳` : "";
        showToast(`평점 업데이트 완료 (성공 ${success}곳${failureNote})`);
      })();
      return;
    }

    const ratingButton = event.target.closest("[data-rating-update]");
    if (ratingButton) {
      const query = ratingButton.dataset.ratingUpdate;
      if (!query) {
        return;
      }
      if (!getRatingApiBase()) {
        showToast("평점 API 설정 필요");
        return;
      }
      ratingButton.disabled = true;
      ratingButton.textContent = "업데이트 중...";
      fetchRatingUpdate(query)
        .then((payload) => {
          applyRatingUpdate(query, payload);
          render();
          showToast("평점 업데이트 완료");
        })
        .catch(() => {
          showToast("평점 업데이트 실패");
        })
        .finally(() => {
          ratingButton.disabled = false;
          ratingButton.textContent = "평점 업데이트";
        });
      return;
    }

    const shareExport = event.target.closest("[data-share-export]");
    if (shareExport) {
      const payload = buildSharePayload();
      writeSharePayload(payload);
      downloadSharePayload(payload);
      showToast("공유 파일 저장 완료");
      return;
    }

    const shareCopy = event.target.closest("[data-share-copy]");
    if (shareCopy) {
      const payload = buildSharePayload();
      const text = writeSharePayload(payload);
      if (!text) {
        showToast("복사할 데이터 없음");
        return;
      }
      navigator.clipboard
        .writeText(text)
        .then(() => showToast("공유 데이터 복사 완료"))
        .catch(() => showToast("복사 실패"));
      return;
    }

    const shareImport = event.target.closest("[data-share-import]");
    if (shareImport) {
      const textarea = getShareTextarea();
      const raw = textarea ? textarea.value.trim() : "";
      if (!raw) {
        showToast("붙여넣기 내용이 비어 있음");
        return;
      }
      try {
        const payload = JSON.parse(raw);
        applySharePayload(payload);
        writeSharePayload(payload);
        showToast("공유 데이터 적용 완료");
      } catch (error) {
        showToast("JSON 파싱 실패");
      }
      return;
    }

    const shareClear = event.target.closest("[data-share-clear]");
    if (shareClear) {
      const textarea = getShareTextarea();
      if (textarea) {
        textarea.value = "";
        showToast("내용이 지워졌어요");
      }
      return;
    }

    const updateButton = event.target.closest("[data-route-update]");
    if (updateButton) {
      const fromQuery = updateButton.dataset.routeFrom;
      const toQuery = updateButton.dataset.routeTo;
      if (!fromQuery || !toQuery) {
        return;
      }
      if (!navigator.onLine) {
        showToast("온라인 상태에서만 업데이트 가능");
        return;
      }
      updateButton.disabled = true;
      updateButton.textContent = "업데이트 중...";
      updateOnlineRoute(fromQuery, toQuery)
        .then(() => {
          render();
          showToast("경로 업데이트 완료");
        })
        .catch(() => {
          showToast("경로 업데이트 실패");
        })
        .finally(() => {
          updateButton.disabled = false;
          updateButton.textContent = "실시간 업데이트";
        });
      return;
    }

    const button = event.target.closest("[data-copy]");
    if (!button) {
      return;
    }
    const text = button.dataset.copy;
    if (!text) {
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("검색어 복사 완료"))
      .catch(() => showToast("복사 실패"));
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js");
    });
  }

  render();
})();
