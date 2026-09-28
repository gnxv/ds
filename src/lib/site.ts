export const site = {
  name: "Fiolet",
  tagline: "Загар и силуэт. Соседние кабинеты.",
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
    headline: "Цвет кожи,\nкоторый выглядит своим.",
    lead: "Короткий сеанс света — и тон ровный, без границы купальника и без истории «я неделю жила на пляже».",
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
    headline: "Силуэт без паузы в жизни.",
    lead: "Роликовый массаж, который уводит отёк и собирает линию тела. Вышел из кабинета — и дальше по дню.",
    nav: [
      { href: "#method", label: "Аппарат" },
      { href: "#effect", label: "Эффект" },
      { href: "#formats", label: "Форматы" },
      { href: "#course", label: "Курс" },
      { href: "#faq", label: "Вопросы" },
      { href: "#contact", label: "Запись" },
    ] satisfies NavLink[],
  },
} as const;
