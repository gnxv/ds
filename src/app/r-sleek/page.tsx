import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import { BeforeAfter } from "@/components/r-sleek/BeforeAfter";
import {
  BackgroundVideo,
  InlineVideo,
} from "@/components/r-sleek/Media";
import { services, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Sleek — аппаратный роликовый массаж",
  description:
    "R-Sleek в Fiolet: минус объёмы, меньше отёка, более подтянутый силуэт. После первого сеанса уходит до 800 г жидкости. 40 и 60 минут.",
};

const session = [
  {
    n: "01",
    title: "Короткий разбор тела",
    text: "Какие зоны мешают в одежде, были ли операции, варикоз, беременность, боли. Если есть сомнение — процедуру не делаем и отправляем к врачу.",
  },
  {
    n: "02",
    title: "Лимфа силиконом",
    text: "Сначала масло и силиконовая насадка. Задача не «разбить бока», а открыть отток. Без этого шага локальная работа даёт меньше и держится хуже.",
  },
  {
    n: "03",
    title: "Зона металлом",
    text: "Надеваете тонкий костюм. Мастер ведёт цилиндр по выбранным линиям, скорость подбирается по ощущению: должно быть плотно и тепло, не больно.",
  },
  {
    n: "04",
    title: "Выход без восстановления",
    text: "Синяков от вакуума нет — кожа не втягивается. После сеанса можно идти дальше по дню. Вода, без сауны и солярия в эти же часы.",
  },
];

const faqs = [
  {
    q: "Чем R-Sleek отличается от LPG и банок?",
    a: "LPG и вакуумные банки затягивают складку. R-Sleek давит и катает: компрессия идёт от веса манипулы, движение — от рядов роликов. Поэтому меньше синяков и можно работать при сосудистой хрупкости, где вакуум уже нельзя.",
  },
  {
    q: "Это похудение?",
    a: "После первого сеанса минус почти всегда про жидкость: до 800 г может уйти сразу. На курсе, в зависимости от исходных параметров и того, как отвечает тело, на весах бывает минус 5–8 кг. Это не диета и не липосакция — без повторения и без режима вода возвращается.",
  },
  {
    q: "Сколько длится сеанс?",
    a: "В кабинете два слота: 40 минут на одну зону и 60 минут, если берём две связанные области — например живот с боками и бёдра. Полный обход тела в клиниках обычно 50–75 минут; у нас формат камерный, без конвейера «всё сразу».",
  },
  {
    q: "Как часто приходить?",
    a: "Рабочий ритм — через день или два. Курс 8–12 сеансов. Первые три лучше не растягивать: так видно, как отвечает именно ваше тело. Дальше поддержка раз в две–четыре недели.",
  },
  {
    q: "Будет ли больно?",
    a: "Не должно. Нормальное ощущение — глубокий массаж и тепло. Скорость роликов крутится под вас. Если просить максимальный режим «чтобы подействовало», вечером будет крепатура. Это не критерий качества.",
  },
  {
    q: "Зачем костюм?",
    a: "Металлическая насадка работает только по нему: ролики не цепляют кожу и волосы, костюм держит тепло от трения. Силиконовую насадку ведём по маслу, без костюма.",
  },
  {
    q: "Можно в тот же день в солярий?",
    a: "Не стоит. После плотной проработки кожу не греем лампами. Солярий — соседнее помещение, записываем отдельным слотом на другой день.",
  },
  {
    q: "Что делать до и после?",
    a: "Не есть плотно за полтора–два часа. В день процедуры и на курсе меньше соли и алкоголя — иначе вода вернётся к вечеру. Пить обычную воду равномерно, не залпом перед сеансом. После — без бани до следующего дня.",
  },
];

export default function RSleekPage() {
  return (
    <div className="min-h-dvh bg-[#0b0e12] text-[#ece6da]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-black/35" />
        <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:px-6 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#8fa08c]">
            Аппаратная коррекция фигуры
          </p>
          <h1 className="font-serif mt-4 max-w-4xl text-4xl leading-[0.96] sm:text-6xl md:text-7xl">
            Минус 800&nbsp;г
            <br />
            уже после первой процедуры.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#ece6da]/82 md:text-[17px]">
            R-Sleek снимает отёк, уменьшает проявления целлюлита и собирает
            линию живота, боков, бёдер и ягодиц. После первого сеанса может
            уйти до 800&nbsp;г жидкости — тело выглядит легче уже в тот же день.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              Записаться
            </a>
            <a
              href="#how"
              className="rounded-full border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Как проходит сеанс
            </a>
          </div>
        </div>
      </section>

      <section id="method" className="px-5 pb-20 pt-16 md:px-6 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Принцип
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Давление, вращение, тепло
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                Компрессия
              </p>
              <p className="mt-4 text-sm leading-7 text-[#ece6da]/72">
                Манипула — тяжёлый цилиндр своим весом выталкивает застоявшуюся
                жидкость из тканей в лимфатическое русло. Отсюда ощущение
                лёгкости в тот же вечер и минус в сантиметрах.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                Ротация
              </p>
              <p className="mt-4 text-sm leading-7 text-[#ece6da]/72">
                Десять рядов роликов прокатывают подкожный слой, а не гладят
                поверхность. Ткань смещается, разминаются уплотнения, меньше
                заметна «апельсиновая корка».
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-white/10 p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                Термоэффект
              </p>
              <p className="mt-4 text-sm leading-7 text-[#ece6da]/72">
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
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                Насадка в работе
              </p>
              <h3 className="font-serif mt-3 text-3xl leading-tight">
                Скорость вращения около 360–500 оборотов в минуту
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#ece6da]/68">
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
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Процедура
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Двухфазная методика
          </h2>

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
            <div className="grid gap-4">
              <article className="rounded-[1.6rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Силиконовая насадка по маслу
                </p>
                <h3 className="font-serif mt-2 text-3xl">Лимфодренаж</h3>
                <p className="mt-4 text-sm leading-7 text-[#ece6da]/72">
                  Стимуляция лимфоузлов, запуск оттока лимфы и межтканевой
                  жидкости, лёгкий пилинг-эффект, стимуляция кровообращения и
                  обменных процессов.
                </p>
              </article>
              <article className="rounded-[1.6rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Металлическая насадка по костюму
                </p>
                <h3 className="font-serif mt-2 text-3xl">Локальная коррекция</h3>
                <p className="mt-4 text-sm leading-7 text-[#ece6da]/72">
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
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Результат
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-5xl">
            Что видно после процедуры
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#ece6da]/72">
            После первого сеанса уходит до 800&nbsp;г жидкости: меньше отёка,
            тело легче уже в тот же день. На курсе собираются живот, бока,
            бёдра и ягодицы, спокойнее целлюлит. На весах бывает минус
            5–8&nbsp;кг — зависит от исходных параметров.
          </p>
          <div className="mt-10">
            <BeforeAfter />
          </div>
        </div>
      </section>

      <section id="how" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Сеанс
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Что происходит в кабинете
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {session.map((step) => (
              <article key={step.n} className="border-t border-white/12 pt-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#8fa08c]">
                  {step.n}
                </p>
                <h3 className="font-serif mt-3 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#ece6da]/68">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
                Слоты
              </p>
              <h2 className="font-serif mt-3 text-4xl md:text-5xl">
                40 или 60 минут
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-[#ece6da]/72">
                Сорок минут, если хотите уделить фигуре внимание и сразу
                вернуться к делам. Час — если зон несколько и нужна более
                плотная работа.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[#ece6da]/80">
                {[
                  "Живот и талия",
                  "Бока",
                  "Бёдра",
                  "Ягодицы",
                  "Руки",
                  "Поясница и спина",
                ].map((zone) => (
                  <li
                    key={zone}
                    className="flex items-center gap-3 border-b border-white/8 py-2"
                  >
                    <span className="h-px w-6 bg-[#8fa08c]" />
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
              <article className="rounded-[1.8rem] border border-white/10 p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                  Короткий формат
                </p>
                <h3 className="font-serif mt-3 text-5xl">40 мин</h3>
                <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                  Фокус на одной–двух проблемных зонах. Сорок минут — и дальше
                  по дню, с ощущением лёгкости, без окна на восстановление.
                </p>
              </article>
              <article className="rounded-[1.8rem] border border-[#8fa08c]/30 bg-[#141a16] p-7">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                  Расширенный
                </p>
                <h3 className="font-serif mt-3 text-5xl">60 мин</h3>
                <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                  Несколько зон за один заход: живот, бока, бёдра, ягодицы.
                  Этот слот обычно берут, когда нужна более комплексная работа
                  с силуэтом.
                </p>
              </article>
            </div>
          </div>

          <div
            id="course"
            className="mt-10 rounded-[2rem] border border-white/10 bg-[#10141a] px-6 py-10 md:px-12 md:py-14"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Курс
            </p>
            <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
              Одна процедура, чтобы почувствовать.
              <br />
              Курс — чтобы закрепить.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#ece6da]/72">
              Первый визит снимает отёк: до 800&nbsp;г жидкости может уйти сразу.
              На курсе, в зависимости от исходных параметров и особенностей
              тела, на весах бывает минус 5–8&nbsp;кг. Цифры не обещание каждому —
              ориентир, который в этом кабинете уже видели.
            </p>
            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  После первого
                </dt>
                <dd className="font-serif mt-2 text-4xl">до 800 г</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  На курсе
                </dt>
                <dd className="font-serif mt-2 text-4xl">5–8 кг</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Интервал
                </dt>
                <dd className="font-serif mt-2 text-4xl">1–2 дня</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Вопросы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">До записи</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-[1.45rem] leading-tight">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="mt-1 shrink-0 text-[#8fa08c] group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden shrink-0 text-[#8fa08c] group-open:inline">
                      –
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#ece6da]/68">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-white/10 px-6 py-8 md:px-10">
          <h2 className="font-serif text-3xl">Когда не делаем</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ece6da]/68">
            Беременность и шесть месяцев после родов, температура и острые
            инфекции, раны и воспаления на коже, тромбофлебит, обострение
            сердечно‑сосудистых и почечных заболеваний, онкология,
            кардиостимулятор, психические состояния в острой фазе. Варикоз
            первой степени часто допустим — вакуум как раз противопоказан, а
            компрессия нет, но решение только после разговора, не по тексту с
            сайта.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#151a21] px-6 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-xl text-4xl md:text-5xl">
            Начните с одной процедуры
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#ece6da]/65">
            Напишите 40 или 60 минут и зону: живот, бока, бёдра, ягодицы.
            Кабинет в гостинице, соседняя дверь с солярием. Для выраженного
            результата лучше сразу думать курсом.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              {site.phone}
            </a>
            <a
              href={site.telegram}
              className="rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tone="sculpt" />
    </div>
  );
}
