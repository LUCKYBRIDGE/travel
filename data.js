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
                    name: "Hotel Vischio Kyoto",
                    mapQuery: "Hotel Vischio Kyoto"
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
                    name: "Hotel Vischio Kyoto",
                    mapQuery: "Hotel Vischio Kyoto"
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
                    name: "Hotel Vischio Kyoto",
                    mapQuery: "Hotel Vischio Kyoto"
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
          id: "d3-luggage",
          start: "09:30",
          end: "10:00",
          title: "체크아웃 & 짐 보관",
          details: ["호텔 로비에 짐 보관", "하치조 출구 도보 2분"],
          location: {
            name: "Hotel Vischio Kyoto",
            mapQuery: "Hotel Vischio Kyoto"
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
  ]
};
