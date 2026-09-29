import Link from "next/link";
import { site, type ServiceKey } from "@/lib/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { socials } from "@/components/layout/ContactActions";

export { SiteHeader };

type Tone = "sun" | "sculpt";

const tones = {
  sun: {
    bg: "bg-[#160e09]",
    line: "border-[#e0b06a]/25",
    muted: "text-[#f4e6c8]/60",
    ink: "text-[#f4e6c8]",
    accent: "text-[#e0b06a]",
    active: "bg-[#e0b06a] text-[#160e09]",
    idle: "border-[#e0b06a]/35 text-[#f4e6c8] hover:border-[#e0b06a] hover:bg-[#e0b06a]/15",
    icon: "border-[#e0b06a]/30 text-[#f4e6c8] hover:border-[#e0b06a] hover:bg-[#e0b06a]/15 hover:text-[#e0b06a]",
  },
  sculpt: {
    bg: "bg-[#0b0e12]",
    line: "border-white/10",
    muted: "text-[#ece6da]/55",
    ink: "text-[#ece6da]",
    accent: "text-[#8fa08c]",
    active: "bg-[#ece6da] text-[#0b0e12]",
    idle: "border-white/20 text-[#ece6da] hover:border-white/50 hover:bg-white/8",
    icon: "border-white/20 text-[#ece6da] hover:border-white/50 hover:bg-white/8 hover:text-[#8fa08c]",
  },
} as const;

export function SiteFooter({
  tone,
  current,
}: {
  tone: Tone;
  current?: ServiceKey;
}) {
  const t = tones[tone];

  return (
    <footer className={`border-t ${t.line} ${t.bg}`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_auto_1fr] md:items-end">
        <div>
          <Link href="/" className="font-serif text-2xl tracking-[0.2em]">
            {site.name}
          </Link>
          <p className={`mt-2 whitespace-pre-line text-sm ${t.muted}`}>
            {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-3">
          {(
            [
              { href: "/solarium", label: "Солярий", key: "solarium" },
              { href: "/r-sleek", label: "R-Sleek", key: "rsleek" },
            ] as const
          ).map((item) => {
            const active = current === item.key;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-0.5",
                  active ? t.active : t.idle,
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:justify-self-end">
          <p className={`text-[11px] uppercase tracking-[0.28em] ${t.accent}`}>
            Контакты
          </p>
          <a
            href={site.phoneHref}
            className={`mt-3 inline-block text-sm transition duration-300 hover:opacity-80 ${t.ink}`}
          >
            {site.phone}
          </a>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 hover:scale-105 ${t.icon}`}
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
