"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ShrineHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const crimsonOverlayRef = useRef<HTMLDivElement>(null);
  const blackoutOverlayRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !sceneRef.current || !imageWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Respect prefers-reduced-motion: provide static scene without pinning or zooms
      mm.add("(prefers-reduced-motion: reduce)", () => {
        // No pinning or zoom animations. Static hero scene.
      });

      // Desktop: min-width 768px with full cinematic sequence
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=180%",
            pin: sceneRef.current,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Stage A -> B: Fade out UI elements
        tl.to(
          indicatorRef.current,
          {
            opacity: 0,
            y: 16,
            duration: 1.2,
            ease: "power1.out",
          },
          0
        );

        tl.to(
          titleRef.current,
          {
            opacity: 0,
            y: -24,
            duration: 2.0,
            ease: "power1.inOut",
          },
          0.5
        );

        // Stage B: Approach gate — zoom in toward central gate opening (50% 46%)
        tl.to(
          imageWrapperRef.current,
          {
            scale: 2.3,
            yPercent: -3,
            duration: 6.5,
            ease: "power2.inOut",
          },
          0
        );

        // Stage C: Cross threshold — crimson atmospheric flare followed by shadow
        tl.to(
          crimsonOverlayRef.current,
          {
            opacity: 0.85,
            duration: 3.0,
            ease: "power1.in",
          },
          4.0
        );

        tl.to(
          blackoutOverlayRef.current,
          {
            opacity: 1,
            duration: 2.5,
            ease: "power2.inOut",
          },
          6.2
        );

        tl.to(
          imageWrapperRef.current,
          {
            opacity: 0.25,
            scale: 3.2,
            duration: 2.5,
            ease: "power2.in",
          },
          6.5
        );
      });

      // Mobile: max-width 767px with condensed, lighter sequence
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            pin: sceneRef.current,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        tl.to(
          indicatorRef.current,
          {
            opacity: 0,
            y: 10,
            duration: 1.0,
            ease: "power1.out",
          },
          0
        );

        tl.to(
          titleRef.current,
          {
            opacity: 0,
            y: -16,
            duration: 1.8,
            ease: "power1.inOut",
          },
          0.4
        );

        tl.to(
          imageWrapperRef.current,
          {
            scale: 1.8,
            yPercent: -2,
            duration: 5.5,
            ease: "power2.inOut",
          },
          0
        );

        tl.to(
          crimsonOverlayRef.current,
          {
            opacity: 0.8,
            duration: 2.5,
            ease: "power1.in",
          },
          3.5
        );

        tl.to(
          blackoutOverlayRef.current,
          {
            opacity: 1,
            duration: 2.2,
            ease: "power2.inOut",
          },
          4.8
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToPortfolio = useCallback(() => {
    const target = document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <section
        ref={sceneRef}
        id="hero"
        aria-label="Malevolent Shrine Cinematic Hero"
        className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-background select-none"
      >
        {/* Background Shrine Image Container with transformOrigin on gate center */}
        <div
          ref={imageWrapperRef}
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden will-change-transform"
          style={{ transformOrigin: "50% 46%" }}
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
            <div className="w-full h-full bg-gradient-to-b from-background-elevated via-background to-background flex items-center justify-center">
              <div className="w-64 h-64 border border-border/40 rounded-full flex items-center justify-center">
                <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                  Shrine Gateway
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Atmospheric Edge Vignette Layer */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              linear-gradient(to right, #101110 0%, transparent 8%, transparent 92%, #101110 100%),
              linear-gradient(to bottom, rgba(16, 17, 16, 0.7) 0%, transparent 18%, transparent 75%, rgba(16, 17, 16, 0.9) 92%, #101110 100%),
              radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(16, 17, 16, 0.35) 80%, #101110 100%)
            `,
          }}
          aria-hidden="true"
        />

        {/* Stage C: Crimson Threshold Glow Overlay */}
        <div
          ref={crimsonOverlayRef}
          className="absolute inset-0 pointer-events-none z-12 opacity-0"
          style={{
            background: `
              radial-gradient(circle at 50% 46%, rgba(185, 28, 44, 0.5) 0%, rgba(59, 16, 22, 0.75) 45%, rgba(16, 17, 16, 0.95) 100%)
            `,
          }}
          aria-hidden="true"
        />

        {/* Stage C/D: Deep Blackout Threshold Overlay */}
        <div
          ref={blackoutOverlayRef}
          className="absolute inset-0 pointer-events-none z-14 opacity-0 bg-background"
          aria-hidden="true"
        />

        {/* Top Title Overlay — Stage A/B */}
        <div
          ref={titleRef}
          className="relative z-20 pt-6 sm:pt-10 md:pt-14 px-6 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
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

        {/* Center Spacer keeping the gate visually open */}
        <div className="flex-1 pointer-events-none" aria-hidden="true" />

        {/* Bottom Center Scroll-to-Enter Indicator */}
        <div
          ref={indicatorRef}
          className="relative z-20 pb-8 sm:pb-10 px-6 flex flex-col items-center"
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
    </div>
  );
}
