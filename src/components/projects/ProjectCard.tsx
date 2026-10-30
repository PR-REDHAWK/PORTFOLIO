import Link from "next/link";
import { Project } from "@/data/projects";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFlagship = project.isFlagship;

  // Flatten top technologies for preview pills
  const techStackList = [
    ...(project.technologyStack.aiMl || []),
    ...(project.technologyStack.backend || []),
    ...(project.technologyStack.frontend || []),
    ...(project.technologyStack.database || []),
  ].slice(0, isFlagship ? 7 : 5);

  return (
    <article
      className={`group relative border border-border bg-background-elevated transition-all duration-300 hover:border-border/90 flex flex-col justify-between ${
        isFlagship
          ? "p-6 sm:p-10 lg:p-12 mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "p-6 sm:p-8"
      }`}
    >
      {/* Flagship ambient red flare in background */}
      {isFlagship && (
        <div
          className="absolute -top-10 -right-10 w-96 h-96 bg-accent-crimson/[0.04] blur-3xl pointer-events-none group-hover:bg-accent-crimson/[0.08] transition-all duration-500"
          aria-hidden="true"
        />
      )}

      <div>
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-border/60">
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-[1px] ${
                isFlagship ? "bg-accent-crimson animate-pulse" : "bg-text-secondary"
              }`}
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson">
              {isFlagship ? "Flagship System // 01" : `Project // ${project.title}`}
            </span>
          </div>

          <span className="font-mono text-[11px] text-text-secondary/70 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3 mb-6">
          <h3
            className={`font-sans font-bold tracking-tight text-text-primary group-hover:text-white transition-colors ${
              isFlagship
                ? "text-3xl sm:text-4xl md:text-5xl leading-[1.08]"
                : "text-2xl sm:text-3xl leading-[1.15]"
            }`}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-accent-crimson transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson rounded-xs inline-block"
            >
              {project.title}
            </Link>
          </h3>

          <p
            className={`font-mono text-text-secondary tracking-wide ${
              isFlagship ? "text-xs sm:text-sm max-w-3xl leading-relaxed" : "text-xs leading-relaxed"
            }`}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Screenshot / Architecture Visual */}
        <div className="my-6">
          <Link
            href={`/projects/${project.slug}`}
            className="block focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
            tabIndex={-1}
            aria-hidden="true"
          >
            <ProjectImagePlaceholder
              title={project.title}
              category={project.category}
              aspectRatio={isFlagship ? "aspect-16/9 md:aspect-21/9" : "aspect-16/10"}
              src={project.screenshot?.src}
              alt={project.screenshot?.alt || `${project.title} Preview`}
              caption={project.screenshot?.caption}
            />
          </Link>
        </div>

        {/* Narrative Description */}
        <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Architectural Highlights / Metrics (Flagship & Monsoon) */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6 space-y-3 border-y border-border/40 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-1.5">
              <span className="w-1 h-1 bg-accent-crimson inline-block" />
              Architecture Core
            </span>
            <div
              className={`grid gap-3 ${
                isFlagship ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {project.architectureHighlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="p-3 bg-background border border-border/50 text-left"
                >
                  <p className="font-mono text-[10px] text-text-primary uppercase tracking-wider mb-1">
                    {highlight.label}
                  </p>
                  <p className="text-xs text-text-secondary/80 leading-relaxed font-light">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reported Evaluation Metrics (e.g. Monsoon) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {project.metrics.map((m) => (
              <div
                key={m.value}
                className="p-3 border border-border/40 bg-background text-left"
              >
                <div className="font-mono font-bold text-base sm:text-lg text-accent-crimson">
                  {m.metric}
                </div>
                <div className="font-mono text-[10px] text-text-primary uppercase tracking-wider mt-0.5">
                  {m.value}
                </div>
                {m.context && (
                  <div className="text-[10px] text-text-secondary/70 leading-tight mt-1 line-clamp-2">
                    {m.context}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Tech Stack & Actions */}
      <div className="pt-6 border-t border-border/50 space-y-5">
        {/* Technology Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {techStackList.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border border-border/60 bg-background text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links & CTA Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Read Case Study Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-primary hover:text-accent-crimson transition-colors py-1 group/btn focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
          >
            <span>Case Study</span>
            <span className="text-accent-crimson transition-transform duration-200 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>

          {/* External Links */}
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors py-1 border-b border-border hover:border-accent-crimson focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
              >
                GitHub ↗
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-text-primary hover:text-accent-crimson transition-colors py-1 border-b border-accent-crimson focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
              >
                Live Demo ↗
              </a>
            )}

            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors py-1 border-b border-border hover:border-accent-crimson focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
              >
                Docs ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

