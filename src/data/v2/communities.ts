export interface Community {
  id: string;
  name: string;
  url: string;
  platform: "Discord" | "Slack" | "Forum" | "Reddit" | "Telegram" | "Other";
  description: string;
  // domain values or background IDs; empty = shown to everyone
  tags: string[];
  featured?: boolean;
}

// Curated subset from aisafety.com/communities.
// featured = shown regardless of profile.
// tags = domain values (labels.ts) or background IDs (backgrounds.ts).
// Discord/Slack servers without stable invite links link to aisafety.com/communities.
export const communities: Community[] = [
  {
    id: "alignment-forum",
    name: "AI Alignment Forum",
    url: "https://www.alignmentforum.org",
    platform: "Forum",
    description: "The main hub where researchers discuss technical alignment ideas. Worth reading even if you never post.",
    tags: [],
    featured: true,
  },
  {
    id: "lesswrong",
    name: "LessWrong",
    url: "https://www.lesswrong.com",
    platform: "Forum",
    description: "Long-form posts on AI safety, rationality, and forecasting. One of the most active written communities in the field.",
    tags: [],
    featured: true,
  },
  {
    id: "alignment-slack",
    name: "AI Alignment Slack",
    url: "https://aisafety.com/communities",
    platform: "Slack",
    description: "Thousands of people working on or interested in AI safety. Channels for introductions, opportunities, and most sub-topics.",
    tags: [],
    featured: true,
  },
  {
    id: "rob-miles-discord",
    name: "Rob Miles AI Safety Discord",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "Welcoming, accessible community built around Rob Miles' YouTube channel. A good first stop if you're new.",
    tags: [],
    featured: true,
  },
  {
    id: "mech-interp-discord",
    name: "Mech Interp Discord",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "Where mechanistic interpretability researchers collaborate on projects and share findings.",
    tags: ["interpretability", "technical_safety", "data_science", "software_engineering"],
  },
  {
    id: "eleutherai",
    name: "EleutherAI",
    url: "https://www.eleuther.ai",
    platform: "Discord",
    description: "Grassroots research collective building and studying open-source AI models with an alignment focus.",
    tags: ["technical_safety", "interpretability", "software_engineering", "data_science"],
  },
  {
    id: "alignment-jams",
    name: "Alignment Jams",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "Community around Apart Research's weekend research sprints. Good way to produce something real quickly alongside others.",
    tags: ["technical_safety", "interpretability", "social_research"],
  },
  {
    id: "control-problem",
    name: "r/ControlProblem",
    url: "https://www.reddit.com/r/ControlProblem/",
    platform: "Reddit",
    description: "Main subreddit for AI safety discussion. Broad scope, good for keeping up with news and debate.",
    tags: [],
  },
  {
    id: "torchbearer",
    name: "Torchbearer",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "For people who want to contact legislators and raise public awareness. Activist-leaning, policy-adjacent.",
    tags: ["policy", "governance", "journalism", "consulting"],
  },
  {
    id: "pauseai",
    name: "PauseAI",
    url: "https://pauseai.info",
    platform: "Discord",
    description: "Activist movement campaigning for a pause on the most dangerous AI development. Local chapters worldwide.",
    tags: ["policy", "governance", "journalism", "marketing"],
  },
  {
    id: "ai-plans",
    name: "AI-Plans",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "Hackathons for alignment and policy problems. Good if you want to ship something alongside others fast.",
    tags: ["technical_safety", "policy", "software_engineering", "entrepreneurship"],
  },
  {
    id: "alignment-ecosystem",
    name: "Alignment Ecosystem Development",
    url: "https://aisafety.com/communities",
    platform: "Discord",
    description: "Connects volunteers to opportunities and builds infrastructure for the field.",
    tags: ["operations", "hr_and_people", "entrepreneurship"],
  },
  {
    id: "careers-ai-safety",
    name: "Careers in AI Safety",
    url: "https://aisafety.com/communities",
    platform: "Other",
    description: "Facebook group for people finding effective career paths into AI safety.",
    tags: ["hr_and_people", "consulting", "operations"],
  },
  {
    id: "base",
    name: "Black in AI Safety and Ethics (BASE)",
    url: "https://aisafety.com/communities",
    platform: "Slack",
    description: "Connecting Black professionals and researchers working in AI safety and ethics.",
    tags: [],
  },
  {
    id: "ai-safety-google-group",
    name: "AI Safety Google Group",
    url: "https://aisafety.com/communities",
    platform: "Other",
    description: "Mailing list for academic posts, grad school opportunities, and training programmes.",
    tags: ["technical_safety", "social_research", "medicine", "education"],
  },
];

// Map each aisafety.com/jobs skill tag to the background IDs most likely to match it.
// Used to suggest filters on the jobs link.
export const jobFiltersByBackground: Record<string, string[]> = {
  software_engineering: ["Software engineering", "Information security"],
  engineering:          ["Software engineering", "Information security"],
  data_science:         ["Research", "Software engineering"],
  product_management:   ["Strategy", "Management", "Outreach"],
  marketing:            ["Outreach", "Management"],
  operations:           ["Operations", "Management"],
  finance:              ["Finance"],
  hr:                   ["Management", "Operations"],
  consulting:           ["Strategy", "Management"],
  entrepreneurship:     ["Strategy", "Software engineering"],
  journalism:           ["Outreach"],
  education:            ["Outreach"],
  medicine:             ["Research"],
  nursing:              ["Research", "Operations"],
  mental_health:        ["Research", "Outreach"],
  social_research:      ["Research"],
  policy:               ["Policy", "Strategy"],
  law:                  ["Legal", "Policy"],
  art:                  ["Outreach"],
  other:                [],
};
