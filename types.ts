export interface MenuItem {
  id: string;
  name: string;
  koreanName: string;
  description: {
    en: string;
    de: string;
  };
  price: number;
  category: 'starter' | 'main' | 'soup' | 'dessert' | 'drinks';
  image: string;
  spicyLevel?: number; // 0-3
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  link: string;
}

export type Language = 'en' | 'de';

export interface Translation {
  nav: { [key: string]: string };
  hero: {
    subtitle: string;
    titleStart: string;
    titleEnd: string;
    description: string;
    cta: string;
  };
  menu: {
    title: string;
    subtitle: string;
    categories: { [key: string]: string };
    spicy: string;
    comingSoon: string;
  };
  reviews: {
    title: string;
    tabReviews: string;
    tabGuide: string;
    writeReview: string;
    guideTitle: string;
    guideSubtitle: string;
    guideContent: { title: string; text: string }[];
  };
  location: {
    title: string;
    description: string;
    address: string;
    phone: string;
    hours: string;
    schedule: string[];
    reservations: string;
    instagram: string;
    cta: string;
  };
}