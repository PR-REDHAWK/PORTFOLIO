import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShrineHero } from "@/components/intro/ShrineHero";
import { ScrollProgress } from "@/components/intro/ScrollProgress";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <ScrollProgress />
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Shrine Hero Opening Scene */}
        <ShrineHero />

        {/* Foundation Portfolio Section */}
        <section
          id="portfolio"
          className="relative z-10 flex-1 flex flex-col justify-center px-6 py-24 sm:py-32 bg-background border-t border-border/40 scroll-mt-16"
        >
          {/* Subtle Ambient Crimson Glow at top of section */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-accent-crimson/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-5xl mx-auto w-full relative z-10">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 mb-8 border border-border bg-background-elevated">
              <span
                className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                {siteConfig.eyebrow}
              </span>
            </div>

            {/* Wordmark and Headline */}
            <div className="space-y-6">
              <h2 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-text-primary leading-[1.05]">
                {siteConfig.name}
              </h2>

              <p className="text-xl sm:text-2xl md:text-3xl font-light text-text-secondary max-w-2xl leading-relaxed">
                Software developer engineering resilient modern systems and cinematic web experiences.
              </p>
            </div>

            {/* Subtle Crimson Accent Divider */}
            <div className="relative my-12 h-px w-full max-w-md bg-border">
              <div className="absolute left-0 top-0 h-px w-16 bg-accent-crimson" />
            </div>

            {/* Scaffolding Notice & Narrative */}
            <div className="max-w-2xl space-y-4">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {siteConfig.description}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="font-mono text-xs tracking-wider text-accent-crimson uppercase font-medium">
                  Phase 02
                </span>
                <span className="text-border">/</span>
                <span className="font-mono text-xs tracking-wider text-text-secondary uppercase">
                  Shrine Hero & Scroll-to-Enter Integrated
                </span>
              </div>
            </div>

            {/* Technical Foundation Block */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border max-w-2xl border border-border">
              <div className="p-4 bg-background-elevated">
                <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">
                  Domain Status
                </p>
                <p className="font-mono text-xs text-text-primary tracking-wide">
                  Gate Unlocked · In Construction
                </p>
              </div>
              <div className="p-4 bg-background-elevated">
                <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">
                  Core Stack
                </p>
                <p className="font-mono text-xs text-text-primary tracking-wide">
                  Next.js · TypeScript
                </p>
              </div>
              <div className="p-4 bg-background-elevated">
                <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">
                  Aesthetic Direction
                </p>
                <p className="font-mono text-xs text-text-primary tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                  Malevolent Shrine
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
