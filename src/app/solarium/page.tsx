import { ContactActions } from "@/components/layout/ContactActions";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import {
  BackgroundVideo,
  InlineVideo,
} from "@/components/r-sleek/Media";
import { ClientStrip } from "@/components/solarium/ClientStrip";
import { clientGallery } from "@/lib/clients";
import { services, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Солярий",
  description:
    "Солярий Fiolet в Геленджике: ровный загар, вертикальная кабина и премиум-косметика. 50, 100, 150 минут и безлимит на год.",
  alternates: {
    canonical: "/solarium",
  },
  openGraph: {
    title: "Солярий · Fiolet",
    description:
      "Солярий Fiolet в Геленджике: ровный загар, вертикальная кабина и премиум-косметика. 50, 100, 150 минут и безлимит на год.",
    url: "https://fiolet-gel.ru/solarium",
  },
};

const faqs = [
  {
    q: "Сколько загорать в первый раз?",
    a: "Короткий заход. Время подбираем по типу кожи, чтобы получить тон, а не ожог. Дальше минуты можно прибавлять.",
  },
  {
    q: "Как часто можно приходить?",
    a: "Обычно с паузой в сутки-двое, чтобы кожа успела проявить цвет. Точный ритм скажем на месте.",
  },
  {
    q: "Нужна своя косметика?",
    a: "Не обязательно. В кабинете есть премиум-средства: ускорители до сеанса и уход после. Своё можно принести, если к нему уже привыкли.",
  },
  {
    q: "Можно в тот же день на R-Sleek?",
    a: "Да. Солярий и R-Sleek можно в один день, кабинеты рядом. Если удобнее разнести — запишем на разные дни.",
  },
  {
    q: "Как сохранить загар дольше?",
    a: "После сеанса — уход из кабинета, дома увлажнение и без скраба первые дни. Душ не горячий, мочалка мягкая. Так тон держится дольше.",
  },
];

export default function SolariumPage() {
  return (
    <div className="min-h-dvh bg-[#160e09] text-[#f4e6c8]">
      <SiteHeader
        tone="sun"
        current="solarium"
        sections={services.solarium.nav}
      />

      <section className="relative isolate min-h-[92dvh] overflow-hidden">
        <BackgroundVideo
          src="/media/solarium/hero.mp4"
          poster="/media/solarium/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#160e09]/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160e09] via-transparent to-black/30" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:px-6 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#e0b06a]">
            Солярий
          </p>
          <h1 className="font-serif mt-4 max-w-5xl text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
            Ровный загар в удобное время.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#f4e6c8]/82 md:text-[17px]">
            Вертикальная кабина и премиум-косметика для загара. Подберём время
            сеанса под ваш фототип, объясним правила и поможем ухаживать за
            кожей до и после процедуры.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#e0b06a] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#160e09]"
            >
              Записаться
            </a>
            <a
              href="#prices"
              className="rounded-full border border-[#e0b06a]/40 px-8 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Цены
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
              Кабинет
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Стоите, не лежите
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#f4e6c8]/72">
              Вертикальная кабина. Сеанс короткий: зашли, выбрали минуты, вышли
              с ровным тоном. Цвет ложится ровно, без границы купальника. Лампы
              обслуживаются по регламенту.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-[1.2rem] border border-[#e0b06a]/20 bg-black">
              <div className="aspect-[3/4]">
                <InlineVideo
                  src="/media/solarium/cabin-a.mp4"
                  poster="/media/solarium/cabin-a.jpg"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.2rem] border border-[#e0b06a]/20 bg-black">
              <div className="aspect-[3/4]">
                <InlineVideo
                  src="/media/solarium/cabin-b.mp4"
                  poster="/media/solarium/cabin-b.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="care" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Косметика
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Премиум-средства для загара
          </h2>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <div className="overflow-hidden rounded-[1rem] border border-[#e0b06a]/20 bg-black">
                <div className="aspect-[3/4] h-full">
                  <InlineVideo
                    src="/media/solarium/cosmetics/line.mp4"
                    poster="/media/solarium/cosmetics/line.jpg"
                  />
                </div>
              </div>
              {(
                [
                  ["/media/solarium/cosmetics/story-hemp.jpg", "Hemp Nation в студии Fiolet"],
                  ["/media/solarium/cosmetics/story-jersey.jpg", "JWOWW Jersey Heat в студии Fiolet"],
                  ["/media/solarium/cosmetics/story-musthave.jpg", "Designer Skin Must Have в студии Fiolet"],
                  ["/media/solarium/cosmetics/jwoww-jersey.jpg", "JWOWW Jersey Heat"],
                  ["/media/solarium/cosmetics/jwoww-done.jpg", "JWOWW One and Done"],
                ] as const
              ).map(([src, alt]) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-[1rem] border border-[#e0b06a]/20 bg-[#2a1a10]"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="aspect-[3/4] h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-[#e0b06a]/20 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#e0b06a]">
                  До сеанса
                </p>
                <p className="mt-4 text-sm leading-7 text-[#f4e6c8]/72">
                  Ускорители и кремы под тип кожи. Цвет берётся быстрее и
                  ложится ровнее, кожа не пересушивается.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-[#e0b06a]/20 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#e0b06a]">
                  После
                </p>
                <p className="mt-4 text-sm leading-7 text-[#f4e6c8]/72">
                  Уход, который фиксирует тон и снимает ощущение стянутости.
                  Загар держится дольше, если не забывать про него дома.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Фото
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">Клиенты</h2>
          <ClientStrip items={clientGallery} />
        </div>
      </section>

      <section id="prices" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Цены
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Минуты и безлимит
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.6rem] border border-[#e0b06a]/20 p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#e0b06a]">
                Пакеты минут
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-4">
                  <p className="font-serif text-2xl">Разовое посещение</p>
                  <p className="font-serif text-3xl">110 ₽ / мин</p>
                </div>
                <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-4">
                  <p className="font-serif text-2xl">50 минут</p>
                  <p className="font-serif text-3xl">4 500 ₽</p>
                </div>
                <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-4">
                  <p className="font-serif text-2xl">100 минут</p>
                  <p className="font-serif text-3xl">7 000 ₽</p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <p className="font-serif text-2xl">150 минут</p>
                  <p className="font-serif text-3xl">9 000 ₽</p>
                </div>
              </div>
            </article>
            <article className="rounded-[1.6rem] border border-[#e0b06a]/35 bg-[#2a1a10] p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#e0b06a]">
                Безлимит
              </p>
              <p className="font-serif mt-8 text-2xl">На год</p>
              <p className="font-serif mt-3 text-5xl">40 000 ₽</p>
              <p className="mt-6 text-sm leading-7 text-[#f4e6c8]/70">
                Ходите в своём ритме весь год. Без лимита по минутам — приходите,
                когда нужен тон.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Вопросы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Что обычно спрашивают
          </h2>
          <div className="mt-10 divide-y divide-[#e0b06a]/15 border-y border-[#e0b06a]/15">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-[1.45rem] leading-tight">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="mt-1 shrink-0 text-[#e0b06a] group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden shrink-0 text-[#e0b06a] group-open:inline">
                      –
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#f4e6c8]/68">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-[#e0b06a]/20 px-6 py-8 md:px-10">
          <h2 className="font-serif text-3xl">Противопоказания</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#f4e6c8]/68">
            Беременность, онкология, острые воспаления кожи, свежие ожоги,
            приём фотосенсибилизирующих препаратов, возраст до 18 лет.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#2a1a10] px-6 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-xl text-4xl md:text-5xl">
            Приходите за тоном
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#f4e6c8]/65">
            Напишите, на сколько минут записать, или возьмите безлимит на
            год. Подскажем время под фототип и что нанести до сеанса.
          </p>
          <ContactActions tone="sun" />
        </div>
      </section>

      <section id="address" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Адрес
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Геленджик, Бригантина
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#f4e6c8]/72">
            {site.address}
            <br />
            {site.addressExtra}.
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-[#e0b06a]"
          >
            Открыть в Яндекс Картах
          </a>
          <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-[#e0b06a]/20">
            <iframe
              title="Fiolet на Яндекс Картах"
              src={site.mapsEmbed}
              className="h-[22rem] w-full bg-[#160e09] md:h-[28rem]"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.32em] text-[#e0b06a]">
            Важно
          </p>
          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#f4e6c8]/72">
            Посещение солярия имеет противопоказания. Перед посещением
            ознакомьтесь с перечнем противопоказаний. При наличии сомнений
            проконсультируйтесь с врачом.
          </p>
        </div>
      </section>

      <SiteFooter tone="sun" current="solarium" />
    </div>
  );
}
