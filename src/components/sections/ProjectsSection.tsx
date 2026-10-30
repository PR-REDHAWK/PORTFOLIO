import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  const flagshipProject = projectsData.find((p) => p.isFlagship) || projectsData[0];
  const supportingProjects = projectsData.filter((p) => p.id !== flagshipProject.id);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 w-full px-6 py-28 sm:py-36 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Ambient Crimson Backlight */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-crimson/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background-elevated">
            <span
              className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]"
              aria-hidden="true"
            />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
              02 // Featured Projects
            </span>
          </div>
          <div className="h-px flex-1 bg-border/40 max-w-xs" />
        </div>

        {/* Section Title & Subheading */}
        <div className="mb-14 sm:mb-16 space-y-4 max-w-3xl">
          <h2
            id="projects-heading"
            className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-primary leading-[1.1]"
          >
            Engineering resilient systems, intelligent models, and practical tools.
          </h2>
          <div className="w-12 h-0.5 bg-accent-crimson" aria-hidden="true" />
          <p className="font-mono text-xs sm:text-sm text-text-secondary tracking-wide uppercase">
            Curated flagship and applied engineering systems
          </p>
        </div>

        {/* 1. Flagship Showcase: SentinelAI */}
        <ProjectCard project={flagshipProject} />

        {/* 2. Supporting Projects Grid: SecurePlay & Monsoon */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
