import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectImagePlaceholder } from "@/components/projects/ProjectImagePlaceholder";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found · Priyanshu Panwar",
    };
  }

  return {
    title: `${project.title} · Engineering Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <Header />

      <main className="flex-1 pt-28 sm:pt-36 pb-24 px-6 relative overflow-hidden">
        {/* Subtle Ambient Crimson Glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-crimson/[0.04] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <article className="max-w-5xl mx-auto w-full relative z-10 space-y-16">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors py-1 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-xs"
            >
              <span className="text-accent-crimson transition-transform duration-200 group-hover:-translate-x-1">
                ←
              </span>
              <span>Back to Projects</span>
            </Link>

            <span className="font-mono text-xs uppercase tracking-widest text-accent-crimson flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]" />
              {project.category}
            </span>
          </div>

          {/* 1. Project Header & Title */}
          <header className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-sans font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-text-primary leading-[1.05]">
                {project.title}
              </h1>
              <p className="font-mono text-sm sm:text-base text-text-secondary max-w-3xl leading-relaxed tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Action Link Pills */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] px-4 py-2 bg-accent-crimson text-white hover:bg-accent-crimson/90 transition-colors flex items-center gap-2 rounded-[1px]"
                >
                  <span>Live Application</span>
                  <span>↗</span>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] px-4 py-2 border border-border bg-background-elevated hover:border-text-secondary transition-colors flex items-center gap-2 text-text-primary rounded-[1px]"
                >
                  <span>GitHub Repository</span>
                  <span>↗</span>
                </a>
              )}

              {project.links.docs && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] px-4 py-2 border border-border bg-background-elevated hover:border-text-secondary transition-colors flex items-center gap-2 text-text-secondary hover:text-text-primary rounded-[1px]"
                >
                  <span>Interactive API Docs</span>
                  <span>↗</span>
                </a>
              )}

              {!project.links.github && !project.links.live && (
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary/60 px-3 py-1.5 border border-border/40 bg-background-elevated/30">
                  Private / Verified Showcase Build
                </span>
              )}
            </div>
          </header>

          {/* 2. Visual / Architecture Screenshot Console */}
          <section aria-label="System Visual Preview">
            <ProjectImagePlaceholder
              title={project.title}
              category={project.category}
              aspectRatio="aspect-16/9 md:aspect-21/9"
              src={project.screenshot?.src}
              alt={project.screenshot?.alt || `${project.title} Interface`}
              caption={project.screenshot?.caption}
            />
          </section>

          {/* Reported Evaluation Metrics (if present) */}
          {project.metrics && project.metrics.length > 0 && (
            <section className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]" />
                Reported Model Evaluation
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((m) => (
                  <div
                    key={m.value}
                    className="p-5 border border-border bg-background-elevated"
                  >
                    <div className="font-mono font-bold text-2xl text-accent-crimson">
                      {m.metric}
                    </div>
                    <div className="font-mono text-xs text-text-primary uppercase tracking-wider mt-1">
                      {m.value}
                    </div>
                    {m.context && (
                      <div className="text-xs text-text-secondary/80 mt-2 font-light leading-relaxed">
                        {m.context}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Problem Statement & Overview */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-border/40 pt-12">
            <div className="md:col-span-4 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Context & Problem
              </span>
              <h2 className="font-sans font-semibold text-2xl text-text-primary">
                Problem Statement
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                {project.problemStatement}
              </p>
              <div className="space-y-4">
                {project.fullDescription.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-text-secondary font-light leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Solution & Architecture Highlights */}
          <section className="space-y-8 border-t border-border/40 pt-12">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Systems Engineering
              </span>
              <h2 className="font-sans font-semibold text-2xl text-text-primary">
                Solution & Architectural Design
              </h2>
            </div>

            {/* Architecture Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.architectureHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="p-6 border border-border bg-background-elevated space-y-3"
                >
                  <div className="w-8 h-8 border border-border flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-accent-crimson" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                    {highlight.label}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Architecture Walkthrough Details */}
            <div className="p-6 sm:p-8 border border-border/60 bg-background-elevated/40 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">
                Architectural Breakdown
              </h3>
              <ul className="space-y-3">
                {project.solutionArchitecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-text-secondary font-light"
                  >
                    <span className="font-mono text-xs text-accent-crimson/80 mt-0.5">
                      [{idx + 1}]
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Key Features Taxonomy */}
          <section className="space-y-6 border-t border-border/40 pt-12">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Capabilities
              </span>
              <h2 className="font-sans font-semibold text-2xl text-text-primary">
                Key Features
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-border/50 bg-background-elevated flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-accent-crimson/70">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-sm text-text-primary/90 font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Technology Stack Breakdown */}
          <section className="space-y-6 border-t border-border/40 pt-12">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Technology Stack
              </span>
              <h2 className="font-sans font-semibold text-2xl text-text-primary">
                Components & Libraries
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologyStack.aiMl && (
                <div className="p-5 border border-border bg-background-elevated space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-crimson">
                    AI & Intelligence
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-text-primary">
                    {project.technologyStack.aiMl.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-border inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.backend && (
                <div className="p-5 border border-border bg-background-elevated space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-crimson">
                    Backend & Services
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-text-primary">
                    {project.technologyStack.backend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-border inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.frontend && (
                <div className="p-5 border border-border bg-background-elevated space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-crimson">
                    Frontend & Client
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-text-primary">
                    {project.technologyStack.frontend.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-border inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologyStack.database && (
                <div className="p-5 border border-border bg-background-elevated space-y-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent-crimson">
                    Database & Storage
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-text-primary">
                    {project.technologyStack.database.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-border inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* 7. Engineering Challenges & Design Decisions */}
          <section className="space-y-6 border-t border-border/40 pt-12">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                Reflections
              </span>
              <h2 className="font-sans font-semibold text-2xl text-text-primary">
                Engineering Challenges & Design Decisions
              </h2>
            </div>

            <div className="space-y-4">
              {project.engineeringChallenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-5 border-l-2 border-accent-crimson border-y border-r border-border/40 bg-background-elevated/40"
                >
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-light">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Navigation */}
          <footer className="pt-12 border-t border-border/60 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-text-primary hover:text-accent-crimson transition-colors py-2 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
            >
              <span>← Return to All Projects</span>
            </Link>

            <span className="font-mono text-[11px] text-text-secondary/60 uppercase">
              Phase 05 Showcase
            </span>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}

