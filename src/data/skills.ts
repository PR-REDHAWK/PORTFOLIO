export type TechStatus = "demonstrated" | "applied" | "exploring";

export interface TechItem {
  name: string;
  category: string;
  status: TechStatus;
  description?: string;
  projectAssociation?: string; // e.g. "SentinelAI", "Monsoon", "SecurePlay"
}

export interface TechCategory {
  id: string;
  title: string;
  shortDescription: string;
  items: TechItem[];
}

export interface ExploringItem {
  name: string;
  area: string;
  detail: string;
}

export const skillsInventory: TechCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    shortDescription: "Core languages for systems, algorithmic problem-solving, and applications",
    items: [
      {
        name: "C++",
        category: "languages",
        status: "demonstrated",
        description: "Competitive programming, STL, complex algorithmic problem-solving",
        projectAssociation: "Competitive Programming (LeetCode, CodeChef)",
      },
      {
        name: "JavaScript",
        category: "languages",
        status: "demonstrated",
        description: "Modern ECMAScript, asynchronous runtimes, DOM APIs",
        projectAssociation: "SentinelAI, SecurePlay, Portfolio",
      },
      {
        name: "TypeScript",
        category: "languages",
        status: "demonstrated",
        description: "Strict static typing, interfaces, generic utility architecture",
        projectAssociation: "SecurePlay, Portfolio",
      },
      {
        name: "Python",
        category: "languages",
        status: "demonstrated",
        description: "Data processing pipelines, scientific computing, ML models",
        projectAssociation: "Monsoon",
      },
      {
        name: "SQL",
        category: "languages",
        status: "applied",
        description: "Relational queries, schemas, and data manipulation",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    shortDescription: "Modern UI engineering, design systems, and responsive architectures",
    items: [
      {
        name: "React",
        category: "frontend",
        status: "demonstrated",
        description: "Component composition, reactive hooks, state management",
        projectAssociation: "SentinelAI, SecurePlay, Monsoon",
      },
      {
        name: "Next.js",
        category: "frontend",
        status: "demonstrated",
        description: "App Router, Server Components, static generation & optimizations",
        projectAssociation: "Portfolio",
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        status: "demonstrated",
        description: "Design tokens, utility-first styling, v4 design engines",
        projectAssociation: "SentinelAI, SecurePlay, Monsoon, Portfolio",
      },
      {
        name: "Vite",
        category: "frontend",
        status: "demonstrated",
        description: "Blazing fast ESM bundler, dev server and build pipeline",
        projectAssociation: "SecurePlay",
      },
      {
        name: "Framer Motion",
        category: "frontend",
        status: "demonstrated",
        description: "Declarative UI transitions and component animations",
        projectAssociation: "SecurePlay",
      },
      {
        name: "HTML5",
        category: "frontend",
        status: "demonstrated",
        description: "Semantic document architecture, accessibility standards",
      },
      {
        name: "CSS3",
        category: "frontend",
        status: "demonstrated",
        description: "Modern CSS layout models, CSS variables, and responsive design",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    shortDescription: "Event-driven services, microservice architectures, and robust APIs",
    items: [
      {
        name: "Node.js",
        category: "backend",
        status: "demonstrated",
        description: "Asynchronous I/O, server-side JavaScript runtime environments",
        projectAssociation: "SentinelAI",
      },
      {
        name: "Express.js",
        category: "backend",
        status: "demonstrated",
        description: "RESTful routing, microservice coordination, middleware pipelines",
        projectAssociation: "SentinelAI",
      },
      {
        name: "FastAPI",
        category: "backend",
        status: "demonstrated",
        description: "High-performance Python API microservice with automatic OpenAPI docs",
        projectAssociation: "Monsoon",
      },
      {
        name: "Socket.IO",
        category: "backend",
        status: "demonstrated",
        description: "Real-time bidirectional event streaming and incident feeds",
        projectAssociation: "SentinelAI",
      },
      {
        name: "REST APIs",
        category: "backend",
        status: "demonstrated",
        description: "Clean endpoint contracts, status code conventions, and payload design",
        projectAssociation: "SentinelAI, Monsoon",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    shortDescription: "Document stores and relational database persistence",
    items: [
      {
        name: "MongoDB",
        category: "databases",
        status: "demonstrated",
        description: "Document data modeling, aggregations, and high-velocity persistence",
        projectAssociation: "SentinelAI",
      },
      {
        name: "PostgreSQL",
        category: "databases",
        status: "applied",
        description: "Relational modeling, indexing, ACID transactions",
      },
      {
        name: "MySQL",
        category: "databases",
        status: "applied",
        description: "Relational schemas, query optimization, structured tables",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Multimodal LLM reasoning, computer vision, and probabilistic tabular models",
    items: [
      {
        name: "Google Gemini API",
        category: "ai-ml",
        status: "demonstrated",
        description: "Contextual reasoning, evidence grounding, structured JSON generation",
        projectAssociation: "SentinelAI (2.5 Flash), SecurePlay",
      },
      {
        name: "XGBoost",
        category: "ai-ml",
        status: "demonstrated",
        description: "Gradient boosted decision trees for probabilistic meteorological forecasting",
        projectAssociation: "Monsoon",
      },
      {
        name: "Isotonic Regression",
        category: "ai-ml",
        status: "demonstrated",
        description: "Non-parametric probability calibration to minimize test Brier score",
        projectAssociation: "Monsoon",
      },
      {
        name: "Scikit-learn",
        category: "ai-ml",
        status: "demonstrated",
        description: "Evaluation metrics (ROC-AUC, Brier score), pipeline preprocessing",
        projectAssociation: "Monsoon",
      },
      {
        name: "Face-api.js",
        category: "ai-ml",
        status: "demonstrated",
        description: "Client-side facial landmark detection and age estimation models",
        projectAssociation: "SecurePlay",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    shortDescription: "Development workflows, deployment platforms, and system tooling",
    items: [
      {
        name: "Git",
        category: "tools",
        status: "demonstrated",
        description: "Distributed version control, branch workflows, and commit hygiene",
      },
      {
        name: "GitHub",
        category: "tools",
        status: "demonstrated",
        description: "Open-source collaboration, pull requests, issue tracking",
      },
      {
        name: "VS Code",
        category: "tools",
        status: "demonstrated",
        description: "Primary engineering IDE, extensions, and workspace configuration",
      },
      {
        name: "Vercel",
        category: "tools",
        status: "demonstrated",
        description: "Edge networks, automated CI/CD previews, and production hosting",
        projectAssociation: "Monsoon, Portfolio",
      },
      {
        name: "Linux",
        category: "tools",
        status: "applied",
        description: "Shell environments, file permissions, and process management",
      },
      {
        name: "Docker",
        category: "tools",
        status: "applied",
        description: "Containerization fundamentals, Dockerfile definitions, isolated images",
      },
      {
        name: "AWS",
        category: "tools",
        status: "applied",
        description: "Cloud fundamentals, object storage, and basic compute instances",
      },
    ],
  },
];

export const currentlyExploring: ExploringItem[] = [
  {
    name: "Docker & Containerization",
    area: "DevOps & Infrastructure",
    detail: "Multi-stage container builds, reproducible developer environments, and service orchestration.",
  },
  {
    name: "Kubernetes",
    area: "Distributed Infrastructure",
    detail: "Pod lifecycle management, ingress controllers, cluster scaling, and resilience patterns.",
  },
  {
    name: "Redis",
    area: "Data Systems & Caching",
    detail: "In-memory key-value caching, Pub/Sub channels, rate limiting, and session stores.",
  },
  {
    name: "Kafka",
    area: "Event Streaming",
    detail: "High-throughput distributed event streaming, partitioned topics, and consumer group semantics.",
  },
  {
    name: "Advanced System Design",
    area: "Software Architecture",
    detail: "Consistent hashing, CAP theorem trade-offs, consensus protocols, and resilient scaling architectures.",
  },
  {
    name: "OAuth2 & Authentication Architecture",
    area: "Security & Identity",
    detail: "JWT life cycles, PKCE flows, refresh token rotation, and RBAC authorization protocols.",
  },
];

