const CURRENCY = "MAD";

const resinProducts = [
  { id: "resin-01", cat: "memories", price: 550, img: "images/resin/resin-01.jpeg",
    name: { en: "Flowers Preservation", ar: "حفظ الورود", fr: "Préservation de fleurs" } },
  { id: "resin-02", cat: "love", price: 250, img: "images/resin/resin-02.jpg",
    name: { en: "Wedding Trophy", ar: "جائزة الزفاف", fr: "Trophée de mariage" } },
  { id: "resin-03", cat: "love", price: 100, img: "images/resin/resin-03.jpeg",
    gallery: ["images/resin/resin-04.jpeg"],
    name: { en: "beloved trophy", ar: "تذكار حبيب", fr: "Trophée bien-aimé" } },
  { id: "resin-05", cat: "love", price: 100, img: "images/resin/resin-05.jpeg",
    gallery: ["images/resin/resin-06.jpeg"],
    name: { en: "Flowers Trophy", ar: "تذكار الورود", fr: "Trophée de fleurs" } },
  { id: "resin-07", cat: "decor", price: 250, img: "images/resin/resin-07.jpeg",
    name: { en: "Decorative Tray", ar: "صينية ديكور", fr: "Plateau décoratif" } },
  { id: "resin-08", cat: "accessories", price: 25, img: "images/resin/resin-08.jpeg",
    name: { en: "Keychain", ar: "سلسلة مفاتيح", fr: "Porte-clés" } },
  { id: "resin-09", cat: "accessories", price: 25, img: "images/resin/resin-09.jpeg",
    name: { en: "Pen", ar: "قلم", fr: "Stylo" } },
  { id: "resin-10", cat: "accessories", price: 70, img: "images/resin/resin-10.jpeg",
    name: { en: "Jewelry Holder", ar: "حامل مجوهرات", fr: "Porte-bijoux" } },
  { id: "resin-12", cat: "accessories", price: 80, img: "images/resin/resin-12.jpeg",
    gallery: ["images/resin/resin-13.jpeg"],
    name: { en: "jewelry holder", ar: "حامل مجوهرات", fr: "Porte-bijoux" } },
  { id: "resin-14", cat: "memories", price: 450, img: "images/resin/resin-14.jpeg",
    gallery: ["images/resin/resin-15.jpeg"],
    name: { en: "Preserved flower frame", ar: "إطار زهور محفوظة", fr: "Cadre de fleurs préservées" } },
  { id: "resin-20", cat: "love", price: 100, img: "images/resin/resin-20.jpeg",
    name: { en: "wedding trophy", ar: "جائزة الزفاف", fr: "Trophée de mariage" } },
  { id: "resin-21", cat: "accessories", price: 30, img: "images/resin/resin-21.jpeg",
    name: { en: "Book marks", ar: "فواصل كتب", fr: "Marque-pages" } }
];

const gypsumProducts = [
  { id: "gypsum-01", cat: "decor", price: 300, img: "images/gypsum/gypsum-01.jpeg",
    name: { en: "Classic Gypsum Vase", ar: "مزهرية جبس كلاسيكية", fr: "Vase classique en plâtre" } },
  { id: "gypsum-02", cat: "wallart", price: 450, img: "images/gypsum/gypsum-02.jpeg",
    name: { en: "Gypsum Wall Art", ar: "لوحة جدارية جبس", fr: "Art mural en plâtre" } },
  { id: "gypsum-03", cat: "decor", price: 350, img: "images/gypsum/gypsum-03.jpeg",
    name: { en: "Gypsum Decor Bowl", ar: "طبق ديكور جبس", fr: "Bol décoratif en plâtre" } },
  { id: "gypsum-04", cat: "molds", price: 280, img: "images/gypsum/gypsum-04.jpeg",
    name: { en: "Gypsum Craft Mold", ar: "قالب حرفي جبس", fr: "Moule artisanal en plâtre" } },
  { id: "gypsum-05", cat: "art", price: 250, img: "images/gypsum/gypsum-05.jpeg",
    name: { en: "Gypsum Figure", ar: "تمثال جبس", fr: "Figurine en plâtre" } },
  { id: "gypsum-06", cat: "decor", price: 220, img: "images/gypsum/gypsum-06.jpeg",
    name: { en: "Gypsum Candle Holder", ar: "حامل شموع جبس", fr: "Porte-bougie en plâtre" } },
  { id: "gypsum-07", cat: "wallart", price: 550, img: "images/gypsum/gypsum-07.jpeg",
    name: { en: "Gypsum Wall Panel", ar: "لوح جبس للجدار", fr: "Panneau mural en plâtre" } },
  { id: "gypsum-08", cat: "decor", price: 400, img: "images/gypsum/gypsum-08.jpeg",
    name: { en: "Gypsum Centerpiece", ar: "قطعة زينة مركزية جبس", fr: "Pièce centrale en plâtre" } },
  { id: "gypsum-09", cat: "decor", price: 380, img: "images/gypsum/gypsum-09.jpeg",
    name: { en: "Gypsum Decorative Vase", ar: "مزهرية ديكور جبس", fr: "Vase décoratif en plâtre" } },
  { id: "gypsum-10", cat: "art", price: 320, img: "images/gypsum/gypsum-10.jpeg",
    name: { en: "Hand-Painted Gypsum Art", ar: "فن جبس مرسوم يدوياً", fr: "Art en plâtre peint à la main" } },
  { id: "gypsum-11", cat: "decor", price: 260, img: "images/gypsum/gypsum-11.jpeg",
    name: { en: "Gypsum Ornament", ar: "زينة جبس", fr: "Ornement en plâtre" } },
  { id: "gypsum-12", cat: "decor", price: 300, img: "images/gypsum/gypsum-12.jpeg",
    name: { en: "Gypsum Flower Vase", ar: "مزهرية زهور جبس", fr: "Vase à fleurs en plâtre" } },
  { id: "gypsum-13", cat: "art", price: 180, img: "images/gypsum/gypsum-13.jpeg",
    name: { en: "Gypsum Mini Sculpture", ar: "تمثال جبس صغير", fr: "Mini sculpture en plâtre" } },
  { id: "gypsum-14", cat: "decor", price: 240, img: "images/gypsum/gypsum-14.jpeg",
    name: { en: "Gypsum Trinket Bowl", ar: "طبق جبس صغير", fr: "Coupelle en plâtre" } }
];

const giftProducts = [
  { id: "gift-01", cat: "wedding", price: 250, img: "images/gifts/gift-01.jpg",
    name: { en: "Wedding Gift Trophy", ar: "جائزة هدية الزفاف", fr: "Trophée cadeau de mariage" } },
  { id: "gift-02", cat: "friendship", price: 50, img: "images/gifts/gift-02.jpeg",
    name: { en: "Gift Box", ar: "علبة هدية", fr: "Boîte cadeau" } },
  { id: "gift-03", cat: "friendship", price: 45, img: "images/gifts/gift-03.jpeg",
    name: { en: "Personalized Gift", ar: "هدية مخصصة", fr: "Cadeau personnalisé" } },
  { id: "gift-04", cat: "friendship", price: 90, img: "images/gifts/gift-04.jpeg",
    name: { en: "Bestie Trophy", ar: "جائزة الصديق", fr: "Trophée du meilleur ami" } },
  { id: "gift-05", cat: "wedding", price: 100, img: "images/gifts/gift-05.jpeg",
    name: { en: "Romantic Gift", ar: "هدية رومانسية", fr: "Cadeau romantique" } },
  { id: "gift-06", cat: "love", price: 300, img: "images/gifts/gift-06.jpeg",
    name: { en: "Flower trophy", ar: "تذكار الزهور", fr: "Trophée de fleurs" } }
];

const featuredProducts = [
  resinProducts.find((p) => p.id === "resin-01"),
  resinProducts.find((p) => p.id === "resin-21"),
  giftProducts.find((p) => p.id === "gift-06")
].filter(Boolean);