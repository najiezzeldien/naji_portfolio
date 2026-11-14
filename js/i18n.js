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
    "hero.title": "Senior Mobile Applications Engineer",
    "hero.description": "Designing, building, and shipping production Android & iOS applications with Flutter and ASP.NET Core Web API.",
    "hero.downloads": "Downloads",
    "hero.apps": "Published Apps",
    "hero.years": "Years Experience",

    // About
    "about.title": "About Me",
    "about.description": "Mobile Applications Engineer with over 5 years of hands-on experience designing, building, and shipping cross-platform Android and iOS applications using Flutter alongside ASP.NET Core Web API backends. Shipped 9 production applications across Google Play, the Apple App Store, and the Sunmi POS Store, surpassing 102,000 cumulative downloads.",
    "about.strengths": "Core Strengths",
    "about.strength1": "End-to-end mobile and backend engineering using Flutter, ASP.NET Core (.NET 10, CQRS/MediatR), EF Core, and SQL Server under Clean Architecture.",
    "about.strength2": "Predictable state management and modular dependency injection (Riverpod, Bloc/Cubit, Provider, GetX, Freezed, get_it/Injectable).",
    "about.strength3": "Mobile & backend security: Dart FFI (C/C++) secret obfuscation, SSL pinning, AES-256/SHA-256 PII protection, biometrics, and root/jailbreak checks.",
    "about.strength4": "Complex integrations: AI voice agents & LLMs (Gemini API, Retell AI), payment gateways, POS thermal printers (Native Java), Agora, SignalR, and WebSockets.",
    "about.strength5": "Platform-level debugging, native Swift/Kotlin plugins, Android NDK (16KB page alignment), and full Arabic/English (RTL/LTR) localization.",

    // Experience
    "exp.title": "Experience",
    "exp.subtitle": "My professional journey.",
    "exp.role.mic_current": "Senior Flutter Engineer",
    "exp.date.mic_current": "Dec 2025 – Present (On-Site)",
    "exp.company.mic_current": "Management Intelligence Company (MIC) · Riyadh, Saudi Arabia",
    "exp.desc.mic_current": "Rejoined MIC to lead Flutter mobile architecture (Riverpod, Clean Architecture), enterprise REST/OData integration, and full-stack ASP.NET Core Web API development—redesigning the O-Anywhere mobile app from scratch and building Home Secretary and Munasiq.",
    "exp.role.becom": "Flutter Engineer",
    "exp.date.becom": "Mar 2025 – Present (Full-Time: Mar–Nov 2025 | Part-Time Remote: Dec 2025–Present)",
    "exp.company.becom": "Becom بِكُمْ Company · Tripoli, Libya",
    "exp.desc.becom": "FinTech company delivering digital payment, e-commerce, and POS ecosystems. Developing and maintaining production Android, iOS, and Sunmi POS applications with Dart FFI (C) secret obfuscation, SSL pinning, local payment gateways, and native POS thermal printing.",
    "exp.role.ebtekar": "Flutter Engineer",
    "exp.date.ebtekar": "Aug 2023 – Dec 2024",
    "exp.company.ebtekar": "Ebtekar Information Systems Company (EISC) · Tripoli, Libya",
    "exp.desc.ebtekar": "Full-service technology agency delivering mobile and media solutions. Led end-to-end architecture and delivery of production Android and iOS applications, including live audio/video classrooms with Agora and localized weather & marine forecasting.",
    "exp.role.mic": "Flutter Engineer",
    "exp.date.mic": "Nov 2019 – Mar 2022",
    "exp.company.mic": "Management Intelligence Company (MIC) · Riyadh, Saudi Arabia",
    "exp.desc.mic": "Full-lifecycle Flutter mobile development and backend API engineering in ASP.NET Core Web API (C#) serving 3+ major Saudi real estate companies—contributing to the v1 foundation of O-Anywhere, multi-channel notification services (Push, WhatsApp, SMS), and Hijri/Gregorian billing synchronization.",

    // Education
    "edu.title": "Education",
    "edu.master.degree": "Master in Information Technology",
    "edu.master.date": "October 2018",
    "edu.master.school": "University of Sciences and Technology, Omdurman, Sudan",
    "edu.master.desc": "Thesis focused on data mining in economics, collecting and classifying public sentiment on the Sudanese economy from Twitter using RapidMiner Studio.",
    "edu.bachelor.degree": "Bachelor of Computer Sciences",
    "edu.bachelor.date": "October 2015",
    "edu.bachelor.school": "University of Sciences and Technology, Omdurman, Sudan",
    "edu.bachelor.desc": "Final project: Developed a native Android application in Java for encrypted peer-to-peer voice calls over Wi-Fi Direct.",

    // Projects
    "proj.title": "Featured Projects",
    "proj.subtitle": "Production applications built and shipped across Google Play, App Store, and Sunmi POS.",
    "proj.oanywhere.title": "O-Anywhere",
    "proj.oanywhere.desc": "Enterprise workflow mobile app redesigned from scratch in Flutter (Riverpod 3, Clean Architecture) and integrated with MIC's multi-tenant backend—featuring an embedded Form.io engine, multi-tier approvals, biometric security, and native Swift/Kotlin PDF print patches.",
    "proj.homesecretary.title": "Home Secretary",
    "proj.homesecretary.desc": "Full-stack AI voice-agent & smart calling platform built with Flutter (Riverpod 3, custom ar-SA dictation engine) and ASP.NET Core (.NET 10, CQRS/MediatR, SignalR, Transactional Outbox) orchestrating Retell AI phone calls, Gemini NLP Hijri/Gregorian scheduling, and AES-256 PII encryption.",
    "proj.munasiq.title": "Munasiq",
    "proj.munasiq.desc": "Cross-platform shared calendar & scheduling app (iOS, Android, Web) pairing multi-source timeline sync, FCM + timezone-aware local notifications, and standardized ARB localization.",
    "proj.albaraka.title": "Albaraka Insurance",
    "proj.albaraka.desc": "InsurTech platform for Vehicle, Marine, and Travel policy issuance using Bloc/Cubit, native C FFI secret obfuscation, SSL pinning, and local payment gateways (Sadad, Adfali, Tadawul).",
    "proj.sanad.title": "Sanad Customer",
    "proj.sanad.desc": "B2C digital marketplace for telecom cards and utility vouchers in Libya, featuring a real-time digital wallet, Moamalat payment flows, Gecol electricity billing, and Firebase App Check.",
    "proj.merchant.title": "Sanad Merchant",
    "proj.merchant.desc": "Merchant platform for selling and printing digital vouchers, featuring native Java thermal printing on Sunmi POS terminals, Socket.io live transaction streaming, and WebView JS payment bridging.",
    "proj.sanadagent.title": "Sanad Agent",
    "proj.sanadagent.desc": "Field-agent verification and low-latency QR ticket scanning app built with Riverpod and mobile_scanner, paired with manual-entry fallbacks and FFI-hardened API requests.",
    "proj.lingo.title": "Lingo",
    "proj.lingo.desc": "EdTech platform featuring live audio and video lesson broadcasting via Agora Interactive Live Streaming, real-time classroom events over Laravel WebSockets, and recorded media playback.",
    "proj.shin.title": "Shin Aljaw",
    "proj.shin.desc": "Localized weather & marine forecasting app covering real-time conditions, trip planning, and seasonal agricultural calendars, architected with Riverpod, Dio, and GoRouter.",

    // Skills
    "skills.title": "Skills",
    "skills.cat.languages": "Languages",
    "skills.cat.frameworks": "Frameworks & Backend",
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

    // Store Button Labels
    "store.apple": "App Store",
    "store.google": "Google Play",
    "store.pos": "Sunmi POS Store",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have a project in mind? Let's work together.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.cv": "CV",
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
    "hero.title": "مهندس أول لتطبيقات الجوّال",
    "hero.description": "تصميم وبناء ونشر تطبيقات أندرويد و iOS احترافية باستخدام Flutter و ASP.NET Core Web API.",
    "hero.downloads": "عملية تحميل",
    "hero.apps": "تطبيقات منشورة",
    "hero.years": "سنوات خبرة",

    // About
    "about.title": "عنّي",
    "about.description": "مهندس تطبيقات جوّال بخبرة عملية تتجاوز 5 سنوات في تصميم وبناء ونشر تطبيقات أندرويد و iOS متعددة المنصات باستخدام Flutter إلى جانب تطوير الخوادم بـ ASP.NET Core Web API. نشرت 9 تطبيقات إنتاجية على Google Play و Apple App Store ومتجر Sunmi POS بإجمالي يتجاوز 102,000 عملية تحميل.",
    "about.strengths": "نقاط القوة الأساسية",
    "about.strength1": "تطوير متكامل لتطبيقات الجوّال والواجهات الخلفية باستخدام Flutter و ASP.NET Core (.NET 10, CQRS/MediatR) و EF Core و SQL Server وفق Clean Architecture.",
    "about.strength2": "إدارة حالة موثوقة وحقن تبعيات معياري باستخدام (Riverpod, Bloc/Cubit, Provider, GetX, Freezed, get_it/Injectable).",
    "about.strength3": "أمان الجوّال والخوادم: إخفاء المفاتيح عبر Dart FFI (C/C++)، ربط شهادات SSL، تشفير البيانات الشخصية (AES-256/SHA-256)، والمصادقة البيومترية.",
    "about.strength4": "تكاملات متقدمة: وكلاء المكالمات الصوتية والذكاء الاصطناعي (Gemini API, Retell AI)، بوابات الدفع، طابعات Sunmi POS (Native Java)، و Agora و SignalR.",
    "about.strength5": "تشخيص أعطال المنصات الأصلية، تطوير إضافات Swift/Kotlin، تهيئة Android NDK (توافق 16KB)، ودعم كامل للعربية والإنجليزية (RTL/LTR).",

    // Experience
    "exp.title": "الخبرات",
    "exp.subtitle": "مسيرتي المهنية.",
    "exp.role.mic_current": "مهندس Flutter أول",
    "exp.date.mic_current": "ديسمبر 2025 – الحالي (حضوري)",
    "exp.company.mic_current": "شركة الذكاء الإداري (MIC) · الرياض، المملكة العربية السعودية",
    "exp.desc.mic_current": "عدتُ للانضمام إلى شركة الذكاء الإداري (MIC) لقيادة هندسة تطبيقات الجوّال (Flutter, Riverpod) وربط الأنظمة المؤسسية وتطوير الواجهات الخلفية (ASP.NET Core Web API)، شمل إعادة تصميم وبناء تطبيق O-Anywhere من الصفر وتطوير تطبيقي السكرتير المنزلي ومنسّق.",
    "exp.role.becom": "مهندس Flutter",
    "exp.date.becom": "مارس 2025 – الحالي (دوام كامل: مارس–نوفمبر 2025 | جزئي عن بُعد: ديسمبر 2025–الحالي)",
    "exp.company.becom": "شركة بِكُمْ · طرابلس، ليبيا",
    "exp.desc.becom": "شركة تقنية مالية تقدّم حلول الدفع الرقمي والتجارة الإلكترونية ونقاط البيع. تطوير وصيانة تطبيقات أندرويد و iOS وأجهزة Sunmi POS مع تحصين أمني عبر Dart FFI (C) وربط بوابات الدفع والطباعة الحرارية.",
    "exp.role.ebtekar": "مهندس Flutter",
    "exp.date.ebtekar": "أغسطس 2023 – ديسمبر 2024",
    "exp.company.ebtekar": "شركة ابتكار لنظم المعلومات (EISC) · طرابلس، ليبيا",
    "exp.desc.ebtekar": "شركة تقنية متكاملة لتطوير الحلول الرقمية وتطبيقات الجوّال. قيادة تطوير وإطلاق تطبيقات أندرويد و iOS إنتاجية شملت الفصول التفاعلية بالبث المباشر عبر Agora ومنصة الطقس والملاحة البحرية.",
    "exp.role.mic": "مهندس Flutter",
    "exp.date.mic": "نوفمبر 2019 – مارس 2022",
    "exp.company.mic": "شركة الذكاء الإداري (MIC) · الرياض، المملكة العربية السعودية",
    "exp.desc.mic": "تطوير تطبيقات الجوّال بـ Flutter والواجهات الخلفية بـ ASP.NET Core Web API (C#) لخدمة كبرى شركات العقارات في السعودية، شمل تأسيس النسخة الأولى من تطبيق O-Anywhere وخدمات الإشعارات متعددة القنوات ومزامنة الفوترة الهجرية والميلادية.",

    // Education
    "edu.title": "التعليم",
    "edu.master.degree": "ماجستير تقنية المعلومات",
    "edu.master.date": "أكتوبر 2018",
    "edu.master.school": "جامعة العلوم والتقانة، أم درمان، السودان",
    "edu.master.desc": "رسالة الماجستير في تنقيب البيانات الاقتصادية، شملت جمع وتصنيف توجهات الرأي العام حول الاقتصاد السوداني على منصة تويتر باستخدام RapidMiner Studio.",
    "edu.bachelor.degree": "بكالوريوس علوم الحاسب",
    "edu.bachelor.date": "أكتوبر 2015",
    "edu.bachelor.school": "جامعة العلوم والتقانة، أم درمان، السودان",
    "edu.bachelor.desc": "مشروع التخرج: تطوير تطبيق أندرويد بلغة Java لإجراء مكالمات صوتية مشفرة مباشرة بين الأجهزة عبر تقنية Wi-Fi Direct.",

    // Projects
    "proj.title": "المشاريع المميزة",
    "proj.subtitle": "تطبيقات إنتاجية قمت ببنائها ونشرها على Google Play و App Store ومتجر Sunmi POS.",
    "proj.oanywhere.title": "O-Anywhere",
    "proj.oanywhere.desc": "تطبيق مؤسسي لإدارة المهام وسير العمل أُعيد تصميمه وبناؤه من الصفر بـ Flutter (Riverpod 3, Clean Architecture) وربطه بالنظام الخلفي متعدد المستأجرين، يتضمن محرك نماذج Form.io، مسارات اعتماد متعددة، مصادقة بيومترية، ومعالجات طباعة PDF أصلية بـ Swift و Kotlin.",
    "proj.homesecretary.title": "السكرتير المنزلي",
    "proj.homesecretary.desc": "منصة متكاملة للمكالمات الصوتية الذكية وجدولة المهام بـ Flutter (Riverpod 3 ومحرك إملاء صوتي مخصص) و ASP.NET Core (.NET 10, CQRS/MediatR, SignalR, Transactional Outbox) لإدارة مكالمات Retell AI التفاعلية، الجدولة اللغوية عبر Gemini API (هجري/ميلادي)، وتشفير الأرقام بـ AES-256.",
    "proj.munasiq.title": "منسّق",
    "proj.munasiq.desc": "تطبيق تقويم مشترك وجدولة متعدد المنصات (iOS, Android, Web) يجمع الأحداث من عدة مصادر مع إشعارات فورية وجدولة محلية تراعي المناطق الزمنية ودعم عربي/إنجليزي.",
    "proj.albaraka.title": "البركة للتأمين",
    "proj.albaraka.desc": "منصة لإصدار وإدارة وثائق تأمين المركبات والتأمين البحري والسفر باستخدام Bloc/Cubit، مع تحصين أمني عبر C FFI وربط بوابات الدفع المحلية (سداد، ادفعلي، تداول).",
    "proj.sanad.title": "سند (Sanad Customer)",
    "proj.sanad.desc": "متجر رقمي لبطاقات الاتصالات والقسائم الإلكترونية في ليبيا، يتضمن محفظة رقمية فورية، الدفع عبر بوابة معاملات، وشراء قسائم الكهرباء (Gecol) مع حماية App Check.",
    "proj.merchant.title": "سند التاجر",
    "proj.merchant.desc": "منصة التجار لبيع وطباعة القسائم الرقمية، تدعم الطباعة الحرارية الأصلية بلغة Java على أجهزة Sunmi POS، البث المباشر للعمليات عبر Socket.io، وربط بوابات الدفع.",
    "proj.sanadagent.title": "سند العميل (Sanad Agent)",
    "proj.sanadagent.desc": "تطبيق ميداني للتحقق الفوري من التذاكر ومسح رموز QR بزمن استجابة منخفض باستخدام Riverpod و mobile_scanner مع بديل إدخال يدوي وطلبات محمية بـ C FFI.",
    "proj.lingo.title": "لينقو",
    "proj.lingo.desc": "منصة تعليمية لبث الدروس المباشرة صوتًا وصورة عبر Agora Interactive Live Streaming مع تفاعل لحظي عبر Laravel WebSockets وتشغيل الدروس المسجلة.",
    "proj.shin.title": "شن الجو",
    "proj.shin.desc": "تطبيق طقس وملاحة بحرية محلي يغطي الأحوال الجوية الفورية، تخطيط الرحلات، والمواسم الزراعية، مبني بمعمارية نظيفة باستخدام Riverpod و Dio و GoRouter.",

    // Skills
    "skills.title": "المهارات",
    "skills.cat.languages": "لغات البرمجة",
    "skills.cat.frameworks": "الأُطر والواجهات الخلفية",
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

    // Store Button Labels
    "store.apple": "App Store",
    "store.google": "Google Play",
    "store.pos": "متجر Sunmi POS",

    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "لديك مشروع؟ لنعمل معًا.",
    "contact.email": "البريد",
    "contact.phone": "الهاتف",
    "contact.cv": "السيرة الذاتية",
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
    document.title = 'ناجي عزالدين — مهندس أول لتطبيقات الجوّال (Flutter) | Portfolio';
  } else {
    document.title = 'Naji Ezzeldien — Senior Mobile Applications Engineer (Flutter) | Portfolio';
  }
}
