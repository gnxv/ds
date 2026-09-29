const photos = [
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
  return (
    <div>
      <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#8fa08c]">
        Слева до · справа после
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, i) => (
          <figure
            key={src}
            className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black"
          >
            <img
              src={src}
              alt={`Результат ${i + 1}: слева до, справа после`}
              className="aspect-[8/5] w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
