export interface NavItem {
  label: string;
  href: string;
  isAvailable: boolean;
  tag?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string | null;
  username?: string;
  isAvailable: boolean;
  note?: string;
}

export interface ContactConfig {
  email: string | null;
  location: string;
  socials: SocialLink[];
  resume: {
    path: string;
    isAvailable: boolean;
  };
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
  contact: ContactConfig;
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
  status: "PHASE 8 / CONTACT & FOOTER COMPLETE",
  year: 2026,
  contact: {
    email: "arpitpriyanshupanwar098@gmail.com",
    location: "Ghaziabad, Uttar Pradesh, India",
    socials: [
      {
        platform: "GitHub",
        label: "GitHub",
        url: "https://github.com/PR-REDHAWK",
        username: "PR-REDHAWK",
        isAvailable: true,
      },
      {
        platform: "LinkedIn",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-panwar098/",
        username: "priyanshu-panwar098",
        isAvailable: true,
      },
    ],
    resume: {
      path: "/Priyanshu_Panwar_Resume.pdf",
      isAvailable: true,
    },
  },
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
    { label: "Skills", href: "/#skills", isAvailable: true },
    { label: "Contact", href: "/#contact", isAvailable: true },
  ],
};
