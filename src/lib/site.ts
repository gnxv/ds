export const site = {
  name: "Fiolet",
  tagline: "Солярий и аппаратный массаж R-Sleek. Два кабинета рядом.",
  location: "Геленджик, Революционная ул., 37.\nОтель «Бригантина», 1 этаж.",
  address: "Революционная ул., 37",
  addressExtra: "Отель «Бригантина», 1 этаж",
  city: "Геленджик",
  mapsUrl: "https://yandex.ru/maps/org/fiolet/108706549072/",
  mapsEmbed:
    "https://yandex.ru/map-widget/v1/?ll=38.067614%2C44.555612&z=16&ol=biz&oid=108706549072",
  phone: "+7 952 838-84-84",
  phoneHref: "tel:+79528388484",
  telegram: "https://t.me/+79528388484",
  whatsapp: "https://wa.me/79528388484",
  instagram: "https://instagram.com/fiolet2018",
  instagramHandle: "@fiolet2018",
  max: "https://max.ru",
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
      { href: "#care", label: "Косметика" },
      { href: "#gallery", label: "Клиенты" },
      { href: "#prices", label: "Цены" },
      { href: "#faq", label: "Вопросы" },
      { href: "#contact", label: "Запись" },
      { href: "#address", label: "Адрес" },
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
      { href: "#gallery", label: "Клиенты" },
      { href: "#contact", label: "Запись" },
      { href: "#address", label: "Адрес" },
    ] satisfies NavLink[],
  },
} as const;
