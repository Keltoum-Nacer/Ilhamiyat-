function trackPixel(event, params) {
  if (typeof fbq !== "function") return;
  try {
    fbq("track", event, params || {});
  } catch (e) {
    /* tracking must never break the site */
  }
}

function pixelLang() {
  return document.documentElement.lang || "en";
}

function pixelCurrency() {
  return typeof CURRENCY === "string" ? CURRENCY : "MAD";
}

function pixelProductName(product) {
  if (!product || !product.name) return undefined;
  if (typeof product.name === "string") return product.name;
  const lang = pixelLang();
  return product.name[lang] || product.name.en || product.name.ar || product.name.fr;
}

function trackProductEvent(event, product, extra) {
  if (!product) return;
  const params = {
    content_ids: [product.id],
    content_type: "product",
    content_name: pixelProductName(product),
    currency: pixelCurrency(),
  };
  const category = product.badgeKey || product.cat;
  if (category) params.content_category = category;
  const price = parseFloat(product.price);
  if (!isNaN(price)) params.value = price;
  if (extra) Object.assign(params, extra);
  trackPixel(event, params);
}

function trackCartEvent(event) {
  if (typeof getCart !== "function") return;
  const cart = getCart();
  if (!cart || cart.length === 0) return;
  trackPixel(event, {
    content_ids: cart.map((item) => item.id),
    content_type: "product",
    value: getCartTotal(),
    currency: pixelCurrency(),
  });
}

document.addEventListener("click", (e) => {
  const link = e.target && e.target.closest ? e.target.closest('a[href*="wa.me"], a[href*="ig.me"]') : null;
  if (!link) return;
  const channel = link.href.includes("ig.me") ? "Instagram" : "WhatsApp";
  trackPixel("Contact", { content_name: channel });
});
