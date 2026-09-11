const WHATSAPP_NUMBER = "212634458532";
const WHATSAPP_DISPLAY = "+212 6 34 45 85 32";
function formatNumber(n) {
  const [int, dec] = n.toFixed(2).split(".");
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "." + dec;
}

function formatInt(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function toArabicDigits(str) {
  return str.replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d, 10)]);
}

function formatWhatsAppMessage(cartItems, total, currency, lang) {
  const isAr = lang === "ar";
  const labels = {
    head: isAr ? "طلب جديد" : lang === "fr" ? "NOUVELLE COMMANDE" : "NEW ORDER",
    unit: isAr ? "سعر الوحدة" : lang === "fr" ? "Prix unitaire" : "Unit price",
    subtotal: isAr ? "المجموع الفرعي" : lang === "fr" ? "Sous-total" : "Subtotal",
    total: isAr ? "المجموع" : "TOTAL",
    to: isAr ? "تواصل معي على" : lang === "fr" ? "Contactez-moi sur" : "Reach me on",
    thanks: isAr ? "شكراً لطلبك!" : lang === "fr" ? "Merci pour votre commande !" : "Thank you for your order!"
  };

  const num = (value) => (isAr ? toArabicDigits(formatNumber(value)) : formatNumber(value));
  const numInt = (value) => (isAr ? toArabicDigits(formatInt(value)) : formatInt(value));
  const money = (amount) => `${currency} ${num(amount)}`;
  const sep = isAr ? "──────────────" : "──────────────";

  const lines = [];
  lines.push(`🛍️ *${labels.head}* 🛍️`, "");

  cartItems.forEach((item, i) => {
    lines.push(`${i + 1}. *${item.name}* × ${numInt(item.qty)}`);
    lines.push(`   • ${labels.unit}: ${money(item.price)}`);
    lines.push(`   • ${labels.subtotal}: ${money(item.price * item.qty)}`);
    if (i < cartItems.length - 1) lines.push("");
  });

  lines.push("", sep, `💰 *${labels.total}: ${money(total)}*`, sep);
  lines.push("", `📲 ${labels.to} ${WHATSAPP_DISPLAY}`, `🙏 ${labels.thanks}`);

  return encodeURIComponent(lines.join("\n"));
}

function sendWhatsAppOrder(cartItems, total, currency, lang) {
  const message = formatWhatsAppMessage(cartItems, total, currency, lang);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
}