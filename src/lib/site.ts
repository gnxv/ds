export const site = {
  name: "Fiolet",
  tagline: "Солярий и аппаратный массаж R-Sleek. Два кабинета рядом.",
  location: "Гостиница, соседние кабинеты",
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
    kicker: "Роликовый массаж",
    headline: "Минус объёмы и более подтянутый силуэт.",
    lead: "Роликовый массаж R-Sleek: меньше отёка, спокойнее целлюлит, собраннее живот, бока, бёдра и ягодицы.",
    nav: [
      { href: "#method", label: "Принцип" },
      { href: "#about", label: "Процедура" },
      { href: "#effect", label: "Результат" },
      { href: "#how", label: "Сеанс" },
      { href: "#prices", label: "Цены" },
      { href: "#faq", label: "Вопросы" },
      { href: "#contact", label: "Запись" },
    ] satisfies NavLink[],
  },
} as const;
