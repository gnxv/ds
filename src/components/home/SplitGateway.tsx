"use client";

import Link from "next/link";
import { useState } from "react";
import { services, site } from "@/lib/site";

type Side = "solarium" | "rsleek" | null;

export function SplitGateway() {
  const [hover, setHover] = useState<Side>(null);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-6 py-6 md:px-10">
        <div>
          <p className="font-serif text-2xl tracking-[0.28em]">{site.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-white/55">
            {site.tagline}
          </p>
        </div>
        <p className="hidden max-w-[14rem] text-right text-[11px] uppercase leading-5 tracking-[0.22em] text-white/50 md:block">
          {site.location}
        </p>
      </header>

      <div className="flex min-h-dvh flex-col md:flex-row">
        <GatewayPanel
          href={services.solarium.slug}
          kicker={services.solarium.kicker}
          title={services.solarium.name}
          line="Ровный тон за один визит."
          tone="sun"
          expanded={hover === "solarium"}
          dimmed={hover === "rsleek"}
          onEnter={() => setHover("solarium")}
          onLeave={() => setHover(null)}
        />
        <GatewayPanel
          href={services.rsleek.slug}
          kicker={services.rsleek.kicker}
          title={services.rsleek.name}
          line="Объёмы, которые мешают одежде."
          tone="sculpt"
          expanded={hover === "rsleek"}
          dimmed={hover === "solarium"}
          onEnter={() => setHover("rsleek")}
          onLeave={() => setHover(null)}
        />
      </div>
    </main>
  );
}

function GatewayPanel({
  href,
  kicker,
  title,
  line,
  tone,
  expanded,
  dimmed,
  onEnter,
  onLeave,
}: {
  href: string;
  kicker: string;
  title: string;
  line: string;
  tone: "sun" | "sculpt";
  expanded: boolean;
  dimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const isSun = tone === "sun";

  return (
    <Link
      href={href}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={[
        "group grain relative flex min-h-[50dvh] flex-1 flex-col justify-end overflow-hidden px-8 py-16 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] md:min-h-dvh md:px-14 md:py-20",
        expanded ? "md:flex-[1.28]" : dimmed ? "md:flex-[0.86]" : "md:flex-1",
        isSun
          ? "bg-[radial-gradient(120%_90%_at_20%_10%,#4a2a14_0%,#160e09_55%,#0b0705_100%)]"
          : "bg-[radial-gradient(120%_90%_at_80%_10%,#243028_0%,#0b0e12_55%,#07080a_100%)]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 transition-opacity duration-700",
          dimmed ? "opacity-40" : "opacity-100",
        ].join(" ")}
      />

      <div
        className={[
          "absolute -right-16 top-24 h-72 w-72 rounded-full blur-3xl transition-all duration-700 md:top-32",
          isSun ? "bg-[#e0b06a]/18" : "bg-[#8fa08c]/16",
          expanded ? "scale-125 opacity-100" : "opacity-70",
        ].join(" ")}
      />

      <div className="relative z-10 max-w-md">
        <p
          className={[
            "text-[11px] uppercase tracking-[0.38em]",
            isSun ? "text-[#e0b06a]" : "text-[#c9d0c6]",
          ].join(" ")}
        >
          {kicker}
        </p>
        <h2 className="font-serif mt-4 text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xs text-sm leading-6 text-white/70 md:text-base">
          {line}
        </p>
        <span
          className={[
            "mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.34em] transition-transform duration-500 group-hover:translate-x-1",
            isSun ? "text-[#f4e6c8]" : "text-[#ece6da]",
          ].join(" ")}
        >
          Выбрать
          <span aria-hidden className="block h-px w-10 bg-current" />
        </span>
      </div>
    </Link>
  );
}
