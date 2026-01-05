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
      name: "ICOCA / Suica",
      detail: "현금 충전만 가능, 1인 2,000엔 발급권장",
      tags: ["교통", "현금"]
    },
    {
      name: "하루카 특급",
      detail: "QR 발권 후 무인 발권기에서 실물 수령",
      tags: ["공항↔교토"]
    },
    {
      name: "교토 버스·지하철 1일권",
      detail: "2일차 이동 집중용 (1,100엔)",
      tags: ["교통", "2일차"]
    }
  ],
  routeSettings: {
    mode: "hybrid",
    onlineProvider: "osrm",
    onlineProfile: "driving"
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
      label: "DAY 1",
      date: "2026-01-20",
      title: "간사이 공항 → 교토",
      description: "공항 행정 이후 3가지 버전 중 선택",
      baseBlocks: [
        {
          id: "d1-admin",
          start: "13:05",
          end: "14:40",
          title: "입국 수속 + 금융/교통 행정",
          details: [
            "T2 도착 → T1 무료 셔틀 이동",
            "세븐은행/이온은행/우체국 ATM",
            "ICOCA 발급(보증금 500엔) + 현금 충전",
            "하루카 QR 발권 및 실물 티켓 수령"
          ],
          location: {
            name: "간사이 공항 T1",
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
                  details: ["예상 대기 10~20분", "줄 길면 포장 선택"],
                  location: {
                    name: "KIX T1 식당가",
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
                      mode: "single",
                      note: "원하는 곳 1곳 선택",
                      options: [
                        {
                          id: "551",
                          label: "551 Horai",
                          note: "부타만 2개 580엔 · 새우슈마이 960엔",
                          mapQuery: "551 Horai Kansai Airport",
                          cost: { "min": 580, "max": 960, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "kineya",
                          label: "Kineya Mugimaru",
                          note: "자가제면 우동 600~900엔 · 미니 장어덮밥 세트 1,200~1,500엔",
                          mapQuery: "Kineya Mugimaru Kansai Airport",
                          cost: { "min": 600, "max": 1500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "ganko",
                          label: "Ganko Sushi",
                          note: "초밥 정식 2,500~3,500엔",
                          mapQuery: "Ganko Sushi Kansai Airport",
                          cost: { "min": 2500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakasu",
                          label: "Nakasu",
                          note: "규동 약 600엔",
                          mapQuery: "Nakasu Kansai Airport",
                          cost: { "min": 600, "max": 600, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "ootoya",
                          label: "Ootoya",
                          note: "가정식 정식 1,200~1,500엔",
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
                  details: [
                    "공항역 → 린쿠타운역 5분",
                    "아식스 팩토리 아울렛 30~50% 할인",
                    "브룩클린 로스팅 컴퍼니 라떼 650엔"
                  ],
                  location: {
                    name: "Rinku Premium Outlets",
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
                  details: ["공항 복귀 후 하루카 탑승", "지정석 추천"],
                  location: {
                    name: "Haruka Express",
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
                  details: ["호텔 비시오 교토 체크인", "남측 출구 도보 2분"],
                  location: {
                    name: "Hotel Vischio Kyoto by GRANVIA",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["저녁", "야경"],
                  choices: [
                    {
                      id: "d1-dinner",
                      title: "저녁 식사 선택",
                      mode: "single",
                      note: "카드 가능 / 5인 예약 권장",
                      options: [
                        {
                          id: "moritaya",
                          label: "Moritaya (이세탄)",
                          note: "스키야키 정식 8,800~13,000엔",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro",
                          label: "Yakiniku Hiro",
                          note: "7종 모둠 5,980엔",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 5980, "max": 5980, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura",
                          label: "Katsukura Porta",
                          note: "돈카츠 세트 2,500엔",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau",
                          label: "Nakau Kyoto Station",
                          note: "오야코동 490엔 (24시간)",
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
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway",
                          label: "스카이웨이 야경",
                          note: "10층 무료 전망",
                          mapQuery: "Kyoto Station Skyway"
                        },
                        {
                          id: "grand-stairway",
                          label: "대계단 LED 쇼",
                          note: "교토역 4~11층",
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
                  details: ["T1 2층 로손", "타마고 산도 250엔 + 가라아게군 240엔"],
                  location: {
                    name: "Lawson KIX",
                    mapQuery: "Lawson Kansai Airport Terminal 1"
                  },
                  tags: ["간식"],
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
                  details: ["예상 대기 20~30분", "린쿠 프리미엄 아울렛 내"],
                  location: {
                    name: "Rinku Premium Outlets",
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
                      mode: "single",
                      options: [
                        {
                          id: "mametora",
                          label: "Mametora",
                          note: "우나쥬 상 4,800엔",
                          mapQuery: "Mametora Rinku Premium Outlets",
                          cost: { "min": 4800, "max": 4800, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "komeraku",
                          label: "Komeraku",
                          note: "해산물 덮밥 1,500~1,900엔",
                          mapQuery: "Komeraku Rinku",
                          cost: { "min": 1500, "max": 1900, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "kurasushi",
                          label: "Kura Sushi",
                          note: "회전초밥 125엔~",
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
                  details: ["린쿠 아울렛 아식스 팩토리"],
                  location: {
                    name: "ASICS Factory Outlet Rinku",
                    mapQuery: "ASICS Factory Outlet Rinku"
                  },
                  tags: ["쇼핑"]
                },
                {
                  id: "d1-haruka-b",
                  start: "17:45",
                  end: "19:34",
                  title: "공항 복귀 + 하루카",
                  details: ["18:14 전후 특급 탑승", "지정석 추천"],
                  location: {
                    name: "Haruka Express",
                    mapQuery: "JR Haruka Kansai Airport Station"
                  },
                  tags: ["이동"]
                },
                {
                  id: "d1-kyoto-night-b",
                  start: "19:30",
                  end: "21:30",
                  title: "교토역 도착 + 저녁/야경",
                  details: ["호텔 비시오 교토 체크인", "남측 출구 도보 2분"],
                  location: {
                    name: "Hotel Vischio Kyoto by GRANVIA",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["저녁", "야경"],
                  choices: [
                    {
                      id: "d1-dinner-b",
                      title: "저녁 식사 선택",
                      mode: "single",
                      options: [
                        {
                          id: "moritaya-b",
                          label: "Moritaya (이세탄)",
                          note: "스키야키 정식 8,800~13,000엔",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro-b",
                          label: "Yakiniku Hiro",
                          note: "7종 모둠 5,980엔",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 5980, "max": 5980, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura-b",
                          label: "Katsukura Porta",
                          note: "돈카츠 세트 2,500엔",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau-b",
                          label: "Nakau Kyoto Station",
                          note: "오야코동 490엔 (24시간)",
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
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway-b",
                          label: "스카이웨이 야경",
                          note: "10층 무료 전망",
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
                  details: ["린쿠를 생략하고 공항에서 여유 있게 식사"],
                  location: {
                    name: "KIX T1 식당가",
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
                      mode: "single",
                      options: [
                        {
                          id: "551-c",
                          label: "551 Horai",
                          note: "부타만 2개 580엔",
                          mapQuery: "551 Horai Kansai Airport",
                          cost: { "min": 580, "max": 960, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "kineya-c",
                          label: "Kineya Mugimaru",
                          note: "우동 600~900엔",
                          mapQuery: "Kineya Mugimaru Kansai Airport",
                          cost: { "min": 600, "max": 900, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "both" }
                        },
                        {
                          id: "ganko-c",
                          label: "Ganko Sushi",
                          note: "초밥 정식 2,500~3,500엔",
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
                  details: ["지정석 추천", "교토역 도착"],
                  location: {
                    name: "Haruka Express",
                    mapQuery: "JR Haruka Kansai Airport Station"
                  },
                  tags: ["이동"]
                },
                {
                  id: "d1-checkin-c",
                  start: "17:04",
                  end: "17:20",
                  title: "호텔 체크인",
                  details: ["교토역 하치조 출구 도보 2분"],
                  location: {
                    name: "Hotel Vischio Kyoto by GRANVIA",
                    mapQuery: "Hotel Vischio Kyoto by GRANVIA"
                  },
                  tags: ["체크인"]
                },
                {
                  id: "d1-kyoto-walk-c",
                  start: "17:30",
                  end: "19:00",
                  title: "교토역 주변 산책",
                  details: ["도보권 문화/쇼핑 스팟"],
                  location: {
                    name: "Kyoto Station",
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
                          mapQuery: "To-ji Temple",
                          cost: { "min": 500, "max": 500, "unit": "per_person", "currency": "JPY", "category": "ticket", "payment": "cash" }
                        },
                        {
                          id: "higashi",
                          label: "히가시 혼간지",
                          note: "세계 최대 목조 건축물 (무료)",
                          mapQuery: "Higashi Honganji Temple"
                        },
                        {
                          id: "tower-sando",
                          label: "교토 타워 산도",
                          note: "기념품/로컬 맥주",
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
                  details: ["린쿠 생략 여유분을 미식에 투자"],
                  location: {
                    name: "Kyoto Station Dining",
                    mapQuery: "Kyoto Station"
                  },
                  tags: ["저녁"],
                  choices: [
                    {
                      id: "d1-dinner-c-group",
                      title: "저녁 식사 선택",
                      mode: "single",
                      options: [
                        {
                          id: "moritaya-c",
                          label: "Moritaya (이세탄)",
                          note: "스키야키 정식 8,800~13,000엔",
                          mapQuery: "Moritaya JR Kyoto Isetan",
                          cost: { "min": 8800, "max": 13000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "hiro-c",
                          label: "Yakiniku Hiro",
                          note: "와규 7종 6,000엔",
                          mapQuery: "Yakiniku Hiro Kyoto Station",
                          cost: { "min": 6000, "max": 6000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "unagi-sora",
                          label: "Unagi Sora",
                          note: "히츠마부시 4,500엔",
                          mapQuery: "Unagi Sora Kyoto",
                          cost: { "min": 4500, "max": 4500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "katsukura-c",
                          label: "Katsukura Porta",
                          note: "히레카츠 세트 2,500엔",
                          mapQuery: "Katsukura Kyoto Porta",
                          cost: { "min": 2500, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "nakau-c",
                          label: "Nakau Kyoto Station",
                          note: "오야코동 490엔",
                          mapQuery: "Nakau Kyoto Station",
                          cost: { "min": 490, "max": 490, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "izumo",
                          label: "Izumo Kyoto",
                          note: "계란말이 장어덮밥 3,000엔",
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
                  details: ["교토역 실내 야경 코스"],
                  location: {
                    name: "Kyoto Station",
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
                          mapQuery: "JR Kyoto Isetan",
                          cost: { "min": 800, "max": 2000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "skyway-c",
                          label: "스카이웨이",
                          note: "10층 무료 전망",
                          mapQuery: "Kyoto Station Skyway"
                        },
                        {
                          id: "grand-stairway-c",
                          label: "대계단 LED 쇼",
                          note: "교토역 4~11층",
                          mapQuery: "Kyoto Station Grand Stairway"
                        },
                        {
                          id: "tokichi",
                          label: "나카무라 토키치",
                          note: "말차 젤리 990엔",
                          mapQuery: "Nakamura Tokichi Kyoto Station",
                          cost: { "min": 990, "max": 990, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                        },
                        {
                          id: "sizuya",
                          label: "시즈야 팥빵",
                          note: "오구라 안팡 250엔",
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
      label: "DAY 2",
      date: "2026-01-21",
      title: "전통 마켓 · 유적 · 쇼핑",
      description: "코보산 장날 + 핵심 스팟 집중",
      baseBlocks: [
        {
          id: "d2-breakfast",
          start: "07:30",
          end: "08:20",
          title: "호텔 조식",
          details: ["조식 확정", "출발 전 여유롭게 식사"],
          location: {
            name: "Hotel Vischio Kyoto by GRANVIA",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["조식", "숙소"]
        },
        {
          id: "d2-pass",
          start: "08:30",
          end: "09:20",
          title: "패스/현금 준비",
          details: ["교토 버스·지하철 1일권 구매", "현금 5,000엔 이상 준비"],
          location: {
            name: "Kyoto Station",
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
          details: ["매달 21일 벼룩시장", "말차 다완/다구 득템"],
          location: {
            name: "To-ji Temple",
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
          details: ["나이팅게일 복도", "니노마루 궁전 관람"],
          location: {
            name: "Nijo Castle",
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
          details: ["넓은 테이블석 위주", "브레이크 타임 없는 곳 우선"],
          location: {
            name: "Kawaramachi",
            mapQuery: "Kawaramachi Kyoto"
          },
          tags: ["식사"],
          choices: [
            {
              id: "d2-lunch-choice",
              title: "점심 식당 선택",
              mode: "single",
              options: [
                {
                  id: "kaneyo",
                  label: "Kyogoku Kaneyo",
                  note: "킨시동 3,500엔~",
                  mapQuery: "Kyogoku Kaneyo",
                  cost: { "min": 3500, "max": 3500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "owariya",
                  label: "Honke Owariya",
                  note: "전통 소바 노포",
                  mapQuery: "Honke Owariya",
                  cost: { "min": 1800, "max": 2500, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "omen",
                  label: "Omen Shijo",
                  note: "채소 우동 정식 1,800엔~",
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
          details: ["테라마치/가와라마치 도보권"],
          location: {
            name: "Teramachi Street",
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
                  label: "Ippodo Tea",
                  note: "말차/다구 전문점",
                  mapQuery: "Ippodo Tea Store Kyoto"
                },
                {
                  id: "marukyu",
                  label: "Marukyu Koyamaen",
                  note: "고급 말차",
                  mapQuery: "Marukyu Koyamaen Kyoto"
                },
                {
                  id: "asics",
                  label: "ASICS Kyoto Kawaramachi",
                  note: "최신 모델/사이즈",
                  mapQuery: "ASICS Store Kyoto"
                },
                {
                  id: "smart-coffee",
                  label: "Smart Coffee",
                  note: "프렌치 토스트",
                  mapQuery: "Smart Coffee Kyoto",
                  cost: { "min": 700, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
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
          details: ["일몰 직전 황금빛 촬영"],
          location: {
            name: "Kinkaku-ji",
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
          details: ["동양정 함박스테이크", "대기 30~40분 가능"],
          location: {
            name: "Touyoutei Kitayama",
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
          details: ["교토부립 식물원 온실 미디어 아트"],
          location: {
            name: "Kyoto Botanical Garden",
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
      label: "DAY 3",
      date: "2026-01-22",
      title: "평지 산책 + 공항 복귀",
      description: "교토역 거점 이동으로 체력 절약",
      baseBlocks: [
        {
          id: "d3-breakfast",
          start: "07:30",
          end: "08:20",
          title: "호텔 조식",
          details: ["조식 확정", "체크아웃 전 여유 식사"],
          location: {
            name: "Hotel Vischio Kyoto by GRANVIA",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["조식", "숙소"]
        },
        {
          id: "d3-luggage",
          start: "09:30",
          end: "10:00",
          title: "체크아웃 & 짐 보관",
          details: ["호텔 로비에 짐 보관", "하치조 출구 도보 2분"],
          location: {
            name: "Hotel Vischio Kyoto by GRANVIA",
            mapQuery: "Hotel Vischio Kyoto by GRANVIA"
          },
          tags: ["체크아웃"]
        },
        {
          id: "d3-sanjusangendo",
          start: "10:00",
          end: "11:30",
          title: "상십삼간당",
          details: ["버스 100/206/208 이용", "평지 동선"],
          location: {
            name: "Sanjusangendo",
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
          details: ["세계 최대 목조 건축물", "무료 관람"],
          location: {
            name: "Higashi Honganji Temple",
            mapQuery: "Higashi Honganji Temple"
          },
          tags: ["산책"]
        },
        {
          id: "d3-lunch",
          start: "13:00",
          end: "14:30",
          title: "교토역 미식 투어",
          details: ["이세탄 11F/포르타 식당가"],
          location: {
            name: "Kyoto Station",
            mapQuery: "Kyoto Station"
          },
          tags: ["식사"],
          choices: [
            {
              id: "d3-lunch-choice",
              title: "점심 식당 선택",
              mode: "single",
              options: [
                {
                  id: "wako",
                  label: "돈카츠 와코",
                  note: "밥/양배추 무한 리필",
                  mapQuery: "Wako Kyoto Isetan",
                  cost: { "min": 1800, "max": 2200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "wakuden",
                  label: "교토 와쿠덴",
                  note: "정통 일식",
                  mapQuery: "Kyoto Wakuden Isetan",
                  cost: { "min": 3000, "max": 4000, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "porta",
                  label: "Porta 식당가",
                  note: "라멘/덮밥/스시 다양",
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
          details: ["말차 디저트/기념품 쇼핑"],
          location: {
            name: "Kyoto Station",
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
                  label: "나카무라 토키치",
                  note: "말차 젤리 990엔",
                  mapQuery: "Nakamura Tokichi Kyoto Station",
                  cost: { "min": 990, "max": 990, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "inoda",
                  label: "이노다 커피",
                  note: "클래식 카페",
                  mapQuery: "Inoda Coffee Kyoto",
                  cost: { "min": 800, "max": 1200, "unit": "per_person", "currency": "JPY", "category": "meal", "payment": "card" }
                },
                {
                  id: "isetan-b1",
                  label: "이세탄 B1 식품관",
                  note: "마루브랑슈/선물 구매",
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
          details: ["하루카 43호 16:30 출발", "예비: 16:00 출발 41호"],
          location: {
            name: "Kyoto Station",
            mapQuery: "JR Haruka Kyoto Station"
          },
          tags: ["이동"]
        },
        {
          id: "d3-airport",
          start: "16:30",
          end: "17:54",
          title: "간사이 공항 이동",
          details: ["19:55 비행기 → 18:00 전후 공항 도착 목표"],
          location: {
            name: "Kansai International Airport",
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
      features: ["공항 내 식당/교통/ATM 집중", "T2↔T1 셔틀 연계"],
      pros: ["이동 최소화", "시설이 한 곳에 모여 있음"],
      cons: ["피크 시간 혼잡", "가격대가 높을 수 있음"],
      nearby: [
        {
          name: "KIX Observation Hall Sky View",
          mapQuery: "KIX Observation Hall Sky View",
          type: "전망",
          features: ["활주로 뷰", "무료 입장"],
          pros: ["비행기 관찰", "짧은 체류에 적합"],
          cons: ["날씨 영향"]
        },
        {
          name: "Aeroplaza",
          mapQuery: "Aeroplaza Kansai Airport",
          type: "편의시설",
          features: ["푸드코트/편의점", "대기용 시설"],
          pros: ["비행 전 대기 최적"],
          cons: ["혼잡 가능"]
        },
        {
          name: "Hotel Nikko Kansai Airport",
          mapQuery: "Hotel Nikko Kansai Airport",
          type: "숙소",
          features: ["공항 연결", "휴식 공간"],
          pros: ["이동 최소화"],
          cons: ["가격대 높음"]
        }
      ]
    },
    "kansai international airport": {
      rating: null,
      ratingSource: "Google",
      features: ["국제선 허브", "T1/T2 분리"],
      pros: ["교통 접근성 좋음"],
      cons: ["보안/이동 대기 시간"],
      nearby: []
    },
    "rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      features: ["대형 아울렛", "야외 쇼핑 동선"],
      pros: ["브랜드 다양", "할인율 높음"],
      cons: ["바람/추위 영향", "식사 대기 발생"],
      nearby: [
        {
          name: "Rinku Marble Beach",
          mapQuery: "Rinku Marble Beach",
          type: "산책",
          features: ["바다 산책로", "노을 명소"],
          pros: ["사진 포인트"],
          cons: ["날씨 영향"]
        },
        {
          name: "Rinku Pleasure Town Seacle",
          mapQuery: "Rinku Pleasure Town Seacle",
          type: "쇼핑",
          features: ["쇼핑/카페 복합몰"],
          pros: ["비교적 실내 동선"],
          cons: ["혼잡 가능"]
        }
      ]
    },
    "kyoto station": {
      rating: null,
      ratingSource: "Google",
      features: ["교통 허브", "백화점/식당 밀집"],
      pros: ["이동이 편리", "식사 선택지 다양"],
      cons: ["동선 복잡", "피크 시간 혼잡"],
      nearby: [
        {
          name: "Kyoto Tower",
          mapQuery: "Kyoto Tower",
          type: "전망",
          features: ["전망대", "야경"],
          pros: ["도보 접근 용이"],
          cons: ["대기 발생"]
        },
        {
          name: "Kyoto Ramen Street",
          mapQuery: "Kyoto Ramen Street",
          type: "식사",
          features: ["라멘 전문 존"],
          pros: ["취향 선택 폭 넓음"],
          cons: ["식사 시간 대기"]
        },
        {
          name: "Aeon Mall Kyoto",
          mapQuery: "Aeon Mall Kyoto",
          type: "쇼핑",
          features: ["대형 몰", "실내 동선"],
          pros: ["우천 시 대안"],
          cons: ["이동 필요"]
        },
        {
          name: "Kyoto Tower Sando",
          mapQuery: "Kyoto Tower Sando",
          type: "쇼핑",
          features: ["로컬 맥주/기념품"],
          pros: ["짧은 일정에 적합"],
          cons: ["혼잡 가능"]
        },
        {
          name: "Kyoto Station Skyway",
          mapQuery: "Kyoto Station Skyway",
          type: "야경",
          features: ["무료 전망", "실내 이동"],
          pros: ["밤 산책"],
          cons: ["혼잡 가능"]
        },
        {
          name: "Kyoto Station Grand Stairway",
          mapQuery: "Kyoto Station Grand Stairway",
          type: "이벤트",
          features: ["LED 쇼", "사진 포인트"],
          pros: ["무료 관람"],
          cons: ["피크 타임 혼잡"]
        }
      ]
    },
    "kyoto station skyway": {
      rating: null,
      ratingSource: "Google",
      features: ["무료 전망", "실내 동선"],
      pros: ["야경 감상"],
      cons: ["혼잡 가능"]
    },
    "kyoto station grand stairway": {
      rating: null,
      ratingSource: "Google",
      features: ["LED 쇼", "사진 포인트"],
      pros: ["무료 관람"],
      cons: ["혼잡 가능"]
    },
    "kyoto tower sando": {
      rating: null,
      ratingSource: "Google",
      features: ["기념품/로컬 맥주", "실내 공간"],
      pros: ["간단 쇼핑"],
      cons: ["혼잡 가능"]
    },
    "jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      features: ["백화점 식품관", "마감 세일"],
      pros: ["야식/선물 구매"],
      cons: ["저녁 혼잡"]
    },
    "hotel vischio kyoto by granvia": {
      rating: null,
      ratingSource: "Google",
      features: ["교토역 도보 2분", "조식 제공"],
      pros: ["짐 이동 편리", "아침 동선 안정적"],
      cons: ["체크인/조식 시간 혼잡 가능"]
    },
    "lawson kansai airport terminal 1": {
      rating: null,
      ratingSource: "Google",
      features: ["간단 요기", "빠른 회전"],
      pros: ["시간 절약"],
      cons: ["좌석 제한"]
    },
    "asics factory outlet rinku": {
      rating: null,
      ratingSource: "Google",
      features: ["아울렛 이월 모델"],
      pros: ["할인 폭 큼"],
      cons: ["사이즈 품절 가능"]
    },
    "kawaramachi kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["쇼핑/카페 밀집", "도보 이동 중심"],
      pros: ["하루 종일 동선 가능"],
      cons: ["혼잡", "대기 발생"],
      nearby: [
        {
          name: "Nishiki Market",
          mapQuery: "Nishiki Market",
          type: "시장",
          features: ["먹거리/기념품"],
          pros: ["현지 분위기"],
          cons: ["혼잡", "현금 필요"]
        },
        {
          name: "Pontocho Alley",
          mapQuery: "Pontocho Alley",
          type: "골목",
          features: ["저녁 산책", "식당가"],
          pros: ["분위기 좋음"],
          cons: ["저녁 혼잡"]
        },
        {
          name: "Shinkyogoku Shopping Street",
          mapQuery: "Shinkyogoku Shopping Street",
          type: "쇼핑",
          features: ["실내 상점가"],
          pros: ["날씨 영향 적음"],
          cons: ["인파 많음"]
        },
        {
          name: "Kamo River",
          mapQuery: "Kamo River Kyoto",
          type: "산책",
          features: ["강변 산책로"],
          pros: ["휴식에 좋음"],
          cons: ["날씨 영향"]
        }
      ]
    },
    "551 horai kansai airport": {
      rating: null,
      ratingSource: "Google",
      features: ["오사카 명물 만두", "테이크아웃 가능"],
      pros: ["빠른 회전", "가성비"],
      cons: ["줄이 긴 편"]
    },
    "kineya mugimaru kansai airport": {
      rating: null,
      ratingSource: "Google",
      features: ["자가제면 우동", "세트 구성 다양"],
      pros: ["메뉴 선택 폭 넓음"],
      cons: ["혼잡 시 대기"]
    },
    "ganko sushi kansai airport": {
      rating: null,
      ratingSource: "Google",
      features: ["정갈한 초밥 정식"],
      pros: ["좌석 식사 가능"],
      cons: ["가격대 높음"]
    },
    "nakasu kansai airport": {
      rating: null,
      ratingSource: "Google",
      features: ["규동 중심", "빠른 식사"],
      pros: ["가성비"],
      cons: ["좌석 한정"]
    },
    "ootoya kansai airport": {
      rating: null,
      ratingSource: "Google",
      features: ["가정식 정식", "속 편한 메뉴"],
      pros: ["다양한 정식"],
      cons: ["대기 가능"]
    },
    "mametora rinku premium outlets": {
      rating: null,
      ratingSource: "Google",
      features: ["장어덮밥 전문"],
      pros: ["시그니처 메뉴"],
      cons: ["가격대 높음", "대기 가능"]
    },
    "komeraku rinku": {
      rating: null,
      ratingSource: "Google",
      features: ["해산물 덮밥"],
      pros: ["가성비"],
      cons: ["점심 혼잡"]
    },
    "kura sushi rinku": {
      rating: null,
      ratingSource: "Google",
      features: ["회전초밥"],
      pros: ["가벼운 식사"],
      cons: ["대기 가능"]
    },
    "moritaya jr kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      features: ["스키야키", "이세탄 11층"],
      pros: ["야경 뷰"],
      cons: ["예약 권장"]
    },
    "yakiniku hiro kyoto station": {
      rating: null,
      ratingSource: "Google",
      features: ["와규 구이"],
      pros: ["가족 식사 최적"],
      cons: ["예약 필요 가능"]
    },
    "katsukura kyoto porta": {
      rating: null,
      ratingSource: "Google",
      features: ["프리미엄 돈카츠"],
      pros: ["정식 구성"],
      cons: ["대기 가능"]
    },
    "nakau kyoto station": {
      rating: null,
      ratingSource: "Google",
      features: ["24시간", "가성비"],
      pros: ["대기 적음"],
      cons: ["분위기 단순"]
    },
    "nakamura tokichi kyoto station": {
      rating: null,
      ratingSource: "Google",
      features: ["말차 디저트"],
      pros: ["디저트 만족도 높음"],
      cons: ["대기 가능"]
    },
    "sizuya kyoto station": {
      rating: null,
      ratingSource: "Google",
      features: ["교토 팥빵"],
      pros: ["가성비 간식"],
      cons: ["빵 품절 가능"]
    },
    "to-ji temple": {
      rating: null,
      ratingSource: "Google",
      features: ["오층탑", "21일 코보산"],
      pros: ["시장 분위기"],
      cons: ["현금 필요"]
    },
    "higashi honganji temple": {
      rating: null,
      ratingSource: "Google",
      features: ["대형 목조 건축", "무료 관람"],
      pros: ["휴식에 좋음"],
      cons: ["추위 대비"]
    },
    "nijo castle": {
      rating: null,
      ratingSource: "Google",
      features: ["니노마루 궁전", "정원"],
      pros: ["역사적 가치"],
      cons: ["실내 이동 많음"]
    },
    "kinkaku-ji": {
      rating: null,
      ratingSource: "Google",
      features: ["황금 누각", "일몰 뷰"],
      pros: ["상징적 포인트"],
      cons: ["혼잡", "현금 입장"]
    },
    "kyoto botanical garden": {
      rating: null,
      ratingSource: "Google",
      features: ["실내 온실", "야간 전시"],
      pros: ["겨울 저녁 관람"],
      cons: ["티켓 비용"]
    },
    "sanjusangendo": {
      rating: null,
      ratingSource: "Google",
      features: ["1,001 관음상", "평지 동선"],
      pros: ["부모님 동선 편함"],
      cons: ["현금 입장"]
    },
    "grill capital touyoutei": {
      rating: null,
      ratingSource: "Google",
      features: ["함박스테이크", "노포"],
      pros: ["가족 식사 만족도"],
      cons: ["저녁 대기 가능"]
    },
    "ippodo tea store kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["말차/다구 전문"],
      pros: ["선물용 최적"],
      cons: ["가격대 있음"]
    },
    "marukyu koyamaen kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["고급 말차"],
      pros: ["브랜드 신뢰도"],
      cons: ["품절 가능"]
    },
    "asics store kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["신상/사이즈 다양"],
      pros: ["피팅 편리"],
      cons: ["할인 적음"]
    },
    "smart coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["노포 카페", "프렌치 토스트"],
      pros: ["분위기 좋음"],
      cons: ["대기 가능"]
    },
    "honke owariya": {
      rating: null,
      ratingSource: "Google",
      features: ["전통 소바"],
      pros: ["노포 경험"],
      cons: ["가격대 있음"]
    },
    "omen shijo": {
      rating: null,
      ratingSource: "Google",
      features: ["채소 우동"],
      pros: ["담백한 맛"],
      cons: ["대기 가능"]
    },
    "kyogoku kaneyo": {
      rating: null,
      ratingSource: "Google",
      features: ["킨시동"],
      pros: ["대표 메뉴"],
      cons: ["가격대 있음"]
    },
    "wako kyoto isetan": {
      rating: null,
      ratingSource: "Google",
      features: ["돈카츠 정식"],
      pros: ["리필 제공"],
      cons: ["식사 시간 대기"]
    },
    "kyoto wakuden isetan": {
      rating: null,
      ratingSource: "Google",
      features: ["정통 일식"],
      pros: ["조용한 분위기"],
      cons: ["가격대 높음"]
    },
    "kyoto porta": {
      rating: null,
      ratingSource: "Google",
      features: ["지하 상가", "다양한 식당"],
      pros: ["날씨 영향 적음"],
      cons: ["사람 많음"]
    },
    "inoda coffee kyoto": {
      rating: null,
      ratingSource: "Google",
      features: ["클래식 카페"],
      pros: ["분위기 좋음"],
      cons: ["대기 가능"]
    }
  }
};
