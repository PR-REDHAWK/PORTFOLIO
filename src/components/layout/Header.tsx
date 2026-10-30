"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isAvailable: boolean
  ) => {
    if (!isAvailable) {
      e.preventDefault();
      return;
    }

    setMobileMenuOpen(false);

    // If on homepage and link has hash, smooth scroll directly
    if (pathname === "/" && href.includes("#")) {
      const hash = href.split("#")[1];
      const targetEl = document.getElementById(hash);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen || pathname !== "/"
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, "/#hero", true)}
          className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-xs py-1"
        >
          <span
            className="w-2 h-2 bg-accent-crimson rounded-[1px] transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
          <span className="font-mono text-xs tracking-[0.2em] text-text-primary uppercase font-semibold">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          <ul className="flex items-center gap-7">
            {siteConfig.navItems.map((item) => (
              <li key={item.label}>
                {item.isAvailable ? (
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className="font-mono text-xs tracking-[0.16em] uppercase text-text-secondary hover:text-text-primary transition-colors py-1 relative group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-xs"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-crimson transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <span
                    className="font-mono text-xs tracking-[0.16em] uppercase text-text-secondary/40 cursor-not-allowed flex items-center gap-1.5 py-1"
                    title={`${item.label} section in development`}
                  >
                    {item.label}
                    {item.tag && (
                      <span className="text-[9px] px-1 py-0.2 border border-border/40 text-text-secondary/50 rounded-[1px]">
                        {item.tag}
                      </span>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Resume Action */}
          <div className="pl-4 border-l border-border/60">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="font-mono text-xs tracking-[0.18em] uppercase px-3.5 py-1.5 border border-border/60 bg-background-elevated/40 text-text-secondary/40 cursor-not-allowed flex items-center gap-2 rounded-[1px]"
              title="Resume PDF will be available soon"
            >
              <span>Resume</span>
              <span className="text-[9px] px-1 py-0.2 bg-background-elevated border border-border/40 text-text-secondary/40 rounded-[1px]">
                Soon
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 -mr-2 text-text-secondary hover:text-text-primary focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-xs"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] bg-background/98 backdrop-blur-xl border-t border-border z-40 flex flex-col justify-between px-6 py-8 md:hidden animate-in fade-in duration-200"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent-crimson mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
              Navigation
            </div>
            <ul className="flex flex-col space-y-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.label} className="border-b border-border/30 pb-3">
                  {item.isAvailable ? (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, true)}
                      className="font-mono text-base tracking-[0.16em] uppercase text-text-primary hover:text-accent-crimson transition-colors flex items-center justify-between py-1"
                    >
                      <span>{item.label}</span>
                      <span className="text-accent-crimson font-mono text-xs">→</span>
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between py-1 text-text-secondary/40 font-mono text-base tracking-[0.16em] uppercase cursor-not-allowed">
                      <span>{item.label}</span>
                      {item.tag && (
                        <span className="text-[10px] px-1.5 py-0.5 border border-border/40 text-text-secondary/50 rounded-[1px]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-border/40 space-y-4">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="w-full font-mono text-xs tracking-[0.18em] uppercase py-3 border border-border/60 bg-background-elevated/40 text-text-secondary/40 cursor-not-allowed flex items-center justify-center gap-2 rounded-[1px]"
            >
              <span>Resume</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-background-elevated border border-border/40 text-text-secondary/40 rounded-[1px]">
                Coming Soon
              </span>
            </button>

            <div className="flex items-center justify-between text-[11px] font-mono text-text-secondary/60 pt-2">
              <span>{siteConfig.role}</span>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
