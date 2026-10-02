// Theme toggle with persistence + respect for OS preference.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  const themeImages = document.querySelectorAll("[data-light-src][data-dark-src]");

  function syncThemeImages(theme) {
    themeImages.forEach(function (image) {
      image.src = theme === "dark" ? image.dataset.darkSrc : image.dataset.lightSrc;
    });
  }

  // Priority: saved choice > OS preference > the default in the HTML tag.
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  syncThemeImages(root.getAttribute("data-theme") || "light");

  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncThemeImages(next);
  });
})();

// Auto-update footer year.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Assemble mailto links at runtime so the address isn't sitting in the
// static HTML for spam harvesters to scrape.
document.querySelectorAll("[data-email]").forEach(function (link) {
  const [user, domain] = link.dataset.email.split(",");
  link.href = "mailto:" + user + "@" + domain;
});

// Mobile nav: collapse the site-nav behind a menu button.
(function () {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  if (!navToggle || !siteNav) return;

  function closeNav() {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", function (event) {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) closeNav();
  });
})();
