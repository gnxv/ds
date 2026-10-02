"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { services, site, type NavLink, type ServiceKey } from "@/lib/site";

type Tone = "sun" | "sculpt";

const tones = {
  sun: {
    bg: "bg-[#160e09]/94",
    line: "border-[#e0b06a]/25",
    accent: "text-[#e0b06a]",
    muted: "text-[#f4e6c8]/62",
    panel: "bg-[#160e09]",
    chip: "border-[#e0b06a]/35",
    ink: "text-[#f4e6c8]",
  },
  sculpt: {
    bg: "bg-[#16120e]/94",
    line: "border-[#c4a078]/20",
    accent: "text-[#c4a078]",
    muted: "text-[#efe4d4]/58",
    panel: "bg-[#16120e]",
    chip: "border-[#c4a078]/30",
    ink: "text-[#efe4d4]",
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

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b ${t.line} ${t.bg} backdrop-blur-md`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 md:h-16 md:px-6">
          <Link
            href="/"
            className="brand-mark font-serif shrink-0 text-2xl tracking-[0.2em] md:text-[1.75rem]"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>

          <nav className="mx-auto hidden items-center gap-6 text-[11px] uppercase tracking-[0.2em] lg:flex">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-glow ${tone === "sun" ? "nav-glow-sun" : "nav-glow-sculpt"} ${t.muted}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a
              href="#contact"
              className={`book-glow inline-flex items-center rounded-full border px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] ${
                tone === "sun"
                  ? "border-[#e0b06a] bg-[#e0b06a] text-[#160e09]"
                  : "border-[#c4a078] bg-[#c4a078] text-[#16120e]"
              }`}
            >
              Запись
            </a>
            <div
              className={`flex items-center rounded-full border px-1 py-1 text-[10px] uppercase tracking-[0.18em] ${t.chip}`}
            >
              <ServiceSwitch current={current} toneClass={t} />
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`book-glow ml-auto inline-flex items-center rounded-full border px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] lg:hidden ${
              tone === "sun"
                ? "border-[#e0b06a] bg-[#e0b06a] text-[#160e09]"
                : "border-[#c4a078] bg-[#c4a078] text-[#16120e]"
            }`}
          >
            Запись
          </a>

          <button
            type="button"
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${t.chip} ${t.ink}`}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Меню</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute inset-x-0 top-0 flex max-h-dvh flex-col overflow-y-auto pt-14 ${t.panel} ${t.ink}`}
          >
            <nav className="px-5 pt-6">
              <p className={`text-[11px] uppercase tracking-[0.28em] ${t.muted}`}>
                На странице
              </p>
              <div className="mt-3 flex flex-col">
                {sections.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-white/10 py-4 font-serif text-[2rem] leading-none nav-glow ${tone === "sun" ? "nav-glow-sun" : "nav-glow-sculpt"}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="px-5 py-8">
              <p className={`text-[11px] uppercase tracking-[0.28em] ${t.muted}`}>
                Кабинеты
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  href={services.rsleek.slug}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-5 nav-glow nav-glow-sculpt ${t.chip} ${
                    current === "rsleek" ? t.accent : ""
                  }`}
                >
                  <span className="block font-serif text-2xl">R-Sleek</span>
                </Link>
                <Link
                  href={services.solarium.slug}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-5 nav-glow nav-glow-sun ${t.chip} ${
                    current === "solarium" ? t.accent : ""
                  }`}
                >
                  <span className="block font-serif text-2xl">Солярий</span>
                </Link>
              </div>
              <a
                href={site.booking}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex rounded-full border px-4 py-3 text-[11px] uppercase tracking-[0.18em] ${t.chip} ${t.ink}`}
              >
                Онлайн-запись
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ServiceSwitch({
  current,
  toneClass,
}: {
  current: ServiceKey;
  toneClass: (typeof tones)[Tone];
}) {
  return (
    <>
      <Link
        href={services.rsleek.slug}
        className={`nav-glow nav-glow-sculpt rounded-full px-3 py-1.5 ${
          current === "rsleek" ? toneClass.accent : toneClass.muted
        }`}
      >
        R-Sleek
      </Link>
      <Link
        href={services.solarium.slug}
        className={`nav-glow nav-glow-sun rounded-full px-3 py-1.5 ${
          current === "solarium" ? toneClass.accent : toneClass.muted
        }`}
      >
        Солярий
      </Link>
    </>
  );
}
