window.TRIP_DATA = {
  meta: {
    title: "교토 가족 여행 플래너",
    subtitle: "간사이 공항 → 교토 · 옵션 분기형 일정",
    dateRange: "2026-01-20 ~ 2026-01-22",
    travelers: "성인 5인 가족",
    baseCity: "KIX / Kyoto",
    version: "2026-01-11-05",
    weather: {
      updatedAt: "2026-01-11",
      forecastTimestamp: "2026-01-11 21:11 (JST)",
      forecastArea: "교토시(京都市) 단위",
      location: "교토 시내 기준 (KIX~교토역 체감 유사)",
      source: "교토시 일별 예보를 아침/점심/저녁/밤 4블록으로 재구성",
      note: "최근 3년간의 기온 패턴을 참고한 요약치이며, 실시간 예보가 아닙니다. 출발 2~3일 전 최신 예보로 업데이트하세요.",
      days: [
        {
          date: "1/20",
          summary: "흐림 + 가벼운 비",
          min: 0,
          max: 9,
          slots: [
            {
              time: "아침(06-10)",
              min: 0,
              max: 3,
              feels: "-2~1°C",
              status: "노면 차가움",
              precipProb: 20,
              precipType: "흐림",
              wind: "북서 3~5m/s",
              humidity: "50~60%"
            },
            {
              time: "점심(11-14)",
              min: 6,
              max: 9,
              feels: "4~7°C",
              status: "약한 비 가능",
              precipProb: 40,
              precipType: "가벼운 비",
              wind: "서 2~4m/s",
              humidity: "55~70%"
            },
            {
              time: "저녁(15-18)",
              min: 5,
              max: 7,
              feels: "3~5°C",
              status: "비 이어질 수 있음",
              precipProb: 35,
              precipType: "약한 비",
              wind: "서 3~4m/s",
              humidity: "55~70%"
            },
            {
              time: "밤(19-23)",
              min: 0,
              max: 3,
              feels: "-2~1°C",
              status: "젖으면 체감 급락",
              precipProb: 25,
              precipType: "흐림",
              wind: "북서 2~3m/s",
              humidity: "55~70%"
            }
          ],
          outfit: ["두꺼운 패딩", "발열 내의", "목도리/장갑", "두꺼운 양말"],
          tips: ["점심 이후 약한 비 대비로 접이식 우산 추천", "야간 이동 시 손·발 시림 대비"]
        },
        {
          date: "1/21",
          summary: "약간 흐림",
          min: -1,
          max: 8,
          slots: [
            {
              time: "아침(06-10)",
              min: -1,
              max: 2,
              feels: "-4~-1°C",
              status: "가장 추운 시간",
              precipProb: 10,
              precipType: "흐림",
              wind: "북 3~5m/s",
              humidity: "40~50%"
            },
            {
              time: "점심(11-14)",
              min: 3,
              max: 8,
              feels: "2~6°C",
              status: "비 부담 적음",
              precipProb: 10,
              precipType: "흐림",
              wind: "서 2~3m/s",
              humidity: "45~55%"
            },
            {
              time: "저녁(15-18)",
              min: 3,
              max: 6,
              feels: "1~4°C",
              status: "해 지면 급추움",
              precipProb: 10,
              precipType: "흐림",
              wind: "서 3~4m/s",
              humidity: "45~55%"
            },
            {
              time: "밤(19-23)",
              min: 0,
              max: 3,
              feels: "-2~1°C",
              status: "야외 체감 낮음",
              precipProb: 10,
              precipType: "흐림",
              wind: "북서 2~3m/s",
              humidity: "50~60%"
            }
          ],
          outfit: ["롱패딩/다운", "보온 양말", "니트+발열 이너", "장갑"],
          tips: ["도지 장날은 서 있는 시간이 길어 방풍 중요", "야간 이동은 체온 유지용 핫팩 추천"]
        },
        {
          date: "1/22",
          summary: "흐림 + 때때로 소나기",
          min: 1,
          max: 9,
          slots: [
            {
              time: "아침(06-10)",
              min: 1,
              max: 4,
              feels: "-1~2°C",
              status: "습하면 체감↓",
              precipProb: 25,
              precipType: "흐림",
              wind: "북 2~4m/s",
              humidity: "50~60%"
            },
            {
              time: "점심(11-14)",
              min: 5,
              max: 8,
              feels: "3~6°C",
              status: "소나기 가능",
              precipProb: 35,
              precipType: "간헐 비",
              wind: "서 2~3m/s",
              humidity: "55~70%"
            },
            {
              time: "저녁(15-18)",
              min: 3,
              max: 6,
              feels: "1~4°C",
              status: "간헐 비 대비",
              precipProb: 30,
              precipType: "간헐 비",
              wind: "서 2~4m/s",
              humidity: "55~70%"
            },
            {
              time: "밤(19-23)",
              min: 2,
              max: 5,
              feels: "0~3°C",
              status: "이동 중 젖지 않게",
              precipProb: 25,
              precipType: "흐림",
              wind: "북서 2~3m/s",
              humidity: "50~60%"
            }
          ],
          outfit: ["레이어드(니트+패딩)", "목 보호", "방한 모자", "얇은 장갑"],
          tips: ["점심~저녁 간헐 비 대비로 접이식 우산 추천", "공항 이동 전까지 보온 유지"]
        }
      ]
    },
    notes: [
      "시간은 이동 및 대기 포함 권장 범위",
      "현금 필수 구간은 태그로 표기",
      "옵션을 바꾸면 일정과 예산이 자동 재계산"
    ]
  },
  travelers: {
    count: 5,
    label: "성인 5인"
  },
  currency: "JPY",
  passes: [
    {
      name: "교통카드 (ICOCA/Suica)",
      detail: "현금 충전만 가능, 1인 2,000엔 발급권장",
      tags: ["교통", "현금"]
    },
    {
      name: "하루카 특급 (Haruka Express)",
      detail: "QR 발권 후 무인 발권기에서 실물 수령",
      tags: ["공항↔교토"]
    },
    {
      name: "교토 버스·지하철 1일권 (Kyoto Pass)",
      detail: "2일차 이동 집중용 (1,100엔)",
      tags: ["교통", "2일차"]
    }
  ],
  routeSettings: {
    mode: "hybrid",
    onlineProvider: "osrm",
    onlineProfile: "driving"
  },
  ratingApi: {
    mode: "static",
    baseUrl: "https://travel.lucky20220528.workers.dev",
    cacheDays: 7
  },
  ratingsSnapshotUrl: "./ratings.json?v=2026-01-11-05",
  syncApi: {
    baseUrl: "https://travel.lucky20220528.workers.dev"
  },
  routeHints: [
    {
      from: "Kansai International Airport Terminal 1",
      to: "JR Haruka Kansai Airport Station",
      options: [
        { mode: "도보", timeMin: 10, timeMax: 15, costMin: 0, costMax: 0, unit: "group", note: "공항 내 이동" }
      ]
    },
    {
      from: "Kansai International Airport Terminal 1",
      to: "Rinku Premium Outlets",
      options: [
        {
          mode: "전철",
          timeMin: 6,
          timeMax: 8,
          costMin: 370,
          costMax: 370,
          unit: "per_person",
          note: "JR/난카이 이용"
        },
        {
          mode: "셔틀버스",
          timeMin: 18,
          timeMax: 22,
          costMin: 300,
          costMax: 300,
          unit: "per_person",
          note: "T1 1층 12번 승강장 · T2 1층 1번 승강장"
        }
      ]
    },
    {
      from: "Rinku Premium Outlets",
      to: "JR Haruka Kansai Airport Station",
      options: [
        {
          mode: "전철",
          timeMin: 6,
          timeMax: 8,
          costMin: 370,
          costMax: 370,
          unit: "per_person",
          note: "린쿠타운역 ↔ 공항역"
        },
        {
          mode: "셔틀버스",
          timeMin: 18,
          timeMax: 22,
          costMin: 300,
          costMax: 300,
          unit: "per_person",
          note: "아울렛 앞 셔틀버스 정류장"
        }
      ]
    },
    {
      from: "JR Haruka Kansai Airport Station",
      to: "Kyoto Station",
      options: [
        { mode: "하루카 특급", timeMin: 75, timeMax: 85, costMin: 0, costMax: 0, unit: "per_person", note: "티켓 보유 기준" }
      ]
    },
    {
      from: "Kyoto Station",
      to: "Hotel Vischio Kyoto by GRANVIA",
      options: [
        { mode: "도보", timeMin: 2, timeMax: 5, costMin: 0, costMax: 0, unit: "group", note: "하치조 출구" }
      ]
    },
    {
      from: "Kyoto Station",
      to: "To-ji Temple",
      options: [
        { mode: "버스", timeMin: 10, timeMax: 15, costMin: 230, costMax: 230, unit: "per_person" },
        { mode: "도보", timeMin: 15, timeMax: 20, costMin: 0, costMax: 0, unit: "group" }
      ]
    },
    {
      from: "To-ji Temple",
      to: "Nijo Castle",
      options: [
        { mode: "지하철", timeMin: 20, timeMax: 25, costMin: 260, costMax: 260, unit: "per_person" }
      ]
    },
    {
      from: "Nijo Castle",
      to: "Kawaramachi Kyoto",
      options: [
        { mode: "지하철", timeMin: 10, timeMax: 15, costMin: 220, costMax: 260, unit: "per_person" }
      ]
    },
    {
      from: "Kawaramachi Kyoto",
      to: "Kinkaku-ji",
      options: [
        { mode: "버스", timeMin: 30, timeMax: 40, costMin: 230, costMax: 230, unit: "per_person" }
      ]
    },
    {
      from: "Kinkaku-ji",
      to: "Grill Capital Touyoutei",
      options: [
        { mode: "버스", timeMin: 20, timeMax: 30, costMin: 230, costMax: 230, unit: "per_person" }
      ]
    },
    {
      from: "Grill Capital Touyoutei",
      to: "Kyoto Botanical Garden",
      options: [
        { mode: "도보", timeMin: 5, timeMax: 10, costMin: 0, costMax: 0, unit: "group" }
      ]
    },
    {
      from: "Hotel Vischio Kyoto by GRANVIA",
      to: "Sanjusangendo",
      options: [
        { mode: "버스", timeMin: 10, timeMax: 15, costMin: 230, costMax: 230, unit: "per_person" }
      ]
    },
    {
      from: "Sanjusangendo",
      to: "Higashi Honganji Temple",
      options: [
        { mode: "버스", timeMin: 10, timeMax: 15, costMin: 230, costMax: 230, unit: "per_person" },
        { mode: "도보", timeMin: 20, timeMax: 25, costMin: 0, costMax: 0, unit: "group" }
      ]
    },
    {
      from: "Higashi Honganji Temple",
      to: "Kyoto Station",
      options: [
        { mode: "도보", timeMin: 10, timeMax: 15, costMin: 0, costMax: 0, unit: "group" }
      ]
    },
    {
      from: "Kyoto Station",
      to: "JR Haruka Kyoto Station",
      options: [
        { mode: "도보", timeMin: 5, timeMax: 10, costMin: 0, costMax: 0, unit: "group", note: "승강장 이동" }
      ]
    },
    {
      from: "JR Haruka Kyoto Station",
      to: "Kansai International Airport",
      options: [
        { mode: "하루카 특급", timeMin: 75, timeMax: 85, costMin: 0, costMax: 0, unit: "per_person", note: "티켓 보유 기준" }
      ]
    }
  ],
  days: [
    {
      id: "day1",
      label: "1일차 (DAY 1)",
      date: "2026-01-20",
      title: "간사이 공항 → 교토",
      description: "공항 행정 이후 3가지 버전 중 선택",
      baseBlocks: [
        {
          id: "d1-admin",
          start: "13:05",
          end: "14:40",
          title: "입국 수속 + 금융/교통 행정",
          summary: "공항에서 현금 인출, 교통카드 발급, 하루카 티켓까지 한 번에 끝냅니다.",
          details: [
            "T2 도착 → T1 무료 셔틀 이동",
            "세븐은행/이온은행/우체국 ATM",
            "이온은행 ATM은 T1 수하물 찾는 곳 4번 벨트 근처 이용 팁(후기)",
            "ICOCA 발급(보증금 500엔) + 현금 충전",
            "하루카 QR 발권 및 실물 티켓 수령"
          ],
          location: {
            name: "간사이 공항 T1 (KIX T1)",
            mapQuery: "Kansai International Airport Terminal 1"
          },
          nearbyCategories: ["transport"],
          tags: ["공항", "현금필수", "교통"],
          costs: [
            {
              label: "ICOCA 발급",
              min: 2000,
              max: 2000,
              unit: "per_person",
              currency: "JPY",
              category: "transport",
              payment: "cash"
            }
          ]
        }
      ],
      optionGroups: [
        {
          id: "d1-route",
          title: "1일차 코스 선택",
          help: "옵션을 바꾸면 시간표가 자동 변경됩니다.",
          collapsed: true,
          mode: "single",
          default: "airport-meal",
          options: [
            {
              id: "airport-meal",
              label: "옵션 A · 공항 식사 + 린쿠 쇼핑",
              summary: "체력 부담 적음",
              blocks: [
                {
                  id: "d1-airport-lunch-a",
                  start: "14:40",
                  end: "15:40",
                  title: "점심 식사 · 공항 T1",
                  summary: "공항 내 식당에서 여유 있게 식사 후 린쿠로 이동합니다.",
                  details: ["예상 대기 10~20분", "줄 길면 포장 선택"],
                  location: {
                    name: "간사이 공항 T1 식당가 (KIX T1)",
                    mapQuery: "Kansai International Airport Terminal 1"
                  },
                  tags: ["식사", "대기"],
                  costs: [
                    {
                      label: "공항 식사",
                      min: 600,
                      max: 3500,
                      unit: "per_person",
                      currency: "JPY",
                      category: "meal",
                      payment: "both"
                    }
                  ],
                  choices: [
                    {
                      id: "airport-food",
                      title: "공항 식당 선택",
                      mode: "multi",
                      note: "1~2곳 선택 가능",
                      options: [
                        {
                          id: "551",
                          label: "551 호라이 (551 Horai)",
                          note: "오사카 명물 만두, 회전 빠름",
                          menu: "부타만 2개 580엔 · 새우슈마이 960엔",
                          where: "간사이 공항 T1 2층",
                          desc: "따끈한 만두를 빠르게 먹기 좋고 포장도 가능해 공항 이동 전에 특히 편합니다.",
                          mapQuery: "551 Horai Kansai Airport",
                          cost: { "min": 580, "max": 960, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "kineya",
                          label: "키네야 무기마루 (Kineya Mugimaru)",
                          note: "따뜻한 우동 중심, 좌석 식사",
                          menu: "자가제면 우동 600~900엔 · 미니 장어덮밥 세트 1,200~1,500엔",
                          where: "간사이 공항 T1 2층",
                          desc: "뜨끈한 면요리로 속을 편하게 채우기 좋아요. 세트 구성이라 선택이 쉽습니다.",
                          mapQuery: "Kineya Mugimaru Kansai Airport",
                          cost: { "min": 600, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "ganko",
                          label: "간코 스시 (Ganko Sushi)",
                          note: "정갈한 초밥 정식",
                          menu: "초밥 정식 2,500~3,500엔",
                          where: "간사이 공항 T1 3층",
                          desc: "공항에서도 정갈한 초밥 정식을 즐길 수 있는 스시 매장입니다.",
                          mapQuery: "Ganko Sushi Kansai International Airport",
                          cost: { "min": 2500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "nakau-airport",
                          label: "나카우 공항점 (Nakau)",
                          note: "간단·빠른 덮밥",
                          menu: "규동/오야코동 500~700엔",
                          where: "에어로플라자 3층 (보안 전)",
                          desc: "시간이 빠듯할 때 든든하게 먹기 좋아요. 공항역 연결동이라 동선이 편합니다.",
                          mapQuery: "Nakau Kansai Airport Shop",
                          cost: { "min": 500, "max": 700, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "botejyu",
                          label: "보테쥬 1946 (Botejyu 1946)",
                          note: "오코노미야키/야키소바",
                          menu: "오코노미야키 1,200~1,800엔",
                          where: "간사이 공항 T1 2층 (보안 후/국내선)",
                          desc: "오사카 스타일 철판요리를 공항에서 간단히 즐길 수 있어요. (보안 후 구역)",
                          mapQuery: "Botejyu 1946 Kansai International Airport",
                          cost: { "min": 1200, "max": 1800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sukiya",
                          label: "스키야 공항점 (Sukiya)",
                          note: "가성비 규동",
                          menu: "규동/카레 500~800엔",
                          where: "간사이 공항 T1 2층",
                          desc: "24시간 운영으로 시간 제약 없이 빠르게 먹기 좋은 선택지입니다.",
                          mapQuery: "Sukiya Kansai International Airport T1",
                          cost: { "min": 500, "max": 800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "kamukura",
                          label: "도톤보리 카무쿠라 (Kamukura)",
                          note: "오사카 라멘",
                          menu: "라멘 900~1,200엔",
                          where: "간사이 공항 T1 2층",
                          desc: "배추의 단맛이 살아 있는 오사카 라멘으로 따뜻하게 한 끼 해결하기 좋아요.",
                          mapQuery: "Dotonbori Kamukura Kansai International Airport",
                          cost: { "min": 900, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "d1-rinku-shopping-a",
                  start: "15:10",
                  end: "17:00",
                  title: "린쿠 타운 이동 & 쇼핑",
                  summary: "아울렛 쇼핑과 카페를 짧게 즐긴 뒤 공항으로 복귀합니다.",
                  details: [
                    "셔틀버스(추천): T1 1층 12번 / T2 1층 1번 승강장",
                    "셔틀버스 시간표: https://www.kate.co.jp/kr/timetable/detail/SKYB",
                    "전철: 공항역 → 린쿠타운역 6분",
                    "아식스 팩토리 아울렛 30~50% 할인",
                    "브룩클린 로스팅 컴퍼니 라떼 650엔"
                  ],
                  scheduleTable: {
                    title: "KIX → 린쿠 셔틀버스 시간표(발췌)",
                    headers: ["출발(KIX T1)", "도착(린쿠 아울렛)"],
                    rows: [
                      ["09:45", "10:00"],
                      ["10:45", "11:00"],
                      ["11:45", "12:00"],
                      ["13:40", "13:55"],
                      ["14:40", "14:55"],
                      ["15:40", "15:55"],
                      ["17:00", "17:15"],
                      ["18:00", "18:15"],
                      ["19:00", "19:15"]
                    ]
                  },
                  location: {
                    name: "린쿠 프리미엄 아울렛 (Rinku Premium Outlets)",
                    mapQuery: "Rinku Premium Outlets"
                  },
                  tags: ["쇼핑", "카페"],
                  costs: [
                    {
                      label: "카페",
                      min: 650,
                      max: 650,
                      unit: "per_person",
                      currency: "JPY",
                      category: "meal",
                      payment: "card"
                    }
                  ]
                },
                {
                  id: "d1-haruka-a",
                  start: "17:15",
                  end: "18:45",
                  title: "하루카 특급 이동",
                  summary: "하루카 특급으로 교토역까지 이동합니다.",
                  details: ["공항 복귀 후 하루카 탑승", "지정석 추천"],
                  location: {
                    name: "하루카 특급 (Haruka Express)",
                    mapQuery: "JR Haruka Kansai Airport Station"
                  },
                  tags: ["이동"],
                  costs: []
                },
                {
                  id: "d1-kyoto-night-a",
                  start: "19:30",
                  end: "21:30",
                  title: "교토역 도착 + 저녁/야경",
                  summary: "호텔 체크인 후 저녁과 야경을 선택합니다.",
                  details: ["비스키오 교토 바이 그란비아 체크인", "남측 출구 도보 2분"],
                  location: {
                    name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["저녁", "야경"],
                  choices: [
                    {
                      id: "d1-dinner",
                      title: "저녁 식사 선택",
                      mode: "multi",
                      note: "복수 선택 가능 · 카드 가능 / 5인 예약 권장",
                      options: [
                        {
                          id: "moritaya",
                          label: "모리타야 (Moritaya)",
                          note: "전통 스키야키",
                          menu: "스키야키 정식 8,800~13,000엔",
                          where: "JR 교토 이세탄 11층",
                          desc: "150년 전통 스키야키 전문점. 고급스러운 분위기와 야경이 장점입니다.",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro",
                          label: "야키니쿠 히로 (Yakiniku Hiro)",
                          note: "와규 구이",
                          menu: "7종 모둠 5,980엔",
                          where: "교토역 인근",
                          desc: "고기 좋아하는 가족에게 안정적인 선택. 예약하면 대기 시간을 줄일 수 있어요.",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 5980, "max": 5980, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura",
                          label: "카츠쿠라 포르타 (Katsukura Porta)",
                          note: "프리미엄 돈카츠",
                          menu: "돈카츠 세트 2,500엔",
                          where: "교토 포르타 B1층",
                          desc: "바삭한 돈카츠와 깔끔한 정식 구성. 익숙한 메뉴로 만족도가 높습니다.",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sushi-musashi",
                          label: "스시노무사시 교토역 (Sushi no Musashi)",
                          note: "회전초밥",
                          menu: "회전초밥 150엔~",
                          where: "교토역 앞",
                          desc: "회전초밥 스타일이라 취향대로 여러 접시를 고르기 쉽습니다.",
                          mapQuery: "Sushi no Musashi Kyoto Station",
                          cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau",
                          label: "나카우 교토역 (Nakau Kyoto Station)",
                          note: "24시간 간편식",
                          menu: "오야코동 490엔",
                          desc: "늦은 시간에도 빠르게 먹을 수 있는 가성비 선택지입니다.",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "daiichi-asahi",
                          label: "혼케 다이이치아사히 (Honke Daiichi-Asahi)",
                          note: "교토 라멘",
                          menu: "라멘 900~1,200엔",
                          where: "교토역 인근",
                          desc: "줄 서서 먹는 교토 대표 라멘집으로 진한 국물이 특징입니다.",
                          mapQuery: "Honke Daiichi-Asahi",
                          cost: { "min": 900, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "cash" }
                        },
                        {
                          id: "kyoto-ramen-koji",
                          label: "교토 라멘 코지 (Kyoto Ramen Koji)",
                          note: "라멘 몰",
                          menu: "라멘 900~1,400엔",
                          where: "교토역 10층",
                          desc: "유명 라멘집이 모여 있는 층으로 취향에 맞게 고르기 좋아요.",
                          mapQuery: "Kyoto Ramen Koji",
                          cost: { "min": 900, "max": 1400, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "kura-sushi-kyoto",
                          label: "쿠라스시 교토역 주변 (Kura Sushi)",
                          note: "회전초밥",
                          menu: "1접시 150엔~",
                          where: "교토역 주변",
                          desc: "가성비 좋은 회전초밥 체인으로 부담 없이 즐기기 좋습니다.",
                          mapQuery: "Kura Sushi - Kyoto Station Area",
                          cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "donguri-kyoto",
                          label: "교토 동구리 (Donguri)",
                          note: "오코노미야키",
                          menu: "오코노미야키 900~1,500엔",
                          where: "교토역 인근",
                          desc: "교토풍 오코노미야키를 부담 없이 맛볼 수 있는 곳입니다.",
                          mapQuery: "Donguri Kyoto Station",
                          cost: { "min": 900, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        }
                      ]
                    },
                    {
                      id: "d1-night",
                      title: "야식/야경 선택",
                      mode: "multi",
                      note: "복수 선택 가능",
                      options: [
                        {
                          id: "isetan-sale",
                          label: "JR 교토 이세탄 식품관 마감 세일",
                          note: "19:15 이후 30~50% 할인",
                          where: "JR 교토 이세탄 B1~B2층",
                          desc: "도시락·초밥을 저렴하게 살 수 있어 야식/다음날 간식으로 유용합니다.",
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway",
                          label: "스카이웨이 야경",
                          note: "10층 무료 전망",
                          where: "교토역 빌딩 10층",
                          desc: "교토역 내부 이동으로 야경을 가볍게 즐길 수 있어 부모님 동선에 좋아요.",
                          mapQuery: "Kyoto Station Skyway"
                        },
                        {
                          id: "grand-stairway",
                          label: "대계단 LED 쇼",
                          note: "교토역 4~11층",
                          where: "교토역 빌딩 4~11층",
                          desc: "저녁 시간에 무료로 즐길 수 있는 대표 포토 스팟입니다.",
                          mapQuery: "Kyoto Station Grand Stairway"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "rinku-meal",
              label: "옵션 B · 린쿠 식사 + 쇼핑",
              summary: "미식 집중형",
              blocks: [
                {
                  id: "d1-snack-b",
                  start: "14:15",
                  end: "14:30",
                  title: "공항 간단 요기",
                  summary: "공항에서 간단히 먹고 린쿠로 바로 이동합니다.",
                  details: ["T1 1층/2층 로손 (보안 전)", "타마고 산도 250엔 + 가라아게군 240엔"],
                  location: {
                    name: "로손 (Lawson)",
                    mapQuery: "Lawson Kansai Airport Terminal 1"
                  },
                  tags: ["간식"],
                  where: "간사이 공항 T1 1층/2층 (보안 전)",
                  costs: [
                    {
                      label: "간식",
                      min: 250,
                      max: 500,
                      unit: "per_person",
                      currency: "JPY",
                      category: "meal",
                      payment: "cash"
                    }
                  ]
                },
                {
                  id: "d1-rinku-lunch-b",
                  start: "14:50",
                  end: "16:30",
                  title: "린쿠 타운 점심",
                  summary: "린쿠 아울렛에서 본격적인 점심을 즐깁니다.",
                  details: [
                    "셔틀버스 시간표: https://www.kate.co.jp/kr/timetable/detail/SKYB",
                    "예상 대기 20~30분",
                    "린쿠 프리미엄 아울렛 내"
                  ],
                  scheduleTable: {
                    title: "KIX → 린쿠 셔틀버스 시간표(발췌)",
                    headers: ["출발(KIX T1)", "도착(린쿠 아울렛)"],
                    rows: [
                      ["09:45", "10:00"],
                      ["10:45", "11:00"],
                      ["11:45", "12:00"],
                      ["13:40", "13:55"],
                      ["14:40", "14:55"],
                      ["15:40", "15:55"],
                      ["17:00", "17:15"],
                      ["18:00", "18:15"],
                      ["19:00", "19:15"]
                    ]
                  },
                  location: {
                    name: "린쿠 프리미엄 아울렛 (Rinku Premium Outlets)",
                    mapQuery: "Rinku Premium Outlets"
                  },
                  tags: ["식사", "대기"],
                  costs: [
                    {
                      label: "린쿠 식사",
                      min: 125,
                      max: 4800,
                      unit: "per_person",
                      currency: "JPY",
                      category: "meal",
                      payment: "both"
                    }
                  ],
                  choices: [
                    {
                      id: "rinku-meals",
                      title: "린쿠 식당 선택",
                      mode: "multi",
                      note: "1~2곳 선택 가능",
                      options: [
                        {
                          id: "mametora",
                          label: "마메토라 (Mametora)",
                          note: "고급 장어덮밥",
                          menu: "우나쥬 상 4,800엔",
                          desc: "장어를 제대로 즐기고 싶을 때 선택. 점심 시간대 대기 가능성이 있습니다.",
                          mapQuery: "Mametora Rinku Premium Outlets",
                          cost: { "min": 4800, "max": 4800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "komeraku",
                          label: "코메라쿠 (Komeraku)",
                          note: "오차즈케/덮밥",
                          menu: "해산물 덮밥 1,500~1,900엔",
                          desc: "해산물과 덮밥을 가볍게 즐기기 좋고 가격대도 무난합니다.",
                          mapQuery: "Komeraku Chazuke & Karaage Restaurant",
                          cost: { "min": 1500, "max": 1900, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "shake-shack",
                          label: "쉐이크쉑 (Shake Shack)",
                          note: "수제버거",
                          menu: "버거/프라이 1,200~1,800엔",
                          desc: "바다를 보며 먹는 버거로 린쿠 아울렛 대표 인기 메뉴입니다.",
                          mapQuery: "Shake Shack Rinku Premium Outlets",
                          cost: { "min": 1200, "max": 1800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "panda-express",
                          label: "판다 익스프레스 (Panda Express)",
                          note: "미국식 중식",
                          menu: "플레이트 1,200~1,600엔",
                          desc: "푸드코트에서 빠르게 식사하기 좋은 중식 옵션입니다.",
                          mapQuery: "Panda Express Rinku Premium Outlets",
                          cost: { "min": 1200, "max": 1600, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sandaya",
                          label: "산다야 스테이크 (Sandaya)",
                          note: "스테이크",
                          menu: "스테이크 2,500~4,000엔",
                          desc: "고급스러운 스테이크를 여유 있게 즐기고 싶을 때 추천합니다.",
                          mapQuery: "Sandayahonten Steak House - Rinku",
                          cost: { "min": 2500, "max": 4000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sumo-ochi",
                          label: "스모 레스토랑 오치이즈미베야",
                          note: "스모 쇼 + 짱코나베",
                          menu: "체험 세트 3,000~4,500엔",
                          desc: "쇼와 함께 즐기는 체험형 식사로 일정에 특별함을 더할 수 있어요.",
                          mapQuery: "Sumo Restaurant Ochiizumibeya",
                          cost: { "min": 3000, "max": 4500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                      ]
                    }
                  ]
                },
                {
                  id: "d1-rinku-shopping-b",
                  start: "16:30",
                  end: "17:40",
                  title: "아식스 쇼핑",
                  summary: "아울렛 내 아식스 매장을 집중 방문합니다.",
                  details: [
                    "린쿠 아울렛 시사이드 2층(7000번대)",
                    "발볼 넓음: 4E/슈퍼와이드(Super Wide) 표기 확인",
                    "직원 질문: \"4E 모델 있나요?\"(욘-이)"
                  ],
                  location: {
                    name: "아식스 팩토리 아울렛 (린쿠)",
                    mapQuery: "アシックスファクトリーアウトレット りんくう"
                  },
                  tags: ["쇼핑"]
                },
                {
                  id: "d1-haruka-b",
                  start: "17:45",
                  end: "19:34",
                  title: "공항 복귀 + 하루카",
                  summary: "공항으로 돌아와 하루카 특급을 탑승합니다.",
                  details: ["18:14 전후 특급 탑승", "지정석 추천"],
                  location: {
                    name: "하루카 특급 (Haruka Express)",
                    mapQuery: "JR Haruka Kansai Airport Station"
                  },
                  tags: ["이동"]
                },
                {
                  id: "d1-kyoto-night-b",
                  start: "19:30",
                  end: "21:30",
                  title: "교토역 도착 + 저녁/야경",
                  summary: "교토 도착 후 저녁과 야경을 선택합니다.",
                  details: ["비스키오 교토 바이 그란비아 체크인", "남측 출구 도보 2분"],
                  location: {
                    name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["저녁", "야경"],
                  choices: [
                    {
                      id: "d1-dinner-b",
                      title: "저녁 식사 선택",
                      mode: "multi",
                      note: "복수 선택 가능",
                      options: [
                        {
                          id: "moritaya-b",
                          label: "모리타야 (Moritaya)",
                          note: "전통 스키야키",
                          menu: "스키야키 정식 8,800~13,000엔",
                          where: "JR 교토 이세탄 11층",
                          desc: "고급 스키야키 전문점으로 가족 단위 식사에 적합합니다.",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro-b",
                          label: "야키니쿠 히로 (Yakiniku Hiro)",
                          note: "와규 구이",
                          menu: "7종 모둠 5,980엔",
                          desc: "다양한 고기를 한 번에 즐길 수 있어 선택이 쉬워요.",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 5980, "max": 5980, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura-b",
                          label: "카츠쿠라 포르타 (Katsukura Porta)",
                          note: "프리미엄 돈카츠",
                          menu: "돈카츠 세트 2,500엔",
                          where: "교토 포르타 B1층",
                          desc: "기본에 충실한 돈카츠 정식. 실패 확률이 낮아요.",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sushi-musashi-b",
                          label: "스시노무사시 교토역 (Sushi no Musashi)",
                          note: "회전초밥",
                          menu: "회전초밥 150엔~",
                          where: "교토역 앞",
                          desc: "회전초밥 스타일이라 취향대로 여러 접시를 고르기 쉽습니다.",
                          mapQuery: "Sushi no Musashi Kyoto Station",
                          cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau-b",
                          label: "나카우 교토역 (Nakau Kyoto Station)",
                          note: "24시간 간편식",
                          menu: "오야코동 490엔",
                          desc: "늦은 시간에도 빠르게 식사를 끝낼 수 있습니다.",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        }
                      ]
                    },
                    {
                      id: "d1-night-b",
                      title: "야식/야경 선택",
                      mode: "multi",
                      options: [
                        {
                          id: "isetan-sale-b",
                          label: "JR 교토 이세탄 식품관 마감 세일",
                          note: "19:15 이후 30~50% 할인",
                          where: "JR 교토 이세탄 B1~B2층",
                          desc: "현지 도시락을 저렴하게 구매할 수 있어요.",
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway-b",
                          label: "스카이웨이 야경",
                          note: "10층 무료 전망",
                          where: "교토역 빌딩 10층",
                          desc: "긴 이동 없이 야경을 감상하기 좋은 코스입니다.",
                          mapQuery: "Kyoto Station Skyway"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "skip-rinku",
              label: "린쿠 생략 · 교토역 주변",
              summary: "교토 첫인상 집중",
              blocks: [
                {
                  id: "d1-airport-lunch-c",
                  start: "14:40",
                  end: "15:40",
                  title: "공항 풍성한 점심",
                  summary: "린쿠를 생략하고 공항에서 넉넉히 식사합니다.",
                  details: ["린쿠를 생략하고 공항에서 여유 있게 식사"],
                  location: {
                    name: "간사이 공항 T1 식당가 (KIX T1)",
                    mapQuery: "Kansai International Airport Terminal 1"
                  },
                  tags: ["식사"],
                  costs: [
                    {
                      label: "공항 식사",
                      min: 600,
                      max: 3500,
                      unit: "per_person",
                      currency: "JPY",
                      category: "meal",
                      payment: "both"
                    }
                  ],
                  choices: [
                    {
                      id: "airport-food-c",
                      title: "공항 식당 선택",
                      mode: "multi",
                      note: "1~2곳 선택 가능",
                      options: [
                        {
                          id: "551-c",
                          label: "551 호라이 (551 Horai)",
                          note: "오사카 명물 만두",
                          menu: "부타만 2개 580엔",
                          where: "간사이 공항 T1 2층",
                          desc: "빠르게 한 끼 해결할 수 있어 공항 이동에 좋습니다.",
                          mapQuery: "551 Horai Kansai Airport",
                          cost: { "min": 580, "max": 960, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "kineya-c",
                          label: "키네야 무기마루 (Kineya Mugimaru)",
                          note: "따뜻한 우동",
                          menu: "우동 600~900엔",
                          where: "간사이 공항 T1 2층",
                          desc: "속을 편하게 채울 수 있는 면요리 위주 선택지입니다.",
                          mapQuery: "Kineya Mugimaru Kansai Airport",
                          cost: { "min": 600, "max": 900, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "d1-haruka-c",
                  start: "15:44",
                  end: "17:04",
                  title: "하루카 특급 이동",
                  summary: "공항에서 곧바로 교토로 이동합니다.",
                  details: ["지정석 추천", "교토역 도착"],
                  location: {
                    name: "하루카 특급 (Haruka Express)",
                    mapQuery: "JR Haruka Kansai Airport Station"
                  },
                  tags: ["이동"]
                },
                {
                  id: "d1-checkin-c",
                  start: "17:04",
                  end: "17:20",
                  title: "호텔 체크인",
                  summary: "숙소 체크인 후 짐 정리 시간을 확보합니다.",
                  details: ["교토역 하치조 출구 도보 2분"],
                  location: {
                    name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["체크인"]
                },
                {
                  id: "d1-kyoto-walk-c",
                  start: "17:30",
                  end: "19:00",
                  title: "교토역 주변 산책",
                  summary: "체력 소모를 줄이며 교토의 첫인상을 즐깁니다.",
                  details: ["도보권 문화/쇼핑 스팟"],
                  location: {
                    name: "교토역 (Kyoto Station)",
                    mapQuery: "Kyoto Station"
                  },
                  tags: ["산책", "관광"],
                  choices: [
                    {
                      id: "d1-sight-c",
                      title: "산책 코스 선택",
                      mode: "multi",
                      options: [
                        {
                          id: "toji",
                          label: "도지 사찰",
                          note: "오층탑 야간 조명 (입장 500엔)",
                          desc: "교토를 대표하는 오층탑을 가까이 볼 수 있어 첫날 산책 코스로 좋아요.",
                          mapQuery: "To-ji Temple",
                          cost: { "min": 500, "max": 500, "unit": "per_person", "currency": "JPY", "category": "ticket", "payment": "cash" }
                        },
                        {
                          id: "higashi",
                          label: "히가시 혼간지",
                          note: "세계 최대 목조 건축물 (무료)",
                          desc: "넓은 마당과 평지 동선 덕분에 부모님과 함께 걷기 편합니다.",
                          mapQuery: "Higashi Honganji Temple"
                        },
                        {
                          id: "tower-sando",
                          label: "교토 타워 산도",
                          note: "기념품/로컬 맥주",
                          desc: "간단한 쇼핑과 휴식을 동시에 해결할 수 있는 복합 공간입니다.",
                          mapQuery: "Kyoto Tower Sando"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "d1-dinner-c",
                  start: "19:00",
                  end: "20:30",
                  title: "교토역 저녁 정찬",
                  summary: "린쿠 생략으로 생긴 여유를 저녁 식사에 투자합니다.",
                  details: ["린쿠 생략 여유분을 미식에 투자"],
                  location: {
                    name: "교토역 식당가 (Kyoto Station Dining)",
                    mapQuery: "Kyoto Station"
                  },
                  tags: ["저녁"],
                  choices: [
                    {
                      id: "d1-dinner-c-group",
                      title: "저녁 식사 선택",
                      mode: "multi",
                      note: "복수 선택 가능",
                      options: [
                        {
                          id: "moritaya-c",
                          label: "모리타야 (Moritaya)",
                          note: "전통 스키야키",
                          menu: "스키야키 정식 8,800~13,000엔",
                          where: "JR 교토 이세탄 11층",
                          desc: "교토 도착 첫날, 분위기 있게 정찬을 즐길 때 좋습니다.",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro-c",
                          label: "야키니쿠 히로 (Yakiniku Hiro)",
                          note: "와규 구이",
                          menu: "와규 7종 6,000엔",
                          desc: "고기 종류가 다양해서 취향 맞추기 쉽습니다.",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 6000, "max": 6000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "unagi-sora",
                          label: "우나기 소라 (Unagi Sora)",
                          note: "장어덮밥 전문",
                          menu: "히츠마부시 4,500엔",
                          desc: "장어를 제대로 먹고 싶은 날 선택하기 좋은 곳입니다.",
                          mapQuery: "Unagi Sora Kyoto",
                          cost: { "min": 4500, "max": 4500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura-c",
                          label: "카츠쿠라 포르타 (Katsukura Porta)",
                          note: "프리미엄 돈카츠",
                          menu: "히레카츠 세트 2,500엔",
                          where: "교토 포르타 B1층",
                          desc: "부담 없이 모두가 만족하기 쉬운 메뉴입니다.",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sushi-musashi-c",
                          label: "스시노무사시 교토역 (Sushi no Musashi)",
                          note: "회전초밥",
                          menu: "회전초밥 150엔~",
                          where: "교토역 앞",
                          desc: "회전초밥 스타일이라 취향대로 여러 접시를 고르기 쉽습니다.",
                          mapQuery: "Sushi no Musashi Kyoto Station",
                          cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau-c",
                          label: "나카우 교토역 (Nakau Kyoto Station)",
                          note: "24시간 간편식",
                          menu: "오야코동 490엔",
                          desc: "늦게 도착했을 때 가볍게 해결하기 좋습니다.",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                      ]
                    }
                  ]
                },
                {
                  id: "d1-night-c",
                  start: "20:30",
                  end: "21:30",
                  title: "야식 & 야경",
                  summary: "교토역 내부에서 가볍게 야경과 야식을 즐깁니다.",
                  details: ["교토역 실내 야경 코스"],
                  location: {
                    name: "교토역 (Kyoto Station)",
                    mapQuery: "Kyoto Station"
                  },
                  tags: ["야경"],
                  choices: [
                    {
                      id: "d1-night-c-group",
                      title: "야경/야식 선택",
                      mode: "multi",
                      options: [
                        {
                          id: "isetan-c",
                          label: "JR 교토 이세탄 식품관",
                          note: "19:15 이후 마감 세일",
                          where: "JR 교토 이세탄 B1~B2층",
                          desc: "도시락과 초밥을 할인 가격에 구매할 수 있어요.",
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway-c",
                          label: "스카이웨이",
                          note: "10층 무료 전망",
                          where: "교토역 빌딩 10층",
                          desc: "교토역 내부에서 부담 없이 야경을 감상할 수 있습니다.",
                          mapQuery: "Kyoto Station Skyway"
                        },
                        {
                          id: "grand-stairway-c",
                          label: "대계단 LED 쇼",
                          note: "교토역 4~11층",
                          where: "교토역 빌딩 4~11층",
                          desc: "빛 연출이 멋진 야간 포토 스팟입니다.",
                          mapQuery: "Kyoto Station Grand Stairway"
                        },
                        {
                          id: "tokichi",
                          label: "나카무라 토키치 (Nakamura Tokichi)",
                          note: "말차 디저트",
                          menu: "말차 젤리 990엔",
                          where: "JR 교토 이세탄 3층",
                          desc: "진한 말차 디저트를 좋아하면 꼭 들를 만한 곳입니다.",
                          mapQuery: "Nakamura Tokichi Kyoto Station",
                          cost: { "min": 990, "max": 990, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sizuya",
                          label: "시즈야 팥빵 (Sizuya)",
                          note: "교토 인기 빵",
                          menu: "오구라 안팡 250엔",
                          where: "교토역 하치조 출구 1층",
                          desc: "간단한 간식이나 아침용으로 좋아요.",
                          mapQuery: "Sizuya Kyoto Station",
                          cost: { "min": 250, "max": 250, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "cash" }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      tips: ["교통카드 충전과 사찰 입장료는 현금 필요"]
    },
    {
      id: "day2",
      label: "2일차 (DAY 2)",
      date: "2026-01-21",
      title: "전통 마켓 · 유적 · 쇼핑",
      description: "코보산 장날 + 핵심 스팟 집중",
      baseBlocks: [
        {
          id: "d2-breakfast",
          start: "07:30",
          end: "08:20",
          title: "호텔 조식",
          summary: "출발 전 호텔에서 든든하게 식사합니다.",
          details: ["조식 확정", "출발 전 여유롭게 식사"],
          location: {
            name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["조식", "숙소"]
        },
        {
          id: "d2-pass",
          start: "08:30",
          end: "09:20",
          title: "패스/현금 준비",
          summary: "오늘 이동이 많으므로 교통 패스와 현금을 먼저 준비합니다.",
          details: ["교토 버스·지하철 1일권 구매", "현금 5,000엔 이상 준비"],
          location: {
            name: "교토역 (Kyoto Station)",
            mapQuery: "Kyoto Station"
          },
          tags: ["교통", "현금필수"],
          costs: [
            {
              label: "1일권",
              min: 1100,
              max: 1100,
              unit: "per_person",
              currency: "JPY",
              category: "transport",
              payment: "cash"
            }
          ]
        },
        {
          id: "d2-toji",
          start: "09:30",
          end: "11:00",
          title: "도지 코보산 장날",
          summary: "21일에만 열리는 벼룩시장을 여유롭게 둘러봅니다.",
          details: ["매달 21일 벼룩시장", "말차 다완/다구 득템"],
          location: {
            name: "도지 사찰 (To-ji)",
            mapQuery: "To-ji Temple"
          },
          tags: ["시장", "산책"],
          costs: [
            {
              label: "도지 입장",
              min: 0,
              max: 500,
              unit: "per_person",
              currency: "JPY",
              category: "ticket",
              payment: "cash"
            }
          ]
        },
        {
          id: "d2-nijo",
          start: "11:30",
          end: "13:00",
          title: "니조성",
          summary: "교토 대표 유적에서 궁전과 정원을 관람합니다.",
          details: ["나이팅게일 복도", "니노마루 궁전 관람"],
          location: {
            name: "니조성 (Nijo Castle)",
            mapQuery: "Nijo Castle"
          },
          tags: ["유적", "관광"],
          costs: [
            {
              label: "입장료",
              min: 1300,
              max: 1300,
              unit: "per_person",
              currency: "JPY",
              category: "ticket",
              payment: "card"
            }
          ]
        },
        {
          id: "d2-lunch",
          start: "13:30",
          end: "14:40",
          title: "가와라마치 점심",
          summary: "가와라마치에서 넓은 좌석의 점심 식당을 선택합니다.",
          details: ["넓은 테이블석 위주", "브레이크 타임 없는 곳 우선"],
          location: {
            name: "가와라마치 (Kawaramachi)",
            mapQuery: "Kawaramachi Kyoto"
          },
          tags: ["식사"],
          choices: [
            {
              id: "d2-lunch-choice",
              title: "점심 식당 선택",
              mode: "multi",
              note: "1~2곳 선택 가능",
              options: [
                {
                  id: "kaneyo",
                  label: "교고쿠 카네요 (Kyogoku Kaneyo)",
                  note: "두툼한 계란지단 장어덮밥",
                  menu: "킨시동 3,500엔~",
                  desc: "100년 넘는 노포. 장어덮밥이 유명하고 좌석이 넓어 가족 방문에 좋아요.",
                  mapQuery: "Kyogoku Kaneyo",
                  cost: { "min": 3500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "owariya",
                  label: "혼케 오와리야 (Honke Owariya)",
                  note: "전통 소바",
                  menu: "소바 세트 1,800~2,500엔",
                  desc: "550년 전통의 소바집. 담백하고 깔끔한 맛을 선호하면 추천합니다.",
                  mapQuery: "Honke Owariya",
                  cost: { "min": 1800, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "omen",
                  label: "오멘 시조 (Omen Shijo)",
                  note: "채소 우동",
                  menu: "채소 우동 정식 1,800~2,000엔",
                  desc: "신선한 야채를 곁들여 가볍고 건강하게 먹기 좋은 곳입니다.",
                  mapQuery: "Omen Shijo",
                  cost: { "min": 1800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "chaochao",
                  label: "교자 차오차오 (Chao Chao Gyoza)",
                  note: "교자 전문점",
                  menu: "교자 세트 1,000~1,500엔",
                  desc: "바삭한 교자를 다양하게 맛볼 수 있어 가볍게 한 끼 해결하기 좋아요.",
                  mapQuery: "Chao Chao Gyoza Sanjo Kawaramachi",
                  cost: { "min": 1000, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "red-rock",
                  label: "레드락 (Red Rock)",
                  note: "스테이크 덮밥",
                  menu: "스테이크 덮밥 1,300~1,800엔",
                  desc: "산더미 스테이크 덮밥으로 유명한 곳. 사진 찍기 좋은 비주얼입니다.",
                  mapQuery: "Red Rock Kyoto Rokkaku",
                  cost: { "min": 1300, "max": 1800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "katsukura-sanjo",
                  label: "카츠쿠라 산조 본점 (Katsukura)",
                  note: "돈카츠",
                  menu: "돈카츠 세트 1,800~2,500엔",
                  desc: "분위기 좋은 본점에서 돈카츠를 즐길 수 있는 안정적인 선택지입니다.",
                  mapQuery: "Katsukura Sanjo Main Store",
                  cost: { "min": 1800, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "sen-no-kaze",
                  label: "라멘 센노카제 (Ramen Sen-no-Kaze)",
                  note: "교토 라멘",
                  menu: "라멘 900~1,200엔",
                  desc: "진한 육수와 친절한 서비스로 평이 좋은 라멘집입니다.",
                  mapQuery: "Ramen Sen-no-Kaze Kyoto",
                  cost: { "min": 900, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "musashi-sushi",
                  label: "스시노무사시 (Musashi Sushi)",
                  note: "회전초밥",
                  menu: "1접시 150엔~",
                  desc: "가성비 좋은 노포 회전초밥으로 여러 접시 골라 먹기 좋아요.",
                  mapQuery: "Musashi Sushi",
                  cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                }
              ]
            }
          ]
        },
        {
          id: "d2-shopping",
          start: "14:40",
          end: "16:30",
          title: "말차 장비 & 쇼핑",
          summary: "말차 쇼핑과 카페를 도보권에서 해결합니다.",
          details: ["테라마치/가와라마치 도보권"],
          location: {
            name: "테라마치 거리 (Teramachi Street)",
            mapQuery: "Teramachi Street Kyoto"
          },
          tags: ["쇼핑"],
          choices: [
            {
              id: "d2-shopping-choice",
              title: "쇼핑/카페 선택",
              mode: "multi",
              options: [
                {
                  id: "ippodo",
                  label: "잇포도 차호 교토 본점 (Ippodo Tea Co.)",
                  note: "다도구/말차 전문",
                  desc: "입문 세트(다완·차선·차샤쿠 포함) 약 8,000엔, 차선 5,000엔대. 사용법 상담도 가능해요.",
                  mapQuery: "Ippodo Tea Store Kyoto"
                },
                {
                  id: "horaido",
                  label: "호라이도 차포 (Horaido Tea Stall)",
                  note: "다도구 입문",
                  desc: "차완 3,000엔대부터, 나오시 800~1,500엔. 예산 맞춰 고르기 좋아요.",
                  mapQuery: "Horaido Tea Stall Kyoto"
                },
                {
                  id: "ninshu",
                  label: "닌슈 (Ninshu)",
                  note: "도자기/말차 카페",
                  desc: "오무로 야키 차완 6,000~10,000엔, 말차 도구 세트 약 15,000엔.",
                  mapQuery: "Ninshu vessel shop & matcha cafe"
                },
                {
                  id: "ryuoen",
                  label: "류오엔 차점 (Ryuoen Tea Store)",
                  note: "전통 다도구",
                  desc: "현지인 단골이 많은 전통 다구점. 조용한 분위기에서 고를 수 있어요.",
                  mapQuery: "Ryuoen Tea Store Kyoto"
                },
                {
                  id: "yugen",
                  label: "유겐 (YUGEN)",
                  note: "현대적 다도구",
                  desc: "나오시 약 1,100엔, 다카야마 차선 5,000~6,000엔, 차샤쿠 900~1,400엔.",
                  mapQuery: "YUGEN Kyoto"
                },
                {
                  id: "marukyu",
                  label: "마루큐 코야마엔 (Marukyu Koyamaen)",
                  note: "고급 말차",
                  desc: "진한 말차를 찾는 분에게 추천. 인기 제품은 품절이 빠릅니다.",
                  mapQuery: "Marukyu Koyamaen Kyoto"
                },
                {
                  id: "smart-coffee",
                  label: "스마트 커피 (Smart Coffee)",
                  note: "노포 카페",
                  menu: "프렌치 토스트/커피 700~1,200엔",
                  desc: "1930년대부터 이어진 클래식 카페. 잠시 쉬어가기 좋아요.",
                  mapQuery: "Smart Coffee Kyoto",
                  cost: { "min": 700, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "nishiki",
                  label: "니시키 시장 (Nishiki Market)",
                  note: "시장 간식",
                  menu: "꼬치/반찬 300~1,000엔",
                  desc: "짧게 둘러보며 간식을 집어먹기 좋아요. 현금 소액 준비를 추천합니다.",
                  mapQuery: "Nishiki Market",
                  cost: { "min": 300, "max": 1000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "cash" }
                },
                {
                  id: "teramachi",
                  label: "테라마치 거리 (Teramachi Street)",
                  note: "잡화/기념품 쇼핑",
                  desc: "잡화, 기념품, 작은 가게가 모여 있어 쇼핑 동선에 잘 맞습니다.",
                  mapQuery: "Teramachi Street Kyoto"
                },
                {
                  id: "shinkyogoku",
                  label: "신쿄고쿠 상점가 (Shinkyogoku)",
                  note: "실내 상점가",
                  desc: "날씨 영향을 덜 받는 실내 상점가로 가볍게 둘러보기 좋습니다.",
                  mapQuery: "新京極商店街"
                }
              ]
            }
          ]
        },
        {
          id: "d2-kinkakuji",
          start: "17:00",
          end: "18:00",
          title: "금각사",
          summary: "일몰 시간대에 맞춰 대표 명소를 방문합니다.",
          details: ["일몰 직전 황금빛 촬영"],
          location: {
            name: "금각사 (Kinkaku-ji)",
            mapQuery: "Kinkaku-ji"
          },
          tags: ["유적", "현금필수"],
          costs: [
            {
              label: "입장료",
              min: 500,
              max: 500,
              unit: "per_person",
              currency: "JPY",
              category: "ticket",
              payment: "cash"
            }
          ]
        },
        {
          id: "d2-dinner",
          start: "18:30",
          end: "20:00",
          title: "키타야마 저녁",
          summary: "동양정 함박스테이크로 든든하게 마무리합니다.",
          details: ["동양정 함박스테이크", "대기 30~40분 가능"],
          location: {
            name: "동양정 키타야마 (Touyoutei)",
            mapQuery: "Grill Capital Touyoutei"
          },
          tags: ["식사"],
          costs: [
            {
              label: "저녁",
              min: 1800,
              max: 2500,
              unit: "per_person",
              currency: "JPY",
              category: "meal",
              payment: "card"
            }
          ],
          choices: [
            {
              id: "d2-dinner-choice",
              title: "저녁 식당 선택",
              mode: "multi",
              note: "1곳 선택 추천",
              options: [
                {
                  id: "touyoutei",
                  label: "동양정 키타야마 (Touyoutei)",
                  note: "함박스테이크",
                  menu: "함박스테이크 세트 1,800~2,500엔",
                  where: "키타야마 본점",
                  desc: "호일에 싸인 뜨거운 함박스테이크가 대표 메뉴입니다.",
                  mapQuery: "Grill Capital Touyoutei",
                  cost: { "min": 1800, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "tougou",
                  label: "토우고 키타야마 (Tougou)",
                  note: "이탈리안",
                  menu: "파스타/코스 1,500~3,000엔",
                  where: "키타야마 거리",
                  desc: "분위기 있는 이탈리안으로 조용하게 식사하기 좋아요.",
                  mapQuery: "Tougou Kitayama",
                  cost: { "min": 1500, "max": 3000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "inthegreen",
                  label: "인 더 그린 (IN THE GREEN)",
                  note: "식물원 뷰 레스토랑",
                  menu: "피자/파스타 1,800~2,800엔",
                  where: "식물원 옆",
                  desc: "식물원 뷰를 보며 여유롭게 식사할 수 있는 인기 레스토랑입니다.",
                  mapQuery: "In the Green",
                  cost: { "min": 1800, "max": 2800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "katsukura-kitayama",
                  label: "카츠쿠라 키타야마 (Katsukura)",
                  note: "돈카츠",
                  menu: "돈카츠 세트 1,800~2,500엔",
                  where: "키타야마 거리",
                  desc: "모던한 분위기의 돈카츠 전문점으로 가족 식사에 무난합니다.",
                  mapQuery: "Katsukura Kitayama",
                  cost: { "min": 1800, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "briant",
                  label: "브리앙 키타야마 (Briant)",
                  note: "베이커리 레스토랑",
                  menu: "샌드/파스타 1,200~2,000엔",
                  where: "키타야마 거리",
                  desc: "빵이 맛있는 베이커리 식당으로 가볍게 먹기 좋아요.",
                  mapQuery: "Briant Kitayama",
                  cost: { "min": 1200, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                }
              ]
            }
          ]
        },
        {
          id: "d2-lightcycle",
          start: "20:00",
          end: "21:00",
          title: "라이트 사이클 교토",
          summary: "따뜻한 실내에서 밤 전시를 즐기며 하루를 마무리합니다.",
          details: ["교토부립 식물원 온실 미디어 아트"],
          location: {
            name: "교토부립 식물원 (Kyoto Botanical Garden)",
            mapQuery: "Kyoto Botanical Garden"
          },
          tags: ["전시"],
          costs: [
            {
              label: "입장료",
              min: 2300,
              max: 2500,
              unit: "per_person",
              currency: "JPY",
              category: "ticket",
              payment: "card"
            }
          ]
        }
      ],
      tips: [
        "시장/사찰은 카드 불가 많음"
      ]
    },
    {
      id: "day3",
      label: "3일차 (DAY 3)",
      date: "2026-01-22",
      title: "평지 산책 + 공항 복귀",
      description: "교토역 거점 이동으로 체력 절약",
      baseBlocks: [
        {
          id: "d3-breakfast",
          start: "07:30",
          end: "08:20",
          title: "호텔 조식",
          summary: "체크아웃 전 호텔 조식을 확정으로 진행합니다.",
          details: ["조식 확정", "체크아웃 전 여유 식사"],
          location: {
            name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["조식", "숙소"]
        },
        {
          id: "d3-luggage",
          start: "09:30",
          end: "10:00",
          title: "체크아웃 & 짐 보관",
          summary: "짐을 맡겨두고 가볍게 마지막 관광을 시작합니다.",
          details: ["호텔 로비에 짐 보관", "하치조 출구 도보 2분"],
          location: {
            name: "비스키오 교토 바이 그란비아 (Hotel Vischio Kyoto by GRANVIA)",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["체크아웃"]
        },
        {
          id: "d3-sanjusangendo",
          start: "10:00",
          end: "11:30",
          title: "상십삼간당",
          summary: "평지 동선으로 부담 없이 대표 사찰을 관람합니다.",
          details: ["버스 100/206/208 이용", "평지 동선"],
          location: {
            name: "상십삼간당 (Sanjusangendo)",
            mapQuery: "Sanjusangendo"
          },
          tags: ["유적", "현금필수"],
          costs: [
            {
              label: "입장료",
              min: 600,
              max: 600,
              unit: "per_person",
              currency: "JPY",
              category: "ticket",
              payment: "cash"
            }
          ]
        },
        {
          id: "d3-honganji",
          start: "11:45",
          end: "12:45",
          title: "동본원사 (히가시 혼간지)",
          summary: "무료 관람으로 잠시 휴식하며 돌아봅니다.",
          details: ["세계 최대 목조 건축물", "무료 관람"],
          location: {
            name: "히가시 혼간지 (Higashi Honganji)",
            mapQuery: "Higashi Honganji Temple"
          },
          tags: ["산책"]
        },
        {
          id: "d3-lunch",
          start: "13:00",
          end: "14:30",
          title: "교토역 미식 투어",
          summary: "교토역에서 편하게 점심을 선택합니다.",
          details: ["이세탄 11F/포르타 식당가"],
          location: {
            name: "교토역 (Kyoto Station)",
            mapQuery: "Kyoto Station"
          },
          tags: ["식사"],
          choices: [
            {
              id: "d3-lunch-choice",
              title: "점심 식당 선택",
              mode: "multi",
              note: "1~2곳 선택 가능",
              options: [
                {
                  id: "wako",
                  label: "돈카츠 와코 (Wako)",
                  note: "리필 제공",
                  menu: "돈카츠 정식 1,800~2,200엔",
                  where: "JR 교토 이세탄 11층",
                  desc: "밥/양배추 리필이 가능해 든든한 점심으로 좋아요.",
                  mapQuery: "Wako Kyoto Isetan",
                  cost: { "min": 1800, "max": 2200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "wakuden",
                  label: "교토 와쿠덴 (Kyoto Wakuden)",
                  note: "정통 일식",
                  menu: "정식 3,000~4,000엔",
                  where: "JR 교토 이세탄 11층",
                  desc: "조용하고 정갈한 분위기. 여행 마지막 날 차분하게 마무리하기 좋습니다.",
                  mapQuery: "Kyoto Wakuden Isetan",
                  cost: { "min": 3000, "max": 4000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "porta",
                  label: "포르타 식당가 (Porta)",
                  note: "다양한 메뉴",
                  menu: "라멘/덮밥/스시 1,000~2,000엔",
                  where: "교토 포르타 B1~B2층",
                  desc: "각자 취향에 맞는 식당을 바로 고를 수 있어 선택 스트레스가 적습니다.",
                  mapQuery: "Kyoto Porta",
                  cost: { "min": 1000, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "daiichi-asahi-lunch",
                  label: "혼케 다이이치아사히 (Honke Daiichi-Asahi)",
                  note: "교토 라멘",
                  menu: "라멘 900~1,200엔",
                  where: "교토역 인근",
                  desc: "줄 서서 먹는 교토 대표 라멘집으로 빠르게 한 끼 해결하기 좋습니다.",
                  mapQuery: "Honke Daiichi-Asahi",
                  cost: { "min": 900, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "cash" }
                },
                {
                  id: "kyoto-ramen-koji-lunch",
                  label: "교토 라멘 코지 (Kyoto Ramen Koji)",
                  note: "라멘 몰",
                  menu: "라멘 900~1,400엔",
                  where: "교토역 10층",
                  desc: "유명 라멘집이 모여 있는 층으로 선택 폭이 넓습니다.",
                  mapQuery: "Kyoto Ramen Koji",
                  cost: { "min": 900, "max": 1400, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "kura-sushi-lunch",
                  label: "쿠라스시 교토역 (Kura Sushi)",
                  note: "회전초밥",
                  menu: "1접시 150엔~",
                  where: "교토역 주변",
                  desc: "가성비 좋은 회전초밥 체인으로 부담 없이 즐기기 좋습니다.",
                  mapQuery: "Kura Sushi - Kyoto Station Area",
                  cost: { "min": 150, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "donguri-lunch",
                  label: "교토 동구리 (Donguri)",
                  note: "오코노미야키",
                  menu: "오코노미야키 900~1,500엔",
                  where: "교토역 인근",
                  desc: "교토풍 오코노미야키를 부담 없이 즐길 수 있는 선택지입니다.",
                  mapQuery: "Donguri Kyoto Station",
                  cost: { "min": 900, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                }
              ]
            }
          ]
        },
        {
          id: "d3-cafe",
          start: "14:30",
          end: "15:45",
          title: "카페 휴식 & 기념품",
          summary: "여유롭게 카페와 기념품 쇼핑을 마무리합니다.",
          details: ["말차 디저트/기념품 쇼핑"],
          location: {
            name: "교토역 (Kyoto Station)",
            mapQuery: "Kyoto Station"
          },
          tags: ["카페", "쇼핑"],
          choices: [
            {
              id: "d3-cafe-choice",
              title: "카페/선물 선택",
              mode: "multi",
              options: [
                        {
                          id: "tokichi-cafe",
                          label: "나카무라 토키치 (Nakamura Tokichi)",
                          note: "말차 디저트",
                          menu: "말차 젤리 990엔",
                          where: "JR 교토 이세탄 3층",
                          desc: "진한 말차 디저트를 즐기기 좋은 대표 카페입니다.",
                  mapQuery: "Nakamura Tokichi Kyoto Station",
                  cost: { "min": 990, "max": 990, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                        {
                          id: "inoda",
                          label: "이노다 커피 포르타점 (Inoda Coffee)",
                          note: "클래식 카페",
                          menu: "커피/디저트 800~1,200엔",
                          where: "교토 포르타 지하",
                          desc: "레트로한 분위기에서 천천히 쉬기 좋은 포르타 지점입니다.",
                  mapQuery: "Inoda Coffee Kyoto Station Porta",
                  cost: { "min": 800, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                        {
                          id: "tsujiri",
                          label: "츠지리 교토 타워 산도 (Tsujiri)",
                          note: "말차 디저트",
                          menu: "말차 디저트 800~1,200엔",
                          where: "교토 타워 산도 1층",
                          desc: "진한 말차 디저트를 즐기기 좋은 유명 디저트 카페입니다.",
                  mapQuery: "Tsujiri Kyoto Tower Sando",
                  cost: { "min": 800, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                        {
                          id: "ogawa",
                          label: "오가와 커피 (Ogawa Coffee)",
                          note: "로컬 커피",
                          menu: "커피/디저트 800~1,200엔",
                          where: "교토역 B1",
                          desc: "교토 로컬 커피를 즐기기 좋은 매장으로 이동 동선이 편합니다.",
                  mapQuery: "Ogawa Coffee Kyoto Station",
                  cost: { "min": 800, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                        {
                          id: "isetan-b1",
                          label: "이세탄 B1 식품관 (Isetan)",
                          note: "기념품 쇼핑",
                          where: "JR 교토 이세탄 B1~B2층",
                          desc: "말차 과자와 지역 과자를 마지막에 빠르게 구매하기 좋은 곳입니다.",
                  mapQuery: "JR Kyoto Isetan"
                }
              ]
            }
          ]
        },
        {
          id: "d3-haruka",
          start: "16:00",
          end: "16:30",
          title: "짐 찾기 + 하루카 탑승",
          summary: "짐을 찾아 하루카 탑승 준비를 완료합니다.",
          details: ["하루카 43호 16:30 출발", "예비: 16:00 출발 41호"],
          location: {
            name: "교토역 (Kyoto Station)",
            mapQuery: "JR Haruka Kyoto Station"
          },
          tags: ["이동"]
        },
        {
          id: "d3-airport",
          start: "16:30",
          end: "17:54",
          title: "간사이 공항 이동",
          summary: "18시 전후 공항 도착을 목표로 이동합니다.",
          details: ["19:55 비행기 → 18:00 전후 공항 도착 목표"],
          location: {
            name: "간사이 국제공항 (Kansai International Airport)",
            mapQuery: "Kansai International Airport"
          },
          tags: ["공항"]
        }
      ]
    }
  ],
  checklist: [
    { "id": "c1", "label": "현금 인출 완료", "day": "day1", "category": "공항", "time": "14:15~14:40", "place": "KIX T1 1F/2F ATM 존" },
    { "id": "c2", "label": "ICOCA 발급 및 충전", "day": "day1", "category": "공항", "time": "14:15~14:40", "place": "간사이 공항역 JR 발매기" },
    { "id": "c3", "label": "하루카 티켓 수령", "day": "day1", "category": "공항", "time": "14:15~14:40", "place": "공항역 무인 발권기" },
    { "id": "c4", "label": "호텔 체크인", "day": "day1", "category": "숙소", "time": "17:04~17:20", "place": "호텔 비스키오 교토 로비" },
    { "id": "c5", "label": "2일차 1일권 구매", "day": "day2", "category": "교통", "time": "09:00~09:30", "place": "교토역 지하철 매표기" },
    { "id": "c6", "label": "현금 5,000엔 이상 확보", "day": "day2", "category": "현금", "time": "09:00~09:30", "place": "교토역 주변 ATM" },
    { "id": "c7", "label": "동양정 대기번호표 확인", "day": "day2", "category": "식사", "time": "18:30~19:00", "place": "동양정 키타야마 본점" },
    { "id": "c8", "label": "짐 보관 완료", "day": "day3", "category": "숙소", "time": "09:30", "place": "호텔 비스키오 교토 로비" },
    { "id": "c9", "label": "16:00 짐 수령", "day": "day3", "category": "숙소", "time": "16:00", "place": "호텔 비스키오 교토 로비" },
    { "id": "c10", "label": "하루카 43호 탑승", "day": "day3", "category": "교통", "time": "16:30", "place": "교토역 30번 승강장" }
  ],
  shoppingList: [
    {
      "id": "s1",
      "label": "오차즈케(茶漬け)",
      "category": "식품",
      "notes": ["스틱/소포장 위주", "해산물/매실 맛 비교 구매"],
      "tips": ["염도 표기 확인", "뜨거운 물만 있으면 되는 제품 우선"]
    },
    {
      "id": "s2",
      "label": "유자 페이스트 / 유자 소금",
      "category": "조미료",
      "notes": ["요리/차용 겸용 제품 확인", "신맛 강도 체크"],
      "tips": ["원재료(유자 함량) 표기 확인", "냉장/상온 보관 조건 체크"]
    },
    {
      "id": "s3",
      "label": "말차 다도구",
      "category": "다도구",
      "notes": [
        "차완: 입구가 넓은 형태",
        "차선: 80본 또는 100본",
        "차샤쿠: 계량 스푼 타입"
      ],
      "compare": "강릉 말차로 가격과 비교 필요",
      "tips": ["차선은 80본이 관리 쉬움", "나오시(차선 꽂이) 함께 구매"]
    },
    {
      "id": "s4",
      "label": "아식스 신발",
      "category": "패션",
      "notes": ["사이즈/컬러 재고 확인", "면세/쿠폰 여부 확인"],
      "tips": [
        "발볼 타입(2E/4E) 먼저 확인",
        "255~265mm = 25.5/26.0/26.5cm",
        "발볼러 인기: 젤 카야노/님버스/노바블라스트"
      ]
    }
  ],
  globalTips: [
    "교통카드 충전과 사찰 입장료는 현금 필수",
    "공항 탑승 게이트는 항공편별로 변동되니 전광판/앱으로 확인"
  ],
  placeDetails: {
    "kansai international airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary: "입국 수속부터 교통·식사·ATM까지 한 번에 해결되는 간사이 공항의 핵심 터미널입니다.",
      building: "간사이 공항 T1",
      floor: "2~4층",
      area: "중앙 로비 · 국제선 출발층",
      tags: ["공항", "교통", "식사", "ATM"],
      features: ["입국/교통/식사/ATM 집중", "JR·난카이 연결", "T2↔T1 무료 셔틀"],
      pros: ["이동 동선 짧음", "필수 절차를 한 곳에서 완료"],
      cons: ["피크 시간 혼잡", "공항가 가격대"],
      tips: [
        "입국 직후 ATM·교통카드 처리",
        "식사는 포장 활용 시 대기 단축",
        "(공식 지도) 1F 도착층·2F 출발층·4F 국제선 출발층 구역 확인"
      ],
      nearby: [
        {
          name: "세븐은행 ATM (Seven Bank)",
          mapQuery: "Seven Bank Kansai International Airport",
          type: "ATM",
          features: ["트래블로그 출금", "24시간 이용"],
          pros: ["가족 단위 출금에 편리"],
          cons: ["혼잡 가능"]
        },
        {
          name: "이온은행/우체국 ATM",
          mapQuery: "AEON Bank Kansai International Airport",
          type: "ATM",
          features: ["트래블월렛 출금", "현금 확보"],
          pros: ["대체 출금처 확보"],
          cons: ["위치 찾기 필요"]
        },
        {
          name: "JR 발권기/매표소",
          mapQuery: "JR Ticket Office Kansai Airport Station",
          type: "교통",
          features: ["ICOCA 발급", "하루카 티켓 수령"],
          pros: ["공항에서 교통 준비 완료"],
          cons: ["피크 시간 대기"]
        },
        {
          name: "로손 편의점 (Lawson)",
          mapQuery: "Lawson Kansai Airport Terminal 1",
          type: "편의점",
          features: ["간단 요기", "가라아게군/샌드위치"],
          pros: ["빠른 식사 가능"],
          cons: ["좌석 제한"]
        },
        {
          name: "패밀리마트 (FamilyMart)",
          mapQuery: "FamilyMart Kansai International Airport Terminal 1",
          type: "편의점",
          features: ["간단 요기", "음료/간식"],
          pros: ["동선 간단"],
          cons: ["혼잡 가능"]
        },
        {
          name: "도토루 커피 (Doutor Coffee)",
          mapQuery: "Doutor Coffee Kansai International Airport",
          type: "카페",
          features: ["커피/샌드위치", "짧은 휴식"],
          pros: ["짧은 휴식에 적합"],
          cons: ["좌석 제한"]
        },
        {
          name: "551 호라이 (551 Horai)",
          mapQuery: "551 Horai Kansai Airport",
          type: "식사",
          features: ["오사카 명물 만두", "테이크아웃 가능"],
          pros: ["회전 빠름"],
          cons: ["줄이 길 수 있음"]
        },
        {
          name: "키네야 무기마루 (Kineya Mugimaru)",
          mapQuery: "Kineya Mugimaru Kansai Airport",
          type: "식사",
          features: ["우동/덮밥 세트"],
          pros: ["따뜻한 식사"],
          cons: ["혼잡 가능"]
        },
        {
          name: "간코 스시 (Ganko Sushi)",
          mapQuery: "Ganko Sushi Kansai International Airport",
          type: "식사",
          features: ["초밥 정식", "정갈한 일식"],
          pros: ["가족 식사에 적합"],
          cons: ["가격대 있음"]
        },
        {
          name: "나카우 공항점 (Nakau)",
          mapQuery: "Nakau Kansai Airport Shop",
          type: "식사",
          features: ["규동/오야코동", "빠른 회전"],
          pros: ["가성비"],
          cons: ["좌석 한정"]
        },
        {
          name: "보테쥬 1946 (Botejyu 1946)",
          mapQuery: "Botejyu 1946 Kansai International Airport",
          type: "식사",
          features: ["오코노미야키", "철판요리"],
          pros: ["오사카 스타일 식사"],
          cons: ["식사 시간 대기"]
        },
        {
          name: "스타벅스 (Starbucks)",
          mapQuery: "Starbucks Kansai Airport Terminal 1",
          type: "카페",
          features: ["커피/음료", "테이크아웃"],
          pros: ["카페인 충전"],
          cons: ["혼잡 가능"]
        },
        {
          name: "스키야 공항점 (Sukiya)",
          mapQuery: "Sukiya Kansai International Airport T1",
          type: "식사",
          features: ["가성비 규동", "24시간 운영"],
          pros: ["빠른 식사"],
          cons: ["혼잡 가능"]
        },
        {
          name: "도톤보리 카무쿠라 (Kamukura)",
          mapQuery: "Dotonbori Kamukura Kansai International Airport",
          type: "식사",
          features: ["오사카 라멘", "따뜻한 국물"],
          pros: ["든든한 한 끼"],
          cons: ["식사 시간 대기"]
        },
        {
          name: "에스프레소&베이커리",
          mapQuery: "Espresso & Bakery Kansai International Airport",
          type: "카페",
          features: ["베이커리", "출국 전 간단 식사"],
          pros: ["간단한 테이크아웃"],
          cons: ["좌석 제한"]
        },
        {
          name: "KIX DUTY FREE",
          mapQuery: "KIX DUTY FREE",
          type: "쇼핑",
          features: ["면세 쇼핑", "화장품/주류"],
          pros: ["출국 전 쇼핑"],
          cons: ["혼잡 가능"]
        }
      ]
    },
    "kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary: "교토·오사카 관문 공항으로 T1/T2가 분리되어 있어 터미널을 먼저 확인하는 것이 중요합니다.",
      tags: ["공항", "교통"],
      features: ["국제선 허브", "T1/T2 분리", "공항철도 연결"],
      pros: ["교통 접근성 좋음", "시설 다양"],
      cons: ["보안/이동 대기 시간", "터미널 간 이동 필요"],
      tips: ["항공사 터미널 확인 후 이동", "셔틀 시간표 미리 확인"],
      nearby: []
    },
    "rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "공항에서 전철로 5분 거리에 있는 대형 아울렛으로, 쇼핑과 식사를 한 번에 해결하기 좋은 곳입니다.",
      building: "린쿠 프리미엄 아울렛",
      area: "메인 사이드 · 시사이드",
      tags: ["아울렛", "쇼핑", "공항근처"],
      features: ["메인/시사이드 구역", "야외 쇼핑 동선", "식사/카페 선택지"],
      pros: ["브랜드 다양", "할인율 높음"],
      cons: ["바람/추위 영향", "식사 대기 발생"],
      tips: [
        "셔틀버스 이용 시 아울렛 바로 앞 하차",
        "여권 지참 시 5,000엔 이상 구매 면세",
        "인포메이션 센터에서 외국인 쿠폰 확인",
        "코인락커 위치 먼저 확인 후 쇼핑",
        "시사이드(아식스·몽벨) → 메인(나이키·폴로) 순으로 동선 추천",
        "신발은 박스 측면 WIDE/4E 표기 먼저 확인",
        "255~265mm는 일본 표기 25.5/26.0/26.5",
        "(공식 사이트) 매장 찾기/안내도 참고"
      ],
      links: [
        { label: "린쿠 아울렛 공식 사이트", url: "https://www.premiumoutlets.co.jp/rinku/" }
      ],
      nearby: [
        {
          name: "아식스 팩토리 아울렛",
          mapQuery: "アシックスファクトリーアウトレット りんくう",
          type: "쇼핑",
          features: ["시사이드 2층", "러닝/워킹화"],
          pros: ["일본 브랜드 할인"],
          cons: ["사이즈 품절 가능"]
        },
        {
          name: "오니츠카 타이거",
          mapQuery: "Onitsuka Tiger Rinku Premium Outlets",
          type: "쇼핑",
          features: ["시사이드 1층", "스니커즈"],
          pros: ["인기 모델 득템"],
          cons: ["매장 혼잡"]
        },
        {
          name: "나이키 유나이트 (Nike Unite)",
          mapQuery: "Nike Unite Rinku Premium Outlets",
          type: "쇼핑",
          features: ["메인 사이드 2층", "대형 매장"],
          pros: ["재고 다양"],
          cons: ["피크 시간 대기"]
        },
        {
          name: "아디다스 (Adidas)",
          mapQuery: "Adidas Rinku Premium Outlets",
          type: "쇼핑",
          features: ["메인 사이드 1층", "스포츠웨어"],
          pros: ["행사 할인"],
          cons: ["혼잡 가능"]
        },
        {
          name: "뉴발란스 (New Balance)",
          mapQuery: "New Balance Rinku Premium Outlets",
          type: "쇼핑",
          features: ["시사이드 1층", "스니커즈"],
          pros: ["실용 라인업"],
          cons: ["주말 대기"]
        },
        {
          name: "몽벨 (Mont-bell)",
          mapQuery: "Mont-bell Rinku Premium Outlets",
          type: "쇼핑",
          features: ["시사이드 2층", "아웃도어"],
          pros: ["가격 메리트 큼"],
          cons: ["인기 품목 빠짐"]
        },
        {
          name: "스노우피크 (Snow Peak)",
          mapQuery: "Snow Peak Rinku Premium Outlets",
          type: "쇼핑",
          features: ["시사이드 1층", "캠핑/의류"],
          pros: ["감성 아이템"],
          cons: ["가격대 있음"]
        },
        {
          name: "폴로 랄프로렌",
          mapQuery: "Polo Ralph Lauren Rinku Premium Outlets",
          type: "쇼핑",
          features: ["메인 사이드 1층", "패션/키즈"],
          pros: ["선물용 인기"],
          cons: ["대기 가능"]
        },
        {
          name: "린쿠 마블 비치 (Rinku Marble Beach)",
          mapQuery: "Rinku Marble Beach",
          type: "산책",
          features: ["바다 산책로", "노을 명소"],
          pros: ["사진 포인트"],
          cons: ["날씨 영향"]
        },
        {
          name: "린쿠 공원 (Rinku Park)",
          mapQuery: "Rinku Park",
          type: "산책",
          features: ["대형 공원", "해변 산책"],
          pros: ["여유로운 산책"],
          cons: ["날씨 영향"]
        },
        {
          name: "린쿠노유 (Rinku no Yu)",
          mapQuery: "Rinku no Yu",
          type: "휴식",
          features: ["온천/사우나", "피로 회복"],
          pros: ["여행 피로 해소"],
          cons: ["시간 필요"]
        },
        {
          name: "린쿠 시클 (Rinku Pleasure Town Seacle)",
          mapQuery: "Rinku Pleasure Town Seacle",
          type: "쇼핑",
          features: ["쇼핑/카페 복합몰"],
          pros: ["비교적 실내 동선"],
          cons: ["혼잡 가능"]
        },
        {
          name: "이온몰 린쿠 센난 (Aeon Mall)",
          mapQuery: "Aeon Mall Rinku Sennan",
          type: "쇼핑",
          features: ["대형 몰", "실내 동선"],
          pros: ["우천 시 대안"],
          cons: ["이동 필요"]
        },
        {
          name: "린쿠 커피 (RINKU COFFEE)",
          mapQuery: "RINKU COFFEE",
          type: "카페",
          features: ["카페 휴식", "가벼운 음료"],
          pros: ["짧은 휴식에 적합"],
          cons: ["좌석 한정"]
        },
        {
          name: "쉐이크쉑 (Shake Shack)",
          mapQuery: "Shake Shack Rinku Premium Outlets",
          type: "식사",
          features: ["수제버거", "바다 전망"],
          pros: ["인기 메뉴"],
          cons: ["대기 가능"]
        },
        {
          name: "판다 익스프레스 (Panda Express)",
          mapQuery: "Panda Express Rinku Premium Outlets",
          type: "식사",
          features: ["미국식 중식", "푸드코트"],
          pros: ["빠른 식사"],
          cons: ["피크 시간 혼잡"]
        },
        {
          name: "산다야 스테이크 (Sandaya)",
          mapQuery: "Sandayahonten Steak House - Rinku",
          type: "식사",
          features: ["스테이크 전문"],
          pros: ["특별한 한 끼"],
          cons: ["가격대 높음"]
        },
        {
          name: "스모 레스토랑 오치이즈미베야",
          mapQuery: "Sumo Restaurant Ochiizumibeya",
          type: "체험식사",
          features: ["스모 쇼", "짱코나베"],
          pros: ["체험형 식사"],
          cons: ["예약 확인 필요"]
        },
        {
          name: "마메토라 (Mametora)",
          mapQuery: "Mametora Rinku Premium Outlets",
          type: "식사",
          features: ["장어덮밥 전문"],
          pros: ["제대로 된 한 끼"],
          cons: ["대기 가능"]
        },
        {
          name: "코메라쿠 (Komeraku)",
          mapQuery: "Komeraku Chazuke & Karaage Restaurant",
          type: "식사",
          features: ["오차즈케/덮밥"],
          pros: ["가성비"],
          cons: ["점심 혼잡"]
        },
        {
          name: "스타벅스 린쿠 아울렛",
          mapQuery: "Starbucks Coffee - Rinku Premium Outlets",
          type: "카페",
          features: ["커피/음료", "휴식"],
          pros: ["동선 내 휴식"],
          cons: ["혼잡 가능"]
        },
        {
          name: "스노우피크 카페 (Snow Peak Cafe)",
          mapQuery: "Snow Peak Cafe & Dining",
          type: "카페",
          features: ["캠핑 감성", "바다 뷰"],
          pros: ["분위기 좋음"],
          cons: ["대기 가능"]
        },
        {
          name: "스타벅스 이온몰 린쿠 센난",
          mapQuery: "Starbucks Coffee - Aeon Mall Rinku Sennan",
          type: "카페",
          features: ["넓은 좌석", "실내"],
          pros: ["편한 휴식"],
          cons: ["이동 필요"]
        },
        {
          name: "고디바 (GODIVA)",
          mapQuery: "GODIVA Rinku Premium Outlets",
          type: "디저트",
          features: ["초콜릿/아이스"],
          pros: ["간단한 선물"],
          cons: ["가격대 높음"]
        }
      ]
    },
    "kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토의 핵심 교통 허브로 쇼핑, 식사, 야경까지 한 번에 해결할 수 있는 복합 공간입니다.",
      tags: ["교통", "쇼핑", "식사"],
      features: ["교통 허브", "백화점/식당 밀집", "야경 포인트"],
      pros: ["이동이 편리", "식사 선택지 다양"],
      cons: ["동선 복잡", "피크 시간 혼잡"],
      tips: ["층별 안내도 먼저 확인", "식사 시간 분산"],
      nearby: [
        {
          name: "교토 타워 (Kyoto Tower)",
          mapQuery: "Kyoto Tower",
          type: "전망",
          features: ["전망대", "야경"],
          pros: ["도보 접근 용이"],
          cons: ["대기 발생"]
        },
        {
          name: "교토 라멘 코지 (Kyoto Ramen Koji)",
          mapQuery: "Kyoto Ramen Koji",
          type: "식사",
          features: ["라멘 전문 존", "테마형 식당가"],
          pros: ["취향 선택 폭 넓음"],
          cons: ["식사 시간 대기"]
        },
        {
          name: "혼케 다이이치아사히 (Honke Daiichi-Asahi)",
          mapQuery: "Honke Daiichi-Asahi",
          type: "식사",
          features: ["교토 라멘", "줄 서는 맛집"],
          pros: ["라멘 명가 경험"],
          cons: ["대기 길 수 있음"]
        },
        {
          name: "가츠쿠라 교토역 빌딩점",
          mapQuery: "Katsukura Kyoto Station Building",
          type: "식사",
          features: ["프리미엄 돈카츠", "정식 구성"],
          pros: ["가족 식사 적합"],
          cons: ["피크 시간 대기"]
        },
        {
          name: "쿠라 스시 교토역 인근",
          mapQuery: "Kura Sushi - Kyoto Station Area",
          type: "식사",
          features: ["회전초밥", "가성비"],
          pros: ["메뉴 선택 폭 넓음"],
          cons: ["대기 가능"]
        },
        {
          name: "교토 동구리 (Donguri)",
          mapQuery: "Donguri Kyoto Station",
          type: "식사",
          features: ["오코노미야키", "철판 요리"],
          pros: ["든든한 한 끼"],
          cons: ["점심/저녁 혼잡"]
        },
        {
          name: "이온몰 교토 (Aeon Mall Kyoto)",
          mapQuery: "Aeon Mall Kyoto",
          type: "쇼핑",
          features: ["대형 몰", "실내 동선"],
          pros: ["우천 시 대안"],
          cons: ["이동 필요"]
        },
        {
          name: "교토 타워 산도 (Kyoto Tower Sando)",
          mapQuery: "Kyoto Tower Sando",
          type: "쇼핑",
          features: ["로컬 맥주/기념품"],
          pros: ["짧은 일정에 적합"],
          cons: ["혼잡 가능"]
        },
        {
          name: "츠지리 교토 타워 산도",
          mapQuery: "Tsujiri Kyoto Tower Sando",
          type: "카페",
          features: ["말차 디저트", "간단 휴식"],
          pros: ["디저트 만족도"],
          cons: ["대기 가능"]
        },
        {
          name: "오가와 커피 교토역",
          mapQuery: "Ogawa Coffee Kyoto Station",
          type: "카페",
          features: ["로컬 커피", "빠른 휴식"],
          pros: ["동선 편리"],
          cons: ["좌석 제한"]
        },
        {
          name: "이노다 커피 포르타점",
          mapQuery: "Inoda Coffee Kyoto Station Porta",
          type: "카페",
          features: ["클래식 카페", "디저트"],
          pros: ["레트로 분위기"],
          cons: ["대기 가능"]
        },
        {
          name: "스타벅스 교토역 서쪽 출구",
          mapQuery: "Starbucks Coffee - JR Kyoto Station West Entrance",
          type: "카페",
          features: ["커피/음료", "테이크아웃"],
          pros: ["동선 짧음"],
          cons: ["피크 시간 혼잡"]
        },
        {
          name: "빅카메라 교토역",
          mapQuery: "Bic Camera Kyoto Station",
          type: "쇼핑",
          features: ["가전/기념품", "대형 매장"],
          pros: ["선물 구매"],
          cons: ["체류 시간 길어짐"]
        },
        {
          name: "요도바시 카메라 교토",
          mapQuery: "Yodobashi Camera Kyoto",
          type: "쇼핑",
          features: ["전자기기/잡화", "대형 매장"],
          pros: ["선물/필요 물품 구매"],
          cons: ["체류 시간 길어질 수 있음"]
        },
        {
          name: "교토 아반티 (Kyoto Avanti)",
          mapQuery: "Kyoto Avanti",
          type: "쇼핑",
          features: ["쇼핑몰", "돈키호테 입점"],
          pros: ["쇼핑 동선 간단"],
          cons: ["사람 많음"]
        },
        {
          name: "교토역 스카이웨이 (Kyoto Station Skyway)",
          mapQuery: "Kyoto Station Skyway",
          type: "야경",
          features: ["무료 전망", "실내 이동"],
          pros: ["밤 산책"],
          cons: ["혼잡 가능"]
        },
        {
          name: "교토역 대계단 (Kyoto Station Grand Stairway)",
          mapQuery: "Kyoto Station Grand Stairway",
          type: "이벤트",
          features: ["LED 쇼", "사진 포인트"],
          pros: ["무료 관람"],
          cons: ["피크 타임 혼잡"]
        },
        {
          name: "교토 포르타 (Porta)",
          mapQuery: "Kyoto Porta",
          type: "식사/쇼핑",
          features: ["지하 상가", "다양한 식당"],
          pros: ["날씨 영향 적음"],
          cons: ["사람 많음"]
        },
        {
          name: "JR 교토 이세탄 식품관",
          mapQuery: "JR Kyoto Isetan",
          type: "식사/쇼핑",
          features: ["도시락/디저트", "마감 세일"],
          pros: ["야식/선물 구매"],
          cons: ["저녁 혼잡"]
        },
        {
          name: "나카무라 토키치 (Nakamura Tokichi)",
          mapQuery: "Nakamura Tokichi Kyoto Station",
          type: "카페",
          features: ["말차 디저트"],
          pros: ["디저트 만족도"],
          cons: ["대기 가능"]
        },
        {
          name: "시즈야 (Sizuya)",
          mapQuery: "Sizuya Kyoto Station",
          type: "베이커리",
          features: ["교토 팥빵"],
          pros: ["간단한 간식"],
          cons: ["품절 가능"]
        }
      ]
    },
    "jr haruka kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 하루카 특급 승강장으로 공항 복귀 때 이용하는 출발 지점입니다.",
      building: "교토역",
      area: "30번 승강장",
      tags: ["하루카", "JR", "교통"],
      features: ["하루카 특급 승강장", "교토역 내부", "직통 공항 이동"],
      pros: ["직통 이동", "표지판 안내"],
      cons: ["출발 전 혼잡 가능"],
      tips: ["출발 10분 전 승강장 도착", "플랫폼 번호 확인"]
    },
    "sushi no musashi kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 앞의 회전초밥 체인으로 간단히 한 끼 해결하기 좋습니다.",
      area: "교토역 앞",
      tags: ["회전초밥", "가성비", "빠른식사"],
      features: ["회전초밥", "빠른 회전", "가볍게 한 끼"],
      pros: ["메뉴 선택 쉬움", "회전 빠름"],
      cons: ["피크 시간 대기"],
      tips: ["기본 접시로 가볍게 시작", "혼잡 시간 피하기"]
    },
    "starbucks coffee - jr kyoto station west entrance": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 서쪽 출구 근처에 있어 이동 중 잠깐 쉬기 좋은 카페입니다.",
      building: "교토역 (서쪽 출구)",
      floor: "1층",
      tags: ["카페", "테이크아웃", "역내"],
      features: ["커피/음료", "테이크아웃", "역내 접근성"],
      pros: ["동선 짧음", "이동 중 활용"],
      cons: ["혼잡 가능"],
      tips: ["모바일 주문 활용", "좌석 없으면 포장 추천"]
    },
    "yodobashi camera kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 바로 옆 대형 전자상가로 필요한 물품을 한번에 구매할 수 있습니다.",
      building: "요도바시 카메라 교토",
      tags: ["쇼핑", "전자상가", "대형매장"],
      features: ["전자기기/잡화", "대형 매장", "면세/세일"],
      pros: ["선물/필요 물품 구매", "품목 다양"],
      cons: ["체류 시간 길어질 수 있음"],
      tips: ["구매 리스트 미리 정리", "면세 가능 여부 확인"]
    },
    "kyoto station skyway": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 내부 10층 통로에서 무료로 야경을 볼 수 있는 전망 코스입니다.",
      building: "교토역 빌딩",
      floor: "10층",
      tags: ["야경", "무료", "실내"],
      features: ["무료 전망", "실내 동선", "야경 포인트"],
      pros: ["야경 감상", "실내 관람"],
      cons: ["혼잡 가능"],
      tips: ["일몰 직후 방문", "대계단과 함께 동선 구성"]
    },
    "kyoto station grand stairway": {
      rating: null,
      ratingSource: "Google",
      summary: "LED 조명 쇼가 열리는 계단형 광장으로 무료 야경 포인트로 활용하기 좋습니다.",
      building: "교토역 빌딩",
      floor: "4~11층",
      tags: ["야경", "무료", "포토"],
      features: ["LED 쇼 상영", "대계단 전망 포인트", "교토역 내부 연결"],
      pros: ["무료 관람", "야경 사진 포인트"],
      cons: ["혼잡 가능", "쇼 시작 전 대기"],
      tips: ["쇼 시작 시간 맞춰 방문", "대계단 상단에서 사진 찍기"]
    },
    "kyoto tower": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 앞 대표 전망대로 시내 야경을 한눈에 볼 수 있습니다.",
      building: "교토 타워",
      floor: "전망대",
      tags: ["전망", "야경", "대표명소"],
      features: ["전망대", "도심 야경", "교토역 앞 위치"],
      pros: ["대표 야경 포인트", "접근성 좋음"],
      cons: ["입장료 필요", "피크 시간 혼잡"],
      tips: ["일몰 직후 방문", "야경 중심으로 관람"]
    },
    "kyoto tower sando": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 타워 옆 쇼핑/맛집 복합 공간으로 짧게 들러 기념품과 로컬 먹거리를 살 수 있습니다.",
      building: "교토 타워 산도",
      floor: "B1~2층",
      tags: ["기념품", "맥주", "실내"],
      features: ["로컬 맥주/푸드홀", "기념품 매장", "실내 동선"],
      pros: ["짧은 일정에 적합", "날씨 영향 적음"],
      cons: ["혼잡 가능", "좌석 제한"],
      tips: ["지하 푸드홀 먼저 확인", "소포장 기념품 위주로 구매"]
    },
    "jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 백화점 식품관으로 마감 세일 시간에 도시락과 초밥을 저렴하게 살 수 있습니다.",
      building: "JR 교토 이세탄 (교토역 빌딩)",
      floor: "B1~B2층 (식품관)",
      tags: ["식품관", "야식", "기념품"],
      features: ["백화점 식품관", "마감 세일", "포장 전문 매장"],
      pros: ["야식/선물 구매", "선택 폭 넓음"],
      cons: ["저녁 혼잡", "품절 빠름"],
      tips: ["19:15 이후 세일 코너 확인", "보냉팩 필요 시 구매"]
    },
    "hotel vischio kyoto by granvia": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 남쪽 출구에서 도보 2분 거리의 숙소로, 조식 포함 일정에 최적입니다.",
      tags: ["숙소", "조식", "교토역"],
      features: ["교토역 도보 2분", "조식 제공", "짐 보관 가능"],
      pros: ["짐 이동 편리", "아침 동선 안정적"],
      cons: ["체크인/조식 시간 혼잡 가능"],
      tips: ["체크인 전 짐 보관 먼저 요청", "조식은 피크 전 시간대 추천"]
    },
    "lawson kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary:
        "공항 내 편의점으로 짧은 시간에 간단한 요기와 음료를 해결할 수 있습니다. (공식 지도: T1 1F/2F 보안 전, 4F 국제선 출발층)",
      building: "간사이 공항 T1",
      floor: "1층 · 2층 · 4층",
      area: "보안 전 구역",
      tags: ["편의점", "간식", "빠른식사"],
      features: ["샌드위치/가라아게군", "간단 요기", "빠른 회전"],
      pros: ["시간 절약", "동선 간단"],
      cons: ["좌석 제한", "혼잡 가능"],
      tips: [
        "이동 전 바로 먹을 간식 우선 구매",
        "전자레인지 이용 가능 여부 확인",
        "(공식 지도 표식) 1F 쇼핑 No.3 · 2F 쇼핑 No.4 · 4F 쇼핑 No.2"
      ]
    },
    "seven bank kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "트래블로그 등 해외카드 출금이 가능한 대표 ATM입니다. (공식 지도: T1 1F 북쪽 도착층/보안 전, 2F 중앙, 4F 국제선 출발층)",
      building: "간사이 공항 T1",
      floor: "1층 북측 · 2층 중앙 · 4층 출발층",
      area: "보안 전 구역",
      tags: ["ATM", "현금", "트래블로그"],
      features: ["24시간 이용", "국제카드 출금", "여러 대 설치"],
      pros: ["가족 단위 출금에 편리", "접근성 좋음"],
      cons: ["피크 시간 혼잡"],
      tips: [
        "대기 줄이 길면 다른 층 ATM 활용",
        "인당 필요한 현금 미리 계산",
        "(공식 지도 표식) 1F 서비스 No.10, 2F 서비스 No.23, 4F 서비스 No.12",
        "(공식 지도) 1F No.10은 Japan Post Bank ATM과 함께 표기",
        "(주변 표식) Global WiFi North(19) · 환전소 North Shop(9) 근처",
        "(후기) 세관 통과 후 도착홀 정면 ATM 존으로 설명",
        "(후기) 2F ANA 카운터 맞은편/출발 로비 ATM 코너 언급",
        "(후기) 2F Tasty Street 간판 맞은편이라는 글 다수",
        "(로케이터) 국제선 북 출국심사장 앞 7Bank ATM 표기"
      ],
      links: [
        { label: "KIX ATM 안내", url: "https://www.kansai-airport.or.jp/en/service/money/04.html" },
        { label: "KIX T1 1F 지도", url: "https://www.kansai-airport.or.jp/en/map/t1/1f.html" },
        { label: "KIX T1 2F 지도", url: "https://www.kansai-airport.or.jp/en/map/t1/2f.html" },
        { label: "KIX T1 4F 지도", url: "https://www.kansai-airport.or.jp/en/map/t1/4f.html" },
        { label: "InsideKyoto 후기", url: "https://www.insidekyoto.com/arriving-at-kansai-international-airport-kix" },
        { label: "Seven Bank 로케이터", url: "https://location.sevenbank.co.jp/sevenbank/spot/detail?code=0000021349" },
        { label: "후기: ANA 카운터 맞은편", url: "https://mintaka3432.tistory.com/7" }
      ]
    },
    "aeon bank kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "트래블월렛 등 선불카드 출금에 유용한 ATM입니다. (공식 지도: T1 1F 북쪽 도착층/보안 전, 2F 중앙 출발층/보안 전) 수하물 대기 중 4번 벨트 근처 ATM을 이용하면 동선이 효율적입니다.",
      building: "간사이 공항 T1",
      floor: "1층 북측 · 2층 중앙",
      area: "보안 전 구역",
      tags: ["ATM", "현금", "트래블월렛"],
      features: ["국내 카드 출금", "대체 출금처", "우체국/이온은행 ATM"],
      pros: ["현금 확보 용이", "대기 분산"],
      cons: ["위치 확인 필요"],
      tips: [
        "수수료/환율 조건 확인",
        "소액 현금 먼저 확보",
        "(공식 지도 표식) 1F 서비스 No.32, 2F 서비스 No.23",
        "(후기) 1F 도착홀 ATM 존에 세븐/우체국 ATM과 함께 표기",
        "(후기) 수하물 찾는 곳 4번 벨트 근처 ATM 이용 팁 다수",
        "(로케이터) 2F 국내선 남 출발구 ATM 코너 표기"
      ],
      links: [
        { label: "KIX ATM 안내", url: "https://www.kansai-airport.or.jp/en/service/money/04.html" },
        { label: "KIX T1 1F 지도(영문)", url: "https://www.kansai-airport.or.jp/en/map/t1/1f.html" },
        { label: "KIX T1 2F 지도(영문)", url: "https://www.kansai-airport.or.jp/en/map/t1/2f.html" },
        { label: "KIX T1 지도(한국어)", url: "https://www.kansai-airport.or.jp/kr/map/t1_new/" },
        { label: "KIX T2 지도(한국어)", url: "https://www.kansai-airport.or.jp/kr/map/t2/" },
        { label: "AEON Bank 로케이터", url: "https://map.aeonbank.co.jp/aeonbank/spot/detail?code=0000003487" }
      ]
    },
    "jr ticket office kansai airport station": {
      rating: null,
      ratingSource: "Google",
      summary:
        "ICOCA 발급과 하루카 티켓 수령을 한 번에 해결하는 JR 매표 구역입니다. (JR-West 지도: Kansai-airport Station Concourse, JR ticket gate 근처)",
      building: "간사이공항역 (JR)",
      floor: "1층 (T1 연결)",
      area: "개찰구 앞 발권 구역",
      tags: ["JR", "ICOCA", "하루카"],
      features: ["ICOCA 발급", "하루카 지정석 발권", "공항역 직결"],
      pros: ["공항에서 교통 준비 완료", "동선 효율적"],
      cons: ["대기 발생 가능"],
      tips: [
        "QR 티켓/여권을 먼저 준비",
        "무인 발권기와 창구 대기 비교",
        "(JR-West 지도) ICOCA & HARUKA 세트 위치 별도 표기"
      ]
    },
    "jr haruka kansai airport station": {
      rating: null,
      ratingSource: "Google",
      summary:
        "간사이공항역의 하루카 특급 승강장으로 교토 이동의 출발 지점입니다. (JR-West 지도: JR ticket gate 통과 후 승강장)",
      building: "간사이공항역 (JR)",
      floor: "1층",
      area: "JR 승강장",
      tags: ["하루카", "JR", "교통"],
      features: ["하루카 특급 승강장", "JR 공항역 직결", "교토 직행"],
      pros: ["직통 이동", "짐 이동 최소화"],
      cons: ["피크 시간 혼잡"],
      tips: ["출발 10분 전 승강장 도착", "지정석 차량 번호 확인"]
    },
    "アシックスファクトリーアウトレット りんくう": {
      rating: null,
      ratingSource: "Google",
      summary:
        "린쿠 아울렛 내 아식스 팩토리 아울렛으로 이월 모델을 할인된 가격에 구매하기 좋습니다. (공식 표기: アシックスファクトリーアウトレット りんくう)",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 2층",
      area: "7000번대 구역",
      tags: ["아울렛", "러닝화", "세일", "시사이드"],
      features: ["아울렛 이월 모델", "러닝화/워킹화 중심", "4E/슈퍼와이드"],
      pros: ["할인 폭 큼", "일본 전용 모델 득템"],
      cons: ["사이즈 품절 가능", "재고 편차"],
      tips: [
        "필요 사이즈/모델 메모",
        "B-grade(미세 흠집) 표기 제품은 추가 할인",
        "일본 표기(cm) 기준으로 사이즈 확인",
        "발볼러 인기: 젤 카야노(안정), 젤 님버스(쿠션), 노바블라스트(탄성)",
        "가성비: JOLT/컨텐드 4,000~6,000엔대(매장/시즌 변동)",
        "직원 질문: \"슈퍼와이드(4E) 있나요?\"",
        "(공식 사이트) 매장 찾기에서 ASICS 검색 후 안내도 확인"
      ],
      questions: [
        "발볼 넓은 4E(슈퍼와이드) 재고 있나요? / 4E（エクストラワイド）の在庫はありますか？ / Do you have 4E (extra-wide) sizes?",
        "이 모델 26.0cm 있나요? / このモデルの26.0cmはありますか？ / Do you have size 26.0 for this model?",
        "B급(스크래치) 할인 상품 있나요? / B級品はありますか？ / Do you have B-grade discounted items?"
      ],
      links: [
        { label: "린쿠 아울렛 공식 사이트", url: "https://www.premiumoutlets.co.jp/rinku/" }
      ]
    },
    "onitsuka tiger rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "오니츠카 타이거 아울렛 매장으로 멕시코 66 등 인기 모델을 보기 좋습니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["스니커즈", "아울렛", "시사이드"],
      features: ["스니커즈 중심", "아울렛 전용 상품"],
      pros: ["인기 모델 득템 가능"],
      cons: ["피크 시간 혼잡"],
      tips: ["재고 회전이 빠르니 색상 우선 확인"],
      questions: [
        "멕시코 66 인기 색상 있나요? / メキシコ66の人気カラーはありますか？ / Do you have popular Mexico 66 colors?",
        "아울렛 전용 모델이 있나요? / アウトレット専用モデルはありますか？ / Are there outlet-exclusive models?",
        "재입고 일정이 있나요? / 再入荷の予定はありますか？ / Is there a restock schedule?"
      ]
    },
    "nike unite rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "아울렛 내 대형 나이키 매장으로 러닝/트레이닝 제품이 다양합니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "메인 사이드 2층",
      tags: ["스포츠웨어", "아울렛", "메인사이드"],
      features: ["대형 매장", "러닝/트레이닝"],
      pros: ["재고 다양"],
      cons: ["피크 시간 대기"],
      tips: [
        "라스트 사이즈 코너 먼저 확인",
        "와이드(Extra Wide) 표기 박스 우선 탐색",
        "에어 페가수스 와이드 재고 문의"
      ],
      questions: [
        "Extra Wide 사이즈 있나요? / エクストラワイドのサイズはありますか？ / Do you have Extra Wide sizes?",
        "페가수스 와이드 재고 있나요? / ペガサスのワイドはありますか？ / Do you have Pegasus wide in stock?",
        "추가 할인/프로모션 있나요? / 追加割引やプロモーションはありますか？ / Any extra discounts or promotions?"
      ]
    },
    "adidas rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "아디다스 아울렛 매장으로 의류와 신발 선택 폭이 넓습니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "메인 사이드 1층",
      tags: ["스포츠웨어", "아울렛", "메인사이드"],
      features: ["의류 라인 다양", "행사 할인"],
      pros: ["할인 행사 기대"],
      cons: ["혼잡 가능"],
      tips: ["프로모션 표기 확인"],
      questions: [
        "오늘 추가 할인 적용되나요? / 今日は追加割引がありますか？ / Is there any extra discount today?",
        "와이드 핏 러닝화 있나요? / ワイドフィットのランニングはありますか？ / Do you have wide-fit running shoes?",
        "이 모델 재고 색상 좀 보여주세요. / このモデルの在庫カラーを見せてください。 / Can you show available colors for this model?"
      ]
    },
    "new balance rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "뉴발란스 아울렛 매장으로 실용적인 모델 라인업이 주입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["스니커즈", "아울렛", "시사이드", "와이드"],
      features: ["실용 라인업", "와이드 사이즈"],
      pros: ["무난한 모델 선택"],
      cons: ["주말 대기 가능"],
      tips: [
        "너비(Width) 코너 먼저 확인",
        "Fresh Foam 1080/880 와이드 재고 문의",
        "574 와이드 버전 섞여 있음"
      ],
      questions: [
        "4E(와이드) 사이즈 있나요? / 4E（ワイド）のサイズはありますか？ / Do you have 4E wide sizes?",
        "1080/880 와이드 재고 있나요? / 1080/880のワイドはありますか？ / Do you have wide 1080/880 in stock?",
        "255~265mm 재고 있나요? / 25.5〜26.5cmはありますか？ / Do you have sizes 25.5–26.5?"
      ]
    },
    "mont-bell rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "일본 로컬 아웃도어 브랜드로 가격 메리트가 큰 편입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 2층",
      tags: ["아웃도어", "아울렛", "시사이드"],
      features: ["경량 패딩/의류", "소품 다양"],
      pros: ["가격 메리트 큼"],
      cons: ["인기 품목 빠짐"],
      tips: ["경량 패딩/소품 먼저 확인"],
      questions: [
        "경량 패딩 인기 사이즈 있나요? / 軽量ダウンの人気サイズはありますか？ / Do you have popular sizes for lightweight down jackets?",
        "레인 재킷 방수 등급이 어떻게 되나요? / レインジャケットの防水性能は？ / What is the waterproof rating?",
        "면세 적용되나요? / 免税はできますか？ / Is tax-free available?"
      ]
    },
    "snow peak rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "캠핑 감성 의류와 용품을 볼 수 있는 매장입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["캠핑", "아울렛", "시사이드"],
      features: ["의류 라인 중심", "감성 아이템"],
      pros: ["디자인 만족도"],
      cons: ["가격대 있음"],
      tips: ["의류 라인 할인 폭 확인"],
      questions: [
        "의류 할인 폭이 큰 제품이 있나요? / 衣類の割引が大きい商品はありますか？ / Which apparel items have the biggest discounts?",
        "사이즈 가이드가 있나요? / サイズガイドはありますか？ / Do you have a size guide?",
        "이 제품은 아울렛 전용인가요? / これはアウトレット専用ですか？ / Is this an outlet-exclusive item?"
      ]
    },
    "polo ralph lauren rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "기본 니트/셔츠가 인기인 폴로 아울렛 매장입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "메인 사이드 1층",
      tags: ["패션", "아울렛", "메인사이드"],
      features: ["기본 아이템", "선물용"],
      pros: ["선물용 인기"],
      cons: ["대기 가능"],
      tips: ["키즈 라인 재고 확인"],
      questions: [
        "키즈 사이즈 재고 있나요? / キッズサイズはありますか？ / Do you have kids sizes in stock?",
        "이 제품 추가 할인되나요? / この商品は追加割引になりますか？ / Is there an extra discount on this item?",
        "기본 셔츠/니트는 어디에 있나요? / 定番シャツ・ニットはどこですか？ / Where are the basic shirts/knits?"
      ]
    },
    "rinku coffee": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 타운에서 잠시 쉬어가기 좋은 캐주얼 카페입니다.",
      area: "린쿠 타운",
      tags: ["카페", "휴식", "린쿠"],
      features: ["카페 휴식", "가벼운 음료", "짧은 동선"],
      pros: ["짧은 휴식에 적합", "바로 쉬기 좋음"],
      cons: ["좌석 한정"],
      tips: ["테이크아웃 후 바닷가 산책 병행", "좌석 있으면 바로 확보"]
    },
    "rinku no yu": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 타운의 온천/사우나 시설로 피로를 풀기에 좋습니다.",
      area: "린쿠 타운",
      tags: ["온천", "휴식", "피로회복"],
      features: ["온천/사우나", "휴식 공간", "피로 회복"],
      pros: ["여행 피로 해소", "날씨와 무관"],
      cons: ["체류 시간 필요"],
      tips: ["쇼핑 후 일정이 여유로울 때 방문", "수건/편의시설 포함 여부 확인"]
    },
    "rinku marble beach": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 타운 해변 산책로로 노을과 바다 풍경이 유명한 포인트입니다.",
      area: "린쿠 타운",
      tags: ["해변", "산책", "노을"],
      features: ["바다 산책로", "노을 포인트", "사진 촬영"],
      pros: ["무료 산책", "풍경이 좋음"],
      cons: ["날씨 영향", "바람 강함"],
      tips: ["노을 시간대 방문", "바람 대비 겉옷 준비"]
    },
    "rinku pleasure town seacle": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 타운의 실내 쇼핑/카페 복합몰로 날씨 영향 없이 들르기 좋습니다.",
      area: "린쿠 타운",
      tags: ["쇼핑", "실내", "카페"],
      features: ["쇼핑/카페 복합몰", "실내 동선", "레스토랑"],
      pros: ["날씨 영향 적음", "짧은 휴식 가능"],
      cons: ["혼잡 가능"],
      tips: ["날씨 안 좋을 때 대안으로 활용", "카페에서 잠깐 휴식"]
    },
    "kawaramachi kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 최대 쇼핑/식사 거리로 하루 종일 돌아다니기 좋은 도보 중심 상권입니다.",
      area: "교토 시내 중심",
      tags: ["쇼핑", "식사", "도보"],
      features: ["쇼핑/카페 밀집", "도보 이동 중심", "식사 선택지 다양"],
      pros: ["하루 종일 동선 가능", "선택 폭 넓음"],
      cons: ["혼잡", "대기 발생"],
      tips: ["우선순위 매장 먼저 방문", "카페/시장 휴식 포인트 확보"],
      nearby: [
        {
          name: "니시키 시장 (Nishiki Market)",
          mapQuery: "Nishiki Market",
          type: "시장",
          features: ["먹거리/기념품"],
          pros: ["현지 분위기"],
          cons: ["혼잡", "현금 필요"]
        },
        {
          name: "차오차오 교자 (Chao Chao Gyoza)",
          mapQuery: "Chao Chao Gyoza Sanjo Kawaramachi",
          type: "식사",
          features: ["교자 전문", "빠른 회전"],
          pros: ["가성비 좋음"],
          cons: ["대기 가능"]
        },
        {
          name: "레드락 로쿠카쿠 (Red Rock)",
          mapQuery: "Red Rock Kyoto Rokkaku",
          type: "식사",
          features: ["스테이크 덮밥", "푸짐한 양"],
          pros: ["가성비"],
          cons: ["피크 시간 혼잡"]
        },
        {
          name: "가츠쿠라 산조 본점",
          mapQuery: "Katsukura Sanjo Main Store",
          type: "식사",
          features: ["프리미엄 돈카츠", "정식"],
          pros: ["가족 식사 적합"],
          cons: ["대기 가능"]
        },
        {
          name: "라멘 센노카제",
          mapQuery: "Ramen Sen-no-Kaze Kyoto",
          type: "식사",
          features: ["교토 라멘", "진한 육수"],
          pros: ["만족도 높음"],
          cons: ["줄이 길 수 있음"]
        },
        {
          name: "무사시 스시",
          mapQuery: "Musashi Sushi",
          type: "식사",
          features: ["회전초밥", "가성비"],
          pros: ["메뉴 다양"],
          cons: ["혼잡"]
        },
        {
          name: "블루보틀 교토 로쿠카쿠",
          mapQuery: "Blue Bottle Coffee Kyoto Rokkaku",
          type: "카페",
          features: ["전통 가옥", "스페셜티 커피"],
          pros: ["분위기 좋음"],
          cons: ["좌석 제한"]
        },
        {
          name: "위켄더스 커피",
          mapQuery: "Weekenders Coffee Tominokoji",
          type: "카페",
          features: ["로스터리", "조용한 분위기"],
          pros: ["커피 퀄리티"],
          cons: ["좌석 적음"]
        },
        {
          name: "스타벅스 산조오하시",
          mapQuery: "Starbucks Coffee - Kyoto Sanjo Ohashi",
          type: "카페",
          features: ["가모강 뷰", "큰 매장"],
          pros: ["뷰 좋음"],
          cons: ["혼잡"]
        },
        {
          name: "테라마치 거리 (Teramachi Street)",
          mapQuery: "Teramachi Street Kyoto",
          type: "쇼핑",
          features: ["쇼핑 골목", "잡화/기념품"],
          pros: ["도보 이동 편리"],
          cons: ["인파 많음"]
        },
        {
          name: "다카시마야 교토",
          mapQuery: "Takashimaya Kyoto",
          type: "쇼핑",
          features: ["백화점", "명품/기프트"],
          pros: ["선물 구매"],
          cons: ["혼잡 가능"]
        },
        {
          name: "다이마루 교토",
          mapQuery: "Daimaru Kyoto",
          type: "쇼핑",
          features: ["백화점", "지하 식품관"],
          pros: ["식품관 알차게 이용"],
          cons: ["혼잡"]
        },
        {
          name: "폰토초 골목 (Pontocho Alley)",
          mapQuery: "Pontocho Alley",
          type: "골목",
          features: ["저녁 산책", "식당가"],
          pros: ["분위기 좋음"],
          cons: ["저녁 혼잡"]
        },
        {
          name: "신쿄고쿠 상점가 (Shinkyogoku Shopping Street)",
          mapQuery: "新京極商店街",
          type: "쇼핑",
          features: ["실내 상점가"],
          pros: ["날씨 영향 적음"],
          cons: ["인파 많음"]
        },
        {
          name: "가모가와 (Kamo River)",
          mapQuery: "Kamo River Kyoto",
          type: "산책",
          features: ["강변 산책로"],
          pros: ["휴식에 좋음"],
          cons: ["날씨 영향"]
        },
        {
          name: "이치호도 (Ippodo Tea)",
          mapQuery: "Ippodo Tea Store Kyoto",
          type: "쇼핑",
          features: ["말차/다구 전문"],
          pros: ["선물용 구매"],
          cons: ["가격대 있음"]
        },
        {
          name: "스마트 커피 (Smart Coffee)",
          mapQuery: "Smart Coffee Kyoto",
          type: "카페",
          features: ["레트로 카페", "프렌치 토스트"],
          pros: ["분위기 좋음"],
          cons: ["대기 가능"]
        }
      ]
    },
    "teramachi street kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "가와라마치 인근의 쇼핑 골목으로 다도구/기념품을 함께 둘러보기 좋습니다.",
      area: "가와라마치 도보권",
      tags: ["다도구", "기념품", "쇼핑", "아케이드"],
      features: ["다도구 전문점 밀집", "아케이드 산책", "가와라마치 접근"],
      pros: ["짧은 동선", "날씨 영향 적음"],
      cons: ["인파 많음", "주말 혼잡"],
      tips: [
        "차선은 80본/100본 중 입문용 80본 추천",
        "나오시는 차선 모양 유지에 필수",
        "차완은 입구 넓이·무게감을 직접 확인",
        "테라마치 니조 → 니시키 방향으로 내려오며 쇼핑"
      ],
      nearby: [
        {
          name: "잇포도 차호 교토 본점",
          mapQuery: "Ippodo Tea Store Kyoto",
          type: "다도구",
          features: ["입문 세트", "다카야마 차선"],
          pros: ["초보자 안내"],
          cons: ["가격대 있음"]
        },
        {
          name: "호라이도 차포",
          mapQuery: "Horaido Tea Stall Kyoto",
          type: "다도구",
          features: ["합리적 가격대", "입문 도구"],
          pros: ["예산 맞춤 선택"],
          cons: ["재고 변동"]
        },
        {
          name: "닌슈 (Ninshu)",
          mapQuery: "Ninshu vessel shop & matcha cafe",
          type: "다도구",
          features: ["오무로 야키", "카페 겸"],
          pros: ["디자인 다양"],
          cons: ["가격대 있음"]
        },
        {
          name: "류오엔 차점",
          mapQuery: "Ryuoen Tea Store Kyoto",
          type: "다도구",
          features: ["전통 다구", "조용한 분위기"],
          pros: ["전통 라인업"],
          cons: ["영업일 확인 필요"]
        },
        {
          name: "유겐 (YUGEN)",
          mapQuery: "YUGEN Kyoto",
          type: "다도구",
          features: ["모던 디자인", "선물용"],
          pros: ["선물용 좋음"],
          cons: ["테라마치에서 약간 벗어남"]
        }
      ]
    },
    "horaido tea stall kyoto": {
      rating: 4.7,
      ratingSource: "Google",
      summary: "합리적인 가격대의 다도구를 찾기 좋은 테라마치 남쪽의 차도구 매장입니다.",
      category: "shopping",
      area: "테라마치 남쪽(니시키 시장 근처)",
      tags: ["다도구", "차완", "차선", "합리"],
      features: ["차완/차선/나오시", "입문용 가격대"],
      pros: ["예산 맞춰 선택 가능", "입문용 다양"],
      cons: ["재고 변동"],
      tips: ["차완 3,000엔대부터", "나오시 800~1,500엔", "중국산/일본산 구분 확인"]
    },
    "ninshu vessel shop & matcha cafe": {
      rating: 4.9,
      ratingSource: "Google",
      summary: "오무로 야키 도자기와 말차를 함께 즐길 수 있는 매장 겸 카페입니다.",
      category: "shopping",
      area: "테라마치 니조 인근",
      tags: ["도자기", "차완", "말차", "카페"],
      features: ["오무로 야키 차완", "현대적 색감", "카페 겸"],
      pros: ["디자인 선택 폭", "직접 체험 가능"],
      cons: ["가격대 있음"],
      tips: ["차완 6,000~10,000엔", "말차 도구 세트 약 15,000엔", "무게감 직접 확인"],
      links: [
        { "label": "공식 사이트", "url": "https://ninshu.com/" }
      ]
    },
    "ryuoen tea store kyoto": {
      rating: 4.4,
      ratingSource: "Google",
      summary: "전통 다도구를 취급하는 조용한 노포로 현지인들의 신뢰가 높은 편입니다.",
      category: "shopping",
      area: "테라마치 니조 인근",
      tags: ["다도구", "전통", "노포"],
      features: ["전통 다구", "차분한 분위기"],
      pros: ["전통 라인업", "차분한 상담"],
      cons: ["영업일 제한 가능"],
      tips: ["영업시간/휴무 확인", "초보자임을 먼저 말하기"]
    },
    "yugen kyoto": {
      rating: 4.6,
      ratingSource: "Google",
      summary: "현대적 감성으로 말차·다도구를 큐레이션하는 매장입니다.",
      category: "shopping",
      area: "테라마치 남쪽(니시키 인근)",
      tags: ["다도구", "모던", "선물"],
      features: ["심플한 디자인", "가격표 명확"],
      pros: ["선물용 좋음", "가격 확인 쉬움"],
      cons: ["테라마치에서 약간 벗어남"],
      tips: ["나오시 약 1,100엔", "다카야마 차선 5,000~6,000엔", "차샤쿠 900~1,400엔"],
      links: [
        { "label": "공식 사이트", "url": "https://yugen-kyoto.com/" }
      ]
    },
    "nishiki market": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 대표 먹거리 시장으로 간식과 반찬을 조금씩 맛보기 좋은 곳입니다.",
      area: "가와라마치 도보권",
      tags: ["시장", "먹거리", "현금"],
      features: ["먹거리/기념품", "아케이드 골목", "짧은 도보 동선"],
      pros: ["현지 분위기", "다양한 시식"],
      cons: ["혼잡", "현금 필요"],
      tips: ["소액 현금 준비", "1~2개씩 나눠서 맛보기"]
    },
    "新京極商店街": {
      rating: null,
      ratingSource: "Google",
      summary: "비가 와도 둘러보기 좋은 실내형 상점가로 간식과 잡화가 많습니다.",
      area: "가와라마치 도보권",
      tags: ["쇼핑", "실내", "간식"],
      features: ["실내 상점가", "간식/잡화 밀집", "아케이드 동선"],
      pros: ["날씨 영향 적음", "쇼핑 동선 짧음"],
      cons: ["인파 많음", "주말 혼잡"],
      tips: ["비 오는 날 대안으로 활용", "가게 간격이 좁아 천천히 이동"]
    },
    "pontocho alley": {
      rating: null,
      ratingSource: "Google",
      summary: "저녁 시간 산책에 좋은 골목길로 분위기 있는 식당이 많은 구역입니다.",
      area: "가와라마치 · 기온 사이",
      tags: ["골목", "저녁산책", "분위기"],
      features: ["전통 골목 분위기", "저녁 산책 동선", "식당가 밀집"],
      pros: ["분위기 좋음", "사진 포인트"],
      cons: ["저녁 혼잡", "골목이 좁음"],
      tips: ["식사 예약 후 산책 코스로 활용", "조명이 예쁜 시간대 방문"]
    },
    "kamo river kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "가와라마치 인근 강변 산책로로 잠깐 쉬어가기 좋은 휴식 코스입니다.",
      tags: ["산책", "강변", "휴식"],
      features: ["강변 산책로", "벤치/휴식 공간"],
      pros: ["휴식에 좋음", "무료 산책"],
      cons: ["날씨 영향", "야간 추위"],
      tips: ["일몰 직전 산책 추천", "따뜻한 음료 준비"]
    },
    "551 horai kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "오사카 대표 만두 체인으로 테이크아웃이 가능해 공항 이동 중에도 먹기 좋습니다. (공식 지도: T1 2F 보안 전)",
      building: "간사이 공항 T1",
      floor: "2층",
      area: "2층 식당가 · 보안 전",
      tags: ["만두", "명물", "테이크아웃"],
      features: ["오사카 명물 만두", "테이크아웃 가능", "간편한 한입 간식"],
      pros: ["빠른 회전", "가성비"],
      cons: ["줄이 긴 편"],
      tips: ["줄이 길면 포장 우선", "만두/슈마이 조합 추천", "(공식 지도 표식) 2F 식음 No.12"]
    },
    "kineya mugimaru kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "따뜻한 우동과 세트 메뉴로 빠르게 한 끼를 해결할 수 있는 식당입니다. (공식 지도: T1 2F 보안 전)",
      building: "간사이 공항 T1",
      floor: "2층",
      area: "2층 식당가 · 보안 전",
      tags: ["우동", "세트", "식사"],
      features: ["자가제면 우동", "세트 구성 다양", "따뜻한 한 끼"],
      pros: ["메뉴 선택 폭 넓음", "좌석 식사 가능"],
      cons: ["혼잡 시 대기"],
      tips: ["미니 덮밥 세트 활용", "피크 시간 피하기", "(공식 지도 표식) 2F 식음 No.13"]
    },
    "ganko sushi kansai international airport": {
      rating: 3.8,
      ratingCount: 610,
      ratingSource: "Google",
      summary: "정갈한 스시 정식을 공항에서 즐길 수 있는 초밥 전문점입니다.",
      building: "간사이 공항 T1",
      floor: "3층",
      area: "3층 레스토랑 존",
      tags: ["스시", "정식", "일식"],
      features: ["초밥 정식", "차분한 분위기", "가족 식사"],
      pros: ["정갈한 구성", "좌석 식사"],
      cons: ["가격대 있음", "대기 가능"],
      tips: ["정식 구성 확인 후 주문", "피크 시간은 여유 있게"]
    },
    "nakau kansai airport shop": {
      rating: null,
      ratingSource: "Google",
      summary:
        "짧은 시간에 먹기 좋은 덮밥 체인으로 가성비가 좋습니다. (공식 표기: AEROPLAZA 3F, 보안 전)",
      building: "에어로플라자 (AEROPLAZA)",
      floor: "3층",
      area: "공항역 연결동 · 보안 전",
      tags: ["가성비", "덮밥", "빠른식사"],
      features: ["규동/오야코동", "빠른 식사", "테이크아웃 가능"],
      pros: ["가성비", "회전 빠름"],
      cons: ["좌석 한정"],
      tips: ["짧은 이동 시간에 적합", "포장 주문 시 대기 단축"]
    },
    "botejyu 1946 kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "오사카 스타일 철판요리를 공항에서 간단히 즐길 수 있는 매장입니다. (공식 지도: T1 2F 보안 후 · 국내선 출발/도착 구역)",
      building: "간사이 공항 T1",
      floor: "2층",
      area: "2층 보안 후(국내선)",
      tags: ["오코노미야키", "철판", "오사카"],
      features: ["오코노미야키", "철판요리", "따뜻한 좌석 식사"],
      pros: ["오사카 스타일 식사", "든든한 한 끼"],
      cons: ["식사 시간 대기"],
      tips: ["인기 시간대 전후 방문", "공유 메뉴로 주문", "(공식 지도) 국내선 보안 후 구역"]
    },
    "mametora rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 아울렛 내 장어덮밥 전문점으로 제대로 된 장어 한 끼를 원할 때 선택합니다.",
      building: "린쿠 프리미엄 아울렛",
      tags: ["장어덮밥", "정찬", "아울렛"],
      features: ["장어덮밥 전문", "정찬 구성", "좌석 식사"],
      pros: ["시그니처 메뉴", "든든한 한 끼"],
      cons: ["가격대 높음", "대기 가능"],
      tips: ["피크 시간 전 방문", "기본 메뉴로 시작"]
    },
    "komeraku chazuke & karaage restaurant": {
      rating: null,
      ratingSource: "Google",
      summary: "오차즈케와 덮밥을 합리적인 가격에 즐길 수 있는 식당입니다.",
      building: "린쿠 프리미엄 아울렛",
      tags: ["오차즈케", "가성비", "덮밥"],
      features: ["오차즈케/덮밥", "가벼운 한 끼", "빠른 회전"],
      pros: ["가성비", "메뉴 선택 쉬움"],
      cons: ["점심 혼잡"],
      tips: ["가벼운 식사에 적합", "피크 전후 방문"]
    },
    "starbucks kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary:
        "테이크아웃 위주로 빠르게 커피를 마실 수 있는 카페입니다. (공식 지도: T1 1F South Shop, 2F Shop 모두 보안 전)",
      building: "간사이 공항 T1",
      floor: "1층 남측 · 2층",
      area: "보안 전 구역",
      tags: ["카페", "테이크아웃", "커피"],
      features: ["커피/음료", "테이크아웃", "빠른 이용"],
      pros: ["카페인 충전", "동선 짧음"],
      cons: ["혼잡 가능"],
      tips: [
        "모바일 주문 가능 여부 확인",
        "잔뜩 몰릴 때는 포장",
        "(공식 지도 표식) 1F 식음 No.2 · 2F 식음 No.10"
      ]
    },
    "familymart kansai international airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary:
        "간단한 간식과 음료를 빠르게 구매하기 좋은 편의점입니다. (공식 지도: T1 2F 보안 전, 국제선 출발 보안 후 각각 매장)",
      building: "간사이 공항 T1",
      floor: "2층",
      area: "보안 전/후 구역",
      tags: ["편의점", "간식", "빠른구매"],
      features: ["음료/간식", "빠른 구매", "간단 요기"],
      pros: ["동선 간단", "시간 절약"],
      cons: ["혼잡 가능"],
      tips: [
        "이동 직전 필요한 간식 확보",
        "품절 빠른 품목 먼저 확인",
        "(공식 지도 표식) 2F 쇼핑 No.27 (보안 전)",
        "(공식 지도) 보안 후 지점은 국제선 출발 구역"
      ]
    },
    "doutor coffee kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary:
        "공항 이동 중 짧게 쉬기 좋은 커피 체인입니다. (공식 지도: T1 1F 도착층/보안 전)",
      building: "간사이 공항 T1",
      floor: "1층 (노스게이트)",
      area: "1층 북측 출입구 인근",
      tags: ["카페", "샌드위치", "휴식"],
      features: ["커피/샌드위치", "짧은 휴식", "빠른 회전"],
      pros: ["빠른 회전", "간단한 식사 가능"],
      cons: ["좌석 제한"],
      tips: ["테이크아웃 활용", "잠깐 앉을 좌석 확보", "(공식 지도 표식) 1F 식음 No.1"]
    },
    "godiva rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "초콜릿과 디저트로 간단히 당을 보충하기 좋은 매장입니다.",
      building: "린쿠 프리미엄 아울렛",
      tags: ["디저트", "초콜릿", "선물"],
      features: ["초콜릿/아이스", "선물용 패키지", "짧은 디저트 타임"],
      pros: ["선물/간식", "간단한 보상"],
      cons: ["가격대 높음"],
      tips: ["테이크아웃으로 가볍게", "선물용 패키지 확인"]
    },
    "moritaya jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 대표 스키야키 전문점으로 고급스럽고 차분한 분위기의 좌석 식사를 제공합니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      tags: ["스키야키", "정찬", "뷰"],
      features: ["스키야키 중심", "교토역 직결 백화점 레스토랑가", "차분한 좌석 분위기"],
      pros: ["좌석 식사 안정적", "야경 뷰"],
      cons: ["가격대 높음", "예약 권장"],
      tips: ["예약 가능 여부 먼저 확인", "고기 등급/코스 선택"]
    },
    "yakiniku hiro kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "와규 구이를 다양한 부위로 즐길 수 있는 인기 야키니쿠 식당입니다.",
      area: "교토역 인근",
      tags: ["야키니쿠", "와규", "예약"],
      features: ["와규 구이", "가족 단위 좌석", "모둠 메뉴 구성"],
      pros: ["가족 식사 최적", "풍부한 메뉴 구성"],
      cons: ["저녁 대기 가능", "예약 권장"],
      tips: ["모둠 메뉴로 시작", "예약/대기번호 확인"]
    },
    "unagi sora kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "장어덮밥(히츠마부시)으로 유명한 식당으로 든든한 정찬을 원할 때 좋습니다.",
      area: "교토역 인근",
      tags: ["장어덮밥", "정찬", "예약"],
      features: ["히츠마부시", "정갈한 정찬", "좌석 식사"],
      pros: ["든든한 한 끼", "특별한 메뉴"],
      cons: ["가격대 높음", "대기 가능"],
      tips: ["예약 가능 여부 확인", "대표 메뉴 위주로 주문"]
    },
    "katsukura kyoto porta": {
      rating: null,
      ratingSource: "Google",
      summary: "교토에서 유명한 돈카츠 체인으로 깔끔한 정식 구성이 강점입니다.",
      building: "교토 포르타",
      floor: "B1층",
      tags: ["돈카츠", "정식", "리필"],
      features: ["프리미엄 돈카츠", "밥/양배추 리필", "정식 구성"],
      pros: ["정식 구성", "맛 안정적"],
      cons: ["대기 가능"],
      tips: ["피크 시간 피하기", "히레/로스 취향 선택"]
    },
    "nakau kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "24시간 운영으로 늦은 시간에도 빠르게 식사할 수 있는 가성비 매장입니다.",
      tags: ["가성비", "24시간", "덮밥"],
      features: ["24시간", "덮밥/우동", "빠른 회전"],
      pros: ["대기 적음", "가성비"],
      cons: ["분위기 단순"],
      tips: ["간단 식사 위주로 활용", "좌석 여유 시간대 확인"]
    },
    "nakamura tokichi kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "진한 말차 디저트로 유명한 카페로, 디저트 타임에 인기입니다.",
      building: "JR 교토 이세탄",
      floor: "3층",
      tags: ["말차", "디저트", "카페"],
      features: ["말차 디저트", "파르페/젤리", "선물 구매 가능"],
      pros: ["디저트 만족도 높음", "선물 구성 다양"],
      cons: ["대기 가능"],
      tips: ["파르페/젤리 대표 메뉴 확인", "포장 가능 여부 문의"]
    },
    "sizuya kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 팥빵으로 유명한 베이커리로 간식이나 아침으로 좋습니다.",
      building: "교토역 하치조 출구",
      floor: "1층",
      tags: ["베이커리", "팥빵", "간식"],
      features: ["교토 팥빵", "간식/아침", "테이크아웃"],
      pros: ["가성비 간식", "빠른 구매"],
      cons: ["빵 품절 가능"],
      tips: ["인기 시간 전 방문", "기본 팥빵 우선 확보"]
    },
    "to-ji temple": {
      rating: null,
      ratingSource: "Google",
      summary: "오층탑이 상징인 사찰로, 21일 코보산 장날이 특히 유명합니다.",
      tags: ["사찰", "장날", "사진"],
      features: ["오층탑 상징", "21일 코보산 장날", "넓은 경내 산책"],
      pros: ["시장 분위기", "사진 포인트"],
      cons: ["현금 필요", "장날 혼잡"],
      tips: ["장날은 이른 시간 방문", "소액 현금 준비"]
    },
    "higashi honganji temple": {
      rating: null,
      ratingSource: "Google",
      summary: "넓은 경내와 세계 최대급 목조 건축을 무료로 둘러볼 수 있는 대형 사찰입니다.",
      tags: ["사찰", "무료", "목조"],
      features: ["대형 목조 건축", "무료 관람", "넓은 경내"],
      pros: ["휴식에 좋음", "부담 없는 관람"],
      cons: ["추위 대비"],
      tips: ["실내 바닥 착석 가능", "조용한 시간대 추천"]
    },
    "nijo castle": {
      rating: null,
      ratingSource: "Google",
      summary: "쇼군의 권력을 상징하는 성으로 화려한 건축과 정원이 인상적입니다.",
      tags: ["유적", "궁전", "정원"],
      features: ["니노마루 궁전", "꾀꼬리 마루", "정원 산책"],
      pros: ["역사적 가치", "관람 동선 명확"],
      cons: ["실내 이동 많음", "혼잡 가능"],
      tips: ["궁전 포함 티켓 확인", "실내 규정(신발) 안내 확인"],
      nearby: [
        {
          name: "멘야 유코 (Menya Yuko)",
          mapQuery: "Menya Yuko",
          type: "식사",
          features: ["조개 베이스 라멘"],
          pros: ["깔끔한 맛"],
          cons: ["대기 가능"]
        },
        {
          name: "카라세미테이 (Karasemitei)",
          mapQuery: "Karasemitei",
          type: "식사",
          features: ["카레/오므라이스"],
          pros: ["가성비 좋음"],
          cons: ["좌석 적음"]
        },
        {
          name: "키분조초 (Kibunjocho)",
          mapQuery: "Kibunjocho",
          type: "식사",
          features: ["교토 채소 정식"],
          pros: ["정갈한 구성"],
          cons: ["가격대 있음"]
        },
        {
          name: "세이케 니조조 (Seike Nijo-jo)",
          mapQuery: "Seike Nijo-jo",
          type: "식사",
          features: ["두부/유바 요리"],
          pros: ["건강식"],
          cons: ["대기 가능"]
        },
        {
          name: "포레스트 키친 (Forest Kitchen)",
          mapQuery: "Forest Kitchen",
          type: "식사",
          features: ["유기농/비건"],
          pros: ["가벼운 식사"],
          cons: ["영업시간 확인"]
        },
        {
          name: "사라사 커피 (Clamp Coffee Sarasa)",
          mapQuery: "Clamp Coffee Sarasa",
          type: "카페",
          features: ["앤티크 카페", "로스터리"],
          pros: ["분위기 좋음"],
          cons: ["좌석 제한"]
        },
        {
          name: "히어 교토 (Here Kyoto)",
          mapQuery: "Here Kyoto",
          type: "카페",
          features: ["카눌레", "스페셜티 커피"],
          pros: ["디저트 인기"],
          cons: ["혼잡 가능"]
        },
        {
          name: "블루보틀 교토 카페",
          mapQuery: "Blue Bottle Coffee Kyoto Cafe",
          type: "카페",
          features: ["브랜드 매장", "여유로운 좌석"],
          pros: ["커피 퀄리티"],
          cons: ["가격대 있음"]
        },
        {
          name: "교토 산조카이 상점가",
          mapQuery: "Kyoto Sanjo Kai Shotengai",
          type: "쇼핑",
          features: ["아케이드 상점가"],
          pros: ["날씨 영향 적음"],
          cons: ["상점 구성 다양"]
        },
        {
          name: "호리카와 상점가",
          mapQuery: "Horikawa Shotengai",
          type: "쇼핑",
          features: ["로컬 상점"],
          pros: ["현지 분위기"],
          cons: ["영업시간 확인"]
        },
        {
          name: "시키노아메 (Shiki-no-Ame)",
          mapQuery: "Shiki-no-Ame",
          type: "쇼핑",
          features: ["전통 공예/부채"],
          pros: ["기념품 구매"],
          cons: ["소규모 매장"]
        },
        {
          name: "교토 고쇼 (Kyoto Imperial Palace)",
          mapQuery: "Kyoto Imperial Palace",
          type: "볼거리",
          features: ["궁정 정원", "대형 공원"],
          pros: ["산책에 좋음"],
          cons: ["이동 시간 필요"]
        }
      ]
    },
    "kinkaku-ji": {
      rating: null,
      ratingSource: "Google",
      summary: "황금빛 누각으로 유명한 교토 대표 관광지입니다.",
      tags: ["명소", "금각", "사진"],
      features: ["황금 누각", "정원 산책", "일몰 뷰 포인트"],
      pros: ["상징적 포인트", "사진 만족도 높음"],
      cons: ["혼잡", "현금 입장"],
      tips: ["일몰 직전 방문 추천", "입구/출구 동선 미리 확인"],
      nearby: [
        {
          name: "오멘 금각사점",
          mapQuery: "Omen Kinkakuji",
          type: "식사",
          features: ["채소 우동", "담백한 맛"],
          pros: ["가벼운 식사"],
          cons: ["대기 가능"]
        },
        {
          name: "쿠라 스시 금각사점",
          mapQuery: "Kura Sushi Kinkakuji",
          type: "식사",
          features: ["회전초밥", "가성비"],
          pros: ["메뉴 다양"],
          cons: ["피크 시간 혼잡"]
        },
        {
          name: "이타다키젠 교토",
          mapQuery: "Itadakizen Kyoto",
          type: "식사",
          features: ["사찰풍 비건 요리"],
          pros: ["건강식"],
          cons: ["가격대 있음"]
        },
        {
          name: "금각사 미치",
          mapQuery: "Kinkakuji Michi",
          type: "식사",
          features: ["소바/우동"],
          pros: ["간단 식사"],
          cons: ["혼잡 가능"]
        },
        {
          name: "미타이아",
          mapQuery: "Mitaia",
          type: "식사",
          features: ["가정식 백반"],
          pros: ["담백한 구성"],
          cons: ["좌석 적음"]
        },
        {
          name: "요지야 카페 금각사",
          mapQuery: "Yojiya Cafe Kinkakuji",
          type: "카페",
          features: ["라떼아트", "디저트"],
          pros: ["사진 포인트"],
          cons: ["대기 가능"]
        },
        {
          name: "코우사기노사토",
          mapQuery: "Kousagi-no-Sato",
          type: "카페",
          features: ["테마 디저트"],
          pros: ["분위기 독특"],
          cons: ["영업시간 확인"]
        },
        {
          name: "스타벅스 료안지점",
          mapQuery: "Starbucks Coffee - Kyoto Ryoanji",
          type: "카페",
          features: ["여유로운 좌석"],
          pros: ["휴식에 적합"],
          cons: ["이동 필요"]
        },
        {
          name: "금각사 기념품 샵",
          mapQuery: "Kinkaku-ji Temple Shop",
          type: "쇼핑",
          features: ["부적/기념품"],
          pros: ["기념품 구매"],
          cons: ["혼잡 가능"]
        },
        {
          name: "츠루야 요시노부",
          mapQuery: "Tsuruya Yoshinobu",
          type: "쇼핑",
          features: ["전통 과자"],
          pros: ["선물용"],
          cons: ["가격대 있음"]
        },
        {
          name: "교토 크래프트 마트",
          mapQuery: "Kyoto Craft Mart",
          type: "쇼핑",
          features: ["공예품"],
          pros: ["기념품 선택지"],
          cons: ["소규모 매장"]
        },
        {
          name: "료안지 (Ryoan-ji)",
          mapQuery: "Ryoan-ji",
          type: "볼거리",
          features: ["석정", "세계 유산"],
          pros: ["고요한 분위기"],
          cons: ["이동 시간 필요"]
        }
      ]
    },
    "kyoto botanical garden": {
      rating: null,
      ratingSource: "Google",
      summary: "온실과 야간 전시가 있는 식물원으로 겨울 저녁에 실내 관람이 가능합니다.",
      tags: ["전시", "실내", "야간"],
      features: ["실내 온실", "야간 전시", "미디어 아트"],
      pros: ["겨울 저녁 관람", "실내 관람 가능"],
      cons: ["티켓 비용"],
      tips: ["QR 티켓 미리 준비", "온실 구역 중심으로 관람"],
      nearby: [
        {
          name: "동양정 키타야마 (Tougou)",
          mapQuery: "Tougou Kitayama",
          type: "식사",
          features: ["이탈리안", "세련된 분위기"],
          pros: ["가족 식사 적합"],
          cons: ["대기 가능"]
        },
        {
          name: "인 더 그린 (In the Green)",
          mapQuery: "In the Green",
          type: "식사",
          features: ["테라스", "식물원 뷰"],
          pros: ["분위기 좋음"],
          cons: ["피크 시간 혼잡"]
        },
        {
          name: "가츠쿠라 키타야마",
          mapQuery: "Katsukura Kitayama",
          type: "식사",
          features: ["돈카츠 정식"],
          pros: ["안정적인 맛"],
          cons: ["대기 가능"]
        },
        {
          name: "브리앙 키타야마",
          mapQuery: "Briant Kitayama",
          type: "식사",
          features: ["베이커리 식당"],
          pros: ["빵 메뉴 다양"],
          cons: ["좌석 제한"]
        },
        {
          name: "말브랑슈 키타야마 본점",
          mapQuery: "Malebranche Kitayama Main Store",
          type: "식사/디저트",
          features: ["디저트", "선물 구매"],
          pros: ["기념품 구매"],
          cons: ["혼잡 가능"]
        },
        {
          name: "서커스 커피",
          mapQuery: "Circus Coffee",
          type: "카페",
          features: ["로스터리", "스페셜티 커피"],
          pros: ["커피 퀄리티"],
          cons: ["좌석 적음"]
        },
        {
          name: "카페 발리 가시",
          mapQuery: "Cafe Bali Gasi",
          type: "카페",
          features: ["테라스 카페"],
          pros: ["여유로운 분위기"],
          cons: ["좌석 제한"]
        },
        {
          name: "키타야마 커피",
          mapQuery: "Kyoto Kitayama Coffee",
          type: "카페",
          features: ["핸드드립", "로컬 카페"],
          pros: ["잔잔한 분위기"],
          cons: ["영업시간 확인"]
        },
        {
          name: "키타야마도리",
          mapQuery: "Kitayama-dori",
          type: "쇼핑",
          features: ["감각적인 거리"],
          pros: ["산책/쇼핑"],
          cons: ["이동 거리 있음"]
        },
        {
          name: "알파 교토",
          mapQuery: "Alpha Kyoto",
          type: "쇼핑",
          features: ["인테리어 소품"],
          pros: ["기념품 선택지"],
          cons: ["소규모 매장"]
        },
        {
          name: "카나야 마사히로",
          mapQuery: "Kanaya Masahiro",
          type: "쇼핑",
          features: ["전통 과자"],
          pros: ["선물용"],
          cons: ["가격대 있음"]
        },
        {
          name: "카미가모 신사",
          mapQuery: "Kamigamo-jinja Shrine",
          type: "볼거리",
          features: ["유네스코 신사"],
          pros: ["고즈넉한 분위기"],
          cons: ["이동 필요"]
        }
      ]
    },
    "sanjusangendo": {
      rating: null,
      ratingSource: "Google",
      summary: "1,001개의 관음상이 있는 긴 본당으로 평지 동선이 특징입니다.",
      tags: ["사찰", "실내", "평지"],
      features: ["1,001 관음상", "긴 본당", "평지 동선"],
      pros: ["부모님 동선 편함", "실내 관람"],
      cons: ["현금 입장"],
      tips: ["실내 촬영 규정 확인", "조용히 관람"],
      nearby: [
        {
          name: "시치조 신도 (Shichijo Shindo)",
          mapQuery: "Shichijo Shindo",
          type: "식사",
          features: ["소바/덮밥"],
          pros: ["조용한 분위기"],
          cons: ["좌석 제한"]
        },
        {
          name: "소바노미 요시무라",
          mapQuery: "Sobanomi Yoshimura",
          type: "식사",
          features: ["수제 소바"],
          pros: ["메밀 향"],
          cons: ["대기 가능"]
        },
        {
          name: "베그아웃 (Veg Out)",
          mapQuery: "Veg Out",
          type: "식사",
          features: ["비건 브런치", "강변 뷰"],
          pros: ["뷰 좋음"],
          cons: ["영업시간 확인"]
        },
        {
          name: "애스크 미! (Ask Me!)",
          mapQuery: "Ask Me!",
          type: "식사",
          features: ["수제 정식/도시락"],
          pros: ["건강식"],
          cons: ["좌석 적음"]
        },
        {
          name: "산슈테이 (Sanshu-tei)",
          mapQuery: "Sanshu-tei",
          type: "식사",
          features: ["일본 전통 정찬"],
          pros: ["정갈한 구성"],
          cons: ["가격대 있음"]
        },
        {
          name: "카이카도 카페",
          mapQuery: "Kaikado Cafe",
          type: "카페",
          features: ["전통 공예+카페"],
          pros: ["분위기 좋음"],
          cons: ["대기 가능"]
        },
        {
          name: "월든우즈 교토",
          mapQuery: "Walden Woods Kyoto",
          type: "카페",
          features: ["화이트 인테리어"],
          pros: ["사진 포인트"],
          cons: ["혼잡"]
        },
        {
          name: "쿠라스 교토 스탠드",
          mapQuery: "Kurasu Kyoto Stand",
          type: "카페",
          features: ["로스터리 커피"],
          pros: ["커피 퀄리티"],
          cons: ["좌석 제한"]
        },
        {
          name: "교토 도자기 협회",
          mapQuery: "Kyoto Ceramic Art Association",
          type: "쇼핑",
          features: ["도자기 공예"],
          pros: ["기념품 구매"],
          cons: ["소규모 전시"]
        },
        {
          name: "시치조도리",
          mapQuery: "Shichijo-dori",
          type: "쇼핑",
          features: ["골동품/잡화"],
          pros: ["로컬 분위기"],
          cons: ["매장 분산"]
        },
        {
          name: "교나마지",
          mapQuery: "Kyonamaji",
          type: "쇼핑",
          features: ["교토 절임"],
          pros: ["기념품 추천"],
          cons: ["가격대 있음"]
        },
        {
          name: "히가시 혼간지",
          mapQuery: "Higashi Honganji Temple",
          type: "볼거리",
          features: ["대형 목조 사찰"],
          pros: ["무료 관람"],
          cons: ["이동 필요"]
        }
      ]
    },
    "grill capital touyoutei": {
      rating: null,
      ratingSource: "Google",
      summary: "교토에서 오래된 함박스테이크 전문점으로 가족 외식에 인기입니다.",
      tags: ["함박", "가족식사", "노포"],
      features: ["함박스테이크", "노포 분위기", "가족 외식"],
      pros: ["가족 식사 만족도", "메뉴 만족도 높음"],
      cons: ["저녁 대기 가능"],
      tips: ["대기표 먼저 발급", "대기 중 근처 카페 활용"]
    },
    "ippodo tea store kyoto": {
      rating: 4.5,
      ratingSource: "Google",
      summary: "1717년 창업한 교토 대표 차 전문점으로 입문 세트부터 전문가용 다구까지 갖추고 있습니다.",
      category: "shopping",
      tags: ["말차", "다도구", "차완", "차선"],
      features: ["입문 세트 구성", "다카야마산 차선", "카보쿠 카페 체험"],
      pros: ["도구 사용법 안내", "라인업 폭 넓음"],
      cons: ["가격대 있음", "피크 시간 혼잡"],
      tips: [
        "입문 세트(다완·차선·차샤쿠 포함) 약 8,000엔",
        "차선 5,000엔대 · 차샤쿠 1,200~2,500엔",
        "카보쿠 카페에서 사용법 시연 문의"
      ],
      links: [
        { "label": "공식 사이트", "url": "https://www.ippodo-tea.co.jp/pages/store-kyoto" }
      ]
    },
    "marukyu koyamaen kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "고급 말차 브랜드로 선물용 구매에 인기가 많습니다.",
      tags: ["말차", "선물", "고급"],
      features: ["고급 말차", "선물용 패키지", "현지 인기"],
      pros: ["브랜드 신뢰도", "품질 안정적"],
      cons: ["품절 가능"],
      tips: ["인기 제품 재고 먼저 확인", "선물용 포장 요청"]
    },
    "smart coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "레트로 분위기의 노포 카페로 프렌치 토스트가 유명합니다.",
      tags: ["카페", "노포", "디저트"],
      features: ["노포 카페", "프렌치 토스트", "클래식 인테리어"],
      pros: ["분위기 좋음", "대표 메뉴 확실"],
      cons: ["대기 가능"],
      tips: ["오픈 직후 방문 추천", "프렌치 토스트는 공유하기 좋음"]
    },
    "honke owariya": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 전통 소바를 경험하기 좋은 노포입니다.",
      tags: ["소바", "노포", "전통"],
      features: ["전통 소바", "넓은 좌석", "교토식 정갈한 맛"],
      pros: ["노포 경험", "가족 방문 가능"],
      cons: ["가격대 있음"],
      tips: ["인기 시간대 전후 방문", "따뜻한 메뉴 선택"]
    },
    "omen shijo": {
      rating: null,
      ratingSource: "Google",
      summary: "신선한 채소와 함께 먹는 우동으로 담백한 맛이 특징입니다.",
      tags: ["우동", "채소", "가벼움"],
      features: ["채소 우동", "담백한 국물", "가벼운 한 끼"],
      pros: ["담백한 맛", "부담 없는 식사"],
      cons: ["대기 가능"],
      tips: ["야채 추가 옵션 확인", "점심 피크 전 방문"]
    },
    "kyogoku kaneyo": {
      rating: null,
      ratingSource: "Google",
      summary: "두툼한 계란지단이 올려진 장어덮밥으로 유명합니다.",
      tags: ["장어덮밥", "노포", "명물"],
      features: ["킨시동", "두툼한 계란지단", "노포 분위기"],
      pros: ["대표 메뉴 확실", "사진 포인트"],
      cons: ["가격대 있음", "대기 가능"],
      tips: ["대표 메뉴 중심으로 주문", "여유 있는 시간대 방문"]
    },
    "wako kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "깔끔한 돈카츠 정식과 리필 서비스로 유명한 체인입니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      tags: ["돈카츠", "정식", "리필"],
      features: ["돈카츠 정식", "밥/양배추 리필", "백화점 레스토랑가"],
      pros: ["리필 제공", "가족 식사 적합"],
      cons: ["식사 시간 대기"],
      tips: ["리필 규정 확인", "피크 시간 피하기"]
    },
    "kyoto wakuden isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "정통 일식을 조용한 분위기에서 즐길 수 있는 식당입니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      tags: ["일식", "정찬", "뷰"],
      features: ["정통 일식", "정찬 구성", "창가 좌석 뷰"],
      pros: ["조용한 분위기", "특별한 한 끼"],
      cons: ["가격대 높음"],
      tips: ["창가 좌석 요청", "예약 가능 여부 확인"]
    },
    "kyoto porta": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 지하상가로 다양한 식당과 쇼핑을 한 번에 즐길 수 있습니다.",
      building: "교토 포르타",
      floor: "B1~B2층",
      tags: ["지하상가", "식사", "쇼핑"],
      features: ["지하 상가", "다양한 식당", "쇼핑 동선 집중"],
      pros: ["날씨 영향 적음", "동선 효율적"],
      cons: ["사람 많음"],
      tips: ["식당가/쇼핑 구역 동선 먼저 확인", "피크 전후로 이동"]
    },
    "aeon mall kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 인근 대형 쇼핑몰로 실내 동선과 푸드코트가 잘 갖춰져 있습니다.",
      area: "교토역 인근",
      tags: ["쇼핑몰", "실내", "식사"],
      features: ["대형 쇼핑몰", "푸드코트/레스토랑", "실내 동선"],
      pros: ["날씨 영향 적음", "매장 선택 폭 넓음"],
      cons: ["이동 시간 필요"],
      tips: ["우천 시 대안으로 활용", "식사와 쇼핑 동선 분리"]
    },
    "inoda coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 클래식 카페로 진한 커피와 분위기가 매력입니다.",
      tags: ["카페", "클래식", "디저트"],
      features: ["클래식 카페", "진한 커피", "전통 분위기"],
      pros: ["분위기 좋음", "노포 경험"],
      cons: ["대기 가능"],
      tips: ["오픈 직후 방문", "대표 커피/디저트 세트 추천"]
    },
    "inoda coffee kyoto station porta": {
      rating: 3.9,
      ratingCount: 740,
      ratingSource: "Google",
      summary: "교토역 포르타 지하에서 만나는 클래식 카페로 이동 동선이 편합니다.",
      building: "교토 포르타",
      floor: "B1층",
      tags: ["카페", "클래식", "포르타"],
      features: ["레트로 분위기", "커피/디저트", "역내 접근"],
      pros: ["동선 편리", "분위기 좋음"],
      cons: ["대기 가능"],
      tips: ["피크 전후 방문", "커피+디저트 세트 추천"]
    },
    "sukiya kansai international airport t1": {
      rating: 3.0,
      ratingCount: 412,
      ratingSource: "Google",
      summary: "공항 2층에서 24시간 운영하는 가성비 규동 전문점입니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      tags: ["공항", "식사", "규동", "가성비"],
      features: ["24시간 운영", "빠른 식사", "규동/카레"],
      links: [{ "label": "공식 사이트", "url": "https://www.sukiya.jp/" }]
    },
    "dotonbori kamukura kansai international airport": {
      rating: 3.8,
      ratingCount: 532,
      ratingSource: "Google",
      summary: "배추의 단맛이 특징인 오사카 라멘을 공항에서 즐길 수 있습니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      tags: ["공항", "식사", "라멘"],
      features: ["오사카 라멘", "따뜻한 국물"],
      links: [{ "label": "공식 사이트", "url": "https://kamukura.co.jp/" }]
    },
    "espresso & bakery kansai international airport": {
      rating: 3.0,
      ratingCount: 89,
      ratingSource: "Google",
      summary: "출국 전 간단히 베이커리와 커피를 즐길 수 있는 카페입니다.",
      building: "간사이 공항 T1",
      floor: "2층(보안 후)",
      tags: ["공항", "카페", "베이커리"],
      features: ["베이커리", "테이크아웃"],
      links: [{ "label": "공항 안내", "url": "https://www.kansai-airport.or.jp/" }]
    },
    "kix duty free": {
      rating: 3.4,
      ratingCount: 458,
      ratingSource: "Google",
      summary: "주류/담배/화장품을 한 번에 구매할 수 있는 공항 면세점입니다.",
      building: "간사이 공항 T1",
      floor: "2층(보안 후)",
      tags: ["공항", "쇼핑", "면세"],
      features: ["면세 쇼핑", "주류/화장품"],
      links: [{ "label": "공식 사이트", "url": "https://www.kixdutyfree.jp/" }]
    },
    "shake shack rinku premium outlets": {
      rating: 3.8,
      ratingCount: 1120,
      ratingSource: "Google",
      summary: "린쿠 아울렛에서 바다를 보며 즐기는 수제버거 매장입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["린쿠", "식사", "버거"],
      features: ["수제버거", "바다 뷰"],
      links: [{ "label": "공식 사이트", "url": "https://shakeshack.jp/" }]
    },
    "panda express rinku premium outlets": {
      rating: 3.9,
      ratingCount: 912,
      ratingSource: "Google",
      summary: "푸드코트에서 빠르게 먹기 좋은 미국식 중식 체인입니다.",
      building: "린쿠 프리미엄 아울렛",
      area: "푸드코트",
      tags: ["린쿠", "식사", "중식"],
      features: ["푸드코트", "빠른 식사"],
      links: [{ "label": "공식 사이트", "url": "https://www.pandaexpress.jp/" }]
    },
    "sandayahonten steak house - rinku": {
      rating: 4.5,
      ratingCount: 320,
      ratingSource: "Google",
      summary: "고베 소고기 스테이크를 즐길 수 있는 린쿠의 스테이크 하우스입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["린쿠", "식사", "스테이크"],
      features: ["고베 소고기", "스테이크 전문"],
      links: [{ "label": "공식 사이트", "url": "https://sandaya-honten.co.jp/" }]
    },
    "sumo restaurant ochiizumibeya": {
      rating: 4.8,
      ratingCount: 1281,
      ratingSource: "Google",
      summary: "스모 쇼와 함께 짱코나베를 체험할 수 있는 식당입니다.",
      building: "린쿠 시클",
      floor: "2층",
      tags: ["린쿠", "식사", "체험"],
      features: ["스모 쇼", "짱코나베"],
      links: [{ "label": "공식 사이트", "url": "https://ochi-arena.jp/" }]
    },
    "starbucks coffee - rinku premium outlets": {
      rating: 4.0,
      ratingCount: 824,
      ratingSource: "Google",
      summary: "아울렛 중심에 위치한 대표 카페로 휴식하기 좋습니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "1층",
      tags: ["린쿠", "카페", "휴식"],
      features: ["커피/음료", "테이크아웃"],
      links: [{ "label": "공식 사이트", "url": "https://www.starbucks.co.jp/" }]
    },
    "snow peak cafe & dining": {
      rating: 3.8,
      ratingCount: 218,
      ratingSource: "Google",
      summary: "캠핑 감성과 바다 뷰를 함께 즐길 수 있는 카페입니다.",
      building: "린쿠 프리미엄 아울렛",
      floor: "시사이드 1층",
      tags: ["린쿠", "카페", "바다뷰"],
      features: ["캠핑 감성", "바다 뷰"],
      links: [{ "label": "공식 사이트", "url": "https://www.snowpeak.co.jp/" }]
    },
    "starbucks coffee - aeon mall rinku sennan": {
      rating: 3.8,
      ratingCount: 365,
      ratingSource: "Google",
      summary: "이온몰 내 넓은 좌석이 있는 카페입니다.",
      building: "이온몰 린쿠 센난",
      floor: "1층",
      tags: ["린쿠", "카페", "실내"],
      features: ["넓은 좌석", "실내 휴식"],
      links: [{ "label": "공식 사이트", "url": "https://www.starbucks.co.jp/" }]
    },
    "aeon mall rinku sennan": {
      rating: 3.9,
      ratingCount: 4210,
      ratingSource: "Google",
      summary: "린쿠 해변 인근 대형 쇼핑몰로 현지 쇼핑과 식사를 함께 즐길 수 있습니다.",
      tags: ["린쿠", "쇼핑", "몰"],
      features: ["대형 몰", "푸드코트/쇼핑"],
      links: [{ "label": "공식 사이트", "url": "https://rinkusennan-aeonmall.com/" }]
    },
    "rinku park": {
      rating: 4.5,
      ratingCount: 127,
      ratingSource: "Google",
      summary: "산책하기 좋은 해변 공원으로 여유로운 시간을 보내기 좋습니다.",
      tags: ["린쿠", "산책", "공원"],
      features: ["해변 산책", "공원"],
      links: [{ "label": "공식 사이트", "url": "https://rinku.osaka-park.or.jp/" }]
    },
    "honke daiichi-asahi": {
      rating: 4.1,
      ratingCount: 4820,
      ratingSource: "Google",
      summary: "줄 서서 먹는 교토 대표 라멘집으로 진한 국물이 특징입니다.",
      area: "교토역 주변",
      tags: ["교토역", "라멘", "식사"],
      features: ["교토 라멘", "현지 인기"],
      links: [{ "label": "공식 사이트", "url": "https://www.honke-daiichiasahi.com/" }]
    },
    "katsukura kyoto station building": {
      rating: 4.3,
      ratingCount: 1520,
      ratingSource: "Google",
      summary: "교토역 빌딩 내 돈카츠 전문점으로 안정적인 식사 선택지입니다.",
      building: "교토역 빌딩",
      floor: "11층",
      tags: ["교토역", "돈카츠", "식사"],
      features: ["돈카츠 전문", "역내 동선"],
      links: [{ "label": "공식 사이트", "url": "https://www.katsukura.jp/" }]
    },
    "kyoto ramen koji": {
      rating: 4.2,
      ratingCount: 2140,
      ratingSource: "Google",
      summary: "교토역 10층 라멘 거리로 유명 라멘집이 모여 있습니다.",
      building: "교토역 빌딩",
      floor: "10층",
      tags: ["교토역", "라멘", "식사"],
      features: ["라멘 테마존", "선택 폭 넓음"],
      links: [{ "label": "공식 사이트", "url": "https://www.kyoto-ramen-koji.com/" }]
    },
    "kura sushi - kyoto station area": {
      rating: 4.0,
      ratingCount: 2850,
      ratingSource: "Google",
      summary: "합리적인 가격의 회전초밥 체인으로 부담 없이 즐길 수 있습니다.",
      area: "교토역 주변",
      tags: ["교토역", "회전초밥", "식사"],
      features: ["회전초밥", "가성비"],
      links: [{ "label": "공식 사이트", "url": "https://www.kurasushi.co.jp/" }]
    },
    "donguri kyoto station": {
      rating: 4.0,
      ratingCount: 890,
      ratingSource: "Google",
      summary: "교토풍 오코노미야키 전문점으로 든든한 한 끼에 좋습니다.",
      area: "교토역 주변",
      tags: ["교토역", "오코노미야키", "식사"],
      features: ["오코노미야키", "현지 맛집"],
      links: [{ "label": "공식 사이트", "url": "https://www.kyoto-donguri.co.jp/" }]
    },
    "tsujiri kyoto tower sando": {
      rating: 4.1,
      ratingCount: 560,
      ratingSource: "Google",
      summary: "교토 타워 산도에 위치한 말차 디저트 전문점입니다.",
      building: "교토 타워 산도",
      floor: "1층",
      tags: ["교토역", "카페", "말차"],
      features: ["말차 디저트", "테이크아웃"],
      links: [{ "label": "공식 사이트", "url": "https://www.giontsujiri.co.jp/" }]
    },
    "ogawa coffee kyoto station": {
      rating: 4.0,
      ratingCount: 920,
      ratingSource: "Google",
      summary: "교토 로컬 커피를 즐길 수 있는 교토역 카페입니다.",
      building: "교토역",
      floor: "B1층",
      tags: ["교토역", "카페", "커피"],
      features: ["로컬 커피", "역내 동선"],
      links: [{ "label": "공식 사이트", "url": "https://www.oc-ogawa.co.jp/" }]
    },
    "bic camera kyoto station": {
      rating: 3.9,
      ratingCount: 2840,
      ratingSource: "Google",
      summary: "교토역 근처 대형 가전 매장으로 기념품 쇼핑에도 좋습니다.",
      area: "교토역 주변",
      tags: ["교토역", "쇼핑", "전자"],
      features: ["가전/잡화", "대형 매장"],
      links: [{ "label": "공식 사이트", "url": "https://www.biccamera.com/" }]
    },
    "kyoto avanti": {
      rating: 3.7,
      ratingCount: 2450,
      ratingSource: "Google",
      summary: "남쪽 출구 인근 쇼핑몰로 돈키호테 등 매장이 입점해 있습니다.",
      area: "교토역 남쪽 출구",
      tags: ["교토역", "쇼핑", "몰"],
      features: ["쇼핑몰", "생활 쇼핑"],
      links: [{ "label": "공식 사이트", "url": "https://kyoto-avanti.com/" }]
    },
    "chao chao gyoza sanjo kawaramachi": {
      rating: 4.4,
      ratingCount: 3210,
      ratingSource: "Google",
      summary: "바삭한 교자가 인기인 가와라마치 교자 전문점입니다.",
      area: "가와라마치",
      tags: ["가와라마치", "교자", "식사"],
      features: ["교자 전문", "가성비"],
      links: [{ "label": "공식 사이트", "url": "https://gyozaya.com/" }]
    },
    "red rock kyoto rokkaku": {
      rating: 4.2,
      ratingCount: 2450,
      ratingSource: "Google",
      summary: "산더미 스테이크 덮밥으로 유명한 덮밥집입니다.",
      area: "가와라마치",
      tags: ["가와라마치", "덮밥", "식사"],
      features: ["스테이크 덮밥", "사진 포인트"],
      links: [{ "label": "공식 사이트", "url": "http://www.redrock-kobe.com/" }]
    },
    "katsukura sanjo main store": {
      rating: 4.5,
      ratingCount: 1840,
      ratingSource: "Google",
      summary: "가와라마치 근처 돈카츠 전문점으로 본점 분위기가 좋습니다.",
      area: "가와라마치",
      tags: ["가와라마치", "돈카츠", "식사"],
      features: ["돈카츠 전문", "본점"],
      links: [{ "label": "공식 사이트", "url": "https://www.katsukura.jp/" }]
    },
    "ramen sen-no-kaze kyoto": {
      rating: 4.6,
      ratingCount: 4120,
      ratingSource: "Google",
      summary: "친절한 서비스와 깊은 육수로 유명한 교토 라멘집입니다.",
      area: "신쿄고쿠",
      tags: ["가와라마치", "라멘", "식사"],
      features: ["라멘", "현지 인기"],
      links: [{ "label": "공식 사이트", "url": "https://ramensen-no-kaze.jp/" }]
    },
    "musashi sushi": {
      rating: 4.2,
      ratingCount: 3560,
      ratingSource: "Google",
      summary: "가성비 좋은 노포 회전초밥 체인입니다.",
      area: "가와라마치",
      tags: ["가와라마치", "회전초밥", "식사"],
      features: ["회전초밥", "가성비"],
      links: [{ "label": "공식 사이트", "url": "https://www.sushinomusashi.com/" }]
    },
    "blue bottle coffee kyoto rokkaku": {
      rating: 4.3,
      ratingCount: 890,
      ratingSource: "Google",
      summary: "전통 가옥을 개조한 블루보틀 교토 매장입니다.",
      area: "가와라마치",
      tags: ["가와라마치", "카페", "커피"],
      features: ["블루보틀", "전통 가옥"],
      links: [{ "label": "공식 사이트", "url": "https://store.bluebottlecoffee.jp/" }]
    },
    "weekenders coffee tominokoji": {
      rating: 4.5,
      ratingCount: 1120,
      ratingSource: "Google",
      summary: "숨은 로스터리 카페로 진한 핸드드립이 인기입니다.",
      area: "니시키 시장 인근",
      tags: ["가와라마치", "카페", "로스터리"],
      features: ["로스터리", "핸드드립"],
      links: [{ "label": "공식 사이트", "url": "https://www.weekenderscoffee.com/" }]
    },
    "starbucks coffee - kyoto sanjo ohashi": {
      rating: 4.1,
      ratingCount: 1540,
      ratingSource: "Google",
      summary: "가모강 뷰가 좋은 스타벅스 매장입니다.",
      area: "산조대교",
      tags: ["가와라마치", "카페", "가모강뷰"],
      features: ["강변 뷰", "휴식"],
      links: [{ "label": "공식 사이트", "url": "https://www.starbucks.co.jp/" }]
    },
    "takashimaya kyoto": {
      rating: 4.1,
      ratingCount: 4210,
      ratingSource: "Google",
      summary: "가와라마치 중심의 백화점으로 명품/식품관이 유명합니다.",
      area: "가와라마치",
      tags: ["가와라마치", "쇼핑", "백화점"],
      features: ["백화점", "명품/식품관"],
      links: [{ "label": "공식 사이트", "url": "https://www.takashimaya.co.jp/kyoto/" }]
    },
    "daimaru kyoto": {
      rating: 4.0,
      ratingCount: 3850,
      ratingSource: "Google",
      summary: "현지인이 많이 찾는 백화점으로 쇼핑 동선이 편합니다.",
      area: "시조 거리",
      tags: ["가와라마치", "쇼핑", "백화점"],
      features: ["백화점", "현지 인기"],
      links: [{ "label": "공식 사이트", "url": "https://www.daimaru.co.jp/kyoto/" }]
    },
    "pontocho alley": {
      rating: 4.4,
      ratingCount: 6850,
      ratingSource: "Google",
      summary: "교토의 분위기 있는 골목으로 저녁 산책에 좋습니다.",
      area: "가모강 인근",
      tags: ["가와라마치", "골목", "야간"],
      features: ["전통 골목", "저녁 산책"],
      links: [{ "label": "공식 사이트", "url": "https://www.ponto-chou.com/" }]
    },
    "kamo river": {
      rating: 4.6,
      ratingCount: 3420,
      ratingSource: "Google",
      summary: "가와라마치 인근 대표 산책로로 여유로운 강변 풍경을 즐길 수 있습니다.",
      tags: ["가와라마치", "산책", "강변"],
      features: ["강변 산책", "야경"],
      links: [{ "label": "공식 사이트", "url": "https://www.pref.kyoto.jp/kamogawa/" }]
    },
    "menya yuko": {
      rating: 4.4,
      ratingCount: 1240,
      ratingSource: "Google",
      summary: "조개 베이스의 깔끔한 라멘을 맛볼 수 있는 니조성 근처 라멘집입니다.",
      area: "니조성 주변",
      tags: ["니조성", "라멘", "식사"],
      features: ["조개 베이스 라멘", "깔끔한 맛"],
      links: [{ "label": "공식 사이트", "url": "https://menyayuuko.com/" }]
    },
    "karasemitei": {
      rating: 4.2,
      ratingCount: 350,
      ratingSource: "Google",
      summary: "현지인들이 찾는 카레/오므라이스 맛집입니다.",
      area: "니조성 주변",
      tags: ["니조성", "카레", "식사"],
      features: ["현지 맛집", "카레/오므라이스"],
      links: [{ "label": "공식 사이트", "url": "https://karasemitei.com/" }]
    },
    "kibunjocho": {
      rating: 4.1,
      ratingCount: 180,
      ratingSource: "Google",
      summary: "교토 채소를 활용한 정갈한 정식을 즐길 수 있는 식당입니다.",
      area: "니조성 주변",
      tags: ["니조성", "정식", "식사"],
      features: ["교토 채소 요리", "정갈한 분위기"],
      links: [{ "label": "공식 사이트", "url": "https://kibunjocho.jp/" }]
    },
    "seike nijo-jo": {
      rating: 4.3,
      ratingCount: 290,
      ratingSource: "Google",
      summary: "두부/유바 요리로 유명한 니조성 주변 전문점입니다.",
      area: "니조성 주변",
      tags: ["니조성", "두부", "식사"],
      features: ["두부/유바 요리", "전통 일식"],
      links: [{ "label": "공식 사이트", "url": "https://seike-kyoto.com/" }]
    },
    "forest kitchen": {
      rating: 4.5,
      ratingCount: 140,
      ratingSource: "Google",
      summary: "건강한 유기농 비건 메뉴를 제공하는 니조성 인근 식당입니다.",
      area: "니조성 주변",
      tags: ["니조성", "비건", "식사"],
      features: ["유기농", "비건"],
      links: [{ "label": "공식 사이트", "url": "http://forestkitchen.info/" }]
    },
    "clamp coffee sarasa": {
      rating: 4.4,
      ratingCount: 810,
      ratingSource: "Google",
      summary: "앤티크 감성의 로스터리 카페로 커피 맛이 좋습니다.",
      area: "니조성 주변",
      tags: ["니조성", "카페", "로스터리"],
      features: ["로스터리 카페", "앤티크 분위기"],
      links: [{ "label": "공식 사이트", "url": "https://www.sarasa.jp/" }]
    },
    "here kyoto": {
      rating: 4.3,
      ratingCount: 740,
      ratingSource: "Google",
      summary: "바리스타 챔피언이 운영하는 디저트 카페로 까눌레가 유명합니다.",
      area: "니조성 주변",
      tags: ["니조성", "카페", "디저트"],
      features: ["까눌레", "스페셜티 커피"],
      links: [{ "label": "공식 사이트", "url": "https://coffeehere.world/" }]
    },
    "blue bottle coffee kyoto cafe": {
      rating: 4.3,
      ratingCount: 2850,
      ratingSource: "Google",
      summary: "세련된 디자인으로 유명한 교토 블루보틀 카페입니다.",
      area: "교토 시내",
      tags: ["카페", "블루보틀", "커피"],
      features: ["세련된 공간", "스페셜티 커피"],
      links: [{ "label": "공식 사이트", "url": "https://store.bluebottlecoffee.jp/" }]
    },
    "kyoto sanjo kai shotengai": {
      rating: 4.0,
      ratingCount: 1120,
      ratingSource: "Google",
      summary: "생활 밀착형 상점가로 소소한 쇼핑에 좋습니다.",
      area: "산조 거리",
      tags: ["니조성", "쇼핑", "상점가"],
      features: ["아케이드 상점가", "로컬 쇼핑"],
      links: [{ "label": "공식 사이트", "url": "https://kyoto-sanjo.or.jp/" }]
    },
    "horikawa shotengai": {
      rating: 3.8,
      ratingCount: 450,
      ratingSource: "Google",
      summary: "호리카와 거리의 전통 상점가로 산책하며 둘러보기 좋습니다.",
      area: "호리카와 거리",
      tags: ["니조성", "쇼핑", "상점가"],
      features: ["전통 상점가", "산책 동선"],
      links: [{ "label": "공식 사이트", "url": "http://www.horikawa-shotengai.com/" }]
    },
    "shiki-no-ame": {
      rating: 4.4,
      ratingCount: 65,
      ratingSource: "Google",
      summary: "전통 부채와 공예품을 살 수 있는 기념품점입니다.",
      area: "니조성 주변",
      tags: ["니조성", "쇼핑", "공예"],
      features: ["전통 공예품", "기념품"],
      links: [{ "label": "공식 사이트", "url": "http://shikinoame.com/" }]
    },
    "kyoto imperial palace": {
      rating: 4.5,
      ratingCount: 11240,
      ratingSource: "Google",
      summary: "교토 교엔 내 넓은 공원과 궁궐을 함께 볼 수 있는 명소입니다.",
      area: "교토 교엔",
      tags: ["니조성", "궁궐", "볼거리"],
      features: ["궁궐", "대규모 공원"],
      links: [{ "label": "공식 사이트", "url": "https://sankan.kunaicho.go.jp/" }]
    },
    "omen kinkakuji": {
      rating: 4.1,
      ratingCount: 840,
      ratingSource: "Google",
      summary: "금각사 인근에서 채소 우동을 즐길 수 있는 인기 식당입니다.",
      area: "금각사 주변",
      tags: ["금각사", "우동", "식사"],
      features: ["채소 우동", "가벼운 한 끼"],
      links: [{ "label": "공식 사이트", "url": "https://omen.co.jp/" }]
    },
    "kura sushi kinkakuji": {
      rating: 4.0,
      ratingCount: 1560,
      ratingSource: "Google",
      summary: "금각사 인근 회전초밥 체인으로 부담 없는 식사가 가능합니다.",
      area: "금각사 주변",
      tags: ["금각사", "회전초밥", "식사"],
      features: ["회전초밥", "가성비"],
      links: [{ "label": "공식 사이트", "url": "https://www.kurasushi.co.jp/" }]
    },
    "itadakizen kyoto": {
      rating: 4.5,
      ratingCount: 310,
      ratingSource: "Google",
      summary: "사찰 분위기의 건강식 비건 레스토랑입니다.",
      area: "금각사 주변",
      tags: ["금각사", "비건", "식사"],
      features: ["비건 요리", "건강식"],
      links: [{ "label": "공식 사이트", "url": "https://itadakizen-kyoto.com/" }]
    },
    "kinkakuji michi": {
      rating: 3.9,
      ratingCount: 180,
      ratingSource: "Google",
      summary: "소박한 소바와 일본식 식사를 즐길 수 있는 가게입니다.",
      area: "금각사 주변",
      tags: ["금각사", "소바", "식사"],
      features: ["소바", "소박한 분위기"],
      links: [{ "label": "공식 사이트", "url": "https://kinkakujimichi.com/" }]
    },
    "mitaia": {
      rating: 4.0,
      ratingCount: 75,
      ratingSource: "Google",
      summary: "교토산 재료를 사용하는 가정식 백반 스타일 식당입니다.",
      area: "금각사 주변",
      tags: ["금각사", "가정식", "식사"],
      features: ["가정식", "현지 재료"],
      links: [{ "label": "공식 사이트", "url": "http://mitaia.com/" }]
    },
    "yojiya cafe kinkakuji": {
      rating: 4.0,
      ratingCount: 420,
      ratingSource: "Google",
      summary: "로고 라떼 아트로 유명한 요지야 카페입니다.",
      area: "금각사 주변",
      tags: ["금각사", "카페", "디저트"],
      features: ["라떼 아트", "디저트"],
      links: [{ "label": "공식 사이트", "url": "https://yojiyacafe.com/" }]
    },
    "kousagi-no-sato": {
      rating: 4.2,
      ratingCount: 150,
      ratingSource: "Google",
      summary: "토끼 테마 디저트가 유명한 아기자기한 카페입니다.",
      area: "금각사 주변",
      tags: ["금각사", "카페", "디저트"],
      features: ["테마 카페", "디저트"],
      links: [{ "label": "공식 사이트", "url": "http://kousagi-no-sato.com/" }]
    },
    "starbucks coffee - kyoto ryoanji": {
      rating: 4.1,
      ratingCount: 320,
      ratingSource: "Google",
      summary: "료안지로 가는 길목에 있는 아늑한 스타벅스 매장입니다.",
      area: "료안지 주변",
      tags: ["금각사", "카페", "휴식"],
      features: ["커피/음료", "휴식"],
      links: [{ "label": "공식 사이트", "url": "https://www.starbucks.co.jp/" }]
    },
    "kinkaku-ji temple shop": {
      rating: 4.4,
      ratingCount: 120,
      ratingSource: "Google",
      summary: "금각사 공식 기념품과 부적을 구매할 수 있는 매장입니다.",
      area: "금각사 내부",
      tags: ["금각사", "쇼핑", "기념품"],
      features: ["기념품", "부적"],
      links: [{ "label": "공식 사이트", "url": "https://www.shokoku-ji.jp/" }]
    },
    "tsuruya yoshinobu": {
      rating: 4.3,
      ratingCount: 280,
      ratingSource: "Google",
      summary: "정교한 일본 전통 과자를 판매하는 노포입니다.",
      area: "금각사 주변",
      tags: ["금각사", "쇼핑", "전통과자"],
      features: ["전통 과자", "선물"],
      links: [{ "label": "공식 사이트", "url": "https://www.tsuruyayoshinobu.jp/" }]
    },
    "kyoto craft mart": {
      rating: 4.1,
      ratingCount: 45,
      ratingSource: "Google",
      summary: "교토 장인 공예품을 구입할 수 있는 공예품 샵입니다.",
      area: "금각사 주변",
      tags: ["금각사", "쇼핑", "공예"],
      features: ["공예품", "기념품"],
      links: [{ "label": "공식 사이트", "url": "http://kyotocraftmart.com/" }]
    },
    "ryoan-ji": {
      rating: 4.5,
      ratingCount: 9120,
      ratingSource: "Google",
      summary: "세계적인 선 정원으로 유명한 료안지 사찰입니다.",
      tags: ["사찰", "정원", "볼거리"],
      features: ["석정", "전통 사찰"],
      links: [{ "label": "공식 사이트", "url": "http://www.ryoanji.jp/" }]
    },
    "tougou kitayama": {
      rating: 4.2,
      ratingCount: 140,
      ratingSource: "Google",
      summary: "키타야마 거리의 분위기 좋은 이탈리안 레스토랑입니다.",
      area: "키타야마",
      tags: ["키타야마", "이탈리안", "식사"],
      features: ["이탈리안", "분위기 좋은 식사"],
      links: [{ "label": "공식 사이트", "url": "https://tougou.jp/" }]
    },
    "in the green": {
      rating: 4.0,
      ratingCount: 1120,
      ratingSource: "Google",
      summary: "식물원 옆 테라스 레스토랑으로 전망과 함께 식사 가능합니다.",
      area: "키타야마",
      tags: ["키타야마", "레스토랑", "식물원"],
      features: ["테라스", "식물원 뷰"],
      links: [{ "label": "공식 사이트", "url": "https://www.inthegreen.jp/" }]
    },
    "katsukura kitayama": {
      rating: 4.1,
      ratingCount: 420,
      ratingSource: "Google",
      summary: "키타야마의 모던한 돈카츠 전문점입니다.",
      area: "키타야마",
      tags: ["키타야마", "돈카츠", "식사"],
      features: ["돈카츠 전문", "모던 인테리어"],
      links: [{ "label": "공식 사이트", "url": "https://www.katsukura.jp/" }]
    },
    "briant kitayama": {
      rating: 4.2,
      ratingCount: 580,
      ratingSource: "Google",
      summary: "빵이 유명한 베이커리 레스토랑입니다.",
      area: "키타야마",
      tags: ["키타야마", "베이커리", "식사"],
      features: ["베이커리", "가벼운 식사"],
      links: [{ "label": "공식 사이트", "url": "https://www.briant.jp/" }]
    },
    "malebranche kitayama main store": {
      rating: 4.4,
      ratingCount: 1210,
      ratingSource: "Google",
      summary: "말차 디저트로 유명한 말브랑슈 키타야마 본점입니다.",
      area: "키타야마",
      tags: ["키타야마", "디저트", "카페"],
      features: ["차노카", "디저트"],
      links: [{ "label": "공식 사이트", "url": "https://www.malebranche.co.jp/" }]
    },
    "circus coffee": {
      rating: 4.6,
      ratingCount: 210,
      ratingSource: "Google",
      summary: "키타야마의 감성 로스터리 카페로 커피 맛이 좋습니다.",
      area: "키타야마",
      tags: ["키타야마", "카페", "로스터리"],
      features: ["로스터리", "핸드드립"],
      links: [{ "label": "공식 사이트", "url": "https://www.circus-coffee.jp/" }]
    },
    "cafe bali gasi": {
      rating: 4.0,
      ratingCount: 180,
      ratingSource: "Google",
      summary: "휴양지 감성의 테라스 카페로 여유롭게 쉬기 좋습니다.",
      area: "키타야마",
      tags: ["키타야마", "카페", "테라스"],
      features: ["테라스 카페", "휴양지 분위기"],
      links: [{ "label": "공식 사이트", "url": "https://baligasi.com/" }]
    },
    "kyoto kitayama coffee": {
      rating: 4.2,
      ratingCount: 120,
      ratingSource: "Google",
      summary: "장인 정신의 핸드드립 커피를 즐길 수 있는 카페입니다.",
      area: "키타야마",
      tags: ["키타야마", "카페", "커피"],
      features: ["핸드드립", "조용한 분위기"],
      links: [{ "label": "공식 사이트", "url": "http://kitayamacoffee.com/" }]
    },
    "kitayama-dori": {
      rating: 3.9,
      ratingCount: 320,
      ratingSource: "Google",
      summary: "키타야마 메인 거리로 감각적인 매장이 모여 있습니다.",
      area: "키타야마",
      tags: ["키타야마", "쇼핑", "거리"],
      features: ["쇼핑 거리", "감각적인 매장"],
      links: [{ "label": "공식 사이트", "url": "https://kitayama.or.jp/" }]
    },
    "alpha kyoto": {
      rating: 4.3,
      ratingCount: 45,
      ratingSource: "Google",
      summary: "인테리어 소품을 판매하는 감각적인 소품샵입니다.",
      area: "키타야마",
      tags: ["키타야마", "쇼핑", "소품"],
      features: ["인테리어 소품", "감성 매장"],
      links: [{ "label": "공식 사이트", "url": "http://alpha-kyoto.com/" }]
    },
    "kanaya masahiro": {
      rating: 4.5,
      ratingCount: 68,
      ratingSource: "Google",
      summary: "160년 전통의 과자점을 키타야마에서 만날 수 있습니다.",
      area: "키타야마",
      tags: ["키타야마", "전통과자", "쇼핑"],
      features: ["전통 과자", "선물"],
      links: [{ "label": "공식 사이트", "url": "https://kanayamasahiro.com/" }]
    },
    "kamigamo-jinja shrine": {
      rating: 4.5,
      ratingCount: 5840,
      ratingSource: "Google",
      summary: "유네스코 유산으로 알려진 오래된 신사입니다.",
      tags: ["신사", "유네스코", "볼거리"],
      features: ["전통 신사", "조용한 산책"],
      links: [{ "label": "공식 사이트", "url": "https://www.kamigamojinja.jp/" }]
    },
    "shichijo shindo": {
      rating: 4.2,
      ratingCount: 120,
      ratingSource: "Google",
      summary: "정갈한 소바와 덮밥을 즐길 수 있는 노포입니다.",
      area: "산쥬산겐도 주변",
      tags: ["산쥬산겐도", "소바", "식사"],
      features: ["소바", "노포"],
      links: [{ "label": "공식 사이트", "url": "https://shichijoshindo.com/" }]
    },
    "sobanomi yoshimura": {
      rating: 4.4,
      ratingCount: 1580,
      ratingSource: "Google",
      summary: "메밀 향이 진한 수제 소바 전문점입니다.",
      area: "히가시혼간지 주변",
      tags: ["교토역", "소바", "식사"],
      features: ["수제 소바", "현지 인기"],
      links: [{ "label": "공식 사이트", "url": "https://yoshimura-gr.com/" }]
    },
    "veg out": {
      rating: 4.4,
      ratingCount: 540,
      ratingSource: "Google",
      summary: "강변 뷰를 보며 즐기는 비건 브런치 카페입니다.",
      area: "가모강 인근",
      tags: ["산쥬산겐도", "비건", "식사"],
      features: ["비건 브런치", "강변 뷰"],
      links: [{ "label": "공식 사이트", "url": "https://vegout.jp/" }]
    },
    "ask me!": {
      rating: 4.6,
      ratingCount: 85,
      ratingSource: "Google",
      summary: "수제 정식과 도시락으로 평이 좋은 작은 식당입니다.",
      area: "교토역 인근",
      tags: ["교토역", "정식", "식사"],
      features: ["수제 정식", "도시락"],
      links: [{ "label": "공식 사이트", "url": "http://askme-kyoto.com/" }]
    },
    "sanshu-tei": {
      rating: 4.1,
      ratingCount: 110,
      ratingSource: "Google",
      summary: "조용한 분위기의 전통 정찬 식당입니다.",
      area: "산쥬산겐도 주변",
      tags: ["산쥬산겐도", "정식", "식사"],
      features: ["전통 정찬", "조용한 분위기"],
      links: [{ "label": "공식 사이트", "url": "http://sanshutei.jp/" }]
    },
    "kaikado cafe": {
      rating: 4.4,
      ratingCount: 810,
      ratingSource: "Google",
      summary: "전통 공예와 커피를 함께 즐길 수 있는 감성 카페입니다.",
      area: "교토역 인근",
      tags: ["카페", "공예", "커피"],
      features: ["전통 공예", "로스터리"],
      links: [{ "label": "공식 사이트", "url": "http://www.kaikado-cafe.jp/" }]
    },
    "walden woods kyoto": {
      rating: 4.3,
      ratingCount: 920,
      ratingSource: "Google",
      summary: "하얀 숲 같은 감성 인테리어로 유명한 카페입니다.",
      area: "히가시혼간지 주변",
      tags: ["카페", "감성", "디저트"],
      features: ["화이트 인테리어", "디저트"],
      links: [{ "label": "공식 사이트", "url": "https://www.walden-woods.com/" }]
    },
    "kurasu kyoto stand": {
      rating: 4.6,
      ratingCount: 1240,
      ratingSource: "Google",
      summary: "교토에서 유명한 로스터리 스탠드 카페입니다.",
      area: "교토역 인근",
      tags: ["카페", "로스터리", "커피"],
      features: ["스페셜티 커피", "테이크아웃"],
      links: [{ "label": "공식 사이트", "url": "https://kurasu.kyoto/" }]
    },
    "kyoto ceramic art association": {
      rating: 4.2,
      ratingCount: 55,
      ratingSource: "Google",
      summary: "교토 도자기 공예품을 둘러볼 수 있는 전시장입니다.",
      area: "산쥬산겐도 주변",
      tags: ["쇼핑", "공예", "전시"],
      features: ["도자기 공예", "전시장"],
      links: [{ "label": "공식 사이트", "url": "https://www.kyototougei.com/" }]
    },
    "shichijo-dori": {
      rating: 3.8,
      ratingCount: 150,
      ratingSource: "Google",
      summary: "골동품과 공예품 가게가 이어지는 거리입니다.",
      area: "산쥬산겐도 주변",
      tags: ["쇼핑", "거리", "공예"],
      features: ["골동품", "공예품"],
      links: [{ "label": "공식 사이트", "url": "https://shichijo-dori.com/" }]
    },
    "kyonamaji": {
      rating: 4.3,
      ratingCount: 42,
      ratingSource: "Google",
      summary: "교토 전통 절임 요리를 판매하는 전문점입니다.",
      area: "히가시혼간지 주변",
      tags: ["쇼핑", "전통", "먹거리"],
      features: ["전통 절임", "기념품"],
      links: [{ "label": "공식 사이트", "url": "https://kyonamaji.com/" }]
    }
  }
};
