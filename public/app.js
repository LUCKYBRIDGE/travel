(() => {
  const data = window.TRIP_DATA;
  const sections = {
    overview: document.getElementById("overview"),
    day1: document.getElementById("day1"),
    day2: document.getElementById("day2"),
    day3: document.getElementById("day3"),
    confirmedDay1: document.getElementById("confirmed-day1"),
    confirmedDay2: document.getElementById("confirmed-day2"),
    confirmedDay3: document.getElementById("confirmed-day3"),
    map: document.getElementById("map"),
    budget: document.getElementById("budget"),
    checklist: document.getElementById("checklist")
  };
  const toast = document.getElementById("toast");

  const STORAGE = {
    options: "travel:options",
    choices: "travel:choices",
    extras: "travel:extras",
    timeOverrides: "travel:time-overrides",
    customStops: "travel:custom-stops",
    orderOverrides: "travel:order-overrides",
    checklist: "travel:checklist",
    routeMode: "travel:route-mode",
    coords: "travel:coords",
    routes: "travel:routes",
    ratings: "travel:ratings",
    ratingsMeta: "travel:ratings-meta",
    mapFilters: "travel:map-filters",
    navCollapsed: "travel:nav-collapsed",
    showAllSections: "travel:show-all-sections",
    compactView: "travel:compact-view",
    syncCode: "travel:sync-code",
    syncMeta: "travel:sync-meta"
  };

  const state = {
    options: loadStorage(STORAGE.options, {}),
    choices: loadStorage(STORAGE.choices, {}),
    extras: loadStorage(STORAGE.extras, {}),
    timeOverrides: loadStorage(STORAGE.timeOverrides, {}),
    customStops: loadStorage(STORAGE.customStops, {}),
    orderOverrides: loadStorage(STORAGE.orderOverrides, {}),
    checklist: loadStorage(STORAGE.checklist, {}),
    routeMode: loadStorage(STORAGE.routeMode, data.routeSettings?.mode || "hybrid"),
    coords: loadStorage(STORAGE.coords, {}),
    routes: loadStorage(STORAGE.routes, {}),
    ratings: loadStorage(STORAGE.ratings, {}),
    ratingsMeta: loadStorage(STORAGE.ratingsMeta, {}),
    mapFilters: loadStorage(STORAGE.mapFilters, {}),
    navCollapsed: loadStorage(STORAGE.navCollapsed, false),
    showAllSections: loadStorage(STORAGE.showAllSections, false),
    compactView: loadStorage(STORAGE.compactView, false),
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

  const CATEGORY_DEFS = [
    {
      id: "meal",
      label: "식사",
      className: "tag-meal",
      keywords: [
        "간식",
        "편의점",
        "식사",
        "맛집",
        "스시",
        "초밥",
        "우동",
        "라멘",
        "스키야키",
        "야키니쿠",
        "돈카츠",
        "덮밥",
        "규동",
        "장어",
        "스테이크",
        "정식",
        "restaurant",
        "food",
        "sushi",
        "ramen",
        "udon",
        "yakiniku",
        "sukiyaki",
        "tonkatsu",
        "donburi",
        "steak"
      ]
    },
    {
      id: "cafe",
      label: "카페",
      className: "tag-cafe",
      keywords: [
        "카페",
        "커피",
        "카페인",
        "디저트",
        "말차",
        "라떼",
        "베이커리",
        "빵",
        "coffee",
        "cafe",
        "dessert",
        "tea"
      ]
    },
    {
      id: "shopping",
      label: "쇼핑",
      className: "tag-shopping",
      keywords: ["쇼핑", "아울렛", "몰", "상점", "백화점", "포르타", "outlet", "mall", "shop", "store"]
    },
    {
      id: "market",
      label: "시장",
      className: "tag-market",
      keywords: ["시장", "장날", "상점가", "market"]
    },
    {
      id: "sight",
      label: "관광",
      className: "tag-sight",
      keywords: [
        "사찰",
        "신사",
        "성",
        "정원",
        "타워",
        "전망",
        "야경",
        "강",
        "산책",
        "골목",
        "거리",
        "temple",
        "shrine",
        "castle",
        "garden",
        "tower",
        "river",
        "street",
        "alley",
        "beach",
        "park"
      ]
    },
    {
      id: "transport",
      label: "교통",
      className: "tag-transport",
      keywords: [
        "역",
        "공항",
        "하루카",
        "지하철",
        "버스",
        "은행",
        "atm",
        "ticket",
        "station",
        "airport",
        "jr",
        "교통"
      ]
    },
    {
      id: "stay",
      label: "숙소",
      className: "tag-stay",
      keywords: ["호텔", "숙소", "hotel", "stay", "inn"]
    }
  ];
  const CATEGORY_DEFAULTS = {
    meal: {
      features: ["대표 메뉴 중심", "좌석 식사/테이크아웃 병행"],
      pros: ["가족 단위 이용 무난"],
      cons: ["피크 시간 대기", "가격대 편차"],
      tips: ["식사 전 웨이팅 확인", "메뉴 1~2개만 먼저 주문해보고 조정"]
    },
    cafe: {
      features: ["음료/디저트 중심", "짧은 휴식에 적합"],
      pros: ["잠깐 쉬기 좋음"],
      cons: ["좌석 제한 가능"],
      tips: ["피크 시간은 테이크아웃 추천", "모바일 주문 가능 여부 확인"]
    },
    shopping: {
      features: ["매장 구성 다양", "이동 동선 길 수 있음"],
      pros: ["쇼핑 선택 폭 넓음"],
      cons: ["혼잡 가능"],
      tips: ["우선순위 매장 먼저 방문", "사이즈/재고는 매장 직원에 문의"]
    },
    market: {
      features: ["먹거리/잡화 혼합", "현장 분위기 체험"],
      pros: ["로컬 분위기 체험"],
      cons: ["현금 필요 가능", "혼잡"],
      tips: ["소액 현금 준비", "먹거리는 1~2개씩 나눠서 시식"]
    },
    sight: {
      features: ["야외 관람 중심", "사진 포인트 존재"],
      pros: ["관광 만족도 높음"],
      cons: ["날씨 영향", "도보 이동"],
      tips: ["사진 포인트 먼저 확인", "해질 무렵 시간대 추천"]
    },
    transport: {
      features: ["이동 동선 중심", "안내 표지 확인 필요"],
      pros: ["시간 절약에 도움"],
      cons: ["혼잡 가능"],
      tips: ["표지판/층 안내 먼저 확인", "피크 시간 여유 있게 이동"]
    },
    stay: {
      features: ["체크인/조식 동선", "짐 보관 편의"],
      pros: ["동선 안정적"],
      cons: ["체크인 시간 혼잡"],
      tips: ["체크인 전 짐 보관 확인", "조식 시간 피크 피하기"]
    }
  };
  const DEFAULT_MAP_FILTERS = {
    showOptions: false,
    showNearby: false,
    categories: []
  };

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

  function sanitizeTag(text) {
    if (!text) {
      return "";
    }
    return String(text).replace(/[\\s·•・/()（）.,:]/g, "");
  }

  function fillList(base, extras, minCount) {
    const result = Array.isArray(base) ? [...base] : [];
    const pool = Array.isArray(extras) ? extras : [];
    for (const item of pool) {
      if (result.length >= minCount) {
        break;
      }
      if (item && !result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  }

  function enhanceDetail(detail, category) {
    if (!detail) {
      return detail;
    }
    const defaults = category ? CATEGORY_DEFAULTS[category.id] : null;
    if (!defaults) {
      return detail;
    }
    return {
      ...detail,
      features: fillList(detail.features, defaults.features, 3),
      pros: fillList(detail.pros, defaults.pros, 2),
      cons: fillList(detail.cons, defaults.cons, 2),
      tips: fillList(detail.tips, defaults.tips, 2)
    };
  }

  function resolveCategory(detail, fallbackText, fallbackType) {
    if (detail && detail.category) {
      const match = CATEGORY_DEFS.find((item) => item.id === detail.category);
      if (match) {
        return match;
      }
    }
    const source = `${fallbackText || ""} ${fallbackType || ""} ${
      detail?.summary || ""
    } ${(detail?.features || []).join(" ")}`.toLowerCase();
    for (const category of CATEGORY_DEFS) {
      if (category.keywords.some((keyword) => source.includes(keyword.toLowerCase()))) {
        return category;
      }
    }
    return null;
  }

  function buildHashtags(detail, category) {
    const tags = [];
    if (Array.isArray(detail?.tags) && detail.tags.length) {
      tags.push(...detail.tags);
    } else if (Array.isArray(detail?.features)) {
      tags.push(...detail.features);
    }
    const normalized = tags
      .map((tag) => sanitizeTag(tag))
      .filter(Boolean)
      .filter((tag) => tag.length > 1);
    const unique = [];
    normalized.forEach((tag) => {
      if (!unique.includes(tag)) {
        unique.push(tag);
      }
    });
    const limited = unique.slice(0, 4);
    if (category?.label) {
      const categoryTag = sanitizeTag(category.label);
      return limited.filter((tag) => tag !== categoryTag);
    }
    return limited;
  }

  function renderTagRow(category, tags) {
    if (!category && (!tags || tags.length === 0)) {
      return "";
    }
    const categoryChip = category
      ? `<span class="tag-chip ${category.className}">#${category.label}</span>`
      : "";
    const otherChips = (tags || [])
      .map((tag) => `<span class="tag-chip neutral">#${tag}</span>`)
      .join("");
    return `<div class="tag-row">${categoryChip}${otherChips}</div>`;
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

  function normalizeMapFilters(raw) {
    const base = isPlainObject(raw) ? raw : {};
    const categories = Array.isArray(base.categories)
      ? base.categories.filter((id) => CATEGORY_DEFS.some((category) => category.id === id))
      : [];
    return {
      showOptions: Boolean(base.showOptions),
      showNearby: Boolean(base.showNearby),
      categories
    };
  }

  function getMapFilters() {
    return normalizeMapFilters(state.mapFilters || DEFAULT_MAP_FILTERS);
  }

  function setMapFilters(next) {
    const normalized = normalizeMapFilters(next);
    state.mapFilters = normalized;
    saveStorage(STORAGE.mapFilters, normalized);
    return normalized;
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

  function buildNearbyEntries(nearby) {
    return nearby.map((item) => {
      const rawDetail = getPlaceDetails(item.mapQuery) || item;
      const category = resolveCategory(rawDetail, item.name, item.type);
      const detail = enhanceDetail(rawDetail, category);
      return { item, detail, category };
    });
  }

  function renderExtraToggle(context, mapQuery, label, source) {
    if (!context?.dayId || !context?.blockId || !mapQuery) {
      return "";
    }
    const selected = isExtraSelected(context.dayId, context.blockId, mapQuery);
    const text = selected ? "코스확정에 추가됨" : "코스확정에 추가";
    return `
      <button
        type="button"
        data-extra-toggle
        data-extra-day="${context.dayId}"
        data-extra-block="${context.blockId}"
        data-extra-query="${mapQuery}"
        data-extra-label="${label || mapQuery}"
        data-extra-source="${source || ""}"
        aria-pressed="${selected ? "true" : "false"}"
      >
        ${text}
      </button>
    `;
  }

  function renderNearbyCard(entry, context) {
    const { item, detail, category } = entry;
    const tags = buildHashtags(detail, category);
    const locationLines = [
      detail.building || item.building ? renderDetailLine("건물", detail.building || item.building) : "",
      detail.floor || item.floor ? renderDetailLine("층", detail.floor || item.floor) : "",
      detail.area || item.area ? renderDetailLine("구역", detail.area || item.area) : ""
    ]
      .filter(Boolean)
      .join("");
    const extraToggle = renderExtraToggle(context, item.mapQuery, item.name, "nearby");
    return `
      <div class="nearby-card">
        <div class="nearby-header">
          <strong>${item.name}</strong>
          ${item.type ? `<span class="tag neutral">${item.type}</span>` : ""}
        </div>
        <div class="muted">평점: ${formatRating(detail)}</div>
        ${detail.placeName ? renderDetailLine("지도 표기", detail.placeName) : ""}
        ${renderTagRow(category, tags)}
        ${locationLines}
        ${renderDetailLine("즐기는 방법", detail.tips, "정보 준비중")}
        ${renderDetailLine("특징", detail.features, "정보 준비중")}
        ${renderDetailLine("장점", detail.pros, "정보 준비중")}
        ${renderDetailLine("단점", detail.cons, "정보 준비중")}
        ${detail.popularity ? renderDetailLine("관광객", detail.popularity) : ""}
        ${detail.ratingUpdatedAt ? renderDetailLine("업데이트", formatDate(detail.ratingUpdatedAt)) : ""}
        <div class="map-actions">
          <a href="${buildMapLink(item.mapQuery)}" target="_blank" rel="noreferrer">지도 열기</a>
          <button type="button" data-copy="${item.mapQuery}">검색어 복사</button>
          ${extraToggle}
        </div>
      </div>
    `;
  }

  function renderNearbyList(entries, context) {
    if (!entries || entries.length === 0) {
      return "";
    }
    return `
      <div class="nearby-list">
        ${entries.map((entry) => renderNearbyCard(entry, context)).join("")}
      </div>
    `;
  }

  function renderNearbySection(nearby, options = {}) {
    if (!nearby || nearby.length === 0) {
      return "";
    }
    const entries = buildNearbyEntries(nearby);
    const primaryCategories = Array.isArray(options.primaryCategories)
      ? options.primaryCategories
      : [];
    const extraContext = options.extraContext || null;
    if (primaryCategories.length === 0) {
      return `
        <details class="nearby-toggle">
          <summary>주변 장소 보기</summary>
          ${renderNearbyList(entries, extraContext)}
        </details>
      `;
    }
    const primary = entries.filter((entry) => primaryCategories.includes(entry.category?.id));
    const extra = entries.filter((entry) => !primaryCategories.includes(entry.category?.id));
    const primaryBlock = primary.length
      ? `
          <div class="nearby-section">
            <div class="nearby-title">현재 일정에 맞는 주변 장소</div>
            ${renderNearbyList(primary, extraContext)}
          </div>
        `
      : "";
    const extraBlock = extra.length
      ? `
          <details class="nearby-toggle">
            <summary>주변 장소 더보기</summary>
            ${renderNearbyList(extra, extraContext)}
          </details>
        `
      : "";
    return `${primaryBlock}${extraBlock}`;
  }

  function renderPlaceCard(mapQuery, title, options = {}) {
    if (!mapQuery) {
      return "";
    }
    const rawDetail = getPlaceDetails(mapQuery) || {};
    const category = resolveCategory(rawDetail, title || mapQuery, rawDetail.type);
    const detail = enhanceDetail(rawDetail, category);
    const tags = buildHashtags(detail, category);
    const extraContext = options.extraContext || null;
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
      ${detail.placeName ? renderDetailLine("지도 표기", detail.placeName) : ""}
      ${renderTagRow(category, tags)}
      ${summary ? `<div class="place-summary">${summary}</div>` : ""}
      ${locationLines}
      ${renderDetailLine("즐기는 방법", detail.tips, "정보 준비중")}
      ${renderDetailLine("특징", detail.features, "정보 준비중")}
      ${renderDetailLine("장점", detail.pros, "정보 준비중")}
      ${renderDetailLine("단점", detail.cons, "정보 준비중")}
      ${detail.popularity ? renderDetailLine("관광객", detail.popularity) : ""}
      ${detail.ratingUpdatedAt ? renderDetailLine("업데이트", formatDate(detail.ratingUpdatedAt)) : ""}
      ${renderLinks(detail, mapQuery)}
      ${
        canManualRatings()
          ? `<div class="place-actions"><button type="button" data-rating-update="${mapQuery}">평점 업데이트</button></div>`
          : ""
      }
      ${
        options.showNearby
          ? renderNearbySection(detail.nearby, {
              primaryCategories: options.nearbyCategories,
              extraContext
            })
          : ""
      }
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

  function buildLocationSummary(detail) {
    if (!detail) {
      return "";
    }
    const parts = [];
    if (detail.building) {
      parts.push(detail.building);
    }
    if (detail.floor) {
      parts.push(detail.floor);
    }
    if (detail.area) {
      parts.push(detail.area);
    }
    return parts.join(" · ");
  }

  function normalizeKey(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getExtrasForBlock(dayId, blockId) {
    const dayExtras = state.extras && state.extras[dayId] ? state.extras[dayId] : {};
    const blockExtras = dayExtras && dayExtras[blockId] ? dayExtras[blockId] : {};
    return Object.values(blockExtras || {});
  }

  function isExtraSelected(dayId, blockId, mapQuery) {
    if (!dayId || !blockId || !mapQuery) {
      return false;
    }
    const key = normalizeKey(mapQuery);
    return Boolean(state.extras?.[dayId]?.[blockId]?.[key]);
  }

  function toggleExtraSelection(dayId, blockId, payload) {
    if (!dayId || !blockId || !payload?.mapQuery) {
      return false;
    }
    const key = normalizeKey(payload.mapQuery);
    if (!state.extras || typeof state.extras !== "object") {
      state.extras = {};
    }
    if (!state.extras[dayId] || typeof state.extras[dayId] !== "object") {
      state.extras[dayId] = {};
    }
    if (!state.extras[dayId][blockId] || typeof state.extras[dayId][blockId] !== "object") {
      state.extras[dayId][blockId] = {};
    }
    const exists = Boolean(state.extras[dayId][blockId][key]);
    if (exists) {
      delete state.extras[dayId][blockId][key];
    } else {
      state.extras[dayId][blockId][key] = {
        mapQuery: payload.mapQuery,
        label: payload.label || payload.mapQuery,
        source: payload.source || ""
      };
    }
    saveStorage(STORAGE.extras, state.extras);
    return !exists;
  }

  function getTimeOverride(dayId, blockId) {
    if (!dayId || !blockId) {
      return null;
    }
    return state.timeOverrides?.[dayId]?.[blockId] || null;
  }

  function setTimeOverride(dayId, blockId, start, end) {
    if (!dayId || !blockId) {
      return;
    }
    if (!state.timeOverrides || typeof state.timeOverrides !== "object") {
      state.timeOverrides = {};
    }
    if (!state.timeOverrides[dayId] || typeof state.timeOverrides[dayId] !== "object") {
      state.timeOverrides[dayId] = {};
    }
    const normalizedStart = start || "";
    const normalizedEnd = end || "";
    if (!normalizedStart && !normalizedEnd) {
      delete state.timeOverrides[dayId][blockId];
    } else {
      state.timeOverrides[dayId][blockId] = {
        start: normalizedStart,
        end: normalizedEnd
      };
    }
    saveStorage(STORAGE.timeOverrides, state.timeOverrides);
  }

  function applyTimeOverride(dayId, block) {
    const override = getTimeOverride(dayId, block.id);
    const baseStart = block.start || "";
    const baseEnd = block.end || "";
    if (!override) {
      return { ...block, _baseStart: baseStart, _baseEnd: baseEnd };
    }
    return {
      ...block,
      _baseStart: baseStart,
      _baseEnd: baseEnd,
      start: override.start || baseStart,
      end: override.end || baseEnd
    };
  }

  function getCustomStops(dayId) {
    return Array.isArray(state.customStops?.[dayId]) ? state.customStops[dayId] : [];
  }

  function setCustomStops(dayId, stops) {
    if (!state.customStops || typeof state.customStops !== "object") {
      state.customStops = {};
    }
    state.customStops[dayId] = stops;
    saveStorage(STORAGE.customStops, state.customStops);
  }

  function getOrderOverrides(dayId) {
    return state.orderOverrides?.[dayId] || {};
  }

  function setOrderOverrides(dayId, overrides) {
    if (!state.orderOverrides || typeof state.orderOverrides !== "object") {
      state.orderOverrides = {};
    }
    state.orderOverrides[dayId] = overrides;
    saveStorage(STORAGE.orderOverrides, state.orderOverrides);
  }

  function buildConfirmedItems(day) {
    const blocks = buildDayBlocks(day);
    const orderOverrides = getOrderOverrides(day.id);
    const baseOrder = new Map();
    blocks.forEach((block, index) => {
      baseOrder.set(`block:${block.id}`, index + 1);
    });
    const customStops = getCustomStops(day.id);
    const insertCount = new Map();
    const items = blocks.map((block) => ({
      key: `block:${block.id}`,
      type: "block",
      block,
      order: baseOrder.get(`block:${block.id}`)
    }));
    customStops.forEach((stop) => {
      const afterKey = stop.afterKey && baseOrder.has(stop.afterKey) ? stop.afterKey : null;
      const base = afterKey ? baseOrder.get(afterKey) : blocks.length + 1;
      const count = insertCount.get(base) || 0;
      insertCount.set(base, count + 1);
      items.push({
        key: `custom:${stop.id}`,
        type: "custom",
        stop,
        order: base + 0.1 + count * 0.1
      });
    });
    items.forEach((item) => {
      const override = orderOverrides[item.key];
      if (typeof override === "number") {
        item.order = override;
      }
    });
    return items.sort((a, b) => a.order - b.order);
  }

  function applyOrderFromKeys(dayId, keys) {
    const overrides = {};
    keys.forEach((key, index) => {
      overrides[key] = index + 1;
    });
    setOrderOverrides(dayId, overrides);
  }

  function moveItemToIndex(dayId, key, index) {
    const day = data.days.find((entry) => entry.id === dayId);
    if (!day) {
      return;
    }
    const items = buildConfirmedItems(day);
    const keys = items.map((item) => item.key);
    const currentIndex = keys.indexOf(key);
    if (currentIndex === -1) {
      return;
    }
    const next = keys.filter((itemKey) => itemKey !== key);
    const clamped = Math.max(0, Math.min(index, next.length));
    next.splice(clamped, 0, key);
    applyOrderFromKeys(dayId, next);
  }

  function addCustomStop(dayId, afterKey, payload) {
    if (!dayId || !payload?.mapQuery) {
      return;
    }
    const stop = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
      label: payload.label || payload.mapQuery,
      mapQuery: payload.mapQuery,
      source: payload.source || "",
      afterKey: afterKey || ""
    };
    const stops = getCustomStops(dayId);
    stops.push(stop);
    setCustomStops(dayId, stops);
    const day = data.days.find((entry) => entry.id === dayId);
    if (!day) {
      return;
    }
    const items = buildConfirmedItems(day);
    const keys = items.map((item) => item.key);
    const insertIndex = afterKey ? keys.indexOf(afterKey) + 1 : keys.length;
    const customKey = `custom:${stop.id}`;
    const next = keys.filter((itemKey) => itemKey !== customKey);
    const clamped = Math.max(0, Math.min(insertIndex, next.length));
    next.splice(clamped, 0, customKey);
    applyOrderFromKeys(dayId, next);
  }

  function removeCustomStop(dayId, stopId) {
    const stops = getCustomStops(dayId);
    const nextStops = stops.filter((stop) => stop.id !== stopId);
    setCustomStops(dayId, nextStops);
    const overrides = getOrderOverrides(dayId);
    delete overrides[`custom:${stopId}`];
    setOrderOverrides(dayId, overrides);
  }

  function isPlaceInConfirmed(dayId, mapQuery) {
    const key = normalizeKey(mapQuery);
    const day = data.days.find((entry) => entry.id === dayId);
    if (!day) {
      return false;
    }
    const blocks = buildDayBlocks(day);
    for (const block of blocks) {
      if (normalizeKey(block.location?.mapQuery) === key) {
        return true;
      }
      for (const group of block.choices || []) {
        const selection = getChoiceSelection(block.id, group);
        const selectedIds = group.mode === "multi" ? selection : [selection];
        for (const option of group.options || []) {
          if (selectedIds.includes(option.id) && normalizeKey(option.mapQuery) === key) {
            return true;
          }
        }
      }
    }
    const stops = getCustomStops(dayId);
    return stops.some((stop) => normalizeKey(stop.mapQuery) === key);
  }

  function buildAddablePlaces(dayId, blockId) {
    const day = data.days.find((entry) => entry.id === dayId);
    if (!day) {
      return [];
    }
    const block = buildDayBlocks(day).find((item) => item.id === blockId);
    if (!block) {
      return [];
    }
    const entries = [];
    (block.choices || []).forEach((group) => {
      group.options.forEach((option) => {
        if (!option.mapQuery) {
          return;
        }
        entries.push({
          label: option.label,
          mapQuery: option.mapQuery,
          source: "선택지"
        });
      });
    });
    if (block.location?.mapQuery) {
      const detail = getPlaceDetails(block.location.mapQuery) || {};
      if (Array.isArray(detail.nearby)) {
        detail.nearby.forEach((nearby) => {
          if (!nearby.mapQuery) {
            return;
          }
          entries.push({
            label: nearby.name,
            mapQuery: nearby.mapQuery,
            source: "주변 장소"
          });
        });
      }
    }
    const unique = new Map();
    entries.forEach((entry) => {
      const entryKey = normalizeKey(entry.mapQuery);
      if (!unique.has(entryKey)) {
        unique.set(entryKey, entry);
      }
    });
    return Array.from(unique.values());
  }

  function buildSharePayload() {
    return {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      appVersion: data.meta?.version || null,
      state: {
        options: state.options,
        choices: state.choices,
        extras: state.extras,
        timeOverrides: state.timeOverrides,
        customStops: state.customStops,
        orderOverrides: state.orderOverrides,
        checklist: state.checklist,
        routeMode: state.routeMode,
        routes: state.routes,
        coords: state.coords,
        ratings: state.ratings
      }
    };
  }

  function normalizeShareState(rawState) {
    const base = isPlainObject(rawState) ? rawState : {};
    return {
      options: isPlainObject(base.options) ? base.options : {},
      choices: isPlainObject(base.choices) ? base.choices : {},
      extras: isPlainObject(base.extras) ? base.extras : {},
      timeOverrides: isPlainObject(base.timeOverrides) ? base.timeOverrides : {},
      customStops: isPlainObject(base.customStops) ? base.customStops : {},
      orderOverrides: isPlainObject(base.orderOverrides) ? base.orderOverrides : {},
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
    state.extras = next.extras;
    state.timeOverrides = next.timeOverrides;
    state.customStops = next.customStops;
    state.orderOverrides = next.orderOverrides;
    state.checklist = next.checklist;
    state.routeMode = next.routeMode;
    state.routes = next.routes;
    state.coords = next.coords;
    state.ratings = next.ratings;
    saveStorage(STORAGE.options, state.options);
    saveStorage(STORAGE.choices, state.choices);
    saveStorage(STORAGE.extras, state.extras);
    saveStorage(STORAGE.timeOverrides, state.timeOverrides);
    saveStorage(STORAGE.customStops, state.customStops);
    saveStorage(STORAGE.orderOverrides, state.orderOverrides);
    saveStorage(STORAGE.checklist, state.checklist);
    saveStorage(STORAGE.routeMode, state.routeMode);
    saveStorage(STORAGE.routes, state.routes);
    saveStorage(STORAGE.coords, state.coords);
    saveStorage(STORAGE.ratings, state.ratings);
    render();
  }

  function getRatingApiBase() {
    return String(data.ratingApi?.baseUrl || "").replace(/\/$/, "");
  }

  function getRatingMode() {
    return data.ratingApi?.mode || "manual";
  }

  function canManualRatings() {
    return getRatingMode() === "manual" && Boolean(getRatingApiBase());
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

  function buildRatingsUrl() {
    const base = getRatingApiBase();
    if (!base) {
      return "";
    }
    return `${base}/api/ratings`;
  }

  function getRatingsSnapshotUrl() {
    return data.ratingsSnapshotUrl || "./ratings.json";
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

  async function fetchRatingsSnapshot() {
    const url = buildRatingsUrl();
    if (!url) {
      throw new Error("ratings api not configured");
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("ratings api error");
    }
    return response.json();
  }

  async function fetchStaticRatingsSnapshot() {
    const url = getRatingsSnapshotUrl();
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error("ratings snapshot fetch failed");
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
    const placeName = payload.name || payload.placeName || "";
    const placeId = payload.placeId || "";
    state.ratings[key] = {
      rating,
      ratingCount,
      popularity,
      ratingSource: payload.source || "Google",
      ratingUpdatedAt: updatedAt,
      placeName,
      placeId
    };
    saveStorage(STORAGE.ratings, state.ratings);
  }

  function applyRatingsSnapshot(snapshot) {
    const items = snapshot?.items && typeof snapshot.items === "object" ? snapshot.items : {};
    const normalized = {};
    Object.keys(items).forEach((key) => {
      const entry = items[key] || {};
      normalized[key] = {
        rating: typeof entry.rating === "number" ? entry.rating : null,
        ratingCount: typeof entry.ratingCount === "number" ? entry.ratingCount : null,
        popularity: entry.popularity || "",
        ratingSource: entry.source || "Google",
        ratingUpdatedAt: entry.updatedAt || snapshot.updatedAt || "",
        placeName: entry.name || "",
        placeId: entry.placeId || ""
      };
    });
    state.ratings = normalized;
    state.ratingsMeta = { updatedAt: snapshot?.updatedAt || "" };
    saveStorage(STORAGE.ratings, state.ratings);
    saveStorage(STORAGE.ratingsMeta, state.ratingsMeta);
  }

  function loadRatingsData() {
    if (getRatingMode() === "server") {
      fetchRatingsSnapshot()
        .then((snapshot) => {
          applyRatingsSnapshot(snapshot);
          render();
        })
        .catch(() => {
          showToast("서버 평점 불러오기 실패");
        });
      return;
    }
    if (getRatingMode() === "static") {
      fetchStaticRatingsSnapshot()
        .then((snapshot) => {
          applyRatingsSnapshot(snapshot);
          render();
        })
        .catch(() => {
          if (!Object.keys(state.ratings || {}).length) {
            showToast("정적 평점 불러오기 실패");
          }
        });
    }
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
      .map((block, index) => ({ ...applyTimeOverride(day.id, block), _order: index }))
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
          공유 코드를 사용하면 여러 기기에서 같은 코스를 불러올 수 있어요.
        </p>
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
    const selectedLabels = group.options
      .filter((option) => selectedIds.includes(option.id))
      .map((option) => option.label);
    const selectionSummary = selectedLabels.length ? selectedLabels.join(", ") : "선택 없음";
    const optionItems = group.options
      .map((option) => {
        const checked = selectedIds.includes(option.id);
        const rawDetail = option.mapQuery ? getPlaceDetails(option.mapQuery) : null;
        const category = resolveCategory(rawDetail, option.label, rawDetail?.type);
        const detail = enhanceDetail(rawDetail, category);
        const ratingLine = detail ? `<span class="option-rating">평점: ${formatRating(detail)}</span>` : "";
        const location = option.where || buildLocationSummary(detail);
        const locationLine = location ? `<span class="option-where">위치: ${location}</span>` : "";
        const tags = buildHashtags(detail, category);
        const tagRow = renderTagRow(category, tags);
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
              ${ratingLine}
              ${locationLine}
              ${tagRow}
              ${checked ? `<span class="option-selected">선택됨</span>` : ""}
            </div>
          </label>
        `;
      })
      .join("");
    const content = `
      <div>
        <h3>${group.title}</h3>
        ${group.help ? `<p class="muted">${group.help}</p>` : ""}
      </div>
      <div class="option-list">
        ${optionItems}
      </div>
    `;
    if (group.collapsed) {
      return `
        <details class="option-group-toggle card">
          <summary>
            <span class="option-group-title">${group.title}</span>
            <span class="option-group-current">현재: ${selectionSummary}</span>
          </summary>
          <div class="option-group-body">
            ${content}
          </div>
        </details>
      `;
    }
    return `
      <div class="card option-group">
        ${content}
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
            const rawDetail = option.mapQuery ? getPlaceDetails(option.mapQuery) : null;
            const category = resolveCategory(rawDetail, option.label, rawDetail?.type);
            const detail = enhanceDetail(rawDetail, category);
            const ratingLine = detail
              ? `<span class="option-rating">평점: ${formatRating(detail)}</span>`
              : "";
            const location = option.where || buildLocationSummary(detail);
            const locationLine = location ? `<span class="option-where">위치: ${location}</span>` : "";
            const tags = buildHashtags(detail, category);
            const tagRow = renderTagRow(category, tags);
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
                    ${locationLine}
                    ${ratingLine}
                    ${tagRow}
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
    const divisor = cost.unit && cost.unit !== "per_person" ? data.travelers.count : 1;
    const perMin = Math.round(min / divisor);
    const perMax = Math.round(max / divisor);
    const formattedMin = perMin.toLocaleString("ja-JP");
    const formattedMax = perMax.toLocaleString("ja-JP");
    if (min === 0 && max === 0) {
      return "1인당 무료";
    }
    if (perMin === perMax) {
      return `1인당 ${formattedMin}엔`;
    }
    return `1인당 ${formattedMin}~${formattedMax}엔`;
  }

  function renderCosts(costs) {
    if (!costs || costs.length === 0) {
      return "";
    }
    return `
      <div class="block-row">
        <span class="label">예상 비용 (1인당)</span>
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
      const nearbyCategories = Array.isArray(block.nearbyCategories)
        ? block.nearbyCategories
        : getBlockCategoryIds(block);
      placeInfo = renderPlaceCard(block.location.mapQuery, block.location.name, {
        showNearby,
        nearbyCategories,
        extraContext: {
          dayId: context.dayId,
          blockId: block.id,
          blockTitle: block.title
        }
      });
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

  function getBlockCategoryIds(block) {
    const rawTags = Array.isArray(block.tags) ? block.tags : [];
    const rawDetails = Array.isArray(block.details) ? block.details : [];
    const tokens = [
      block.title,
      block.summary,
      ...rawDetails,
      ...rawTags
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const ids = new Set();
    CATEGORY_DEFS.forEach((category) => {
      if (category.keywords.some((keyword) => tokens.includes(keyword.toLowerCase()))) {
        ids.add(category.id);
      }
    });
    return Array.from(ids);
  }

  function renderDay(day, section) {
    const optionGroups = (day.optionGroups || []).map(renderOptionGroup).join("");
    const blocks = buildDayBlocks(day);
    const context = { nearbySet: new Set(), dayId: day.id };
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

  function renderConfirmedBlock(dayId, block, index, position, itemKey) {
    const timeLabel = block.start && block.end ? `${block.start}~${block.end}` : block.start || block.end || "-";
    const baseLabel =
      block._baseStart && block._baseEnd ? `${block._baseStart}~${block._baseEnd}` : block._baseStart || block._baseEnd || "";
    const locationDetail = block.location?.mapQuery ? getPlaceDetails(block.location.mapQuery) : null;
    const locationSummary = buildLocationSummary(locationDetail);
    const locationParts = [block.location?.name, locationSummary].filter(Boolean);
    const locationLinks = block.location?.mapQuery
      ? renderLinks(locationDetail || {}, block.location.mapQuery)
      : "";
    const selectedWheres = [];
    const selectionLines = [];
    const selectionDetails = [];
    (block.choices || []).forEach((group) => {
      const selection = getChoiceSelection(block.id, group);
      const selectedIds = group.mode === "multi" ? selection : [selection];
      const selectedOptions = group.options.filter((option) => selectedIds.includes(option.id));
      const selectedLabels = selectedOptions.map((option) => {
        if (option.where) {
          selectedWheres.push(option.where);
        }
        return option.label;
      });
      if (selectedLabels.length) {
        selectionLines.push(
          `<div class="block-row"><span class="label">${group.title}</span><span>${selectedLabels.join(", ")}</span></div>`
        );
      }
      selectedOptions.forEach((option) => {
        const info = [];
        if (option.menu) {
          info.push(`메뉴: ${option.menu}`);
        }
        if (option.note) {
          info.push(`포인트: ${option.note}`);
        }
        if (option.desc) {
          info.push(`이용 팁: ${option.desc}`);
        }
        if (option.where) {
          info.push(`위치: ${option.where}`);
        }
        const optionDetail = option.mapQuery ? getPlaceDetails(option.mapQuery) : null;
        const optionLinks = option.mapQuery ? renderLinks(optionDetail || {}, option.mapQuery) : "";
        if (!info.length) {
          return;
        }
        selectionDetails.push(`
          <div class="confirmed-option">
            <strong>${option.label}</strong>
            ${info.map((item) => `<div class="muted">${item}</div>`).join("")}
            ${optionLinks}
          </div>
        `);
      });
    });
    const selectionLineHtml = selectionLines.join("");
    const selectionDetailHtml = selectionDetails.length
      ? `<div class="confirmed-options">${selectionDetails.join("")}</div>`
      : "";
    const extras = getExtrasForBlock(dayId, block.id);
    const extraDetails = extras
      .map((extra) => {
        const extraDetail = getPlaceDetails(extra.mapQuery) || {};
        const summary = extraDetail.summary
          ? extraDetail.summary
          : extraDetail.features?.length
          ? `한눈에 보기: ${extraDetail.features.join(", ")}`
          : "";
        const location = buildLocationSummary(extraDetail);
        return `
          <div class="confirmed-option">
            <strong>${extra.label}</strong>
            ${extra.source ? `<div class="muted">출처: ${extra.source === "nearby" ? "주변 장소" : extra.source}</div>` : ""}
            <div class="muted">평점: ${formatRating(extraDetail)}</div>
            ${summary ? `<div class="muted">${summary}</div>` : ""}
            ${location ? `<div class="muted">위치: ${location}</div>` : ""}
            ${extraDetail.popularity ? `<div class="muted">관광객: ${extraDetail.popularity}</div>` : ""}
            ${renderLinks(extraDetail, extra.mapQuery)}
          </div>
        `;
      })
      .join("");
    const extraHtml = extraDetails
      ? `<div class="confirmed-options"><div class="muted">추가 선택 장소</div>${extraDetails}</div>`
      : "";
    const fallbackWhere = locationParts.length ? "" : selectedWheres.filter(Boolean).join(" · ");
    const locationLine = locationParts.length
      ? `<div class="block-row"><span class="label">장소</span><span>${locationParts.join(" · ")}</span></div>`
      : fallbackWhere
      ? `<div class="block-row"><span class="label">장소</span><span>${fallbackWhere}</span></div>`
      : "";
    const details = block.details?.length ? `<ul>${block.details.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
    const timeEditor = `
      <div class="block-row">
        <span class="label">시간 조정</span>
        <span class="time-edit">
          <input
            type="time"
            step="300"
            value="${block.start || ""}"
            data-time-start
            data-day-id="${dayId}"
            data-block-id="${block.id}"
          />
          <span>~</span>
          <input
            type="time"
            step="300"
            value="${block.end || ""}"
            data-time-end
            data-day-id="${dayId}"
            data-block-id="${block.id}"
          />
          <button type="button" class="primary" data-time-save data-day-id="${dayId}" data-block-id="${block.id}">저장</button>
          <button type="button" data-time-reset data-day-id="${dayId}" data-block-id="${block.id}">초기화</button>
        </span>
      </div>
      ${baseLabel ? `<div class="muted">기본 시간: ${baseLabel}</div>` : ""}
    `;
    const orderEditor = `
      <div class="block-row">
        <span class="label">순서</span>
        <span class="order-edit">
          <span class="drag-handle" title="드래그로 순서 변경" aria-hidden="true">≡</span>
          <input
            type="number"
            min="1"
            value="${position}"
            data-order-input
            data-day-id="${dayId}"
            data-item-key="${itemKey}"
          />
          <button type="button" data-open-place-modal data-day-id="${dayId}" data-block-id="${block.id}" data-after-key="${itemKey}">
            장소 추가
          </button>
        </span>
      </div>
    `;
    return `
      <div class="block confirmed-item" style="--delay: ${index * 0.05}s" draggable="true" data-day-id="${dayId}" data-item-key="${itemKey}">
        <div class="block-time">${timeLabel}</div>
        <div class="block-body">
          <div class="block-title">
            <h4>${block.title}</h4>
            ${block.variant ? `<span>${block.variant}</span>` : ""}
          </div>
          ${block.summary ? `<div class="block-summary">${block.summary}</div>` : ""}
          ${locationLine}
          ${locationLinks}
          ${orderEditor}
          ${timeEditor}
          ${selectionLineHtml}
          ${selectionDetailHtml}
          ${extraHtml}
          ${details}
        </div>
      </div>
    `;
  }

  function renderConfirmedCustom(dayId, stop, index, position, itemKey) {
    const detail = getPlaceDetails(stop.mapQuery) || {};
    const location = buildLocationSummary(detail);
    const summary = detail.summary
      ? detail.summary
      : detail.features?.length
      ? `한눈에 보기: ${detail.features.join(", ")}`
      : "";
    return `
      <div class="block confirmed-item custom-item" style="--delay: ${index * 0.05}s" draggable="true" data-day-id="${dayId}" data-item-key="${itemKey}">
        <div class="block-time">시간 유동</div>
        <div class="block-body">
          <div class="block-title">
            <h4>${stop.label}</h4>
            ${stop.source ? `<span>${stop.source}</span>` : ""}
          </div>
          <div class="block-row">
            <span class="label">순서</span>
            <span class="order-edit">
              <span class="drag-handle" title="드래그로 순서 변경" aria-hidden="true">≡</span>
              <input
                type="number"
                min="1"
                value="${position}"
                data-order-input
                data-day-id="${dayId}"
                data-item-key="${itemKey}"
              />
              <button type="button" data-custom-remove data-day-id="${dayId}" data-stop-id="${stop.id}">삭제</button>
            </span>
          </div>
          ${summary ? `<div class="block-summary">${summary}</div>` : ""}
          ${location ? `<div class="block-row"><span class="label">위치</span><span>${location}</span></div>` : ""}
          ${renderLinks(detail, stop.mapQuery)}
        </div>
      </div>
    `;
  }

  function renderConfirmedDay(day, section) {
    const items = buildConfirmedItems(day);
    const timeline = items
      .map((item, index) => {
        const position = index + 1;
        if (item.type === "block") {
          return renderConfirmedBlock(day.id, item.block, index, position, item.key);
        }
        return renderConfirmedCustom(day.id, item.stop, index, position, item.key);
      })
      .join("");
    section.innerHTML = `
      <div class="section-head">
        <div>
          <h2>${day.label} · 확정 코스</h2>
          <p class="section-sub">${day.title} · 선택된 옵션 반영</p>
        </div>
      </div>
      <div class="timeline">
        ${timeline}
      </div>
    `;
  }

  function closePlaceModal() {
    const root = document.getElementById("modal-root");
    if (!root) {
      return;
    }
    root.innerHTML = "";
    document.body.classList.remove("modal-open");
  }

  function showPlaceModal(dayId, blockId, afterKey) {
    const root = document.getElementById("modal-root");
    if (!root) {
      return;
    }
    const entries = buildAddablePlaces(dayId, blockId);
    const list = entries
      .map((entry) => {
        const disabled = isPlaceInConfirmed(dayId, entry.mapQuery);
        const detail = getPlaceDetails(entry.mapQuery) || {};
        const rating = formatRating(detail);
        return `
          <button
            type="button"
            class="modal-item ${disabled ? "disabled" : ""}"
            data-place-add
            data-day-id="${dayId}"
            data-after-key="${afterKey || ""}"
            data-map-query="${entry.mapQuery}"
            data-label="${entry.label}"
            data-source="${entry.source}"
            ${disabled ? "disabled" : ""}
          >
            <div class="modal-item-title">${entry.label}</div>
            <div class="modal-item-meta">${entry.source} · 평점 ${rating}</div>
          </button>
        `;
      })
      .join("");
    root.innerHTML = `
      <div class="modal-backdrop" data-modal-close></div>
      <div class="modal-sheet" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div>
            <h3>장소 추가</h3>
            <p class="muted">현재 블록에 맞는 장소만 표시됩니다.</p>
          </div>
          <button type="button" class="modal-close" data-modal-close>닫기</button>
        </div>
        <input type="search" class="modal-search" placeholder="장소 검색" data-modal-search />
        <div class="modal-list">
          ${list || `<div class="muted">추가 가능한 장소가 없습니다.</div>`}
        </div>
      </div>
    `;
    document.body.classList.add("modal-open");
  }

  function collectMapItems() {
    const items = new Map();

    data.days.forEach((day) => {
      const blocks = buildDayBlocks(day);
      blocks.forEach((block) => {
        if (block.location && block.location.mapQuery) {
          const key = block.location.mapQuery.toLowerCase();
          const detail = getPlaceDetails(block.location.mapQuery);
          const category = resolveCategory(
            detail,
            block.location.name || block.title,
            detail?.type
          );
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
            source: "plan",
            categoryId: category?.id || "",
            rating: formatRating(detail),
            summary,
            popularity: detail?.popularity || "",
            ratingUpdatedAt: detail?.ratingUpdatedAt || "",
            building: detail?.building || "",
            floor: detail?.floor || "",
            area: detail?.area || ""
          });
          const extras = getExtrasForBlock(day.id, block.id);
          extras.forEach((extra) => {
            if (!extra.mapQuery) {
              return;
            }
            const extraKey = extra.mapQuery.toLowerCase();
            if (items.has(extraKey)) {
              return;
            }
            const extraDetail = getPlaceDetails(extra.mapQuery) || {};
            const extraCategory = resolveCategory(
              extraDetail,
              extra.label || extra.mapQuery,
              extraDetail?.type
            );
            const extraSummary =
              extraDetail?.summary ||
              (extraDetail?.features?.length ? `한눈에 보기: ${extraDetail.features.join(", ")}` : "");
            items.set(extraKey, {
              day: day.label,
              title: extra.label || extra.mapQuery,
              query: extra.mapQuery,
              note: `추가 선택 · ${block.title}`,
              optional: false,
              source: "extra",
              categoryId: extraCategory?.id || "",
              rating: formatRating(extraDetail),
              summary: extraSummary,
              popularity: extraDetail?.popularity || "",
              ratingUpdatedAt: extraDetail?.ratingUpdatedAt || "",
              building: extraDetail?.building || "",
              floor: extraDetail?.floor || "",
              area: extraDetail?.area || ""
            });
          });
          if (detail && Array.isArray(detail.nearby)) {
            detail.nearby.forEach((nearby) => {
              if (!nearby.mapQuery) {
                return;
              }
              const nearbyKey = nearby.mapQuery.toLowerCase();
              if (!items.has(nearbyKey)) {
                const nearbyDetail = getPlaceDetails(nearby.mapQuery) || nearby;
                const nearbyCategory = resolveCategory(
                  nearbyDetail,
                  nearby.name,
                  nearbyDetail?.type
                );
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
                  source: "nearby",
                  categoryId: nearbyCategory?.id || "",
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
            const category = resolveCategory(detail, option.label, detail?.type);
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
                source: "option",
                categoryId: category?.id || "",
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

      const customStops = getCustomStops(day.id);
      customStops.forEach((stop) => {
        if (!stop.mapQuery) {
          return;
        }
        const stopKey = stop.mapQuery.toLowerCase();
        if (items.has(stopKey)) {
          return;
        }
        const stopDetail = getPlaceDetails(stop.mapQuery) || {};
        const stopCategory = resolveCategory(
          stopDetail,
          stop.label || stop.mapQuery,
          stopDetail?.type
        );
        const stopSummary =
          stopDetail?.summary ||
          (stopDetail?.features?.length ? `한눈에 보기: ${stopDetail.features.join(", ")}` : "");
        items.set(stopKey, {
          day: day.label,
          title: stop.label || stop.mapQuery,
          query: stop.mapQuery,
          note: "추가 일정",
          optional: false,
          source: "custom",
          categoryId: stopCategory?.id || "",
          rating: formatRating(stopDetail),
          summary: stopSummary,
          popularity: stopDetail?.popularity || "",
          ratingUpdatedAt: stopDetail?.ratingUpdatedAt || "",
          building: stopDetail?.building || "",
          floor: stopDetail?.floor || "",
          area: stopDetail?.area || ""
        });
      });
    });

    return Array.from(items.values());
  }

  function applyMapFilters(items, filters) {
    const activeCategories =
      filters.categories && filters.categories.length ? new Set(filters.categories) : null;
    return items.filter((item) => {
      if (item.optional) {
        if (item.source === "nearby" && !filters.showNearby) {
          return false;
        }
        if (item.source === "option" && !filters.showOptions) {
          return false;
        }
      }
      if (activeCategories) {
        if (!item.categoryId || !activeCategories.has(item.categoryId)) {
          return false;
        }
      }
      return true;
    });
  }

  function collectDayRoutePoints(day) {
    const points = [];
    const seen = new Set();
    const pushPoint = (query, label) => {
      if (!query) {
        return;
      }
      const key = query.trim().toLowerCase();
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      points.push({ query, label: label || query });
    };
    const hasCustom = getCustomStops(day.id).length > 0;
    const hasOrderOverrides = Object.keys(getOrderOverrides(day.id)).length > 0;
    if (hasCustom || hasOrderOverrides) {
      const items = buildConfirmedItems(day);
      items.forEach((item) => {
        if (item.type === "block") {
          const block = item.block;
          const choiceQueries = [];
          (block.choices || []).forEach((group) => {
            const selection = getChoiceSelection(block.id, group);
            const selectedIds = group.mode === "multi" ? selection : [selection];
            group.options.forEach((option) => {
              if (selectedIds.includes(option.id) && option.mapQuery) {
                choiceQueries.push({ query: option.mapQuery, label: option.label });
              }
            });
          });
          if (choiceQueries.length) {
            choiceQueries.forEach((choice) => pushPoint(choice.query, choice.label));
          } else if (block.location?.mapQuery) {
            pushPoint(block.location.mapQuery, block.location.name || block.title);
          }
          const extras = getExtrasForBlock(day.id, block.id);
          if (extras.length) {
            extras.forEach((extra) => pushPoint(extra.mapQuery, extra.label));
          }
          return;
        }
        if (item.type === "custom") {
          pushPoint(item.stop.mapQuery, item.stop.label);
        }
      });
      return points;
    }
    const blocks = buildDayBlocks(day);
    blocks.forEach((block) => {
      const choiceQueries = [];
      (block.choices || []).forEach((group) => {
        const selection = getChoiceSelection(block.id, group);
        const selectedIds = group.mode === "multi" ? selection : [selection];
        group.options.forEach((option) => {
          if (selectedIds.includes(option.id) && option.mapQuery) {
            choiceQueries.push({ query: option.mapQuery, label: option.label });
          }
        });
      });
      if (choiceQueries.length) {
        choiceQueries.forEach((choice) => pushPoint(choice.query, choice.label));
      } else if (block.location?.mapQuery) {
        pushPoint(block.location.mapQuery, block.location.name || block.title);
      }
      const extras = getExtrasForBlock(day.id, block.id);
      if (extras.length) {
        extras.forEach((extra) => pushPoint(extra.mapQuery, extra.label));
      }
    });
    return points;
  }

  function buildDirectionsLinkFromPoints(points, mode = "transit") {
    if (!Array.isArray(points) || points.length < 2) {
      return "";
    }
    const origin = encodeURIComponent(points[0].query);
    const destination = encodeURIComponent(points[points.length - 1].query);
    const waypoints = points
      .slice(1, -1)
      .map((point) => point.query)
      .join("|");
    const base = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
    const waypointParam = waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : "";
    const modeParam = mode ? `&travelmode=${encodeURIComponent(mode)}` : "";
    return `${base}${waypointParam}${modeParam}`;
  }

  function renderMap() {
    const items = collectMapItems();
    const filters = getMapFilters();
    const filteredItems = applyMapFilters(items, filters);
    const grouped = filteredItems.reduce((acc, item) => {
      if (!acc[item.day]) {
        acc[item.day] = [];
      }
      acc[item.day].push(item);
      return acc;
    }, {});
    const ratingsUpdatedAt = state.ratingsMeta?.updatedAt
      ? formatDate(state.ratingsMeta.updatedAt)
      : "";
    const ratingNote =
      getRatingMode() === "server"
        ? ratingsUpdatedAt
          ? `서버 갱신: ${ratingsUpdatedAt}`
          : "서버 갱신 데이터"
        : getRatingMode() === "static"
        ? ratingsUpdatedAt
          ? `정적 스냅샷: ${ratingsUpdatedAt}`
          : "정적 스냅샷 데이터"
        : "평점은 수동 입력 값입니다.";
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

    const categoryButtons = CATEGORY_DEFS.map((category) => {
      const isActive = filters.categories.length
        ? filters.categories.includes(category.id)
        : false;
      return `
        <button
          type="button"
          class="filter-chip ${isActive ? "active" : ""}"
          data-map-category="${category.id}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${category.label}
        </button>
      `;
    }).join("");
    const dayEntries = data.days.map((day) => ({
      day,
      list: grouped[day.label] || []
    }));

    sections.map.innerHTML = `
      <div class="section-head">
        <div>
          <h2>지도 · 공식 링크</h2>
          <p class="section-sub">현재 선택된 옵션 기준. 선택지를 바꾸면 리스트가 갱신됩니다. ${ratingNote}</p>
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
      <div class="card map-filters">
        <h3>장소 필터</h3>
        <p class="muted">기본은 현재 일정만 표시합니다. 필요한 경우 선택지/주변 장소를 켜세요.</p>
        <div class="filter-group">
          <span class="filter-label">추가 항목</span>
          <button
            type="button"
            class="filter-chip ${filters.showOptions ? "active" : ""}"
            data-map-filter="options"
            aria-pressed="${filters.showOptions ? "true" : "false"}"
          >
            선택지
          </button>
          <button
            type="button"
            class="filter-chip ${filters.showNearby ? "active" : ""}"
            data-map-filter="nearby"
            aria-pressed="${filters.showNearby ? "true" : "false"}"
          >
            주변 장소
          </button>
        </div>
        <div class="filter-group">
          <span class="filter-label">카테고리</span>
          <button
            type="button"
            class="filter-chip ${filters.categories.length ? "" : "active"}"
            data-map-category="all"
            aria-pressed="${filters.categories.length ? "false" : "true"}"
          >
            전체
          </button>
          ${categoryButtons}
        </div>
        <div class="filter-meta muted">표시: ${filteredItems.length}곳</div>
      </div>
      ${
        canManualRatings()
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
      ${dayEntries
        .map((entry, index) => {
          const routePoints = collectDayRoutePoints(entry.day);
          const maxPoints = 10;
          const usedPoints = routePoints.slice(0, maxPoints);
          const routeUrl = buildDirectionsLinkFromPoints(usedPoints, "transit");
          const routeNote = routeUrl
            ? `선택된 일정 기준 ${usedPoints.length}곳 연결${routePoints.length > maxPoints ? " (최대 10곳 표시)" : ""}`
            : "장소 2곳 이상 선택 시 동선 지도가 생성됩니다.";
          return `
            <div class="card" style="--delay: ${index * 0.05}s">
              <div class="map-day-header">
                <div>
                  <h3>${entry.day.label}</h3>
                  <div class="muted">${routeNote}</div>
                </div>
                ${
                  routeUrl
                    ? `<a class="map-route" href="${routeUrl}" target="_blank" rel="noreferrer">동선 지도 보기</a>`
                    : `<span class="muted">동선 지도 준비 중</span>`
                }
              </div>
              <div class="map-list">
                ${
                  entry.list.length
                    ? entry.list
                        .map((item) => {
                          const rawDetail = getPlaceDetails(item.query) || {};
                          const category = resolveCategory(rawDetail, item.title, rawDetail?.type);
                          const detail = enhanceDetail(rawDetail, category);
                          const tags = buildHashtags(detail, category);
                          const tagRow = renderTagRow(category, tags);
                          return `
                            <div class="map-item">
                              <div>
                                <strong>${item.title}</strong>
                                ${item.optional ? `<span class="tag neutral">선택지</span>` : ""}
                                <div class="muted">${item.note}</div>
                                <div class="muted">평점: ${item.rating || "평점 입력 필요"}</div>
                                ${detail.placeName ? `<div class="muted">지도 표기: ${detail.placeName}</div>` : ""}
                                ${tagRow}
                                ${buildLocationText(item) ? `<div class="muted">위치: ${buildLocationText(item)}</div>` : ""}
                                ${item.popularity ? `<div class="muted">관광객: ${item.popularity}</div>` : ""}
                                ${item.ratingUpdatedAt ? `<div class="muted">업데이트: ${formatDate(item.ratingUpdatedAt)}</div>` : ""}
                                ${item.summary ? `<div class="muted">${item.summary}</div>` : ""}
                              </div>
                              <div class="map-actions">
                                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noreferrer">지도 열기</a>
                                <a href="https://www.google.com/search?q=${encodeURIComponent(`${item.query} 공식 사이트`)}" target="_blank" rel="noreferrer">공식 사이트 검색</a>
                                ${canManualRatings() ? `<button type="button" data-rating-update="${item.query}">평점 업데이트</button>` : ""}
                                <button type="button" data-copy="${item.query}">검색어 복사</button>
                              </div>
                            </div>
                          `;
                        })
                        .join("")
                    : `<div class="muted">필터 조건에 맞는 장소가 없습니다.</div>`
                }
              </div>
            </div>
          `;
        })
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
      const divisor = normalized.unit && normalized.unit !== "per_person" ? data.travelers.count : 1;
      const min = Math.round(normalized.min / divisor);
      const max = Math.round(normalized.max / divisor);
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
      return `1인당 ${formattedMin}엔`;
    }
    return `1인당 ${formattedMin}~${formattedMax}엔`;
  }

  function renderBudget() {
    const summary = computeBudget();
    const categories = Object.entries(summary.categories);

    sections.budget.innerHTML = `
      <div class="section-head">
        <div>
          <h2>예산 요약 (1인 기준)</h2>
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
                          <span class="checklist-text">
                            <span class="checklist-label">${item.label}</span>
                            ${
                              item.time || item.place
                                ? `<span class="checklist-meta">${[item.time, item.place].filter(Boolean).join(" · ")}</span>`
                                : ""
                            }
                          </span>
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
    if (sections.confirmedDay1) {
      renderConfirmedDay(data.days[0], sections.confirmedDay1);
    }
    if (sections.confirmedDay2) {
      renderConfirmedDay(data.days[1], sections.confirmedDay2);
    }
    if (sections.confirmedDay3) {
      renderConfirmedDay(data.days[2], sections.confirmedDay3);
    }
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

    if (target.matches("[data-order-input]")) {
      const dayId = target.dataset.dayId;
      const itemKey = target.dataset.itemKey;
      const desired = Number(target.value);
      const index = Number.isFinite(desired) ? desired - 1 : 0;
      moveItemToIndex(dayId, itemKey, index);
      render();
      showToast("순서가 변경됐어요");
    }

  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!target.matches("[data-modal-search]")) {
      return;
    }
    const value = target.value.trim().toLowerCase();
    document.querySelectorAll(".modal-item").forEach((item) => {
      const text = item.textContent ? item.textContent.toLowerCase() : "";
      item.style.display = !value || text.includes(value) ? "" : "none";
    });
  });

  document.addEventListener("click", (event) => {
    const mapFilterButton = event.target.closest("[data-map-filter]");
    if (mapFilterButton) {
      const filterId = mapFilterButton.dataset.mapFilter;
      const filters = getMapFilters();
      if (filterId === "options") {
        setMapFilters({ ...filters, showOptions: !filters.showOptions });
      } else if (filterId === "nearby") {
        setMapFilters({ ...filters, showNearby: !filters.showNearby });
      }
      renderMap();
      return;
    }

    const mapCategoryButton = event.target.closest("[data-map-category]");
    if (mapCategoryButton) {
      const categoryId = mapCategoryButton.dataset.mapCategory;
      const filters = getMapFilters();
      if (categoryId === "all") {
        setMapFilters({ ...filters, categories: [] });
      } else {
        const next = new Set(filters.categories);
        if (next.has(categoryId)) {
          next.delete(categoryId);
        } else {
          next.add(categoryId);
        }
        setMapFilters({ ...filters, categories: Array.from(next) });
      }
      renderMap();
      return;
    }

    const extraToggle = event.target.closest("[data-extra-toggle]");
    if (extraToggle) {
      const dayId = extraToggle.dataset.extraDay;
      const blockId = extraToggle.dataset.extraBlock;
      const mapQuery = extraToggle.dataset.extraQuery;
      const label = extraToggle.dataset.extraLabel;
      const source = extraToggle.dataset.extraSource;
      const selected = toggleExtraSelection(dayId, blockId, { mapQuery, label, source });
      render();
      showToast(selected ? "코스확정에 추가됨" : "코스확정에서 제거됨");
      return;
    }

    const timeReset = event.target.closest("[data-time-reset]");
    if (timeReset) {
      const dayId = timeReset.dataset.dayId;
      const blockId = timeReset.dataset.blockId;
      setTimeOverride(dayId, blockId, "", "");
      render();
      showToast("시간 조정을 초기화했어요");
      return;
    }

    const timeSave = event.target.closest("[data-time-save]");
    if (timeSave) {
      const dayId = timeSave.dataset.dayId;
      const blockId = timeSave.dataset.blockId;
      const startInput = document.querySelector(
        `[data-time-start][data-day-id="${dayId}"][data-block-id="${blockId}"]`
      );
      const endInput = document.querySelector(
        `[data-time-end][data-day-id="${dayId}"][data-block-id="${blockId}"]`
      );
      const start = startInput ? startInput.value : "";
      const end = endInput ? endInput.value : "";
      setTimeOverride(dayId, blockId, start, end);
      render();
      showToast("시간이 저장됐어요");
      return;
    }

    const openPlaceModal = event.target.closest("[data-open-place-modal]");
    if (openPlaceModal) {
      const dayId = openPlaceModal.dataset.dayId;
      const blockId = openPlaceModal.dataset.blockId;
      const afterKey = openPlaceModal.dataset.afterKey;
      showPlaceModal(dayId, blockId, afterKey);
      return;
    }

    const modalClose = event.target.closest("[data-modal-close]");
    if (modalClose) {
      closePlaceModal();
      return;
    }

    const placeAdd = event.target.closest("[data-place-add]");
    if (placeAdd) {
      const dayId = placeAdd.dataset.dayId;
      const afterKey = placeAdd.dataset.afterKey;
      const mapQuery = placeAdd.dataset.mapQuery;
      const label = placeAdd.dataset.label;
      const source = placeAdd.dataset.source;
      addCustomStop(dayId, afterKey, { mapQuery, label, source });
      render();
      closePlaceModal();
      showToast("일정에 추가됐어요");
      return;
    }

    const customRemove = event.target.closest("[data-custom-remove]");
    if (customRemove) {
      const dayId = customRemove.dataset.dayId;
      const stopId = customRemove.dataset.stopId;
      removeCustomStop(dayId, stopId);
      render();
      showToast("추가 일정이 삭제됐어요");
      return;
    }

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

  document.addEventListener("dragstart", (event) => {
    const target = event.target.closest("[data-item-key]");
    if (!target) {
      return;
    }
    const dayId = target.dataset.dayId;
    const itemKey = target.dataset.itemKey;
    event.dataTransfer?.setData("text/plain", `${dayId}::${itemKey}`);
    target.classList.add("dragging");
  });

  document.addEventListener("dragend", (event) => {
    const target = event.target.closest("[data-item-key]");
    if (!target) {
      return;
    }
    target.classList.remove("dragging");
  });

  document.addEventListener("dragover", (event) => {
    const target = event.target.closest("[data-item-key]");
    if (!target) {
      return;
    }
    event.preventDefault();
    target.classList.add("drag-over");
  });

  document.addEventListener("dragleave", (event) => {
    const target = event.target.closest("[data-item-key]");
    if (!target) {
      return;
    }
    target.classList.remove("drag-over");
  });

  document.addEventListener("drop", (event) => {
    const target = event.target.closest("[data-item-key]");
    if (!target) {
      return;
    }
    event.preventDefault();
    target.classList.remove("drag-over");
    const payload = event.dataTransfer?.getData("text/plain") || "";
    const [dayId, itemKey] = payload.split("::");
    const targetDayId = target.dataset.dayId;
    const targetKey = target.dataset.itemKey;
    if (!dayId || !itemKey || dayId !== targetDayId || !targetKey) {
      return;
    }
    const day = data.days.find((entry) => entry.id === dayId);
    if (!day) {
      return;
    }
    const keys = buildConfirmedItems(day).map((item) => item.key);
    const fromIndex = keys.indexOf(itemKey);
    const toIndex = keys.indexOf(targetKey);
    if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
      return;
    }
    keys.splice(fromIndex, 1);
    keys.splice(toIndex, 0, itemKey);
    applyOrderFromKeys(dayId, keys);
    render();
    showToast("드래그 순서가 적용됐어요");
  });

  let navUpdateActive = null;

  function setupNavHighlight() {
    const navLinks = Array.from(document.querySelectorAll(".tabs a[href^=\"#\"]"));
    const navSummaries = Array.from(document.querySelectorAll(".tabs summary"));
    const currentLabel = document.getElementById("tabCurrent");
    const sectionsList = navLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const setSectionVisibility = (activeId) => {
      if (state.showAllSections) {
        sectionsList.forEach((section) => {
          section.hidden = false;
          section.dataset.active = "false";
        });
        return;
      }
      sectionsList.forEach((section) => {
        const isActive = section.id === activeId;
        section.hidden = !isActive;
        section.dataset.active = isActive ? "true" : "false";
      });
    };

    const setActive = (activeId) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      navSummaries.forEach((summary) => summary.classList.remove("active"));
      if (currentLabel) {
        currentLabel.textContent = "현재 위치: -";
      }
      if (!activeId) {
        return;
      }
      const activeLink = navLinks.find(
        (link) => link.getAttribute("href") === `#${activeId}`
      );
      if (activeLink) {
        activeLink.classList.add("active");
        const group = activeLink.closest(".tab-group");
        if (group) {
          group.open = true;
          const summary = group.querySelector("summary");
          if (summary) {
            summary.classList.add("active");
          }
        }
        if (currentLabel) {
          const groupLabel = group ? group.querySelector("summary")?.textContent.trim() : "";
          const linkLabel = activeLink.textContent.trim();
          const composed = groupLabel ? `${groupLabel} · ${linkLabel}` : linkLabel;
          currentLabel.textContent = `현재 위치: ${composed}`;
        }
      }
    };

    const updateActive = (forceScroll = false) => {
      if (!sectionsList.length) {
        return;
      }
      const hashId = window.location.hash ? window.location.hash.slice(1) : "";
      const visibleSections = sectionsList.filter((section) => !section.hidden);
      let activeId = "";
      if (state.showAllSections) {
        const offset = 140;
        const scrollSections = visibleSections.length ? visibleSections : sectionsList;
        activeId = scrollSections[0]?.id || "";
        scrollSections.forEach((section) => {
          const top = section.getBoundingClientRect().top;
          if (top - offset <= 0) {
            activeId = section.id;
          }
        });
      } else if (hashId && sectionsList.some((section) => section.id === hashId)) {
        activeId = hashId;
      } else {
        activeId = visibleSections[0]?.id || sectionsList[0]?.id || "";
      }
      setActive(activeId);
      setSectionVisibility(activeId);
      if (!state.showAllSections && forceScroll && activeId) {
        document.getElementById(activeId)?.scrollIntoView({ block: "start" });
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    window.addEventListener("hashchange", () => updateActive(true));
    updateActive();
    navUpdateActive = updateActive;
  }

  function setupNavToggle() {
    const nav = document.querySelector(".tabs");
    const toggleButton = document.querySelector("[data-nav-toggle]");
    if (!nav || !toggleButton) {
      return;
    }
    const apply = (collapsed) => {
      nav.classList.toggle("collapsed", collapsed);
      toggleButton.textContent = collapsed ? "탭 펼치기" : "탭 접기";
      toggleButton.setAttribute("aria-expanded", collapsed ? "false" : "true");
    };
    apply(Boolean(state.navCollapsed));
    toggleButton.addEventListener("click", () => {
      state.navCollapsed = !state.navCollapsed;
      saveStorage(STORAGE.navCollapsed, state.navCollapsed);
      apply(state.navCollapsed);
    });
  }

  function setupSectionViewToggle() {
    const toggleButton = document.querySelector("[data-view-toggle]");
    if (!toggleButton) {
      return;
    }
    const apply = (showAll) => {
      toggleButton.textContent = showAll ? "현재 탭만 보기" : "페이지 전부 펼치기";
      toggleButton.setAttribute("aria-pressed", showAll ? "true" : "false");
      if (navUpdateActive) {
        navUpdateActive(true);
      }
    };
    apply(Boolean(state.showAllSections));
    toggleButton.addEventListener("click", () => {
      state.showAllSections = !state.showAllSections;
      saveStorage(STORAGE.showAllSections, state.showAllSections);
      apply(state.showAllSections);
    });
  }

  function setupCompactToggle() {
    const toggleButton = document.querySelector("[data-compact-toggle]");
    const badge = document.getElementById("viewModeBadge");
    if (!toggleButton) {
      return;
    }
    const apply = (compact) => {
      document.body.classList.toggle("compact-view", compact);
      toggleButton.textContent = compact ? "자세히 보기" : "간략 보기";
      toggleButton.setAttribute("aria-pressed", compact ? "true" : "false");
      if (badge) {
        badge.textContent = compact ? "모드: 간략" : "모드: 자세히";
      }
    };
    apply(Boolean(state.compactView));
    toggleButton.addEventListener("click", () => {
      state.compactView = !state.compactView;
      saveStorage(STORAGE.compactView, state.compactView);
      apply(state.compactView);
    });
  }

  const tabGroups = Array.from(document.querySelectorAll(".tab-group"));
  tabGroups.forEach((group) => {
    group.addEventListener("toggle", () => {
      if (!group.open) {
        return;
      }
      tabGroups.forEach((other) => {
        if (other !== group) {
          other.open = false;
        }
      });
    });
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js");
    });
  }

  setupNavToggle();
  setupSectionViewToggle();
  setupCompactToggle();
  setupNavHighlight();
  render();
  loadRatingsData();
})();
