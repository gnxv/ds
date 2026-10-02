import { ContactActions } from "@/components/layout/ContactActions";
import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import { BeforeAfter } from "@/components/r-sleek/BeforeAfter";
import {
  BackgroundVideo,
  InlineVideo,
} from "@/components/r-sleek/Media";
import { ClientStrip } from "@/components/solarium/ClientStrip";
import { clientGallery } from "@/lib/clients";
import { services, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Sleek — Коррекция фигуры",
  description:
    "R-Sleek в Fiolet: минус объёмы, меньше отёка, более подтянутый силуэт. После первого сеанса уходит до 800 г жидкости. 40 и 60 минут.",
  alternates: {
    canonical: "/r-sleek",
  },
  openGraph: {
    title: "R-Sleek — коррекция фигуры · Fiolet",
    description:
      "R-Sleek в Fiolet: минус объёмы, меньше отёка, более подтянутый силуэт. После первого сеанса уходит до 800 г жидкости. 40 и 60 минут.",
    url: "https://fiolet-gel.ru/r-sleek",
  },
};

const faqs = [
  {
    q: "Чем R-Sleek отличается от LPG и банок?",
    a: "LPG и вакуумные банки затягивают складку. R-Sleek давит и катает: компрессия идёт от веса манипулы, движение — от рядов роликов. Поэтому меньше синяков и можно работать при сосудистой хрупкости, где вакуум уже нельзя применять.",
  },
  {
    q: "Это похудение?",
    a: "После первого сеанса минус почти всегда про жидкость: до 800 г может уйти сразу. На курсе, в зависимости от исходных параметров и того, как отвечает тело, на весах бывает минус 5–8 кг. После курса результат держится месяцами при нормальном образе жизни.",
  },
  {
    q: "Сколько длится сеанс?",
    a: "Два варианта. 40 минут, если хотите уделить внимание фигуре и сразу вернуться к делам. И 60 минут, когда нужна более комплексная работа с силуэтом.",
  },
  {
    q: "Как часто приходить?",
    a: "Рабочий ритм — через день или два. Курс 5–10 сеансов.",
  },
  {
    q: "Будет ли больно?",
    a: "Нет. Ощущения: многие описывают как приятное глубокое разминание, «как после хорошей тренировки», тепло, без боли.",
  },
  {
    q: "Зачем костюм?",
    a: "Металлическая насадка работает только по нему: ролики не цепляют кожу и волосы, костюм держит тепло от трения. Силиконовую насадку ведём по маслу, без костюма.",
  },
  {
    q: "Можно в тот же день в солярий?",
    a: "Да. Солярий и R-Sleek можно в один день, кабинеты рядом. Если удобнее разнести — запишем на разные дни.",
  },
  {
    q: "Что делать до и после?",
    a: "Не есть плотно за полтора–два часа. В день процедуры и на курсе меньше соли и алкоголя. Пить обычную воду равномерно в течение дня.",
  },
];

export default function RSleekPage() {
  return (
    <div className="min-h-dvh bg-[#16120e] text-[#efe4d4]">
      <SiteHeader
        tone="sculpt"
        current="rsleek"
        sections={services.rsleek.nav}
      />

      <section className="relative isolate min-h-[92dvh] overflow-hidden">
        <BackgroundVideo
          src="/media/r-sleek/hero.mp4"
          poster="/media/r-sleek/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16120e] via-transparent to-black/35" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:px-6 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#c4a078]">
            Аппаратная коррекция фигуры
          </p>
          <h1 className="font-serif mt-4 max-w-4xl text-4xl leading-[0.96] sm:text-6xl md:text-7xl">
            До минус 800&nbsp;г
            <br />
            уже после первой процедуры.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#efe4d4]/82 md:text-[17px]">
            R-Sleek снимает отёк, уменьшает проявления целлюлита и собирает
            линию живота, боков, бёдер и ягодиц. После первого сеанса может
            уйти до 800&nbsp;г жидкости — тело выглядит легче уже в тот же день.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#efe4d4] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#16120e]"
            >
              Записаться
            </a>
            <a
              href="#method"
              className="rounded-full border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Как проходит сеанс
            </a>
          </div>
        </div>
      </section>

      <section id="method" className="px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Принцип
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Давление, вращение, тепло
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                Компрессия
              </p>
              <p className="mt-4 text-sm leading-7 text-[#efe4d4]/72">
                Манипула — тяжёлый цилиндр своим весом выталкивает застоявшуюся
                жидкость из тканей в лимфатическое русло. Отсюда ощущение
                лёгкости в тот же вечер и минус в сантиметрах.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                Ротация
              </p>
              <p className="mt-4 text-sm leading-7 text-[#efe4d4]/72">
                Десять рядов роликов прокатывают подкожный слой, а не гладят
                поверхность. Ткань смещается, разминаются уплотнения, меньше
                заметна «апельсиновая корка».
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                Термоэффект
              </p>
              <p className="mt-4 text-sm leading-7 text-[#efe4d4]/72">
                Металлическая насадка трётся о сетчатый костюм и слегка
                прогревает зону. Сосуды открываются, кожа становится мягче.
                Тепло здесь помогает участку отдать жидкость и размяться.
              </p>
            </article>
          </div>

          <div className="mt-10 grid items-center gap-8 overflow-hidden rounded-[1.8rem] border border-white/10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="aspect-[3/2] bg-black">
              <InlineVideo
                src="/media/r-sleek/method.mp4"
                poster="/media/r-sleek/method.jpg"
              />
            </div>
            <div className="px-7 py-7 md:px-10 md:py-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#c4a078]">
                Насадка в работе
              </p>
              <h3 className="font-serif mt-3 text-3xl leading-tight">
                Скорость вращения около 360–500 оборотов в минуту
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#efe4d4]/68">
                Манипулу ведут по зоне непрерывным ходом — так жидкость уходит
                вдоль лимфотока, а не сгоняется в одну складку. На животе и
                руках нажим спокойнее, на бёдрах и ягодицах плотнее.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Процедура
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Двухфазная методика
          </h2>

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  Силиконовая насадка по маслу
                </p>
                <h3 className="font-serif mt-2 text-3xl">Лимфодренаж</h3>
                <p className="mt-4 text-sm leading-7 text-[#efe4d4]/72">
                  Стимуляция лимфоузлов, запуск оттока лимфы и межтканевой
                  жидкости, лёгкий пилинг-эффект, стимуляция кровообращения и
                  обменных процессов.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  Металлическая насадка по костюму
                </p>
                <h3 className="font-serif mt-2 text-3xl">Локальная коррекция</h3>
                <p className="mt-4 text-sm leading-7 text-[#efe4d4]/72">
                  Интенсивная проработка проблемных зон: живот, бока, бёдра,
                  ягодицы, руки, спина. Более глубокое механическое и тепловое
                  воздействие. Лифтинг ягодиц, улучшение тонуса. Расслабление
                  мышц как после спорта.
                </p>
              </article>
            </div>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black">
              <div className="h-full min-h-[16rem]">
                <InlineVideo
                  src="/media/r-sleek/manipula.mp4"
                  poster="/media/r-sleek/manipula-poster.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="effect" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Результат
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Что даёт курс
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#efe4d4]/72">
            За курс уменьшаются объёмы живота, боков, бёдер и ягодиц, спокойнее
            целлюлит, силуэт собирается. На весах часто минус 5–8&nbsp;кг —
            зависит от исходных параметров. После первого сеанса может уйти до
            800&nbsp;г жидкости, но устойчивая форма появляется только после
            серии процедур.
          </p>
          <div className="mt-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section id="how" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
                Сеанс
              </p>
              <h2 className="font-serif mt-3 text-4xl md:text-5xl">
                40 или 60 минут
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-[#efe4d4]/72">
                Сорок минут, если хотите уделить внимание фигуре и сразу
                вернуться к делам. Час — если зон несколько и нужна более
                плотная работа.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
              <article className="rounded-[1.8rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#c4a078]">
                  Короткий формат
                </p>
                <h3 className="font-serif mt-3 text-5xl">40 мин</h3>
                <p className="mt-5 text-sm leading-7 text-[#efe4d4]/70">
                  Фокус на одной-двух проблемных зонах. Сорок минут — и дальше
                  по дню, с ощущением лёгкости, без паузы на восстановление.
                </p>
              </article>
              <article className="rounded-[1.8rem] border border-[#c4a078]/30 bg-[#221c16] p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#c4a078]">
                  Расширенный
                </p>
                <h3 className="font-serif mt-3 text-5xl">60 мин</h3>
                <p className="mt-5 text-sm leading-7 text-[#efe4d4]/70">
                  Несколько зон за один заход: живот, бока, бёдра, ягодицы.
                  Этот слот обычно берут, когда нужна более комплексная работа
                  с силуэтом.
                </p>
              </article>
            </div>
          </div>

          <div
            id="course"
            className="mt-10 rounded-[2rem] border border-white/10 bg-[#1b1612] px-6 py-10 md:px-12 md:py-14"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
              Курс
            </p>
            <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
              Одна процедура, чтобы почувствовать.
              <br />
              Курс — чтобы закрепить.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#efe4d4]/72">
              Первый визит снимает отёк: до 800&nbsp;г жидкости может уйти сразу.
              На курсе, в зависимости от исходных параметров и особенностей
              тела, на весах бывает минус 5–8&nbsp;кг.
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  После первого
                </dt>
                <dd className="font-serif mt-2 text-4xl">до 800 г</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  На курсе
                </dt>
                <dd className="font-serif mt-2 text-4xl">5–8 кг</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  Интервал
                </dt>
                <dd className="font-serif mt-2 text-4xl">1–2 дня</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="prices" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Цены
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Разово и абонементом
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[1.6rem] border border-white/10 p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                Разовое посещение
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="font-serif text-2xl">40 минут</p>
                    <p className="mt-1 text-sm text-[#efe4d4]/55">
                      1 процедура
                    </p>
                  </div>
                  <p className="font-serif text-3xl">3 500 ₽</p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl">60 минут</p>
                    <p className="mt-1 text-sm text-[#efe4d4]/55">
                      1 процедура
                    </p>
                  </div>
                  <p className="font-serif text-3xl">4 000 ₽</p>
                </div>
              </div>
            </article>

            <article className="rounded-[1.6rem] border border-[#c4a078]/30 bg-[#221c16] p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                Абонемент
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="font-serif text-2xl">5 процедур</p>
                    <p className="mt-1 text-sm text-[#efe4d4]/55">
                      40 мин · 3 000 ₽ за визит
                    </p>
                  </div>
                  <p className="font-serif text-3xl">15 000 ₽</p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl">10 процедур</p>
                    <p className="mt-1 text-sm text-[#efe4d4]/55">
                      40 мин · 2 500 ₽ за визит
                    </p>
                  </div>
                  <p className="font-serif text-3xl">25 000 ₽</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Вопросы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Что обычно спрашивают
          </h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-[1.45rem] leading-tight">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="mt-1 shrink-0 text-[#c4a078] group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden shrink-0 text-[#c4a078] group-open:inline">
                      –
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#efe4d4]/68">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-white/10 px-6 py-8 md:px-10">
          <h2 className="font-serif text-3xl">Противопоказания</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#efe4d4]/68">
            Беременность и шесть месяцев после родов, температура и острые
            инфекции, раны и воспаления на коже, тромбофлебит, обострение
            сердечно‑сосудистых и почечных заболеваний, онкология,
            кардиостимулятор, психические состояния в острой фазе. Варикоз
            первой степени часто допустим — вакуум как раз противопоказан, а
            компрессии нет, но решение только после консультации.
          </p>
        </div>
      </section>

      <section id="gallery" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Фото
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">Клиенты</h2>
          <ClientStrip items={clientGallery} tone="sculpt" />
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6 md:pb-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Мастера
          </p>
          <h2 className="font-serif mt-3 text-3xl md:text-4xl">
            Кто ведёт процедуру
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="overflow-hidden rounded-[1.4rem] border border-white/10">
              <img
                src="/media/r-sleek/master-dmitry.jpg"
                alt="Дмитрий, мастер R-Sleek"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  Мастер R-Sleek
                </p>
                <h3 className="font-serif mt-2 text-2xl">Дмитрий</h3>
                <p className="mt-3 text-sm leading-6 text-[#efe4d4]/68">
                  Ведёт сеанс целиком: отток, затем локальная работа с силуэтом.
                  Живот, бока, бёдра, ягодицы.
                </p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[1.4rem] border border-white/10">
              <img
                src="/media/r-sleek/master-anna.jpg"
                alt="Ксения, мастер R-Sleek"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c4a078]">
                  Мастер R-Sleek
                </p>
                <h3 className="font-serif mt-2 text-2xl">Ксения</h3>
                <p className="mt-3 text-sm leading-6 text-[#efe4d4]/68">
                  Та же двухфазная методика. Нажим и скорость роликов
                  подбирает под кожу, без гонки по минутам.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#1f1a15] px-6 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-xl text-4xl md:text-5xl">
            Начните с одной процедуры
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#efe4d4]/65">
            Основной быстрый эффект даёт лимфодренаж и уменьшение застоя
            жидкости. Улучшение вида кожи и подтягивание кожи тоже очень
            заметны. Эффект накапливается к 5–6-й процедуре и максимума достигает
            к концу курса.
          </p>
          <p className="mt-4 text-sm text-[#efe4d4]/80">
            Работаем каждый день с 11:00 до 20:00
          </p>
          <ContactActions tone="sculpt" />
        </div>
      </section>

      <section id="address" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Адрес
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Геленджик, Бригантина
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#efe4d4]/72">
            {site.address}
            <br />
            {site.addressExtra}.
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-[#c4a078]"
          >
            Открыть в Яндекс Картах
          </a>
          <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/10">
            <iframe
              title="Fiolet на Яндекс Картах"
              src={site.mapsEmbed}
              className="h-[22rem] w-full bg-[#1b1612] md:h-[28rem]"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Важно
          </p>
          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#efe4d4]/72">
            Услуга не является медицинской процедурой и не относится к
            медицинской деятельности. Имеются противопоказания. При наличии
            заболеваний, жалоб или сомнений относительно возможности проведения
            процедуры рекомендуется предварительно проконсультироваться с
            врачом.
          </p>
        </div>
      </section>

      <section id="reviews" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a078]">
            Отзывы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Что пишут на Яндекс Картах
          </h2>
          <div className="relative mt-8 h-[800px] max-w-[560px] overflow-hidden rounded-[1.6rem] border border-white/10">
            <iframe
              title="Отзывы Fiolet на Яндекс Картах"
              src="https://yandex.ru/maps-reviews-widget/108706549072?comments"
              className="h-full w-full bg-[#1b1612]"
              loading="lazy"
            />
            <a
              href="https://yandex.ru/maps/org/fiolet/108706549072/"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 left-0 block w-full truncate px-4 text-center text-[10px] text-[#b3b3b3]"
            >
              Fiolet на карте Геленджика — Яндекс Карты
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tone="sculpt" current="rsleek" />
    </div>
  );
}
