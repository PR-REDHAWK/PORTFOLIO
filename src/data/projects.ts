export interface ProjectLinks {
  github?: string | null;
  live?: string | null;
  docs?: string | null;
}

export interface ProjectArchitectureHighlight {
  label: string;
  detail: string;
}

export interface ProjectEvaluationMetric {
  metric: string;
  value: string;
  context?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  problemStatement: string;
  solutionArchitecture: string[];
  architectureHighlights: ProjectArchitectureHighlight[];
  keyFeatures: string[];
  technologyStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    aiMl?: string[];
    core?: string[];
  };
  metrics?: ProjectEvaluationMetric[];
  links: ProjectLinks;
  screenshot?: {
    src?: string | null;
    alt: string;
    caption?: string;
  };
  engineeringChallenges: string[];
  isFlagship?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "sentinel-ai",
    slug: "sentinel-ai",
    title: "SentinelAI",
    subtitle:
      "Autonomous AI Teammate for E-Commerce Reliability, Sales Continuity and Production Chaos Simulation",
    category: "Autonomous Systems / E-Commerce Reliability",
    isFlagship: true,
    shortDescription:
      "SentinelAI is an autonomous operational AI platform that monitors e-commerce infrastructure, correlates telemetry, identifies incident root causes, assesses transaction impact and proposes human-approved remediation actions.",
    fullDescription: [
      "SentinelAI functions as an autonomous operational teammate engineered to preserve e-commerce reliability and revenue continuity. In modern distributed commerce environments, cascading microservice anomalies often obscure the original failure point under hundreds of synthetic alerts.",
      "By ingesting multi-source telemetry from production-simulated microservices, the platform normalizes metrics, assesses anomaly severity across an objective 0–100 score, synthesizes causal directed acyclic graphs (DAGs), and formulates evidence-grounded incident remediation plans using Google Gemini 2.5 Flash.",
      "All actions follow a strict human-in-the-loop paradigm where suggested remediations must be explicitly validated and triggered by human operators through a real-time event-driven dashboard.",
    ],
    problemStatement:
      "Modern e-commerce architectures face frequent silent degradations, cascading downstream timeouts, and flash-sale traffic spikes. Traditional alert monitoring floods site reliability teams with disconnected alert noise, lacking causal correlation, transaction risk context, and safe, actionable remediation pathways.",
    solutionArchitecture: [
      "ShopDemo Microservices Simulator: Seven logical microservices simulating authentic commerce workloads (catalog, cart, checkout, payments, inventory, recommendations, notifications).",
      "Telemetry Ingestion & Normalization: Continuous aggregation of latency, error rates, queue depths, and database saturation.",
      "Causal DAG Engine: Cross-signal correlation engine mapping dependencies and identifying root-cause origins.",
      "Gemini 2.5 Flash Reasoning: Multi-step contextual analysis combining real-time telemetry with TinyFish external web intelligence.",
      "Human-in-the-Loop Remediation: Secure socket stream allowing operators to review, approve, or reject proposed mitigations before execution.",
    ],
    architectureHighlights: [
      {
        label: "Ground-Truth Isolation",
        detail:
          "SentinelAI independently infers incident root causes strictly from raw telemetry. The ShopDemo simulator does not send hidden scenario labels or ground-truth metadata to the intelligence engine.",
      },
      {
        label: "Production Chaos Simulator",
        detail:
          "ShopDemo features 7 logical microservices subjected to 8 progressive chaos scenarios including blind incident simulations.",
      },
      {
        label: "Deterministic Taxonomy",
        detail:
          "Maintains a strict 12-type incident taxonomy paired with calibrated 0–100 anomaly scoring and cross-signal causal DAG construction.",
      },
    ],
    keyFeatures: [
      "Multi-source telemetry normalization across microservices",
      "Calibrated anomaly scoring on an objective 0–100 scale",
      "Twelve-type structured incident taxonomy",
      "Cross-signal correlation and causal DAG construction",
      "TinyFish external web intelligence enrichment",
      "Evidence-grounded Google Gemini 2.5 Flash reasoning",
      "Human-in-the-loop remediation approval workflow",
      "Real-time operational dashboard powered by Socket.IO",
      "ShopDemo production simulator with 7 logical microservices",
      "Eight progressive chaos scenarios for reliability validation",
      "Blind incident simulation with strict ground-truth isolation",
    ],
    technologyStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Express", "Socket.IO", "Microservices Architecture"],
      database: ["MongoDB"],
      aiMl: ["Google Gemini 2.5 Flash", "TinyFish External Intelligence"],
    },
    links: {
      github: null,
      live: null,
      docs: null,
    },
    screenshot: {
      src: "/images/sentinel-ai-dashboard.png",
      alt: "SentinelAI Real-Time Operational Dashboard and Telemetry Visualizer",
      caption: "Live incident feed, 24-hour severity trends, Socket.IO telemetry stream, and AI root cause accuracy metrics.",
    },
    engineeringChallenges: [
      "Preserving Ground-Truth Isolation: Ensuring the intelligence engine receives only raw streaming telemetry without any leaking scenario metadata from the chaos injector.",
      "Causal Correlation under High Volume: Constructing directed acyclic graphs (DAGs) across multi-service telemetry signals without introducing analytical lag into real-time Socket.IO streams.",
      "Evidence Grounding: Prompt-engineering and structuring Gemini 2.5 Flash inputs to prevent speculative hallucinations and bind remediation options exclusively to observed metrics.",
    ],
  },
  {
    id: "secureplay",
    slug: "secureplay",
    title: "SecurePlay",
    subtitle: "AI-Powered Parental Protection for Gaming Purchases",
    category: "Security / FinTech & AI Protection",
    isFlagship: false,
    shortDescription:
      "SecurePlay is an AI-powered parental protection platform designed to prevent unauthorized, accidental and high-risk in-game purchases made by minors.",
    fullDescription: [
      "SecurePlay tackles the widespread issue of accidental and unauthorized digital transactions in gaming ecosystems. By introducing an intelligent parental verification layer at checkout, the system identifies risky transactions before funds are committed.",
      "The platform combines browser-based facial age estimation with dynamic purchase risk modeling, evaluating spending frequency, transaction size, and historical user behavioral signals.",
      "When a potential minor or high-risk transaction profile is detected, purchase flows are routed into an automated parental approval gateway backed by OTP verification, offering guardians full visibility and actionable controls.",
    ],
    problemStatement:
      "Microtransactions and in-game stores frequently lack age-appropriate barriers, leading to inadvertent spending spikes by children, unauthorized card usage, and difficult chargeback disputes for parents.",
    solutionArchitecture: [
      "Client-Side Facial Analysis: Local facial landmark evaluation utilizing Face-api.js to perform preliminary age estimation directly in the user's browser without storing biometric credentials.",
      "Risk Scoring Engine: Multi-factor transaction evaluator analyzing monetary thresholds, purchase velocity, and deviation from typical gaming sessions.",
      "Parental Notification Gateway: Real-time OTP issuance and authorization workflow for pending purchases.",
      "Guardian Analytics Console: Comprehensive spending breakdown, approval history, and restriction configurations.",
    ],
    architectureHighlights: [
      {
        label: "Privacy-Preserving Age Estimation",
        detail:
          "Facial analysis is used solely for client-side age estimation, not definitive identity verification, ensuring no biometric identities are stored or misused.",
      },
      {
        label: "Dual-Layer Gatekeeping",
        detail:
          "Blends behavioral risk assessment with instantaneous SMS/OTP parent approvals before any simulated checkout completes.",
      },
      {
        label: "Real-Time Spend Auditing",
        detail:
          "Aggregates purchase attempt trajectories and anomaly metrics into a cohesive parental dashboard.",
      },
    ],
    keyFeatures: [
      "AI facial age estimation running client-side",
      "Dynamic purchase risk analysis and classification",
      "Spending pattern and velocity frequency evaluation",
      "Parent approval workflows with fine-grained controls",
      "Secure OTP authorization for gated checkouts",
      "Immediate purchase protection and hold safeguards",
      "Analytics dashboard with transaction and spending insights",
    ],
    technologyStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      aiMl: ["Face-api.js", "Google Gemini API", "Custom Risk Scoring Engine"],
    },
    links: {
      github: null,
      live: null,
      docs: null,
    },
    screenshot: {
      src: "/images/secureplay-dashboard.png",
      alt: "SecurePlay Parent Dashboard and AI Purchase Guard Interface",
      caption: "Vanguard-4 active parental guard showing real-time behavior analysis, AI face scans, and instant approval triggers.",
    },
    engineeringChallenges: [
      "Ethical Biometric Privacy: Structuring age estimation algorithms to run entirely on the client, avoiding server-side storage of raw facial telemetry.",
      "False Positive Mitigation: Balancing strict parental protections against friction for legitimate adult transactions through composite risk weighting.",
      "Responsive Authorization Flows: Establishing a swift OTP notification and resolution loop between child checkout and parent approval devices.",
    ],
  },
  {
    id: "monsoon",
    slug: "monsoon",
    title: "Monsoon",
    subtitle:
      "Probabilistic Monsoon Forecasting and Agricultural Advisory System",
    category: "Machine Learning / AgTech & Climatology",
    isFlagship: false,
    shortDescription:
      "An end-to-end machine-learning forecasting platform built for Smart India Hackathon 2026. It predicts monsoon events across multiple time horizons and generates agricultural recommendations based on crop and growth stage.",
    fullDescription: [
      "Monsoon is an end-to-end meteorological machine-learning forecasting and agro-advisory platform developed for Smart India Hackathon 2026. Monsoon rains drive agricultural productivity across South Asia, yet unpredictable onsets, prolonged break spells, and localized extreme rainfall routinely jeopardize smallholder yields.",
      "The system incorporates 12 calibrated XGBoost models ingesting 30 atmospheric and oceanographic features to generate probabilistic predictions across 7, 14, 21, and 30-day forecast horizons.",
      "Forecast outputs feed directly into an agricultural advisory engine that pairs localized weather risks with 50+ crop varieties and 6 distinct phenological growth stages, delivering actionable recommendations in English and Hindi alongside automated 12-page technical PDF dossiers.",
    ],
    problemStatement:
      "Standard weather forecasts often provide short-term deterministic weather outlooks that fail to capture the probabilistic risk of monsoon break spells, false onsets, and seasonal transitions vital for crop sowing and irrigation planning.",
    solutionArchitecture: [
      "Feature Engineering Pipeline: Processing 30 meteorological, synoptic, and sea-surface variables.",
      "Ensemble ML Forecasting: 12 discrete XGBoost classification and regression models calibrated using Isotonic Regression.",
      "Decision-Support Advisory Engine: Tailored agro-meteorological rules mapping probabilistic forecasts to specific crops and current growth stages.",
      "Multi-Modal Farmer Interface: Bilingual delivery (English & Hindi) featuring Text-to-Speech (TTS) voice advisories and interactive scenario simulations.",
    ],
    architectureHighlights: [
      {
        label: "Calibrated Probabilistic Forecasts",
        detail:
          "Employs isotonic regression calibration to ensure predicted probabilities match empirical observed frequencies accurately.",
      },
      {
        label: "Granular Agro-Intelligence",
        detail:
          "Rules engine mapping district-level risk forecasts across 50+ crops and 6 distinct crop growth stages.",
      },
      {
        label: "Production-Grade API & Reporting",
        detail:
          "FastAPI microservice generating real-time predictions, interactive weather simulations, and automated 12-page technical PDF dossiers.",
      },
    ],
    keyFeatures: [
      "Predictions for monsoon onset, break spells and heavy rainfall",
      "Four forecasting lead horizons: 7, 14, 21, and 30 days",
      "Twelve XGBoost forecasting models with isotonic calibration",
      "Thirty meteorological and oceanographic features ingested",
      "Agricultural advisory engine supporting 50+ crop varieties",
      "Six distinct crop growth stages for contextual advice",
      "False-onset risk detection to safeguard seasonal sowing",
      "District-level geographical location resolution",
      "English and Hindi accessible interfaces",
      "Text-to-speech audio advisories for rural accessibility",
      "Interactive weather scenario simulation sandbox",
      "Automated 12-page comprehensive technical PDF reporting",
    ],
    metrics: [
      {
        metric: "0.042",
        value: "Brier Score",
        context: "Held-out test Brier Score achieved after isotonic calibration",
      },
      {
        metric: "> 0.88",
        value: "ROC-AUC",
        context: "Onset & break-spell prediction across reported lead horizons",
      },
      {
        metric: "50+",
        value: "Crops Supported",
        context: "Covering 6 phenological growth stages",
      },
      {
        metric: "4",
        value: "Lead Horizons",
        context: "7, 14, 21, and 30-day probabilistic forecasts",
      },
    ],
    technologyStack: {
      frontend: ["React", "Tailwind CSS v4"],
      backend: ["FastAPI", "Python"],
      aiMl: ["XGBoost", "Isotonic Regression", "Scikit-learn"],
    },
    links: {
      github: "https://github.com/PR-REDHAWK/SMART-INDIA-HACKATHON-2026",
      live: "https://smart-india-hackathon-2026.vercel.app",
      docs: "https://monsoon-forcasting.onrender.com/docs",
    },
    screenshot: {
      src: "/images/monsoon-dashboard.png",
      alt: "Monsoon Live Model Intelligence Radar and Regional Advisory Overview",
      caption: "Geospatial radar, 7-day onset probability watch, regional baselines, and model consensus monitoring.",
    },
    engineeringChallenges: [
      "Probability Calibration: Applying isotonic regression to adjust raw boosting outputs so that computed risk percentages reflect real-world precipitation probabilities.",
      "High-Dimensional Climatological Processing: Ingesting and aligning 30 continuous atmospheric and sea-surface parameters across historical seasons.",
      "Multi-Modal Farmer Outreach: Delivering low-latency multilingual advisory summaries with embedded speech synthesis and PDF generation on serverless environments.",
    ],
  },
];

