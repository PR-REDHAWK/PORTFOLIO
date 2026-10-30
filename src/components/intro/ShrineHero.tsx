"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export function ShrineHero() {
  const [imageError, setImageError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight || 800;
      // Progress from 0 to 1 as hero scrolls out
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPortfolio = useCallback(() => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Subtle transformations calculated from scrollProgress
  // 1. Text fades out and lifts up slightly
  const textOpacity = Math.max(0, 1 - scrollProgress * 1.6);
  const textTranslateY = scrollProgress * -40;

  // 2. Background image has subtle parallax depth and darkens gracefully into the next section
  const imageScale = 1 + scrollProgress * 0.08;
  const imageTranslateY = scrollProgress * 25; // Parallax rate
  const darkOverlayOpacity = 0.3 + scrollProgress * 0.65;

  // 3. Scroll indicator fades out rapidly on scroll initiation
  const indicatorOpacity = Math.max(0, 1 - scrollProgress * 3.5);

  return (
    <section
      id="hero"
      aria-label="Malevolent Shrine Hero"
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-background select-none"
    >
      {/* Background Shrine Image Container with subtle parallax */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden will-change-transform"
        style={{
          transform: `scale(${imageScale}) translateY(${imageTranslateY}px)`,
          transition: "transform 75ms ease-out",
        }}
      >
        {!imageError ? (
          <Image
            src="/images/malevolent-shrine.png"
            alt="Malevolent Shrine Atmosphere"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-background-elevated via-background to-background flex items-center justify-center">
            <div className="w-64 h-64 border border-border/40 rounded-full flex items-center justify-center">
              <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                Shrine Gateway
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Atmospheric Vignette & Vignette Gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(to right, rgba(16, 17, 16, 0.85) 0%, transparent 15%, transparent 85%, rgba(16, 17, 16, 0.85) 100%),
            linear-gradient(to bottom, rgba(16, 17, 16, 0.7) 0%, rgba(16, 17, 16, 0.25) 25%, rgba(16, 17, 16, 0.4) 60%, rgba(16, 17, 16, 0.95) 90%, #101110 100%),
            radial-gradient(ellipse at 50% 50%, rgba(16, 17, 16, 0.2) 0%, rgba(16, 17, 16, 0.5) 75%, rgba(16, 17, 16, 0.95) 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Seamless Transition Overlay: fades in deeper crimson-black tone towards the bottom into About */}
      <div
        className="absolute inset-0 pointer-events-none z-12 bg-background transition-opacity duration-100 ease-out"
        style={{ opacity: darkOverlayOpacity }}
        aria-hidden="true"
      />

      {/* Ambient Crimson Center Core Flare */}
      <div
        className="absolute inset-0 pointer-events-none z-11 transition-opacity duration-200"
        style={{
          opacity: Math.max(0.2, 1 - scrollProgress * 0.8),
          background: "radial-gradient(circle at 50% 48%, rgba(185, 28, 44, 0.15) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Typography Overlay with Responsive Scroll Parallax */}
      <div
        className="relative z-20 pt-16 sm:pt-20 md:pt-24 px-6 text-center max-w-4xl mx-auto flex flex-col items-center will-change-transform"
        style={{
          opacity: textOpacity,
          transform: `translateY(${textTranslateY}px)`,
          transition: "opacity 75ms ease-out, transform 75ms ease-out",
        }}
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 sm:mb-4 border border-border/60 bg-background/85 backdrop-blur-xs">
          <span
            className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px] animate-pulse"
            aria-hidden="true"
          />
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.25em] uppercase text-text-secondary">
            DOMAIN EXPANSION
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.16em] sm:tracking-[0.2em] text-text-primary uppercase drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
          PRIYANSHU PANWAR
        </h1>

        {/* Supporting Text */}
        <p className="mt-2 sm:mt-3 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-text-secondary uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
          A developer portfolio
        </p>
      </div>

      {/* Center Spacer to balance layout */}
      <div className="flex-1 pointer-events-none" aria-hidden="true" />

      {/* Scroll-Down Indicator with quick fade on scroll */}
      <div
        className="relative z-20 pb-8 sm:pb-12 px-6 flex flex-col items-center transition-opacity duration-150"
        style={{ opacity: indicatorOpacity }}
      >
        <button
          onClick={scrollToPortfolio}
          type="button"
          aria-label="Scroll to portfolio content"
          className="group flex flex-col items-center gap-2.5 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson cursor-pointer"
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-text-secondary group-hover:text-text-primary transition-colors uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            SCROLL DOWN
          </span>

          {/* Minimalist descending indicator */}
          <div className="w-5 h-8 border border-border/80 rounded-full flex justify-center p-1 bg-background/60 backdrop-blur-xs group-hover:border-accent-crimson transition-colors shadow-lg">
            <span className="w-1 h-2 bg-accent-crimson rounded-full animate-bounce" />
          </div>
        </button>
      </div>

      {/* Subtle bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
