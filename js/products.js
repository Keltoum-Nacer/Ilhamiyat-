const PRODUCT_MAP = (() => {
  const map = new Map();
  [...resinProducts, ...gypsumProducts, ...giftProducts].forEach((p) => map.set(p.id, p));
  return map;
})();

function getProductName(p, lang) {
  return (p.name && p.name[lang]) || p.name.en;
}

let modalProduct = null;
let modalIndex = 0;
let modalImages = [];

function productImages(p) {
  const list = [p.img];
  if (Array.isArray(p.gallery)) list.push(...p.gallery);
  return list;
}

function productDescription(p, lang) {
  return (p.desc && (p.desc[lang] || p.desc.en)) || "";
}

function productCardHTML(p, lang, ref) {
  const t = translations[lang];
  const catLabel = t.cat[p.badgeKey || p.cat] || p.cat;
  const price = typeof p.price === "number" ? p.price.toFixed(2) : p.price;
  const total = productImages(p).length;
  const photosBadge = total > 1 ? `<span class="product-photos">${total} <span class="camera-emoji">📷</span></span>` : "";
  return `
    <div class="product-card" data-category="${p.cat}">
      <div class="product-img" data-id="${p.id}" data-ref="${ref}" data-action="view" style="background-image:url('${p.img}')">
        <span class="product-badge">${catLabel}</span>
        ${photosBadge}
      </div>
      <div class="product-info">
        <h3 data-action="view" data-id="${p.id}" data-ref="${ref}">${getProductName(p, lang)}</h3>
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

const GRID_PRODUCT_MAP = new Map();

function renderProductGrids() {
  const lang = getCurrentLang();
  document.querySelectorAll("#products-grid").forEach((grid) => {
    const key = grid.dataset.productGrid;
    const products = productsFor(key);
    GRID_PRODUCT_MAP.clear();
    grid.innerHTML = products
      .map((p, i) => {
        const ref = `${key}:${i}`;
        GRID_PRODUCT_MAP.set(ref, p);
        return productCardHTML(p, lang, ref);
      })
      .join("");
  });
}

function resolveProduct(trigger) {
  return (
    (trigger.dataset.ref && GRID_PRODUCT_MAP.get(trigger.dataset.ref)) ||
    PRODUCT_MAP.get(trigger.dataset.id) ||
    null
  );
}

function filterProducts(category, btn) {
  document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.display = category === "all" || card.dataset.category === category ? "flex" : "none";
  });
}

function ensureModalElement() {
  if (document.getElementById("product-modal")) return;
  const el = document.createElement("div");
  el.id = "product-modal";
  el.className = "product-modal";
  el.innerHTML = `
    <button class="product-modal-close" aria-label="Close">&times;</button>
    <div class="product-modal-inner">
      <div class="product-modal-head">
        <div class="product-modal-headings">
          <h3 class="product-modal-title"></h3>
          <p class="product-modal-desc"></p>
        </div>
        <span class="product-modal-price"></span>
      </div>
      <div class="product-modal-stage">
        <button class="product-modal-nav product-modal-prev" aria-label="Previous">&#8249;</button>
        <img class="product-modal-img" alt="">
        <button class="product-modal-nav product-modal-next" aria-label="Next">&#8250;</button>
      </div>
      <div class="product-modal-thumbs"></div>
      <div class="product-modal-foot">
        <span class="product-modal-count"></span>
        <button class="add-to-cart product-modal-cart"></button>
      </div>
    </div>`;
  document.body.appendChild(el);

  el.querySelector(".product-modal-close").addEventListener("click", closeModal);
  el.querySelector(".product-modal-prev").addEventListener("click", () => changeModalImage(-1));
  el.querySelector(".product-modal-next").addEventListener("click", () => changeModalImage(1));
  el.querySelector(".product-modal-cart").addEventListener("click", closeModal);
  el.addEventListener("click", (e) => {
    if (e.target === el) closeModal();
  });
}

function renderModal() {
  const el = document.getElementById("product-modal");
  if (!el || !modalProduct) return;
  const lang = getCurrentLang();
  const t = translations[lang];
  const p = modalProduct;
  const name = getProductName(p, lang);
  const price = typeof p.price === "number" ? p.price.toFixed(2) : p.price;
  const multi = modalImages.length > 1;

  el.querySelector(".product-modal-title").textContent = name;
  const description = productDescription(p, lang);
  const descEl = el.querySelector(".product-modal-desc");
  descEl.textContent = description;
  descEl.style.display = description ? "block" : "none";
  el.querySelector(".product-modal-price").textContent = `${t.common.currency} ${price}`;

  const stage = el.querySelector(".product-modal-img");
  stage.src = modalImages[modalIndex];
  stage.alt = name;

  el.querySelector(".product-modal-prev").style.display = multi ? "flex" : "none";
  el.querySelector(".product-modal-next").style.display = multi ? "flex" : "none";
  el.querySelector(".product-modal-count").textContent = multi
    ? `${modalIndex + 1} / ${modalImages.length}`
    : "";

  const cartBtn = el.querySelector(".product-modal-cart");
  cartBtn.textContent = t.common.addToCart;
  cartBtn.dataset.id = p.id;
  cartBtn.dataset.name = name;
  cartBtn.dataset.price = price;
  cartBtn.dataset.img = p.img;

  const thumbs = el.querySelector(".product-modal-thumbs");
  thumbs.style.display = multi ? "flex" : "none";
  thumbs.innerHTML = multi
    ? modalImages
        .map(
          (src, i) =>
            `<button class="product-modal-thumb${i === modalIndex ? " active" : ""}" data-index="${i}"><img src="${src}" alt=""></button>`
        )
        .join("")
    : "";
}

function openModal(product) {
  modalProduct = product;
  modalImages = productImages(product);
  modalIndex = 0;
  ensureModalElement();
  renderModal();
  const el = document.getElementById("product-modal");
  el.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  const el = document.getElementById("product-modal");
  if (!el) return;
  el.classList.remove("open");
  document.body.classList.remove("no-scroll");
  modalProduct = null;
}

function changeModalImage(delta) {
  if (modalImages.length < 2) return;
  modalIndex = (modalIndex + delta + modalImages.length) % modalImages.length;
  renderModal();
}

function refreshOpenModal() {
  if (modalProduct) renderModal();
}

function initModal() {
  document.addEventListener("click", (e) => {
    const thumb = e.target.closest(".product-modal-thumb");
    if (thumb) {
      modalIndex = parseInt(thumb.dataset.index, 10);
      renderModal();
      return;
    }
    const trigger = e.target.closest('[data-action="view"]');
    if (!trigger) return;
    const product = resolveProduct(trigger);
    if (product) openModal(product);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (!modalProduct) return;
  if (e.key === "ArrowLeft") changeModalImage(document.body.classList.contains("rtl") ? 1 : -1);
  if (e.key === "ArrowRight") changeModalImage(document.body.classList.contains("rtl") ? -1 : 1);
});

document.addEventListener("DOMContentLoaded", () => {
  renderProductGrids();
  initModal();
});
