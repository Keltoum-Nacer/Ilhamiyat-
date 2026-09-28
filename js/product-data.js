const CURRENCY = "MAD";

const resinProducts = [
  {
    id: "resin-bookmarks", cat: "accessories", price: 30,
    img: "images/resin/book-marks/resin-21.jpeg",
    gallery: ["images/resin/book-marks/resin-13.jpeg"],
    name: { en: "Book Marks", ar: "فواصل كتب", fr: "Marque-pages" },
    desc: {
      en: "Handcrafted resin bookmarks, slim and durable — a lovely gift for readers.",
      ar: "فواصل كتب من الريزين مصنوعة يدوياً، نحيلة ومتينة — هدية جميلة لعشاق القراءة.",
      fr: "Marque-pages en résine faits main, fins et durables — un cadeau pour les lecteurs."
    }
  },
  {
    id: "resin-cadre", cat: "memories", price: 450,
    img: "images/resin/cadre-flowers/1 (1).png",
    gallery: [
      "images/resin/cadre-flowers/resin-14.jpeg",
      "images/resin/cadre-flowers/resin-15.jpeg",
      "images/resin/cadre-flowers/IMG20260923142539_00.jpg"
    ],
    name: { en: "Preserved flower frame", ar: "إطار زهور محفوظة", fr: "Cadre de fleurs préservées" },
    desc: {
      en: "A preserved flower frame in resin, keeping a bloom from a special day on display. Available dimensions: 25 × 20 cm and 13 × 18 cm.",
      ar: "إطار من الريزين لزهرة محفوظة، يحتفظ بزهرة من يوم مميز للعرض. الأبعاد المتاحة: 25 × 20 سم و 13 × 18 سم.",
      fr: "Un cadre en résine pour fleur préservée, garde une fleur d'un jour spécial bien visible. Dimensions disponibles : 25 × 20 cm et 13 × 18 cm."
    }
  },
  {
    id: "resin-flowers-carre", cat: "memories", price: 550,
    img: "images/resin/flowers-carre/resin-01.jpeg",
    gallery: ["images/resin/flowers-carre/resin-19.jpg"],
    name: { en: "Flowers Preservation", ar: "حفظ الورود", fr: "Préservation de fleurs" },
    desc: {
      en: "A square bouquet preserved in crystal-clear resin, made to last for years.",
      ar: "باقة مربعة من الورود محفوظة في ريزين شفاف، مصنوعة لتدوم سنوات.",
      fr: "Un bouquet carré préservé dans une résine cristal, fait pour durer des années."
    }
  },
  {
    id: "resin-flowers-trophy", cat: "love", price: 100,
    img: "images/resin/flowersTrophy-M/resin-05.jpeg",
    gallery: [
      "images/resin/flowersTrophy-M/resin-04.jpeg",
      "images/resin/flowersTrophy-M/resin-16.jpeg"
    ],
    name: { en: "Flowers Trophy", ar: "لوحة الورود", fr: "Trophée de fleurs" },
    desc: {
      en: "A flowers trophy handcrafted in resin, a perfect gift for someone you love.",
      ar: "لوحة ورود مصنوعة يدوياً من الريزين، هدية مثالية لمن تحب.",
      fr: "Un trophée de fleurs fait main en résine, le cadeau parfait pour quelqu'un que vous aimez."
    }
  },
  {
    id: "resin-jewelry-ovale", cat: "accessories", price: 80,
    img: "images/resin/jwelry-ovale/resin-12.jpeg",
    name: { en: "Jewelry Holder — Oval", ar: "حامل مجوهرات — بيضوي", fr: "Porte-bijoux — Ovale" },
    desc: {
      en: "An oval resin jewelry holder for rings, earrings and other small treasures.",
      ar: "حامل مجوهرات بيضوي من الريزين للحلق والخواتم والكنوز الصغيرة.",
      fr: "Un porte-bijoux ovale en résine pour bagues, boucles d'oreilles et petits trésors."
    }
  },
  {
    id: "resin-jewelry-rond", cat: "accessories", price: 70,
    img: "images/resin/jwelry-rond/resin-10.jpeg",
    name: { en: "Jewelry Holder — Round", ar: "حامل مجوهرات — دائري", fr: "Porte-bijoux — Rond" },
    desc: {
      en: "A round resin jewelry holder for rings and bracelets, clean and minimal.",
      ar: "حامل مجوهرات دائري من الريزين للخواتم والأساور، بتصميم نظيف وبسيط.",
      fr: "Un porte-bijoux rond en résine pour bagues et bracelets, épuré et minimal."
    }
  },
  {
    id: "resin-plateau", cat: "decor", price: 250,
    img: "images/resin/plateau/resin-07.jpeg",
    gallery: ["images/resin/plateau/resin-11.jpeg"],
    name: { en: "Decorative Tray", ar: "صينية ديكور", fr: "Plateau décoratif" },
    desc: {
      en: "A decorative resin tray, ideal for keys, coins or small everyday essentials.",
      ar: "صينية ديكور من الريزين، مثالية للمفاتيح أو العملات أو الأغراض الصغيرة.",
      fr: "Un plateau décoratif en résine, idéal pour clés, pièces ou petits objets du quotidien."
    }
  },
  {
    id: "resin-keychain", cat: "accessories", price: 25,
    img: "images/resin/porteCle-stylo%27/resin-08.jpeg",
    name: { en: "Keychain", ar: "سلسلة مفاتيح", fr: "Porte-clés" },
    desc: {
      en: "A handmade resin keychain, light and built to last.",
      ar: "سلسلة مفاتيح من الريزين مصنوعة يدوياً، خفيفة ومتينة.",
      fr: "Un porte-clés en résine fait main, léger et durable."
    }
  },
  {
    id: "resin-pen", cat: "accessories", price: 25,
    img: "images/resin/porteCle-stylo%27/resin-09.jpeg",
    gallery: ["images/resin/porteCle-stylo%27/resin-17.jpeg"],
    name: { en: "Pen", ar: "قلم", fr: "Stylo" },
    desc: {
      en: "A handmade resin pen, a unique everyday accessory or gift.",
      ar: "قلم من الريزين مصنوع يدوياً، إكسسوار يومي فريد أو هدية مميزة.",
      fr: "Un stylo en résine fait main, un accessoire unique à offrir ou à garder."
    }
  },
  {
    id: "resin-trophy-l", cat: "love", price: 250,
    img: "images/resin/trophy-L/resin-02.jpg",
    name: { en: "Wedding Trophy — Large", ar: "لوحة الزفاف — كبيرة", fr: "Trophée de mariage — Grand" },
    desc: {
      en: "A large resin trophy celebrating a wedding or a special achievement. Dimensions: 24 cm.",
      ar: "لوحة كبيرة من الريزين تحتفل بالزفاف أو بإنجاز مميز. الأبعاد: 24 سم.",
      fr: "Un grand trophée en résine célébrant un mariage ou une réussite. Dimensions : 24 cm."
    }
  },
  {
    id: "resin-trophy-m-a", cat: "love", price: 100,
    img: "images/resin/trophy-M/16.jpg",
    gallery: [
      "images/resin/trophy-M/resin-03.jpeg",
      "images/resin/trophy-M/resin-18.jpeg",
      "images/resin/trophy-M/13.jpg",
      "images/resin/trophy-M/Gemini_Generated_Image_neo9ucneo9ucneo9%20%281%29.jpeg"
    ],
    name: { en: "Beloved Trophy — Medium", ar: "لوحة حب — متوسط", fr: "Trophée bien-aimé — Moyen" },
    desc: {
      en: "A medium resin trophy, handcrafted to keep a cherished memory close. Dimensions: 12 cm.",
      ar: "لوحة متوسطة من الريزين، مصنوعة يدوياً لتحتفظ بذكرياتك الثمينة قريبة. الأبعاد: 12 سم.",
      fr: "Un trophée moyen en résine, fait main pour garder un souvenir précieux. Dimensions : 12 cm."
    }
  },
  {
    id: "resin-trophy-m-b", cat: "love", price: 100,
    img: "images/resin/trophy-M/resin-20.jpeg",
    name: { en: "Wedding Trophy — Medium", ar: "لوحة الزفاف — متوسطة", fr: "Trophée de mariage — Moyen" },
    desc: {
      en: "A medium resin wedding trophy, made to order for your special day. Dimensions: 12 cm.",
      ar: "لوحة زفاف متوسطة من الريزين، تصنع حسب الطلب ليومك المميز. الأبعاد: 12 سم.",
      fr: "Un trophée de mariage moyen en résine, fabriqué sur commande pour votre jour spécial. Dimensions : 12 cm."
    }
  },
  {
    id: "resin-trophy-s", cat: "love", price: 85,
    img: "images/resin/trophy-S/Gemini_Generated_Image_z3ad1wz3ad1wz3ad.jpeg",
    name: { en: "Trophy — Small", ar: "لوحة — صغيرة", fr: "Trophée — Petit" },
    desc: {
      en: "A small resin trophy for intimate occasions and thoughtful gifts. Dimensions: 10 cm.",
      ar: "لوحة صغيرة من الريزين للمناسبات الخاصة والهدايا المميزة. الأبعاد: 10 سم.",
      fr: "Un petit trophée en résine pour les occasions intimes et les cadeaux attentionnés. Dimensions : 10 cm."
    }
  }
];

const gypsumProducts = [
  {
    id: "gypsum-elegance", cat: "decor", price: 120,
    img: "images/gypsum/home-decor/gypsum-01.jpeg",
    gallery: [
      "images/gypsum/home-decor/gypsum-10.jpeg",
      "images/gypsum/home-decor/gypsum-14.jpeg"
    ],
    name: { en: "Elegance Pack", ar: "باقة الأناقة", fr: "Pack Élégance" },
    desc: {
      en: "A set of handcrafted gypsum pieces for the home, finished with a soft matte look.",
      ar: "一组 من قطع الجبس المصنوعة يدوياً للديكور المنزلي، بلمسة نهائية مطفية ناعمة.",
      fr: "Un ensemble de pièces en plâtre faites main pour la maison, finition mate et douce."
    }
  },
  {
    id: "gypsum-nafha", cat: "decor", price: 50,
    img: "images/gypsum/mbakhra/gypsum-02.jpeg",
    name: { en: "Nafha Pack", ar: "باقة نفحة", fr: "Pack Nafha" },
    desc: {
      en: "A delicate gypsum pack with a light, airy finish — a thoughtful gift.",
      ar: "باقة جبس رقيقة بلمسة نهائية خفيفة وناعمة — هدية مميزة.",
      fr: "Un délicat pack en plâtre à la finition légère et aérienne — un cadeau attentionné."
    }
  },
  {
    id: "gypsum-nafha-2", cat: "roomvanity", price: 70,
    img: "images/gypsum/mbakhra/gypsum-11.jpeg",
    name: { en: "Nafha Pack", ar: "باقة نفحة", fr: "Pack Nafha" },
    desc: {
      en: "A second style from the Nafha Pack range, with the same light, airy gypsum finish.",
      ar: "طراز ثانٍ من مجموعة باقة نفحة، بنفس اللمسة النهائية الخفيفة من الجبس.",
      fr: "Un second modèle de la gamme Pack Nafha, avec la même finition légère en plâtre."
    }
  },
  {
    id: "gypsum-oud-ned", cat: "roomvanity", price: 20,
    img: "images/gypsum/oud-ned/gypsum-12.jpeg",
    gallery: ["images/gypsum/oud-ned/gypsum-13.jpeg"],
    name: { en: "Oud Ned", ar: "عود نيد", fr: "Oud Ned" },
    desc: {
      en: "A gypsum accent piece for the room or a dressing table, made to order.",
      ar: "قطعة زخرفية من الجبس للغرفة أو تسريحة المكياج، تصنع حسب الطلب.",
      fr: "Une pièce d'appoint en plâtre pour la chambre ou une coiffeuse, sur commande."
    }
  },
  {
    id: "gypsum-rawnaq", cat: "roomvanity", price: 50,
    img: "images/gypsum/trophies/gypsum-03.jpeg",
    gallery: [
      "images/gypsum/trophies/gypsum-05.jpeg",
      "images/gypsum/trophies/gypsum-07.jpeg",
      "images/gypsum/trophies/gypsum-08.jpeg"
    ],
    name: { en: "Rawnaq", ar: "رونق", fr: "Rawnaq" },
    desc: {
      en: "A small gypsum trophy with a refined finish, celebrating something that matters.",
      ar: "جائزة صغيرة من الجبس بلمسة نهائية راقية، تحتفل بما يهمك.",
      fr: "Un petit trophée en plâtre à la finition soignée, pour célébrer ce qui compte."
    }
  },
  {
    id: "gypsum-organizer", cat: "organizers", price: 30,
    img: "images/gypsum/organizers/gypsum-04.jpeg",
    name: { en: "Organizer", ar: "منظم", fr: "Rangement" },
    desc: {
      en: "A handmade gypsum organizer that keeps small everyday items neatly in place.",
      ar: "منظم من الجبس مصنوع يدوياً يحافظ على ترتيب الأغراض الصغيرة اليومية.",
      fr: "Un rangement en plâtre fait main qui garde les petits objets du quotidien en ordre."
    }
  },
  {
    id: "gypsum-organizer-2", cat: "organizers", price: 30,
    img: "images/gypsum/organizers/gypsum-06.jpeg",
    name: { en: "Organizer", ar: "منظم", fr: "Rangement" },
    desc: {
      en: "A second style from the Organizer range, shaped to suit a different corner.",
      ar: "طراز ثانٍ من مجموعة المنظمين، بتصميم يناسب زاوية مختلفة.",
      fr: "Un second modèle de la gamme Rangement, pensé pour un autre coin de la pièce."
    }
  },
  {
    id: "gypsum-organizer-3", cat: "organizers", price: 30,
    img: "images/gypsum/organizers/gypsum-09.jpeg",
    name: { en: "Organizer", ar: "منظم", fr: "Rangement" },
    desc: {
      en: "A third style from the Organizer range, finished by hand in gypsum.",
      ar: "طراز ثالث من مجموعة المنظمين، مصنوع يدوياً من الجبس.",
      fr: "Un troisième modèle de la gamme Rangement, fini à la main en plâtre."
    }
  }
];

const giftProducts = [
  { id: "gift-01", cat: "wedding", price: 250, img: "images/gifts/weeding/gift-01.jpg",
    name: { en: "Wedding Gift Trophy", ar: "لوحة هدية الزفاف", fr: "Trophée cadeau de mariage" } },
  { id: "gift-02", cat: "friendship", price: 50, img: "images/gifts/friendship/gift-02.jpeg",
    name: { en: "Gift Box", ar: "علبة هدية", fr: "Boîte cadeau" } },
  { id: "gift-03", cat: "friendship", price: 45, img: "images/gifts/friendship/gift-03.jpeg",
    name: { en: "Personalized Gift", ar: "هدية مخصصة", fr: "Cadeau personnalisé" } },
  { id: "gift-04", cat: "friendship", price: 90, img: "images/gifts/friendship/gift-04.jpeg",
    name: { en: "Bestie Trophy", ar: "لوحة الصديق", fr: "Trophée du meilleur ami" } },
  { id: "gift-05", cat: "wedding", price: 100, img: "images/gifts/weeding/gift-05.jpeg",
    name: { en: "Romantic Gift", ar: "هدية رومانسية", fr: "Cadeau romantique" } },
  { id: "gift-06", cat: "love", price: 300, img: "images/gifts/love/gift-06.jpeg",
    name: { en: "Flower trophy", ar: "لوحة الزهور", fr: "Trophée de fleurs" } },
  {
    ...resinProducts.find((p) => p.id === "resin-trophy-m-a"),
    img: "images/resin/trophy-M/13.jpg",
    gallery: [
      "images/resin/trophy-M/16.jpg",
      "images/resin/trophy-M/resin-03.jpeg",
      "images/resin/trophy-M/resin-18.jpeg",
      "images/resin/trophy-M/Gemini_Generated_Image_neo9ucneo9ucneo9%20%281%29.jpeg"
    ]
  }
].filter(Boolean);

const featuredProducts = [
  resinProducts.find((p) => p.id === "resin-bookmarks"),
  resinProducts.find((p) => p.id === "resin-cadre"),
  resinProducts.find((p) => p.id === "resin-trophy-m-a")
].filter(Boolean);