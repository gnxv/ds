import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import {
  BackgroundVideo,
  InlineVideo,
} from "@/components/r-sleek/Media";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Sleek",
  description:
    "Аппаратный массаж R-Sleek в Fiolet: ротационная термокомпрессия для объёмов, отёка и рельефа кожи. Сеансы 40 и 60 минут.",
};

const effects = [
  {
    title: "Отёк и тяжесть",
    text: "Ролики разгоняют лимфу и межтканевую жидкость. После сеанса тело часто ощущается легче — не потому что «сожгли жир за час», а потому что ушёл застой.",
  },
  {
    title: "Локальные объёмы",
    text: "Компрессия достаёт слои, которые плохо отвечают на зал и диету: низ живота, бока, внешняя и внутренняя поверхность бедра.",
  },
  {
    title: "Рельеф кожи",
    text: "Целлюлит — это не только жир, это ещё и жидкость с фиброзными перегородками. Механическая проработка выравнивает картину на поверхности.",
  },
  {
    title: "Тонус",
    text: "Тепло от трения роликов усиливает микроциркуляцию. Кожа в зоне работы выглядит плотнее, без обещаний «минус размер за ночь».",
  },
];

const zones = [
  { name: "Живот и талия", shot: "живот сбоку, без лица, мягкий свет" },
  { name: "Бока", shot: "линия талии, руки подняты" },
  { name: "Бёдра", shot: "передняя и внешняя поверхность бедра" },
  { name: "Ягодицы", shot: "силуэт со спины, без пошлости" },
  { name: "Руки", shot: "задняя поверхность плеча" },
  { name: "Спина", shot: "зона лопаток и поясницы" },
];

const steps = [
  {
    n: "01",
    title: "Разбор зон",
    text: "Коротко: что беспокоит, какие участки берём сегодня, нет ли ограничений. При курсе имеет смысл фиксировать объёмы сантиметром.",
  },
  {
    n: "02",
    title: "Работа манипулой",
    text: "Сначала лимфодренажная линия, затем плотность на проблемных участках. Ощущение — глубокий массаж с теплом, не щипок вакуумом.",
  },
  {
    n: "03",
    title: "После кабинета",
    text: "Вода, спокойный вечер, без сауны и жёсткой тренировки в тот же день. К обычному ритму можно возвращаться сразу.",
  },
];

const faqs = [
  {
    q: "Чем это отличается от LPG и вакуумных банок?",
    a: "Вакуум втягивает складку. R-Sleek давит и вращает роликами — кожа не засасывается. Поэтому синяки встречаются реже, а проработка идёт вглубь за счёт веса манипулы и скорости роликов.",
  },
  {
    q: "Это больно?",
    a: "Нет, если не просить «выкрутить на максимум». Нормальное ощущение — плотное давление и тепло. После сеанса мышцы могут ныть пару часов, как после хорошей тренировки.",
  },
  {
    q: "После одного раза будет эффект?",
    a: "Да, часто визуально: меньше пастозности, спокойнее линия одежды. Это в основном жидкость. Устойчивый контур собирается серией сеансов, а не одним визитом.",
  },
  {
    q: "Сколько ходить?",
    a: "Ориентир: 6 процедур, чтобы понять ответ тела. 10–12 — рабочий курс. Интервал 1–3 дня, не каждый день. Поддержку потом держат 1–2 сеансами в месяц.",
  },
  {
    q: "Нужен специальный костюм?",
    a: "Зависит от насадки и зоны. Иногда работают по маслу, иногда по скользящему комбинезону — так ролики не цепляют волосы и кожу. Скажем на месте.",
  },
  {
    q: "Можно совмещать со спортом и солярием?",
    a: "Да. Зал лучше не в тот же вечер. Солярий — в другой кабинет, в другой слот: кожу после плотного массажа лучше не печь сразу.",
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

      <section className="relative isolate min-h-[86dvh] overflow-hidden">
        <BackgroundVideo
          src="/media/r-sleek/hero.mp4"
          poster="/media/r-sleek/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-black/30" />
        <div className="relative mx-auto flex min-h-[86dvh] max-w-6xl flex-col justify-end px-5 pb-14 pt-24 md:px-6 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#8fa08c]">
            Аппаратный массаж
          </p>
          <h1 className="font-serif mt-4 max-w-3xl text-4xl leading-[0.94] sm:text-6xl md:text-7xl">
            R-Sleek
            <span className="mt-2 block text-[0.72em] text-[#ece6da]/80">
              Собрать силуэт без вакуума и без простоя
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#ece6da]/75 md:text-base">
            Ротационная термокомпрессия: ролики, давление и тепло. Работаем с
            отёком, локальными объёмами и неровным рельефом кожи.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#formats"
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              40 и 60 минут
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Записаться
            </a>
          </div>
        </div>
      </section>

      <section id="method" className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Как это устроено
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Не вакуум. Давление и вращение.
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#ece6da]/78">
              Манипула R-Sleek — цилиндр с несколькими рядами роликов. Она не
              затягивает кожу, а катится с весом: компрессия плюс микровращение.
              На скорости ролики дают лёгкий термоэффект — ткани прогреваются
              без отдельного нагревателя.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[#ece6da]/78">
              Сначала уводят жидкость по лимфатическим линиям. Затем добавляют
              плотность на локальных зонах. Так аппарат достаёт слой, до которого
              руки и классический роллер часто не добираются.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
            <div className="aspect-[4/5]">
              <InlineVideo
                src="/media/r-sleek/method.mp4"
                poster="/media/r-sleek/method.jpg"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl">
          <PhotoSlot
            label="крупный план манипулы в руках мастера, без стоковых улыбок"
            ratio="wide"
          />
        </div>
      </section>

      <section id="effect" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зачем идти
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
            Четыре задачи, с которыми методика реально работает
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {effects.map((item) => (
              <article key={item.title} className="bg-[#0b0e12] p-7 md:p-8">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#ece6da]/68">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#ece6da]/50">
            Первый сеанс чаще всего снимает пастозность. Минус на весах за курс
            бывает, но это не тариф и не гарантия: зависит от исходных объёмов,
            воды, питания и того, ходите ли вы серией, а не раз в месяц.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зоны
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Где прорабатываем
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <div key={zone.name}>
                <PhotoSlot label={zone.shot} />
                <p className="mt-3 font-serif text-2xl">{zone.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="px-5 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Форматы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Два слота в расписании
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.8rem] border border-white/10 p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                Фокус
              </p>
              <h3 className="font-serif mt-3 text-5xl">40 мин</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                Одна–две приоритетные зоны. Если нужно встроиться в день и не
                разбирать всё тело целиком.
              </p>
            </article>
            <article className="rounded-[1.8rem] border border-[#8fa08c]/30 bg-[#141a16] p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                Объём
              </p>
              <h3 className="font-serif mt-3 text-5xl">60 мин</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                Несколько участков за визит: живот и бока плюс бёдра или спина.
                Для курса обычно этого слота достаточно.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="course" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Курс
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Имеет смысл ходить серией
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#ece6da]/78">
              Разовый сеанс — чтобы понять ощущения и увидеть, как тело отдаёт
              жидкость. Курс — чтобы рельеф и объёмы успели сложиться. Между
              визитами оставляем день-два: лимфе нужно время.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Минимум
                </dt>
                <dd className="font-serif mt-2 text-3xl">6 сеансов</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Рабочий курс
                </dt>
                <dd className="font-serif mt-2 text-3xl">10–12</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Пауза
                </dt>
                <dd className="font-serif mt-2 text-3xl">1–3 дня</dd>
              </div>
            </dl>
          </div>
          <PhotoSlot
            label="кабинет целиком: кушетка, аппарат, свет. Пустой кадр без людей"
            ratio="portrait"
          />
        </div>
      </section>

      <section className="px-5 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Визит
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Как проходит час
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
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

      <section id="faq" className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Вопросы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">До записи</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-[1.6rem] leading-tight">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="mt-1 text-[#8fa08c] group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden text-[#8fa08c] group-open:inline">
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
            Беременность и первые месяцы после родов, температура и острые
            инфекции, повреждения кожи в зоне, тромбофлебит, обострение
            сердечно-сосудистых и мочеполовых заболеваний, онкология,
            кардиостимулятор. Если есть сомнение — сначала врач, потом кушетка.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#151a21] px-6 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-xl text-4xl md:text-5xl">
            Начните с одного сеанса, курс соберём по телу
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#ece6da]/65">
            Телефон и мессенджер появятся здесь. Пока можно написать, какой слот
            нужен: 40 или 60 минут.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#formats"
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              Выбрать формат
            </a>
            <a
              href="/"
              className="rounded-full border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              На главную
            </a>
          </div>
        </div>
      </section>

      <SiteFooter tone="sculpt" />
    </div>
  );
}
