
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  imageUrl: string;
  ctaText?: string;
  faqs?: { question: string; answer: string }[];
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Stat {
  label: string;
  value: string;
  subLabel: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
