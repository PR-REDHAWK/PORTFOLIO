import Link from "next/link";
import { achievementsData } from "@/data/achievements";
import { Reveal } from "@/components/ui/Reveal";

export function AchievementsSection() {
  const { competitiveProgramming, hackathons } = achievementsData;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative z-10 w-full px-6 py-28 sm:py-36 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Ambient Crimson Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-crimson/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-20 sm:space-y-24">
        {/* Section Header Eyebrow */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background-elevated">
                <span
                  className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                  03 // Problem Solving & Recognitions
                </span>
              </div>
              <div className="h-px flex-1 bg-border/40 max-w-xs" />
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="space-y-4 max-w-3xl">
              <h2
                id="achievements-heading"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-primary leading-[1.1]"
              >
                Algorithmic milestones, competitive contests, and hackathon records.
              </h2>
              <div className="w-12 h-0.5 bg-accent-crimson" aria-hidden="true" />
              <p className="font-mono text-xs sm:text-sm text-text-secondary tracking-wide uppercase">
                Demonstrated problem solving across competitive platforms and national hackathons
              </p>
            </div>
          </Reveal>
        </div>

        {/* 1. Competitive Programming Platforms */}
        <div className="space-y-8">
          <Reveal delayMs={100}>
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Competitive Programming Platforms
              </h3>
              <span className="font-mono text-[11px] text-text-secondary/60 uppercase">
                Historical Figures
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {competitiveProgramming.map((platform, idx) => (
              <Reveal key={platform.id} delayMs={150 + idx * 100}>
                <div className="group border border-border bg-background-elevated p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-border/90 relative h-full">
                  {/* Platform Header */}
                  <div>
                    <div className="flex items-start justify-between gap-4 pb-4 mb-6 border-b border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 bg-accent-crimson rotate-45 inline-block" />
                          <h4 className="font-sans font-bold text-2xl text-text-primary tracking-tight">
                            {platform.name}
                          </h4>
                        </div>
                        <p className="font-mono text-xs text-text-secondary/70">
                          {platform.tagline}
                        </p>
                      </div>

                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border/60 bg-background text-text-secondary/70">
                        {platform.statusLabel}
                      </span>
                    </div>

                    {/* Primary Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Problems Solved */}
                      <div className="p-4 bg-background border border-border/60">
                        <div className="font-sans font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
                          {platform.problemsSolved}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-accent-crimson mt-1">
                          Problems Solved
                        </div>
                        {platform.problemsSolvedContext && (
                          <p className="text-[11px] text-text-secondary/70 mt-1 leading-tight font-light">
                            {platform.problemsSolvedContext}
                          </p>
                        )}
                      </div>

                      {/* Peak Contest Rating / Division */}
                      {platform.peakRating && (
                        <div className="p-4 bg-background border border-border/60">
                          <div className="font-mono font-bold text-3xl sm:text-4xl text-accent-crimson tracking-tight">
                            {platform.peakRating.value}
                          </div>
                          <div className="font-mono text-[11px] uppercase tracking-wider text-text-primary mt-1">
                            {platform.peakRating.label}
                          </div>
                          {platform.peakRating.detail && (
                            <p className="text-[11px] text-text-secondary/70 mt-1 leading-tight font-light">
                              {platform.peakRating.detail}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Extra Highlights (e.g. Percentile or Total Badges) */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-mono">
                      {platform.rankingPercentile && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border border-border/50 text-text-primary">
                          <span className="text-accent-crimson">Rank:</span>
                          <span>{platform.rankingPercentile} Global Percentile</span>
                        </div>
                      )}

                      {platform.badgesCount && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border border-border/50 text-text-primary">
                          <span className="text-accent-crimson">{platform.badgesCount}</span>
                          <span>Earned Badges</span>
                        </div>
                      )}
                    </div>

                    {/* Verified Achievement Badges Breakdown */}
                    <div className="space-y-3 pt-4 border-t border-border/40">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-text-secondary flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-accent-crimson inline-block" />
                        Milestone & Streak Badges
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {platform.badges.map((badge, bIdx) => (
                          <div
                            key={`${badge.name}-${bIdx}`}
                            className="px-2.5 py-1 border border-border/60 bg-background/80 text-[11px] font-mono flex items-center gap-1.5"
                            title={badge.description}
                          >
                            <span className="w-1 h-1 bg-border rounded-full" />
                            <span className="text-text-primary font-medium">{badge.name}</span>
                            {badge.year && (
                              <span className="text-text-secondary/60 text-[10px]">
                                ({badge.year})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action / External Profile */}
                  <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between">
                    {platform.profileUrl ? (
                      <a
                        href={platform.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-wider text-text-primary hover:text-accent-crimson transition-colors flex items-center gap-1.5 group/link"
                      >
                        <span>Visit {platform.name} Profile</span>
                        <span className="text-accent-crimson transition-transform duration-200 group-hover/link:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] text-text-secondary/50 uppercase tracking-wider">
                        Profile link on request
                      </span>
                    )}

                    <span className="font-mono text-[10px] text-text-secondary/40 uppercase">
                      Verified
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. Hackathons and Developer Competitions */}
        <div className="space-y-8">
          <Reveal delayMs={100}>
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Hackathons & Developer Competitions
              </h3>
              <span className="font-mono text-[11px] text-text-secondary/60 uppercase">
                Competitive Track Record
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hackathons.map((event, idx) => (
              <Reveal key={event.id} delayMs={150 + idx * 80}>
                <div className="border border-border bg-background-elevated p-6 flex flex-col justify-between space-y-4 hover:border-border/90 transition-all duration-300 h-full">
                  <div className="space-y-3">
                    {/* Top status bar */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-accent-crimson/40 bg-accent-crimson/10 text-accent-crimson font-medium">
                        {event.recognition}
                      </span>
                      <span className="font-mono text-xs text-text-secondary/70">
                        {event.year}
                      </span>
                    </div>

                    {/* Title & Organizer */}
                    <div>
                      <h4 className="font-sans font-bold text-xl text-text-primary tracking-tight">
                        {event.title}
                      </h4>
                      {event.organizer && (
                        <p className="font-mono text-[11px] text-text-secondary/70 mt-0.5">
                          {event.organizer}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Related Project Callout (if connected) */}
                  {event.relatedProject && (
                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono">
                      <span className="text-text-secondary/60">Project:</span>
                      {event.relatedProject.slug ? (
                        <Link
                          href={`/projects/${event.relatedProject.slug}`}
                          className="text-text-primary hover:text-accent-crimson transition-colors flex items-center gap-1 font-medium"
                        >
                          <span>{event.relatedProject.name}</span>
                          <span className="text-accent-crimson">→</span>
                        </Link>
                      ) : (
                        <span className="text-text-primary font-medium">
                          {event.relatedProject.name}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
