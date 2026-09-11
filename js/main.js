document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("ilhamiyat_lang") || "en";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("ilhamiyat_lang", lang);
      applyLanguage(lang);
    });
  });

  document.querySelectorAll(".lang-select").forEach((select) => {
    select.value = savedLang;
    select.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("ilhamiyat_lang", lang);
      applyLanguage(lang);
    });
  });

  document.querySelectorAll('a[href^="#"][data-scroll]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  document.getElementById("mobile-toggle")?.addEventListener("click", () => {
    document.getElementById("mobile-menu")?.classList.toggle("open");
  });
});

function applyLanguage(lang) {
  const t = translations[lang];
  const meta = languageMeta[lang];
  const dir = meta.dir;

  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.body.classList.toggle("rtl", dir === "rtl");
  document.body.classList.toggle("ltr", dir !== "rtl");

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.dataset.translate;
    const value = key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), t);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-translate-html]").forEach((el) => {
    const key = el.dataset.translateHtml;
    const value = key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), t);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  if (typeof renderProductGrids === "function") renderProductGrids();
  if (typeof updateCartUI === "function") updateCartUI();
}
