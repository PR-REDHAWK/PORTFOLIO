import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShrineHero } from "@/components/intro/ShrineHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Static Shrine Hero (Section ID: hero) */}
        <ShrineHero />

        {/* Section 01: About (Section ID: about) */}
        <AboutSection />

        {/* Section 02: Featured Projects (Section ID: projects) */}
        <ProjectsSection />

        {/* Section 03: Achievements & Competitive Programming (Section ID: achievements) */}
        <AchievementsSection />

        {/* Section 04 Foundation & Contact Placeholder (Section ID: contact) */}
        <section
          id="contact"
          className="relative z-10 flex-1 flex flex-col justify-center px-6 py-24 sm:py-32 bg-background border-t border-border/40 scroll-mt-20"
        >
          {/* Subtle Ambient Crimson Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-accent-crimson/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto w-full relative z-10">
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
                  Phase 06
                </span>
                <span className="text-border">/</span>
                <span className="font-mono text-xs tracking-wider text-text-secondary uppercase">
                  Achievements & Problem Solving Integrated
                </span>
              </div>
            </div>

            {/* Prepared Future Section Anchors / Shells */}
            <div className="mt-16 pt-12 border-t border-border/30">
              <p className="font-mono text-[11px] text-text-secondary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Upcoming Modules
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 border border-border/60 bg-background-elevated/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-accent-crimson uppercase tracking-widest">
                      Section // Next
                    </span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 border border-border/60 text-text-secondary/70">
                      In Queue
                    </span>
                  </div>
                  <h3 className="font-mono text-sm text-text-primary uppercase tracking-wide">
                    Skills & Technical Stack
                  </h3>
                  <p className="text-xs text-text-secondary/70 mt-1">
                    Language proficiencies, frameworks, tools, and systems capabilities.
                  </p>
                </div>

                <div className="p-5 border border-border/60 bg-background-elevated/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-accent-crimson uppercase tracking-widest">
                      Section // Contact
                    </span>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 border border-border/60 text-text-secondary/70">
                      In Queue
                    </span>
                  </div>
                  <h3 className="font-mono text-sm text-text-primary uppercase tracking-wide">
                    Communications & Inquiries
                  </h3>
                  <p className="text-xs text-text-secondary/70 mt-1">
                    Direct communications channels, verified socials, and inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
