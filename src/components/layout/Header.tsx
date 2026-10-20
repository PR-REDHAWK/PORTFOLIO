import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background/90 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-accent-crimson rounded-[1px] inline-block" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.2em] text-text-primary uppercase font-semibold">
            {siteConfig.name}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-mono text-[10px] tracking-[0.15em] text-text-secondary uppercase px-2 py-0.5 border border-border bg-background-elevated">
            {siteConfig.status}
          </span>
        </div>
      </div>
    </header>
  );
}
