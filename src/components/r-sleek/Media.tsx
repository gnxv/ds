"use client";

import { useEffect, useRef } from "react";

function useLoopingVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      el.pause();
      return;
    }

    const play = () => {
      el.play().catch(() => {
        /* autoplay can be blocked until a gesture */
      });
    };

    play();

    const onVisibility = () => {
      if (document.hidden) el.pause();
      else play();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return ref;
}

export function BackgroundVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const ref = useLoopingVideo();

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
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
  const ref = useLoopingVideo();

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
