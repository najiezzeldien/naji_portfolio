/* ============================================================
   I18N.JS — Bilingual Content & Project Case Studies (EN / AR)
   ============================================================ */

const translations = {
  en: {
    // Accessibility & Navigation
    "nav.skip": "Skip to main content",
    "nav.primaryLabel": "Primary",
    "nav.logo": "N",
    "nav.title": "Naji Ezzeldien",
    "nav.roleTag": "Senior Flutter Engineer",
    "nav.menuBtn": "Menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.langSwitch": "العربية",
    "nav.langSwitchShort": "AR",
    "nav.cvShort": "CV",
    "theme.toDark": "Switch to dark theme",
    "theme.toLight": "Switch to light theme",

    // Hero
    "hero.badge": "Available for Senior Flutter & Mobile Engineering Roles · Riyadh, KSA",
    "hero.greeting": "Hello, I am",
    "hero.name": "Naji Ezzeldien",
    "hero.title": "Senior Mobile Applications Engineer",
    "hero.subtitle": "Flutter & Dart · Clean Architecture · iOS, Android, Web & POS",
    "hero.description": "Over 5 years of hands-on experience architecting, building, and shipping high-trust Flutter applications across FinTech, POS hardware, InsurTech, and enterprise platforms—augmented by AI-assisted native bridges and REST API delivery.",
    "hero.cta.cv": "Download CV (PDF)",
    "hero.cta.projects": "Explore 10 Published Apps",
    "hero.cta.contact": "Get in Touch",
    "hero.stat.downloads.num": "102K+",
    "hero.stat.downloads.label": "Cumulative Store Downloads",
    "hero.stat.apps.num": "10",
    "hero.stat.apps.label": "Published Production Apps",
    "hero.stat.years.num": "5+",
    "hero.stat.years.label": "Years of Production Experience",
    "hero.stat.stores": "Google Play · Apple App Store · Sunmi POS",

    // About
    "about.eyebrow": "Engineering Profile",
    "about.title": "About Me",
    "about.description": "Senior Mobile Applications Engineer with over 5 years of hands-on experience designing, building, and shipping cross-platform iOS, Android, Web, and POS applications using Flutter and Dart. Shipped 10 production applications across Google Play, the Apple App Store, and the Sunmi POS Store, surpassing 102,000 cumulative downloads across Saudi Arabia and Libya—while leveraging AI-augmented workflows for supporting native bridges and REST backends.",
    "about.strengths": "Core Engineering Pillars",
    "about.s1.title": "Scalable Flutter Architecture",
    "about.s1.desc": "Feature-first Clean Architecture, SOLID principles, MVVM, multi-flavor builds, and full RTL/LTR & Umm Al-Qura localization.",
    "about.s2.title": "Predictable State & Modular DI",
    "about.s2.desc": "Scalable multi-module codebases built with Riverpod 3, Bloc/Cubit, Provider, GetX, Freezed, fpdart, and get_it/Injectable.",
    "about.s3.title": "Mobile Security & Cloud Sync",
    "about.s3.desc": "Client-side AES-256-GCM encryption, SSL pinning, Biometrics, App Check (Play Integrity / App Attest), Firestore, and Drift/SQLite.",
    "about.s4.title": "FinTech, POS Hardware & Realtime",
    "about.s4.desc": "Multi-rail payment gateways, Sunmi POS dart:ui Canvas thermal printing, SignalR, Socket.IO, WebSockets, Pushy MQTT, and Agora.",
    "about.s5.title": "AI Integrations & Augmented Delivery",
    "about.s5.desc": "Integrating Gemini API, Retell AI voice agents, and ML Kit OCR into Flutter apps, plus AI-assisted delivery of supporting Swift/Kotlin bridges, Dart FFI, and ASP.NET Core APIs.",

    // Experience
    "exp.eyebrow": "Career Trajectory",
    "exp.title": "Professional Experience",
    "exp.subtitle": "Leading cross-platform Flutter architecture across enterprise, FinTech, POS, InsurTech, and EdTech ecosystems.",
    "exp.role.mic_current": "Senior Flutter Engineer",
    "exp.date.mic_current": "Dec 2025 – Present · On-Site",
    "exp.company.mic_current": "Management Intelligence Company (MIC) · Riyadh, Saudi Arabia",
    "exp.desc.mic_current": "Leading Flutter mobile architecture (Riverpod 3, Clean Architecture), complex enterprise REST/OData integrations, and AI-augmented end-to-end delivery across supporting native extensions and ASP.NET Core Web API services—redesigning O-Anywhere from scratch and shipping AppKey, Home Secretary, and Munasiq.",
    "exp.role.becom": "Flutter Engineer",
    "exp.date.becom": "Mar 2025 – Present · Full-Time (Mar–Nov 2025) | Part-Time Remote (Dec 2025–Present)",
    "exp.company.becom": "Becom بِكُمْ Company · Tripoli, Libya",
    "exp.desc.becom": "FinTech company delivering digital payment, e-commerce, and POS ecosystems. Developing and maintaining production Android, iOS, and Sunmi POS Flutter applications with modular Clean Architecture, multi-gateway payment flows, on-device ML Kit passport OCR, SSL pinning, App Check, and POS thermal printing.",
    "exp.role.ebtekar": "Flutter Engineer",
    "exp.date.ebtekar": "Aug 2023 – Dec 2024",
    "exp.company.ebtekar": "Ebtekar Information Systems Company (EISC) · Tripoli, Libya",
    "exp.desc.ebtekar": "Full-service technology agency delivering mobile and media solutions. Led end-to-end architecture and delivery of production Android and iOS applications, including live audio/video classrooms with Agora and localized weather & marine forecasting.",
    "exp.role.mic": "Flutter Engineer",
    "exp.date.mic": "Nov 2019 – Mar 2022",
    "exp.company.mic": "Management Intelligence Company (MIC) · Riyadh, Saudi Arabia",
    "exp.desc.mic": "Full-lifecycle Flutter mobile application development and REST API integration with ASP.NET Core backends serving 3+ major Saudi real estate enterprises—contributing to the v1 foundation of O-Anywhere, multi-channel workflow alerts (Push, WhatsApp, SMS), and Hijri/Gregorian billing schedule alignment.",
    "exp.tag.backend": "Enterprise REST Integration",

    // Projects
    "proj.eyebrow": "Production Portfolio",
    "proj.title": "Featured Published Applications",
    "proj.subtitle": "10 live applications shipped across the Apple App Store, Google Play, and Sunmi POS Store.",
    "proj.filterLabel": "Filter applications by domain",
    "proj.filter.all": "All Apps (10)",
    "proj.filter.enterprise": "Enterprise & AI (4)",
    "proj.filter.fintech": "FinTech & POS (3)",
    "proj.filter.insurtech": "InsurTech (1)",
    "proj.filter.consumer": "EdTech & Consumer (2)",
    "proj.showing": "Showing {count} of 10 published applications",
    "proj.caseStudyBtn": "Architecture & Details",
    "proj.modalClose": "Close",
    "proj.modalHighlights": "Key Engineering & Architecture Highlights",
    "proj.modalStack": "Technology Stack",
    "proj.modalStores": "Live Store Links",

    // Project Card Summaries (Complete, un-truncated executive summaries)
    "proj.oanywhere.badge": "MIC · Enterprise Workflow",
    "proj.oanywhere.title": "O-Anywhere",
    "proj.oanywhere.platforms": "iOS · Android",
    "proj.oanywhere.summary": "Ground-up Flutter UI/UX & Clean Architecture rebuild of MIC's multi-tenant enterprise workflow client with embedded Form.io rendering, multi-tier approvals, biometric auth, and cross-platform PDF print bridges.",

    "proj.appkey.badge": "MIC · Security & Smart Autofill",
    "proj.appkey.title": "AppKey",
    "proj.appkey.platforms": "iOS · Android · Web & Extension Companions",
    "proj.appkey.summary": "Zero-knowledge AES-256-GCM identity vault architected in Flutter (Riverpod 3, fpdart) with Gemini API smart form mapping, integrated via AI-augmented workflows with native iOS/Android autofill bridges and ASP.NET Core sync APIs.",

    "proj.homesecretary.badge": "MIC · AI Voice & Smart Scheduling",
    "proj.homesecretary.title": "Home Secretary",
    "proj.homesecretary.platforms": "iOS · Android",
    "proj.homesecretary.summary": "AI voice-agent and smart calling mobile app built in Flutter (Riverpod 3, custom ar-SA streaming dictation, live SignalR call tracking, Umm Al-Qura Hijri sync), integrated with AI-assisted ASP.NET Core, Retell AI, and Gemini NLP services.",

    "proj.munasiq.badge": "MIC · Cloud & Collaboration",
    "proj.munasiq.title": "Munasiq",
    "proj.munasiq.platforms": "iOS · Android · Web",
    "proj.munasiq.summary": "Cross-platform shared group calendar engineered with Riverpod 3, Cloud Firestore WriteBatches, Drift/SQLite (sql-wasm), Firebase Custom Token OTP auth, deep-link group previews, and Umm Al-Qura Hijri sync.",

    "proj.albaraka.badge": "Becom · InsurTech",
    "proj.albaraka.title": "Albaraka Insurance",
    "proj.albaraka.platforms": "iOS · Android",
    "proj.albaraka.summary": "Multi-line insurance platform covering Vehicle, Orange Card, Marine, and Travel policies plus Claims and Wallet—powered by Bloc/Cubit Clean Architecture, on-device ML Kit MRZ/VIZ passport OCR, and 6 Libyan payment rails.",

    "proj.sanad.badge": "Becom · FinTech Super-App",
    "proj.sanad.title": "Sanad Customer",
    "proj.sanad.platforms": "iOS · Android",
    "proj.sanad.summary": "27-module B2C FinTech super-app uniting digital vouchers, international eSIMs, QR event ticketing, embedded insurance, GECOL electricity top-ups, KYC/2FA, and 5 payment gateways with Play Integrity & App Attest.",

    "proj.merchant.badge": "Becom · B2B FinTech & POS",
    "proj.merchant.title": "Sanad Merchant",
    "proj.merchant.platforms": "iOS · Android · Sunmi POS",
    "proj.merchant.summary": "Multi-flavor (store/pos) B2B reseller and POS platform featuring sub-reseller ledgers, a dart:ui Canvas RTL thermal bitmap engine for Sunmi V2/P2/P3 terminals, 5 payment gateways, Socket.IO QR sync, and Pushy MQTT.",

    "proj.sanadagent.badge": "Becom · Event Operations",
    "proj.sanadagent.title": "Sanad Agent",
    "proj.sanadagent.platforms": "iOS · Android",
    "proj.sanadagent.summary": "Dedicated event gate & ticket verification app implementing a two-step validate-then-admit QR state machine to prevent accidental ticket burns, with camera lifecycle guards, manual fallback, and iOS privacy blur.",

    "proj.lingo.badge": "Ebtekar · EdTech Live Streaming",
    "proj.lingo.title": "Lingo",
    "proj.lingo.platforms": "iOS · Android",
    "proj.lingo.summary": "Interactive EdTech platform delivering live audio/video classrooms via Agora Interactive Live Streaming, real-time participation over Laravel WebSockets, and structured recorded coursework playback.",

    "proj.shin.badge": "Ebtekar · Weather & Marine",
    "proj.shin.title": "Shin Aljaw",
    "proj.shin.platforms": "iOS · Android",
    "proj.shin.summary": "Localized Libyan weather, marine navigation, and agricultural forecasting application architected with Riverpod, Dio, and GoRouter for real-time coastal conditions and trip planning.",

    // Store Labels
    "store.apple": "App Store",
    "store.google": "Google Play",
    "store.pos": "Sunmi POS Store",

    // Skills
    "skills.eyebrow": "Technical Capabilities",
    "skills.title": "Skills & Ecosystem",
    "skills.subtitle": "Deep hands-on Flutter & Dart mastery paired with AI-augmented platform interop and backend integration.",
    "skills.cat.languages": "Core Mobile & UI",
    "skills.cat.frameworks": "Supporting Interop & Backend (AI-Assisted)",
    "skills.cat.state": "State Management & DI",
    "skills.cat.arch": "Architecture & Principles",
    "skills.cat.security": "Mobile Security & Auth",
    "skills.cat.tools": "Cloud, Data & Networking",
    "skills.cat.integrations": "Hardware, Payments & Realtime",
    "skills.cat.ai": "AI Product Integrations",
    "skills.oop": "OOP & OOD",
    "skills.solid": "SOLID Principles",
    "skills.patterns": "Design Patterns",
    "skills.cleanArch": "Clean Architecture",
    "skills.cleanCode": "Clean Code & MVVM",
    "skills.e2ee": "Client-Side AES-256-GCM E2EE",
    "skills.autofill": "iOS & Android Autofill Bridges",
    "skills.ffi": "Dart FFI Integration",
    "skills.ssl": "SSL Pinning & App Attest",
    "skills.ndk": "Biometrics (Keychain / Keystore)",
    "skills.payment": "Multi-Rail Payment Gateways",
    "skills.pos": "Sunmi POS Thermal Printing",
    "skills.realtime": "SignalR, Socket.IO & WebSockets",
    "skills.l10n": "RTL/LTR & Umm Al-Qura Calendars",
    "skills.prompt": "Structured LLM Output & Prompting",

    // Education & Languages
    "edu.eyebrow": "Academic Foundation",
    "edu.title": "Education & Languages",
    "edu.master.degree": "Master in Information Technology",
    "edu.master.date": "Oct 2018",
    "edu.master.school": "University of Sciences and Technology · Omdurman, Sudan",
    "edu.master.desc": "Master's thesis in economic data mining—collecting, preprocessing, and classifying public sentiment on the Sudanese economy using RapidMiner Studio.",
    "edu.bachelor.degree": "Bachelor of Computer Sciences",
    "edu.bachelor.date": "Oct 2015",
    "edu.bachelor.school": "University of Sciences and Technology · Omdurman, Sudan",
    "edu.bachelor.desc": "Graduation project: Engineered a native Java Android application enabling encrypted peer-to-peer voice calls directly over Wi-Fi Direct.",
    "edu.langsTitle": "Spoken Languages",
    "contact.lang.ar.name": "Arabic",
    "contact.lang.ar.level": "Native / Bilingual Proficiency",
    "contact.lang.en.name": "English",
    "contact.lang.en.level": "Professional Working Proficiency",

    // Contact & Footer
    "contact.eyebrow": "Direct Channels",
    "contact.title": "Let's Build Something Reliable",
    "contact.subtitle": "Open to Senior Flutter & Mobile Architecture leadership roles and technical consulting opportunities.",
    "contact.emailLabel": "Email Address",
    "contact.copyBtn": "Copy",
    "contact.copied": "Email copied to clipboard",
    "contact.phoneLabel": "Phone & WhatsApp",
    "contact.linkedinLabel": "Professional Network",
    "contact.githubLabel": "Source & Repositories",
    "contact.cvPdf": "Download CV (PDF)",
    "contact.cvDocx": "Download CV (DOCX)",
    "contact.copyright": "© 2026 Naji Ezzeldien. Engineered with semantic HTML, modern CSS, and Cairo typography.",
    "contact.references": "References available upon request."
  },

  ar: {
    // Accessibility & Navigation
    "nav.skip": "تخطَّ إلى المحتوى الرئيسي",
    "nav.primaryLabel": "التنقل الرئيسي",
    "nav.logo": "ن",
    "nav.title": "ناجي عزالدين",
    "nav.roleTag": "مهندس Flutter أول",
    "nav.menuBtn": "القائمة",
    "nav.home": "الرئيسية",
    "nav.about": "عنّي",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.education": "التعليم",
    "nav.contact": "تواصل",
    "nav.langSwitch": "English",
    "nav.langSwitchShort": "EN",
    "nav.cvShort": "السيرة",
    "theme.toDark": "التبديل إلى الوضع الليلي",
    "theme.toLight": "التبديل إلى الوضع النهاري",

    // Hero
    "hero.badge": "متاح للفرص القيادية في هندسة Flutter وتطبيقات الجوّال · الرياض، السعودية",
    "hero.greeting": "مرحبًا، أنا",
    "hero.name": "ناجي عزالدين",
    "hero.title": "مهندس أول لتطبيقات الجوّال",
    "hero.subtitle": "Flutter & Dart · العمارة النظيفة · iOS و Android والويب وأجهزة POS",
    "hero.description": "خبرة عملية يدوية تتجاوز 5 سنوات في هندسة وبناء وإطلاق تطبيقات Flutter عالية الموثوقية في قطاعات التقنية المالية، أجهزة نقاط البيع (POS)، التأمين، والأنظمة المؤسسية — مع توظيف الهندسة المعزّزة بالذكاء الاصطناعي لبناء الجسور الأصلية والواجهات الخلفية المساندة.",
    "hero.cta.cv": "تحميل السيرة الذاتية (PDF)",
    "hero.cta.projects": "استعراض 10 تطبيقات منشورة",
    "hero.cta.contact": "تواصل معي",
    "hero.stat.downloads.num": "+102K",
    "hero.stat.downloads.label": "عملية تحميل عبر المتاجر",
    "hero.stat.apps.num": "10",
    "hero.stat.apps.label": "تطبيقات إنتاجية منشورة",
    "hero.stat.years.num": "+5",
    "hero.stat.years.label": "سنوات خبرة عملية",
    "hero.stat.stores": "Google Play · Apple App Store · Sunmi POS",

    // About
    "about.eyebrow": "الملف الهندسي",
    "about.title": "نبذة عنّي",
    "about.description": "مهندس أول لتطبيقات الجوّال بخبرة عملية تتجاوز 5 سنوات في تصميم وبناء ونشر تطبيقات iOS وأندرويد والويب وأجهزة نقاط البيع باستخدام Flutter و Dart. أطلقت 10 تطبيقات إنتاجية على Google Play و Apple App Store ومتجر Sunmi POS بإجمالي يتجاوز 102,000 عملية تحميل في السعودية وليبيا، مع توظيف سير العمل الهندسي المعزّز بالذكاء الاصطناعي لتسليم جسور الأنظمة الأصلية والواجهات الخلفية المساندة.",
    "about.strengths": "الركائز الهندسية الأساسية",
    "about.s1.title": "معمارية Flutter قابلة للتوسّع",
    "about.s1.desc": "تطبيق Clean Architecture ومبادئ SOLID و MVVM وتعدد البيئات (Flavors) والتعريب الكامل وتقويم أم القرى الهجري.",
    "about.s2.title": "إدارة حالة موثوقة وحقن تبعيات معياري",
    "about.s2.desc": "تصميم قواعد كود معيارية قابلة للتوسع بـ Riverpod 3 و Bloc/Cubit و Provider و GetX و Freezed و fpdart و get_it/Injectable.",
    "about.s3.title": "أمن الجوّال والمزامنة السحابية",
    "about.s3.desc": "التشفير المحلي AES-256-GCM، ربط شهادات SSL، المصادقة البيومترية، App Check (Play Integrity / App Attest)، و Firestore و Drift/SQLite.",
    "about.s4.title": "التقنية المالية وأجهزة POS والاتصال الفوري",
    "about.s4.desc": "بوابات الدفع المتعددة، الطباعة الحرارية عبر dart:ui Canvas لأجهزة Sunmi POS، و SignalR و Socket.IO و WebSockets و Pushy MQTT و Agora.",
    "about.s5.title": "تكامل الذكاء الاصطناعي والتسليم المعزّز",
    "about.s5.desc": "دمج Gemini API ووكلاء المكالمات Retell AI ومسح الجوازات بـ ML Kit OCR داخل تطبيقات Flutter، مع تسليم الجسور المساندة (Swift/Kotlin, Dart FFI) وخدمات ASP.NET Core بمساندة الذكاء الاصطناعي.",

    // Experience
    "exp.eyebrow": "المسيرة المهنية",
    "exp.title": "الخبرات العملية",
    "exp.subtitle": "قيادة معمارية وتطوير تطبيقات Flutter عبر قطاعات الأعمال، التقنية المالية، نقاط البيع، التأمين، والتعليم.",
    "exp.role.mic_current": "مهندس Flutter أول",
    "exp.date.mic_current": "ديسمبر 2025 – الحالي · حضوري",
    "exp.company.mic_current": "شركة الذكاء الإداري (MIC) · الرياض، المملكة العربية السعودية",
    "exp.desc.mic_current": "قيادة معمارية تطبيقات الجوّال بـ Flutter (Riverpod 3, Clean Architecture) وتكامل الأنظمة المؤسسية عبر REST/OData، مع توظيف الهندسة المعزّزة بالذكاء الاصطناعي لتسليم الامتدادات الأصلية والواجهات الخلفية المساندة — شمل إعادة بناء O-Anywhere من الصفر وإطلاق AppKey والسكرتير المنزلي ومنسّق.",
    "exp.role.becom": "مهندس Flutter",
    "exp.date.becom": "مارس 2025 – الحالي · دوام كامل (مارس–نوفمبر 2025) | جزئي عن بُعد (ديسمبر 2025–الحالي)",
    "exp.company.becom": "شركة بِكُمْ (Becom) · طرابلس، ليبيا",
    "exp.desc.becom": "شركة تقنية مالية تقدّم حلول الدفع الرقمي والتجارة الإلكترونية ونقاط البيع. تطوير وصيانة تطبيقات Flutter على أندرويد و iOS وأجهزة Sunmi POS بمعمارية نظيفة، بوابات دفع متعددة، مسح الجوازات على الجهاز بـ ML Kit OCR، ربط شهادات SSL، و App Check، والطباعة الحرارية.",
    "exp.role.ebtekar": "مهندس Flutter",
    "exp.date.ebtekar": "أغسطس 2023 – ديسمبر 2024",
    "exp.company.ebtekar": "شركة ابتكار لنظم المعلومات (EISC) · طرابلس، ليبيا",
    "exp.desc.ebtekar": "شركة تقنية متكاملة لتطوير الحلول الرقمية وتطبيقات الجوّال. قيادة معمارية وإطلاق تطبيقات أندرويد و iOS إنتاجية شملت الفصول التفاعلية بالبث المباشر عبر Agora ومنصة الطقس والملاحة البحرية.",
    "exp.role.mic": "مهندس Flutter",
    "exp.date.mic": "نوفمبر 2019 – مارس 2022",
    "exp.company.mic": "شركة الذكاء الإداري (MIC) · الرياض، المملكة العربية السعودية",
    "exp.desc.mic": "تطوير تطبيقات الجوّال بـ Flutter وربطها مع واجهات REST APIs المبنية بـ ASP.NET Core لخدمة 3+ من كبرى شركات العقارات في السعودية، شمل تأسيس النسخة الأولى من تطبيق O-Anywhere وتكامل إشعارات سير العمل (Push, WhatsApp, SMS) ومواءمة جداول الفوترة الهجرية والميلادية.",
    "exp.tag.backend": "تكامل الأنظمة المؤسسية REST",

    // Projects
    "proj.eyebrow": "أعمال إنتاجية موثّقة",
    "proj.title": "التطبيقات المنشورة المميزة",
    "proj.subtitle": "10 تطبيقات إنتاجية منشورة على متاجر Apple App Store و Google Play و Sunmi POS.",
    "proj.filterLabel": "تصفية التطبيقات حسب القطاع",
    "proj.filter.all": "الكل (10)",
    "proj.filter.enterprise": "الأنظمة المؤسسية والذكاء الاصطناعي (4)",
    "proj.filter.fintech": "التقنية المالية ونقاط البيع (3)",
    "proj.filter.insurtech": "التأمين الرقمي (1)",
    "proj.filter.consumer": "التعليم وتطبيقات الأفراد (2)",
    "proj.showing": "عرض {count} من أصل 10 تطبيقات منشورة",
    "proj.caseStudyBtn": "التفاصيل المعمارية",
    "proj.modalClose": "إغلاق",
    "proj.modalHighlights": "أبرز القرارات الهندسية والمعمارية",
    "proj.modalStack": "التقنيات المستخدمة",
    "proj.modalStores": "روابط المتاجر الرسمية",

    // Project Card Summaries
    "proj.oanywhere.badge": "MIC · أنظمة العمل المؤسسية",
    "proj.oanywhere.title": "O-Anywhere",
    "proj.oanywhere.platforms": "iOS · Android",
    "proj.oanywhere.summary": "إعادة تصميم وبناء شامل لتطبيق إدارة سير العمل المؤسسي من الصفر بـ Flutter (Riverpod 3, Clean Architecture) وربطه بالنظام الخلفي متعدد المستأجرين مع محرك Form.io ومسارات الاعتماد والمصادقة البيومترية وجسور طباعة PDF.",

    "proj.appkey.badge": "MIC · الأمن السيبراني والتعبئة الذكية",
    "proj.appkey.title": "مفتاح التطبيقات (AppKey)",
    "proj.appkey.platforms": "iOS · Android · تطبيقات مساندة للويب والمتصفح",
    "proj.appkey.summary": "خزنة هوية مشفّرة محليًا بـ AES-256-GCM مبنية بـ Flutter (Riverpod 3, fpdart) مع تصنيف الحقول عبر Gemini API، ومتكاملة عبر سير عمل معزّز بالذكاء الاصطناعي مع جسور التعبئة التلقائية في iOS/Android وخدمات مزامنة ASP.NET Core.",

    "proj.homesecretary.badge": "MIC · الذكاء الاصطناعي الصوتي والجدولة",
    "proj.homesecretary.title": "السكرتير المنزلي",
    "proj.homesecretary.platforms": "iOS · Android",
    "proj.homesecretary.summary": "تطبيق جوّال للمكالمات الصوتية الذكية وجدولة المهام مبني بـ Flutter (Riverpod 3، محرك إملاء صوتي عربي ar-SA، تتبع مكالمات لحظي عبر SignalR، وتقويم أم القرى)، متكامل مع خدمات ASP.NET Core المساندة و Retell AI و Gemini NLP.",

    "proj.munasiq.badge": "MIC · الحوسبة السحابية والتعاون",
    "proj.munasiq.title": "منسّق",
    "proj.munasiq.platforms": "iOS · Android · Web",
    "proj.munasiq.summary": "منصة تقويم مشترك وجدولة جماعية لـ iOS وأندرويد والويب مبنية بـ Riverpod 3 و Firestore WriteBatches و Drift/SQLite (sql-wasm) مع مصادقة OTP عبر Firebase Custom Tokens ومزامنة تقويم أم القرى.",

    "proj.albaraka.badge": "بِكُمْ · التأمين الرقمي",
    "proj.albaraka.title": "البركة للتأمين",
    "proj.albaraka.platforms": "iOS · Android",
    "proj.albaraka.summary": "منصة تأمين شاملة لوثائق المركبات والبطاقة البرتقالية والبحري والسفر والمطالبات والمحفظة، مبنية بـ Bloc/Cubit و Clean Architecture ومزوّدة بماسح جوازات ذكي على الجهاز (ML Kit MRZ/VIZ OCR) و6 قنوات دفع ليبية.",

    "proj.sanad.badge": "بِكُمْ · تطبيق مالي شامل",
    "proj.sanad.title": "سند (Sanad Customer)",
    "proj.sanad.platforms": "iOS · Android",
    "proj.sanad.summary": "تطبيق خدمات مالية ورقمية شامل (Super-App بـ 27 وحدة Riverpod 3) يجمع القسائم الرقمية، شرائح eSIM، تذاكر الفعاليات QR، التأمين المدمج، شحن الكهرباء GECOL، و5 بوابات دفع مع Play Integrity و App Attest.",

    "proj.merchant.badge": "بِكُمْ · نقاط البيع والتجار",
    "proj.merchant.title": "سند التاجر",
    "proj.merchant.platforms": "iOS · Android · Sunmi POS",
    "proj.merchant.summary": "منصة تجار وموزعين متعددة البيئات (store/pos) تشمل إدارة الموزعين الفرعيين، محافظ الآجل والأرباح، محرك طباعة حرارية عبر dart:ui Canvas لأجهزة Sunmi POS، و5 قنوات دفع ومزامنة Socket.IO وإشعارات Pushy MQTT.",

    "proj.sanadagent.badge": "بِكُمْ · عمليات الفعاليات",
    "proj.sanadagent.title": "سند العميل (Sanad Agent)",
    "proj.sanadagent.platforms": "iOS · Android",
    "proj.sanadagent.summary": "تطبيق التحقق من تذاكر الفعاليات عند البوابات يطبّق آلة حالة من خطوتين (فحص بيانات التذكرة ثم تأكيد الدخول) لمنع إحراق التذاكر بالخطأ، مع حراس دورة حياة الكاميرا والإدخال اليدوي وتمويه الخصوصية على iOS.",

    "proj.lingo.badge": "ابتكار · التعليم التفاعلي",
    "proj.lingo.title": "لينقو (Lingo)",
    "proj.lingo.platforms": "iOS · Android",
    "proj.lingo.summary": "منصة تعليمية لبث الفصول التفاعلية المباشرة صوتًا وصورة عبر Agora Interactive Live Streaming مع تفاعل لحظي عبر Laravel WebSockets وتشغيل المحتوى المسجّل.",

    "proj.shin.badge": "ابتكار · الطقس والملاحة البحرية",
    "proj.shin.title": "شن الجو",
    "proj.shin.platforms": "iOS · Android",
    "proj.shin.summary": "تطبيق طقس وملاحة بحرية محلي يغطي الأحوال الجوية الفورية وحالة البحر وتخطيط الرحلات والمواسم الزراعية، مصمم بمعمارية Riverpod و Dio و GoRouter.",

    // Store Labels
    "store.apple": "App Store",
    "store.google": "Google Play",
    "store.pos": "متجر Sunmi POS",

    // Skills
    "skills.eyebrow": "القدرات التقنية",
    "skills.title": "المهارات والمنظومة التقنية",
    "skills.subtitle": "إتقان يدوي عميق لـ Flutter و Dart مقترن بتكامل الأنظمة الأصلية والواجهات الخلفية المعزّزة بالذكاء الاصطناعي.",
    "skills.cat.languages": "أساسيات الجوّال وبناء الواجهات",
    "skills.cat.frameworks": "التكامل المساند والخوادم (بمساندة AI)",
    "skills.cat.state": "إدارة الحالة وحقن التبعيات",
    "skills.cat.arch": "المعمارية والمبادئ الهندسية",
    "skills.cat.security": "أمن الجوّال والمصادقة",
    "skills.cat.tools": "السحابة وقواعد البيانات والشبكات",
    "skills.cat.integrations": "الأجهزة وبوابات الدفع والاتصال الفوري",
    "skills.cat.ai": "تكامل منتجات الذكاء الاصطناعي",
    "skills.oop": "البرمجة والتصميم كائني التوجه (OOP/OOD)",
    "skills.solid": "مبادئ SOLID",
    "skills.patterns": "أنماط التصميم (Design Patterns)",
    "skills.cleanArch": "العمارة النظيفة (Clean Architecture)",
    "skills.cleanCode": "الكود النظيف و MVVM",
    "skills.e2ee": "تشفير محلي طرفي (AES-256-GCM)",
    "skills.autofill": "جسور التعبئة التلقائية (iOS & Android)",
    "skills.ffi": "تكامل Dart FFI",
    "skills.ssl": "ربط شهادات SSL و App Attest",
    "skills.ndk": "المصادقة البيومترية (Keychain / Keystore)",
    "skills.payment": "تكامل بوابات الدفع المتعددة",
    "skills.pos": "الطباعة الحرارية لأجهزة Sunmi POS",
    "skills.realtime": "SignalR و Socket.IO و WebSockets",
    "skills.l10n": "التعريب وتقويم أم القرى الهجري",
    "skills.prompt": "مخرجات النماذج المهيكلة وهندسة الأوامر",

    // Education & Languages
    "edu.eyebrow": "التأهيل الأكاديمي",
    "edu.title": "التعليم واللغات",
    "edu.master.degree": "ماجستير تقنية المعلومات",
    "edu.master.date": "أكتوبر 2018",
    "edu.master.school": "جامعة العلوم والتقانة · أم درمان، السودان",
    "edu.master.desc": "رسالة الماجستير في تنقيب البيانات الاقتصادية، شملت جمع ومعالجة وتصنيف توجهات الرأي العام حول الاقتصاد السوداني باستخدام RapidMiner Studio.",
    "edu.bachelor.degree": "بكالوريوس علوم الحاسب",
    "edu.bachelor.date": "أكتوبر 2015",
    "edu.bachelor.school": "جامعة العلوم والتقانة · أم درمان، السودان",
    "edu.bachelor.desc": "مشروع التخرج: تطوير تطبيق أندرويد أصلي بلغة Java لإجراء مكالمات صوتية مشفرة مباشرة بين الأجهزة عبر تقنية Wi-Fi Direct.",
    "edu.langsTitle": "اللغات",
    "contact.lang.ar.name": "اللغة العربية",
    "contact.lang.ar.level": "اللغة الأم",
    "contact.lang.en.name": "اللغة الإنجليزية",
    "contact.lang.en.level": "كفاءة عمل مهنية",

    // Contact & Footer
    "contact.eyebrow": "قنوات التواصل المباشر",
    "contact.title": "لنبني معًا منتجًا يُعتمد عليه",
    "contact.subtitle": "متاح للفرص القيادية في هندسة Flutter ومعمارية تطبيقات الجوّال والاستشارات التقنية.",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.copyBtn": "نسخ",
    "contact.copied": "تم نسخ البريد الإلكتروني",
    "contact.phoneLabel": "الهاتف وواتساب",
    "contact.linkedinLabel": "الشبكة المهنية",
    "contact.githubLabel": "المستودعات البرمجية",
    "contact.cvPdf": "تحميل السيرة الذاتية (PDF)",
    "contact.cvDocx": "تحميل السيرة الذاتية (DOCX)",
    "contact.copyright": "© 2026 ناجي عزالدين. صُمّم وبُني بأحدث معايير الويب القياسية وبخط Cairo.",
    "contact.references": "المراجع متاحة عند الطلب."
  }
};

/* ── Detailed Project Case Studies (Zero Truncation) ────────── */
const projectCaseStudies = {
  oanywhere: {
    apple: "https://apps.apple.com/sa/app/o-anywhere/id1599979909?l=ar",
    google: "https://play.google.com/store/apps/details?id=com.mic.anyware",
    pos: false,
    stack: [
      "Flutter",
      "Riverpod 3",
      "Clean Architecture",
      "Form.io WebView Bridge",
      "Dio & OData REST APIs",
      "Biometric Auth",
      "GoRouter",
      "Cross-Platform PDF Print Bridge"
    ],
    en: {
      title: "O-Anywhere — Enterprise Workflow Platform",
      org: "Management Intelligence Company (MIC) · Riyadh, KSA",
      role: "Lead Flutter Architecture & Ground-Up UI/UX Rebuild",
      overview: "Redesigned and re-architected MIC's flagship internal operations and multi-tenant workflow mobile client from the ground up using Flutter (Riverpod 3, GoRouter, Freezed, Feature-First Clean Architecture), integrating seamlessly with MIC's enterprise OData backend.",
      highlights: [
        "Embedded Dynamic Form.io Engine: Built a bidirectional JavaScript-to-Flutter WebView bridge with dynamic auto-height sizing, keyboard scroll coordination, and offline Arabic font injection to render complex enterprise forms and multi-attachment uploads.",
        "Multi-Tier Approval Pipelines: Engineered inter-departmental HR/finance task routing, custom Dio auth/tenant interceptors, OData filtering, and smooth Skeletonizer loading states.",
        "Biometric Security & Platform Interop: Implemented FaceID/Fingerprint login backed by iOS Keychain and Android EncryptedSharedPreferences, and resolved cross-platform WebView-to-PDF printing and Android 15+ packaging compatibility via platform channel bridges."
      ]
    },
    ar: {
      title: "O-Anywhere — منصة إدارة سير العمل المؤسسي",
      org: "شركة الذكاء الإداري (MIC) · الرياض، السعودية",
      role: "قيادة معمارية Flutter وإعادة تصميم وبناء التطبيق من الصفر",
      overview: "قمت بإعادة تصميم وبناء تطبيق العمليات المؤسسية متعدد المستأجرين الخاص بشركة MIC بالكامل من الصفر باستخدام Flutter (Riverpod 3, GoRouter, Freezed, Clean Architecture) وربطه بالواجهة الخلفية المؤسسية عبر OData.",
      highlights: [
        "محرك نماذج Form.io الديناميكي: بناء جسر ثنائي الاتجاه بين WebView و Flutter مع ضبط الارتفاع التلقائي وتنسيق التمرير وحقن الخطوط العربية دون اتصال لعرض النماذج الإدارية المعقدة ورفع المرفقات.",
        "مسارات الاعتماد وتوجيه المهام: هندسة تدفقات الموافقات متعددة المستويات بين الإدارات مع معترضات Dio المخصصة للمستأجرين وفلترة OData وحالات تحميل سلسة عبر Skeletonizer.",
        "المصادقة البيومترية وتكامل المنصات: تطبيق الدخول بـ FaceID والبصمة المحمي بـ Keychain و EncryptedSharedPreferences، ومعالجة طباعة ملفات PDF من WebView وتوافق حزم أندرويد 15+ عبر جسور المنصات الأصلية."
      ]
    }
  },

  appkey: {
    apple: "https://apps.apple.com/us/app/appkey/id6827119695",
    google: "https://play.google.com/store/apps/details?id=com.mic.appkey",
    pos: false,
    stack: [
      "Flutter (Riverpod 3, Freezed, fpdart)",
      "Client-Side AES-256-GCM E2EE",
      "Biometric Unlock",
      "Google Gemini API",
      "iOS & Android Autofill Bridges (AI-Assisted)",
      "ASP.NET Core Sync API Integration"
    ],
    en: {
      title: "AppKey — Zero-Knowledge Identity Vault & Smart Autofill",
      org: "Management Intelligence Company (MIC) · Riyadh, KSA",
      role: "Lead Flutter Architect & AI-Augmented End-to-End Delivery",
      overview: "Architected the core Flutter zero-knowledge identity vault (Riverpod 3, Freezed, fpdart, Clean Architecture) and directed AI-augmented engineering workflows to deliver supporting native iOS/Android autofill extensions, ASP.NET Core sync APIs, and web/browser companions.",
      highlights: [
        "Flutter Vault & Client-Side E2EE: Designed the modular Flutter vault state machines, biometric unlock flows, client-side AES-256-GCM encryption, and FFI-backed secret protection so plaintext credentials remain on the user's device.",
        "Smart Form Mapping with Gemini API: Integrated Google Gemini API with local secret redaction and deterministic fallbacks to classify web and mobile form schemas for accurate Arabic and English profile autofill.",
        "AI-Augmented Cross-Surface Integration: Leveraged AI-assisted workflows to build, review, and integrate native iOS Credential Provider (Swift) and Android Autofill/IME bridges (Kotlin) alongside ASP.NET Core sync endpoints."
      ]
    },
    ar: {
      title: "مفتاح التطبيقات (AppKey) — خزنة هوية مشفّرة وتعبئة ذكية",
      org: "شركة الذكاء الإداري (MIC) · الرياض، السعودية",
      role: "معماري تطبيق Flutter الرئيسي والتسليم المتكامل المعزّز بالذكاء الاصطناعي",
      overview: "تصميم وهندسة تطبيق الخزنة المشفّرة الأساسي بـ Flutter (Riverpod 3, Freezed, fpdart, Clean Architecture)، وتوجيه سير العمل المعزّز بالذكاء الاصطناعي لتسليم وربط جسور التعبئة التلقائية الأصلية في iOS/Android وخدمات المزامنة بـ ASP.NET Core والتطبيقات المرافقة.",
      highlights: [
        "خزنة Flutter والتشفير المحلي الطرفي: تصميم آلات الحالة المعيارية في Flutter، الفتح البيومتري، والتشفير المحلي بـ AES-256-GCM مع حماية الأسرار عبر FFI لضمان بقاء البيانات الحساسة مشفرة على جهاز المستخدم.",
        "تصنيف الحقول الذكي عبر Gemini API: ربط Google Gemini API مع تنقية البيانات الحساسة محليًا والبدائل الحتمية لفهم وتصنيف حقول النماذج بالعربية والإنجليزية.",
        "التكامل متعدد المنصات بمساندة الذكاء الاصطناعي: توظيف أدوات الهندسة المعزّزة بالذكاء الاصطناعي لبناء ومراجعة وربط امتدادات التعبئة التلقائية الأصلية (Swift / Kotlin) وواجهات المزامنة الخلفية بـ ASP.NET Core."
      ]
    }
  },

  homesecretary: {
    apple: "https://apps.apple.com/us/app/%D8%A7%D9%84%D8%B3%D9%83%D8%B1%D8%AA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A/id6807824158",
    google: "https://play.google.com/store/apps/details?id=com.mic.home_secretary",
    pos: false,
    stack: [
      "Flutter (Riverpod 3, Freezed, fpdart)",
      "Cairo RTL/LTR Typography",
      "Arabic Streaming Dictation",
      "SignalR Realtime Tracking",
      "Retell AI Voice Agents",
      "Gemini NLP Scheduling",
      "ASP.NET Core Integration (AI-Assisted)"
    ],
    en: {
      title: "Home Secretary — AI Voice-Agent & Smart Scheduling Platform",
      org: "Management Intelligence Company (MIC) · Riyadh, KSA",
      role: "Lead Flutter Mobile Engineer & AI-Augmented Backend Integration",
      overview: "Designed and built the Flutter mobile client powering an Arabic AI voice secretary that places autonomous phone calls, tracks live conversations, and manages Hijri/Gregorian schedules—paired with AI-assisted ASP.NET Core backend orchestration.",
      highlights: [
        "Custom Arabic Dictation State Machine: Engineered a multi-run ar-SA streaming speech dictation flow in Flutter with watchdog timers, transient error recovery, and seamless transcript stitching over speech_to_text.",
        "Live SignalR Call Tracking & Hijri UX: Built real-time outbound/inbound call status streaming via SignalR, interactive post-call summaries, contact/group disambiguation, WhatsApp OTP auth, and Umm Al-Qura Hijri/Gregorian scheduling.",
        "AI Telephony & NLP Integration: Directed AI-assisted ASP.NET Core Web API services connecting the Flutter app to Retell AI autonomous phone agents and Google Gemini API natural-language date extraction."
      ]
    },
    ar: {
      title: "السكرتير المنزلي — وكيل مكالمات ذكي وجدولة مهام",
      org: "شركة الذكاء الإداري (MIC) · الرياض، السعودية",
      role: "مهندس تطبيق Flutter الرئيسي وتكامل الخدمات الذكية المساندة",
      overview: "تصميم وبناء تطبيق الجوّال بـ Flutter لمساعد صوتي ذكي يُجري مكالمات هاتفية عربية تلقائية نيابةً عن المستخدم ويتابع حالتها لحظيًا ويدير المواعيد بالهجري والميلادي، بالتكامل مع خدمات خلفية بـ ASP.NET Core مطوّرة بمساندة الذكاء الاصطناعي.",
      highlights: [
        "آلة حالة مخصّصة للإملاء الصوتي العربي: هندسة محرك إملاء صوتي متدفق للهجة السعودية (ar-SA) في Flutter مزوّد بمؤقتات مراقبة واستئناف تلقائي ودمج سلس للنصوص.",
        "تتبع المكالمات لحظيًا وتجربة التقويم الهجري: بناء تدفقات متابعة حالة المكالمات مباشرة عبر SignalR، ملخصات المكالمات التفاعلية، توثيق WhatsApp OTP، وجدولة المهام بتقويم أم القرى.",
        "تكامل المكالمات الذكية ومعالجة اللغة: توجيه وربط خدمات ASP.NET Core المساندة لربط التطبيق بمحرك المكالمات Retell AI واستخراج المواعيد لغويًا عبر Google Gemini API."
      ]
    }
  },

  munasiq: {
    apple: "https://apps.apple.com/us/app/منسق/id6758393913?l=ar",
    google: "https://play.google.com/store/apps/details?id=com.mic.sharedCalendar",
    pos: false,
    stack: [
      "Flutter (iOS, Android, Web)",
      "Riverpod 3",
      "Cloud Firestore",
      "Firebase Cloud Functions",
      "Drift / SQLite (sql-wasm)",
      "GoRouter Deep Links",
      "Umm Al-Qura Hijri Calendar"
    ],
    en: {
      title: "Munasiq — Cross-Platform Shared Calendar & Group Sync",
      org: "Management Intelligence Company (MIC) · Riyadh, KSA",
      role: "Lead Flutter & Firebase Cloud Architecture Engineer",
      overview: "Built a unified collaborative scheduling platform running across iOS, Android, and Web from a single Flutter codebase, tailored for families and teams coordinating across Umm Al-Qura Hijri and Gregorian calendars.",
      highlights: [
        "Offline-First Hybrid Persistence: Combined Cloud Firestore atomic WriteBatches with conditional local Drift/SQLite caching (automatically compiling to sql-wasm on Flutter Web).",
        "Custom OTP & Frictionless Group Joins: Implemented custom SMS OTP authentication issuing Firebase Custom Tokens via Cloud Functions, paired with unauthenticated `/join/:groupId` deep-link group previews.",
        "High-Performance Dual Calendar Engine: Memoized Umm Al-Qura Hijri/Gregorian month matrices and recurring event projections to maintain 60fps scrolling on mobile and web."
      ]
    },
    ar: {
      title: "منسّق — منصة التقويم التشاركي وتنسيق المجموعات",
      org: "شركة الذكاء الإداري (MIC) · الرياض، السعودية",
      role: "مهندس رئيسي لتطبيق Flutter والبنية السحابية Firebase",
      overview: "بناء منصة جدولة تشاركية موحّدة تعمل على iOS وأندرويد والويب من قاعدة كود واحدة بـ Flutter، مصممة لتنسيق مواعيد العائلات وفرق العمل بالتقويمين الهجري (أم القرى) والميلادي.",
      highlights: [
        "تخزين هجين يدعم العمل دون اتصال: الدمج بين العمليات الذرية Firestore WriteBatches وقاعدة بيانات Drift/SQLite المحلية مع دعم sql-wasm تلقائيًا على متصفحات الويب.",
        "مصادقة مخصصة وروابط انضمام فورية: بناء تدفق تحقق OTP يصدر Firebase Custom Tokens عبر الدوال السحابية، مع معاينة فورية للمجموعات عبر الروابط العميقة (`/join/:groupId`) قبل التسجيل.",
        "أداء فائق للتقويم المزدوج: تحسين حسابات تقويم أم القرى الهجري والميلادي عبر Memoization لضمان سلاسة التمرير عند 60 إطارًا في الثانية."
      ]
    }
  },

  albaraka: {
    apple: "https://apps.apple.com/us/app/البركة-للتأمين/id6755429999",
    google: "https://play.google.com/store/apps/details?id=ly.albaraka.insurancep",
    pos: false,
    stack: [
      "Flutter",
      "Bloc / Cubit",
      "Clean Architecture",
      "Google ML Kit OCR (MRZ/VIZ)",
      "6 Libyan Payment Gateways",
      "PDF Policy Viewer",
      "FFI Secret Protection"
    ],
    en: {
      title: "Albaraka Insurance — Digital InsurTech & Claims Platform",
      org: "Becom بِكُمْ Company · Tripoli, Libya",
      role: "Flutter Mobile Engineer",
      overview: "Engineered a full-service mobile insurance platform (Bloc/Cubit, Clean Architecture) enabling policyholders to quote, purchase, pay for, and manage Vehicle, Orange Card, Marine, and Travel insurance policies, file claims, and view official PDF certificates.",
      highlights: [
        "On-Device ML Kit Passport Scanner: Built a real-time camera OCR pipeline parsing ICAO MRZ lines and VIZ passport fields locally on-device with Libyan city normalization to eliminate manual data entry errors.",
        "6-Gateway Libyan Payment Orchestration: Unified Sadad, Adfali, Tadawul, Yusor Pay, Libyana Pay, and in-app Wallet top-ups/checkout flows via OTP and server-verified WebView callbacks.",
        "Client Security & Policy UX: Integrated device integrity checks, FFI-based secret protection, iOS app-switcher privacy blur, and real-time FCM policy notifications."
      ]
    },
    ar: {
      title: "البركة للتأمين — منصة التأمين الرقمي وإدارة المطالبات",
      org: "شركة بِكُمْ (Becom) · طرابلس، ليبيا",
      role: "مهندس تطبيقات Flutter",
      overview: "هندسة وتطوير منصة تأمين رقمية متكاملة (Bloc/Cubit, Clean Architecture) تتيح للعملاء إصدار وإدارة وثائق تأمين المركبات، البطاقة البرتقالية، التأمين البحري، وتأمين السفر، إلى جانب رفع المطالبات واستعراض الوثائق الرسمية بصيغة PDF.",
      highlights: [
        "ماسح الجوازات الذكي على الجهاز: بناء خط معالجة كاميرا فوري باستخدام Google ML Kit لقراءة حقول MRZ و VIZ من جوازات السفر محليًا بدقة عالية دون إرسال الصور لخوادم خارجية.",
        "منظومة دفع بـ 6 قنوات محلية: توحيد تجربة الدفع وشحن المحفظة عبر (سداد، ادفعلي، تداول، يسر باي، ليبيانا باي، والمحفظة الرقمية) مع معالجة موثوقة لحالات التحقق عبر OTP و WebView.",
        "أمان التطبيق وتجربة الوثائق: دمج فحوصات سلامة الجهاز وحماية مفاتيح الربط عبر FFI وتمويه شاشة التطبيق في الخلفية على iOS وإشعارات FCM."
      ]
    }
  },

  sanad: {
    apple: "https://apps.apple.com/us/app/سنـد/id6749844909",
    google: "https://play.google.com/store/apps/details?id=ly.becom.sanadcustomers&hl=en",
    pos: false,
    stack: [
      "Flutter",
      "Riverpod 3 (27 Modules)",
      "Freezed & fpdart",
      "Play Integrity & App Attest",
      "5 Payment Gateways",
      "eSIM & QR Ticketing",
      "KYC & 2FA"
    ],
    en: {
      title: "Sanad Customer — B2C FinTech & Digital Services Super-App",
      org: "Becom بِكُمْ Company · Tripoli, Libya",
      role: "Flutter Mobile Engineer",
      overview: "Architected and scaled a 27-module B2C FinTech super-app serving consumers across Libya with instant digital vouchers, global eSIM provisioning, event ticket booking, embedded insurance, and utility payments.",
      highlights: [
        "Modular 27-Feature Super-App: Structured independent domain modules under Riverpod 3 (Freezed, fpdart) covering telecom/gaming vouchers, international eSIMs, QR event passes, Vehicle/Travel insurance, and GECOL electricity meter profiles.",
        "Idempotent 5-Gateway Checkout: Integrated Moamalat, Sadad, T-Lync, Adfali, and Libyana Pay with a unit-tested two-phase payment coordinator preventing double charges, alongside 3-decimal LYD wallets, KYC, and 2FA.",
        "Defense-in-Depth Attestation: Combined Firebase App Check (Play Integrity on Android & App Attest on iOS), PIN authentication, SSL certificate pinning, and client secret protection."
      ]
    },
    ar: {
      title: "سند (Sanad Customer) — تطبيق الخدمات المالية والرقمية الشامل",
      org: "شركة بِكُمْ (Becom) · طرابلس، ليبيا",
      role: "مهندس تطبيقات Flutter",
      overview: "تطوير وتوسيع تطبيق Super-App مالي وخدمي يضم 27 وحدة برمجية مستقلة لخدمة الأفراد في القسائم الرقمية، الشرائح الدولية eSIM، تذاكر الفعاليات، التأمين المدمج، وخدمات الكهرباء.",
      highlights: [
        "معمارية معيارية من 27 وحدة: تنظيم التطبيق بـ Riverpod 3 (Freezed, fpdart) ليشمل بطاقات الشحن والألعاب، شرائح eSIM، حجز الفعاليات بتذاكر QR، وثائق تأمين المركبات والسفر، وملفات عدادات الكهرباء (GECOL).",
        "منسق دفع محمي من التكرار عبر 5 بوابات: ربط بوابات (معاملات، سداد، T-Lync، ادفعلي، ليبيانا باي) مع منسق دفع ثنائي المرحلة مختبر برمجيًا لمنع الخصم المزدوج، ومحافظ بالدينار الليبي، وتوثيق KYC و 2FA.",
        "موثوقية وحماية التطبيق: تفعيل Play Integrity على أندرويد و App Attest على iOS عبر Firebase App Check مع رمز PIN وربط شهادات SSL."
      ]
    }
  },

  merchant: {
    apple: "https://apps.apple.com/us/app/سند-التاجر/id6770513889",
    google: "https://play.google.com/store/apps/details?id=ly.becom.sanadmerchantapp",
    pos: true,
    stack: [
      "Flutter Multi-Flavor (store/pos)",
      "Riverpod 3",
      "Sunmi POS (V2 / P2 / P3)",
      "dart:ui Canvas Thermal Engine",
      "5 Payment Rails",
      "Socket.IO Realtime",
      "Pushy MQTT (GMS-Free)",
      "SSL Pinning"
    ],
    en: {
      title: "Sanad Merchant — B2B Reseller & Sunmi POS Platform",
      org: "Becom بِكُمْ Company · Tripoli, Libya",
      role: "Flutter & POS Hardware Integration Engineer",
      overview: "Engineered a dual-flavor (`store` for smartphones and `pos` for dedicated Android POS terminals) B2B distribution and point-of-sale platform powering merchants, sub-resellers, and cashiers.",
      highlights: [
        "Custom RTL Bitmap Thermal Printing Engine: Built a `dart:ui` Canvas rasterizer rendering crisp Arabic RTL receipts, vouchers, and QR codes directly onto Sunmi V2/P2/P3 thermal printers (plus legacy Java POS bridge support).",
        "B2B Multi-Wallet & Sub-Reseller Hierarchy: Implemented prepaid, credit/debt, and profit-commission ledgers, sub-reseller provisioning, GECOL electricity voucher sales, and 5 payment rails (Moamalat, T-Lync, Sadad, Adfali, LYPAY).",
        "GMS-Free POS Reliability: Integrated Pushy MQTT push delivery for Google-Play-less POS hardware, real-time Socket.IO agent QR pairing, and strict X.509 SSL certificate pinning."
      ]
    },
    ar: {
      title: "سند التاجر — منصة الموزعين وأجهزة نقاط البيع Sunmi POS",
      org: "شركة بِكُمْ (Becom) · طرابلس، ليبيا",
      role: "مهندس Flutter وتكامل أجهزة نقاط البيع (POS)",
      overview: "بناء منصة أعمال وتوزيع B2B تعمل ببيئتي تشغيل (`store` للهواتف الذكية و `pos` لأجهزة نقاط البيع) لتمكين التجار والموزعين الفرعيين من البيع الفوري وإدارة الحسابات.",
      highlights: [
        "محرك طباعة حرارية مخصص للعربية: هندسة محرك رسم نقطي عبر `dart:ui` Canvas لتوليد إيصالات عربية واضحة مع رموز QR وطباعتها مباشرة على أجهزة Sunmi V2/P2/P3 (مع دعم جسر Java للأجهزة القديمة).",
        "إدارة الموزعين والمحافظ المتعددة: تطوير محافظ الرصيد المسبق والمديونية والأرباح، إدارة الموزعين الفرعيين، مبيعات الكهرباء (GECOL)، والربط مع 5 قنوات دفع (معاملات، T-Lync، سداد، ادفعلي، LYPAY).",
        "تشغيل موثوق بدون خدمات جوجل (GMS-Free): دمج إشعارات Pushy MQTT للعمل بكفاءة على أجهزة POS الخالية من خدمات جوجل، مع مزامنة فورية عبر Socket.IO وربط صارم لشهادات SSL."
      ]
    }
  },

  sanadagent: {
    apple: "https://apps.apple.com/us/app/سند-العميل/id6761775476",
    google: "https://play.google.com/store/apps/details?id=ly.becom.sanadCompany",
    pos: false,
    stack: [
      "Flutter",
      "Riverpod 3",
      "fpdart Functional Error Handling",
      "mobile_scanner",
      "State Machine Architecture",
      "Clean Architecture"
    ],
    en: {
      title: "Sanad Agent — Event Gate & Ticket Verification System",
      org: "Becom بِكُمْ Company · Tripoli, Libya",
      role: "Flutter Mobile Engineer",
      overview: "Built a high-speed venue gate operations application restricted to authorized COMPANY-role staff for scanning, inspecting, and admitting event attendees under high-throughput crowd conditions.",
      highlights: [
        "Two-Step Validate-Then-Admit State Machine: Eliminated accidental ticket burns by separating non-destructive QR inspection (holder profile, seat tier, prior-scan status) from explicit gate admission confirmation.",
        "Resilient Camera & Venue UX: Engineered `WidgetsBindingObserver` camera lifecycle guards, duplicate-scan debouncing, instant manual ticket-code fallback for damaged screens, and iOS app-switcher privacy blur.",
        "Functional Error Handling: Modeled all network, role-authorization, and scanner edge cases explicitly using `fpdart` (`Either`) for predictable gate operations."
      ]
    },
    ar: {
      title: "سند العميل (Sanad Agent) — نظام بوابات الفعاليات والتحقق من التذاكر",
      org: "شركة بِكُمْ (Becom) · طرابلس، ليبيا",
      role: "مهندس تطبيقات Flutter",
      overview: "تطوير تطبيق تشغيلي مخصص لفرق تنظيم الفعاليات وحسابات الشركات (`COMPANY`) لفحص التذاكر والتحكم في دخول الحضور بسرعة وموثوقية عالية عند البوابات.",
      highlights: [
        "آلة حالة من خطوتين لمنع إحراق التذاكر: فصل خطوة الفحص الاستعلامي لرمز QR (عرض بيانات الحامل والفئة وحالة الاستخدام) عن خطوة تأكيد الدخول الفعلي لمنع استهلاك التذاكر بالخطأ.",
        "إدارة ذكية للكاميرا وظروف الميدان: بناء حراس دورة حياة الكاميرا لمنع التجمد واستنزاف البطارية، منع المسح المزدوج، توفير إدخال يدوي فوري لرمز التذكرة، وتمويه شاشة التطبيق في الخلفية على iOS.",
        "معالجة وظيفية صارمة للأخطاء: استخدام `fpdart` لمعالجة كافة حالات الشبكة والصلاحيات والمسح بشكل صريح وموثوق."
      ]
    }
  },

  lingo: {
    apple: "https://apps.apple.com/us/app/lingo-%D9%84%D9%8A%D9%86%D9%82%D9%88/id1559887910",
    google: "https://play.google.com/store/apps/details?id=com.ebtekar.lingo",
    pos: false,
    stack: [
      "Flutter",
      "Agora Interactive Live Streaming",
      "Laravel WebSockets",
      "Video & Audio Playback",
      "RESTful APIs"
    ],
    en: {
      title: "Lingo — Live Interactive Classrooms & EdTech Platform",
      org: "Ebtekar Information Systems Company (EISC) · Tripoli, Libya",
      role: "Lead Flutter Mobile Engineer",
      overview: "Led the end-to-end mobile architecture and store delivery of an interactive language and academic learning platform combining real-time live streaming classrooms with on-demand coursework.",
      highlights: [
        "Low-Latency Live Classrooms: Integrated Agora Interactive Live Streaming SDK supporting real-time teacher/student audio-video broadcasting, role switching, and unstable-network recovery.",
        "Real-Time Classroom Signaling: Synchronized live chat, hand-raising, and session state transitions over Laravel WebSockets.",
        "On-Demand Media & Course Progression: Built structured curriculum browsing, recorded lesson playback, and student progress tracking across Android and iOS."
      ]
    },
    ar: {
      title: "لينقو (Lingo) — منصة التعليم التفاعلي والفصول المباشرة",
      org: "شركة ابتكار لنظم المعلومات (EISC) · طرابلس، ليبيا",
      role: "مهندس Flutter رئيسي",
      overview: "قيادة تصميم وتطوير وإطلاق تطبيق تعليمي تفاعلي يجمع بين الفصول الافتراضية المباشرة بالصوت والصورة والمناهج التعليمية المسجّلة على أندرويد و iOS.",
      highlights: [
        "بث مباشر منخفض التأخير: دمج حزمة Agora Interactive Live Streaming لدعم البث الصوتي والمرئي التفاعلي بين المعلم والطلاب مع التكيف التلقائي مع جودة الشبكة.",
        "تفاعل لحظي داخل الفصل: مزامنة المحادثات الفورية ورفع اليد وتحديثات الجلسة عبر Laravel WebSockets.",
        "تجربة تعلم متكاملة: بناء مشغل دروس مسجلة وتصفح مناهج منظم ومتابعة تقدم الطالب."
      ]
    }
  },

  shin: {
    apple: "https://apps.apple.com/us/app/%D8%B4%D9%86-%D8%A7%D9%84%D8%AC%D9%88/id6503896230?platform=iphone",
    google: "https://play.google.com/store/apps/details?id=com.ebtekar.shin_aljaw",
    pos: false,
    stack: [
      "Flutter",
      "Riverpod",
      "Dio HTTP Client",
      "GoRouter",
      "Geolocation & Weather APIs",
      "Arabic Cultural Localization"
    ],
    en: {
      title: "Shin Aljaw — Localized Weather, Marine & Agricultural Forecasting",
      org: "Ebtekar Information Systems Company (EISC) · Tripoli, Libya",
      role: "Lead Flutter Mobile Engineer",
      overview: "Designed and shipped a culturally localized meteorological and marine forecasting app tailored to Libyan cities, coastal fishermen, travelers, and farmers.",
      highlights: [
        "Marine & Coastal Intelligence: Delivered hourly wind speed/direction, wave height, visibility, and sea-state indicators for safe coastal navigation and trip planning.",
        "Seasonal & Agricultural Calendars: Modeled traditional regional weather seasons and agricultural guidance alongside multi-day meteorological forecasts.",
        "Clean Reactive Architecture: Built with Riverpod state management, Dio interceptors/caching, and declarative GoRouter navigation."
      ]
    },
    ar: {
      title: "شن الجو — تطبيق الطقس والملاحة البحرية والمواسم الزراعية",
      org: "شركة ابتكار لنظم المعلومات (EISC) · طرابلس، ليبيا",
      role: "مهندس Flutter رئيسي",
      overview: "تصميم وبناء وإطلاق تطبيق أرصاد جوية وملاحة بحرية بهوية محلية مخصصة للمدن الليبية والبحّارة والمسافرين والمزارعين.",
      highlights: [
        "بيانات الملاحة وحالة البحر: عرض تفصيلي لسرعة واتجاه الرياح وارتفاع الأمواج والرؤية الأفقية لدعم سلامة الرحلات البحرية والبرية.",
        "التقويم الزراعي والمواسم الشعبية: دمج المواسم المناخية والزراعية المحلية مع التوقعات الجوية الساعية والأسبوعية.",
        "معمارية نظيفة وسريعة الاستجابة: بناء التطبيق باستخدام Riverpod و Dio مع التخزين المؤقت والتوجيه التصريحي عبر GoRouter."
      ]
    }
  }
};
