"use client";

import Link from "next/link";
import { useState } from "react";
import { BackgroundVideo } from "@/components/r-sleek/Media";
import { services, site } from "@/lib/site";

type Side = "solarium" | "rsleek" | null;

export function SplitGateway() {
  const [hover, setHover] = useState<Side>(null);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-10">
        <p className="font-serif text-2xl tracking-[0.28em]">{site.name}</p>
      </header>

      <div className="flex min-h-dvh flex-col md:flex-row">
        <GatewayPanel
          href={services.rsleek.slug}
          kicker="аппаратная коррекция фигуры"
          title={services.rsleek.name}
          line="Минус 800 г уже после первой процедуры."
          tone="sculpt"
          video="/media/r-sleek/manipula.mp4"
          poster="/media/r-sleek/manipula-poster.jpg"
          expanded={hover === "rsleek"}
          dimmed={hover === "solarium"}
          onEnter={() => setHover("rsleek")}
          onLeave={() => setHover(null)}
        />
        <GatewayPanel
          href={services.solarium.slug}
          kicker={services.solarium.kicker}
          title={services.solarium.name}
          line="Ровный тон в удобное время."
          tone="sun"
          video="/media/solarium/home.mp4"
          poster="/media/solarium/home.jpg"
          expanded={hover === "solarium"}
          dimmed={hover === "rsleek"}
          onEnter={() => setHover("solarium")}
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
  video,
  poster,
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
  video: string;
  poster: string;
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
        isSun ? "bg-[#160e09]" : "bg-[#16120e]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 transition-opacity duration-700",
          dimmed ? "opacity-35" : "opacity-100",
        ].join(" ")}
      >
        <BackgroundVideo src={video} poster={poster} />
        <div
          className={
            isSun
              ? "absolute inset-0 bg-gradient-to-r from-black/70 via-[#160e09]/45 to-black/20"
              : "absolute inset-0 bg-gradient-to-r from-black/75 via-[#16120e]/50 to-black/20"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/25" />
      </div>

      <div className="relative z-10 max-w-md">
        <p
          className={[
            "text-[11px] uppercase tracking-[0.38em]",
            isSun ? "text-[#e0b06a]" : "text-[#d4c4ae]",
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
            "mt-9 inline-flex items-center rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition-colors duration-500",
            isSun
              ? "border-[#e0b06a]/55 text-[#f4e6c8] group-hover:border-[#e0b06a] group-hover:bg-[#e0b06a]/12"
              : "border-[#c4a078]/45 text-[#efe4d4] group-hover:border-[#c4a078] group-hover:bg-[#c4a078]/12",
          ].join(" ")}
        >
          Выбрать
        </span>
      </div>
    </Link>
  );
}
