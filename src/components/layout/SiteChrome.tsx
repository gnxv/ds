import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/layout/SiteHeader";

export { SiteHeader };

type Tone = "sun" | "sculpt";

const tones = {
  sun: {
    bg: "bg-[#160e09]",
    line: "border-[#e0b06a]/25",
    muted: "text-[#f4e6c8]/60",
  },
  sculpt: {
    bg: "bg-[#0b0e12]",
    line: "border-white/10",
    muted: "text-[#ece6da]/55",
  },
} as const;

export function SiteFooter({ tone }: { tone: Tone }) {
  const t = tones[tone];

  return (
    <footer className={`border-t ${t.line} ${t.bg}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl tracking-[0.2em]">
            {site.name}
          </Link>
          <p className={`mt-2 text-sm ${t.muted}`}>{site.location}</p>
        </div>
        <nav className={`flex flex-wrap gap-x-6 gap-y-2 text-sm ${t.muted}`}>
          <Link href="/solarium">Солярий</Link>
          <Link href="/r-sleek">R-Sleek</Link>
          <a href="#contact">Запись</a>
        </nav>
        <div className={`text-sm ${t.muted}`}>
          <p>{site.phone}</p>
        </div>
      </div>
    </footer>
  );
}
