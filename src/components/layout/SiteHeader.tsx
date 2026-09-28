"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services, site, type NavLink, type ServiceKey } from "@/lib/site";

type Tone = "sun" | "sculpt";

const tones = {
  sun: {
    bg: "bg-[#160e09]/92",
    line: "border-[#e0b06a]/25",
    accent: "text-[#e0b06a]",
    muted: "text-[#f4e6c8]/60",
    panel: "bg-[#160e09]",
    chip: "border-[#e0b06a]/35",
  },
  sculpt: {
    bg: "bg-[#0b0e12]/92",
    line: "border-white/10",
    accent: "text-[#8fa08c]",
    muted: "text-[#ece6da]/55",
    panel: "bg-[#0b0e12]",
    chip: "border-white/15",
  },
} as const;

export function SiteHeader({
  tone,
  current,
  sections,
}: {
  tone: Tone;
  current: ServiceKey;
  sections: readonly NavLink[];
}) {
  const [open, setOpen] = useState(false);
  const t = tones[tone];
  const other = current === "solarium" ? services.rsleek : services.solarium;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 border-b ${t.line} ${t.bg} backdrop-blur-md`}>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 md:px-6 md:py-3.5">
        <Link
          href="/"
          className="font-serif shrink-0 text-[1.35rem] tracking-[0.22em]"
        >
          {site.name}
        </Link>

        <div
          className={`ml-1 hidden items-center rounded-full border px-1 py-1 text-[10px] uppercase tracking-[0.2em] sm:flex ${t.chip}`}
        >
          <Link
            href={services.solarium.slug}
            className={`rounded-full px-3 py-1.5 ${
              current === "solarium" ? t.accent : t.muted
            }`}
          >
            Солярий
          </Link>
          <Link
            href={services.rsleek.slug}
            className={`rounded-full px-3 py-1.5 ${
              current === "rsleek" ? t.accent : t.muted
            }`}
          >
            R-Sleek
          </Link>
        </div>

        <nav className="ml-auto hidden items-center gap-5 text-[11px] uppercase tracking-[0.2em] lg:flex">
          {sections.map((item) => (
            <a key={item.href} href={item.href} className={t.muted}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${t.chip}`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-current transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div className={`hidden border-t ${t.line} md:block lg:hidden`}>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2 text-[11px] uppercase tracking-[0.18em]">
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-3 py-2 ${t.muted}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open ? (
        <div className={`fixed inset-0 top-[57px] z-40 ${t.panel} lg:hidden`}>
          <div className="mx-auto flex h-full max-w-6xl flex-col gap-8 overflow-y-auto px-6 py-8">
            <div>
              <p className={`text-[11px] uppercase tracking-[0.28em] ${t.muted}`}>
                Кабинеты
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  href={services.solarium.slug}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-5 ${t.chip} ${
                    current === "solarium" ? t.accent : ""
                  }`}
                >
                  <span className="block font-serif text-2xl">Солярий</span>
                  <span className={`mt-2 block text-[11px] uppercase tracking-[0.2em] ${t.muted}`}>
                    Загар
                  </span>
                </Link>
                <Link
                  href={services.rsleek.slug}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-5 ${t.chip} ${
                    current === "rsleek" ? t.accent : ""
                  }`}
                >
                  <span className="block font-serif text-2xl">R-Sleek</span>
                  <span className={`mt-2 block text-[11px] uppercase tracking-[0.2em] ${t.muted}`}>
                    Силуэт
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <p className={`text-[11px] uppercase tracking-[0.28em] ${t.muted}`}>
                На этой странице
              </p>
              <nav className="mt-4 flex flex-col">
                {sections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/10 py-4 font-serif text-3xl"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <Link
              href={other.slug}
              onClick={() => setOpen(false)}
              className={`mt-auto pb-6 text-[11px] uppercase tracking-[0.24em] ${t.muted}`}
            >
              Перейти в {other.name} →
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
