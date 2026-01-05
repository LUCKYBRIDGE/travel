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
    routes: "travel:routes"
  };

  const state = {
    options: loadStorage(STORAGE.options, {}),
    choices: loadStorage(STORAGE.choices, {}),
    checklist: loadStorage(STORAGE.checklist, {}),
    routeMode: loadStorage(STORAGE.routeMode, data.routeSettings?.mode || "hybrid"),
    coords: loadStorage(STORAGE.coords, {}),
    routes: loadStorage(STORAGE.routes, {})
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
    return placeDetails[mapQuery.trim().toLowerCase()] || null;
  }

  function formatRating(detail) {
    if (!detail || !detail.rating) {
      return "평점 입력 필요";
    }
    const source = detail.ratingSource || "Google";
    return `${detail.rating} (${source})`;
  }

  function renderDetailLine(label, items, fallback) {
    const value = Array.isArray(items) && items.length ? items.join(" · ") : fallback;
    return `
      <div class="place-line">
        <span class="label">${label}</span>
        <span>${value}</span>
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
            return `
              <div class="nearby-card">
                <div class="nearby-header">
                  <strong>${item.name}</strong>
                  ${item.type ? `<span class="tag neutral">${item.type}</span>` : ""}
                </div>
                <div class="muted">평점: ${formatRating(detail)}</div>
                ${renderDetailLine("특징", detail.features, "정보 준비중")}
                ${renderDetailLine("장점", detail.pros, "정보 준비중")}
                ${renderDetailLine("단점", detail.cons, "정보 준비중")}
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
    const content = `
      <div class="place-top">
        <span class="label">Google 지도</span>
        <a href="${buildMapLink(mapQuery)}" target="_blank" rel="noreferrer">열기</a>
        <span class="rating">평점: ${formatRating(detail)}</span>
      </div>
      ${renderDetailLine("특징", detail.features, "정보 준비중")}
      ${renderDetailLine("장점", detail.pros, "정보 준비중")}
      ${renderDetailLine("단점", detail.cons, "정보 준비중")}
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
                ${option.note ? `<div class="muted">${option.note}</div>` : ""}
              </div>
            `
          )
          .join("")}
      </div>
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
                <label class="option-item">
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
    return `
      <div class="choice-group">
        <div class="choice-title">${group.title}</div>
        ${group.note ? `<div class="choice-note">${group.note}</div>` : ""}
        ${group.options
          .map((option) => {
            const checked = selectedIds.includes(option.id);
            const placeInfo = option.mapQuery
              ? renderPlaceCard(option.mapQuery, option.label, { collapsible: true, showNearby: false })
              : "";
            return `
              <div class="choice-item">
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
          <div class="block-title">
            <h4>${block.title}</h4>
            ${block.variant ? `<span>${block.variant}</span>` : ""}
          </div>
          ${tags.length ? `<div class="chips">${tags.join("")}</div>` : ""}
          ${block.details ? `<ul>${block.details.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
          ${block.location ? `<div class="block-row"><span class="label">장소</span><span>${block.location.name}</span></div>` : ""}
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

    section.innerHTML = `
      <div class="section-head">
        <div>
          <h2>${day.label} · ${day.title}</h2>
          <p class="section-sub">${day.description || ""}</p>
        </div>
      </div>
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
          items.set(key, {
            day: day.label,
            title: block.location.name || block.title,
            query: block.location.mapQuery,
            note: block.title,
            optional: false,
            rating: formatRating(detail)
          });
          if (detail && Array.isArray(detail.nearby)) {
            detail.nearby.forEach((nearby) => {
              if (!nearby.mapQuery) {
                return;
              }
              const nearbyKey = nearby.mapQuery.toLowerCase();
              if (!items.has(nearbyKey)) {
                const nearbyDetail = getPlaceDetails(nearby.mapQuery) || nearby;
                items.set(nearbyKey, {
                  day: day.label,
                  title: nearby.name,
                  query: nearby.mapQuery,
                  note: `근처 추천 · ${block.title}`,
                  optional: true,
                  rating: formatRating(nearbyDetail)
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
            if (!existing || (existing.optional && isSelected)) {
              items.set(key, {
                day: day.label,
                title: option.label,
                query: option.mapQuery,
                note: block.title,
                optional: !isSelected,
                rating: formatRating(detail)
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
          <h2>지도 검색어</h2>
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
                        </div>
                        <div class="map-actions">
                          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noreferrer">지도 열기</a>
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
  });

  document.addEventListener("click", (event) => {
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
