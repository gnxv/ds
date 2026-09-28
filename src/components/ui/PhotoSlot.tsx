export function PhotoSlot({
  label,
  ratio = "photo",
  src,
  alt,
}: {
  label: string;
  ratio?: "photo" | "wide" | "portrait";
  src?: string;
  alt?: string;
}) {
  const height =
    ratio === "wide"
      ? "min-h-56 md:min-h-72"
      : ratio === "portrait"
        ? "min-h-80 md:min-h-[28rem]"
        : "min-h-64 md:min-h-80";

  if (src) {
    return (
      <figure className="overflow-hidden rounded-[1.6rem] border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          className={`w-full object-cover ${height}`}
        />
      </figure>
    );
  }

  return (
    <div
      className={`flex ${height} items-end rounded-[1.6rem] border border-dashed border-white/20 bg-white/[0.03] p-5`}
    >
      <p className="max-w-xs text-[11px] uppercase leading-5 tracking-[0.18em] text-white/40">
        Фото · {label}
      </p>
    </div>
  );
}
