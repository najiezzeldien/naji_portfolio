/* ============================================================
   MAIN.JS — Portfolio Interactive Architecture
   - Bilingual i18n (EN / AR) with native LTR/RTL mirroring
   - System-aware Light/Dark theme toggle (<meta name="color-scheme">)
   - Intrinsic ResizeObserver navigation bar + Popover fallback
   - Scrollspy (:target-current + IntersectionObserver fallback)
   - Domain project filtering + Timeline deep-link highlighting
   - Native <dialog> Case Study modal with top-layer transitions
   ============================================================ */

(() => {
  "use strict";

  /* ── Safe Storage Helpers ─────────────────────────────────── */
  function getStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }

  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  }

  /* ── State ────────────────────────────────────────────────── */
  let currentLang = getStorage("portfolio-lang") === "ar" ? "ar" : "en";
  let currentFilter = "all";
  let activeCaseStudyId = null;
  let measureNavbarFn = null;

  /* ── SVG Templates for Store Icons in Modal ───────────────── */
  const APPLE_PATH =
    "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z";
  const PLAY_PATH =
    "M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.59 12l-1.87-2.21-2.27 2.27 2.27 2.15zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z";

  function createSvgIcon(pathData) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("icon-svg");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    return svg;
  }

  function createPosSvgIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("icon-svg");

    const rect = document.createElementNS(ns, "rect");
    rect.setAttribute("x", "2");
    rect.setAttribute("y", "3");
    rect.setAttribute("width", "20");
    rect.setAttribute("height", "14");
    rect.setAttribute("rx", "2");
    rect.setAttribute("ry", "2");

    const l1 = document.createElementNS(ns, "line");
    l1.setAttribute("x1", "8");
    l1.setAttribute("y1", "21");
    l1.setAttribute("x2", "16");
    l1.setAttribute("y2", "21");

    const l2 = document.createElementNS(ns, "line");
    l2.setAttribute("x1", "12");
    l2.setAttribute("y1", "17");
    l2.setAttribute("x2", "12");
    l2.setAttribute("y2", "21");

    svg.append(rect, l1, l2);
    return svg;
  }

  /* ── 1. Bilingual i18n Engine ─────────────────────────────── */
  function updateProjectsCountText() {
    const countEl = document.getElementById("projectsCount");
    if (!countEl) return;
    const visibleCards = document.querySelectorAll(".project-card:not([hidden])").length;
    const dict = translations[currentLang] || translations.en;
    const template = dict["proj.showing"] || "Showing {count} of 10 published applications";
    countEl.textContent = template.replace("{count}", String(visibleCards));
  }

  function applyLanguage(lang) {
    currentLang = lang === "ar" ? "ar" : "en";
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === "ar" ? "rtl" : "ltr";

    const dict = translations[currentLang];
    if (dict) {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && Object.hasOwn(dict, key)) {
          el.textContent = dict[key];
        }
      });

      document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        if (key && Object.hasOwn(dict, key)) {
          el.setAttribute("aria-label", dict[key]);
        }
      });
    }

    document.title =
      currentLang === "ar"
        ? "ناجي عزالدين — مهندس أول لتطبيقات الجوّال (Flutter) | ملف الأعمال"
        : "Naji Ezzeldien — Senior Mobile Applications Engineer (Flutter) | Portfolio";

    updateProjectsCountText();

    const dialog = document.getElementById("case-study-dialog");
    if (dialog && dialog.open && activeCaseStudyId) {
      populateCaseStudyModal(activeCaseStudyId);
    }

    if (typeof measureNavbarFn === "function") {
      measureNavbarFn(true);
    }
  }

  function initLanguageToggle() {
    const langBtn = document.getElementById("langSwitch");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const next = currentLang === "en" ? "ar" : "en";
        setStorage("portfolio-lang", next);
        applyLanguage(next);
      });
    }
    applyLanguage(currentLang);
  }

  /* ── 2. Two-State System-Aware Theme Toggle ───────────────── */
  function initThemeToggle() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const toggleBtn = document.getElementById("themeToggle");
    if (!meta || !toggleBtn) return;

    const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    toggleBtn.addEventListener("click", () => {
      const stored = getStorage("color-scheme");
      const validStored = stored === "light" || stored === "dark" ? stored : null;
      const systemScheme = systemDarkQuery.matches ? "dark" : "light";
      const currentlyRendered = validStored ?? systemScheme;
      const target = currentlyRendered === "dark" ? "light" : "dark";

      if (target !== systemScheme) {
        setStorage("color-scheme", target);
        meta.content = target;
      } else {
        removeStorage("color-scheme");
        meta.content = "light dark";
      }
    });

    window.addEventListener("storage", (event) => {
      if (event.key === "color-scheme") {
        const val = event.newValue;
        meta.content = val === "light" || val === "dark" ? val : "light dark";
      } else if (event.key === "portfolio-lang" && (event.newValue === "ar" || event.newValue === "en")) {
        applyLanguage(event.newValue);
      }
    });
  }

  /* ── 3. Intrinsic Adaptive Navbar + Popover Fallback ──────── */
  function initAdaptiveNavbar() {
    const siteHeader = document.getElementById("siteHeader");
    const headerInner = document.getElementById("headerInner");
    const menuButton = document.getElementById("menuButton");
    const siteMenu = document.getElementById("site-menu");
    if (!siteHeader || !headerInner || !menuButton || !siteMenu) return;

    let usingOfflineFallback = false;

    if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
      import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js").catch(() => {
        usingOfflineFallback = true;
        menuButton.addEventListener("click", () => {
          if (siteHeader.classList.contains("is-wide")) return;
          siteMenu.classList.toggle("fallback-open");
        });
        document.addEventListener("click", (e) => {
          if (
            siteMenu.classList.contains("fallback-open") &&
            !siteMenu.contains(e.target) &&
            !menuButton.contains(e.target)
          ) {
            siteMenu.classList.remove("fallback-open");
          }
        });
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && siteMenu.classList.contains("fallback-open")) {
            siteMenu.classList.remove("fallback-open");
            menuButton.focus();
          }
        });
      });
    }

    let isWide = false;
    let lastHeaderWidth = 0;

    function isMenuCurrentlyOpen() {
      if (usingOfflineFallback) {
        return siteMenu.classList.contains("fallback-open");
      }
      try {
        return siteMenu.matches(":popover-open") || siteMenu.classList.contains(":popover-open");
      } catch {
        return siteMenu.classList.contains(":popover-open");
      }
    }

    function closeCollapsedMenu() {
      if (siteHeader.classList.contains("is-wide")) return;
      if (usingOfflineFallback) {
        siteMenu.classList.remove("fallback-open");
      } else if (typeof siteMenu.hidePopover === "function" && isMenuCurrentlyOpen()) {
        try {
          siteMenu.hidePopover();
        } catch {}
      }
    }

    function measureNavbar(force = false) {
      const currentWidth = headerInner.clientWidth;
      if (!force && !isWide && currentWidth <= lastHeaderWidth) {
        lastHeaderWidth = currentWidth;
        return;
      }
      lastHeaderWidth = currentWidth;

      const wasOpen = !isWide && isMenuCurrentlyOpen();

      siteHeader.classList.add("is-measuring", "is-wide");
      siteMenu.removeAttribute("popover");

      const fits = headerInner.scrollWidth <= headerInner.clientWidth;
      isWide = fits;

      if (!fits) {
        siteHeader.classList.remove("is-wide");
        siteMenu.setAttribute("popover", "auto");
        if (wasOpen) {
          if (usingOfflineFallback) {
            siteMenu.classList.add("fallback-open");
          } else if (typeof siteMenu.showPopover === "function") {
            try {
              siteMenu.showPopover();
            } catch {}
          }
        }
      } else {
        siteMenu.classList.remove("fallback-open");
      }

      requestAnimationFrame(() => {
        siteHeader.classList.remove("is-measuring");
      });
    }

    measureNavbarFn = measureNavbar;
    measureNavbar(true);

    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(() => measureNavbar(false));
      ro.observe(siteHeader);
      ro.observe(siteMenu);
    } else {
      window.addEventListener("resize", () => measureNavbar(true));
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => measureNavbar(true)).catch(() => {});
    }

    siteMenu.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeCollapsedMenu();
      });
    });
  }

  /* ── 4. Scrollspy (:target-current + IntersectionObserver) ── */
  function initScrollspy() {
    const navLinks = Array.from(document.querySelectorAll(".site-menu a.nav-link"));
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    if (!navLinks.length || !sections.length) return;

    const supportsScrollTargetGroup = Boolean(
      window.CSS && typeof window.CSS.supports === "function" && window.CSS.supports("scroll-target-group: auto")
    );

    if (supportsScrollTargetGroup) {
      const syncAriaCurrent = () => {
        let currentLink = null;
        try {
          currentLink = document.querySelector(".site-menu a.nav-link:target-current");
        } catch {}
        navLinks.forEach((link) => {
          link.setAttribute("aria-current", link === currentLink ? "true" : "false");
        });
      };
      syncAriaCurrent();
      document.addEventListener("scrollend", syncAriaCurrent, { passive: true });
      return;
    }

    if ("IntersectionObserver" in window) {
      const setActiveId = (id) => {
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("target-current", isActive);
          link.setAttribute("aria-current", isActive ? "true" : "false");
        });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              if (id) setActiveId(id);
            }
          });
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
      );

      sections.forEach((section) => observer.observe(section));
    }
  }

  /* ── 5. Project Domain Filtering & Timeline Deep Links ────── */
  function applyProjectFilter(filterValue) {
    currentFilter = filterValue;
    const buttons = document.querySelectorAll(".filter-btn[data-filter]");
    const cards = document.querySelectorAll(".project-card[data-category]");

    buttons.forEach((btn) => {
      const isSelected = btn.dataset.filter === filterValue;
      btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });

    cards.forEach((card) => {
      const matches = filterValue === "all" || card.dataset.category === filterValue;
      card.hidden = !matches;
      if (matches) {
        card.classList.add("is-revealed");
      }
    });

    updateProjectsCountText();
  }

  function initProjectFilteringAndLinks() {
    document.querySelectorAll(".filter-btn[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyProjectFilter(btn.dataset.filter || "all");
      });
    });

    document.querySelectorAll('a[href^="#proj-"]').forEach((chip) => {
      chip.addEventListener("click", (event) => {
        const targetId = chip.getAttribute("href");
        if (!targetId) return;
        const targetCard = document.querySelector(targetId);
        if (!targetCard) return;

        event.preventDefault();

        if (targetCard.hidden) {
          applyProjectFilter("all");
        }

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        targetCard.scrollIntoView({
          behavior: prefersReduced ? "instant" : "smooth",
          block: "center"
        });

        targetCard.classList.remove("is-highlighted");
        void targetCard.offsetWidth;
        targetCard.classList.add("is-highlighted");
        window.setTimeout(() => {
          targetCard.classList.remove("is-highlighted");
        }, 2200);
      });
    });
  }

  /* ── 6. Native Modal <dialog> Case Study + Top-Layer Exit ─── */
  let supportsDisplayTransition;

  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.("transition-behavior", "allow-discrete") || !document.body) {
      return false;
    }
    const probe = document.createElement("div");
    probe.style.cssText = "transition: display 1s allow-discrete !important; display: block;";
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = "none";
    supportsDisplayTransition = getComputedStyle(probe).display === "block";
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return Boolean(window.CSS?.supports?.("overlay", "auto")) && canTransitionDisplay();
  }

  async function closeTopLayer(dialog) {
    if (!dialog || !dialog.open) return;

    if (!supportsTopLayerExit()) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((resolve) => window.setTimeout(resolve, 400))
        ]);
      }
      if (!dialog.hasAttribute("data-closing")) return;
      dialog.removeAttribute("data-closing");
    }

    dialog.close();
  }

  function populateCaseStudyModal(projectId) {
    const data = projectCaseStudies[projectId];
    if (!data) return;
    const localized = data[currentLang] || data.en;
    const dict = translations[currentLang] || translations.en;

    const orgEl = document.getElementById("case-dialog-org");
    const titleEl = document.getElementById("case-dialog-title");
    const roleEl = document.getElementById("case-dialog-role");
    const overviewEl = document.getElementById("case-dialog-overview");
    const highlightsList = document.getElementById("case-dialog-highlights");
    const stackList = document.getElementById("case-dialog-stack");
    const storesContainer = document.getElementById("case-dialog-stores");

    if (orgEl) orgEl.textContent = localized.org;
    if (titleEl) titleEl.textContent = localized.title;
    if (roleEl) roleEl.textContent = localized.role;
    if (overviewEl) overviewEl.textContent = localized.overview;

    if (highlightsList) {
      highlightsList.replaceChildren(
        ...localized.highlights.map((itemText) => {
          const li = document.createElement("li");
          li.textContent = itemText;
          return li;
        })
      );
    }

    if (stackList) {
      stackList.replaceChildren(
        ...data.stack.map((tech) => {
          const li = document.createElement("li");
          li.textContent = tech;
          return li;
        })
      );
    }

    if (storesContainer) {
      const nodes = [];
      if (data.apple) {
        const a = document.createElement("a");
        a.href = data.apple;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "store-btn";
        const span = document.createElement("span");
        span.textContent = dict["store.apple"] || "App Store";
        a.append(createSvgIcon(APPLE_PATH), span);
        nodes.push(a);
      }
      if (data.google) {
        const a = document.createElement("a");
        a.href = data.google;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "store-btn";
        const span = document.createElement("span");
        span.textContent = dict["store.google"] || "Google Play";
        a.append(createSvgIcon(PLAY_PATH), span);
        nodes.push(a);
      }
      if (data.pos) {
        const badge = document.createElement("span");
        badge.className = "store-badge";
        const span = document.createElement("span");
        span.textContent = dict["store.pos"] || "Sunmi POS Store";
        badge.append(createPosSvgIcon(), span);
        nodes.push(badge);
      }
      storesContainer.replaceChildren(...nodes);
    }
  }

  function initCaseStudyDialog() {
    const dialog = document.getElementById("case-study-dialog");
    const closeTop = document.getElementById("caseDialogCloseTop");
    const closeBottom = document.getElementById("caseDialogCloseBottom");
    if (!dialog) return;

    document.querySelectorAll("[data-case-study]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-case-study");
        if (!id || !projectCaseStudies[id]) return;
        activeCaseStudyId = id;
        dialog.removeAttribute("data-closing");
        populateCaseStudyModal(id);
        dialog.showModal();
        dialog.scrollTop = 0;
      });
    });

    if (closeTop) {
      closeTop.addEventListener("click", () => closeTopLayer(dialog));
    }
    if (closeBottom) {
      closeBottom.addEventListener("click", () => closeTopLayer(dialog));
    }

    dialog.addEventListener("cancel", (event) => {
      if (event.cancelable) {
        event.preventDefault();
        closeTopLayer(dialog);
      }
    });

    dialog.addEventListener("close", () => {
      dialog.returnValue = "";
      dialog.removeAttribute("data-closing");
      activeCaseStudyId = null;
    });

    /* Mandatory Fallback for browsers without <dialog closedby="any"> (e.g. Safari) */
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const isOutsideDialogBox = (e) => {
        const rect = dialog.getBoundingClientRect();
        return (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        );
      };

      let pressedOutside = false;
      dialog.addEventListener("pointerdown", (e) => {
        pressedOutside = e.target === dialog && isOutsideDialogBox(e);
      });
      dialog.addEventListener("pointerup", (e) => {
        if (pressedOutside && e.target === dialog && isOutsideDialogBox(e)) {
          closeTopLayer(dialog);
        }
        pressedOutside = false;
      });
    }
  }

  /* ── 7. Copy Email Button ─────────────────────────────────── */
  function initCopyEmail() {
    const copyBtn = document.getElementById("copyEmailBtn");
    const feedback = document.getElementById("copyFeedback");
    if (!copyBtn || !feedback) return;

    let clearTimer = null;

    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email || "aboalnaja10@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        const dict = translations[currentLang] || translations.en;
        feedback.textContent = dict["contact.copied"] || "Email copied to clipboard";
        if (clearTimer) window.clearTimeout(clearTimer);
        clearTimer = window.setTimeout(() => {
          feedback.textContent = "";
        }, 3500);
      } catch {}
    });
  }

  /* ── 8. Compositor-Friendly Scroll Reveal ─────────────────── */
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ── Initialize Everything on DOM Ready ───────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initAdaptiveNavbar();
    initLanguageToggle();
    initScrollspy();
    initProjectFilteringAndLinks();
    initCaseStudyDialog();
    initCopyEmail();
    initScrollReveal();
  });
})();
