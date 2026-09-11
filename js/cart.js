const CART_STORAGE_KEY = "ilhamiyat_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  showCart();
  showToast();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((p) => p.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.textContent = count;
    countEl.style.display = count > 0 ? "flex" : "none";
  }
  renderCartItems();
}

function renderCartItems() {
  const cart = getCart();
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const emptyCart = document.getElementById("cart-empty");
  const cartBody = document.getElementById("cart-body");

  if (!cartList) return;

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = "block";
    if (cartBody) cartBody.style.display = "none";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  if (cartBody) cartBody.style.display = "block";

  const lang = getCurrentLang();
  const t = translations[lang];
  const currency = t.common.currency;

  cartList.innerHTML = cart
    .map((item) => {
      return `
        <div class="cart-item">
          <div class="cart-item-img" style="background-image: url('${item.img}')"></div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${currency} ${item.price.toFixed(2)}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-total">${currency} ${(item.price * item.qty).toFixed(2)}</span>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="${t.cart.remove}" aria-label="${t.cart.remove}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  const total = getCartTotal();
  if (totalEl) totalEl.textContent = `${t.cart.total} ${currency} ${total.toFixed(2)}`;
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      const cartItems = getCart();
      if (cartItems.length === 0) return;
      sendWhatsAppOrder(cartItems, total, currency, lang);
    };
  }
}

function showCart() {
  document.getElementById("cart-panel")?.classList.add("open");
  document.querySelector(".cart-overlay")?.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  document.getElementById("cart-panel")?.classList.remove("open");
  document.querySelector(".cart-overlay")?.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

function getCurrentLang() {
  return localStorage.getItem("ilhamiyat_lang") || "en";
}

function showToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;
  const lang = getCurrentLang();
  const msg = translations[lang].cart.added || "Added to cart!";
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("add-to-cart")) {
      const id = e.target.dataset.id;
      const name = e.target.dataset.name;
      const price = parseFloat(e.target.dataset.price);
      const img = e.target.dataset.img;
      addToCart({ id, name, price, img });
    }
  });
  updateCartUI();
});
