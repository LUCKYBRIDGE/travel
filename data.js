window.TRIP_DATA = {
  meta: {
    title: "교토 가족 여행 플래너",
    subtitle: "간사이 공항 → 교토 · 옵션 분기형 일정",
    dateRange: "2026-01-20 ~ 2026-01-22",
    travelers: "성인 5인 가족",
    baseCity: "KIX / Kyoto",
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
  ratingsSnapshotUrl: "./ratings.json",
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
        { mode: "전철", timeMin: 5, timeMax: 8, costMin: 260, costMax: 260, unit: "per_person" },
        { mode: "택시", timeMin: 10, timeMax: 15, costMin: 2000, costMax: 2500, unit: "per_car", cars: 2 }
      ]
    },
    {
      from: "Rinku Premium Outlets",
      to: "JR Haruka Kansai Airport Station",
      options: [
        { mode: "전철", timeMin: 5, timeMax: 8, costMin: 260, costMax: 260, unit: "per_person" },
        { mode: "택시", timeMin: 10, timeMax: 15, costMin: 2000, costMax: 2500, unit: "per_car", cars: 2 }
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
        { mode: "버스", timeMin: 30, timeMax: 40, costMin: 230, costMax: 230, unit: "per_person" },
        { mode: "택시", timeMin: 20, timeMax: 25, costMin: 2500, costMax: 3000, unit: "per_car", cars: 2 }
      ]
    },
    {
      from: "Kinkaku-ji",
      to: "Grill Capital Touyoutei",
      options: [
        { mode: "택시", timeMin: 10, timeMax: 15, costMin: 1500, costMax: 1800, unit: "per_car", cars: 2 },
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
            "ICOCA 발급(보증금 500엔) + 현금 충전",
            "하루카 QR 발권 및 실물 티켓 수령"
          ],
          location: {
            name: "간사이 공항 T1 (KIX T1)",
            mapQuery: "Kansai International Airport Terminal 1"
          },
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
          mode: "single",
          default: "airport-meal",
          options: [
            {
              id: "airport-meal",
              label: "옵션 A · 공항 식사 + 린쿠 쇼핑",
              summary: "체력 온존형",
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
                          note: "정갈한 좌석 초밥 정식",
                          menu: "초밥 정식 2,500~3,500엔",
                          where: "간사이 공항 T1 3층",
                          desc: "공항에서 차분하게 앉아 먹는 정식 코스. 5인 가족 식사에 안정적입니다.",
                          mapQuery: "Ganko Sushi Kansai Airport",
                          cost: { "min": 2500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakasu",
                          label: "나카스 규동 (Nakasu)",
                          note: "간단·빠른 식사",
                          menu: "규동 약 600엔",
                          where: "간사이 공항 T1 2층",
                          desc: "시간이 빠듯할 때 든든하게 먹기 좋아요. 대기 시간이 짧은 편입니다.",
                          mapQuery: "Nakasu Kansai Airport",
                          cost: { "min": 600, "max": 600, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "ootoya",
                          label: "오토야 (Ootoya)",
                          note: "속 편한 가정식",
                          menu: "가정식 정식 1,200~1,500엔",
                          where: "간사이 공항 T1 2층",
                          desc: "생선/닭요리 등 부담 없는 메뉴가 많아 부모님 동반에 안정적인 선택입니다.",
                          mapQuery: "Ootoya Kansai Airport",
                          cost: { "min": 1200, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
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
                    "공항역 → 린쿠타운역 5분",
                    "아식스 팩토리 아울렛 30~50% 할인",
                    "브룩클린 로스팅 컴퍼니 라떼 650엔"
                  ],
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
                          id: "nakau",
                          label: "나카우 교토역 (Nakau Kyoto Station)",
                          note: "24시간 간편식",
                          menu: "오야코동 490엔",
                          desc: "늦은 시간에도 빠르게 먹을 수 있는 가성비 선택지입니다.",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
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
                  details: ["T1 2층 로손", "타마고 산도 250엔 + 가라아게군 240엔"],
                  location: {
                    name: "로손 (Lawson)",
                    mapQuery: "Lawson Kansai Airport Terminal 1"
                  },
                  tags: ["간식"],
                  where: "간사이 공항 T1 2층",
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
                  details: ["예상 대기 20~30분", "린쿠 프리미엄 아울렛 내"],
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
                          note: "가성비 해산물 덮밥",
                          menu: "해산물 덮밥 1,500~1,900엔",
                          desc: "해산물을 가볍게 즐기기 좋고 가격대도 무난합니다.",
                          mapQuery: "Komeraku Rinku",
                          cost: { "min": 1500, "max": 1900, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "kurasushi",
                          label: "쿠라 스시 (Kura Sushi)",
                          note: "회전초밥 캐주얼",
                          menu: "회전초밥 125엔~",
                          desc: "입맛이 갈릴 때 부담 없이 선택 가능한 회전초밥 체인입니다.",
                          mapQuery: "Kura Sushi Rinku",
                          cost: { "min": 125, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        }
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
                  details: ["린쿠 아울렛 아식스 팩토리"],
                  location: {
                    name: "아식스 아울렛 (ASICS Factory Outlet Rinku)",
                    mapQuery: "ASICS Factory Outlet Rinku"
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
                          id: "ganko-c",
                          label: "간코 스시 (Ganko Sushi)",
                          note: "좌석 초밥 정식",
                          menu: "초밥 정식 2,500~3,500엔",
                          where: "간사이 공항 T1 3층",
                          desc: "도착 첫날에 차분하게 정식으로 식사하고 싶을 때 좋습니다.",
                          mapQuery: "Ganko Sushi Kansai Airport",
                          cost: { "min": 2500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
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
                          id: "nakau-c",
                          label: "나카우 교토역 (Nakau Kyoto Station)",
                          note: "24시간 간편식",
                          menu: "오야코동 490엔",
                          desc: "늦게 도착했을 때 가볍게 해결하기 좋습니다.",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "izumo",
                          label: "이즈모 교토 (Izumo Kyoto)",
                          note: "비주얼 강한 장어덮밥",
                          menu: "계란말이 장어덮밥 3,000엔",
                          desc: "사진이 잘 나오는 메뉴로 특별한 식사를 원할 때 추천합니다.",
                          mapQuery: "Izumo Kyoto Station",
                          cost: { "min": 3000, "max": 3000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        }
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
      tips: [
        "성인 5인은 택시 2대 필요",
        "3km 이내 단거리는 택시가 효율적",
        "교통카드 충전과 사찰 입장료는 현금 필요"
      ]
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
                  label: "이치호도 (Ippodo Tea)",
                  note: "말차/다구 전문점",
                  desc: "입문자부터 전문가까지 선택지가 넓어 선물용 구매에 적합합니다.",
                  mapQuery: "Ippodo Tea Store Kyoto"
                },
                {
                  id: "marukyu",
                  label: "마루큐 코야마엔 (Marukyu Koyamaen)",
                  note: "고급 말차",
                  desc: "진한 말차를 찾는 분에게 추천. 인기 제품은 품절이 빠릅니다.",
                  mapQuery: "Marukyu Koyamaen Kyoto"
                },
                {
                  id: "asics",
                  label: "아식스 교토 가와라마치 (ASICS Kyoto Kawaramachi)",
                  note: "최신 모델/사이즈",
                  desc: "린쿠에서 못 구한 모델과 사이즈를 찾기 좋은 공식 스토어입니다.",
                  mapQuery: "ASICS Store Kyoto"
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
                  mapQuery: "Shinkyogoku Shopping Street"
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
        "버스 혼잡 시 금각사 → 키타야마는 택시 2대 추천",
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
                          label: "이노다 커피 (Inoda Coffee)",
                          note: "클래식 카페",
                          menu: "커피/디저트 800~1,200엔",
                          where: "교토 포르타 지하",
                          desc: "레트로한 분위기에서 천천히 쉬기 좋은 공간입니다.",
                  mapQuery: "Inoda Coffee Kyoto",
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
    { "id": "c1", "label": "현금 인출 완료", "day": "day1", "category": "공항" },
    { "id": "c2", "label": "ICOCA 발급 및 충전", "day": "day1", "category": "공항" },
    { "id": "c3", "label": "하루카 티켓 수령", "day": "day1", "category": "공항" },
    { "id": "c4", "label": "호텔 체크인", "day": "day1", "category": "숙소" },
    { "id": "c5", "label": "2일차 1일권 구매", "day": "day2", "category": "교통" },
    { "id": "c6", "label": "현금 5,000엔 이상 확보", "day": "day2", "category": "현금" },
    { "id": "c7", "label": "동양정 대기번호표 확인", "day": "day2", "category": "식사" },
    { "id": "c8", "label": "짐 보관 완료", "day": "day3", "category": "숙소" },
    { "id": "c9", "label": "16:00 짐 수령", "day": "day3", "category": "숙소" },
    { "id": "c10", "label": "하루카 43호 탑승", "day": "day3", "category": "교통" }
  ],
  globalTips: [
    "성인 5인은 택시 2대 필요",
    "3km 이내 단거리는 택시가 시간 효율적",
    "교통카드 충전과 사찰 입장료는 현금 필수"
  ],
  placeDetails: {
    "kansai international airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary: "입국 수속, 교통, 식사를 한 번에 해결할 수 있는 간사이 공항의 핵심 터미널입니다.",
      building: "간사이 공항 T1",
      floor: "2~4층",
      features: ["공항 내 식당/교통/ATM 집중", "T2↔T1 셔틀 연계"],
      pros: ["이동 최소화", "시설이 한 곳에 모여 있음"],
      cons: ["피크 시간 혼잡", "가격대가 높을 수 있음"],
      nearby: [
        {
          name: "세븐은행 ATM (Seven Bank)",
          mapQuery: "Seven Bank Kansai Airport Terminal 1",
          type: "ATM",
          features: ["트래블로그 출금", "24시간 이용"],
          pros: ["가족 단위 출금에 편리"],
          cons: ["혼잡 가능"]
        },
        {
          name: "이온은행/우체국 ATM",
          mapQuery: "AEON Bank Kansai Airport Terminal 1",
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
        }
      ]
    },
    "kansai international airport": {
      rating: null,
      ratingSource: "Google",
      summary: "교토와 오사카를 잇는 관문 공항으로, T1과 T2가 분리되어 있어 이동 동선을 미리 확인해두면 편합니다.",
      features: ["국제선 허브", "T1/T2 분리"],
      pros: ["교통 접근성 좋음"],
      cons: ["보안/이동 대기 시간"],
      nearby: []
    },
    "rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "공항에서 전철로 5분 거리에 있는 대형 아울렛으로, 쇼핑과 식사를 한 번에 해결하기 좋은 곳입니다.",
      features: ["대형 아울렛", "야외 쇼핑 동선"],
      pros: ["브랜드 다양", "할인율 높음"],
      cons: ["바람/추위 영향", "식사 대기 발생"],
      nearby: [
        {
          name: "린쿠 마블 비치 (Rinku Marble Beach)",
          mapQuery: "Rinku Marble Beach",
          type: "산책",
          features: ["바다 산책로", "노을 명소"],
          pros: ["사진 포인트"],
          cons: ["날씨 영향"]
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
          name: "브룩클린 로스팅 컴퍼니 (Brooklyn Roasting)",
          mapQuery: "Brooklyn Roasting Company Rinku",
          type: "카페",
          features: ["바다 뷰 라떼", "휴식 공간"],
          pros: ["짧은 휴식에 적합"],
          cons: ["좌석 한정"]
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
          mapQuery: "Komeraku Rinku",
          type: "식사",
          features: ["해산물 덮밥"],
          pros: ["가성비"],
          cons: ["점심 혼잡"]
        }
      ]
    },
    "kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토의 핵심 교통 허브로 쇼핑, 식사, 야경까지 한 번에 해결할 수 있는 복합 공간입니다.",
      features: ["교통 허브", "백화점/식당 밀집"],
      pros: ["이동이 편리", "식사 선택지 다양"],
      cons: ["동선 복잡", "피크 시간 혼잡"],
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
          name: "교토 라멘 스트리트 (Kyoto Ramen Street)",
          mapQuery: "Kyoto Ramen Street",
          type: "식사",
          features: ["라멘 전문 존"],
          pros: ["취향 선택 폭 넓음"],
          cons: ["식사 시간 대기"]
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
    "kyoto station skyway": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 내부 10층 통로에서 무료로 야경을 볼 수 있는 전망 코스입니다.",
      building: "교토역 빌딩",
      floor: "10층",
      features: ["무료 전망", "실내 동선"],
      pros: ["야경 감상"],
      cons: ["혼잡 가능"]
    },
    "kyoto station grand stairway": {
      rating: null,
      ratingSource: "Google",
      summary: "LED 조명 쇼가 열리는 계단형 광장으로 사진 찍기 좋은 포인트입니다.",
      building: "교토역 빌딩",
      floor: "4~11층",
      features: ["LED 쇼", "사진 포인트"],
      pros: ["무료 관람"],
      cons: ["혼잡 가능"]
    },
    "kyoto tower sando": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 타워 옆 쇼핑/맛집 복합 공간으로 짧게 들르기 좋습니다.",
      building: "교토 타워 산도",
      floor: "B1~2층",
      features: ["기념품/로컬 맥주", "실내 공간"],
      pros: ["간단 쇼핑"],
      cons: ["혼잡 가능"]
    },
    "jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 백화점 식품관으로 마감 세일 시간에 도시락을 저렴하게 살 수 있습니다.",
      building: "JR 교토 이세탄 (교토역 빌딩)",
      floor: "B1~B2층 (식품관)",
      features: ["백화점 식품관", "마감 세일"],
      pros: ["야식/선물 구매"],
      cons: ["저녁 혼잡"]
    },
    "hotel vischio kyoto by granvia": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 남쪽 출구에서 도보 2분 거리의 숙소로, 조식 포함 일정에 최적입니다.",
      features: ["교토역 도보 2분", "조식 제공"],
      pros: ["짐 이동 편리", "아침 동선 안정적"],
      cons: ["체크인/조식 시간 혼잡 가능"]
    },
    "lawson kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary: "공항 내 편의점으로 짧은 시간에 간단한 요기를 해결할 수 있습니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      features: ["간단 요기", "빠른 회전"],
      pros: ["시간 절약"],
      cons: ["좌석 제한"]
    },
    "seven bank kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary: "트래블로그 등 해외카드 출금이 가능한 대표 ATM입니다.",
      building: "간사이 공항 T1",
      floor: "2층 중앙 로비 / 4층 국제선 출발층",
      features: ["24시간 이용", "국제카드 출금"],
      pros: ["가족 단위 출금에 편리"],
      cons: ["피크 시간 혼잡"]
    },
    "aeon bank kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      summary: "트래블월렛 등 선불카드 출금에 유용한 ATM입니다.",
      building: "간사이 공항 T1",
      floor: "2층 중앙",
      features: ["국내 카드 출금", "대체 출금처"],
      pros: ["현금 확보 용이"],
      cons: ["위치 확인 필요"]
    },
    "jr ticket office kansai airport station": {
      rating: null,
      ratingSource: "Google",
      summary: "ICOCA 발급과 하루카 티켓 수령을 한 번에 해결하는 JR 매표 구역입니다.",
      building: "간사이공항역 (JR)",
      floor: "1층 (T1 연결)",
      features: ["ICOCA 발급", "하루카 지정석 발권"],
      pros: ["공항에서 교통 준비 완료"],
      cons: ["대기 발생 가능"]
    },
    "kyoto ramen street": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 빌딩 10층에 모인 라멘 전문 구역으로 다양한 스타일을 고를 수 있습니다.",
      building: "교토역 빌딩",
      floor: "10층 (라멘코지)",
      features: ["라멘 전문 존", "다양한 메뉴"],
      pros: ["선택 폭 넓음"],
      cons: ["식사 시간 대기"]
    },
    "asics factory outlet rinku": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 아울렛 내 아식스 매장으로 이월 모델을 할인된 가격에 구매하기 좋습니다.",
      features: ["아울렛 이월 모델"],
      pros: ["할인 폭 큼"],
      cons: ["사이즈 품절 가능"]
    },
    "kawaramachi kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 최대 쇼핑/식사 거리로 하루 종일 돌아다니기 좋은 도보 중심 상권입니다.",
      features: ["쇼핑/카페 밀집", "도보 이동 중심"],
      pros: ["하루 종일 동선 가능"],
      cons: ["혼잡", "대기 발생"],
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
          name: "테라마치 거리 (Teramachi Street)",
          mapQuery: "Teramachi Street Kyoto",
          type: "쇼핑",
          features: ["쇼핑 골목", "잡화/기념품"],
          pros: ["도보 이동 편리"],
          cons: ["인파 많음"]
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
          mapQuery: "Shinkyogoku Shopping Street",
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
      summary: "가와라마치 인근의 쇼핑 골목으로 기념품과 잡화를 둘러보기 좋습니다.",
      features: ["잡화/기념품", "도보 이동"],
      pros: ["짧은 동선"],
      cons: ["인파 많음"]
    },
    "nishiki market": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 대표 먹거리 시장으로 간식과 반찬을 가볍게 즐길 수 있습니다.",
      features: ["먹거리/기념품"],
      pros: ["현지 분위기"],
      cons: ["혼잡", "현금 필요"]
    },
    "shinkyogoku shopping street": {
      rating: null,
      ratingSource: "Google",
      summary: "비가 와도 둘러보기 좋은 실내형 상점가입니다.",
      features: ["실내 상점가"],
      pros: ["날씨 영향 적음"],
      cons: ["인파 많음"]
    },
    "pontocho alley": {
      rating: null,
      ratingSource: "Google",
      summary: "저녁 시간 산책에 좋은 골목길로 분위기 좋은 식당이 많습니다.",
      features: ["저녁 산책", "식당가"],
      pros: ["분위기 좋음"],
      cons: ["저녁 혼잡"]
    },
    "kamo river kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "강변 산책로로 잠깐 쉬어가기에 좋습니다.",
      features: ["강변 산책로"],
      pros: ["휴식에 좋음"],
      cons: ["날씨 영향"]
    },
    "551 horai kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary: "오사카 대표 만두 체인으로 테이크아웃이 가능해 공항 이동 중에도 먹기 좋습니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      features: ["오사카 명물 만두", "테이크아웃 가능"],
      pros: ["빠른 회전", "가성비"],
      cons: ["줄이 긴 편"]
    },
    "kineya mugimaru kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary: "따뜻한 우동과 세트 메뉴로 빠르게 한 끼를 해결할 수 있는 식당입니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      features: ["자가제면 우동", "세트 구성 다양"],
      pros: ["메뉴 선택 폭 넓음"],
      cons: ["혼잡 시 대기"]
    },
    "ganko sushi kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary: "정갈한 초밥 정식을 차분하게 먹기 좋은 좌석 식사형 스시집입니다.",
      building: "간사이 공항 T1",
      floor: "3층",
      features: ["정갈한 초밥 정식"],
      pros: ["좌석 식사 가능"],
      cons: ["가격대 높음"]
    },
    "nakasu kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary: "짧은 시간에 먹기 좋은 규동 전문점으로 가성비가 좋습니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      features: ["규동 중심", "빠른 식사"],
      pros: ["가성비"],
      cons: ["좌석 한정"]
    },
    "ootoya kansai airport": {
      rating: null,
      ratingSource: "Google",
      summary: "생선/닭요리 등 부담 없는 가정식 정식을 제공하는 체인입니다.",
      building: "간사이 공항 T1",
      floor: "2층",
      features: ["가정식 정식", "속 편한 메뉴"],
      pros: ["다양한 정식"],
      cons: ["대기 가능"]
    },
    "mametora rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      summary: "린쿠 아울렛 내 장어덮밥 전문점으로 제대로 된 장어 한 끼를 원할 때 선택합니다.",
      features: ["장어덮밥 전문"],
      pros: ["시그니처 메뉴"],
      cons: ["가격대 높음", "대기 가능"]
    },
    "komeraku rinku": {
      rating: null,
      ratingSource: "Google",
      summary: "해산물 덮밥을 합리적인 가격에 즐길 수 있는 식당입니다.",
      features: ["해산물 덮밥"],
      pros: ["가성비"],
      cons: ["점심 혼잡"]
    },
    "kura sushi rinku": {
      rating: null,
      ratingSource: "Google",
      summary: "가볍게 여러 접시를 즐길 수 있는 회전초밥 체인입니다.",
      features: ["회전초밥"],
      pros: ["가벼운 식사"],
      cons: ["대기 가능"]
    },
    "moritaya jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 대표 스키야키 전문점으로 고급스러운 식사를 원할 때 적합합니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      features: ["스키야키", "이세탄 11층"],
      pros: ["야경 뷰"],
      cons: ["예약 권장"]
    },
    "yakiniku hiro kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "와규 구이를 다양한 부위로 즐길 수 있는 인기 야키니쿠 식당입니다.",
      features: ["와규 구이"],
      pros: ["가족 식사 최적"],
      cons: ["예약 필요 가능"]
    },
    "katsukura kyoto porta": {
      rating: null,
      ratingSource: "Google",
      summary: "교토에서 유명한 돈카츠 체인으로 깔끔한 정식 구성이 강점입니다.",
      building: "교토 포르타",
      floor: "B1층",
      features: ["프리미엄 돈카츠"],
      pros: ["정식 구성"],
      cons: ["대기 가능"]
    },
    "nakau kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "24시간 운영으로 늦은 시간에도 빠르게 식사할 수 있는 가성비 매장입니다.",
      features: ["24시간", "가성비"],
      pros: ["대기 적음"],
      cons: ["분위기 단순"]
    },
    "nakamura tokichi kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "진한 말차 디저트로 유명한 카페로, 디저트 타임에 인기입니다.",
      building: "JR 교토 이세탄",
      floor: "3층",
      features: ["말차 디저트"],
      pros: ["디저트 만족도 높음"],
      cons: ["대기 가능"]
    },
    "sizuya kyoto station": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 팥빵으로 유명한 베이커리로 간식이나 아침으로 좋습니다.",
      building: "교토역 하치조 출구",
      floor: "1층",
      features: ["교토 팥빵"],
      pros: ["가성비 간식"],
      cons: ["빵 품절 가능"]
    },
    "to-ji temple": {
      rating: null,
      ratingSource: "Google",
      summary: "오층탑이 상징인 사찰로, 21일 코보산 장날이 특히 유명합니다.",
      features: ["오층탑", "21일 코보산"],
      pros: ["시장 분위기"],
      cons: ["현금 필요"]
    },
    "higashi honganji temple": {
      rating: null,
      ratingSource: "Google",
      summary: "넓은 경내와 목조 건축을 무료로 둘러볼 수 있는 대형 사찰입니다.",
      features: ["대형 목조 건축", "무료 관람"],
      pros: ["휴식에 좋음"],
      cons: ["추위 대비"]
    },
    "nijo castle": {
      rating: null,
      ratingSource: "Google",
      summary: "쇼군의 권력을 상징하는 성으로 화려한 건축과 정원이 인상적입니다.",
      features: ["니노마루 궁전", "정원"],
      pros: ["역사적 가치"],
      cons: ["실내 이동 많음"]
    },
    "kinkaku-ji": {
      rating: null,
      ratingSource: "Google",
      summary: "황금빛 누각으로 유명한 교토 대표 관광지입니다.",
      features: ["황금 누각", "일몰 뷰"],
      pros: ["상징적 포인트"],
      cons: ["혼잡", "현금 입장"]
    },
    "kyoto botanical garden": {
      rating: null,
      ratingSource: "Google",
      summary: "온실과 야간 전시가 있는 식물원으로 겨울 저녁에 실내 관람이 가능합니다.",
      features: ["실내 온실", "야간 전시"],
      pros: ["겨울 저녁 관람"],
      cons: ["티켓 비용"]
    },
    "sanjusangendo": {
      rating: null,
      ratingSource: "Google",
      summary: "1,001개의 관음상이 있는 긴 본당으로 평지 동선이 특징입니다.",
      features: ["1,001 관음상", "평지 동선"],
      pros: ["부모님 동선 편함"],
      cons: ["현금 입장"]
    },
    "grill capital touyoutei": {
      rating: null,
      ratingSource: "Google",
      summary: "교토에서 오래된 함박스테이크 전문점으로 가족 외식에 인기입니다.",
      features: ["함박스테이크", "노포"],
      pros: ["가족 식사 만족도"],
      cons: ["저녁 대기 가능"]
    },
    "ippodo tea store kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "말차와 다구를 폭넓게 갖춘 교토 대표 차 전문점입니다.",
      features: ["말차/다구 전문"],
      pros: ["선물용 최적"],
      cons: ["가격대 있음"]
    },
    "marukyu koyamaen kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "고급 말차 브랜드로 선물용 구매에 인기가 많습니다.",
      features: ["고급 말차"],
      pros: ["브랜드 신뢰도"],
      cons: ["품절 가능"]
    },
    "asics store kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "최신 러닝화 라인업을 확인할 수 있는 공식 스토어입니다.",
      features: ["신상/사이즈 다양"],
      pros: ["피팅 편리"],
      cons: ["할인 적음"]
    },
    "smart coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "레트로 분위기의 노포 카페로 프렌치 토스트가 유명합니다.",
      features: ["노포 카페", "프렌치 토스트"],
      pros: ["분위기 좋음"],
      cons: ["대기 가능"]
    },
    "honke owariya": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 전통 소바를 경험하기 좋은 노포입니다.",
      features: ["전통 소바"],
      pros: ["노포 경험"],
      cons: ["가격대 있음"]
    },
    "omen shijo": {
      rating: null,
      ratingSource: "Google",
      summary: "신선한 채소와 함께 먹는 우동으로 담백한 맛이 특징입니다.",
      features: ["채소 우동"],
      pros: ["담백한 맛"],
      cons: ["대기 가능"]
    },
    "kyogoku kaneyo": {
      rating: null,
      ratingSource: "Google",
      summary: "두툼한 계란지단이 올려진 장어덮밥으로 유명합니다.",
      features: ["킨시동"],
      pros: ["대표 메뉴"],
      cons: ["가격대 있음"]
    },
    "wako kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "깔끔한 돈카츠 정식과 리필 서비스로 유명한 체인입니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      features: ["돈카츠 정식"],
      pros: ["리필 제공"],
      cons: ["식사 시간 대기"]
    },
    "kyoto wakuden isetan": {
      rating: null,
      ratingSource: "Google",
      summary: "정통 일식을 조용한 분위기에서 즐길 수 있는 식당입니다.",
      building: "JR 교토 이세탄",
      floor: "11층",
      features: ["정통 일식"],
      pros: ["조용한 분위기"],
      cons: ["가격대 높음"]
    },
    "kyoto porta": {
      rating: null,
      ratingSource: "Google",
      summary: "교토역 지하상가로 다양한 식당과 쇼핑을 한 번에 즐길 수 있습니다.",
      building: "교토 포르타",
      floor: "B1~B2층",
      features: ["지하 상가", "다양한 식당"],
      pros: ["날씨 영향 적음"],
      cons: ["사람 많음"]
    },
    "inoda coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      summary: "교토 클래식 카페로 진한 커피와 분위기가 매력입니다.",
      features: ["클래식 카페"],
      pros: ["분위기 좋음"],
      cons: ["대기 가능"]
    }
  }
};
