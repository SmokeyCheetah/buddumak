import { MenuItem, Review, Translation } from './types';

export const RESTAURANT_COORDS = {
  lat: 50.0954337,
  lng: 8.4918457
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Signature Pancakes (Jeon)',
    koreanName: '전',
    description: {
      en: 'Classic Korean savory pancakes. Typical variations include Seafood (Haemul Pajeon) or Kimchi (Kimchi Jeon) varieties.',
      de: 'Klassische koreanische herzhafte Pfannkuchen. Typische Variationen sind Meeresfrüchte (Haemul Pajeon) oder Kimchi (Kimchi Jeon).'
    },
    price: 16,
    category: 'starter',
    image: '',
    spicyLevel: 1
  },
  {
    id: 's2',
    name: 'Korean Fried Chicken',
    koreanName: '치킨',
    description: {
      en: 'Double-fried for extra crunch. Often available in Soy-Garlic, Sweet & Spicy, or Original Crispy flavors.',
      de: 'Doppelt frittiert für extra Knusprigkeit. Oft erhältlich in den Geschmacksrichtungen Soja-Knoblauch, Süß-Scharf oder Original Knusprig.'
    },
    price: 18,
    category: 'starter',
    image: '',
    spicyLevel: 2
  },
  {
    id: 'm1',
    name: 'Premium BBQ Sets',
    koreanName: '바베큐',
    description: {
      en: 'A selection of high-quality meats such as Galbi (Short Ribs) or Samgyeopsal (Pork Belly), grilled to perfection.',
      de: 'Eine Auswahl an hochwertigem Fleisch wie Galbi (Rippchen) oder Samgyeopsal (Schweinebauch), perfekt gegrillt.'
    },
    price: 32,
    category: 'main',
    image: '',
    spicyLevel: 0
  },
  {
    id: 'm2',
    name: 'Bibimbap Bowls',
    koreanName: '비빔밥',
    description: {
      en: 'The iconic mixed rice bowl with assorted vegetables, egg, and meat. Available in classic or hot stone (Dolsot) versions.',
      de: 'Die ikonische gemischte Reisschale mit verschiedenem Gemüse, Ei und Fleisch. Erhältlich als klassische oder heiße Steinvariante (Dolsot).'
    },
    price: 21,
    category: 'main',
    image: '',
    spicyLevel: 1
  },
  {
    id: 'm3',
    name: 'Japchae',
    koreanName: '잡채',
    description: {
      en: 'Stir-fried sweet potato glass noodles with vegetables and beef, seasoned with savory soy and sesame oil.',
      de: 'Gebratene Süßkartoffel-Glasnudeln mit Gemüse und Rindfleisch, gewürzt mit pikanter Soja und Sesamöl.'
    },
    price: 19,
    category: 'main',
    image: '',
    spicyLevel: 0
  },
  {
    id: 'so1',
    name: 'Traditional Stews (Jjigae)',
    koreanName: '찌개',
    description: {
      en: 'Comforting stews served bubbling hot. Popular types include Kimchi Jjigae (Spicy) or Doenjang Jjigae (Soybean Paste).',
      de: 'Wohltuende Eintöpfe, heiß serviert. Beliebte Sorten sind Kimchi Jjigae (Scharf) oder Doenjang Jjigae (Sojabohnenpaste).'
    },
    price: 18,
    category: 'soup',
    image: '',
    spicyLevel: 2
  },
  {
    id: 'd1',
    name: 'Korean Desserts',
    koreanName: '디저트',
    description: {
      en: 'Sweet endings to your meal, such as Hotteok (Sweet Pancakes) or Bingsu (Shaved Ice) depending on availability.',
      de: 'Süßer Abschluss Ihrer Mahlzeit, wie Hotteok (Süße Pfannkuchen) oder Bingsu (Geschabtes Eis), je nach Verfügbarkeit.'
    },
    price: 9,
    category: 'dessert',
    image: '',
    spicyLevel: 0
  }
];

// Common link for all reviews to the Google Maps place
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/BUDDUMAK/@50.0944263,8.4961642,16z/data=!4m16!1m9!3m8!1s0x47bda12ee1706895:0x32f1fa7579c75fa2!2sBUDDUMAK!8m2!3d50.0954337!4d8.4918457!9m1!1b1!16s%2Fg%2F11xl4gv2xc!3m5!1s0x47bda12ee1706895:0x32f1fa7579c75fa2!8m2!3d50.0954337!4d8.4918457!16s%2Fg%2F11xl4gv2xc";

export const REVIEWS: Review[] = [
  { 
    id: 1, 
    author: "S. K.", 
    rating: 5, 
    text: "Super leckeres Essen, sehr nettes Personal. Wir kommen wieder!", 
    date: "2024-06-01",
    link: GOOGLE_MAPS_LINK
  },
  { 
    id: 2, 
    author: "Michael S.", 
    rating: 5, 
    text: "Authentic Korean food. The BBQ is fantastic and the side dishes are endless. Best in Frankfurt area.", 
    date: "2024-05-20",
    link: GOOGLE_MAPS_LINK
  },
  { 
    id: 3, 
    author: "Julia Müller", 
    rating: 5, 
    text: "Ein tolles Erlebnis! Man fühlt sich wie in Korea. Unbedingt reservieren.", 
    date: "2024-04-15",
    link: GOOGLE_MAPS_LINK
  }
];

export const TRANSLATIONS: { en: Translation; de: Translation } = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      reviews: 'Guide & Reviews',
      location: 'Location'
    },
    hero: {
      subtitle: "Welcome to Frankfurt's Hidden Gem",
      titleStart: "The Art of",
      titleEnd: "Korean Soul",
      description: "Experience authentic flavors reimagined with modern elegance. From our blazing hearth to your table.",
      cta: "Explore Menu"
    },
    menu: {
      title: "Our Culinary Journey",
      subtitle: "Selected ingredients, timeless recipes.",
      categories: {
        all: "All Dishes",
        starter: "Starters",
        main: "Main Courses",
        soup: "Soups & Stews",
        dessert: "Desserts"
      },
      spicy: "Spicy",
      comingSoon: "Image Coming Soon"
    },
    reviews: {
      title: "Guest Experience",
      tabReviews: "Reviews",
      tabGuide: "Dining Guide",
      writeReview: "Write a Review",
      guideTitle: "The Ritual of Buddumak",
      guideSubtitle: "How to Enjoy Korean Dining",
      guideContent: [
        { title: "Banchan (Side Dishes)", text: "These small plates arrive first. They are meant to be shared and eaten alongside your rice and main dish throughout the meal." },
        { title: "Ssam (Wrapping)", text: "When enjoying BBQ or Galbi, place a piece of meat on a lettuce leaf, add some rice, ssamjang (paste), and garlic. Wrap it up and eat it in one bite for an explosion of flavor." },
        { title: "Sharing", text: "Korean dining is communal. Soups, stews, and main plates are often placed in the center for everyone to enjoy." }
      ]
    },
    location: {
      title: "Visit Us",
      description: "Located in Zeilsheim, a sanctuary of flavor away from the city noise.",
      address: "Address",
      phone: "Phone",
      hours: "Opening Hours",
      schedule: [
        "Mon, Wed, Thu, Fri, Sat, Sun:",
        "11:30 – 14:30",
        "17:30 – 21:00",
        "",
        "Tue: Closed"
      ],
      reservations: "Reservations",
      instagram: "Follow Us",
      cta: "Table Reservation"
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      menu: 'Speisekarte',
      reviews: 'Guide & Bewertungen',
      location: 'Standort'
    },
    hero: {
      subtitle: "Willkommen in Frankfurts Geheimtipp",
      titleStart: "Die Kunst der",
      titleEnd: "Koreanischen Seele",
      description: "Erleben Sie authentische Aromen, neu interpretiert mit moderner Eleganz. Von unserem Feuer direkt auf Ihren Tisch.",
      cta: "Speisekarte Entdecken"
    },
    menu: {
      title: "Unsere Kulinarische Reise",
      subtitle: "Ausgewählte Zutaten, zeitlose Rezepte.",
      categories: {
        all: "Alle Gerichte",
        starter: "Vorspeisen",
        main: "Hauptgerichte",
        soup: "Suppen & Eintöpfe",
        dessert: "Desserts"
      },
      spicy: "Scharf",
      comingSoon: "Bild folgt bald"
    },
    reviews: {
      title: "Gästeerlebnis",
      tabReviews: "Bewertungen",
      tabGuide: "Essens-Guide",
      writeReview: "Bewertung schreiben",
      guideTitle: "Das Ritual von Buddumak",
      guideSubtitle: "Wie man Koreanisch genießt",
      guideContent: [
        { title: "Banchan (Beilagen)", text: "Diese kleinen Teller kommen zuerst. Sie werden geteilt und während der gesamten Mahlzeit zusammen mit Reis und dem Hauptgericht gegessen." },
        { title: "Ssam (Wickeln)", text: "Beim Genuss von BBQ oder Galbi legen Sie ein Stück Fleisch auf ein Salatblatt, fügen etwas Reis, Ssamjang (Paste) und Knoblauch hinzu. Wickeln Sie es ein und essen Sie es mit einem Bissen für eine Geschmacksexplosion." },
        { title: "Teilen", text: "Koreanisches Essen ist gemeinschaftlich. Suppen, Eintöpfe und Hauptgerichte werden oft in die Mitte gestellt, damit jeder sie genießen kann." }
      ]
    },
    location: {
      title: "Besuchen Sie Uns",
      description: "In Zeilsheim gelegen. Ein Ort des Geschmacks, fernab vom Stadtlärm.",
      address: "Adresse",
      phone: "Telefon",
      hours: "Öffnungszeiten",
      schedule: [
        "Mo, Mi, Do, Fr, Sa, So:",
        "11:30 – 14:30",
        "17:30 – 21:00",
        "",
        "Di: Geschlossen"
      ],
      reservations: "Reservierungen",
      instagram: "Folgen Sie Uns",
      cta: "Tisch Reservieren"
    }
  }
};