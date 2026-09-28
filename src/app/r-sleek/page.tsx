import { SiteFooter, SiteHeader } from "@/components/layout/SiteChrome";
import {
  BackgroundVideo,
  InlineVideo,
} from "@/components/r-sleek/Media";
import { services } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "R-Sleek",
  description:
    "R-Sleek — минус объёмы, лёгкость и более подтянутый силуэт. Процедуры 40 и 60 минут.",
};

const results = [
  {
    value: "до 800 г",
    label: "жидкости может уйти уже после первого сеанса",
  },
  {
    value: "5–8 кг",
    label: "на весах возможны в рамках курса — зависит от исходных данных",
  },
  {
    value: "6–12",
    label: "процедур обычно достаточно, чтобы закрепить силуэт",
  },
];

const benefits = [
  {
    title: "Визуальные объёмы",
    text: "Силуэт собирается: меньше отёка, спокойнее линия талии, боков и бёдер.",
  },
  {
    title: "Отёчность и тяжесть",
    text: "За счёт лимфы и межтканевой жидкости тело часто ощущается легче уже в день визита.",
  },
  {
    title: "Целлюлит",
    text: "Роликовая компрессия работает с рельефом кожи — поверхность выглядит ровнее.",
  },
  {
    title: "Кожа",
    text: "Тепло и механическая проработка помогают тонусу: кожа выглядит более ухоженной.",
  },
  {
    title: "Контур",
    text: "Живот, бока, бёдра, ягодицы — зоны, которые чаще всего хотят сделать собраннее.",
  },
  {
    title: "Без простоя",
    text: "Нет вакуума и синяков. После сеанса возвращаетесь к делам.",
  },
];

const zones = ["Живот", "Бока", "Бёдра", "Ягодицы", "Руки", "Спина"];

const steps = [
  {
    n: "01",
    title: "Короткий разбор",
    text: "Смотрим запрос, зоны и самочувствие. Если есть ограничения — говорим сразу.",
  },
  {
    n: "02",
    title: "40 или 60 минут",
    text: "Манипула с роликами идёт по телу: компрессия, вращение, мягкий тепловой эффект.",
  },
  {
    n: "03",
    title: "После сеанса",
    text: "Пить воду, не зажиматься в тесной одежде. Можно сразу идти дальше по дню.",
  },
];

const faqs = [
  {
    q: "Это больно?",
    a: "Обычно нет. Ощущение ближе к плотному массажу: давление и тепло. После сеанса тело может чувствовать себя так, будто поработало — без восстановления «на диване».",
  },
  {
    q: "Когда виден результат?",
    a: "Часто легче и собраннее выглядит уже после первой процедуры за счёт жидкости. Более устойчивый контур набирается курсом. Цифры на весах индивидуальны.",
  },
  {
    q: "Сколько нужно процедур?",
    a: "Базовый ориентир — 6 сеансов. Полный курс чаще 10–12, с паузой 1–3 дня. Для выраженной работы с объёмами иногда продолжают до 15. Повторный курс — через полгода–год.",
  },
  {
    q: "Как часто ходить?",
    a: "Оптимально 2–3 раза в неделю. Не каждый день подряд: телу нужно время на отток жидкости.",
  },
  {
    q: "Кому не подходит?",
    a: "Беременность и ранний послеродовой период, острые воспаления, повреждения кожи в зоне, тромбофлебит, обострение сердечно-сосудистых и мочеполовых заболеваний, температура, онкология, кардиостимулятор. Перед курсом — консультация.",
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

      <section className="relative isolate min-h-[88dvh] overflow-hidden">
        <BackgroundVideo
          src="/media/r-sleek/hero.mp4"
          poster="/media/r-sleek/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a]/88 via-[#07080a]/55 to-[#07080a]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-[#0b0e12]/35" />

        <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.42em] text-[#8fa08c]">
            Body sculpt
          </p>
          <h1 className="font-serif mt-5 max-w-3xl text-5xl leading-[0.92] md:text-7xl">
            Минус объёмы.
            <br />
            Лёгкость.
            <br />
            Подтянутый силуэт.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#ece6da]/78 md:text-lg">
            R-Sleek — аппаратная процедура для тех, кто хочет собрать контур,
            снять ощущение отёка и сделать кожу визуально глаже. Без операции и
            без выпадения из графика.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#formats"
              className="rounded-full bg-[#ece6da] px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-[#0b0e12] transition hover:bg-white"
            >
              40 или 60 минут
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-[12px] uppercase tracking-[0.22em]"
            >
              Записаться
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          {results.map((item) => (
            <div key={item.value}>
              <p className="font-serif text-4xl text-[#ece6da] md:text-5xl">
                {item.value}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#ece6da]/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зачем это
          </p>
          <h2 className="font-serif mt-3 max-w-3xl text-4xl md:text-6xl">
            Процедура для силуэта, а не для геройства в зале
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-base leading-8 text-[#ece6da]/78">
              Хотите выглядеть стройнее, уменьшить объёмы и привести тело в
              форму? R-Sleek работает с теми зонами, которые редко сдаются
              одним только спортом: живот, бока, бёдра, ягодицы.
            </p>
            <p className="text-base leading-8 text-[#ece6da]/78">
              Уже после первой процедуры из организма может уйти до 800 г
              жидкости — меньше тяжести и отёка. На курсе результат складывается:
              у части клиентов на весах минус 5–8 кг. Это не обещание «всем
              одинаково», а ориентир при регулярности и исходных данных.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Что вы получаете
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Шесть понятных эффектов
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((item, i) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-white/10 bg-[#151a21]/70 p-7"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                  0{i + 1}
                </p>
                <h3 className="font-serif mt-4 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#ece6da]/68">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="px-6 py-8 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#11151b]">
            <div className="aspect-[4/5] md:aspect-[4/4.4]">
              <InlineVideo
                src="/media/r-sleek/method.mp4"
                poster="/media/r-sleek/method.jpg"
              />
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
              Методика
            </p>
            <h2 className="font-serif mt-3 text-4xl md:text-5xl">
              Ротационная термокомпрессия
            </h2>
            <p className="mt-6 text-base leading-8 text-[#ece6da]/78">
              В манипуле — ряды роликов. Они не втягивают кожу вакуумом, а
              давят и вращаются. Так прорабатываются более глубокие слои, чем
              при обычном массаже, разгоняется лимфа и появляется мягкий
              тепловой эффект.
            </p>
            <ul className="mt-8 space-y-4 text-sm leading-6 text-[#ece6da]/75">
              <li className="border-t border-white/10 pt-4">
                Компрессия вместо вакуума — меньше риска синяков.
              </li>
              <li className="border-t border-white/10 pt-4">
                Лимфодренаж и отток жидкости — та самая лёгкость после сеанса.
              </li>
              <li className="border-t border-white/10 pt-4">
                Локальная работа с жировыми зонами и рельефом целлюлита.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Зоны
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Где собираем силуэт
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {zones.map((zone) => (
              <span
                key={zone}
                className="rounded-full border border-white/15 px-5 py-3 text-[12px] uppercase tracking-[0.22em]"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Форматы
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Сорок или шестьдесят минут
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-[#151a21]/80 p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8fa08c]">
                Точечно
              </p>
              <h3 className="font-serif mt-4 text-5xl">40 минут</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/72">
                Формат для тех, кто хочет уделить внимание фигуре и проблемным
                зонам, не тратя полдня. 40 минут — и вы возвращаетесь к делам с
                ощущением лёгкости.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex text-[11px] uppercase tracking-[0.28em] text-[#ece6da]"
              >
                Записаться на 40 минут →
              </a>
            </article>
            <article className="rounded-[2rem] border border-[#8fa08c]/35 bg-[#1a221c] p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8fa08c]">
                Комплексно
              </p>
              <h3 className="font-serif mt-4 text-5xl">60 минут</h3>
              <p className="mt-5 text-sm leading-7 text-[#ece6da]/72">
                Расширенный формат: больше времени на несколько зон — живот,
                бока, бёдра, ягодицы и участки, которые хочется сделать
                собраннее.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex text-[11px] uppercase tracking-[0.28em]"
              >
                Записаться на 60 минут →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Визит
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            Как проходит сеанс
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n} className="border-t border-white/15 pt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8fa08c]">
                  {step.n}
                </p>
                <h3 className="font-serif mt-3 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#ece6da]/68">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            FAQ
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">Коротко по делу</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-serif text-2xl marker:content-none">
                  <span className="flex items-center justify-between gap-6">
                    {item.q}
                    <span className="text-[#8fa08c] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#ece6da]/68">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#ece6da]/45">
            Результат индивидуален и зависит от исходных объёмов, регулярности
            курса, питания и питьевого режима. R-Sleek не заменяет обследование
            и не является медицинским лечением.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#151a21] px-8 py-12 md:px-12 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#8fa08c]">
            Запись
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-4xl md:text-5xl">
            Начните с одной процедуры — курс соберём по телу
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#ece6da]/68">
            Представьте: вы приходите, 40 или 60 минут в кабинете, затем взгляд
            в зеркало. Тело может выглядеть легче, силуэт — аккуратнее, кожа —
            глаже.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+70000000000"
              className="rounded-full bg-[#ece6da] px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-[#0b0e12]"
            >
              Позвонить
            </a>
            <a
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 text-[12px] uppercase tracking-[0.2em]"
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
