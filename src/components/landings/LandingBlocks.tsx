import Link from "next/link";

type Tone = "sun" | "sculpt";

const palette = {
  sun: {
    page: "bg-[#160e09] text-[#f4e6c8]",
    heroGlow: "bg-[#e0b06a]/20",
    kicker: "text-[#e0b06a]",
    muted: "text-[#f4e6c8]/70",
    card: "border-[#e0b06a]/20 bg-[#2a1a10]/60",
    button: "bg-[#e0b06a] text-[#160e09] hover:bg-[#f4e6c8]",
    ghost: "border border-[#e0b06a]/40 text-[#f4e6c8]",
  },
  sculpt: {
    page: "bg-[#0b0e12] text-[#ece6da]",
    heroGlow: "bg-[#8fa08c]/18",
    kicker: "text-[#8fa08c]",
    muted: "text-[#ece6da]/68",
    card: "border-white/10 bg-[#151a21]/70",
    button: "bg-[#ece6da] text-[#0b0e12] hover:bg-white",
    ghost: "border border-white/20 text-[#ece6da]",
  },
} as const;

export function LandingHero({
  tone,
  kicker,
  title,
  lead,
  cta,
}: {
  tone: Tone;
  kicker: string;
  title: string;
  lead: string;
  cta: string;
}) {
  const p = palette[tone];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
      <div
        className={`pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full blur-3xl ${p.heroGlow}`}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className={`text-[11px] uppercase tracking-[0.4em] ${p.kicker}`}>
          {kicker}
        </p>
        <h1 className="font-serif mt-6 max-w-3xl whitespace-pre-line text-5xl leading-[0.95] md:text-7xl">
          {title}
        </h1>
        <p className={`mt-8 max-w-xl text-base leading-7 md:text-lg ${p.muted}`}>
          {lead}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className={`rounded-full px-6 py-3 text-[12px] uppercase tracking-[0.22em] transition ${p.button}`}
          >
            {cta}
          </a>
          <Link
            href="/"
            className={`rounded-full px-6 py-3 text-[12px] uppercase tracking-[0.22em] ${p.ghost}`}
          >
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PlaceholderSection({
  id,
  tone,
  label,
  title,
  note,
  cards,
}: {
  id: string;
  tone: Tone;
  label: string;
  title: string;
  note: string;
  cards: string[];
}) {
  const p = palette[tone];

  return (
    <section id={id} className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className={`text-[11px] uppercase tracking-[0.32em] ${p.kicker}`}>
          {label}
        </p>
        <h2 className="font-serif mt-3 text-4xl md:text-5xl">{title}</h2>
        <p className={`mt-4 max-w-2xl text-sm leading-6 ${p.muted}`}>{note}</p>
        <div className="section-grid mt-10">
          {cards.map((card) => (
            <article
              key={card}
              className={`min-h-40 rounded-3xl border p-6 ${p.card}`}
            >
              <p className="text-sm leading-6">{card}</p>
              <p className={`mt-8 text-[11px] uppercase tracking-[0.24em] ${p.muted}`}>
                блок под контент
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactStub({ tone }: { tone: Tone }) {
  const p = palette[tone];

  return (
    <section id="contact" className="px-6 pb-24">
      <div className={`mx-auto max-w-6xl rounded-[2rem] border px-8 py-12 ${p.card}`}>
        <p className={`text-[11px] uppercase tracking-[0.32em] ${p.kicker}`}>
          Запись
        </p>
        <h2 className="font-serif mt-3 text-4xl">Оставим форму и мессенджеры</h2>
        <p className={`mt-4 max-w-xl text-sm leading-6 ${p.muted}`}>
          Здесь будет короткий путь к записи: телефон, Telegram, возможно
          онлайн-слоты. Пока это якорь для следующего блока.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className={`rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.2em] ${p.button}`}>
            Записаться
          </span>
          <span className={`rounded-full px-5 py-3 text-[12px] uppercase tracking-[0.2em] ${p.ghost}`}>
            Задать вопрос
          </span>
        </div>
      </div>
    </section>
  );
}

export { palette };
