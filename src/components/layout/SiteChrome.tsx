import Link from "next/link";
import { site } from "@/lib/site";

type Tone = "sun" | "sculpt";

const tones = {
  sun: {
    bg: "bg-[#160e09]",
    line: "border-[#e0b06a]/25",
    accent: "text-[#e0b06a]",
    muted: "text-[#f4e6c8]/60",
    pill: "border-[#e0b06a]/40 text-[#f4e6c8]",
  },
  sculpt: {
    bg: "bg-[#0b0e12]",
    line: "border-white/10",
    accent: "text-[#8fa08c]",
    muted: "text-[#ece6da]/55",
    pill: "border-[#c9d0c6]/30 text-[#ece6da]",
  },
} as const;

export function SiteHeader({ tone, current }: { tone: Tone; current: string }) {
  const t = tones[tone];

  return (
    <header
      className={`sticky top-0 z-30 border-b ${t.line} ${t.bg}/90 backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-[0.24em]">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-[11px] uppercase tracking-[0.24em]">
          <Link href="/" className={t.muted}>
            Выбор
          </Link>
          <Link
            href="/solarium"
            className={current === "solarium" ? t.accent : t.muted}
          >
            Солярий
          </Link>
          <Link
            href="/r-sleek"
            className={current === "rsleek" ? t.accent : t.muted}
          >
            R-Sleek
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ tone }: { tone: Tone }) {
  const t = tones[tone];

  return (
    <footer className={`border-t ${t.line} ${t.bg}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.2em]">{site.name}</p>
          <p className={`mt-2 text-sm ${t.muted}`}>{site.location}</p>
        </div>
        <div className={`text-sm ${t.muted}`}>
          <p>{site.phone}</p>
          <p className="mt-1">Солярий и R-Sleek · соседние кабинеты</p>
        </div>
      </div>
    </footer>
  );
}
