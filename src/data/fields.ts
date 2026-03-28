export interface Person {
  name: string;
  role: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Field {
  name: string;
  slug: string;
  description: string;
  skills: string[];
  people: Person[];
  trajectory: string[];
  projects: Project[];
}

export interface Background {
  label: string;
  category: string;
  skills: string[];
  showFreetext?: boolean;
}

export const skillLabels: Record<string, string> = {
  critical_thinking: "Critical thinking",
  research: "Research",
  writing: "Writing",
  communication: "Communication",
  organising: "Organising",
  process_management: "Process management",
  spreadsheets: "Spreadsheets",
  facilitation: "Facilitation",
  visual_communication: "Visual communication",
  social_media: "Social media",
  reading: "Reading",
  admin: "Admin",
  quantitative_analysis: "Quantitative analysis",
  programming: "Programming",
  data_analysis: "Data analysis",
  experimentation: "Experimentation",
  lab_work: "Lab work",
  logical_reasoning: "Logical reasoning",
  engineering: "Engineering",
  design: "Design",
  teaching: "Teaching",
  fieldwork: "Fieldwork",
  policy_analysis: "Policy analysis",
  statistical_modeling: "Statistical modeling",
  ethics: "Ethics",
  negotiation: "Negotiation",
  public_speaking: "Public speaking",
  project_management: "Project management",
  clinical_practice: "Clinical practice",
  red_teaming: "Red-teaming",
  threat_modeling: "Threat modeling",
  stakeholder_management: "Stakeholder management",
  fundraising: "Fundraising",
  safety_culture: "Safety culture",
  translation: "Translation",
  debugging: "Debugging",
  crisis_management: "Crisis management",
  de_escalation: "De-escalation",
};

export const backgrounds: Background[] = [
  { label: "Customer service or support", category: "customer_service", skills: ["communication", "de_escalation", "red_teaming", "critical_thinking"] },
  { label: "Healthcare, nursing, or medicine", category: "healthcare_social", skills: ["clinical_practice", "communication", "research", "ethics", "critical_thinking"] },
  { label: "Social work, counselling, or care", category: "social_work", skills: ["communication", "ethics", "critical_thinking", "facilitation", "crisis_management"] },
  { label: "Teaching or education", category: "education_teaching", skills: ["facilitation", "communication", "organising", "research", "teaching"] },
  { label: "Performing arts, music, or creative", category: "performing_arts", skills: ["communication", "visual_communication", "facilitation", "public_speaking", "writing"] },
  { label: "Military, police, or emergency services", category: "military_emergency", skills: ["threat_modeling", "red_teaming", "crisis_management", "critical_thinking", "organising"] },
  { label: "Sales, business development, or fundraising", category: "sales_fundraising", skills: ["communication", "fundraising", "stakeholder_management", "writing", "negotiation"] },
  { label: "Trades, construction, or manufacturing", category: "trades_manufacturing", skills: ["safety_culture", "engineering", "process_management", "critical_thinking"] },
  { label: "Psychology, therapy, or behavioural science", category: "psychology_therapy", skills: ["research", "experimentation", "critical_thinking", "communication", "ethics"] },
  { label: "HR or people management", category: "hr_management", skills: ["organising", "communication", "process_management", "critical_thinking", "admin"] },
  { label: "Parent or caregiver", category: "parent_caregiver", skills: ["communication", "critical_thinking", "ethics", "organising"] },
  { label: "Agriculture, farming, or environmental science", category: "agriculture_env", skills: ["research", "fieldwork", "critical_thinking", "data_analysis", "engineering"] },
  { label: "Translation or languages", category: "translation_languages", skills: ["translation", "communication", "writing", "critical_thinking", "reading"] },
  { label: "Architecture, design, or urban planning", category: "architecture_design", skills: ["design", "project_management", "visual_communication", "research", "stakeholder_management"] },
  { label: "Law or legal practice", category: "law_legal", skills: ["critical_thinking", "writing", "research", "communication", "policy_analysis"] },
  { label: "Finance, consulting, or business", category: "finance_consulting", skills: ["spreadsheets", "research", "organising", "communication", "quantitative_analysis"] },
  { label: "Operations or management", category: "operations_management", skills: ["organising", "process_management", "communication", "admin", "project_management"] },
  { label: "Communications, writing, or marketing", category: "communications_writing", skills: ["writing", "communication", "social_media", "visual_communication"] },
  { label: "Policy, government, or civil service", category: "policy_government", skills: ["critical_thinking", "research", "writing", "communication", "policy_analysis"] },
  { label: "Philosophy, ethics, or humanities", category: "philosophy_ethics", skills: ["critical_thinking", "reading", "writing", "research", "ethics"] },
  { label: "Mathematics or statistics", category: "mathematics_stats", skills: ["logical_reasoning", "quantitative_analysis", "critical_thinking", "research"] },
  { label: "Physics or physical sciences", category: "physics_sciences", skills: ["quantitative_analysis", "research", "programming", "logical_reasoning", "experimentation"] },
  { label: "Biology, life sciences, or ecology", category: "biology_life", skills: ["research", "lab_work", "experimentation", "critical_thinking", "data_analysis"] },
  { label: "Economics", category: "economics", skills: ["quantitative_analysis", "research", "critical_thinking", "spreadsheets", "writing"] },
  { label: "Computer science or software engineering", category: "computer_science", skills: ["programming", "debugging", "engineering", "logical_reasoning", "data_analysis"] },
  { label: "Engineering (non-software)", category: "engineering_other", skills: ["engineering", "safety_culture", "quantitative_analysis", "project_management", "critical_thinking"] },
  { label: "Something else entirely", category: "other", skills: ["communication"], showFreetext: true },
];

export const fields: Field[] = [
  // ─── HUMANITIES ───
  {
    name: "History",
    slug: "history",
    description: "Historical analysis provides crucial perspective on technological transitions, institutional failures, and how societies manage transformative risks.",
    skills: ["research", "reading", "writing", "critical_thinking", "communication"],
    people: [
      { name: "Sarah E. Igo", role: "Historian of Privacy & Security", description: "Analyzes historical debates over privacy and security from the last 150 years to evaluate the efficacy of modern AI oversight frameworks." },
      { name: "Aaron Mendon-Plasek", role: "Historian of Quantification", description: "Traces how past schemes of quantification influenced contemporary AI design and identifies historical regulatory 'roads not taken.'" },
      { name: "Rebecca Slayton", role: "Historian of Technology & Security", description: "Evaluates prior transformative technologies such as nuclear and biotech to generate lessons for managing current AI national security risks." },
    ],
    trajectory: [
      "Study of past technological revolutions (printing press, nuclear, biotech) reveals patterns in how societies succeed or fail at managing transformative tech.",
      "The '40-year stagnation of wages' from the Industrial Revolution serves as a model for AGI's potential economic impact on labor markets.",
      "Institutional history expertise helps design governance structures for AI that learn from historical precedents and avoid repeating failures.",
      "Comparative historical analysis of arms races and international agreements is directly relevant to AI governance and non-proliferation.",
    ],
    projects: [
      { title: "Historical case studies of technology governance", description: "Analyze how nuclear, biotech, or internet governance developed and extract lessons applicable to AI safety regulation." },
      { title: "Document the history of AI safety as a field", description: "Create a comprehensive historical account of how AI safety thinking evolved, who the key figures were, and what shaped the discourse." },
      { title: "Historical analogy analysis for AI risk", description: "Rigorously evaluate which historical analogies for AI (nuclear, electricity, evolution) are most and least apt, and what each implies for safety." },
    ],
  },
  {
    name: "Philosophy",
    slug: "philosophy",
    description: "Philosophy underpins AI alignment — from defining what we want AI to do, to understanding values, consciousness, and moral reasoning.",
    skills: ["critical_thinking", "reading", "writing", "logical_reasoning", "research", "ethics"],
    people: [
      { name: "Amanda Askell", role: "Researcher, Anthropic", description: "Focuses on 'character training' for AI models to instill traits like curiosity, open-mindedness, and honesty rather than simple rule-following." },
      { name: "Joe Carlsmith", role: "Senior Research Analyst, Open Philanthropy", description: "Evaluates whether advanced AI systems pose an existential risk by investigating the logic of power-seeking and deceptive behavior." },
      { name: "David Chalmers", role: "Professor, NYU", description: "Investigates the 'hard problem' of consciousness as applied to digital minds and the moral status of artificial entities." },
      { name: "Carissa Véliz", role: "Associate Professor, University of Oxford", description: "Researches the ethics of privacy and how AI-driven surveillance can erode human agency and social power." },
    ],
    trajectory: [
      "Ethics and value theory are foundational to defining what 'aligned' AI even means — this is an open philosophical problem.",
      "Developing 'deep' alignment that ensures an AI actually shares human values at a structural level, not just behavioral compliance.",
      "Philosophy of mind directly addresses questions about AI consciousness, moral status, and when we should treat AI systems as moral patients.",
      "Decision theory and rationality research connect directly to how AI agents should reason and make choices safely.",
    ],
    projects: [
      { title: "Analyze value alignment definitions", description: "Survey and critically compare different formal and informal definitions of 'AI alignment' in the literature, identifying gaps and contradictions." },
      { title: "Apply moral uncertainty frameworks to AI", description: "Develop frameworks for how AI systems should behave under moral uncertainty — when we don't know which ethical theory is correct." },
      { title: "Philosophy of AI consciousness", description: "Develop principled criteria for assessing whether AI systems have morally relevant experiences, and what follows if they do." },
    ],
  },
  {
    name: "Linguistics",
    slug: "linguistics",
    description: "Linguistics provides deep understanding of language, meaning, and communication — central to making language models safe and truthful.",
    skills: ["research", "critical_thinking", "reading", "writing", "communication"],
    people: [
      { name: "Emily M. Bender", role: "Professor, University of Washington", description: "Investigates the risks of 'stochastic parrots' and the limitations of large language models in truly understanding meaning." },
      { name: "Yannis Assael", role: "Research Scientist, DeepMind", description: "Uses machine learning models to decipher ancient scripts like Linear A and contextualize damaged inscriptions." },
    ],
    trajectory: [
      "Deep understanding of semantics and pragmatics helps evaluate whether language models genuinely understand or merely pattern-match.",
      "Formal linguistics and grammar theory inform the development of more structured and controllable language generation.",
      "Sociolinguistics expertise helps identify and address biases in how AI systems handle different dialects, languages, and cultural contexts.",
      "Discourse analysis skills are valuable for evaluating AI-generated text for coherence, truthfulness, and manipulation.",
    ],
    projects: [
      { title: "Linguistic analysis of LLM failures", description: "Use linguistic theory to systematically categorize and explain when and why language models produce incoherent, false, or misleading outputs." },
      { title: "Cross-linguistic AI safety evaluation", description: "Test whether AI safety measures (refusals, guardrails) work equally well across languages, or if non-English users face greater risks." },
      { title: "Develop truthfulness benchmarks grounded in linguistics", description: "Create evaluation datasets that use linguistic theory of presupposition, implicature, and pragmatics to test for subtle forms of AI dishonesty." },
    ],
  },
  {
    name: "English Literature & Narratology",
    slug: "english-literature",
    description: "Literary scholarship reveals how narratives shape our understanding of AI — and how AI-generated stories may reshape culture and moral frameworks.",
    skills: ["reading", "writing", "critical_thinking", "research", "communication"],
    people: [
      { name: "Jill Walker Rettberg", role: "Professor, University of Bergen", description: "Leads the AI STORIES project to explore how narrative archetypes in training data shape machine learning outputs and cultural specificity." },
      { name: "G. Kannaiyan", role: "Literary Scholar", description: "Examines posthumanism in contemporary fiction to re-theorize subjectivity and the moral standing of intelligent machines." },
    ],
    trajectory: [
      "Studying 'AI-Borne Mythogenesis' — how machine-authored folklore shapes human moral frameworks and cultural narratives.",
      "Literary analysis skills help decode the implicit values and worldviews embedded in AI-generated text.",
      "Narrative theory informs how AI systems construct persuasive or manipulative stories at scale.",
      "Understanding of genre conventions and tropes helps evaluate how training data biases shape AI creative outputs.",
    ],
    projects: [
      { title: "Analyze narrative patterns in AI-generated fiction", description: "Study what kinds of stories AI systems naturally produce and what values, biases, and cultural assumptions they encode." },
      { title: "Map science fiction's influence on AI development", description: "Trace how specific sci-fi narratives have shaped AI researchers' assumptions about intelligence, risk, and the future." },
      { title: "Develop cultural bias audits for generative text", description: "Create frameworks to detect when AI-generated narratives erase or misrepresent specific cultural traditions and perspectives." },
    ],
  },
  {
    name: "Religious Studies",
    slug: "religious-studies",
    description: "Religious studies brings millennia of ethical reasoning, existential reflection, and cultural understanding to the challenge of governing transformative AI.",
    skills: ["reading", "writing", "critical_thinking", "ethics", "research", "communication"],
    people: [
      { name: "Vincent Bacote", role: "Theologian, Wheaton College", description: "Integrates Christian ethical frameworks into AI safety reflections, focusing on theological anthropology and faith." },
      { name: "Mahan Mirza", role: "Scholar, Religious Voices & Responsible AI", description: "Bridges Islamic theological reflection with AI security expertise through the Religious Voices and Responsible AI effort." },
      { name: "Beth Singler", role: "Researcher, University of Zurich", description: "Researches 'Apocalyptic AI' narratives and how existing religious stories influence the perception and regulation of new technologies." },
    ],
    trajectory: [
      "Millennia of ethical and moral reasoning traditions provide deep frameworks for value alignment that secular philosophy may miss.",
      "Understanding how apocalyptic and messianic narratives shape public perception of AI helps design better communication strategies.",
      "Interfaith dialogue expertise is valuable for building globally inclusive AI governance frameworks.",
      "Theological anthropology raises fundamental questions about human dignity, purpose, and what should not be delegated to machines.",
    ],
    projects: [
      { title: "Map religious perspectives on AI governance", description: "Survey how major religious traditions approach questions of artificial intelligence, consciousness, and moral status." },
      { title: "Analyze 'Apocalyptic AI' narratives in public discourse", description: "Study how religious end-times narratives shape media coverage, policy debates, and public attitudes toward AI risk." },
      { title: "Interfaith AI ethics framework", description: "Develop a shared ethical framework for AI governance drawing on diverse religious and spiritual traditions." },
    ],
  },
  {
    name: "Anthropology",
    slug: "anthropology",
    description: "Anthropology uncovers how cultural assumptions become embedded in AI systems and ensures diverse communities are represented in safety efforts.",
    skills: ["research", "fieldwork", "writing", "critical_thinking", "communication"],
    people: [
      { name: "Diana E. Forsythe", role: "Pioneer in AI Lab Ethnography", description: "Conducted pioneering ethnographic studies of AI labs to uncover how lack of researcher diversity leads to biased technical design." },
      { name: "Lucy Suchman", role: "Professor Emerita, Lancaster University", description: "Advocates for a 'sociotechnical' approach to AI safety that accounts for the social and political impacts of autonomous systems." },
    ],
    trajectory: [
      "Ethnographic methods provide unique insight into how AI labs actually make decisions — essential for improving safety culture.",
      "Cross-cultural research skills help ensure AI safety frameworks don't encode a single culture's values as universal.",
      "Understanding of social organization and power dynamics helps design more equitable AI governance structures.",
      "Exploring 'Synthetic Anthropology' — using AI as a new lens on human behavior while maintaining ethical guardrails.",
    ],
    projects: [
      { title: "Ethnography of AI safety organizations", description: "Conduct ethnographic fieldwork at AI labs or safety organizations to understand their cultures, blind spots, and decision-making processes." },
      { title: "Cross-cultural AI value mapping", description: "Document how different cultures conceptualize intelligence, agency, and moral responsibility, and implications for global AI alignment." },
      { title: "Audit AI training data for cultural representation", description: "Analyze what cultures and perspectives are over- or under-represented in major training datasets and how this affects outputs." },
    ],
  },
  {
    name: "Archaeology",
    slug: "archaeology",
    description: "Archaeology brings methods for recovering lost knowledge and ensuring that AI training data doesn't erase or misrepresent historical cultures.",
    skills: ["research", "fieldwork", "data_analysis", "critical_thinking", "writing"],
    people: [
      { name: "Gabriele Gattiglia", role: "Chair, MAIA Network", description: "Uses archaeology to define the 'data archaeology' needed to recover misrepresented cultures in AI training sets." },
      { name: "Thea Sommerschield", role: "AI & Epigraphy Researcher", description: "Co-developed the Aeneas AI model to interpret ancient inscriptions and restore historical gaps of unknown length." },
      { name: "Iris Kramer", role: "Remote Sensing & AI Researcher", description: "Utilizes AI to analyze satellite and LiDAR data for interconnected archaeological landscapes, promoting safe heritage communication." },
    ],
    trajectory: [
      "Applying FAIR principles (Findable, Accessible, Interoperable, Reusable) to ensure cultural heritage is not erased by the 'statistical conformity' of LLMs.",
      "Data provenance and curation skills from archaeology transfer directly to AI training data quality and representation.",
      "Experience reconstructing incomplete information from fragmentary evidence parallels challenges in AI interpretability.",
      "Heritage preservation ethics inform debates about what knowledge AI systems should and shouldn't have access to.",
    ],
    projects: [
      { title: "Cultural heritage audit of AI training data", description: "Assess how archaeological and historical cultures are represented (or misrepresented) in major AI training datasets." },
      { title: "AI-assisted inscription analysis", description: "Apply AI tools to decipher or reconstruct damaged historical texts while maintaining scholarly rigor and uncertainty quantification." },
      { title: "Data provenance framework for AI", description: "Adapt archaeological data documentation practices to create better provenance tracking for AI training data." },
    ],
  },

  // ─── SOCIAL SCIENCES ───
  {
    name: "Sociology",
    slug: "sociology",
    description: "Sociological perspectives illuminate how AI systems interact with social structures, power dynamics, and collective behavior.",
    skills: ["research", "critical_thinking", "writing", "communication", "reading"],
    people: [
      { name: "Milena Tsvetkova", role: "Associate Professor, LSE", description: "Studies networks of humans and bots as a single adaptive system to identify how automation triggers social contagion and affects cooperation." },
      { name: "Mark Coeckelbergh", role: "Professor, University of Vienna", description: "Investigates the ethics of robotics and the societal shifts caused by human-machine interaction in complex social environments." },
      { name: "Kate Crawford", role: "Research Professor, USC Annenberg", description: "Studies the social and political implications of AI, examining how large-scale AI systems encode and amplify social inequalities." },
    ],
    trajectory: [
      "Understanding social systems and institutions helps design AI governance structures that actually work in practice.",
      "Qualitative research methods are valuable for studying how AI deployment affects real communities.",
      "Expertise in power dynamics and inequality is critical for ensuring AI safety efforts are inclusive and globally aware.",
      "Studying networks of humans and bots as integrated systems reveals how automation triggers social contagion effects.",
    ],
    projects: [
      { title: "Map the AI safety research community", description: "Conduct a sociological network analysis of the AI safety field — who collaborates, what perspectives are missing, where are the gaps." },
      { title: "Study human-bot network dynamics", description: "Analyze how automated accounts and AI agents interact with human social networks and affect cooperation and trust." },
      { title: "Institutional analysis of AI labs", description: "Examine organizational cultures and incentive structures at major AI labs from a sociological perspective." },
    ],
  },
  {
    name: "Political Science",
    slug: "political-science",
    description: "Political science analyzes power, governance, and democratic institutions — all critical for ensuring AI development serves the public interest.",
    skills: ["research", "critical_thinking", "writing", "policy_analysis", "communication"],
    people: [
      { name: "Brian Judge", role: "AI Governance Researcher", description: "Studies the governance of AI and its broader implications for the global political economy and public policy." },
      { name: "Alexandra Cirone", role: "Political Scientist", description: "Investigates how chatbots and automated accounts can bias human political attitudes and democratic discourse." },
    ],
    trajectory: [
      "Investigating the 'Intelligence Curse' — where labor-replacing AI removes state incentives to invest in citizens, paralleling the resource curse.",
      "Understanding democratic theory and institutions helps design AI governance that preserves public accountability.",
      "Electoral politics expertise helps assess and mitigate AI-driven threats to democratic processes.",
      "Comparative politics perspectives reveal how different political systems will respond differently to AI disruption.",
    ],
    projects: [
      { title: "Analyze AI's impact on democratic discourse", description: "Study how AI-generated content and chatbots affect political attitudes, voter behavior, and democratic deliberation." },
      { title: "Model the 'Intelligence Curse'", description: "Develop political economy models of how AI-driven labor displacement could reshape the relationship between states and citizens." },
      { title: "Compare AI governance across political systems", description: "Analyze how democracies, authoritarian states, and international institutions are approaching AI governance differently." },
    ],
  },
  {
    name: "International Relations & Conflict Studies",
    slug: "international-relations",
    description: "International relations expertise is essential for preventing AI arms races, designing treaties, and managing global AI governance.",
    skills: ["research", "writing", "critical_thinking", "negotiation", "policy_analysis", "communication"],
    people: [
      { name: "Robert Trager", role: "Professor, UCLA", description: "Develops international governance agreements and verification methods to ensure AI safety and prevent global arms races." },
      { name: "Joslyn Barnhart", role: "IR Scholar", description: "Researches international AI governance to mitigate risks and ensure the equitable sharing of AI's benefits." },
      { name: "Jade Leung", role: "VP of Safety, OpenAI", description: "Designs evaluations to test frontier models for high-consequence misuse in cyber, biological, or chemical domains." },
    ],
    trajectory: [
      "Arms control and nonproliferation experience directly applies to preventing dangerous AI capability races between nations.",
      "Treaty design and verification expertise is needed for international AI safety agreements.",
      "Crisis management and escalation theory helps model scenarios where AI systems interact in geopolitically unstable environments.",
      "Global governance frameworks from trade, climate, and nuclear domains offer templates for AI governance.",
    ],
    projects: [
      { title: "Design AI non-proliferation frameworks", description: "Develop verification and enforcement mechanisms for international agreements on limiting dangerous AI capabilities." },
      { title: "Model AI-driven geopolitical scenarios", description: "Create scenario analyses of how advanced AI capabilities could shift the balance of power and trigger international crises." },
      { title: "Evaluate existing treaties as AI governance templates", description: "Analyze nuclear, chemical weapons, and climate treaties for lessons applicable to international AI safety cooperation." },
    ],
  },
  {
    name: "Economics",
    slug: "economics",
    description: "Economic thinking helps model incentive structures, market dynamics, and coordination failures relevant to AI governance and deployment.",
    skills: ["critical_thinking", "research", "spreadsheets", "quantitative_analysis", "writing"],
    people: [
      { name: "Dirk Bergemann", role: "Professor, Yale University", description: "Applies mechanism design and information economics to align AI behavior with long-term user preferences." },
      { name: "Stephen Morris", role: "Professor, MIT", description: "Develops economic rules and institutional frameworks to balance AI capability with safety in complex global systems." },
      { name: "Erik Brynjolfsson", role: "Professor, Stanford", description: "Models the impact of AI on productivity to design systems that augment human capabilities rather than replacing them." },
    ],
    trajectory: [
      "Economic modeling of AI labor displacement feeds directly into understanding the urgency and stakes of alignment.",
      "Game theory and mechanism design skills transfer to multi-agent AI safety research and cooperative AI.",
      "Implementing 'Token Taxes' — usage-based surcharges as a sustainable tax base for a post-labor economy.",
      "Understanding of market failures and externalities helps frame why AI safety is systematically underfunded.",
    ],
    projects: [
      { title: "Model economic incentives for AI safety investment", description: "Analyze why firms underinvest in safety research and propose mechanism designs that could correct this market failure." },
      { title: "Design a 'Token Tax' framework", description: "Develop an economic model for usage-based AI taxation to fund social safety nets and public goods in a post-labor economy." },
      { title: "Governance mechanism comparison", description: "Compare regulatory approaches (liability, licensing, auditing) for AI systems using welfare economics frameworks." },
    ],
  },
  {
    name: "Psychology",
    slug: "psychology",
    description: "Psychology informs AI safety through understanding human reasoning, persuasion, bias, and how people interact with AI systems.",
    skills: ["research", "experimentation", "data_analysis", "critical_thinking", "communication"],
    people: [
      { name: "Jon Roozenbeek", role: "Researcher, University of Cambridge", description: "Develops 'prebunking' games and interventions that act as psychological 'vaccines' against AI-generated misinformation." },
      { name: "Sander van der Linden", role: "Professor, University of Cambridge", description: "Researches 'psychological inoculation' to build societal resilience against emotionally manipulative content online." },
      { name: "Jon Bogard", role: "AI Benchmarking Researcher", description: "Benchmarks the research competence of frontier LLMs to evaluate their ability to conduct behavioral science without human oversight." },
    ],
    trajectory: [
      "Understanding persuasion and manipulation is vital for assessing risks from AI systems that can influence human behavior at scale.",
      "Developing 'psychological inoculation' techniques that can protect populations from AI-generated manipulation at scale.",
      "Experimental methodology and study design skills are needed for rigorous AI safety evaluation and benchmarking.",
      "Knowledge of cognitive biases helps identify how AI developers and policymakers might systematically underestimate AI risks.",
    ],
    projects: [
      { title: "Design prebunking interventions for AI misinformation", description: "Create and test psychological 'inoculation' games that build resilience against AI-generated misinformation campaigns." },
      { title: "Benchmark LLM research competence", description: "Evaluate whether frontier AI models can independently conduct rigorous behavioral science research, and what safety implications follow." },
      { title: "AI persuasion risk assessment", description: "Evaluate the persuasive capabilities of current language models and develop psychological frameworks for assessing manipulation risks." },
    ],
  },
  {
    name: "Communications & Journalism",
    slug: "communications-journalism",
    description: "Communications expertise is essential for combating AI-driven disinformation, protecting democratic discourse, and ensuring responsible AI narratives.",
    skills: ["writing", "communication", "critical_thinking", "research", "social_media"],
    people: [
      { name: "Maria Ressa", role: "Nobel Laureate, Rappler", description: "Advocates for democratic protections against AI-driven disinformation and the responsible use of algorithms in news ecosystems." },
      { name: "Elizabeth Stokoe", role: "Professor of Social Interaction", description: "Uses conversation analysis to study how bots influence social interaction and democratic discourse." },
      { name: "Sacha Altay", role: "Misinformation Researcher", description: "Conducts experiments on how labeling content as 'AI-generated' influences perceived accuracy and public trust." },
    ],
    trajectory: [
      "Media literacy expertise is crucial for helping populations distinguish AI-generated content from human communication.",
      "Investigative journalism skills help uncover how AI systems are deployed and their real-world impacts on communities.",
      "Conversation analysis methods reveal how AI bots reshape patterns of social interaction and trust.",
      "Strategic communications skills are needed to effectively convey AI safety concerns to diverse publics.",
    ],
    projects: [
      { title: "Study AI-generated content labeling effects", description: "Design experiments to test how different approaches to labeling AI-generated content affect public trust and behavior." },
      { title: "Develop AI literacy curricula for journalists", description: "Create training materials to help journalists critically evaluate AI-generated content and report on AI safety issues accurately." },
      { title: "Analyze bot influence on public discourse", description: "Use conversation analysis to map how AI-driven accounts shape political and social discussions online." },
    ],
  },
  {
    name: "Criminal Justice",
    slug: "criminal-justice",
    description: "Criminal justice expertise is vital for ensuring AI systems used in policing, sentencing, and surveillance are fair, transparent, and accountable.",
    skills: ["critical_thinking", "research", "writing", "data_analysis", "ethics", "policy_analysis"],
    people: [
      { name: "Brandon Garrett", role: "Professor, Duke University", description: "Advocates for 'glass box AI' in sentencing and evidence, requiring that only interpretable systems be used in the justice system." },
      { name: "Melissa Hamilton", role: "Professor of Law & Criminal Justice", description: "Provides independent reviews of algorithmic risk assessment tools to detect bias against heavily policed communities." },
      { name: "Richard Berk", role: "Professor, University of Pennsylvania", description: "Applies statistical models to ensure that predictive policing and sentencing algorithms are accurate and accountable." },
    ],
    trajectory: [
      "Expertise in due process and civil liberties directly applies to ensuring AI systems respect fundamental rights.",
      "Understanding of systemic bias in policing helps identify and mitigate similar biases in AI risk assessment tools.",
      "Forensic analysis skills transfer to auditing and red-teaming AI systems for fairness and accuracy.",
      "Advocacy for interpretable 'glass box' AI in criminal justice creates precedents applicable to all high-stakes domains.",
    ],
    projects: [
      { title: "Audit algorithmic risk assessment tools", description: "Independently review AI tools used in sentencing or parole decisions for bias, accuracy, and compliance with due process." },
      { title: "Develop 'glass box AI' standards", description: "Create interpretability requirements for AI systems used in criminal justice, adaptable to other high-stakes domains." },
      { title: "Map racial bias in predictive policing algorithms", description: "Analyze how training data from over-policed communities perpetuates discrimination in AI-driven law enforcement tools." },
    ],
  },
  {
    name: "Social Work",
    slug: "social-work",
    description: "Social work brings community-centered approaches to AI safety, ensuring vulnerable populations are protected and empowered.",
    skills: ["communication", "research", "ethics", "critical_thinking", "facilitation", "clinical_practice"],
    people: [
      { name: "Michàlle Mor Barak", role: "Professor, USC", description: "Uses AI and social science principles to identify and predict community resilience in the wake of environmental disasters." },
      { name: "Shinyi Wu", role: "Professor, USC", description: "Brings an engineering approach to social work to develop data-driven models that empower communities to support each other during crises." },
    ],
    trajectory: [
      "Community assessment skills help evaluate how AI deployment affects vulnerable populations in practice.",
      "Crisis intervention expertise is relevant to managing social disruptions caused by rapid AI-driven automation.",
      "Advocacy and empowerment frameworks ensure AI governance includes voices of affected communities.",
      "Data-driven social work models provide templates for using AI to strengthen rather than undermine community resilience.",
    ],
    projects: [
      { title: "Assess AI impact on vulnerable communities", description: "Study how AI-driven automation, content moderation, and algorithmic services affect marginalized populations." },
      { title: "Build community resilience models", description: "Develop data-driven frameworks for predicting and strengthening community resilience against AI-driven economic or social disruption." },
      { title: "Design participatory AI governance", description: "Create frameworks for including affected community voices in decisions about how AI systems are deployed in social services." },
    ],
  },
  {
    name: "Law",
    slug: "law",
    description: "Legal expertise is essential for building governance frameworks, liability structures, and regulatory approaches for AI systems.",
    skills: ["critical_thinking", "writing", "research", "communication", "reading", "policy_analysis"],
    people: [
      { name: "Jonathan Zittrain", role: "Professor, Harvard Law School", description: "Designs frameworks for legal alignment to ensure AI systems are publicly accountable and ethical." },
      { name: "Anka Reuel", role: "PhD Researcher, Stanford HAI", description: "Works on AI policy and governance, developing legal frameworks for responsible AI development and deployment." },
      { name: "Jonas Schuett", role: "Researcher, GovAI, Oxford", description: "Studies legal and regulatory approaches to AI governance, including corporate governance of AI labs and international AI law." },
    ],
    trajectory: [
      "Expertise in regulatory design is critical for creating effective AI governance that actually constrains dangerous development.",
      "International law background helps navigate cross-border AI governance challenges and treaty design.",
      "Liability and tort law knowledge informs who should be responsible when AI systems cause harm.",
      "Tech law and IP experience helps address questions around AI model ownership, training data rights, and deployment restrictions.",
    ],
    projects: [
      { title: "Draft model AI safety legislation", description: "Write sample legislative language for AI safety requirements, drawing on precedents from other regulated industries." },
      { title: "Analyze AI liability frameworks", description: "Compare different legal theories of liability for AI harms and assess which best incentivize safety investment." },
      { title: "International AI governance treaty analysis", description: "Study existing international technology agreements and propose frameworks for international AI safety cooperation." },
    ],
  },

  // ─── NATURAL & PHYSICAL SCIENCES ───
  {
    name: "Physics",
    slug: "physics",
    description: "Physics provides first-principles thinking, mathematical rigor, and models of complex systems essential for understanding AI dynamics and safety.",
    skills: ["quantitative_analysis", "research", "programming", "logical_reasoning", "data_analysis"],
    people: [
      { name: "Max Tegmark", role: "Professor, MIT & Future of Life Institute", description: "Uses physics-based principles to forecast 'intelligence explosions' and mitigate existential risks through the Future of Life Institute." },
      { name: "Surya Ganguli", role: "Professor, Stanford", description: "Develops 'Energy Conserving Descent' to make AI training dynamics more predictable and steerable toward safe solutions." },
      { name: "Eva Silverstein", role: "Professor, Stanford", description: "Works on precision optimization to improve AI predictability and ensure training outcomes follow known probability distributions." },
    ],
    trajectory: [
      "Managing the thermodynamic transition between 'Dialog' and 'Elaboration' modes to prevent model hallucinations.",
      "Physics-based modeling of training dynamics helps predict and control AI system behavior during development.",
      "Statistical mechanics frameworks provide tools for understanding emergent behavior in large neural networks.",
      "Optimization theory from physics directly applies to understanding and improving gradient descent and AI training stability.",
    ],
    projects: [
      { title: "Apply statistical mechanics to neural networks", description: "Use physics models of phase transitions and critical phenomena to understand emergent capabilities and failures in large AI models." },
      { title: "Physics-informed AI training stability", description: "Develop energy conservation principles for training that make AI development more predictable and controllable." },
      { title: "Model 'intelligence explosion' dynamics", description: "Apply dynamical systems theory from physics to model potential recursive self-improvement scenarios and identify safety constraints." },
    ],
  },
  {
    name: "Chemistry & Biochemistry",
    slug: "chemistry",
    description: "Chemistry expertise is critical for understanding AI biosecurity risks and ensuring safe AI applications in molecular and drug design.",
    skills: ["research", "lab_work", "data_analysis", "critical_thinking", "experimentation"],
    people: [
      { name: "Karol Kowalski", role: "Lead, TEC4 Project", description: "Leads the TEC4 project to ensure that AI-driven molecular discovery and chemical processing are auditable and reproducible." },
      { name: "John Jumper", role: "Senior Researcher, DeepMind", description: "Co-developed AlphaFold for protein structure prediction, establishing a foundation for safe, AI-guided drug design." },
      { name: "David Baker", role: "Professor, University of Washington", description: "Uses generative AI to learn the 'biological grammar' of protein design to create entirely new, beneficial molecules." },
    ],
    trajectory: [
      "Understanding chemical synthesis and molecular design helps evaluate AI systems that could enable creation of dangerous substances.",
      "Lab safety culture and risk assessment methodologies transfer well to AI safety frameworks and red-teaming.",
      "Protein structure prediction and generative molecular design are frontier applications where safety and capability intersect.",
      "Cheminformatics experience (molecular modeling, QSAR) translates directly to AI safety evaluation in scientific domains.",
    ],
    projects: [
      { title: "Evaluate chemical AI safety filters", description: "Test and improve filters on AI chemistry tools to prevent generation of dangerous molecule designs while preserving beneficial research utility." },
      { title: "Audit AI drug discovery pipelines", description: "Assess the reproducibility and safety of AI-driven molecular discovery workflows, ensuring they are auditable and transparent." },
      { title: "Chemical safety benchmarks for AI", description: "Create evaluation benchmarks that test whether AI chemistry assistants appropriately refuse dangerous synthesis requests." },
    ],
  },
  {
    name: "Biology",
    slug: "biology",
    description: "Biology expertise is essential for assessing AI biosecurity risks, from pathogen design to food security and ecological system resilience.",
    skills: ["research", "lab_work", "data_analysis", "experimentation", "critical_thinking"],
    people: [
      { name: "Seán Ó hÉigeartaigh", role: "Director, Centre for the Study of Existential Risk", description: "Identifies emerging threats at the intersection of AI, nuclear systems, and biological weapon acquisition." },
      { name: "Asaf Tzachor", role: "Researcher, CSER, University of Cambridge", description: "Researches systemic risks in using AI for global food security, including vulnerabilities to cyber-attacks on commercial farms." },
    ],
    trajectory: [
      "Developing 'Generative Immunoengineering' — computationally creating synthetic immune circuits to counter AI-designed pathogens.",
      "Biosecurity expertise is critical for evaluating whether AI systems could lower barriers to biological weapon development.",
      "Ecological systems thinking helps model cascading risks from AI deployment in agriculture and environmental management.",
      "Understanding of evolutionary dynamics informs theories about how AI systems might develop and adapt in ways that evade safety controls.",
    ],
    projects: [
      { title: "Assess AI biosecurity threat models", description: "Evaluate how AI lowers barriers to biological weapon design and develop mitigation strategies for dual-use biology AI tools." },
      { title: "AI and food security vulnerability analysis", description: "Map systemic risks from AI use in agriculture, including cyber-attack vectors and supply chain dependencies." },
      { title: "Generative immunoengineering safety framework", description: "Develop guidelines for using AI to design synthetic immune responses while preventing misuse for pathogen creation." },
    ],
  },
  {
    name: "Geology & Environmental Science",
    slug: "geology-environmental-science",
    description: "Geology and environmental science bring expertise in modeling complex natural systems, hazard assessment, and infrastructure resilience to AI safety.",
    skills: ["research", "data_analysis", "fieldwork", "critical_thinking", "quantitative_analysis"],
    people: [
      { name: "Paul Cleverley", role: "Geoscience & AI Researcher", description: "Advocates for the pragmatic adoption of AI to reduce uncertainty in geological hazard models and earthquake monitoring." },
      { name: "Ramin Ghiasi", role: "Structural Health Monitoring Researcher", description: "Specializes in AI-powered structural health monitoring for infrastructure resilience against natural hazards." },
    ],
    trajectory: [
      "Experience modeling complex, uncertain natural systems transfers to understanding unpredictable AI system behavior.",
      "Risk assessment frameworks from geological hazard management apply to evaluating and mitigating AI risks.",
      "Environmental monitoring expertise informs the design of AI systems for climate and sustainability that operate safely.",
      "Understanding infrastructure resilience helps ensure AI-dependent critical systems can withstand failures.",
    ],
    projects: [
      { title: "AI for geological hazard prediction", description: "Evaluate and improve AI models for earthquake, landslide, and volcanic activity prediction with focus on uncertainty quantification." },
      { title: "Infrastructure resilience under AI dependency", description: "Assess vulnerabilities in critical infrastructure that increasingly depends on AI systems, and develop fallback strategies." },
      { title: "Environmental AI safety standards", description: "Create guidelines for deploying AI in environmental monitoring that ensure reliability, transparency, and fail-safe operation." },
    ],
  },
  {
    name: "Cognitive Science",
    slug: "cognitive-science",
    description: "Cognitive science provides frameworks for understanding intelligence, decision-making, and how minds work — directly relevant to building safe AI.",
    skills: ["research", "critical_thinking", "experimentation", "data_analysis", "reading"],
    people: [
      { name: "Yoshua Bengio", role: "Professor, Université de Montréal & Mila", description: "Deep learning pioneer now focused on AI safety, drawing on cognitive science insights about consciousness and System 2 reasoning." },
      { name: "Melanie Mitchell", role: "Professor, Santa Fe Institute", description: "Studies concepts, analogy-making, and abstraction in AI systems, applying cognitive science frameworks to understand AI limitations." },
      { name: "Gary Marcus", role: "Professor Emeritus, NYU", description: "Cognitive scientist advocating for hybrid AI architectures that incorporate structured knowledge, arguing current approaches are insufficient for safe AI." },
    ],
    trajectory: [
      "Models of human cognition directly inform AI architectures and help identify what current systems lack for safe behavior.",
      "Understanding cognitive biases helps design AI systems that avoid or compensate for systematic errors in reasoning.",
      "Theories of consciousness and intentionality are increasingly relevant to questions about AI moral status and sentience.",
      "Human factors expertise helps design AI interfaces where humans can effectively oversee AI systems.",
    ],
    projects: [
      { title: "Compare AI and human failure modes", description: "Systematically catalog how AI reasoning failures differ from human cognitive biases, and what this means for safety." },
      { title: "Design human-AI oversight protocols", description: "Apply cognitive science research on attention and decision fatigue to design better human oversight systems for AI." },
      { title: "Evaluate AI understanding vs. pattern matching", description: "Develop tests grounded in cognitive science to distinguish genuine comprehension from sophisticated pattern matching in language models." },
    ],
  },
  {
    name: "Neuroscience",
    slug: "neuroscience",
    description: "Neuroscience offers insights into how biological intelligence works, informing both AI architectures and interpretability research.",
    skills: ["research", "data_analysis", "experimentation", "lab_work", "programming"],
    people: [
      { name: "Chris Olah", role: "Co-founder, Anthropic", description: "Pioneered neural network interpretability by drawing analogies from neuroscience methods for understanding biological neural circuits." },
      { name: "Catherine Olsson", role: "Research Scientist, Anthropic", description: "Transitioned from computational neuroscience to AI safety, working on understanding the internal representations of large language models." },
      { name: "Paul Christiano", role: "Founder, Alignment Research Center", description: "Background in theoretical neuroscience informs his work on alignment techniques like iterated distillation and amplification." },
    ],
    trajectory: [
      "Neural circuit analysis skills transfer directly to mechanistic interpretability — understanding what's happening inside AI models.",
      "Experience with brain imaging and neural data analysis prepares you for probing and analyzing AI system internals.",
      "Understanding biological reward systems informs work on reward modeling and avoiding reward hacking in AI.",
      "Computational neuroscience modeling skills are directly applicable to theoretical AI safety research.",
    ],
    projects: [
      { title: "Apply neuroscience interpretability methods to LLMs", description: "Adapt techniques from neural circuit tracing to map information flow and feature representation in transformer models." },
      { title: "Biological vs. artificial reward systems comparison", description: "Analyze how biological reward circuitry avoids wireheading-like failures and what AI reward systems can learn from this." },
      { title: "Neural correlates of deception", description: "Use neuroscience research on deception detection to develop methods for identifying when AI systems might be producing deceptive outputs." },
    ],
  },
  {
    name: "Mathematics",
    slug: "mathematics",
    description: "Mathematics provides the formal tools needed for rigorous AI safety research — from proving properties of systems to modeling risks.",
    skills: ["logical_reasoning", "quantitative_analysis", "critical_thinking", "research", "programming"],
    people: [
      { name: "Scott Aaronson", role: "Professor, UT Austin", description: "Theoretical computer scientist working on AI safety at OpenAI, bringing rigorous mathematical thinking to alignment problems." },
      { name: "Vanessa Kosoy", role: "Research Associate, MIRI", description: "Develops mathematical frameworks for AI alignment, working on formal theories of embedded agency and learning theory." },
      { name: "John Wentworth", role: "Independent Researcher", description: "Works on mathematical foundations of alignment, particularly natural abstraction and agent foundations using category theory and topology." },
    ],
    trajectory: [
      "Proof-writing and formal verification skills are essential for developing AI systems with guaranteed safety properties.",
      "Probability theory and statistics underpin uncertainty quantification and Bayesian approaches to AI safety.",
      "Topology, category theory, and abstract algebra increasingly appear in cutting-edge alignment theory research.",
      "Optimization theory helps understand and prevent reward hacking and specification gaming in AI systems.",
    ],
    projects: [
      { title: "Formalize an alignment proposal", description: "Take an informal AI safety idea from a blog post or paper and develop a rigorous mathematical formalization, identifying hidden assumptions." },
      { title: "Mathematical models of deceptive alignment", description: "Develop formal models of when and why an AI system might learn to appear aligned during training while pursuing different objectives." },
      { title: "Contribute to formal verification for ML", description: "Work on mathematical methods for proving properties of neural networks, such as robustness bounds or behavioral guarantees." },
    ],
  },

  // ─── APPLIED SCIENCES & ENGINEERING ───
  {
    name: "Nursing",
    slug: "nursing",
    description: "Nursing brings frontline healthcare perspective to AI safety, ensuring AI decision-support tools enhance rather than undermine clinical judgment.",
    skills: ["clinical_practice", "communication", "critical_thinking", "ethics", "research"],
    people: [
      { name: "Ann Wieben", role: "Nursing & AI Literacy Researcher", description: "Fosters AI literacy among nurses and examines how AI decision support tools affect critical thinking and cognitive load." },
      { name: "Gonul Bodur", role: "Qualitative Researcher", description: "Conducts qualitative research on nurses' perspectives to ensure the ethical and practical implementation of AI in hospitals." },
      { name: "Tuba Sengul", role: "Nursing Ethics Researcher", description: "Examines how generative AI tools influence the ethical decision-making process in nursing education using moral behavior frameworks." },
    ],
    trajectory: [
      "Frontline experience with medical decision-making reveals how AI tools actually perform in high-stakes, time-pressured environments.",
      "Patient safety culture and error reporting systems provide models for AI safety incident reporting.",
      "Understanding of cognitive load in clinical settings helps design AI tools that genuinely assist rather than overwhelm practitioners.",
      "Ethical reasoning in life-and-death situations provides grounding for AI systems making consequential decisions.",
    ],
    projects: [
      { title: "Assess AI impact on clinical decision-making", description: "Study how AI decision support tools affect nurses' critical thinking, cognitive load, and patient outcomes in practice." },
      { title: "AI literacy curriculum for healthcare workers", description: "Design training programs to help nurses and clinicians critically evaluate and safely use AI tools in patient care." },
      { title: "Map ethical risks of healthcare AI chatbots", description: "Evaluate the risks of patients using AI chatbots as a 'first opinion' and develop guidelines for safe deployment." },
    ],
  },
  {
    name: "Public Health",
    slug: "public-health",
    description: "Public health expertise ensures AI systems used in healthcare and emergency response are safe, equitable, and effective at scale.",
    skills: ["research", "data_analysis", "communication", "policy_analysis", "statistical_modeling"],
    people: [
      { name: "Charlotte Blease", role: "Researcher, Harvard & Uppsala University", description: "Investigates the risks of healthcare chatbots becoming a 'first opinion' for patients and simplifying medical jargon unsafely." },
      { name: "Nick Watkins", role: "Public Health AI Researcher", description: "Uses LLMs to detect conflicts in public health guidance during emergencies to ensure clear and consistent messaging." },
    ],
    trajectory: [
      "Epidemiological modeling skills transfer to forecasting and managing the spread of AI-related risks across populations.",
      "Experience with public health interventions informs strategies for building societal resilience to AI disruption.",
      "Health equity frameworks help ensure AI deployment in healthcare doesn't exacerbate existing health disparities.",
      "Emergency response expertise is relevant to managing crises triggered by AI system failures or misuse.",
    ],
    projects: [
      { title: "Audit health AI chatbots for safety", description: "Evaluate popular health AI chatbots for medical accuracy, appropriate uncertainty communication, and potential harms to patients." },
      { title: "AI-assisted public health messaging consistency", description: "Develop tools to detect and resolve conflicts in AI-generated public health guidance during emergencies." },
      { title: "Health equity impact assessment for AI tools", description: "Create frameworks for evaluating whether AI health tools serve all populations equitably or amplify existing disparities." },
    ],
  },
  {
    name: "Accounting & Auditing",
    slug: "accounting-auditing",
    description: "Accounting and auditing expertise provides frameworks for transparency, accountability, and oversight directly applicable to AI governance.",
    skills: ["spreadsheets", "critical_thinking", "data_analysis", "organising", "research"],
    people: [
      { name: "Ahmed Elragal", role: "AI Auditing Researcher", description: "Researches agentic AI for financial auditing to solve long-horizon tasks while maintaining human-on-the-loop control." },
      { name: "Danesha Chisholm", role: "Public Sector AI Accountability", description: "Builds frameworks designed to prevent fraud, waste, and abuse in increasingly AI-driven public sector environments." },
      { name: "Othmar Manfred Lehner", role: "Professor of Accounting & Ethics", description: "Explores ethical issues associated with AI-based decision-making in accounting and transfers critical accountability insights to future scenarios." },
    ],
    trajectory: [
      "Audit methodology — systematic evidence gathering, independence, and skepticism — is directly needed for AI system auditing.",
      "Financial control frameworks provide templates for AI oversight and governance structures.",
      "Fraud detection expertise transfers to identifying manipulation, gaming, and deceptive behavior in AI systems.",
      "Public accountability standards from financial regulation offer models for AI transparency requirements.",
    ],
    projects: [
      { title: "Design AI audit standards", description: "Adapt financial audit methodologies to create standardized approaches for auditing AI system behavior, fairness, and safety." },
      { title: "Framework for AI fraud prevention", description: "Apply anti-fraud frameworks to detect and prevent manipulation and gaming by AI-driven agents in financial and public systems." },
      { title: "Human-on-the-loop controls for AI agents", description: "Develop accountability structures for increasingly autonomous AI agents performing long-horizon financial tasks." },
    ],
  },
  {
    name: "Finance & Business Administration",
    slug: "finance-business",
    description: "Finance and business expertise shapes how AI is deployed at scale, with critical implications for safety, labor markets, and corporate governance.",
    skills: ["spreadsheets", "communication", "research", "quantitative_analysis", "organising"],
    people: [
      { name: "Demis Hassabis", role: "CEO, Google DeepMind", description: "Leads DeepMind and Isomorphic Labs, advocating for AI safety research while developing foundational models for financial and scientific domains." },
      { name: "Reid Hoffman", role: "Co-founder, LinkedIn & Inflection AI", description: "Explores the concept of 'Superagency' to empower people through AI in the workplace rather than displacing them." },
      { name: "Mark Cummins", role: "Finance & AI Researcher", description: "Overviews the opportunities that Explainable AI (XAI) offers to enhance financial risk management and simplify compliance." },
    ],
    trajectory: [
      "Corporate governance expertise is needed to ensure AI labs prioritize safety alongside commercial objectives.",
      "Risk management frameworks from finance provide models for assessing and mitigating AI deployment risks.",
      "Understanding of labor markets helps design transition strategies for workers displaced by AI automation.",
      "Explainable AI requirements in finance create precedents for transparency in other high-stakes AI applications.",
    ],
    projects: [
      { title: "Corporate governance reforms for AI labs", description: "Propose governance structures that better align AI lab incentives with safety, drawing on best practices from financial regulation." },
      { title: "Explainable AI for financial risk management", description: "Evaluate and improve interpretability methods for AI systems used in lending, insurance, and investment decisions." },
      { title: "'Superagency' workforce transition models", description: "Design frameworks for using AI to augment rather than replace workers, with concrete implementation strategies." },
    ],
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "Marketing expertise reveals how AI can be used for manipulation and helps develop ethical guidelines for AI-powered persuasion technologies.",
    skills: ["communication", "social_media", "writing", "data_analysis", "visual_communication"],
    people: [
      { name: "Usman Ahmad Qadri", role: "Digital Marketing Ethics Researcher", description: "Studies the dual role of digital literacy in mitigating AI marketing manipulation and unethical young consumer targeting." },
      { name: "Michael Klenk", role: "Ethics & AI Researcher", description: "Sets a design-oriented research agenda for identifying and mitigating deception and manipulation in generative AI." },
      { name: "Mrinalini Choudhary", role: "AI Marketing Ethics Researcher", description: "Highlights ethical concerns about consumer behavioral manipulation and data privacy in AI-powered digital marketing." },
    ],
    trajectory: [
      "Understanding of persuasion techniques helps identify when AI systems cross the line from personalization to manipulation.",
      "Consumer behavior expertise informs assessment of how AI-powered targeting can exploit psychological vulnerabilities.",
      "Digital literacy advocacy provides frameworks for helping populations recognize and resist AI-driven manipulation.",
      "Advertising ethics principles offer guidelines for responsible use of generative AI in commercial contexts.",
    ],
    projects: [
      { title: "Map AI manipulation techniques in marketing", description: "Catalog how generative AI is being used for consumer manipulation and develop detection and mitigation strategies." },
      { title: "Youth protection framework for AI marketing", description: "Design guidelines protecting young consumers from AI-powered targeting and behavioral manipulation." },
      { title: "Ethical AI marketing standards", description: "Develop industry standards for the responsible use of generative AI in advertising and marketing." },
    ],
  },
  {
    name: "Civil Engineering",
    slug: "civil-engineering",
    description: "Civil engineering brings systems thinking and infrastructure resilience expertise to ensuring AI-dependent critical systems remain safe and robust.",
    skills: ["engineering", "quantitative_analysis", "data_analysis", "project_management", "research"],
    people: [
      { name: "Sanjib Sharma", role: "Environmental Engineering & AI Researcher", description: "Integrates AI and big data to improve predictions of lead contamination in drinking water and enhance flood resilience." },
      { name: "Ali Behnood", role: "Sustainable Infrastructure Researcher", description: "Focuses on the next generation of sustainable and resilient infrastructure by optimizing recycled material use with AI." },
      { name: "Liuyun Xu", role: "Structural Simulation Researcher", description: "Introduced a 'multi-fidelity' simulation framework to rapidly predict building responses to rare and severe natural hazards." },
    ],
    trajectory: [
      "Infrastructure safety standards and failure mode analysis directly apply to assessing critical AI system reliability.",
      "Structural resilience thinking helps design AI systems and AI-dependent infrastructure that degrade gracefully.",
      "Environmental engineering expertise informs safe deployment of AI in water, energy, and transportation systems.",
      "Multi-fidelity simulation approaches from civil engineering can test AI systems under rare but catastrophic scenarios.",
    ],
    projects: [
      { title: "AI-dependent infrastructure risk assessment", description: "Identify critical infrastructure systems increasingly reliant on AI and assess cascading failure risks." },
      { title: "Resilience standards for AI in public systems", description: "Develop engineering standards for AI systems deployed in water, energy, and transportation infrastructure." },
      { title: "Multi-fidelity testing for AI safety", description: "Adapt civil engineering simulation approaches to rapidly test AI systems under rare but severe failure conditions." },
    ],
  },
  {
    name: "Education",
    slug: "education",
    description: "Education expertise ensures AI tools used in learning are safe, effective, and preserve academic integrity and critical thinking.",
    skills: ["teaching", "communication", "facilitation", "research", "critical_thinking"],
    people: [
      { name: "Jonathan Jackson", role: "AI in Education Researcher", description: "Explores how agentic AI and generative tools can act as catalysts for learning while maintaining academic integrity." },
      { name: "Kadir Kozan", role: "Instructional Design Researcher", description: "Investigates how professional instructional designers integrate generative AI into their practice to ensure quality and safety." },
    ],
    trajectory: [
      "Pedagogy expertise helps design AI tutoring systems that genuinely develop understanding rather than enabling cheating.",
      "Assessment design skills help create evaluation methods robust to AI-generated submissions.",
      "Understanding of learning science informs how AI training itself could be improved through better training paradigms.",
      "Educational technology experience helps identify when AI tools help vs. hinder genuine learning and skill development.",
    ],
    projects: [
      { title: "AI-resistant assessment design", description: "Develop assessment methods that remain meaningful and valid in a world where students have access to powerful generative AI." },
      { title: "Safe AI tutoring guidelines", description: "Create standards for AI tutoring systems that ensure they develop student understanding rather than creating dependency." },
      { title: "Evaluate AI impact on critical thinking", description: "Study whether widespread use of generative AI in education strengthens or weakens students' critical thinking abilities." },
    ],
  },
  {
    name: "Architecture & Urban Design",
    slug: "architecture-urban-design",
    description: "Architecture and urban design shape how AI is integrated into built environments, smart cities, and physical spaces people inhabit daily.",
    skills: ["design", "engineering", "visual_communication", "research", "project_management"],
    people: [
      { name: "Anshul Jain", role: "Smart City AI Researcher", description: "Utilizes AI in 'Smart City' planning to improve indoor air quality and thermal comfort while ensuring sustainable design." },
      { name: "Hridayesh Varma", role: "Green Building AI Researcher", description: "Researches the architectural design of green buildings for smart cities using AI-driven predictive modeling." },
      { name: "Colleen Morgan", role: "Digital Heritage Researcher", description: "Argues for a critical perspective in using AI for reconstructing ancient worlds to avoid historical misrepresentations." },
    ],
    trajectory: [
      "Smart city design expertise helps ensure AI-driven urban systems are safe, private, and serve all residents equitably.",
      "Environmental design skills inform sustainable and human-centered approaches to AI infrastructure deployment.",
      "Experience with building codes and safety standards provides models for AI system certification and compliance.",
      "Spatial thinking and systems design skills transfer to modeling complex interactions in AI-integrated environments.",
    ],
    projects: [
      { title: "Ethical smart city AI framework", description: "Develop guidelines for deploying AI in urban environments that protect privacy, ensure equity, and maintain democratic oversight." },
      { title: "AI-integrated building safety standards", description: "Create safety standards for buildings increasingly reliant on AI systems for climate control, security, and energy management." },
      { title: "Critical AI heritage reconstruction", description: "Develop methodologies for using AI to reconstruct historical sites that explicitly communicate uncertainty and avoid misrepresentation." },
    ],
  },
  {
    name: "Art",
    slug: "art",
    description: "Artists bring unique skills in communication, imagination, and cultural influence vital for making AI safety tangible and urgent.",
    skills: ["visual_communication", "communication", "writing", "facilitation", "design"],
    people: [
      { name: "Holly Herndon", role: "Artist & Musician", description: "Creates art exploring human-AI collaboration and has been a leading voice on ethical AI use in creative industries." },
      { name: "André Piza", role: "Creative Research Manager", description: "Manages research communities that explore digital twins and human-AI collaborative workflows as a creative medium." },
      { name: "Sunil Manghani", role: "Professor of Visual Culture", description: "Treats human-AI collaboration as a medium to ensure creators remain the final arbiters of ethical and creative integrity." },
    ],
    trajectory: [
      "Visual communication and storytelling skills are desperately needed to convey AI safety concepts to broader audiences.",
      "Speculative design and science fiction thinking help explore possible AI futures and make abstract risks concrete.",
      "Human-AI collaboration as a creative medium provides firsthand insight into AI capabilities and limitations.",
      "Cultural influence through art can shift public understanding and political will around AI safety.",
    ],
    projects: [
      { title: "Visualize AI safety concepts", description: "Create visual explanations, infographics, or interactive art that makes AI alignment concepts accessible to non-technical audiences." },
      { title: "Human-AI collaboration ethics study", description: "Document and analyze collaborative creative workflows between humans and AI to develop principles for maintaining human creative agency." },
      { title: "Design public engagement campaigns", description: "Create art-based campaigns that help communities understand and engage with AI safety issues in their own contexts." },
    ],
  },
  {
    name: "Music & Performing Arts",
    slug: "music-performing-arts",
    description: "Music and performing arts perspectives highlight how AI affects creative rights, cultural authenticity, and the livelihoods of artists worldwide.",
    skills: ["communication", "visual_communication", "critical_thinking", "writing", "facilitation"],
    people: [
      { name: "Deborah Annetts", role: "CEO, Incorporated Society of Musicians", description: "Mobilizes the music sector against the threat generative AI poses to creative rights and calls for fair remuneration." },
      { name: "Kjartan Ólafsson", role: "AI & Music Ethics Advocate", description: "Advocates for ethical AI music frameworks that protect artist rights and maintain cultural authenticity." },
    ],
    trajectory: [
      "Understanding of intellectual property and creative rights directly informs AI training data governance.",
      "Live performance expertise raises questions about authenticity, deepfakes, and AI impersonation in entertainment.",
      "Music industry advocacy provides models for how creative communities can organize around AI safety concerns.",
      "Cultural preservation perspectives ensure AI systems don't homogenize or erase diverse musical traditions.",
    ],
    projects: [
      { title: "AI and creative rights framework", description: "Develop a framework protecting musicians and performers from unauthorized AI replication of their work and style." },
      { title: "Cultural authenticity audit for AI music", description: "Evaluate whether AI music generation tools preserve or homogenize diverse cultural musical traditions." },
      { title: "Fair remuneration models for AI-trained systems", description: "Design compensation models for artists whose work contributes to AI training data." },
    ],
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    description: "Agriculture expertise ensures AI applications in food systems are resilient, secure, and serve global food security rather than undermining it.",
    skills: ["research", "data_analysis", "fieldwork", "critical_thinking", "engineering"],
    people: [
      { name: "Patricia Mathabe", role: "Agroforestry & AI Researcher", description: "Researches how AI innovation can support global food security while integrating trees into farms to enhance resilience." },
      { name: "Naseer Ahmed", role: "Agricultural AI Researcher", description: "Applies AI for large-scale yield forecasting and pest detection to ensure safe food production from farm to fork." },
    ],
    trajectory: [
      "Understanding food supply chains reveals critical vulnerabilities where AI failures could have catastrophic consequences.",
      "Precision agriculture experience provides insight into how AI is deployed in high-stakes, real-world environments.",
      "Agroecology principles inform sustainable approaches to AI deployment that account for complex ecosystem interactions.",
      "Food security expertise helps assess how AI-driven automation affects livelihoods of agricultural communities globally.",
    ],
    projects: [
      { title: "Agricultural AI vulnerability assessment", description: "Map how AI-dependent agricultural systems could be disrupted by cyber-attacks, model failures, or supply chain attacks." },
      { title: "Safe AI yield forecasting standards", description: "Develop reliability and uncertainty standards for AI systems used in crop yield prediction and agricultural planning." },
      { title: "Food security impact analysis of AI automation", description: "Assess how AI automation in agriculture affects food security, livelihoods, and resilience in developing regions." },
    ],
  },
  {
    name: "Kinesiology & Biomechanics",
    slug: "kinesiology-biomechanics",
    description: "Kinesiology and biomechanics establish the physical safety limits for human-robot interaction, essential as AI-powered robots enter workplaces.",
    skills: ["research", "data_analysis", "experimentation", "engineering", "statistical_modeling"],
    people: [
      { name: "Riccardo Zanella", role: "Human-Robot Safety Researcher", description: "Establishes biomechanical limits for human-robot impacts to ensure physical safety in collaborative workspaces." },
      { name: "Federico Califano", role: "Robot Safety Constraints Researcher", description: "Researches safety constraints in physical human-robot interaction to clarify regulatory compliance for 'cobots.'" },
      { name: "Roland Behrens", role: "Biomechanical Limits Researcher", description: "Develops statistical models to determine biomechanical limits for safe physical human-robot interaction." },
    ],
    trajectory: [
      "Establishing physical safety thresholds for human-robot interaction is essential as AI-powered cobots enter more workplaces.",
      "Biomechanical modeling skills help define when AI-controlled systems pose physical risks to humans.",
      "Ergonomics expertise ensures AI-assisted workplaces are designed around human physical capabilities and limitations.",
      "Injury biomechanics knowledge is critical for setting regulatory standards for autonomous and semi-autonomous systems.",
    ],
    projects: [
      { title: "Physical safety standards for AI cobots", description: "Develop biomechanics-based safety standards for collaborative robots in manufacturing, healthcare, and service environments." },
      { title: "Impact testing framework for autonomous systems", description: "Create standardized methods for testing the physical safety of AI-controlled systems that interact with humans." },
      { title: "Ergonomic guidelines for AI-augmented workplaces", description: "Design guidelines ensuring AI-enhanced workspaces account for human physical capabilities and injury prevention." },
    ],
  },
  {
    name: "Aerospace Engineering",
    slug: "aerospace-engineering",
    description: "Aerospace engineering's rigorous approach to safety-critical systems provides essential frameworks for ensuring AI reliability in high-stakes environments.",
    skills: ["engineering", "quantitative_analysis", "programming", "research", "project_management"],
    people: [
      { name: "Grace X. Gao", role: "Professor, Stanford", description: "Develops formal safety methods and navigation systems for autonomous vehicles and lunar surface rovers." },
      { name: "Mykel Kochenderfer", role: "Professor, Stanford", description: "Focuses on robust planning and risk assessment to ensure reliability in safety-critical aerospace systems." },
      { name: "Muhammad Khan", role: "Aircraft AI Certification Researcher", description: "Researches AI for aircraft certification and life-cycle monitoring to enhance health management of onboard systems." },
    ],
    trajectory: [
      "Safety-critical systems engineering provides the most mature frameworks for ensuring AI system reliability.",
      "Formal verification methods from avionics directly apply to proving safety properties of AI systems.",
      "Redundancy and fail-safe design principles from aerospace inform robust AI architecture.",
      "Aviation safety culture — incident reporting, no-blame investigation, continuous improvement — is a model for AI safety culture.",
    ],
    projects: [
      { title: "Adapt DO-178C for AI systems", description: "Translate aerospace software certification standards (DO-178C) into frameworks applicable to AI system safety assurance." },
      { title: "Formal verification for autonomous systems", description: "Develop formal safety proofs for AI-controlled autonomous vehicles and drones, drawing on aerospace methods." },
      { title: "AI safety culture from aviation", description: "Study how aviation's safety culture (incident reporting, investigation, continuous improvement) could be adopted by AI labs." },
    ],
  },
];
