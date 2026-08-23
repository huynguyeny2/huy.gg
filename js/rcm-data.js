/* eslint-disable no-undef */
/* rcm-data.js - every figure recomputed from the raw ledger over one window.
   Source: 1 - FinSum (Raw Ledger 50).xlsx, enhanced variation v2 generator.
   Window: DOS 2025-04-01 to 2026-03-31. All counts and dollars scaled 5x.
   The ledger holds a 13th month, Mar 2025, deliberately excluded: the totals and the
   monthly series have to cover the same period or the tiles disagree with the charts.
   Denial views exclude CARC 45/59/253, which are contractual rather than workable.
*/

window.RCM_DATA = {
  "facilities": [
    "Clinic A",
    "Clinic B",
    "Hospital OP",
    "ASC 1",
    "Telehealth"
  ],
  "payers": [
    "Aetna",
    "Anthem/BCBS",
    "Cigna",
    "Medicaid",
    "Medicare",
    "Sedgwick",
    "UHC",
    "Self-Pay"
  ],
  "serviceLines": [
    "Behavioral",
    "Integrated",
    "Medical"
  ],
  "encounterTypes": [
    "Follow-up Medical",
    "New Medical",
    "Injection",
    "Labs",
    "Follow-up Behavioral",
    "Integrated Visit",
    "New Behavioral",
    "Diagnostic",
    "Ancillary"
  ],
  "months": [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar"
  ],
  "monthLabels": [
    "2025-04",
    "2025-05",
    "2025-06",
    "2025-07",
    "2025-08",
    "2025-09",
    "2025-10",
    "2025-11",
    "2025-12",
    "2026-01",
    "2026-02",
    "2026-03"
  ],
  "facMonthly": {
    "Clinic A": [
      985,
      985,
      1230,
      995,
      1160,
      1075,
      1205,
      1095,
      1185,
      1170,
      1020,
      1120
    ],
    "Clinic B": [
      1170,
      1075,
      995,
      1070,
      1150,
      1075,
      1005,
      1005,
      1020,
      1045,
      1005,
      1085
    ],
    "Hospital OP": [
      955,
      1165,
      1055,
      1200,
      1050,
      1185,
      1200,
      1100,
      1110,
      1090,
      1000,
      1000
    ],
    "ASC 1": [
      1270,
      1290,
      1215,
      1075,
      1100,
      1155,
      1135,
      1175,
      1210,
      1185,
      1005,
      950
    ],
    "Telehealth": [
      1055,
      1005,
      1095,
      1050,
      1045,
      1145,
      1110,
      955,
      1130,
      1190,
      1070,
      1165
    ]
  },
  "facVisits": {
    "Clinic A": 13225,
    "Clinic B": 12700,
    "Hospital OP": 13110,
    "ASC 1": 13765,
    "Telehealth": 13015
  },
  "claimsPerFac": {
    "Clinic A": 13225,
    "Clinic B": 12700,
    "Hospital OP": 13110,
    "ASC 1": 13765,
    "Telehealth": 13015
  },
  "totalClaims": 65815,
  "facSvcMix": {
    "Clinic A": {
      "Behavioral": 0.19380768085739802,
      "Integrated": 0.07204525156296517,
      "Medical": 0.7341470675796368
    },
    "Clinic B": {
      "Behavioral": 0.19813309244203553,
      "Integrated": 0.0966576332429991,
      "Medical": 0.7052092743149654
    },
    "Hospital OP": {
      "Behavioral": 0.18500892325996432,
      "Integrated": 0.0883402736466389,
      "Medical": 0.7266508030933968
    },
    "ASC 1": {
      "Behavioral": 0.1874113977884888,
      "Integrated": 0.08052168982137795,
      "Medical": 0.7320669123901332
    },
    "Telehealth": {
      "Behavioral": 0.2,
      "Integrated": 0.09061102831594635,
      "Medical": 0.7093889716840537
    }
  },
  "writeOffByFacSvc": {
    "Clinic A": {
      "Behavioral": 9764,
      "Integrated": 2579,
      "Medical": 63052
    },
    "Clinic B": {
      "Behavioral": 10347,
      "Integrated": 3198,
      "Medical": 56303
    },
    "Hospital OP": {
      "Behavioral": 7209,
      "Integrated": 3147,
      "Medical": 59035
    },
    "ASC 1": {
      "Behavioral": 8592,
      "Integrated": 3749,
      "Medical": 63846
    },
    "Telehealth": {
      "Behavioral": 6917,
      "Integrated": 2349,
      "Medical": 56262
    }
  },
  "payerMix": {
    "Aetna": {
      "revenue": 2407469,
      "billed": 3776981,
      "lines": 21715,
      "claims": 9045,
      "denialRate": 0.2535
    },
    "Anthem/BCBS": {
      "revenue": 2250025,
      "billed": 3626282,
      "lines": 20660,
      "claims": 8530,
      "denialRate": 0.2594
    },
    "Cigna": {
      "revenue": 2186806,
      "billed": 3678309,
      "lines": 21370,
      "claims": 8820,
      "denialRate": 0.2567
    },
    "Medicaid": {
      "revenue": 1555244,
      "billed": 3622112,
      "lines": 21185,
      "claims": 8875,
      "denialRate": 0.265
    },
    "Medicare": {
      "revenue": 1779973,
      "billed": 3524573,
      "lines": 20315,
      "claims": 8420,
      "denialRate": 0.2587
    },
    "Sedgwick": {
      "revenue": 2312117,
      "billed": 3664133,
      "lines": 20730,
      "claims": 8765,
      "denialRate": 0.2634
    },
    "UHC": {
      "revenue": 2212223,
      "billed": 3618017,
      "lines": 20770,
      "claims": 8730,
      "denialRate": 0.2576
    },
    "Self-Pay": {
      "revenue": 908565,
      "billed": 1925901,
      "lines": 11005,
      "claims": 4630,
      "denialRate": 0.0
    }
  },
  "payerDenialsFiltered": [
    {
      "payer": "Medicaid",
      "denials": 5615,
      "lines": 21185,
      "rate": 0.265,
      "deniedBilled": 945198,
      "deniedWriteoff": 980
    },
    {
      "payer": "Sedgwick",
      "denials": 5460,
      "lines": 20730,
      "rate": 0.2634,
      "deniedBilled": 964116,
      "deniedWriteoff": 1517
    },
    {
      "payer": "Anthem/BCBS",
      "denials": 5360,
      "lines": 20660,
      "rate": 0.2594,
      "deniedBilled": 897238,
      "deniedWriteoff": 300
    },
    {
      "payer": "Medicare",
      "denials": 5255,
      "lines": 20315,
      "rate": 0.2587,
      "deniedBilled": 925241,
      "deniedWriteoff": 1384
    },
    {
      "payer": "UHC",
      "denials": 5350,
      "lines": 20770,
      "rate": 0.2576,
      "deniedBilled": 934032,
      "deniedWriteoff": 191
    },
    {
      "payer": "Cigna",
      "denials": 5485,
      "lines": 21370,
      "rate": 0.2567,
      "deniedBilled": 976032,
      "deniedWriteoff": 384
    },
    {
      "payer": "Aetna",
      "denials": 5505,
      "lines": 21715,
      "rate": 0.2535,
      "deniedBilled": 939384,
      "deniedWriteoff": 254
    },
    {
      "payer": "Self-Pay",
      "denials": 0,
      "lines": 11005,
      "rate": 0.0,
      "deniedBilled": 0,
      "deniedWriteoff": 0
    }
  ],
  "denials": {
    "overallRate": 0.4112,
    "issued": 146745,
    "affected": 27065,
    "claimsAnyCarc": 61185,
    "distByCPT": [
      {
        "k": "99213",
        "v": 0.2353,
        "cpt": "99213",
        "desc": "Office/outpatient visit, established patient, low/moderate MDM"
      },
      {
        "k": "99214",
        "v": 0.198,
        "cpt": "99214",
        "desc": "Office/outpatient visit, established patient, moderate/high MDM"
      },
      {
        "k": "99203",
        "v": 0.1143,
        "cpt": "99203",
        "desc": "Office/outpatient visit, new patient, low/moderate MDM"
      },
      {
        "k": "99204",
        "v": 0.0831,
        "cpt": "99204",
        "desc": "Office/outpatient visit, new patient, moderate/high MDM"
      },
      {
        "k": "Other",
        "v": 0.3693,
        "cpt": "Other",
        "desc": ""
      }
    ],
    "distByEncounter": [
      {
        "k": "Follow-up Medical",
        "v": 0.4333
      },
      {
        "k": "New Medical",
        "v": 0.1973
      },
      {
        "k": "Injection",
        "v": 0.0935
      },
      {
        "k": "Follow-up Behavioral",
        "v": 0.0763
      },
      {
        "k": "Other",
        "v": 0.1996
      }
    ]
  },
  "scenarioDist": [
    {
      "k": "clean",
      "lines": 104455,
      "share": 0.6621553090332805,
      "billed": 18191840
    },
    {
      "k": "self_pay",
      "lines": 11005,
      "share": 0.0697622820919176,
      "billed": 1925901
    },
    {
      "k": "missing_info",
      "lines": 6525,
      "share": 0.041362916006339144,
      "billed": 1080675
    },
    {
      "k": "medical_necessity",
      "lines": 4925,
      "share": 0.0312202852614897,
      "billed": 871491
    },
    {
      "k": "bundled",
      "lines": 4755,
      "share": 0.030142630744849446,
      "billed": 813521
    },
    {
      "k": "noncovered",
      "lines": 4570,
      "share": 0.028969889064976228,
      "billed": 761262
    },
    {
      "k": "benefit_maxed",
      "lines": 4140,
      "share": 0.02624405705229794,
      "billed": 710530
    },
    {
      "k": "no_auth",
      "lines": 3120,
      "share": 0.019778129952456418,
      "billed": 562552
    },
    {
      "k": "not_billed_out",
      "lines": 2745,
      "share": 0.01740095087163233,
      "billed": 460690
    },
    {
      "k": "timely_filing",
      "lines": 2740,
      "share": 0.017369255150554676,
      "billed": 489542
    },
    {
      "k": "duplicate",
      "lines": 2730,
      "share": 0.017305863708399365,
      "billed": 473626
    },
    {
      "k": "level_of_service",
      "lines": 1540,
      "share": 0.00976228209191759,
      "billed": 278430
    },
    {
      "k": "modifier_error",
      "lines": 1515,
      "share": 0.009603803486529318,
      "billed": 276636
    },
    {
      "k": "units_excess",
      "lines": 1505,
      "share": 0.00954041204437401,
      "billed": 269107
    },
    {
      "k": "experimental",
      "lines": 1480,
      "share": 0.009381933438985737,
      "billed": 270504
    }
  ],
  "carcTop": [
    {
      "code": "16",
      "desc": "Claim/service lacks information needed for adjudication. Remark Code required when appropriate.",
      "lines": 6525,
      "billed": 1080675
    },
    {
      "code": "50",
      "desc": "Non-covered: not deemed a medical necessity by payer.",
      "lines": 4925,
      "billed": 871491
    },
    {
      "code": "97",
      "desc": "Benefit included in payment/allowance for another service/procedure already adjudicated.",
      "lines": 4755,
      "billed": 813521
    },
    {
      "code": "96",
      "desc": "Non-covered charge(s).",
      "lines": 4570,
      "billed": 761262
    },
    {
      "code": "119",
      "desc": "Benefit maximum for this time period or occurrence has been reached.",
      "lines": 4140,
      "billed": 710530
    },
    {
      "code": "29",
      "desc": "Time limit for filing has expired.",
      "lines": 2740,
      "billed": 489542
    },
    {
      "code": "18",
      "desc": "Duplicate claim/service.",
      "lines": 2730,
      "billed": 473626
    },
    {
      "code": "197",
      "desc": "Payment denied/reduced for absence of precertification/authorization.",
      "lines": 2235,
      "billed": 406383
    },
    {
      "code": "150",
      "desc": "Info submitted does not support this level of service.",
      "lines": 1540,
      "billed": 278430
    },
    {
      "code": "151",
      "desc": "Payer deems the info submitted does not support this many services.",
      "lines": 1505,
      "billed": 269107
    }
  ],
  "cptTop": [
    {
      "cpt": "99213",
      "desc": "Office/outpatient visit, established patient, low/moderate MDM",
      "lines": 37870,
      "billed": 7524769,
      "payment": 4331831
    },
    {
      "cpt": "99214",
      "desc": "Office/outpatient visit, established patient, moderate/high MDM",
      "lines": 30410,
      "billed": 2866142,
      "payment": 1626275
    },
    {
      "cpt": "99203",
      "desc": "Office/outpatient visit, new patient, low/moderate MDM",
      "lines": 17955,
      "billed": 2455346,
      "payment": 1404677
    },
    {
      "cpt": "99204",
      "desc": "Office/outpatient visit, new patient, moderate/high MDM",
      "lines": 12525,
      "billed": 1602574,
      "payment": 909078
    },
    {
      "cpt": "90834",
      "desc": "Psychotherapy, 45 minutes with patient",
      "lines": 11920,
      "billed": 2812047,
      "payment": 1619402
    },
    {
      "cpt": "96372",
      "desc": "Therapeutic/prophylactic/diagnostic injection; SC/IM",
      "lines": 7795,
      "billed": 651506,
      "payment": 301252
    },
    {
      "cpt": "G2211",
      "desc": "Visit complexity add-on (primary care / longitudinal care)",
      "lines": 7630,
      "billed": 721111,
      "payment": 399342
    },
    {
      "cpt": "90791",
      "desc": "Psychiatric diagnostic evaluation",
      "lines": 6115,
      "billed": 1144545,
      "payment": 663275
    },
    {
      "cpt": "80053",
      "desc": "Comprehensive metabolic panel",
      "lines": 4625,
      "billed": 755818,
      "payment": 442219
    },
    {
      "cpt": "83036",
      "desc": "Hemoglobin A1c",
      "lines": 4620,
      "billed": 231970,
      "payment": 133432
    },
    {
      "cpt": "85025",
      "desc": "Complete blood count (CBC) with automated differential",
      "lines": 3280,
      "billed": 659706,
      "payment": 379130
    },
    {
      "cpt": "93000",
      "desc": "Electrocardiogram, routine ECG with interpretation and report",
      "lines": 2815,
      "billed": 489472,
      "payment": 276010
    }
  ],
  "encounterMix": [
    {
      "k": "Follow-up Medical",
      "lines": 68280,
      "billed": 10390911,
      "share": 0.4328367670364501
    },
    {
      "k": "New Medical",
      "lines": 30480,
      "billed": 4057920,
      "share": 0.19321711568938194
    },
    {
      "k": "Injection",
      "lines": 15070,
      "billed": 5918144,
      "share": 0.09553090332805071
    },
    {
      "k": "Labs",
      "lines": 12525,
      "billed": 1647494,
      "share": 0.07939778129952456
    },
    {
      "k": "Follow-up Behavioral",
      "lines": 11920,
      "billed": 2812047,
      "share": 0.07556259904912836
    },
    {
      "k": "Integrated Visit",
      "lines": 7630,
      "billed": 721111,
      "share": 0.04836767036450079
    },
    {
      "k": "New Behavioral",
      "lines": 6115,
      "billed": 1144545,
      "share": 0.038763866877971474
    },
    {
      "k": "Diagnostic",
      "lines": 4165,
      "billed": 649906,
      "share": 0.026402535657686212
    },
    {
      "k": "Ancillary",
      "lines": 1565,
      "billed": 94229,
      "share": 0.009920760697305863
    }
  ],
  "providerTier": [
    {
      "credential": "DO",
      "lines": 32580,
      "denials": 30310,
      "denialRate": 0.9303253529772867,
      "billed": 5594389,
      "payment": 3170456
    },
    {
      "credential": "PA",
      "lines": 31600,
      "denials": 29405,
      "denialRate": 0.9305379746835443,
      "billed": 5509753,
      "payment": 3140498
    },
    {
      "credential": "MD",
      "lines": 31320,
      "denials": 29155,
      "denialRate": 0.9308748403575989,
      "billed": 5468477,
      "payment": 3116989
    },
    {
      "credential": "DPT",
      "lines": 31290,
      "denials": 29050,
      "denialRate": 0.9284116331096197,
      "billed": 5554039,
      "payment": 3160851
    },
    {
      "credential": "NP",
      "lines": 30960,
      "denials": 28825,
      "denialRate": 0.9310400516795866,
      "billed": 5309649,
      "payment": 3023628
    }
  ],
  "arAging": [
    {
      "bucket": "0-30",
      "amount": 8833
    },
    {
      "bucket": "31-60",
      "amount": 63349
    },
    {
      "bucket": "61-90",
      "amount": 52367
    },
    {
      "bucket": "91-120",
      "amount": 65055
    },
    {
      "bucket": "120+",
      "amount": 549489
    }
  ],
  "incomeMonthly": [
    1293921,
    1278907,
    1253940,
    1378662,
    1303957,
    1321626,
    1331426,
    1324554,
    1397692,
    1284737,
    1189084,
    1253916
  ],
  "billedMonthly": [
    2264622,
    2204009,
    2215875,
    2398658,
    2298763,
    2309369,
    2337196,
    2353334,
    2472099,
    2289271,
    2060322,
    2232792
  ],
  "writeOffMonthly": [
    30411,
    27307,
    26620,
    19807,
    29413,
    31301,
    32393,
    34279,
    29260,
    32266,
    30346,
    32946
  ],
  "svcLineTotals": {
    "Behavioral": {
      "billed": 3956592,
      "payment": 2282677,
      "lines": 18035,
      "claims": 16315
    },
    "Integrated": {
      "billed": 721111,
      "payment": 399342,
      "lines": 7630,
      "claims": 7240
    },
    "Medical": {
      "billed": 22758605,
      "payment": 12930404,
      "lines": 132085,
      "claims": 61065
    }
  },
  "svcLineAvgPerLine": {
    "Behavioral": {
      "billed": 219.38,
      "payment": 126.57
    },
    "Integrated": {
      "billed": 94.51,
      "payment": 52.34
    },
    "Medical": {
      "billed": 172.3,
      "payment": 97.89
    }
  },
  "kpis": {
    "visits": 65815,
    "income": 15612422,
    "billed": 27436308,
    "writeOff": 356350,
    "openAR": 739093,
    "openARpct": 0.3334,
    "openClaims": 21940,
    "denialRate": 0.2411,
    "filteredDenialRate": 0.2411,
    "filteredDenials": 38030,
    "ncr": 0.7621,
    "gcr": 0.569,
    "collectionRate": 0.7621,
    "allowable": 20486786,
    "contractualAdj": 9116146,
    "charges": 157750,
    "rows": 157750,
    "scaleFactor": 5,
    "scaledLabel": "157,750",
    "avgArDays": 0
  },
  "meta": {
    "source": "1 - FinSum (Raw Ledger 50).xlsx",
    "generator": "0 - Data Creation - FinSum (Raw Ledger - Main Code) - Enhanced Variation v2.ipynb",
    "dosRange": "2025-04-01 to 2026-03-31",
    "monthsCovered": 12,
    "scaleFactor": 5,
    "facilities": 5,
    "payers": 8,
    "excludedCarcCodes": [
      "253",
      "45",
      "59"
    ],
    "excludedCarcReason": "Contractual adjustments (45 above contracted fee, 59 multiple-procedure reduction, 253 sequestration). These post automatically off the fee schedule and are not workable denials.",
    "note": "Every figure recomputed from the raw ledger over one 12-month window, Apr 2025 through Mar 2026, and scaled 5x. The ledger itself carries a 13th month, Mar 2025, which is excluded here so the monthly series and the totals cover the same period."
  }
};
window.RCM_CONST = {
  FACILITIES: ["Clinic A", "Clinic B", "Hospital OP", "ASC 1", "Telehealth"],
  PAYERS: ["Aetna", "Anthem/BCBS", "Cigna", "Medicaid", "Medicare", "Sedgwick", "UHC", "Self-Pay"],
  SERVICE_LINES: ["Behavioral", "Integrated", "Medical"],
  MONTHS: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
};
