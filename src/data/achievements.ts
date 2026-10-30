export interface PlatformBadge {
  name: string;
  year?: string | number;
  description?: string;
}

export interface CompetitivePlatform {
  id: string;
  name: string;
  tagline: string;
  problemsSolved: string;
  problemsSolvedContext?: string;
  peakRating?: {
    value: number | string;
    label: string;
    detail?: string;
  };
  rankingPercentile?: string;
  badgesCount?: number;
  badges: PlatformBadge[];
  profileUrl: string | null;
  statusLabel: string;
}

export interface HackathonEvent {
  id: string;
  title: string;
  recognition: string;
  year: number;
  organizer?: string;
  description: string;
  relatedProject?: {
    name: string;
    slug?: string;
  };
}

export interface AchievementsData {
  competitiveProgramming: CompetitivePlatform[];
  hackathons: HackathonEvent[];
}

export const achievementsData: AchievementsData = {
  competitiveProgramming: [
    {
      id: "leetcode",
      name: "LeetCode",
      tagline: "Algorithmic patterns, data structures, and contest optimization",
      problemsSolved: "350+",
      problemsSolvedContext: "Verified problems across data structures & algorithms",
      peakRating: {
        value: 1593,
        label: "Peak Contest Rating",
        detail: "Previously reported contest peak",
      },
      rankingPercentile: "Top 29%",
      badgesCount: 7,
      badges: [
        { name: "50 Days Badge", year: 2025, description: "Consistent problem solving streak" },
        { name: "100 Days Badge", year: 2025, description: "100 days milestone completion" },
        { name: "50 Days Badge", year: 2026, description: "Continued streak dedication" },
        { name: "100 Days Badge", year: 2026, description: "100 days active solve milestone" },
        { name: "200 Days Badge", year: 2026, description: "200 days rigorous milestone" },
        { name: "January 2026 Badge", year: 2026, description: "Solved all daily challenges in Jan" },
        { name: "365 Days Badge", description: "Full year streak dedication" },
      ],
      profileUrl: null, // Profile link can be added here (e.g. "https://leetcode.com/username")
      statusLabel: "Historical Record",
    },
    {
      id: "codechef",
      name: "CodeChef",
      tagline: "Speed, precision, and competitive programming contests",
      problemsSolved: "1000+",
      problemsSolvedContext: "Extensive problem repository solutions & practice",
      peakRating: {
        value: 1440,
        label: "Max Rating (2★)",
        detail: "Previously reported maximum 2-Star division rating",
      },
      badgesCount: 4,
      badges: [
        { name: "Bronze Badge", description: "Problem solved tier achievement" },
        { name: "Silver Badge", description: "Advanced problems milestone" },
        { name: "Gold Badge", description: "High-volume solutions tier" },
        { name: "Diamond Badge", description: "Top echelon problems solved badge" },
      ],
      profileUrl: null, // Profile link can be added here (e.g. "https://www.codechef.com/users/username")
      statusLabel: "Historical Record",
    },
  ],

  hackathons: [
    {
      id: "iqoo-hackathon",
      title: "IQOO Hackathon",
      recognition: "Finalist",
      year: 2026,
      organizer: "iQOO India",
      description:
        "Selected as a national finalist following rigorous technical evaluation, competitive prototyping, and architecture defense.",
      relatedProject: {
        name: "CyberOracle",
      },
    },
    {
      id: "sih-2026",
      title: "Smart India Hackathon 2026",
      recognition: "Campus Top 45 Selection",
      year: 2026,
      organizer: "Ministry of Education / AICTE & ABESIT",
      description:
        "Selected among the top 45 teams from campus internal evaluation rounds for engineering an end-to-end probabilistic climate forecasting solution.",
      relatedProject: {
        name: "Monsoon",
        slug: "monsoon",
      },
    },
    {
      id: "dev2hack-2026",
      title: "Dev2Hack 2026",
      recognition: "Runner Up",
      year: 2026,
      organizer: "Dev2Hack Organizing Committee",
      description:
        "Awarded Runner Up for developing an AI-driven safety architecture engineered to protect parents against unauthorized in-game microtransactions.",
      relatedProject: {
        name: "SecurePlay",
        slug: "secureplay",
      },
    },
  ],
};

