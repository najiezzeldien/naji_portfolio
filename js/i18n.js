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
    "about.description": "Mobile Applications Engineer with over 5 years of hands-on experience designing, building, and shipping cross-platform Android and iOS applications using Flutter alongside ASP.NET Core Web API backends. Shipped 10 production applications across Google Play, the Apple App Store, and the Sunmi POS Store, surpassing 102,000 cumulative downloads.",
    "about.strengths": "Core Strengths",
    "about.strength1": "End-to-end mobile, web, and backend engineering using Flutter, ASP.NET Core (.NET 10, CQRS/MediatR), EF Core, SQL Server, and Angular under Clean Architecture.",
    "about.strength2": "Predictable state management and modular dependency injection (Riverpod, Bloc/Cubit, Provider, GetX, Freezed, get_it/Injectable).",
    "about.strength3": "Security & Zero-Knowledge E2EE: PBKDF2/HKDF & AES-256-GCM vaults, Dart FFI (C/C++) secret obfuscation, SSL pinning, HMAC/SHA-256 blind indexing, and biometrics.",
    "about.strength4": "Complex integrations: AI voice agents & LLMs (Gemini API, Retell AI), payment gateways, POS thermal printers (Native Java), Agora, SignalR, and WebSockets.",
    "about.strength5": "Native OS extensions & interop: iOS Credential Provider (Swift), Android Autofill/IME (Kotlin), NDK 16KB page alignment, Chrome MV3, and RTL/LTR localization.",

    // Experience
    "exp.title": "Experience",
    "exp.subtitle": "My professional journey.",
    "exp.role.mic_current": "Senior Flutter Engineer",
    "exp.date.mic_current": "Dec 2025 – Present (On-Site)",
    "exp.company.mic_current": "Management Intelligence Company (MIC) · Riyadh, Saudi Arabia",
    "exp.desc.mic_current": "Rejoined MIC to lead Flutter mobile architecture (Riverpod, Clean Architecture), enterprise REST/OData integration, and full-stack ASP.NET Core Web API development—redesigning the O-Anywhere mobile app from scratch and building AppKey, Home Secretary, and Munasiq.",
    "exp.role.becom": "Flutter Engineer",
    "exp.date.becom": "Mar 2025 – Present (Full-Time: Mar–Nov 2025 | Part-Time Remote: Dec 2025–Present)",
    "exp.company.becom": "Becom بِكُمْ Company · Tripoli, Libya",
    "exp.desc.becom": "FinTech company delivering digital payment, e-commerce, and POS ecosystems. Developing and maintaining production Android, iOS, and Sunmi POS applications with C99 Dart FFI secret/root/Frida hardening, ML Kit passport OCR, local payment gateways, and native POS thermal printing.",
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
    "proj.appkey.title": "AppKey",
    "proj.appkey.desc": "Zero-knowledge E2EE identity vault & smart autofill platform spanning Flutter (Riverpod 3, C FFI), native iOS AutoFill Credential Provider (Swift) & Android Autofill/IME (Kotlin), a 5-layer ASP.NET Core (.NET 10) policy & Gemini schema engine, an Angular RTL dashboard, and a Chrome MV3 extension.",
    "proj.homesecretary.title": "Home Secretary",
    "proj.homesecretary.desc": "Full-stack AI voice-agent & smart calling platform built with Flutter (Riverpod 3, custom ar-SA dictation engine) and ASP.NET Core (.NET 10, CQRS/MediatR, SignalR, Transactional Outbox) orchestrating Retell AI phone calls, Gemini NLP Hijri/Gregorian scheduling, and AES-256 PII encryption.",
    "proj.munasiq.title": "Munasiq",
    "proj.munasiq.desc": "Cross-platform shared calendar (iOS, Android, Web) built with Riverpod 3, Cloud Firestore WriteBatches, conditional Drift/SQLite (sql-wasm), Firebase Custom Token OTP auth, /join/:groupId deep-link previews, and memoized Umm Al-Qura Hijri/Gregorian sync.",
    "proj.albaraka.title": "Albaraka Insurance",
    "proj.albaraka.desc": "Multi-line InsurTech platform for Vehicle, Orange Card, Marine, and Travel policies plus Claims, Wallet, and PDF policy viewing—featuring an on-device ML Kit MRZ/VIZ passport OCR scanner, 6 Libyan payment methods (Sadad, Adfali, Tadawul, Yusor Pay, Libyana Pay, Wallet), and C99 FFI device-integrity hardening.",
    "proj.sanad.title": "Sanad Customer",
    "proj.sanad.desc": "B2C FinTech & digital services super-app (27 Riverpod 3 modules) spanning vouchers, eSIMs, event booking with QR ticket passes, embedded Vehicle/Travel insurance, GECOL electricity meter profiles, KYC & 2FA, 5 Libyan gateways (Moamalat, Sadad, T-Lync, Adfali, Libyana Pay), and Play Integrity / App Attest.",
    "proj.merchant.title": "Sanad Merchant",
    "proj.merchant.desc": "Multi-flavor (store/pos) B2B reseller & POS platform built with Riverpod 3—covering sub-reseller management, prepaid/debt/profit ledgers, GECOL sales, a dart:ui Canvas RTL bitmap thermal engine for Sunmi V2/P2/P3 POS, 5 payment rails (Moamalat, T-Lync, Sadad, Adfali, LYPAY), Socket.IO agent QR sync, and GMS-free Pushy MQTT.",
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
    "skills.e2ee": "Zero-Knowledge E2EE (AES-256-GCM)",
    "skills.autofill": "Native OS Autofill (iOS & Android)",
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
    "about.description": "مهندس تطبيقات جوّال بخبرة عملية تتجاوز 5 سنوات في تصميم وبناء ونشر تطبيقات أندرويد و iOS متعددة المنصات باستخدام Flutter إلى جانب تطوير الخوادم بـ ASP.NET Core Web API. نشرت 10 تطبيقات إنتاجية على Google Play و Apple App Store ومتجر Sunmi POS بإجمالي يتجاوز 102,000 عملية تحميل.",
    "about.strengths": "نقاط القوة الأساسية",
    "about.strength1": "تطوير متكامل لتطبيقات الجوّال والويب والواجهات الخلفية باستخدام Flutter و ASP.NET Core (.NET 10, CQRS/MediatR) و EF Core و SQL Server و Angular وفق Clean Architecture.",
    "about.strength2": "إدارة حالة موثوقة وحقن تبعيات معياري باستخدام (Riverpod, Bloc/Cubit, Provider, GetX, Freezed, get_it/Injectable).",
    "about.strength3": "الأمان والتشفير الطرفي عديم المعرفة (E2EE): خزائن AES-256-GCM (PBKDF2/HKDF)، إخفاء المفاتيح عبر Dart FFI (C/C++)، ربط شهادات SSL، والفهرسة العمياء (HMAC/SHA-256).",
    "about.strength4": "تكاملات متقدمة: وكلاء المكالمات الصوتية والذكاء الاصطناعي (Gemini API, Retell AI)، بوابات الدفع، طابعات Sunmi POS (Native Java)، و Agora و SignalR.",
    "about.strength5": "امتدادات الأنظمة الأصلية: مزود التعبئة التلقائية في iOS (Swift)، خدمات Autofill ولوحة المفاتيح الذكية في أندرويد (Kotlin)، تهيئة NDK (16KB)، وإضافات Chrome MV3.",

    // Experience
    "exp.title": "الخبرات",
    "exp.subtitle": "مسيرتي المهنية.",
    "exp.role.mic_current": "مهندس Flutter أول",
    "exp.date.mic_current": "ديسمبر 2025 – الحالي (حضوري)",
    "exp.company.mic_current": "شركة الذكاء الإداري (MIC) · الرياض، المملكة العربية السعودية",
    "exp.desc.mic_current": "عدتُ للانضمام إلى شركة الذكاء الإداري (MIC) لقيادة هندسة تطبيقات الجوّال (Flutter, Riverpod) وربط الأنظمة المؤسسية وتطوير الواجهات الخلفية (ASP.NET Core Web API)، شمل إعادة تصميم وبناء تطبيق O-Anywhere من الصفر وتطوير منصات مفتاح التطبيقات (AppKey) والسكرتير المنزلي ومنسّق.",
    "exp.role.becom": "مهندس Flutter",
    "exp.date.becom": "مارس 2025 – الحالي (دوام كامل: مارس–نوفمبر 2025 | جزئي عن بُعد: ديسمبر 2025–الحالي)",
    "exp.company.becom": "شركة بِكُمْ · طرابلس، ليبيا",
    "exp.desc.becom": "شركة تقنية مالية تقدّم حلول الدفع الرقمي والتجارة الإلكترونية ونقاط البيع. تطوير وصيانة تطبيقات أندرويد و iOS وأجهزة Sunmi POS مع تحصين أمني عبر C99 Dart FFI، مسح الجوازات بـ ML Kit OCR، بوابات الدفع المحلية، والطباعة الحرارية.",
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
    "proj.appkey.title": "مفتاح التطبيقات (AppKey)",
    "proj.appkey.desc": "منصة خزنة هوية مشفّرة طرفيًا (Zero-Knowledge E2EE) وتعبئة تلقائية ذكية تجمع تطبيق Flutter (Riverpod 3, C FFI) مع امتدادات iOS Credential Provider (Swift) وخدمات أندرويد Autofill ولوحة مفاتيح IME (Kotlin)، وخادم ASP.NET Core (.NET 10) بـ 5 طبقات مع تصنيف الحقول بـ Gemini API، ولوحة ويب Angular وإضافة Chrome MV3.",
    "proj.homesecretary.title": "السكرتير المنزلي",
    "proj.homesecretary.desc": "منصة متكاملة للمكالمات الصوتية الذكية وجدولة المهام بـ Flutter (Riverpod 3 ومحرك إملاء صوتي مخصص) و ASP.NET Core (.NET 10, CQRS/MediatR, SignalR, Transactional Outbox) لإدارة مكالمات Retell AI التفاعلية، الجدولة اللغوية عبر Gemini API (هجري/ميلادي)، وتشفير الأرقام بـ AES-256.",
    "proj.munasiq.title": "منسّق",
    "proj.munasiq.desc": "منصة تقويم مشترك وجدولة متعددة المنصات (iOS, Android, Web) بـ Riverpod 3 و Cloud Firestore WriteBatches و Drift/SQLite (sql-wasm للويب)، مع مصادقة OTP عبر Firebase Custom Tokens، روابط دعوة فورية (/join/:groupId)، ومزامنة تقويم أم القرى الهجري/الميلادي.",
    "proj.albaraka.title": "البركة للتأمين",
    "proj.albaraka.desc": "منصة تأمين شاملة لوثائق المركبات والبطاقة البرتقالية والتأمين البحري والسفر مع إدارة المطالبات والمحفظة وعرض الوثائق PDF، تتضمن ماسح جوازات ذكي على الجهاز (ML Kit MRZ/VIZ OCR)، و 6 وسائل دفع ليبية (سداد، ادفعلي، تداول، يسر باي، ليبيانا باي، المحفظة)، وتحصين C99 FFI.",
    "proj.sanad.title": "سند (Sanad Customer)",
    "proj.sanad.desc": "تطبيق خدمات مالية ورقمية شامل (Super-App بـ 27 وحدة برمجية على Riverpod 3) يجمع القسائم الرقمية، شرائح eSIM الدولية، حجز الفعاليات وتذاكر QR، التأمين المدمج، شحن عدادات الكهرباء (GECOL)، توثيق الهوية KYC و 2FA، و 5 بوابات دفع (معاملات، سداد، T-Lync، ادفعلي، ليبيانا باي) مع حماية App Check.",
    "proj.merchant.title": "سند التاجر",
    "proj.merchant.desc": "منصة تجار وموزعين متعددة البيئات (store/pos) مبنية بـ Riverpod 3، تشمل إدارة الموزعين الفرعيين، محافظ الدفع المسبق والآجل وتحويل الأرباح، مبيعات الكهرباء (GECOL)، محرك طباعة حرارية عبر dart:ui Canvas لأجهزة Sunmi V2/P2/P3، و5 قنوات دفع (معاملات، T-Lync، سداد، ادفعلي، LYPAY) مع مزامنة QR عبر Socket.IO وإشعارات Pushy MQTT.",
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
    "skills.e2ee": "تشفير طرفي عديم المعرفة (AES-256-GCM)",
    "skills.autofill": "التعبئة التلقائية الأصلية (iOS & Android)",
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
