"use client";

import { useSyncExternalStore } from "react";

function subscribeScrollProgress(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback, { passive: true });
  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

function getScrollProgressSnapshot(): number {
  if (typeof window === "undefined") return 0;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
}

function getScrollProgressServerSnapshot(): number {
  return 0;
}

export function ScrollProgress() {
  const progress = useSyncExternalStore(
    subscribeScrollProgress,
    getScrollProgressSnapshot,
    getScrollProgressServerSnapshot
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent-crimson transition-[width] duration-75 ease-out shadow-[0_0_8px_rgba(185,28,44,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
