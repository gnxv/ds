"use client";

import { InlineVideo } from "@/components/r-sleek/Media";
import { useEffect, useRef } from "react";

type Item =
  | { src: string; alt: string; type: "video"; poster: string }
  | { src: string; alt: string };

export function ClientStrip({ items }: { items: Item[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let auto = true;
    let frame = 0;

    const tick = () => {
      if (auto) {
        const loopAt = el.scrollWidth / 2;
        el.scrollLeft += 0.45;
        if (el.scrollLeft >= loopAt) el.scrollLeft -= loopAt;
      }
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      auto = false;
    };

    frame = requestAnimationFrame(tick);
    el.addEventListener("pointerdown", stop);
    el.addEventListener("wheel", stop, { passive: true });
    el.addEventListener("touchstart", stop, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerdown", stop);
      el.removeEventListener("wheel", stop);
      el.removeEventListener("touchstart", stop);
    };
  }, []);

  const strip = [...items, ...items];

  return (
    <div
      ref={scroller}
      className="-mx-5 mt-10 overflow-x-auto px-5 pb-2 md:-mx-6 md:px-6"
    >
      <div className="flex w-max gap-3">
        {strip.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="w-[15rem] shrink-0 overflow-hidden rounded-[1.4rem] border border-[#e0b06a]/20 bg-black sm:w-[18rem]"
          >
            {"type" in item && item.type === "video" ? (
              <div className="aspect-[3/4]">
                <InlineVideo src={item.src} poster={item.poster} />
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[3/4] w-full object-cover"
              />
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
