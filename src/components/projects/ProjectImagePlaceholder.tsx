import Image from "next/image";

interface ProjectImagePlaceholderProps {
  title: string;
  category: string;
  aspectRatio?: string;
  src?: string | null;
  alt: string;
  caption?: string;
  className?: string;
}

export function ProjectImagePlaceholder({
  title,
  category,
  aspectRatio = "aspect-16/9",
  src,
  alt,
  caption,
  className = "",
}: ProjectImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden border border-border bg-background-elevated ${aspectRatio} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 1200px"
        />
        {caption && (
          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-background/90 backdrop-blur-xs border-t border-border/60 text-[10px] font-mono text-text-secondary/80">
            {caption}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border border-border bg-background-elevated flex flex-col justify-between p-6 sm:p-8 select-none group-hover:border-border/80 transition-colors ${aspectRatio} ${className}`}
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F1F1EC 1px, transparent 1px), linear-gradient(90deg, #F1F1EC 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Crimson Radial Glow */}
      <div
        className="absolute -top-12 -right-12 w-64 h-64 bg-accent-crimson/[0.04] blur-3xl pointer-events-none group-hover:bg-accent-crimson/[0.08] transition-all duration-500"
        aria-hidden="true"
      />

      {/* Top Header Bar of Placeholder */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-border/50 text-[10px] font-mono tracking-widest text-text-secondary/70 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
          {category}
        </span>
        <span className="px-1.5 py-0.5 border border-border/60 bg-background/50 text-[9px]">
          Operational Preview
        </span>
      </div>

      {/* Center Spec Graphic */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 border border-border/60 flex items-center justify-center bg-background/60 mb-4 group-hover:border-accent-crimson/60 transition-colors duration-300">
          <div className="w-8 h-8 border border-dashed border-accent-crimson/50 rotate-45 flex items-center justify-center" />
        </div>
        <p className="font-sans font-medium text-base sm:text-lg text-text-primary tracking-wide">
          {title} Interface Console
        </p>
        <p className="font-mono text-xs text-text-secondary/70 mt-1 max-w-sm">
          System telemetry, analytics pipelines & control interfaces
        </p>
      </div>

      {/* Bottom Status Row */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-border/50 text-[10px] font-mono tracking-wider text-text-secondary/60">
        <span>Screenshot Asset / Configurable Placeholder</span>
        <span className="text-accent-crimson/80">LIVE ARCHITECTURE</span>
      </div>
    </div>
  );
}

