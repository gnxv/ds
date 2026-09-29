"use client";

import { useState } from "react";

const slides = [
  "/media/r-sleek/results/01.jpg",
  "/media/r-sleek/results/02.jpg",
  "/media/r-sleek/results/03.jpg",
  "/media/r-sleek/results/04.jpg",
  "/media/r-sleek/results/05.jpg",
  "/media/r-sleek/results/06.jpg",
  "/media/r-sleek/results/07.jpg",
  "/media/r-sleek/results/08.jpg",
  "/media/r-sleek/results/09.jpg",
];

export function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const last = slides.length - 1;

  const go = (dir: -1 | 1) => {
    setIndex((current) => {
      const next = current + dir;
      if (next < 0) return last;
      if (next > last) return 0;
      return next;
    });
  };

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black">
      <div className="relative">
        <img
          src={slides[index]}
          alt={`Результат ${index + 1}: слева до, справа после`}
          className="aspect-[8/5] w-full object-cover"
        />
        <p className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#ece6da]">
          До
        </p>
        <p className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#ece6da]">
          После
        </p>
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Предыдущее фото"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-[#ece6da]"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Следующее фото"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-[#ece6da]"
        >
          ›
        </button>
      </div>
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Фото ${i + 1}`}
              className={[
                "h-1.5 w-5 rounded-full transition",
                i === index ? "bg-[#ece6da]" : "bg-white/20",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
