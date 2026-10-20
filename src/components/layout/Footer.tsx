import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-text-secondary">
        <p className="tracking-widest">
          © {siteConfig.year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-2 tracking-widest text-[11px]">
          <span className="w-1.5 h-1.5 bg-accent-crimson rounded-[1px]" aria-hidden="true" />
          <span>CINEMATIC ARCHITECTURE IN PROGRESS</span>
        </div>
      </div>
    </footer>
  );
}
