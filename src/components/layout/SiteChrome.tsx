import Link from "next/link";
import { site, type ServiceKey } from "@/lib/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PhoneIcon, socials } from "@/components/layout/ContactActions";

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
    bg: "bg-[#16120e]",
    line: "border-[#c4a078]/18",
    muted: "text-[#efe4d4]/55",
    ink: "text-[#efe4d4]",
    accent: "text-[#c4a078]",
    active: "border-[#c4a078]/40 bg-[#221c16] text-[#c4a078]",
    idle: "border-[#c4a078]/30 text-[#efe4d4] hover:border-[#c4a078] hover:bg-[#c4a078]/12",
    icon: "border-[#c4a078]/30 text-[#efe4d4] hover:border-[#c4a078] hover:bg-[#c4a078]/12 hover:text-[#c4a078]",
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
          <Link href="/" className="brand-mark font-serif text-3xl tracking-[0.2em]">
            {site.name}
          </Link>
          <p className={`mt-2 whitespace-pre-line text-sm ${t.muted}`}>
            {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-3">
          {(
            [
              { href: "/r-sleek", label: "R-Sleek", key: "rsleek" },
              { href: "/solarium", label: "Солярий", key: "solarium" },
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
            className={`mt-3 inline-flex items-center gap-2 text-sm transition duration-300 hover:opacity-80 ${t.ink}`}
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <a
            href={site.booking}
            target="_blank"
            rel="noreferrer"
            className={`mt-3 inline-flex rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 ${t.idle}`}
          >
            Онлайн-запись
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
