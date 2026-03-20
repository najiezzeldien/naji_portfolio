/* ============================================================
   I18N.JS — Bilingual Support (English / Arabic)
   Single-file approach: one HTML, dynamic text swap
   ============================================================ */

const translations = {
  en: {
    // Navbar
    "nav.logo": "N",
    "nav.title": "Naji.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.langSwitch": "AR",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.name": "Naji Ezzeldien",
    "hero.title": "Mobile Applications Engineer",
    "hero.description": "Building high-performance, scalable mobile applications with exceptional user experiences.",
    "hero.downloads": "Downloads",
    "hero.apps": "Published Apps",
    "hero.years": "Years Experience",

    // About
    "about.title": "About Me",
    "about.description": "Highly driven Mobile Applications Engineer with over 4 years of expertise in crafting user-focused applications for both Android and iOS platforms utilizing cross-platform frameworks. I have successfully deployed 7 applications to Google Play, the Apple App Store, and the Sunmi store, accumulating over 102,000 downloads.",
    "about.strengths": "Core Strengths",
    "about.strength1": "Developing scalable, secure, and maintainable mobile applications.",
    "about.strength2": "Architecting solutions using Clean Architecture and Clean Code principles.",
    "about.strength3": "Advanced state management (Riverpod, Bloc) and dependency injection patterns.",
    "about.strength4": "Integrating complex features: payment gateways, Firebase services, real-time communication, hardware integration.",
    "about.strength5": "Building responsive, localized applications with exceptional user experiences.",

    // Experience
    "exp.title": "Experience",
    "exp.subtitle": "My professional journey.",
    "exp.role.delmon": "Flutter Engineer",
    "exp.date.delmon": "Dec 2025 – Present",
    "exp.company.delmon": "Delmon Invest · Saudi Arabia",
    "exp.desc.delmon": "Delmon Invest is a forward-thinking investment firm driving digital innovation. Full lifecycle development and architecture of mobile applications, autonomously driving products from conception to cross-platform deployment.",
    "exp.role.becom": "Flutter Engineer",
    "exp.date.becom": "Mar 2025 – Present",
    "exp.company.becom": "Becom بِكُمْ Company · Tripoli, Libya",
    "exp.desc.becom": "Becom is a Fin-Tech firm delivering integrated software solutions for payment and e-commerce. Full lifecycle development of mobile applications for Android and iOS, encompassing new application creation, feature implementation, and bug resolution in existing solutions.",
    "exp.role.ebtekar": "Flutter Engineer",
    "exp.date.ebtekar": "Aug 2023 – Dec 2024",
    "exp.company.ebtekar": "Ebtekar Information Systems Company · Tripoli, Libya",
    "exp.desc.ebtekar": "Ebtekar Information Systems Company (EISC) is a full-service agency specializing in planning and delivering effective, innovative media and technology solutions for domestic and international clients. Full lifecycle development of mobile applications for Android and iOS.",
    "exp.role.mic": "Flutter Engineer",
    "exp.date.mic": "Nov 2019 – Mar 2022",
    "exp.company.mic": "Management Intelligence Company · Riyadh, Saudi Arabia",
    "exp.desc.mic": "Management Intelligence Company (MIC) is a startup software firm specializing in building web systems and mobile applications tailored for the Saudi market. Full lifecycle development of mobile applications and backend development contributions using ASP.NET Core Web API.",

    // Education
    "edu.title": "Education",
    "edu.master.degree": "Master in Information Technology",
    "edu.master.date": "October 2018",
    "edu.master.school": "University of Sciences and Technology, Omdurman, Sudan",
    "edu.master.desc": "Thesis focused on data mining in economics, involving collection and analysis of public opinions on the Sudanese economy from Twitter using RapidMiner Studio for data classification.",
    "edu.bachelor.degree": "Bachelor of Computer Sciences",
    "edu.bachelor.date": "October 2015",
    "edu.bachelor.school": "University of Sciences and Technology, Omdurman, Sudan",
    "edu.bachelor.desc": "Final project: Developed an Android mobile application utilizing Java for secure voice calls over Wi-Fi Direct.",

    // Projects
    "proj.title": "Featured Projects",
    "proj.subtitle": "A selection of apps I have built and shipped to production.",
    "proj.munasiq.title": "Munasiq",
    "proj.munasiq.desc": "Shared calendar & scheduling platform with real-time push notifications, advanced local scheduling, full Arabic/English localization, and cross-platform delivery (iOS, Android, Web).",
    "proj.furas.title": "Furas",
    "proj.furas.desc": "Digital platform connecting charities, stores, and students for transparent support distribution. Full-stack: Flutter mobile + backend + admin portal. App Store compliant (Guideline 2.1).",
    "proj.albaraka.title": "Albaraka Insurance",
    "proj.albaraka.desc": "Comprehensive insurance platform for Vehicle, Marine, and Travel policies. Features native FFI security (SSL pinning, XOR obfuscation), multi-payment gateways (Sadad, Adfali, Tadawul), and Firebase notifications.",
    "proj.sanad.title": "Sanad Customer",
    "proj.sanad.desc": "E-Commerce platform for digital recharge vouchers in Libya. Features payment gateway integration, wallet management, QR code generation, Gecol purchasing system, and real-time notifications.",
    "proj.merchant.title": "Sanad Merchant",
    "proj.merchant.desc": "Merchant app for selling and printing recharge vouchers. Integrated with Sunmi POS devices for native printing, WebSocket real-time streaming, and multi-payment gateway support (Moamalat, Tlync).",
    "proj.shin.title": "Shin Aljaw",
    "proj.shin.desc": "Full-featured weather application with real-time conditions, trip planning, seasonal activity tracking (planting, harvesting), and detailed marine conditions for Libya.",
    "proj.lingo.title": "Lingo",
    "proj.lingo.desc": "Educational platform with live lesson broadcasting (audio & video) using Agora Interactive Live Streaming. Features real-time communication, multimedia playback, and personalized learning paths.",
    "proj.oanywhere.title": "Office Anywhere",
    "proj.oanywhere.desc": "Internal utility application designed to streamline task management and communication across all company departments. Serving real estate companies in Saudi Arabia.",
    "proj.dmaint.title": "D-Maintenance",
    "proj.dmaint.desc": "Customer-focused mobile application enabling efficient submission of maintenance requests, feedback, suggestions, and service evaluations for real estate management.",

    // Skills
    "skills.title": "Skills",
    "skills.cat.languages": "Languages",
    "skills.cat.frameworks": "Frameworks & Libraries",
    "skills.cat.state": "State Management",
    "skills.cat.core": "Core Concepts",
    "skills.cat.arch": "Architecture & Practices",
    "skills.cat.tools": "Tools & Platforms",
    "skills.cat.advanced": "Advanced Features",
    "skills.cat.ai": "AI & Productivity",
    "skills.oop": "OOP",
    "skills.ood": "OOD",
    "skills.solid": "SOLID Principles",
    "skills.patterns": "Design Patterns",
    "skills.ds": "Data Structures",
    "skills.algo": "Algorithms",
    "skills.cleanArch": "Clean Architecture",
    "skills.cleanCode": "Clean Code",
    "skills.payment": "Payment Gateway Integration",
    "skills.hardware": "Hardware Integration",
    "skills.realtime": "Real-time Communication",
    "skills.push": "Push Notifications",
    "skills.responsive": "Responsive UI Design",
    "skills.l10n": "Localization",
    "skills.qr": "QR Code Generation/Scanning",
    "skills.ffi": "Native FFI Security",
    "skills.prompt": "Prompt Engineering",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have a project in mind? Let's work together.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.lang.en": "🇬🇧 English — Professional Working Proficiency",
    "contact.lang.ar": "🇸🇦 Arabic — Native / Bilingual Proficiency",
    "contact.copyright": "© 2026 Naji Ezzeldien. All rights reserved.",
    "contact.references": "References available upon request."
  },

  ar: {
    // Navbar
    "nav.logo": "ن",
    "nav.title": "ناجي.",
    "nav.home": "الرئيسية",
    "nav.about": "عنّي",
    "nav.experience": "الخبرات",
    "nav.education": "التعليم",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل",
    "nav.langSwitch": "EN",

    // Hero
    "hero.greeting": "مرحبًا، أنا",
    "hero.name": "ناجي عزالدين",
    "hero.title": "مهندس تطبيقات الجوّال",
    "hero.description": "بناء تطبيقات جوّال عالية الأداء وقابلة للتطوير بتجربة مستخدم استثنائية.",
    "hero.downloads": "عملية تحميل",
    "hero.apps": "تطبيقات منشورة",
    "hero.years": "سنوات خبرة",

    // About
    "about.title": "عنّي",
    "about.description": "مهندس تطبيقات جوّال متحمّس ولديه أكثر من 4 سنوات خبرة في بناء تطبيقات تركّز على المستخدم لمنصتي أندرويد و iOS باستخدام أُطر عمل متعددة المنصات. نجحت في نشر 7 تطبيقات على Google Play و Apple App Store و Sunmi Store، حققت أكثر من 102,000 عملية تحميل.",
    "about.strengths": "نقاط القوة الأساسية",
    "about.strength1": "تطوير تطبيقات جوّال قابلة للتطوير وآمنة وقابلة للصيانة.",
    "about.strength2": "تصميم حلول باستخدام Clean Architecture ومبادئ Clean Code.",
    "about.strength3": "إدارة حالة متقدمة (Riverpod, Bloc) وأنماط حقن التبعيات.",
    "about.strength4": "دمج ميزات معقدة: بوابات الدفع، خدمات Firebase، الاتصال الفوري، تكامل الأجهزة.",
    "about.strength5": "بناء تطبيقات متجاوبة ومتعددة اللغات بتجربة مستخدم استثنائية.",

    // Experience
    "exp.title": "الخبرات",
    "exp.subtitle": "مسيرتي المهنية.",
    "exp.role.delmon": "مهندس Flutter",
    "exp.date.delmon": "ديسمبر 2025 – الحالي",
    "exp.company.delmon": "دلمون للاستثمار · المملكة العربية السعودية",
    "exp.desc.delmon": "دلمون للاستثمار شركة استثمارية تدفع الابتكار الرقمي. تطوير وهندسة دورة حياة كاملة لتطبيقات الجوّال، قيادة المنتجات بشكل مستقل من الفكرة إلى النشر على جميع المنصات.",
    "exp.role.becom": "مهندس Flutter",
    "exp.date.becom": "مارس 2025 – الحالي",
    "exp.company.becom": "شركة بِكُمْ · طرابلس، ليبيا",
    "exp.desc.becom": "بِكُمْ شركة تقنية مالية تقدّم حلول برمجية متكاملة للدفع والتجارة الإلكترونية. تطوير دورة حياة كاملة لتطبيقات الجوّال لأندرويد و iOS، بما في ذلك إنشاء تطبيقات جديدة وتنفيذ الميزات وحل المشكلات.",
    "exp.role.ebtekar": "مهندس Flutter",
    "exp.date.ebtekar": "أغسطس 2023 – ديسمبر 2024",
    "exp.company.ebtekar": "شركة ابتكار لنظم المعلومات · طرابلس، ليبيا",
    "exp.desc.ebtekar": "شركة ابتكار (EISC) وكالة متكاملة متخصصة في تخطيط وتقديم حلول إعلامية وتقنية مبتكرة للعملاء المحليين والدوليين. تطوير دورة حياة كاملة لتطبيقات الجوّال.",
    "exp.role.mic": "مهندس Flutter",
    "exp.date.mic": "نوفمبر 2019 – مارس 2022",
    "exp.company.mic": "شركة الذكاء الإداري · الرياض، المملكة العربية السعودية",
    "exp.desc.mic": "شركة الذكاء الإداري (MIC) شركة ناشئة متخصصة في بناء أنظمة الويب وتطبيقات الجوّال للسوق السعودي. تطوير دورة حياة كاملة لتطبيقات الجوّال والمساهمة في تطوير الخادم باستخدام ASP.NET Core Web API.",

    // Education
    "edu.title": "التعليم",
    "edu.master.degree": "ماجستير تقنية المعلومات",
    "edu.master.date": "أكتوبر 2018",
    "edu.master.school": "جامعة العلوم والتقانة، أم درمان، السودان",
    "edu.master.desc": "أطروحة تركّز على تنقيب البيانات في الاقتصاد، تتضمن جمع وتحليل الآراء العامة حول الاقتصاد السوداني من تويتر باستخدام RapidMiner Studio لتصنيف البيانات.",
    "edu.bachelor.degree": "بكالوريوس علوم الحاسب",
    "edu.bachelor.date": "أكتوبر 2015",
    "edu.bachelor.school": "جامعة العلوم والتقانة، أم درمان، السودان",
    "edu.bachelor.desc": "مشروع التخرج: تطوير تطبيق أندرويد للمكالمات الصوتية الآمنة عبر Wi-Fi Direct باستخدام Java.",

    // Projects
    "proj.title": "المشاريع المميزة",
    "proj.subtitle": "مجموعة من التطبيقات التي بنيتها ونشرتها للاستخدام.",
    "proj.munasiq.title": "منسّق",
    "proj.munasiq.desc": "منصة تقويم مشترك وجدولة مع إشعارات فورية، جدولة محلية متقدمة، ترجمة كاملة عربي/إنجليزي، ونشر متعدد المنصات (iOS, Android, Web).",
    "proj.furas.title": "فرص",
    "proj.furas.desc": "منصة رقمية تربط الجمعيات الخيرية والمتاجر والطلاب لتوزيع الدعم بشفافية. تطوير كامل: Flutter + خادم + لوحة إدارة. متوافق مع App Store (معيار 2.1).",
    "proj.albaraka.title": "البركة للتأمين",
    "proj.albaraka.desc": "منصة تأمين شاملة للمركبات والبحري والسفر. تتميز بأمان FFI أصلي (SSL pinning, XOR obfuscation)، بوابات دفع متعددة (صدد، أدفعلي، تداول)، وإشعارات Firebase.",
    "proj.sanad.title": "سند العميل",
    "proj.sanad.desc": "منصة تجارة إلكترونية لبطاقات الشحن الرقمية في ليبيا. تتضمن بوابات دفع، إدارة محفظة، توليد QR، نظام شراء GECOL، وإشعارات فورية.",
    "proj.merchant.title": "سند التاجر",
    "proj.merchant.desc": "تطبيق التاجر لبيع وطباعة بطاقات الشحن. متكامل مع أجهزة Sunmi POS للطباعة، بث WebSocket الفوري، ودعم بوابات دفع متعددة (معاملات، تيلنك).",
    "proj.shin.title": "شن الجو",
    "proj.shin.desc": "تطبيق طقس متكامل بأحوال جوية فورية، تخطيط رحلات، تتبع أنشطة موسمية (زراعة، حصاد)، وأحوال بحرية مفصلة لليبيا.",
    "proj.lingo.title": "لينقو",
    "proj.lingo.desc": "منصة تعليمية ببث مباشر للدروس (صوت وفيديو) عبر Agora. تتضمن تواصل فوري، تشغيل وسائط متعددة، ومسارات تعلم مخصصة.",
    "proj.oanywhere.title": "Office Anywhere",
    "proj.oanywhere.desc": "تطبيق داخلي لتبسيط إدارة المهام والتواصل بين أقسام الشركة. يخدم شركات عقارية في المملكة العربية السعودية.",
    "proj.dmaint.title": "D-Maintenance",
    "proj.dmaint.desc": "تطبيق يمكّن العملاء من تقديم طلبات الصيانة والملاحظات والاقتراحات وتقييم الخدمات لإدارة العقارات.",

    // Skills
    "skills.title": "المهارات",
    "skills.cat.languages": "لغات البرمجة",
    "skills.cat.frameworks": "الأُطر والمكتبات",
    "skills.cat.state": "إدارة الحالة",
    "skills.cat.core": "المفاهيم الأساسية",
    "skills.cat.arch": "الهندسة والممارسات",
    "skills.cat.tools": "الأدوات والمنصات",
    "skills.cat.advanced": "الميزات المتقدمة",
    "skills.cat.ai": "الذكاء الاصطناعي والإنتاجية",
    "skills.oop": "البرمجة كائنية التوجه",
    "skills.ood": "التصميم كائني التوجه",
    "skills.solid": "مبادئ SOLID",
    "skills.patterns": "أنماط التصميم",
    "skills.ds": "هياكل البيانات",
    "skills.algo": "الخوارزميات",
    "skills.cleanArch": "العمارة النظيفة",
    "skills.cleanCode": "الكود النظيف",
    "skills.payment": "تكامل بوابات الدفع",
    "skills.hardware": "تكامل الأجهزة",
    "skills.realtime": "الاتصال الفوري",
    "skills.push": "الإشعارات الفورية",
    "skills.responsive": "تصميم واجهات متجاوبة",
    "skills.l10n": "التعريب والترجمة",
    "skills.qr": "توليد/مسح QR Code",
    "skills.ffi": "أمان FFI الأصلي",
    "skills.prompt": "هندسة الأوامر",

    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "لديك مشروع؟ لنعمل معًا.",
    "contact.email": "البريد",
    "contact.phone": "الهاتف",
    "contact.lang.en": "🇬🇧 الإنجليزية — كفاءة عمل مهنية",
    "contact.lang.ar": "🇸🇦 العربية — لغة أم",
    "contact.copyright": "© 2026 ناجي عزالدين. جميع الحقوق محفوظة.",
    "contact.references": "المراجع متاحة عند الطلب."
  }
};

/* ── Language State ──────────────────────────────────────────── */
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// Apply saved language on load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});

/* ── Toggle Language ─────────────────────────────────────────── */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('portfolio-lang', currentLang);
  applyLanguage(currentLang);
}

/* ── Apply Language ──────────────────────────────────────────── */
function applyLanguage(lang) {
  const html = document.documentElement;

  // Set direction and language
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  html.lang = lang;

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update page title
  if (lang === 'ar') {
    document.title = 'ناجي عزالدين — مهندس تطبيقات الجوّال | Portfolio';
  } else {
    document.title = 'Naji Ezzeldien — Mobile Applications Engineer | Portfolio';
  }
}
