"use client";

import Image from "next/image";
import { useSyncExternalStore, useCallback, useState } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function subscribeScroll(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot(): number {
  if (typeof window === "undefined") return 0;
  return window.scrollY;
}

function getScrollServerSnapshot(): number {
  return 0;
}

export function ShrineHero() {
  const [imageError, setImageError] = useState(false);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const scrollY = useSyncExternalStore(
    subscribeScroll,
    getScrollSnapshot,
    getScrollServerSnapshot
  );

  const scrollToPortfolio = useCallback(() => {
    const target = document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  // Subtle parallax scale: from 1.0 to 1.05 over 600px of scroll
  const scrollFraction = Math.min(1, Math.max(0, scrollY / 600));
  const heroScale = prefersReducedMotion ? 1 : 1 + scrollFraction * 0.05;
  const heroTranslate = prefersReducedMotion ? 0 : scrollFraction * 20;

  // Scroll indicator opacity: fades out over first 180px of scroll
  const indicatorOpacity = Math.max(0, 1 - scrollY / 180);

  return (
    <section
      id="hero"
      aria-label="Malevolent Shrine Hero"
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-background select-none"
    >
      {/* Background Shrine Image Container */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-transform ease-out duration-75"
        style={{
          transform: `scale(${heroScale}) translateY(${heroTranslate}px)`,
          willChange: prefersReducedMotion ? "auto" : "transform",
        }}
      >
        {!imageError ? (
          <Image
            src="/images/malevolent-shrine.png"
            alt="Malevolent Shrine Entrance Artwork"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Graceful fallback if image fails to load */
          <div className="w-full h-full bg-gradient-to-b from-background-elevated via-background to-background flex items-center justify-center">
            <div className="w-64 h-64 border border-border/40 rounded-full flex items-center justify-center">
              <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                Shrine Gateway
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Atmospheric Overlays & Edge Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, #101110 0%, transparent 8%, transparent 92%, #101110 100%),
            linear-gradient(to bottom, rgba(16, 17, 16, 0.7) 0%, transparent 18%, transparent 75%, rgba(16, 17, 16, 0.9) 92%, #101110 100%),
            radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(16, 17, 16, 0.35) 80%, #101110 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Top Title Overlay - positioned high in the lightning storm sky */}
      <div className="relative z-20 pt-6 sm:pt-10 md:pt-14 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-2 sm:mb-3 border border-border/60 bg-background/80 backdrop-blur-xs">
          <span
            className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px] animate-pulse"
            aria-hidden="true"
          />
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.25em] uppercase text-text-secondary">
            DOMAIN EXPANSION
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.16em] sm:tracking-[0.2em] text-text-primary uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          PRIYANSHU PANWAR
        </h1>

        {/* Supporting Text */}
        <p className="mt-1.5 sm:mt-2 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-text-secondary uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
          A developer portfolio
        </p>
      </div>

      {/* Center Spacer keeping the entire shrine gate, crests, and Sukuna visible */}
      <div className="flex-1 pointer-events-none" aria-hidden="true" />

      {/* Bottom Center Scroll-to-Enter Indicator */}
      <div
        className="relative z-20 pb-8 sm:pb-10 px-6 flex flex-col items-center transition-opacity duration-300"
        style={{
          opacity: indicatorOpacity,
          pointerEvents: indicatorOpacity > 0.1 ? "auto" : "none",
        }}
      >
        <button
          onClick={scrollToPortfolio}
          type="button"
          aria-label="Scroll to enter portfolio content"
          className="group flex flex-col items-center gap-2 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson cursor-pointer"
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-text-secondary group-hover:text-text-primary transition-colors uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            SCROLL TO ENTER
          </span>

          {/* Minimalist descending indicator */}
          <div className="w-4 h-7 border border-border/80 rounded-full flex justify-center p-0.5 bg-background/60 backdrop-blur-xs group-hover:border-accent-crimson transition-colors shadow-lg">
            <span
              className={`w-1 h-2 bg-accent-crimson rounded-full ${
                prefersReducedMotion ? "" : "animate-bounce"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Subtle bottom border line blending into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
