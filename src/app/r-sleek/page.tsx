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
    "R-Sleek в Fiolet — роликовый массаж для линии тела. Меньше отёка, спокойнее объёмы, кожа ровнее. 40 и 60 минут.",
};

const effects = [
  {
    title: "Лёгкость в тот же день",
    text: "Ролики уводят застоявшуюся жидкость. Джинсы садятся иначе не потому что «сгорел жир», а потому что тело перестало держать воду.",
  },
  {
    title: "Зоны, которые не сдаются залу",
    text: "Низ живота, бока, галифе, внутренняя поверхность бедра. Туда, куда не дотягивается ни пресс, ни бег.",
  },
  {
    title: "Кожа без апельсиновой корки",
    text: "Целлюлит — смесь жира, жидкости и перегородок. Аппарат разминает этот слой, и поверхность выглядит спокойнее.",
  },
  {
    title: "Плотность, не дряблость",
    text: "Тепло от роликов будит микроциркуляцию. После курса зона не просто меньше — она собраннее на ощупь.",
  },
];

const zones = [
  { name: "Живот и талия", shot: "живот сбоку, без лица" },
  { name: "Бока", shot: "линия талии" },
  { name: "Бёдра", shot: "внешняя линия бедра" },
  { name: "Ягодицы", shot: "силуэт со спины" },
  { name: "Руки", shot: "задняя поверхность плеча" },
  { name: "Спина", shot: "поясница / лопатки" },
];

const pairs = [
  { zone: "Живот", need: "один ракурс, один свет, до курса и после 8–10 сеансов" },
  { zone: "Бёдра", need: "ноги в одном положении, метка на полу" },
  { zone: "Талия", need: "анфас, руки в стороны, без втягивания живота" },
];

const steps = [
  {
    n: "01",
    title: "Смотрим тело, не прайс",
    text: "Какие зоны мешают в одежде, где отёк, где плотность. Если есть ограничения — говорим до того, как лечь на кушетку.",
  },
  {
    n: "02",
    title: "Сначала лимфа, потом объём",
    text: "Манипула проходит линии оттока и только затем берёт проблемный участок. Ощущение плотное и тёплое — без вакуумного щипка.",
  },
  {
    n: "03",
    title: "Встали и ушли",
    text: "Ни синяков, ни дня на диване. Вода, свободная одежда, без сауны сегодня. Завтра можно жить как обычно.",
  },
];

const faqs = [
  {
    q: "Это тот же LPG?",
    a: "Нет. LPG и банки втягивают складку вакуумом. R-Sleek катает роликами с весом — кожа не засасывается. Поэтому синяков меньше, а ход идёт глубже.",
  },
  {
    q: "Будет больно?",
    a: "Не должно. Норма — глубокий массаж и тепло. Если просить «выкрути», можно получить крепатуру на вечер. Это не цель.",
  },
  {
    q: "Один сеанс что-то даст?",
    a: "Да: меньше пастозности, спокойнее линия в зеркале. Чтобы объём не вернулся за неделю, нужна серия. Один визит — знакомство с телом, не финал.",
  },
  {
    q: "Сколько раз приходить?",
    a: "Шесть — чтобы понять, как отвечаете. Десять–двенадцать — рабочий курс. Между сеансами день или два. Потом поддержка раз в две–четыре недели.",
  },
  {
    q: "Зачем костюм?",
    a: "Чтобы ролики скользили и не цепляли кожу и волосы. Иногда работаем по маслу — зависит от насадки и зоны.",
  },
  {
    q: "Можно в тот же день в солярий?",
    a: "Лучше разнести. После плотной проработки кожу не стоит сразу греть лампами. Солярий — соседний кабинет, другой слот.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-black/35" />
        <div className="relative mx-auto flex min-h-[86dvh] max-w-6xl flex-col justify-end px-5 pb-14 pt-24 md:px-6 md:pb-20">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#8fa08c]">
            Fiolet · тело
          </p>
          <h1 className="font-serif mt-4 max-w-3xl text-4xl leading-[0.94] sm:text-6xl md:text-7xl">
            Снять объём.
            <br />
            Оставить линию.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-[#ece6da]/78 md:text-base">
            R-Sleek собирает силуэт там, где спорт уже не берёт: живот, бока,
            бёдра. Сорок или шестьдесят минут — и вы в том же дне, только легче.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              Записаться
            </a>
            <a
              href="#results"
              className="rounded-full border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.2em]"
            >
              Смотреть до и после
            </a>
          </div>
        </div>
      </section>

      <section id="method" className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Аппарат
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Ролики вместо вакуума
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#ece6da]/80">
              Манипула тяжёлая, внутри — ряды роликов. Они не затягивают кожу,
              а катятся с давлением. На скорости появляется тепло. Так
              прорабатывается слой, до которого руки обычно не добираются.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[#ece6da]/80">
              Сначала уходит жидкость по лимфе. Потом плотность на локальной
              зоне. Без синяков, из‑за которых нельзя надеть платье завтра.
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
            src="/media/r-sleek/manipula.png"
            alt="Манипула R-Sleek на бедре"
            label="манипула"
            ratio="wide"
          />
        </div>
      </section>

      <section id="effect" className="px-5 pb-20 md:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зачем приходить
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
            Четыре сдвига, которые видно в одежде
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
        </div>
      </section>

      <section id="results" className="px-5 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            До и после
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
            Одна поза. Один свет. Разная история тела.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ece6da]/60">
            Сюда встанут ваши кадры курса. Снимать лучше в кабинете, без фильтров
            и втягивания живота — иначе сравнение врёт.
          </p>
          <div className="mt-10 space-y-8">
            {pairs.map((pair) => (
              <div key={pair.zone}>
                <p className="mb-3 font-serif text-2xl">{pair.zone}</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <PhotoSlot label={`до · ${pair.need}`} />
                  <PhotoSlot label={`после · тот же ракурс`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зоны
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">Куда ставим манипулу</h2>
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
            Слоты
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Сорок минут или час
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-[1.8rem] border border-white/10 p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                Точечно
              </p>
              <h3 className="font-serif mt-3 text-5xl">40 мин</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                Одна зона, которой мало в зеркале. Вмещается в обеденный разрыв.
              </p>
            </article>
            <article className="rounded-[1.8rem] border border-[#8fa08c]/30 bg-[#141a16] p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                Курс
              </p>
              <h3 className="font-serif mt-3 text-5xl">60 мин</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/70">
                Живот и бока плюс бёдра или спина. Этот слот обычно берут на серию.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="course" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Ритм
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Тело отвечает на серию, не на подвиг
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#ece6da]/78">
              Раза хватает, чтобы почувствовать отток. Линия держится, когда
              сеансы идут волной: через день, две–три недели подряд. Потом —
              редкая поддержка, не новый марафон.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Проба
                </dt>
                <dd className="font-serif mt-2 text-3xl">6 сеансов</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Курс
                </dt>
                <dd className="font-serif mt-2 text-3xl">10–12</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
                  Пауза
                </dt>
                <dd className="font-serif mt-2 text-3xl">через день</dd>
              </div>
            </dl>
          </div>
          <PhotoSlot
            label="кабинет: кушетка, аппарат с синей подсветкой, без людей"
            ratio="portrait"
          />
        </div>
      </section>

      <section className="px-5 pb-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Визит
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">Что будет в кабинете</h2>
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
            Коротко
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">До того как лечь</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-[1.55rem] leading-tight">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span className="mt-1 text-[#8fa08c] group-open:hidden">+</span>
                    <span className="mt-1 hidden text-[#8fa08c] group-open:inline">–</span>
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
          <h2 className="font-serif text-3xl">Не берём на процедуру</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ece6da]/68">
            Беременность и ранний послеродовый период, температура, раны и
            воспаления на коже, тромбофлебит, обострение сердца и почек,
            онкология, кардиостимулятор. Сомнение — сначала врач.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 md:px-6">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#151a21] px-6 py-12 md:px-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-xl text-4xl md:text-5xl">
            Первый сеанс покажет, как отвечает ваше тело
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#ece6da]/65">
            Напишите, какой слот нужен — 40 или 60 минут. Телефон появится здесь,
            как только пришлёте номер.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#formats"
              className="rounded-full bg-[#ece6da] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              Выбрать слот
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
