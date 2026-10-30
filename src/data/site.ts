export interface NavItem {
  label: string;
  href: string;
  isAvailable: boolean;
  tag?: string;
}

export interface SiteConfig {
  name: string;
  eyebrow: string;
  role: string;
  location: string;
  tagline: string;
  description: string;
  status: string;
  year: number;
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    graduationYear: number;
  };
  interests: string[];
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "PRIYANSHU PANWAR",
  eyebrow: "SOFTWARE DEVELOPER · INDIA",
  role: "Software Developer",
  location: "India",
  tagline: "Engineering resilient systems and cinematic digital experiences.",
  description:
    "Developer focused on building practical web software, exploring modern systems engineering, and solving complex algorithmic challenges.",
  status: "PHASE 6 / ACHIEVEMENTS ACTIVE",
  year: 2026,
  education: {
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    institution: "ABES Institute of Technology",
    location: "Ghaziabad, Uttar Pradesh, India",
    graduationYear: 2028,
  },
  interests: [
    "Full-stack web development",
    "AI-powered applications",
    "Data structures and algorithms",
    "Competitive programming",
    "Open-source development",
    "Building practical software products",
  ],
  navItems: [
    { label: "Home", href: "/#hero", isAvailable: true },
    { label: "About", href: "/#about", isAvailable: true },
    { label: "Projects", href: "/#projects", isAvailable: true },
    { label: "Achievements", href: "/#achievements", isAvailable: true },
    { label: "Contact", href: "/#contact", isAvailable: false, tag: "Upcoming" },
  ],
};
