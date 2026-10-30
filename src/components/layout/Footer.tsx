"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = siteConfig.year;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-background mt-auto relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 space-y-10">
        {/* Top Tier: Brand, Navigation, Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 bg-accent-crimson rounded-[1px] inline-block"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.2em] text-text-primary uppercase font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-text-secondary/80 font-light leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation Shortcuts (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-crimson block mb-2">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-text-primary transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Social Links & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-3 sm:text-right">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-crimson block mb-2 sm:text-right">
              Channels
            </span>
            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs">
              {siteConfig.contact.socials
                .filter((s) => s.isAvailable && s.url)
                .map((social) => (
                  <a
                    key={social.platform}
                    href={social.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{social.label}</span>
                    <span className="text-accent-crimson transition-transform group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                ))}

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                className="text-accent-crimson hover:text-white transition-colors pt-2 flex items-center sm:justify-end gap-1 cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
              >
                <span>Back to Top</span>
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Phased Status, Architectural Accent */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-text-secondary/70">
          <p className="tracking-widest">
            © {currentYear} {siteConfig.name} · All rights reserved.
          </p>

          <div className="flex items-center gap-2 tracking-widest text-[11px]">
            <span
              className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px] animate-pulse"
              aria-hidden="true"
            />
            <span>ENGINEERED ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
