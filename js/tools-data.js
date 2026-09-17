/**
 * Central Student Tools Registry & Metadata
 */
window.STUDENT_TOOLS = [
  {
    id: 'gpa-calculator',
    name: 'GPA Calculator',
    description: 'Calculate your term GPA effortlessly with course credits and letter grade conversions.',
    categories: ['Academic'],
    url: '../tools/gpa-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    keywords: ['gpa', 'grade point average', 'semester gpa', 'grades', 'credits', 'academic']
  },
  {
    id: 'cgpa-calculator',
    name: 'CGPA Calculator',
    description: 'Track cumulative academic progress across multiple semesters seamlessly.',
    categories: ['Academic'],
    url: '../tools/cgpa-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    keywords: ['cgpa', 'cumulative gpa', 'overall gpa', 'semesters', 'academic progress']
  },
  {
    id: 'semester-gpa-calculator',
    name: 'Semester GPA Calculator',
    description: 'Calculate GPA for specific academic semesters with weighted credit systems.',
    categories: ['Academic'],
    url: '../tools/semester-gpa-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    keywords: ['semester', 'term gpa', 'course grades', 'transcript', 'credits']
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Quickly compute test percentages, score markups, and grade ratios.',
    categories: ['Academic', 'Math'],
    url: '../tools/percentage-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    keywords: ['percentage', 'percent', 'ratio', 'fraction', 'marks percentage', 'math']
  },
  {
    id: 'grade-calculator',
    name: 'Grade Calculator',
    description: 'Determine your overall subject grade based on weighted assignments, quizzes, and exams.',
    categories: ['Academic'],
    url: '../tools/grade-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    keywords: ['grade', 'weighted grade', 'assessment', 'exam score', 'assignment grade']
  },
  {
    id: 'marks-calculator',
    name: 'Marks Calculator',
    description: 'Calculate total marks obtained, percentage, and corresponding letter grade.',
    categories: ['Academic'],
    url: '../tools/marks-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    keywords: ['marks', 'exam marks', 'out of', 'score', 'results', 'academic']
  },
  {
    id: 'attendance-calculator',
    name: 'Attendance Calculator',
    description: 'Determine required classes to hit your target attendance percentage requirement.',
    categories: ['Academic'],
    url: '../tools/attendance-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>',
    keywords: ['attendance', 'bunk', 'classes', 'target attendance', 'absence', 'present']
  },
  {
    id: 'study-progress-calculator',
    name: 'Study Progress Calculator',
    description: 'Track syllabus completion percentage, pages read, and remaining daily study pace.',
    categories: ['Academic', 'Productivity'],
    url: '../tools/study-progress-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>',
    keywords: ['study progress', 'syllabus', 'tracker', 'pages', 'chapters', 'productivity']
  },
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    description: 'Advanced mathematical operations, trigonometry, exponents, and logarithmic functions.',
    categories: ['Math'],
    url: '../tools/scientific-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>',
    keywords: ['scientific', 'trigonometry', 'sin', 'cos', 'tan', 'log', 'square root', 'math']
  },
  {
    id: 'fraction-calculator',
    name: 'Fraction Calculator',
    description: 'Add, subtract, multiply, and divide fractions with step-by-step simplification.',
    categories: ['Math'],
    url: '../tools/fraction-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="2"/><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="18" r="2"/></svg>',
    keywords: ['fraction', 'numerator', 'denominator', 'simplify fraction', 'mixed fraction']
  },
  {
    id: 'average-calculator',
    name: 'Average Calculator',
    description: 'Compute mean, median, mode, and range for any set of numbers instantly.',
    categories: ['Math'],
    url: '../tools/average-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    keywords: ['average', 'mean', 'median', 'mode', 'range', 'statistics', 'math']
  },
  {
    id: 'ratio-calculator',
    name: 'Ratio Calculator',
    description: 'Solve missing ratio proportions (A:B = C:D) and simplify numeric ratios.',
    categories: ['Math'],
    url: '../tools/ratio-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="1.5"/><circle cx="12" cy="16" r="1.5"/></svg>',
    keywords: ['ratio', 'proportion', 'simplify ratio', 'aspect ratio', 'math']
  },
  {
    id: 'equation-solver',
    name: 'Equation Solver',
    description: 'Solve linear (ax + b = 0) and quadratic (ax² + bx + c = 0) equations with roots.',
    categories: ['Math'],
    url: '../tools/equation-solver/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19L19 4"/><path d="M19 19L4 4"/></svg>',
    keywords: ['equation', 'algebra', 'linear equation', 'quadratic formula', 'roots', 'math']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert units for length, weight, temperature, area, volume, speed, and storage.',
    categories: ['Math', 'Other'],
    url: '../tools/unit-converter/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><line x1="3" y1="5" x2="21" y2="5"/><polyline points="7 23 3 19 7 15"/><line x1="21" y1="19" x2="3" y2="19"/></svg>',
    keywords: ['unit converter', 'length', 'weight', 'celsius', 'fahrenheit', 'meters', 'kg', 'pounds']
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Compute exact age in years, months, and days for official registration forms.',
    categories: ['Time & Date'],
    url: '../tools/age-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    keywords: ['age', 'dob', 'date of birth', 'years', 'months', 'days', 'birthday']
  },
  {
    id: 'date-difference-calculator',
    name: 'Date Difference Calculator',
    description: 'Calculate total days, weeks, and months between any two selected dates.',
    categories: ['Time & Date'],
    url: '../tools/date-difference-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    keywords: ['date difference', 'days between', 'calendar duration', 'weeks difference']
  },
  {
    id: 'days-calculator',
    name: 'Days Calculator',
    description: 'Add or subtract a specific number of days to find target future or past dates.',
    categories: ['Time & Date'],
    url: '../tools/days-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M12 14v4M10 16h4"/></svg>',
    keywords: ['add days', 'subtract days', 'future date', 'past date', 'deadline date']
  },
  {
    id: 'study-timer',
    name: 'Study Timer',
    description: 'Track study session durations with real-time stopwatch controls and lap split logs.',
    categories: ['Time & Date', 'Productivity'],
    url: '../tools/study-timer/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3L2 6"/><path d="M22 6l-3-3"/><path d="M12 2v2"/></svg>',
    keywords: ['stopwatch', 'timer', 'study duration', 'time tracker', 'laps']
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description: 'Boost focus using 25-minute study intervals and 5-minute restorative breaks.',
    categories: ['Time & Date', 'Productivity'],
    url: '../tools/pomodoro-timer/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 10"/></svg>',
    keywords: ['pomodoro', 'focus timer', 'break timer', 'productivity', 'study technique']
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer',
    description: 'Set countdown alarms for exams, assignment submissions, and study goals.',
    categories: ['Time & Date', 'Productivity'],
    url: '../tools/countdown-timer/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></svg>',
    keywords: ['countdown', 'exam timer', 'deadline timer', 'alarm', 'hours minutes seconds']
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count total words, sentences, paragraphs, and estimate reading time in real-time.',
    categories: ['Text'],
    url: '../tools/word-counter/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>',
    keywords: ['word count', 'essay length', 'reading time', 'text statistics', 'paragraphs']
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Analyze total character length including spaces for essay limits and posts.',
    categories: ['Text'],
    url: '../tools/character-counter/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M1518.1H3"/></svg>',
    keywords: ['character count', 'length', 'letters', 'spaces included', 'text']
  },
  {
    id: 'character-counter-no-spaces',
    name: 'Character Counter (Excluding Spaces)',
    description: 'Count exact characters and letters excluding spaces, tabs, and line breaks.',
    categories: ['Text'],
    url: '../tools/character-counter-no-spaces/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h10M4 18h16"/></svg>',
    keywords: ['characters no spaces', 'without spaces', 'net character count', 'text stats']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Transform text to UPPERCASE, lowercase, Title Case, Sentence case, and CamelCase.',
    categories: ['Text'],
    url: '../tools/case-converter/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><polyline points="16 3 12 7 8 3"/></svg>',
    keywords: ['uppercase', 'lowercase', 'titlecase', 'camelcase', 'slugify', 'case converter']
  },
  {
    id: 'text-cleaner',
    name: 'Text Cleaner',
    description: 'Remove duplicate spaces, line breaks, HTML tags, and extra symbols instantly.',
    categories: ['Text'],
    url: '../tools/text-cleaner/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    keywords: ['clean text', 'strip html', 'remove extra spaces', 'fix line breaks', 'text formatting']
  },
  {
    id: 'text-formatter',
    name: 'Text Formatter',
    description: 'Sort lines alphabetically, trim margins, format lists, and add bullet points.',
    categories: ['Text'],
    url: '../tools/text-formatter/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    keywords: ['sort lines', 'bullet points', 'indentation', 'format text', 'list formatter']
  },
  {
    id: 'image-resize',
    name: 'Image Resize',
    description: 'Resize image dimensions in pixels or percentages locally in your browser.',
    categories: ['Image & File'],
    url: '../tools/image-resize/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>',
    keywords: ['resize image', 'width height', 'dimensions', 'aspect ratio', 'image editor']
  },
  {
    id: 'image-compress',
    name: 'Image Compress',
    description: 'Compress image file size while keeping visual quality high right in your browser.',
    categories: ['Image & File'],
    url: '../tools/image-compress/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',
    keywords: ['compress image', 'reduce kb', 'image size', 'file compression', 'jpeg compression']
  },
  {
    id: 'jpg-to-png',
    name: 'JPG to PNG',
    description: 'Convert JPG / JPEG images to high-quality transparent-capable PNG files.',
    categories: ['Image & File'],
    url: '../tools/jpg-to-png/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
    keywords: ['jpg to png', 'jpeg convert', 'image conversion', 'png download']
  },
  {
    id: 'png-to-jpg',
    name: 'PNG to JPG',
    description: 'Convert PNG images to compact JPG format with background color options.',
    categories: ['Image & File'],
    url: '../tools/png-to-jpg/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polyline points="21 15 16 10 5 21"/></svg>',
    keywords: ['png to jpg', 'convert png', 'jpg output', 'image format']
  },
  {
    id: 'image-to-pdf',
    name: 'Image to PDF',
    description: 'Convert image files (JPG, PNG) into downloadable PDF documents locally.',
    categories: ['Image & File'],
    url: '../tools/image-to-pdf/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15h6"/><path d="M12 12v6"/></svg>',
    keywords: ['image to pdf', 'jpg to pdf', 'convert pdf', 'document creator', 'browser pdf']
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Create custom downloadable QR codes for links, text notes, and contact details.',
    categories: ['Other'],
    url: '../tools/qr-code-generator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>',
    keywords: ['qr code', 'barcode', 'link generator', 'scan code', 'qr maker']
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure, random passwords with custom lengths, symbols, and strength metrics.',
    categories: ['Other'],
    url: '../tools/password-generator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    keywords: ['password generator', 'strong password', 'security', 'random key']
  },
  {
    id: 'simple-calculator',
    name: 'Simple Calculator',
    description: 'Perform basic arithmetic operations quickly with a clean, responsive key interface.',
    categories: ['Other'],
    url: '../tools/simple-calculator/index.html',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="12" y1="10" x2="12" y2="18"/></svg>',
    keywords: ['calculator', 'simple math', 'addition', 'subtraction', 'multiplication', 'division']
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
