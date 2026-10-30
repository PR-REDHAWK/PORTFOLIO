import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShrineHero } from "@/components/intro/ShrineHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Static Shrine Hero (Section ID: hero) */}
        <ShrineHero />

        {/* Section 01: About (Section ID: about) */}
        <AboutSection />

        {/* Section 02: Featured Projects (Section ID: projects) */}
        <ProjectsSection />

        {/* Section 03: Achievements & Competitive Programming (Section ID: achievements) */}
        <AchievementsSection />

        {/* Section 04: The Arsenal — Technical Stack & Exploring (Section ID: skills) */}
        <SkillsSection />

        {/* Section 05: Contact & Direct Dispatch (Section ID: contact) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
