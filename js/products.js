const PRODUCT_MAP = (() => {
  const map = new Map();
  [...resinProducts, ...gypsumProducts, ...giftProducts].forEach((p) => map.set(p.id, p));
  return map;
})();

function getProductName(p, lang) {
  return (p.name && p.name[lang]) || p.name.en;
}

function productImages(p) {
  const list = [p.img];
  if (Array.isArray(p.gallery)) list.push(...p.gallery);
  return list;
}

function productCardHTML(p, lang) {
  const t = translations[lang];
  const catLabel = t.cat[p.badgeKey || p.cat] || p.cat;
  const price = typeof p.price === "number" ? p.price.toFixed(2) : p.price;
  const total = productImages(p).length;
  const photosBadge = total > 1 ? `<span class="product-photos">${total} <span class="camera-emoji">📷</span></span>` : "";
  return `
    <div class="product-card" data-category="${p.cat}">
      <div class="product-img" data-id="${p.id}" style="background-image:url('${p.img}')">
        <span class="product-badge">${catLabel}</span>
        ${photosBadge}
      </div>
      <div class="product-info">
        <h3>${getProductName(p, lang)}</h3>
        <span class="product-price">${t.common.currency} ${price}</span>
        <button class="add-to-cart" data-id="${p.id}" data-name="${getProductName(p, lang)}" data-price="${price}" data-img="${p.img}">
          ${t.common.addToCart}
        </button>
      </div>
    </div>`;
}

function productsFor(key) {
  if (key === "resin") return resinProducts;
  if (key === "gypsum") return gypsumProducts;
  if (key === "gifts") return giftProducts;
  if (key === "featured") return featuredProducts;
  return [];
}

function renderProductGrids() {
  const lang = getCurrentLang();
  document.querySelectorAll("#products-grid").forEach((grid) => {
    const key = grid.dataset.productGrid;
    const products = productsFor(key);
    grid.innerHTML = products.map((p) => productCardHTML(p, lang)).join("");
  });
}

function filterProducts(category, btn) {
  document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.display = category === "all" || card.dataset.category === category ? "flex" : "none";
  });
}

let lightboxIndex = 0;
let lightboxImages = [];

function initLightbox() {
  document.addEventListener("click", (e) => {
    const imgEl = e.target.closest(".product-img");
    if (!imgEl) return;
    const product = PRODUCT_MAP.get(imgEl.dataset.id);
    if (!product) return;
    lightboxImages = productImages(product);
    lightboxIndex = 0;
    ensureLightboxElement();
    showLightboxImage();
    document.getElementById("lightbox").classList.add("open");
    document.body.classList.add("no-scroll");
  });
}

function ensureLightboxElement() {
  if (document.getElementById("lightbox")) return;
  const el = document.createElement("div");
  el.id = "lightbox";
  el.className = "lightbox";
  el.innerHTML = `
    <button class="lightbox-close" aria-label="Close">×</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
    <img id="lightbox-img" alt="Product image">
    <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
    <span class="lightbox-count" id="lightbox-count"></span>`;
  document.body.appendChild(el);

  el.addEventListener("click", (e) => {
    if (e.target === el || e.target.id === "lightbox-img") closeLightbox();
  });
  el.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  el.querySelector(".lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    prevLightboxImage();
  });
  el.querySelector(".lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    nextLightboxImage();
  });
}

function showLightboxImage() {
  if (!lightboxImages.length) return;
  document.getElementById("lightbox-img").src = lightboxImages[lightboxIndex];
  document.getElementById("lightbox-count").textContent =
    `${lightboxIndex + 1} / ${lightboxImages.length}`;
  const single = lightboxImages.length <= 1;
  document.querySelector(".lightbox-prev").style.display = single ? "none" : "flex";
  document.querySelector(".lightbox-next").style.display = single ? "none" : "flex";
  document.querySelector(".lightbox-count").style.display = single ? "none" : "block";
}

function prevLightboxImage() {
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  showLightboxImage();
}

function nextLightboxImage() {
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  showLightboxImage();
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevLightboxImage();
  if (e.key === "ArrowRight") nextLightboxImage();
});

document.addEventListener("DOMContentLoaded", () => {
  renderProductGrids();
  initLightbox();
});