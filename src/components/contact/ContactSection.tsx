import { siteConfig } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10 w-full px-6 py-28 sm:py-36 bg-background border-t border-border/40 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Ambient Crimson Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-crimson/[0.035] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16 sm:space-y-20">
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
                  05 // Communications
                </span>
              </div>
              <div className="h-px flex-1 bg-border/40 max-w-xs" />
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-crimson block font-semibold">
                LET&apos;S CONNECT
              </span>
              <h2
                id="contact-heading"
                className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-text-primary leading-[1.08]"
              >
                Have an interesting project in mind?
              </h2>
              <div className="w-12 h-0.5 bg-accent-crimson" aria-hidden="true" />
              <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl">
                Whether it&apos;s an opportunity, a collaboration, or simply a conversation about technology, I&apos;d love to hear from you.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Editorial Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info, Socials, Resume (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Email Card */}
            <Reveal delayMs={150}>
              <div className="border border-border bg-background-elevated p-6 space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                  Electronic Mail
                </span>

                {contact.email ? (
                  <div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-base sm:text-lg text-text-primary hover:text-accent-crimson transition-colors block break-all font-medium focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
                    >
                      {contact.email}
                    </a>
                    <p className="text-xs text-text-secondary/70 mt-1 font-light">
                      Direct inbox for development inquiries and discussions.
                    </p>
                  </div>
                ) : (
                  <div className="font-mono text-xs text-text-secondary/60">
                    Email link on request
                  </div>
                )}
              </div>
            </Reveal>

            {/* Developer Profiles & Socials */}
            <Reveal delayMs={200}>
              <div className="border border-border bg-background-elevated p-6 space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                  Network & Repositories
                </span>

                <ul className="space-y-3 font-mono text-xs">
                  {contact.socials.map((social) => (
                    <li
                      key={social.platform}
                      className="flex items-center justify-between pb-2 border-b border-border/40 last:border-b-0 last:pb-0"
                    >
                      <span className="text-text-secondary">{social.label}</span>

                      {social.isAvailable && social.url ? (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-primary hover:text-accent-crimson transition-colors flex items-center gap-1 group/item focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
                        >
                          <span>{social.username || "View Profile"}</span>
                          <span className="text-accent-crimson transition-transform duration-200 group-hover/item:translate-x-0.5">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <span className="text-text-secondary/50 text-[11px]">
                          {social.note || "Available on request"}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Resume Download Action */}
            <Reveal delayMs={250}>
              <div className="border border-border bg-background-elevated p-6 space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-crimson flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-crimson inline-block" />
                  Curriculum Vitae
                </span>

                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Summary of education, systems engineering experience, and technical projects.
                </p>

                {contact.resume.isAvailable ? (
                  <a
                    href={contact.resume.path}
                    download="Priyanshu_Panwar_Resume.pdf"
                    className="font-mono text-xs uppercase tracking-[0.18em] px-4 py-2.5 bg-accent-crimson hover:bg-accent-crimson/90 text-white transition-colors flex items-center justify-center gap-2 rounded-[1px] focus:outline-hidden focus-visible:ring-1 focus-visible:ring-accent-crimson"
                  >
                    <span>Download Resume (PDF)</span>
                    <span>↓</span>
                  </a>
                ) : (
                  <div
                    className="p-3 bg-background border border-border/60 flex items-center justify-between text-xs font-mono"
                    title="PDF asset pending publication"
                  >
                    <span className="text-text-secondary/60 uppercase tracking-wider">
                      Resume Document
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-background-elevated border border-border/60 text-text-secondary/50 rounded-[1px]">
                      PDF Pending
                    </span>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Quick Location & Availability Vitals */}
            <Reveal delayMs={300}>
              <div className="p-4 bg-background border border-border/60 flex items-center justify-between font-mono text-xs">
                <span className="text-text-secondary/70">Based In</span>
                <span className="text-text-primary">{contact.location}</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delayMs={200}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
