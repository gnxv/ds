export const site = {
  name: "Fiolet",
  tagline: "Два кабинета. Две атмосферы.",
  location: "В гостинице, соседние кабинеты",
  phone: "+7 (000) 000-00-00",
  telegram: "https://t.me/",
  instagram: "https://instagram.com/",
} as const;

export type ServiceKey = "solarium" | "rsleek";

export type NavLink = {
  href: string;
  label: string;
};

export const services = {
  solarium: {
    key: "solarium" as const,
    slug: "/solarium",
    name: "Солярий",
    kicker: "Sun studio",
    headline: "Тёплый свет.\nРовный загар.",
    lead: "Кабинет солярия — мягкое золото, контролируемый загар и спокойный ритуал перед событием или сезоном.",
    nav: [
      { href: "#about", label: "Кабинет" },
      { href: "#offer", label: "Форматы" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Запись" },
    ] satisfies NavLink[],
  },
  rsleek: {
    key: "rsleek" as const,
    slug: "/r-sleek",
    name: "R-Sleek",
    kicker: "Body sculpt",
    headline: "Скульптура тела.\nБез простоя.",
    lead: "Ротационная термокомпрессия: объёмы, целлюлит, лимфа. Курс, после которого силуэт собирается заново.",
    nav: [
      { href: "#method", label: "Как работает" },
      { href: "#effect", label: "Эффект" },
      { href: "#formats", label: "Форматы" },
      { href: "#course", label: "Курс" },
      { href: "#faq", label: "Вопросы" },
      { href: "#contact", label: "Запись" },
    ] satisfies NavLink[],
  },
} as const;
