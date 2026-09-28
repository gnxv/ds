export const site = {
  name: "DS",
  tagline: "Два кабинета. Две атмосферы.",
  location: "В гостинице, соседние кабинеты",
  phone: "+7 (000) 000-00-00",
  telegram: "https://t.me/",
  instagram: "https://instagram.com/",
} as const;

export const services = {
  solarium: {
    slug: "/solarium",
    name: "Солярий",
    kicker: "Sun studio",
    headline: "Тёплый свет.\nРовный загар.",
    lead: "Кабинет солярия — мягкое золото, контролируемый загар и спокойный ритуал перед событием или сезоном.",
    accent: "amber",
  },
  rsleek: {
    slug: "/r-sleek",
    name: "R-Sleek",
    kicker: "Body sculpt",
    headline: "Скульптура тела.\nБез простоя.",
    lead: "Ротационная термокомпрессия: объёмы, целлюлит, лимфа. Курс, после которого силуэт собирается заново.",
    accent: "stone",
  },
} as const;
