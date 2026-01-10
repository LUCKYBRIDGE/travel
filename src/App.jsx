import { useEffect } from "react";
import { CalendarDays, CheckCircle2, MapPin, Route, Users2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const HERO_STATS = [
  {
    title: "여정 요약",
    description: "3일 일정 · 선택형 코스 구성",
    icon: CalendarDays
  },
  {
    title: "가족 맞춤",
    description: "성인 5인 이동/식사 기준",
    icon: Users2
  },
  {
    title: "동선 중심",
    description: "동선 지도와 체크리스트",
    icon: Route
  }
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`failed to load ${src}`)), {
          once: true
        });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    });
    script.addEventListener("error", () => reject(new Error(`failed to load ${src}`)));
    document.body.appendChild(script);
  });
}

export default function App() {
  useEffect(() => {
    if (window.__TRAVEL_APP_LOADED) {
      return;
    }
    window.__TRAVEL_APP_LOADED = true;

    (async () => {
      await loadScript("/data.js");
      await loadScript("/app.js");
    })().catch(() => {
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = "앱 데이터를 불러오지 못했습니다.";
        toast.classList.add("show");
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Kyoto Family Trip</p>
          <h1>교토 가족 여행 플래너</h1>
          <p className="hero-lead">
            선택한 코스에 맞춰 이동 동선, 체크리스트, 예산까지 자동 정리되는 가족 여행용 플래너입니다.
          </p>
          <div className="hero-actions">
            <Button as="a" href="#overview" size="lg" className="button">
              <MapPin size={16} />
              개요 바로가기
            </Button>
            <Button as="a" href="#day1" variant="ghost" className="button ghost">
              <CheckCircle2 size={16} />
              1일차 탐색
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge className="rounded-full">모바일 퍼스트</Badge>
            <Badge className="rounded-full">오프라인 캐시</Badge>
            <Badge className="rounded-full">공유 코드</Badge>
          </div>
        </div>
        <div className="hero-panel">
          <Card className="rounded-2xl border-slate-200/70 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">핵심 정리</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              {HERO_STATS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <Icon size={16} />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div>{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </header>

      <nav className="tabs" aria-label="탭 네비게이션">
        <details className="tab-group" open>
          <summary>탐색</summary>
          <div className="tab-sub">
            <a href="#overview">개요</a>
            <a href="#day1">1일차</a>
            <a href="#day2">2일차</a>
            <a href="#day3">3일차</a>
          </div>
        </details>
        <details className="tab-group">
          <summary>코스 확정</summary>
          <div className="tab-sub">
            <a href="#confirmed-day1">1일차</a>
            <a href="#confirmed-day2">2일차</a>
            <a href="#confirmed-day3">3일차</a>
          </div>
        </details>
        <a href="#map">지도</a>
        <a href="#budget">예산</a>
        <a href="#checklist">체크리스트</a>

        <div className="tab-controls">
          <span id="tabCurrent" className="tab-current">
            현재 위치: -
          </span>
          <span id="viewModeBadge" className="view-badge">
            모드: 자세히
          </span>
          <button type="button" className="tab-toggle" data-compact-toggle>
            간략 보기
          </button>
          <button type="button" className="tab-toggle" data-view-toggle>
            페이지 전부 펼치기
          </button>
          <button type="button" className="tab-toggle" data-nav-toggle>
            탭 접기
          </button>
        </div>
      </nav>

      <main>
        <section id="overview" className="section" />
        <section id="day1" className="section" />
        <section id="day2" className="section" />
        <section id="day3" className="section" />
        <section id="confirmed-day1" className="section" />
        <section id="confirmed-day2" className="section" />
        <section id="confirmed-day3" className="section" />
        <section id="map" className="section" />
        <section id="budget" className="section" />
        <section id="checklist" className="section" />
      </main>

      <div id="modal-root" />
      <div id="toast" className="toast" role="status" aria-live="polite" />
    </div>
  );
}
