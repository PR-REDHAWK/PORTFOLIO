"use client";

import { useState } from "react";
import { skillsInventory, currentlyExploring, TechStatus } from "@/data/skills";
import { TechIcon } from "./TechIcon";

export function SkillsSection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | TechStatus>("all");

  const filteredCategories = skillsInventory
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        selectedFilter === "all" ? true : item.status === selectedFilter
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative z-10 w-full px-6 py-28 sm:py-36 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden"
    >
      {/* Ambient Crimson Glow */}
      <div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent-crimson/[0.03] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-20 sm:space-y-24">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background-elevated">
              <span
                className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
                04 // Technical Stack
              </span>
            </div>
            <div className="h-px flex-1 bg-border/40 max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2
                id="skills-heading"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-primary leading-[1.08] uppercase"
              >
                THE ARSENAL
              </h2>
              <div className="w-12 h-0.5 bg-accent-crimson" aria-hidden="true" />
              <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                Technologies I use to turn ideas into working software.
              </p>
            </div>

            {/* Filter Toggle Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-background-elevated border border-border shrink-0">
              <button
                type="button"
                onClick={() => setSelectedFilter("all")}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer ${
                  selectedFilter === "all"
                    ? "bg-background text-text-primary border border-border shadow-xs"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                All Tech
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("demonstrated")}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === "demonstrated"
                    ? "bg-background text-text-primary border border-border shadow-xs"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]" />
                Project Proven
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter("applied")}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === "applied"
                    ? "bg-background text-text-primary border border-border shadow-xs"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="w-1.5 h-1.5 bg-text-secondary/70 rounded-[1px]" />
                Applied & Experimented
              </button>
            </div>
          </div>
        </div>

        {/* 1. Categorized Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="border border-border bg-background-elevated p-6 flex flex-col justify-between space-y-6 hover:border-border/90 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="space-y-1.5 pb-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-crimson font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                    {category.title}
                  </h3>
                  <span className="font-mono text-[10px] text-text-secondary/50">
                    0{category.items.length}
                  </span>
                </div>
                <p className="text-xs text-text-secondary/70 font-light">
                  {category.shortDescription}
                </p>
              </div>

              {/* Items in Category */}
              <div className="space-y-3">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 bg-background border border-border/60 hover:border-accent-crimson/50 transition-colors duration-200 group flex items-start gap-3"
                  >
                    <div className="mt-0.5 text-text-secondary group-hover:text-accent-crimson transition-colors shrink-0">
                      <TechIcon name={tech.name} className="w-5 h-5" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-sans font-medium text-sm text-text-primary group-hover:text-white transition-colors">
                          {tech.name}
                        </span>

                        <span
                          className={`font-mono text-[9px] uppercase px-1.5 py-0.2 border tracking-wider ${
                            tech.status === "demonstrated"
                              ? "border-accent-crimson/40 bg-accent-crimson/10 text-accent-crimson"
                              : "border-border/60 text-text-secondary/60 bg-background-elevated"
                          }`}
                        >
                          {tech.status === "demonstrated" ? "Verified" : "Applied"}
                        </span>
                      </div>

                      {tech.description && (
                        <p className="text-xs text-text-secondary/80 font-light leading-snug">
                          {tech.description}
                        </p>
                      )}

                      {tech.projectAssociation && (
                        <p className="font-mono text-[10px] text-accent-crimson/80 pt-0.5">
                          ↳ {tech.projectAssociation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Currently Exploring — Distinct Architectural Section */}
        <div className="space-y-8 pt-10 border-t border-border/40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-border/60">
            <div className="space-y-1">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-crimson inline-block animate-pulse" />
                Active Exploration & Research
              </h3>
              <p className="font-sans text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                Currently Exploring
              </p>
            </div>
            <span className="font-mono text-[11px] text-text-secondary/60 uppercase">
              In-Depth Study & Prototyping
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentlyExploring.map((exp) => (
              <div
                key={exp.name}
                className="border-l-2 border-accent-crimson border-y border-r border-border/50 bg-background-elevated/40 p-5 space-y-2 hover:border-border/80 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-crimson">
                    {exp.area}
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.2 border border-border/50 text-text-secondary/60">
                    Exploring
                  </span>
                </div>

                <h4 className="font-sans font-semibold text-base text-text-primary tracking-wide">
                  {exp.name}
                </h4>

                <p className="text-xs text-text-secondary/80 font-light leading-relaxed">
                  {exp.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

