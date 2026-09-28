export function PhotoSlot({
  label,
  ratio = "photo",
}: {
  label: string;
  ratio?: "photo" | "wide" | "portrait";
}) {
  const height =
    ratio === "wide" ? "min-h-56 md:min-h-72" : ratio === "portrait" ? "min-h-80 md:min-h-[28rem]" : "min-h-64 md:min-h-80";

  return (
    <div
      className={`flex ${height} items-end rounded-[1.6rem] border border-dashed border-white/20 bg-white/3 p-5`}
    >
      <p className="max-w-xs text-[11px] uppercase leading-5 tracking-[0.18em] text-white/40">
        Фото · {label}
      </p>
    </div>
  );
}
