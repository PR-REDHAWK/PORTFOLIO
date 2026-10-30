import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  const { education, interests } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 w-full px-6 py-28 sm:py-36 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Ambient Crimson Backlight */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent-crimson/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background-elevated">
              <span
                className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                01 // Profile
              </span>
            </div>
            <div className="h-px flex-1 bg-border/40 max-w-xs" />
          </div>
        </Reveal>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Identifier & Natural Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delayMs={100}>
              <div className="space-y-4">
                <h2
                  id="about-heading"
                  className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-primary leading-[1.1]"
                >
                  Engineering software with curiosity, precision, and intent.
                </h2>
                <div className="w-12 h-0.5 bg-accent-crimson" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="space-y-5 text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                <p>
                  I&apos;m Priyanshu Panwar, a computer science student and software developer based in India. I spend my time designing web applications, examining systems architectures, and solving challenging algorithmic puzzles.
                </p>
                <p>
                  For me, programming is both an intellectual discipline and a creative craft. I enjoy understanding how computing primitives operate under the hood, writing clear and resilient code, and turning abstract ideas into practical, useful software.
                </p>
                <p>
                  Whether exploring modern front-end design, experimenting with AI-augmented tools, or sharpening problem-solving patterns through competitive programming, I approach engineering with steady curiosity and a focus on lasting fundamentals.
                </p>
              </div>
            </Reveal>

            {/* Architectural Sub-accent Quote / Perspective */}
            <Reveal delayMs={250}>
              <div className="p-5 border-l-2 border-accent-crimson bg-background-elevated/50 border-r border-y border-border/30">
                <p className="font-mono text-xs text-text-primary/90 leading-relaxed tracking-wide">
                  &ldquo;Master the fundamentals, write maintainable software, and build things that actually work.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Structured Information Panels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Academic Information Panel */}
            <Reveal delayMs={150}>
              <div className="border border-border bg-background-elevated p-6 sm:p-7 relative">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                    Academic Foundation
                  </span>
                  <span className="font-mono text-xs text-text-secondary">
                    Class of {education.graduationYear}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-text-primary">
                      {education.degree} in {education.field}
                    </h3>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {education.institution}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-text-secondary/70">
                    {education.location}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Core Interests & Disciplines Panel */}
            <Reveal delayMs={250}>
              <div className="border border-border bg-background-elevated p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/60">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                    Current Focus & Interests
                  </span>
                  <span className="font-mono text-xs text-text-secondary">
                    {interests.length} areas
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {interests.map((interest, idx) => (
                    <li
                      key={interest}
                      className="flex items-center gap-3 text-sm text-text-primary/90 font-mono tracking-wide"
                    >
                      <span className="font-mono text-xs text-accent-crimson/70">
                        0{idx + 1}
                      </span>
                      <span className="h-px w-2.5 bg-border/80" />
                      <span className="font-sans text-sm font-normal text-text-secondary hover:text-text-primary transition-colors">
                        {interest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Quick Specs / Vitals Matrix */}
            <Reveal delayMs={300}>
              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                <div className="p-4 bg-background">
                  <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="font-mono text-xs text-text-primary">
                    {siteConfig.location}
                  </p>
                </div>
                <div className="p-4 bg-background">
                  <p className="font-mono text-[10px] text-text-secondary uppercase tracking-widest mb-1">
                    Status
                  </p>
                  <p className="font-mono text-xs text-text-primary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent-crimson inline-block animate-pulse" />
                    Undergrad Student
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
