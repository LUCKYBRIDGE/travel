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
    checklist: "travel:checklist"
  };

  const state = {
    options: loadStorage(STORAGE.options, {}),
    choices: loadStorage(STORAGE.choices, {}),
    checklist: loadStorage(STORAGE.checklist, {})
  };

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
            return `
              <label class="choice-item">
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

  function renderBlock(block, index) {
    const tags = (block.tags || []).map((tag) => {
      const alert = tag.includes("현금") || tag.includes("대기");
      return `<span class="tag ${alert ? "alert" : ""}">${tag}</span>`;
    });

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
          ${renderCosts(block.costs)}
          ${(block.choices || []).map((group) => renderChoiceGroup(block.id, group)).join("")}
        </div>
      </article>
    `;
  }

  function renderDay(day, section) {
    const optionGroups = (day.optionGroups || []).map(renderOptionGroup).join("");
    const blocks = buildDayBlocks(day);

    section.innerHTML = `
      <div class="section-head">
        <div>
          <h2>${day.label} · ${day.title}</h2>
          <p class="section-sub">${day.description || ""}</p>
        </div>
      </div>
      ${optionGroups}
      <div class="timeline">
        ${blocks.map(renderBlock).join("")}
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
          items.set(key, {
            day: day.label,
            title: block.location.name || block.title,
            query: block.location.mapQuery,
            note: block.title,
            optional: false
          });
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
            if (!existing || (existing.optional && isSelected)) {
              items.set(key, {
                day: day.label,
                title: option.label,
                query: option.mapQuery,
                note: block.title,
                optional: !isSelected
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

    sections.map.innerHTML = `
      <div class="section-head">
        <div>
          <h2>지도 검색어</h2>
          <p class="section-sub">현재 선택된 옵션 기준. 선택지를 바꾸면 리스트가 갱신됩니다.</p>
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
  });

  document.addEventListener("click", (event) => {
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
