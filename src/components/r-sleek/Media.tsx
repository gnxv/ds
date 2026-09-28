"use client";

export function BackgroundVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function InlineVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
