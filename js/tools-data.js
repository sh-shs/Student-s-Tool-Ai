/**
 * Central Student Tools Registry & Metadata
 * Contains all 205 student tools and utility definitions
 */
window.STUDENT_TOOLS = [
  {
    "id": "gpa-calculator",
    "name": "GPA Calculator",
    "description": "Calculate your term GPA effortlessly with course credits and letter grade conversions.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/gpa-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🎓",
    "keywords": [
      "gpa",
      "grade point average",
      "semester gpa",
      "grades",
      "credits",
      "academic"
    ]
  },
  {
    "id": "cgpa-calculator",
    "name": "CGPA Calculator",
    "description": "Track cumulative academic progress across multiple semesters seamlessly.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/cgpa-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "cgpa",
      "cumulative gpa",
      "overall gpa",
      "semesters",
      "academic progress"
    ]
  },
  {
    "id": "semester-gpa-calculator",
    "name": "Semester GPA Calculator",
    "description": "Calculate GPA for specific academic semesters with weighted credit systems.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/semester-gpa-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"/><path d=\"M9 12h6\"/><path d=\"M9 16h6\"/></svg>",
    "emoji": "📋",
    "keywords": [
      "semester",
      "term gpa",
      "course grades",
      "transcript",
      "credits"
    ]
  },
  {
    "id": "percentage-calculator",
    "name": "Percentage Calculator",
    "description": "Quickly compute test percentages, score markups, and grade ratios.",
    "categories": [
      "Academic",
      "Math"
    ],
    "url": "../tools/percentage-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"/><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"/></svg>",
    "emoji": "%",
    "keywords": [
      "percentage",
      "percent",
      "ratio",
      "fraction",
      "marks percentage",
      "math"
    ]
  },
  {
    "id": "grade-calculator",
    "name": "Grade Calculator",
    "description": "Determine your overall subject grade based on weighted assignments, quizzes, and exams.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/grade-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "grade",
      "weighted grade",
      "assessment",
      "exam score",
      "assignment grade"
    ]
  },
  {
    "id": "marks-calculator",
    "name": "Marks Calculator",
    "description": "Calculate total marks obtained, percentage, and corresponding letter grade.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/marks-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>",
    "emoji": "✏️",
    "keywords": [
      "marks",
      "exam marks",
      "out of",
      "score",
      "results",
      "academic"
    ]
  },
  {
    "id": "attendance-calculator",
    "name": "Attendance Calculator",
    "description": "Determine required classes to hit your target attendance percentage requirement.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/attendance-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/><path d=\"m9 16 2 2 4-4\"/></svg>",
    "emoji": "📅",
    "keywords": [
      "attendance",
      "bunk",
      "classes",
      "target attendance",
      "absence",
      "present"
    ]
  },
  {
    "id": "study-progress-calculator",
    "name": "Study Progress Calculator",
    "description": "Track syllabus completion percentage, pages read, and remaining daily study pace.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/study-progress-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"/><polyline points=\"17 6 23 6 23 12\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "study progress",
      "syllabus",
      "tracker",
      "pages",
      "chapters",
      "productivity"
    ]
  },
  {
    "id": "scientific-calculator",
    "name": "Scientific Calculator",
    "description": "Advanced mathematical operations, trigonometry, exponents, and logarithmic functions.",
    "categories": [
      "Math"
    ],
    "url": "../tools/scientific-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/><line x1=\"8\" y1=\"6\" x2=\"16\" y2=\"6\"/><line x1=\"16\" y1=\"14\" x2=\"16\" y2=\"18\"/><path d=\"M16 10h.01\"/><path d=\"M12 10h.01\"/><path d=\"M8 10h.01\"/><path d=\"M12 14h.01\"/><path d=\"M8 14h.01\"/><path d=\"M12 18h.01\"/><path d=\"M8 18h.01\"/></svg>",
    "emoji": "🧮",
    "keywords": [
      "scientific",
      "trigonometry",
      "sin",
      "cos",
      "tan",
      "log",
      "square root",
      "math"
    ]
  },
  {
    "id": "fraction-calculator",
    "name": "Fraction Calculator",
    "description": "Add, subtract, multiply, and divide fractions with step-by-step simplification.",
    "categories": [
      "Math"
    ],
    "url": "../tools/fraction-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"6\" r=\"2\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/><circle cx=\"12\" cy=\"18\" r=\"2\"/></svg>",
    "emoji": "➗",
    "keywords": [
      "fraction",
      "numerator",
      "denominator",
      "simplify fraction",
      "mixed fraction"
    ]
  },
  {
    "id": "average-calculator",
    "name": "Average Calculator",
    "description": "Compute mean, median, mode, and range for any set of numbers instantly.",
    "categories": [
      "Math"
    ],
    "url": "../tools/average-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "average",
      "mean",
      "median",
      "mode",
      "range",
      "statistics",
      "math"
    ]
  },
  {
    "id": "ratio-calculator",
    "name": "Ratio Calculator",
    "description": "Solve missing ratio proportions (A:B = C:D) and simplify numeric ratios.",
    "categories": [
      "Math"
    ],
    "url": "../tools/ratio-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18\"/><path d=\"m3 7 9-4 9 4\"/><path d=\"M3 7v3a5 5 0 0 0 10 0V7\"/><path d=\"M13 7v3a5 5 0 0 0 10 0V7\"/></svg>",
    "emoji": "⚖️",
    "keywords": [
      "ratio",
      "proportion",
      "simplify ratio",
      "aspect ratio",
      "math"
    ]
  },
  {
    "id": "equation-solver",
    "name": "Equation Solver",
    "description": "Solve linear (ax + b = 0) and quadratic (ax² + bx + c = 0) equations with roots.",
    "categories": [
      "Math"
    ],
    "url": "../tools/equation-solver/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg>",
    "emoji": "✖️",
    "keywords": [
      "equation",
      "algebra",
      "linear equation",
      "quadratic formula",
      "roots",
      "math"
    ]
  },
  {
    "id": "unit-converter",
    "name": "Unit Converter",
    "description": "Convert units for length, weight, temperature, area, volume, speed, and storage.",
    "categories": [
      "Math",
      "Other"
    ],
    "url": "../tools/unit-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\"/><path d=\"M16 16h5v5\"/></svg>",
    "emoji": "🔄",
    "keywords": [
      "unit converter",
      "length",
      "weight",
      "celsius",
      "fahrenheit",
      "meters",
      "kg",
      "pounds"
    ]
  },
  {
    "id": "simple-calculator",
    "name": "Simple Calculator",
    "description": "Perform basic arithmetic operations quickly with a clean, responsive key interface.",
    "categories": [
      "Math",
      "Other"
    ],
    "url": "../tools/simple-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/><line x1=\"8\" y1=\"6\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"/><line x1=\"8\" y1=\"16\" x2=\"16\" y2=\"16\"/><line x1=\"12\" y1=\"10\" x2=\"12\" y2=\"18\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "calculator",
      "simple math",
      "addition",
      "subtraction",
      "multiplication",
      "division"
    ]
  },
  {
    "id": "age-calculator",
    "name": "Age Calculator",
    "description": "Compute exact age in years, months, and days for official registration forms.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/age-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "🕐",
    "keywords": [
      "age",
      "dob",
      "date of birth",
      "years",
      "months",
      "days",
      "birthday"
    ]
  },
  {
    "id": "date-difference-calculator",
    "name": "Date Difference Calculator",
    "description": "Calculate total days, weeks, and months between any two selected dates.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/date-difference-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/></svg>",
    "emoji": "📆",
    "keywords": [
      "date difference",
      "days between",
      "calendar duration",
      "weeks difference"
    ]
  },
  {
    "id": "days-calculator",
    "name": "Days Calculator",
    "description": "Add or subtract a specific number of days to find target future or past dates.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/days-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z\"/><path d=\"M12 14v4M10 16h4\"/></svg>",
    "emoji": "🗓️",
    "keywords": [
      "add days",
      "subtract days",
      "future date",
      "past date",
      "deadline date"
    ]
  },
  {
    "id": "study-timer",
    "name": "Study Timer",
    "description": "Track study session durations with real-time stopwatch controls and lap split logs.",
    "categories": [
      "Time & Date",
      "Productivity"
    ],
    "url": "../tools/study-timer/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 9v4l2 2\"/><path d=\"M5 3L2 6\"/><path d=\"M22 6l-3-3\"/><path d=\"M12 2v2\"/></svg>",
    "emoji": "⏱️",
    "keywords": [
      "stopwatch",
      "timer",
      "study duration",
      "time tracker",
      "laps"
    ]
  },
  {
    "id": "pomodoro-timer",
    "name": "Pomodoro Timer",
    "description": "Boost focus using 25-minute study intervals and 5-minute restorative breaks.",
    "categories": [
      "Time & Date",
      "Productivity"
    ],
    "url": "../tools/pomodoro-timer/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 22h14\"/><path d=\"M5 2h14\"/><path d=\"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22\"/><path d=\"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\"/></svg>",
    "emoji": "⏳",
    "keywords": [
      "pomodoro",
      "focus timer",
      "break timer",
      "productivity",
      "study technique"
    ]
  },
  {
    "id": "countdown-timer",
    "name": "Countdown Timer",
    "description": "Set countdown alarms for exams, assignment submissions, and study goals.",
    "categories": [
      "Time & Date",
      "Productivity"
    ],
    "url": "../tools/countdown-timer/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"11 19 2 12 11 5 11 19\"/><polygon points=\"22 19 13 12 22 5 22 19\"/></svg>",
    "emoji": "⏲️",
    "keywords": [
      "countdown",
      "exam timer",
      "deadline timer",
      "alarm",
      "hours minutes seconds"
    ]
  },
  {
    "id": "word-counter",
    "name": "Word Counter",
    "description": "Count total words, sentences, paragraphs, and estimate reading time in real-time.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/word-counter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7V4h16v3\"/><path d=\"M9 20h6\"/><path d=\"M12 4v16\"/></svg>",
    "emoji": "📝",
    "keywords": [
      "word count",
      "essay length",
      "reading time",
      "text statistics",
      "paragraphs"
    ]
  },
  {
    "id": "character-counter",
    "name": "Character Counter",
    "description": "Analyze total character length including spaces for essay limits and posts.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/character-counter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"4 7 4 4 20 4 20 7\"/><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "character count",
      "length",
      "letters",
      "spaces included",
      "text"
    ]
  },
  {
    "id": "character-counter-no-spaces",
    "name": "Character Counter (Excluding Spaces)",
    "description": "Count exact characters and letters excluding spaces, tabs, and line breaks.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/character-counter-no-spaces/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6h16M4 12h10M4 18h16\"/></svg>",
    "emoji": "🔡",
    "keywords": [
      "characters no spaces",
      "without spaces",
      "net character count",
      "text stats"
    ]
  },
  {
    "id": "case-converter",
    "name": "Case Converter",
    "description": "Transform text to UPPERCASE, lowercase, Title Case, Sentence case, and CamelCase.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/case-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 15 4-8 4 8\"/><path d=\"M4 13h6\"/><circle cx=\"18\" cy=\"12\" r=\"3\"/><path d=\"M21 9v6\"/></svg>",
    "emoji": "🔠",
    "keywords": [
      "uppercase",
      "lowercase",
      "titlecase",
      "camelcase",
      "slugify",
      "case converter"
    ]
  },
  {
    "id": "text-cleaner",
    "name": "Text Cleaner",
    "description": "Remove duplicate spaces, line breaks, HTML tags, and extra symbols instantly.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/text-cleaner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z\"/></svg>",
    "emoji": "🧹",
    "keywords": [
      "clean text",
      "strip html",
      "remove extra spaces",
      "fix line breaks",
      "text formatting"
    ]
  },
  {
    "id": "text-formatter",
    "name": "Text Formatter",
    "description": "Sort lines alphabetically, trim margins, format lists, and add bullet points.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/text-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"/><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"/><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"/><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"/></svg>",
    "emoji": "📋",
    "keywords": [
      "sort lines",
      "bullet points",
      "indentation",
      "format text",
      "list formatter"
    ]
  },
  {
    "id": "image-resize",
    "name": "Image Resize",
    "description": "Resize image dimensions in pixels or percentages locally in your browser.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-resize/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"/><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"/></svg>",
    "emoji": "🔍",
    "keywords": [
      "resize image",
      "width height",
      "dimensions",
      "aspect ratio",
      "image editor"
    ]
  },
  {
    "id": "image-compress",
    "name": "Image Compress",
    "description": "Compress image file size while keeping visual quality high right in your browser.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-compress/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"4 14 10 14 10 20\"/><polyline points=\"20 10 14 10 14 4\"/><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"/><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"/></svg>",
    "emoji": "🗜️",
    "keywords": [
      "compress image",
      "reduce kb",
      "image size",
      "file compression",
      "jpeg compression"
    ]
  },
  {
    "id": "jpg-to-png",
    "name": "JPG to PNG",
    "description": "Convert JPG / JPEG images to high-quality transparent-capable PNG files.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/jpg-to-png/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🖼️",
    "keywords": [
      "jpg to png",
      "jpeg convert",
      "image conversion",
      "png download"
    ]
  },
  {
    "id": "png-to-jpg",
    "name": "PNG to JPG",
    "description": "Convert PNG images to compact JPG format with background color options.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/png-to-jpg/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🖼️",
    "keywords": [
      "png to jpg",
      "convert png",
      "jpg output",
      "image format"
    ]
  },
  {
    "id": "image-to-pdf",
    "name": "Image to PDF",
    "description": "Convert image files (JPG, PNG) into downloadable PDF documents locally.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-to-pdf/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><path d=\"M9 15h6\"/><path d=\"M12 12v6\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "image to pdf",
      "jpg to pdf",
      "convert pdf",
      "document creator",
      "browser pdf"
    ]
  },
  {
    "id": "qr-code-generator",
    "name": "QR Code Generator",
    "description": "Create custom downloadable QR codes for links, text notes, and contact details.",
    "categories": [
      "Image & File",
      "Security & Utility"
    ],
    "url": "../tools/qr-code-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"18\" y=\"18\" width=\"3\" height=\"3\"/></svg>",
    "emoji": "📱",
    "keywords": [
      "qr code",
      "barcode",
      "link generator",
      "scan code",
      "qr maker"
    ]
  },
  {
    "id": "password-generator",
    "name": "Password Generator",
    "description": "Generate secure, random passwords with custom lengths, symbols, and strength metrics.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/password-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🔐",
    "keywords": [
      "password generator",
      "strong password",
      "security",
      "random key"
    ]
  },
  {
    "id": "gpa-to-percentage-converter",
    "name": "GPA to Percentage Converter",
    "description": "Convert GPA on 4.0 or 10.0 scale directly into equivalent percentage marks.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/gpa-to-percentage-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🎓",
    "keywords": [
      "gpa",
      "percentage",
      "convert",
      "scale",
      "marks"
    ]
  },
  {
    "id": "percentage-to-gpa-converter",
    "name": "Percentage to GPA Converter",
    "description": "Convert your academic percentage into standard 4.0 or 10.0 scale GPA.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/percentage-to-gpa-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "percentage",
      "gpa",
      "convert",
      "grade point",
      "academic"
    ]
  },
  {
    "id": "cgpa-to-percentage-converter",
    "name": "CGPA to Percentage Converter",
    "description": "Convert overall Cumulative Grade Point Average (CGPA) into percentage.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/cgpa-to-percentage-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "cgpa",
      "percentage",
      "converter",
      "cumulative",
      "grades"
    ]
  },
  {
    "id": "required-marks-calculator",
    "name": "Required Marks Calculator",
    "description": "Calculate the minimum marks needed in upcoming exams to achieve your goal grade.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/required-marks-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🎯",
    "keywords": [
      "required marks",
      "target score",
      "exam grade",
      "minimum score"
    ]
  },
  {
    "id": "target-gpa-calculator",
    "name": "Target GPA Calculator",
    "description": "Find out what GPA you need in remaining terms to reach your desired overall GPA.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/target-gpa-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🏆",
    "keywords": [
      "target gpa",
      "future gpa",
      "goal grade",
      "academic target"
    ]
  },
  {
    "id": "target-cgpa-calculator",
    "name": "Target CGPA Calculator",
    "description": "Calculate required semester GPA to raise your CGPA to your target number.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/target-cgpa-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📌",
    "keywords": [
      "target cgpa",
      "cgpa goal",
      "improvement",
      "academic target"
    ]
  },
  {
    "id": "final-exam-marks-calculator",
    "name": "Final Exam Marks Calculator",
    "description": "Determine what score you must get on your final exam to secure a specific course grade.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/final-exam-marks-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📝",
    "keywords": [
      "final exam",
      "needed score",
      "course grade",
      "passing grade"
    ]
  },
  {
    "id": "grade-point-converter",
    "name": "Grade Point Converter",
    "description": "Convert letter grades to numerical grade points across different grading scales.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/grade-point-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "grade point",
      "letter grade",
      "conversion",
      "4.0 scale",
      "grade scale"
    ]
  },
  {
    "id": "marks-to-grade-converter",
    "name": "Marks to Grade Converter",
    "description": "Convert raw total marks or percentages into standard letter grades instantly.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/marks-to-grade-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🅰️",
    "keywords": [
      "marks to grade",
      "letter grade",
      "score grade",
      "conversion"
    ]
  },
  {
    "id": "semester-gpa-planner",
    "name": "Semester GPA Planner",
    "description": "Plan prospective course grades and predicted credits for upcoming semesters.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/semester-gpa-planner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🗓️",
    "keywords": [
      "semester planner",
      "gpa planning",
      "predicted gpa",
      "course list"
    ]
  },
  {
    "id": "cgpa-improvement-calculator",
    "name": "CGPA Improvement Calculator",
    "description": "Analyze how retaking courses or improving future terms boosts overall CGPA.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/cgpa-improvement-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🚀",
    "keywords": [
      "cgpa improvement",
      "retake course",
      "gpa boost",
      "grade recovery"
    ]
  },
  {
    "id": "credit-hours-calculator",
    "name": "Credit Hours Calculator",
    "description": "Calculate total attempted, completed, and remaining degree credit hours.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/credit-hours-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "⏱️",
    "keywords": [
      "credit hours",
      "degree completion",
      "units",
      "credits total"
    ]
  },
  {
    "id": "study-hours-calculator",
    "name": "Study Hours Calculator",
    "description": "Determine recommended weekly study hours based on course credit load.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/study-hours-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🕒",
    "keywords": [
      "study hours",
      "credit load",
      "time commitment",
      "study plan"
    ]
  },
  {
    "id": "study-time-planner",
    "name": "Study Time Planner",
    "description": "Allocate structured daily study blocks according to subject difficulty.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/study-time-planner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📅",
    "keywords": [
      "study time",
      "time blocking",
      "study schedule",
      "subject breakdown"
    ]
  },
  {
    "id": "exam-countdown-planner",
    "name": "Exam Countdown Planner",
    "description": "Plan study sessions and daily revision topics leading up to exam dates.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/exam-countdown-planner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "⏳",
    "keywords": [
      "exam countdown",
      "revision plan",
      "exam date",
      "test prep"
    ]
  },
  {
    "id": "assignment-grade-calculator",
    "name": "Assignment Grade Calculator",
    "description": "Calculate total weighted coursework and assignment marks.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/assignment-grade-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📋",
    "keywords": [
      "assignment grade",
      "coursework",
      "homework score",
      "weighted grade"
    ]
  },
  {
    "id": "weighted-grade-calculator",
    "name": "Weighted Grade Calculator",
    "description": "Compute overall course average with custom category percentages and weights.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/weighted-grade-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "⚖️",
    "keywords": [
      "weighted grade",
      "category weights",
      "final grade",
      "syllabus grade"
    ]
  },
  {
    "id": "course-grade-calculator",
    "name": "Course Grade Calculator",
    "description": "Track ongoing course components (quizzes, labs, midterms, finals) easily.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/course-grade-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📚",
    "keywords": [
      "course grade",
      "quizzes",
      "midterm",
      "final exam",
      "class grade"
    ]
  },
  {
    "id": "class-rank-calculator",
    "name": "Class Rank Calculator",
    "description": "Estimate class percentile and rank position from total GPA or total marks.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/class-rank-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🎖️",
    "keywords": [
      "class rank",
      "percentile",
      "standing",
      "class position"
    ]
  },
  {
    "id": "attendance-required-marks-calculator",
    "name": "Attendance Required Marks Calculator",
    "description": "Calculate exam marks needed when attendance policy affects overall grade.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/attendance-required-marks-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "💯",
    "keywords": [
      "attendance marks",
      "grade requirement",
      "policy",
      "class score"
    ]
  },
  {
    "id": "attendance-shortage-calculator",
    "name": "Attendance Shortage Calculator",
    "description": "Calculate exact number of classes you must attend to resolve attendance shortage.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/attendance-shortage-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "⚠️",
    "keywords": [
      "attendance shortage",
      "bunk calculator",
      "minimum attendance",
      "absences"
    ]
  },
  {
    "id": "exam-result-analyzer",
    "name": "Exam Result Analyzer",
    "description": "Analyze test performance, percentage distribution, and strengths across subjects.",
    "categories": [
      "Academic"
    ],
    "url": "../tools/exam-result-analyzer/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🔍",
    "keywords": [
      "result analyzer",
      "test performance",
      "subject breakdown",
      "grades"
    ]
  },
  {
    "id": "study-schedule-generator",
    "name": "Study Schedule Generator",
    "description": "Generate a personalized study timetable based on available daily study hours.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/study-schedule-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "🗓️",
    "keywords": [
      "schedule generator",
      "timetable",
      "study routine",
      "weekly schedule"
    ]
  },
  {
    "id": "daily-study-planner",
    "name": "Daily Study Planner",
    "description": "Organize daily study tasks, break times, and subject goals step-by-step.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/daily-study-planner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📝",
    "keywords": [
      "daily planner",
      "todo list",
      "study schedule",
      "focus tasks"
    ]
  },
  {
    "id": "weekly-study-planner",
    "name": "Weekly Study Planner",
    "description": "Structure weekly academic targets, assignment deadlines, and review sessions.",
    "categories": [
      "Academic",
      "Productivity"
    ],
    "url": "../tools/weekly-study-planner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 10v6M2 10l10-5 10 5-10 5z\"/><path d=\"M6 12v5c3 3 9 3 12 0v-5\"/></svg>",
    "emoji": "📅",
    "keywords": [
      "weekly planner",
      "study goals",
      "weekly overview",
      "deadlines"
    ]
  },
  {
    "id": "hcf-gcd-calculator",
    "name": "HCF / GCD Calculator",
    "description": "Find Highest Common Factor (HCF) / Greatest Common Divisor (GCD) for numbers.",
    "categories": [
      "Math"
    ],
    "url": "../tools/hcf-gcd-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🧮",
    "keywords": [
      "hcf",
      "gcd",
      "greatest common divisor",
      "factors",
      "math"
    ]
  },
  {
    "id": "lcm-calculator",
    "name": "LCM Calculator",
    "description": "Calculate Least Common Multiple (LCM) for multiple integers with steps.",
    "categories": [
      "Math"
    ],
    "url": "../tools/lcm-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "lcm",
      "least common multiple",
      "multiples",
      "math"
    ]
  },
  {
    "id": "prime-number-checker",
    "name": "Prime Number Checker",
    "description": "Determine whether a number is prime and list its nearest prime neighbors.",
    "categories": [
      "Math"
    ],
    "url": "../tools/prime-number-checker/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "prime number",
      "prime check",
      "is prime",
      "math"
    ]
  },
  {
    "id": "prime-factorization",
    "name": "Prime Factorization",
    "description": "Decompose any integer into its unique prime factor representation.",
    "categories": [
      "Math"
    ],
    "url": "../tools/prime-factorization/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🌳",
    "keywords": [
      "prime factor",
      "factor tree",
      "prime decomposition",
      "math"
    ]
  },
  {
    "id": "factors-calculator",
    "name": "Factors Calculator",
    "description": "List all positive factors and factor pairs of any given number.",
    "categories": [
      "Math"
    ],
    "url": "../tools/factors-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📋",
    "keywords": [
      "factors",
      "divisors",
      "factor pairs",
      "number factors"
    ]
  },
  {
    "id": "percentage-change-calculator",
    "name": "Percentage Change Calculator",
    "description": "Calculate percentage increase, decrease, or difference between two values.",
    "categories": [
      "Math"
    ],
    "url": "../tools/percentage-change-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "percentage change",
      "percent increase",
      "percent decrease",
      "difference"
    ]
  },
  {
    "id": "ratio-simplifier",
    "name": "Ratio Simplifier",
    "description": "Simplify ratios into lowest terms and compute equivalent simplified values.",
    "categories": [
      "Math"
    ],
    "url": "../tools/ratio-simplifier/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "⚖️",
    "keywords": [
      "ratio simplifier",
      "simplify ratio",
      "lowest terms",
      "proportion"
    ]
  },
  {
    "id": "power-calculator",
    "name": "Power Calculator",
    "description": "Calculate exponents, powers (x^y), and large exponential expressions.",
    "categories": [
      "Math"
    ],
    "url": "../tools/power-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "⚡",
    "keywords": [
      "power",
      "exponent",
      "base exponent",
      "superscript",
      "math"
    ]
  },
  {
    "id": "square-root-calculator",
    "name": "Square Root Calculator",
    "description": "Find exact or principal square roots and simplified radicals.",
    "categories": [
      "Math"
    ],
    "url": "../tools/square-root-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "√",
    "keywords": [
      "square root",
      "radical",
      "sqrt",
      "principal root"
    ]
  },
  {
    "id": "cube-root-calculator",
    "name": "Cube Root Calculator",
    "description": "Calculate cube roots (∛x) of positive and negative numbers instantly.",
    "categories": [
      "Math"
    ],
    "url": "../tools/cube-root-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "∛",
    "keywords": [
      "cube root",
      "cbrt",
      "cubed",
      "radicals"
    ]
  },
  {
    "id": "logarithm-calculator",
    "name": "Logarithm Calculator",
    "description": "Compute log base 10, natural log (ln), and log with custom bases.",
    "categories": [
      "Math"
    ],
    "url": "../tools/logarithm-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "logarithm",
      "log",
      "ln",
      "natural log",
      "log base"
    ]
  },
  {
    "id": "exponential-calculator",
    "name": "Exponential Calculator",
    "description": "Calculate e^x, exponential growth, decay, and scientific notation powers.",
    "categories": [
      "Math"
    ],
    "url": "../tools/exponential-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "exponential",
      "exp",
      "e power",
      "growth decay"
    ]
  },
  {
    "id": "permutation-calculator",
    "name": "Permutation Calculator",
    "description": "Compute nPr (permutations) with ordered arrangement formulas.",
    "categories": [
      "Math"
    ],
    "url": "../tools/permutation-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🔀",
    "keywords": [
      "permutation",
      "npr",
      "arrangements",
      "combinatorics"
    ]
  },
  {
    "id": "combination-calculator",
    "name": "Combination Calculator",
    "description": "Compute nCr (combinations) for selecting items without regarding order.",
    "categories": [
      "Math"
    ],
    "url": "../tools/combination-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "combination",
      "ncr",
      "selections",
      "combinatorics"
    ]
  },
  {
    "id": "probability-calculator",
    "name": "Probability Calculator",
    "description": "Compute single event, joint, conditional, and complement probabilities.",
    "categories": [
      "Math"
    ],
    "url": "../tools/probability-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🎲",
    "keywords": [
      "probability",
      "odds",
      "events",
      "chance",
      "stats"
    ]
  },
  {
    "id": "standard-deviation-calculator",
    "name": "Standard Deviation Calculator",
    "description": "Calculate sample and population standard deviation with step details.",
    "categories": [
      "Math"
    ],
    "url": "../tools/standard-deviation-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "standard deviation",
      "sigma",
      "spread",
      "statistics"
    ]
  },
  {
    "id": "variance-calculator",
    "name": "Variance Calculator",
    "description": "Compute sample and population variance for set of numbers.",
    "categories": [
      "Math"
    ],
    "url": "../tools/variance-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📉",
    "keywords": [
      "variance",
      "sample variance",
      "population variance",
      "stats"
    ]
  },
  {
    "id": "range-calculator",
    "name": "Range Calculator",
    "description": "Find minimum, maximum, and statistical range of data sets.",
    "categories": [
      "Math"
    ],
    "url": "../tools/range-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📏",
    "keywords": [
      "range",
      "min max",
      "data range",
      "statistics"
    ]
  },
  {
    "id": "median-calculator",
    "name": "Median Calculator",
    "description": "Calculate middle value of ordered data sets for odd and even counts.",
    "categories": [
      "Math"
    ],
    "url": "../tools/median-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "median",
      "middle value",
      "percentile",
      "statistics"
    ]
  },
  {
    "id": "mode-calculator",
    "name": "Mode Calculator",
    "description": "Identify most frequent numbers, unimodal, bimodal, or multimodal sets.",
    "categories": [
      "Math"
    ],
    "url": "../tools/mode-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "mode",
      "frequent number",
      "distribution",
      "statistics"
    ]
  },
  {
    "id": "mean-calculator",
    "name": "Mean Calculator",
    "description": "Calculate arithmetic mean, geometric mean, and harmonic mean.",
    "categories": [
      "Math"
    ],
    "url": "../tools/mean-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "mean",
      "average",
      "arithmetic mean",
      "statistics"
    ]
  },
  {
    "id": "matrix-calculator",
    "name": "Matrix Calculator",
    "description": "Perform 2x2 and 3x3 matrix addition, subtraction, and multiplication.",
    "categories": [
      "Math"
    ],
    "url": "../tools/matrix-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "matrix",
      "matrix multiplication",
      "matrix add",
      "linear algebra"
    ]
  },
  {
    "id": "determinant-calculator",
    "name": "Determinant Calculator",
    "description": "Calculate determinants for 2x2 and 3x3 square matrices.",
    "categories": [
      "Math"
    ],
    "url": "../tools/determinant-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "determinant",
      "det",
      "matrix determinant",
      "linear algebra"
    ]
  },
  {
    "id": "vector-calculator",
    "name": "Vector Calculator",
    "description": "Calculate vector magnitude, dot product, cross product, and unit vector.",
    "categories": [
      "Math"
    ],
    "url": "../tools/vector-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg>",
    "emoji": "↗️",
    "keywords": [
      "vector",
      "dot product",
      "cross product",
      "magnitude",
      "vector math"
    ]
  },
  {
    "id": "triangle-calculator",
    "name": "Triangle Calculator",
    "description": "Solve triangle area, perimeter, angles, and sides using SSS, SAS, ASA.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/triangle-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "🔺",
    "keywords": [
      "triangle",
      "area",
      "perimeter",
      "angles",
      "geometry"
    ]
  },
  {
    "id": "right-triangle-calculator",
    "name": "Right Triangle Calculator",
    "description": "Calculate hypotenuse, legs, area, and acute angles for right triangles.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/right-triangle-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "right triangle",
      "hypotenuse",
      "legs",
      "geometry"
    ]
  },
  {
    "id": "pythagorean-theorem-calculator",
    "name": "Pythagorean Theorem Calculator",
    "description": "Solve a² + b² = c² for missing side lengths of right-angled triangles.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/pythagorean-theorem-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "pythagorean theorem",
      "a2 b2 c2",
      "hypotenuse",
      "triangle"
    ]
  },
  {
    "id": "circle-calculator",
    "name": "Circle Calculator",
    "description": "Find radius, diameter, circumference, and area of a circle from any single input.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/circle-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "⚪",
    "keywords": [
      "circle",
      "radius",
      "diameter",
      "circumference",
      "area"
    ]
  },
  {
    "id": "rectangle-calculator",
    "name": "Rectangle Calculator",
    "description": "Calculate area, perimeter, and diagonal length of a rectangle.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/rectangle-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "▭",
    "keywords": [
      "rectangle",
      "area",
      "perimeter",
      "diagonal",
      "geometry"
    ]
  },
  {
    "id": "square-calculator",
    "name": "Square Calculator",
    "description": "Compute side length, area, perimeter, and diagonal of a square.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/square-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "⏹️",
    "keywords": [
      "square",
      "area",
      "perimeter",
      "side length",
      "geometry"
    ]
  },
  {
    "id": "trapezoid-calculator",
    "name": "Trapezoid Calculator",
    "description": "Calculate area, height, and bases of a trapezoid / trapezium.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/trapezoid-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "⏢",
    "keywords": [
      "trapezoid",
      "trapezium",
      "area",
      "bases",
      "height"
    ]
  },
  {
    "id": "polygon-calculator",
    "name": "Polygon Calculator",
    "description": "Compute interior angles, exterior angles, and area of regular polygons.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/polygon-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "⬟",
    "keywords": [
      "polygon",
      "regular polygon",
      "interior angle",
      "geometry"
    ]
  },
  {
    "id": "area-calculator",
    "name": "Area Calculator",
    "description": "Calculate surface area for common 2D shapes in multiple units.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/area-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "🗺️",
    "keywords": [
      "area",
      "2d shape",
      "surface area",
      "geometry"
    ]
  },
  {
    "id": "volume-calculator",
    "name": "Volume Calculator",
    "description": "Compute volume for cube, rectangular prism, cylinder, cone, and sphere.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/volume-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📦",
    "keywords": [
      "volume",
      "3d shape",
      "cube",
      "cylinder",
      "sphere"
    ]
  },
  {
    "id": "surface-area-calculator",
    "name": "Surface Area Calculator",
    "description": "Calculate total and lateral surface area of 3D geometric solids.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/surface-area-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "surface area",
      "total area",
      "lateral area",
      "3d solids"
    ]
  },
  {
    "id": "angle-converter",
    "name": "Angle Converter",
    "description": "Convert angles between degrees, radians, gradians, and arcseconds.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/angle-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "angle converter",
      "degrees",
      "radians",
      "gradians"
    ]
  },
  {
    "id": "degree-radian-converter",
    "name": "Degree ↔ Radian Converter",
    "description": "Convert degrees to radians and radians to degrees with pi multiples.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/degree-radian-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "🔄",
    "keywords": [
      "degree to radian",
      "radian to degree",
      "pi radians",
      "angles"
    ]
  },
  {
    "id": "trigonometry-calculator",
    "name": "Trigonometry Calculator",
    "description": "Evaluate primary and reciprocal trigonometric ratios for any angle.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/trigonometry-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "📐",
    "keywords": [
      "trigonometry",
      "sin cos tan",
      "csc sec cot",
      "trig"
    ]
  },
  {
    "id": "sine-calculator",
    "name": "Sine Calculator",
    "description": "Calculate sine (sin) and arcsine (sin⁻¹) values in degrees or radians.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/sine-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "〰️",
    "keywords": [
      "sine",
      "sin",
      "arcsin",
      "trigonometry"
    ]
  },
  {
    "id": "cosine-calculator",
    "name": "Cosine Calculator",
    "description": "Calculate cosine (cos) and arccosine (cos⁻¹) values accurately.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/cosine-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "〰️",
    "keywords": [
      "cosine",
      "cos",
      "arccos",
      "trigonometry"
    ]
  },
  {
    "id": "tangent-calculator",
    "name": "Tangent Calculator",
    "description": "Calculate tangent (tan) and arctangent (tan⁻¹) values with asymptote checks.",
    "categories": [
      "Geometry",
      "Math"
    ],
    "url": "../tools/tangent-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 20h18L12 4z\"/></svg>",
    "emoji": "〰️",
    "keywords": [
      "tangent",
      "tan",
      "arctan",
      "trigonometry"
    ]
  },
  {
    "id": "ohms-law-calculator",
    "name": "Ohm's Law Calculator",
    "description": "Calculate Voltage (V), Current (I), and Resistance (R) using V = I × R.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/ohms-law-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "⚡",
    "keywords": [
      "ohms law",
      "voltage",
      "current",
      "resistance",
      "physics"
    ]
  },
  {
    "id": "voltage-calculator",
    "name": "Voltage Calculator",
    "description": "Compute electric potential difference from current, resistance, or power.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/voltage-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔌",
    "keywords": [
      "voltage",
      "volts",
      "potential difference",
      "electronics"
    ]
  },
  {
    "id": "current-calculator",
    "name": "Current Calculator",
    "description": "Calculate electrical current in amperes from voltage, power, or resistance.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/current-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "⚡",
    "keywords": [
      "current",
      "amperes",
      "amps",
      "electronics"
    ]
  },
  {
    "id": "resistance-calculator",
    "name": "Resistance Calculator",
    "description": "Calculate resistance in ohms from voltage, current, or electrical power.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/resistance-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🎛️",
    "keywords": [
      "resistance",
      "ohms",
      "resistor",
      "electronics"
    ]
  },
  {
    "id": "electrical-power-calculator",
    "name": "Electrical Power Calculator",
    "description": "Calculate electric power in watts using P = V×I, P = I²R, or P = V²/R.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/electrical-power-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "💡",
    "keywords": [
      "electrical power",
      "watts",
      "power formula",
      "physics"
    ]
  },
  {
    "id": "electrical-energy-calculator",
    "name": "Electrical Energy Calculator",
    "description": "Compute total electrical energy consumption in joules or kilowatt-hours.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/electrical-energy-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔋",
    "keywords": [
      "electrical energy",
      "joules",
      "kwh",
      "energy consumption"
    ]
  },
  {
    "id": "series-resistance-calculator",
    "name": "Series Resistance Calculator",
    "description": "Calculate equivalent total resistance for resistors connected in series.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/series-resistance-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "⛓️",
    "keywords": [
      "series resistance",
      "resistors in series",
      "total resistance"
    ]
  },
  {
    "id": "parallel-resistance-calculator",
    "name": "Parallel Resistance Calculator",
    "description": "Calculate equivalent total resistance for resistors connected in parallel.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/parallel-resistance-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔀",
    "keywords": [
      "parallel resistance",
      "resistors in parallel",
      "equivalent resistance"
    ]
  },
  {
    "id": "series-capacitor-calculator",
    "name": "Series Capacitor Calculator",
    "description": "Compute total equivalent capacitance for capacitors in series.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/series-capacitor-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔋",
    "keywords": [
      "series capacitor",
      "capacitance",
      "farads",
      "electronics"
    ]
  },
  {
    "id": "parallel-capacitor-calculator",
    "name": "Parallel Capacitor Calculator",
    "description": "Compute total equivalent capacitance for capacitors in parallel.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/parallel-capacitor-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔋",
    "keywords": [
      "parallel capacitor",
      "capacitance total",
      "farads"
    ]
  },
  {
    "id": "inductor-calculator",
    "name": "Inductor Calculator",
    "description": "Calculate series/parallel inductance and inductive reactance (XL).",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/inductor-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🌀",
    "keywords": [
      "inductor",
      "inductance",
      "henry",
      "reactance"
    ]
  },
  {
    "id": "led-resistor-calculator",
    "name": "LED Resistor Calculator",
    "description": "Calculate current-limiting resistor value and power rating for LEDs.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/led-resistor-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "💡",
    "keywords": [
      "led resistor",
      "current limiting",
      "led circuit",
      "ohms"
    ]
  },
  {
    "id": "voltage-divider-calculator",
    "name": "Voltage Divider Calculator",
    "description": "Calculate output voltage Vout = Vin × R2 / (R1 + R2) for resistor networks.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/voltage-divider-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "⚡",
    "keywords": [
      "voltage divider",
      "vout",
      "resistor divider",
      "electronics"
    ]
  },
  {
    "id": "watt-kw-converter",
    "name": "Watt ↔ kW Converter",
    "description": "Convert power units between Watts, Kilowatts, Megawatts, and Horsepower.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/watt-kw-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "⚡",
    "keywords": [
      "watt to kw",
      "kw to watt",
      "horsepower",
      "power conversion"
    ]
  },
  {
    "id": "kwh-electricity-cost-calculator",
    "name": "kWh Electricity Cost Calculator",
    "description": "Estimate electricity appliance usage costs per day, month, and year.",
    "categories": [
      "Physics & Electronics",
      "Finance"
    ],
    "url": "../tools/kwh-electricity-cost-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "💵",
    "keywords": [
      "kwh cost",
      "electricity bill",
      "appliance cost",
      "power bill"
    ]
  },
  {
    "id": "frequency-calculator",
    "name": "Frequency Calculator",
    "description": "Calculate wave frequency, period (T), and angular frequency (ω).",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/frequency-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "📻",
    "keywords": [
      "frequency",
      "hertz",
      "period",
      "wave frequency"
    ]
  },
  {
    "id": "wavelength-calculator",
    "name": "Wavelength Calculator",
    "description": "Calculate electromagnetic wave or sound wavelength λ = v / f.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/wavelength-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🌊",
    "keywords": [
      "wavelength",
      "lambda",
      "wave speed",
      "frequency"
    ]
  },
  {
    "id": "resistor-color-code-calculator",
    "name": "Resistor Color Code Calculator",
    "description": "Decode 4-band and 5-band resistor color bands into ohm resistance.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/resistor-color-code-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🎨",
    "keywords": [
      "resistor color code",
      "bands",
      "color decoder",
      "resistance"
    ]
  },
  {
    "id": "capacitor-code-calculator",
    "name": "Capacitor Code Calculator",
    "description": "Convert 3-digit capacitor ceramic markings to picofarads, nanofarads, and microfarads.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/capacitor-code-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🏷️",
    "keywords": [
      "capacitor code",
      "ceramic capacitor",
      "pf nf uf",
      "markings"
    ]
  },
  {
    "id": "decibel-calculator",
    "name": "Decibel Calculator",
    "description": "Compute decibel gain and loss ratios for power, voltage, and sound.",
    "categories": [
      "Physics & Electronics"
    ],
    "url": "../tools/decibel-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg>",
    "emoji": "🔊",
    "keywords": [
      "decibel",
      "db calculator",
      "power gain",
      "voltage gain"
    ]
  },
  {
    "id": "simple-interest-calculator",
    "name": "Simple Interest Calculator",
    "description": "Compute simple interest payout, principal, rate, and total accrued amount.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/simple-interest-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "💰",
    "keywords": [
      "simple interest",
      "principal",
      "interest rate",
      "finance"
    ]
  },
  {
    "id": "compound-interest-calculator",
    "name": "Compound Interest Calculator",
    "description": "Calculate compound growth with monthly, quarterly, or annual compounding.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/compound-interest-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "compound interest",
      "compounding",
      "growth",
      "finance"
    ]
  },
  {
    "id": "loan-emi-calculator",
    "name": "Loan EMI Calculator",
    "description": "Calculate monthly loan repayment installments (EMI) and total interest payable.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/loan-emi-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🏦",
    "keywords": [
      "loan emi",
      "emi calculator",
      "monthly installment",
      "mortgage"
    ]
  },
  {
    "id": "discount-calculator",
    "name": "Discount Calculator",
    "description": "Find final discounted sale price and total saved money during shopping.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/discount-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🏷️",
    "keywords": [
      "discount",
      "sale price",
      "savings",
      "percent off"
    ]
  },
  {
    "id": "profit-loss-calculator",
    "name": "Profit & Loss Calculator",
    "description": "Calculate total profit, loss, profit percentage, and cost/selling prices.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/profit-loss-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "profit loss",
      "margin",
      "cost price",
      "selling price"
    ]
  },
  {
    "id": "vat-calculator",
    "name": "VAT Calculator",
    "description": "Calculate gross price, net price, and inclusive or exclusive Value Added Tax.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/vat-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🧾",
    "keywords": [
      "vat",
      "value added tax",
      "tax inclusive",
      "tax exclusive"
    ]
  },
  {
    "id": "tax-calculator",
    "name": "Tax Calculator",
    "description": "Calculate sales tax, income tax estimates, and post-tax remaining earnings.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/tax-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🏛️",
    "keywords": [
      "tax calculator",
      "sales tax",
      "income tax",
      "deductions"
    ]
  },
  {
    "id": "tip-calculator",
    "name": "Tip Calculator",
    "description": "Calculate total tip amount and split bill evenly among multiple people.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/tip-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🍽️",
    "keywords": [
      "tip calculator",
      "bill split",
      "gratuity",
      "split bill"
    ]
  },
  {
    "id": "markup-calculator",
    "name": "Markup Calculator",
    "description": "Compute gross markup percentage, cost price, and final selling price.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/markup-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "📈",
    "keywords": [
      "markup",
      "gross margin",
      "cost price",
      "retail markup"
    ]
  },
  {
    "id": "commission-calculator",
    "name": "Commission Calculator",
    "description": "Calculate total sales commission payouts based on custom percentage rates.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/commission-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "💼",
    "keywords": [
      "commission",
      "sales rate",
      "payout",
      "earnings"
    ]
  },
  {
    "id": "savings-calculator",
    "name": "Savings Calculator",
    "description": "Project future savings balances with periodic recurring monthly contributions.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/savings-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🐖",
    "keywords": [
      "savings",
      "future balance",
      "monthly contribution",
      "goal"
    ]
  },
  {
    "id": "investment-return-calculator",
    "name": "Investment Return Calculator",
    "description": "Calculate ROI (Return on Investment) percentage and net capital gains.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/investment-return-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "💹",
    "keywords": [
      "investment return",
      "roi",
      "capital gains",
      "portfolio"
    ]
  },
  {
    "id": "currency-converter",
    "name": "Currency Converter",
    "description": "Convert exchange rates between USD, EUR, GBP, BDT, INR, CAD, AUD, and JPY.",
    "categories": [
      "Finance"
    ],
    "url": "../tools/currency-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>",
    "emoji": "🔱",
    "keywords": [
      "currency converter",
      "exchange rate",
      "usd to bdt",
      "forex"
    ]
  },
  {
    "id": "time-duration-calculator",
    "name": "Time Duration Calculator",
    "description": "Calculate total hours and minutes duration between start time and end time.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/time-duration-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "⏱️",
    "keywords": [
      "time duration",
      "hours minutes",
      "start end time",
      "elapsed time"
    ]
  },
  {
    "id": "time-difference-calculator",
    "name": "Time Difference Calculator",
    "description": "Calculate precise difference between two specific timestamps or clock times.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/time-difference-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "🕒",
    "keywords": [
      "time difference",
      "clock gap",
      "hours difference",
      "time"
    ]
  },
  {
    "id": "add-subtract-time",
    "name": "Add / Subtract Time",
    "description": "Add or subtract specific hours, minutes, and seconds to a starting clock time.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/add-subtract-time/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "➕",
    "keywords": [
      "add time",
      "subtract time",
      "time arithmetic",
      "clock"
    ]
  },
  {
    "id": "hours-minutes-converter",
    "name": "Hours ↔ Minutes Converter",
    "description": "Convert decimal hours into exact hours and minutes or total minutes.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/hours-minutes-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "⏳",
    "keywords": [
      "hours to minutes",
      "minutes to hours",
      "time conversion"
    ]
  },
  {
    "id": "minutes-seconds-converter",
    "name": "Minutes ↔ Seconds Converter",
    "description": "Convert minutes to seconds and seconds to minutes instantly.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/minutes-seconds-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "⏱️",
    "keywords": [
      "minutes to seconds",
      "seconds to minutes",
      "time conversion"
    ]
  },
  {
    "id": "world-clock",
    "name": "World Clock",
    "description": "View current local times across major international time zones and capitals.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/world-clock/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "🌍",
    "keywords": [
      "world clock",
      "global time",
      "cities time",
      "time zones"
    ]
  },
  {
    "id": "timezone-converter",
    "name": "Timezone Converter",
    "description": "Convert meeting times between UTC, EST, PST, GMT, BST, IST, and BST (Dhaka).",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/timezone-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "🌐",
    "keywords": [
      "timezone converter",
      "utc est pst",
      "meeting time",
      "time offset"
    ]
  },
  {
    "id": "unix-timestamp-converter",
    "name": "Unix Timestamp Converter",
    "description": "Convert epoch Unix timestamps to human-readable date and time strings.",
    "categories": [
      "Time & Date",
      "Developer / Computer"
    ],
    "url": "../tools/unix-timestamp-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "🖥️",
    "keywords": [
      "unix timestamp",
      "epoch time",
      "date converter",
      "timestamp"
    ]
  },
  {
    "id": "week-number-calculator",
    "name": "Week Number Calculator",
    "description": "Find current ISO week number and total weeks for any given calendar date.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/week-number-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "📅",
    "keywords": [
      "week number",
      "iso week",
      "calendar week",
      "date"
    ]
  },
  {
    "id": "working-days-calculator",
    "name": "Working Days Calculator",
    "description": "Calculate total working days between dates excluding weekends and holidays.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/working-days-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "💼",
    "keywords": [
      "working days",
      "business days",
      "exclude weekends",
      "calendar"
    ]
  },
  {
    "id": "business-days-calculator",
    "name": "Business Days Calculator",
    "description": "Add or subtract target business days to calculate estimated project completion dates.",
    "categories": [
      "Time & Date"
    ],
    "url": "../tools/business-days-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/></svg>",
    "emoji": "📆",
    "keywords": [
      "business days",
      "project deadline",
      "target date",
      "work days"
    ]
  },
  {
    "id": "reading-time-calculator",
    "name": "Reading Time Calculator",
    "description": "Estimate reading and speaking time for essays and articles at various WPM rates.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/reading-time-calculator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📖",
    "keywords": [
      "reading time",
      "wpm",
      "speaking time",
      "essay length"
    ]
  },
  {
    "id": "sentence-counter",
    "name": "Sentence Counter",
    "description": "Count total sentences and average sentence length in your written text.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/sentence-counter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "✍️",
    "keywords": [
      "sentence counter",
      "sentence count",
      "text statistics"
    ]
  },
  {
    "id": "paragraph-counter",
    "name": "Paragraph Counter",
    "description": "Analyze total paragraphs and paragraph length in essays and documents.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/paragraph-counter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "paragraph counter",
      "paragraph count",
      "document structure"
    ]
  },
  {
    "id": "line-counter",
    "name": "Line Counter",
    "description": "Count non-empty lines, empty lines, and total lines in text data.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/line-counter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📜",
    "keywords": [
      "line counter",
      "total lines",
      "code lines",
      "text stats"
    ]
  },
  {
    "id": "duplicate-line-remover",
    "name": "Duplicate Line Remover",
    "description": "Remove duplicate repeated lines from lists and text data while maintaining order.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/duplicate-line-remover/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🧹",
    "keywords": [
      "duplicate lines",
      "remove duplicates",
      "unique lines",
      "clean text"
    ]
  },
  {
    "id": "duplicate-word-remover",
    "name": "Duplicate Word Remover",
    "description": "Eliminate duplicate repeated words and clean up text lists.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/duplicate-word-remover/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "duplicate words",
      "unique words",
      "word cleaner",
      "text"
    ]
  },
  {
    "id": "find-and-replace",
    "name": "Find & Replace",
    "description": "Find specific text or patterns and replace them globally with instant preview.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/find-and-replace/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔍",
    "keywords": [
      "find and replace",
      "replace text",
      "search replace",
      "text tool"
    ]
  },
  {
    "id": "text-sorter",
    "name": "Text Sorter",
    "description": "Sort text lines in ascending, descending, length-based, or random order.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/text-sorter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "text sorter",
      "sort lines",
      "order text",
      "alphabetical"
    ]
  },
  {
    "id": "alphabetical-sorter",
    "name": "Alphabetical Sorter",
    "description": "Sort list items alphabetically (A-Z or Z-A) with case sensitivity controls.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/alphabetical-sorter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "alphabetical sorter",
      "sort A-Z",
      "alphabetize",
      "list sorter"
    ]
  },
  {
    "id": "reverse-text",
    "name": "Reverse Text",
    "description": "Reverse character string order, word sequence, or line order.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/reverse-text/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔀",
    "keywords": [
      "reverse text",
      "flip words",
      "mirror text",
      "backwards"
    ]
  },
  {
    "id": "remove-extra-spaces",
    "name": "Remove Extra Spaces",
    "description": "Trim trailing spaces, leading spaces, and collapse multiple consecutive spaces.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/remove-extra-spaces/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🧹",
    "keywords": [
      "remove extra spaces",
      "trim spaces",
      "clean text",
      "space remover"
    ]
  },
  {
    "id": "remove-line-breaks",
    "name": "Remove Line Breaks",
    "description": "Convert multiline paragraphs into a single continuous block of text.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/remove-line-breaks/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "remove line breaks",
      "single line",
      "paragraph joiner"
    ]
  },
  {
    "id": "text-to-slug",
    "name": "Text to Slug",
    "description": "Convert titles and phrases into clean URL-friendly web slugs.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/text-to-slug/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🔗",
    "keywords": [
      "text to slug",
      "url slug",
      "slugify",
      "permalink"
    ]
  },
  {
    "id": "lorem-ipsum-generator",
    "name": "Lorem Ipsum Generator",
    "description": "Generate custom placeholder paragraphs, sentences, or words for design mockups.",
    "categories": [
      "Text & Writing"
    ],
    "url": "../tools/lorem-ipsum-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📝",
    "keywords": [
      "lorem ipsum",
      "placeholder text",
      "dummy text",
      "generator"
    ]
  },
  {
    "id": "markdown-formatter",
    "name": "Markdown Formatter",
    "description": "Format and preview Markdown syntax into styled HTML output.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/markdown-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "〽️",
    "keywords": [
      "markdown formatter",
      "md to html",
      "markdown preview"
    ]
  },
  {
    "id": "html-formatter",
    "name": "HTML Formatter",
    "description": "Beautify or minify raw HTML code snippets with proper indentation.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/html-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "🏷️",
    "keywords": [
      "html formatter",
      "beautify html",
      "minify html",
      "html tool"
    ]
  },
  {
    "id": "json-formatter",
    "name": "JSON Formatter",
    "description": "Format, beautify, and inspect JSON objects with tab indentation.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/json-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "⚙️",
    "keywords": [
      "json formatter",
      "pretty print json",
      "json beautifier"
    ]
  },
  {
    "id": "json-validator",
    "name": "JSON Validator",
    "description": "Validate JSON syntax structure and highlight precise parsing error locations.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/json-validator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "✅",
    "keywords": [
      "json validator",
      "validate json",
      "json syntax",
      "check json"
    ]
  },
  {
    "id": "xml-formatter",
    "name": "XML Formatter",
    "description": "Format, indent, and validate XML documents for easy reading.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/xml-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "xml formatter",
      "beautify xml",
      "xml validator",
      "xml"
    ]
  },
  {
    "id": "csv-formatter",
    "name": "CSV Formatter",
    "description": "Format raw CSV data into clean readable tables and convert separators.",
    "categories": [
      "Text & Writing",
      "Developer / Computer"
    ],
    "url": "../tools/csv-formatter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>",
    "emoji": "📊",
    "keywords": [
      "csv formatter",
      "csv table",
      "tsv converter",
      "data format"
    ]
  },
  {
    "id": "base64-encoder",
    "name": "Base64 Encoder",
    "description": "Encode plain text or strings into standard Base64 format.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/base64-encoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔒",
    "keywords": [
      "base64 encoder",
      "encode base64",
      "base64 text"
    ]
  },
  {
    "id": "base64-decoder",
    "name": "Base64 Decoder",
    "description": "Decode Base64 encoded strings back to original readable text.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/base64-decoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔓",
    "keywords": [
      "base64 decoder",
      "decode base64",
      "base64 to text"
    ]
  },
  {
    "id": "url-encoder",
    "name": "URL Encoder",
    "description": "Encode text strings into percent-encoded URL safe formats.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/url-encoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔗",
    "keywords": [
      "url encoder",
      "encodeuri",
      "url string",
      "percent encoding"
    ]
  },
  {
    "id": "url-decoder",
    "name": "URL Decoder",
    "description": "Decode percent-encoded URL parameters back into clear text.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/url-decoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔓",
    "keywords": [
      "url decoder",
      "decodeuricomponent",
      "url parameters"
    ]
  },
  {
    "id": "html-encoder",
    "name": "HTML Encoder",
    "description": "Escape special HTML characters (&, <, >, \") into safely printable entities.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/html-encoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🏷️",
    "keywords": [
      "html encoder",
      "html entities",
      "escape html"
    ]
  },
  {
    "id": "html-decoder",
    "name": "HTML Decoder",
    "description": "Decode HTML entities back into unescaped HTML characters.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/html-decoder/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔓",
    "keywords": [
      "html decoder",
      "unescape html",
      "entity decoder"
    ]
  },
  {
    "id": "regex-tester",
    "name": "Regex Tester",
    "description": "Test and debug regular expressions against custom test strings with highlight flags.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/regex-tester/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🧪",
    "keywords": [
      "regex tester",
      "regular expression",
      "regex match",
      "pattern"
    ]
  },
  {
    "id": "uuid-generator",
    "name": "UUID Generator",
    "description": "Generate random Version 4 UUIDs (Universally Unique Identifiers) in bulk.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/uuid-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔑",
    "keywords": [
      "uuid generator",
      "guid",
      "v4 uuid",
      "unique key"
    ]
  },
  {
    "id": "hash-generator",
    "name": "Hash Generator",
    "description": "Generate SHA-256, SHA-512, SHA-1, and MD5 cryptographic hashes safely.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/hash-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔐",
    "keywords": [
      "hash generator",
      "sha256",
      "sha512",
      "md5",
      "crypto"
    ]
  },
  {
    "id": "timestamp-converter",
    "name": "Timestamp Converter",
    "description": "Convert Epoch timestamps to ISO 8601, UTC, and local date strings.",
    "categories": [
      "Developer / Computer",
      "Time & Date"
    ],
    "url": "../tools/timestamp-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "⏱️",
    "keywords": [
      "timestamp converter",
      "epoch converter",
      "iso 8601",
      "date"
    ]
  },
  {
    "id": "color-converter",
    "name": "Color Converter",
    "description": "Convert color values seamlessly between HEX, RGB, HSL, and CMYK.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/color-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🎨",
    "keywords": [
      "color converter",
      "hex to rgb",
      "rgb to hsl",
      "color code"
    ]
  },
  {
    "id": "hex-rgb-converter",
    "name": "HEX ↔ RGB Converter",
    "description": "Convert hex color codes (#FFFFFF) to RGB (255, 255, 255) and vice versa.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/hex-rgb-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🎨",
    "keywords": [
      "hex to rgb",
      "rgb to hex",
      "color code",
      "hex color"
    ]
  },
  {
    "id": "rgb-hsl-converter",
    "name": "RGB ↔ HSL Converter",
    "description": "Convert RGB color channels to HSL (Hue, Saturation, Lightness) values.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/rgb-hsl-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🎨",
    "keywords": [
      "rgb to hsl",
      "hsl to rgb",
      "color hue",
      "hsl"
    ]
  },
  {
    "id": "binary-converter",
    "name": "Binary Converter",
    "description": "Convert binary code (0s and 1s) to text, decimal, hex, and octal numbers.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/binary-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "0️⃣",
    "keywords": [
      "binary converter",
      "binary to text",
      "binary to decimal",
      "base 2"
    ]
  },
  {
    "id": "decimal-converter",
    "name": "Decimal Converter",
    "description": "Convert decimal numbers to binary, hexadecimal, and octal representations.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/decimal-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔟",
    "keywords": [
      "decimal converter",
      "decimal to binary",
      "decimal to hex",
      "base 10"
    ]
  },
  {
    "id": "hexadecimal-converter",
    "name": "Hexadecimal Converter",
    "description": "Convert hexadecimal values to decimal, binary, and ASCII text.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/hexadecimal-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "hexadecimal converter",
      "hex to decimal",
      "hex to binary",
      "base 16"
    ]
  },
  {
    "id": "octal-converter",
    "name": "Octal Converter",
    "description": "Convert octal (base 8) numbers to binary, decimal, and hexadecimal.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/octal-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "8️⃣",
    "keywords": [
      "octal converter",
      "base 8",
      "octal to decimal",
      "octal to binary"
    ]
  },
  {
    "id": "ascii-converter",
    "name": "ASCII Converter",
    "description": "Convert text characters into ASCII decimal/hex codes and vice versa.",
    "categories": [
      "Developer / Computer"
    ],
    "url": "../tools/ascii-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/></svg>",
    "emoji": "🔤",
    "keywords": [
      "ascii converter",
      "ascii code",
      "text to ascii",
      "ascii lookup"
    ]
  },
  {
    "id": "image-cropper",
    "name": "Image Cropper",
    "description": "Crop images to exact dimensions or preset aspect ratios directly in browser.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-cropper/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "✂️",
    "keywords": [
      "image cropper",
      "crop image",
      "aspect ratio",
      "image editor"
    ]
  },
  {
    "id": "image-rotator",
    "name": "Image Rotator",
    "description": "Rotate images 90, 180, 270 degrees or custom angles locally.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-rotator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🔄",
    "keywords": [
      "image rotator",
      "rotate image",
      "turn photo",
      "orientation"
    ]
  },
  {
    "id": "image-flipper",
    "name": "Image Flipper",
    "description": "Flip images horizontally or vertically without uploading to external servers.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-flipper/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "↔️",
    "keywords": [
      "image flipper",
      "flip horizontal",
      "flip vertical",
      "mirror image"
    ]
  },
  {
    "id": "image-converter",
    "name": "Image Converter",
    "description": "Convert image files between JPG, PNG, WEBP, GIF, and BMP formats.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-converter/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🖼️",
    "keywords": [
      "image converter",
      "webp convert",
      "jpg png webp",
      "photo convert"
    ]
  },
  {
    "id": "image-to-text-ocr",
    "name": "Image to Text (OCR)",
    "description": "Extract printable text content from image files and scanned documents.",
    "categories": [
      "Image & File",
      "Text & Writing"
    ],
    "url": "../tools/image-to-text-ocr/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "image to text",
      "ocr",
      "extract text",
      "text scanner"
    ]
  },
  {
    "id": "screenshot-to-text",
    "name": "Screenshot to Text",
    "description": "Extract text lines and quotes directly from uploaded screenshots.",
    "categories": [
      "Image & File",
      "Text & Writing"
    ],
    "url": "../tools/screenshot-to-text/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "📱",
    "keywords": [
      "screenshot to text",
      "ocr screenshot",
      "copy text from photo"
    ]
  },
  {
    "id": "image-metadata-viewer",
    "name": "Image Metadata Viewer",
    "description": "Inspect image file size, dimension, MIME type, and EXIF metadata attributes.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-metadata-viewer/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "ℹ️",
    "keywords": [
      "image metadata",
      "exif viewer",
      "photo info",
      "image dimensions"
    ]
  },
  {
    "id": "image-color-picker",
    "name": "Image Color Picker",
    "description": "Hover and click any pixel on an image to sample exact HEX and RGB colors.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/image-color-picker/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🎨",
    "keywords": [
      "image color picker",
      "sample color",
      "eye dropper",
      "hex picker"
    ]
  },
  {
    "id": "pdf-merge",
    "name": "PDF Merge",
    "description": "Combine multiple PDF files or scanned document pages into a single PDF.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-merge/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "pdf merge",
      "combine pdf",
      "join pdf",
      "pdf merger"
    ]
  },
  {
    "id": "pdf-split",
    "name": "PDF Split",
    "description": "Extract specific page ranges or split PDF documents into separate files.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-split/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "✂️",
    "keywords": [
      "pdf split",
      "separate pdf pages",
      "pdf splitter",
      "cut pdf"
    ]
  },
  {
    "id": "pdf-compress",
    "name": "PDF Compress",
    "description": "Optimize PDF file sizes and reduce storage footprint directly in your browser.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-compress/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🗜️",
    "keywords": [
      "pdf compress",
      "reduce pdf size",
      "optimize pdf",
      "shrink pdf"
    ]
  },
  {
    "id": "pdf-to-image",
    "name": "PDF to Image",
    "description": "Convert PDF document pages into high-resolution JPG or PNG image files.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-to-image/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🖼️",
    "keywords": [
      "pdf to image",
      "pdf to jpg",
      "pdf to png",
      "extract pages"
    ]
  },
  {
    "id": "pdf-page-extractor",
    "name": "PDF Page Extractor",
    "description": "Select and extract specific pages from PDF files into new documents.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-page-extractor/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "📄",
    "keywords": [
      "pdf page extractor",
      "extract pages",
      "save pdf pages"
    ]
  },
  {
    "id": "pdf-page-rotator",
    "name": "PDF Page Rotator",
    "description": "Rotate upside-down PDF pages 90 or 180 degrees and save corrected document.",
    "categories": [
      "Image & File"
    ],
    "url": "../tools/pdf-page-rotator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/></svg>",
    "emoji": "🔄",
    "keywords": [
      "pdf page rotator",
      "rotate pdf",
      "turn pdf pages"
    ]
  },
  {
    "id": "password-strength-checker",
    "name": "Password Strength Checker",
    "description": "Analyze password security strength, entropy bits, and common vulnerability flags.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/password-strength-checker/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🛡️",
    "keywords": [
      "password strength",
      "checker",
      "security test",
      "entropy"
    ]
  },
  {
    "id": "passphrase-generator",
    "name": "Passphrase Generator",
    "description": "Generate memorable, high-entropy word passphrases for maximum security.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/passphrase-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🗝️",
    "keywords": [
      "passphrase generator",
      "diceware",
      "memorable password"
    ]
  },
  {
    "id": "username-generator",
    "name": "Username Generator",
    "description": "Generate unique, creative, and student-themed usernames for accounts.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/username-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "👤",
    "keywords": [
      "username generator",
      "handle maker",
      "screen name",
      "creative name"
    ]
  },
  {
    "id": "random-number-generator",
    "name": "Random Number Generator",
    "description": "Generate cryptographically random numbers within custom min and max ranges.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/random-number-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🎲",
    "keywords": [
      "random number generator",
      "rng",
      "random integer",
      "pick number"
    ]
  },
  {
    "id": "random-string-generator",
    "name": "Random String Generator",
    "description": "Generate random alphanumeric strings and custom security tokens.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/random-string-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🔣",
    "keywords": [
      "random string",
      "token generator",
      "random code",
      "alphanumeric"
    ]
  },
  {
    "id": "pin-generator",
    "name": "PIN Generator",
    "description": "Generate secure 4-digit, 6-digit, or custom length numerical PIN codes.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/pin-generator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🔢",
    "keywords": [
      "pin generator",
      "security pin",
      "4 digit pin",
      "numeric code"
    ]
  },
  {
    "id": "qr-code-scanner",
    "name": "QR Code Scanner",
    "description": "Scan QR codes instantly using your device camera or uploaded image file.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/qr-code-scanner/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "📷",
    "keywords": [
      "qr code scanner",
      "scan qr",
      "camera scanner",
      "qr reader"
    ]
  },
  {
    "id": "email-validator",
    "name": "Email Validator",
    "description": "Validate email address syntax, domain structure, and disposable email flags.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/email-validator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "✉️",
    "keywords": [
      "email validator",
      "check email syntax",
      "valid email",
      "email check"
    ]
  },
  {
    "id": "url-validator",
    "name": "URL Validator",
    "description": "Validate web URL format, scheme, domain structure, and protocol standards.",
    "categories": [
      "Security & Utility"
    ],
    "url": "../tools/url-validator/index.html",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "emoji": "🌐",
    "keywords": [
      "url validator",
      "check url",
      "valid website link",
      "url format"
    ]
  }
];

/**
 * Storage API Helper Functions
 */
window.ToolsStorage = {
  FAVORITES_KEY: 'st_favorite_tools',
  RECENTS_KEY: 'st_recent_tools',

  getFavorites() {
    try {
      const data = localStorage.getItem(this.FAVORITES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isFavorite(toolId) {
    return this.getFavorites().includes(toolId);
  },

  toggleFavorite(toolId) {
    let favorites = this.getFavorites();
    if (favorites.includes(toolId)) {
      favorites = favorites.filter(id => id !== toolId);
    } else {
      favorites.push(toolId);
    }
    try {
      localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
    return favorites.includes(toolId);
  },

  getRecents() {
    try {
      const data = localStorage.getItem(this.RECENTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  addRecent(toolId) {
    let recents = this.getRecents();
    recents = recents.filter(id => id !== toolId);
    recents.unshift(toolId); // Add to beginning
    if (recents.length > 8) {
      recents = recents.slice(0, 8); // Store up to 8
    }
    try {
      localStorage.setItem(this.RECENTS_KEY, JSON.stringify(recents));
    } catch (e) {
      console.error('Error saving recent tools:', e);
    }
  }
};
