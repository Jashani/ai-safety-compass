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
};

export const backgrounds: Background[] = [
  { label: "Operations or management", category: "operations_management", skills: ["organising", "process_management", "communication", "admin"] },
  { label: "Communications, writing, or marketing", category: "communications_writing", skills: ["writing", "communication", "social_media", "visual_communication"] },
  { label: "Policy, government, or law", category: "policy_government", skills: ["critical_thinking", "research", "writing", "communication"] },
  { label: "Education or teaching", category: "education_teaching", skills: ["facilitation", "communication", "organising", "research"] },
  { label: "Finance, consulting, or business", category: "finance_consulting", skills: ["spreadsheets", "research", "organising", "communication"] },
  { label: "Design or creative work", category: "design_creative", skills: ["visual_communication", "writing", "communication"] },
  { label: "Philosophy, ethics, or humanities", category: "philosophy_ethics", skills: ["critical_thinking", "reading", "writing", "research"] },
  { label: "Something else entirely", category: "other", skills: ["communication"], showFreetext: true },
];

export const fields: Field[] = [
  {
    name: "Economics",
    slug: "economics",
    description: "Economic thinking helps model incentive structures, market dynamics, and coordination failures relevant to AI governance and deployment.",
    skills: ["critical_thinking", "research", "spreadsheets", "quantitative_analysis", "writing"],
    people: [
      { name: "Anton Korinek", role: "Professor, University of Virginia & Brookings", description: "Researches the macroeconomic implications of AI and how economic policy can shape safe AI development." },
      { name: "Markus Anderljung", role: "Head of Policy, Centre for AI Safety", description: "Works on AI governance policy, applying economic frameworks to regulatory design for advanced AI systems." },
      { name: "Allan Dafoe", role: "Former Head of AI Governance, DeepMind", description: "Studies international relations and strategic dynamics around AI development, drawing heavily on game theory and political economy." },
    ],
    trajectory: [
      "Economic modeling of AI labor displacement feeds directly into understanding the urgency and stakes of alignment.",
      "Game theory and mechanism design skills transfer to multi-agent AI safety research and cooperative AI.",
      "Policy economics background is highly valued in AI governance organizations like GovAI, RAND, and think tanks.",
      "Understanding of market failures and externalities helps frame why AI safety is systematically underfunded.",
    ],
    projects: [
      { title: "Model economic incentives for AI safety investment", description: "Analyze why firms underinvest in safety research and propose mechanism designs that could correct this market failure." },
      { title: "AI labor displacement forecasting", description: "Build economic models projecting how different AI capability timelines affect labor markets, informing urgency of safety work." },
      { title: "Governance mechanism comparison", description: "Compare regulatory approaches (liability, licensing, auditing) for AI systems using welfare economics frameworks." },
    ],
  },
  {
    name: "Sociology",
    slug: "sociology",
    description: "Sociological perspectives illuminate how AI systems interact with social structures, power dynamics, and collective behavior.",
    skills: ["research", "critical_thinking", "writing", "communication", "reading"],
    people: [
      { name: "Kate Crawford", role: "Research Professor, USC Annenberg", description: "Studies the social and political implications of AI, examining how large-scale AI systems encode and amplify social inequalities." },
      { name: "Rumman Chowdhury", role: "CEO, Humane Intelligence", description: "Bridges sociology and AI accountability, leading efforts to create responsible AI auditing practices." },
      { name: "Safiya Umoja Noble", role: "Professor, UCLA", description: "Researches how algorithmic systems reinforce social biases and structural discrimination." },
    ],
    trajectory: [
      "Understanding social systems and institutions helps design AI governance structures that actually work in practice.",
      "Qualitative research methods are valuable for studying how AI deployment affects real communities.",
      "Expertise in power dynamics and inequality is critical for ensuring AI safety efforts are inclusive and globally aware.",
      "Organizational sociology helps understand how AI labs make decisions and how to improve their safety culture.",
    ],
    projects: [
      { title: "Map the AI safety research community", description: "Conduct a sociological network analysis of the AI safety field — who collaborates, what perspectives are missing, where are the gaps." },
      { title: "Study public perception of AI risk", description: "Design and analyze surveys or interviews to understand how different communities perceive AI existential risk." },
      { title: "Institutional analysis of AI labs", description: "Examine organizational cultures and incentive structures at major AI labs from a sociological perspective." },
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
    name: "Chemistry",
    slug: "chemistry",
    description: "Chemistry expertise is critical for understanding AI biosecurity risks and ensuring safe AI applications in scientific domains.",
    skills: ["research", "lab_work", "data_analysis", "critical_thinking", "experimentation"],
    people: [
      { name: "Fabio Urbina", role: "Senior Scientist, Collaborations Pharmaceuticals", description: "Demonstrated how AI drug discovery tools could be repurposed to generate toxic molecules, highlighting dual-use risks." },
      { name: "Kevin Esvelt", role: "Professor, MIT Media Lab", description: "Works at the intersection of biosecurity and AI, studying how AI capabilities in chemistry and biology create catastrophic risk." },
    ],
    trajectory: [
      "Understanding chemical synthesis and molecular design helps evaluate AI systems that could enable creation of dangerous substances.",
      "Lab safety culture and risk assessment methodologies transfer well to AI safety frameworks and red-teaming.",
      "Expertise in materials science is needed to assess AI-driven advances in novel materials that could pose risks.",
      "Cheminformatics experience (molecular modeling, QSAR) translates directly to AI safety evaluation in scientific domains.",
    ],
    projects: [
      { title: "Evaluate chemical AI safety filters", description: "Test and improve filters on AI chemistry tools to prevent generation of dangerous molecule designs while preserving beneficial research utility." },
      { title: "Red-team molecular generation models", description: "Systematically probe AI molecular design systems for dual-use risks, developing better safety guardrails." },
      { title: "Chemical safety benchmarks for AI", description: "Create evaluation benchmarks that test whether AI chemistry assistants appropriately refuse dangerous synthesis requests." },
    ],
  },
  {
    name: "History",
    slug: "history",
    description: "Historical analysis provides crucial perspective on technological transitions, institutional failures, and how societies manage transformative risks.",
    skills: ["research", "reading", "writing", "critical_thinking", "communication"],
    people: [
      { name: "Audrey Kurth Cronin", role: "Director, Carnegie Mellon Institute for Strategy and Technology", description: "Applies historical analysis of transformative technologies (gunpowder, nuclear weapons) to understand AI's strategic implications." },
      { name: "Jason Matheny", role: "CEO, RAND Corporation", description: "Draws on history of existential risk governance to shape contemporary AI policy and safety strategy." },
    ],
    trajectory: [
      "Study of past technological revolutions (printing press, nuclear, biotech) reveals patterns in how societies succeed or fail at managing transformative tech.",
      "Institutional history expertise helps design governance structures for AI that learn from historical precedents.",
      "History of science communication informs how to effectively convey AI safety concerns to policymakers and the public.",
      "Comparative historical analysis of arms races and international agreements is directly relevant to AI governance.",
    ],
    projects: [
      { title: "Historical case studies of technology governance", description: "Analyze how nuclear, biotech, or internet governance developed and extract lessons applicable to AI safety regulation." },
      { title: "Document the history of AI safety as a field", description: "Create a comprehensive historical account of how AI safety thinking evolved, who the key figures were, and what shaped the discourse." },
      { title: "Historical analogy analysis for AI risk", description: "Rigorously evaluate which historical analogies for AI (nuclear, electricity, evolution) are most and least apt, and what each implies for safety." },
    ],
  },
  {
    name: "Art",
    slug: "art",
    description: "Artists bring unique skills in communication, imagination, and cultural influence that are vital for making AI safety tangible and urgent.",
    skills: ["visual_communication", "communication", "writing", "facilitation"],
    people: [
      { name: "Holly Herndon", role: "Artist & Musician", description: "Creates art exploring human-AI collaboration and has been a leading voice on ethical AI use in creative industries." },
      { name: "Stephanie Dinkins", role: "Professor, Stony Brook University", description: "Creates art installations and dialogues exploring AI bias, race, and community impact, making abstract AI concerns visceral." },
    ],
    trajectory: [
      "Visual communication and storytelling skills are desperately needed to convey AI safety concepts to broader audiences.",
      "Speculative design and science fiction thinking help explore possible AI futures and make abstract risks concrete.",
      "Artistic practice in human-AI collaboration provides firsthand insight into AI capabilities and limitations.",
      "Cultural influence through art can shift public understanding and political will around AI safety.",
    ],
    projects: [
      { title: "Visualize AI safety concepts", description: "Create visual explanations, infographics, or interactive art that makes AI alignment concepts accessible to non-technical audiences." },
      { title: "Speculative fiction on AI futures", description: "Write or illustrate narratives exploring realistic AI safety scenarios — both positive and negative — to shift public imagination." },
      { title: "Design public engagement campaigns", description: "Create art-based campaigns that help communities understand and engage with AI safety issues in their own contexts." },
    ],
  },
  {
    name: "Philosophy",
    slug: "philosophy",
    description: "Philosophy underpins AI alignment — from defining what we want AI to do, to understanding values, consciousness, and moral reasoning.",
    people: [
      { name: "Nick Bostrom", role: "Professor, University of Oxford", description: "Philosopher whose work on superintelligence and existential risk fundamentally shaped the field of AI safety." },
      { name: "Toby Ord", role: "Senior Research Fellow, Oxford", description: "Moral philosopher studying existential risk, author of 'The Precipice', advocating for AI safety as a top global priority." },
      { name: "William MacAskill", role: "Professor, University of Oxford", description: "Co-founded effective altruism and argues philosophical frameworks for prioritizing AI safety as a cause area." },
    ],
    trajectory: [
      "Ethics and value theory are foundational to defining what 'aligned' AI even means — this is an open philosophical problem.",
      "Philosophy of mind directly addresses questions about AI consciousness, moral status, and when we should treat AI systems as moral patients.",
      "Formal logic and argumentation training transfers to rigorous AI safety reasoning and research methodology.",
      "Decision theory and rationality research connect directly to how AI agents should reason and make choices safely.",
    ],
    projects: [
      { title: "Analyze value alignment definitions", description: "Survey and critically compare different formal and informal definitions of 'AI alignment' in the literature, identifying gaps and contradictions." },
      { title: "Apply moral uncertainty frameworks to AI", description: "Develop frameworks for how AI systems should behave under moral uncertainty — when we don't know which ethical theory is correct." },
      { title: "Philosophy of AI consciousness", description: "Develop principled criteria for assessing whether AI systems have morally relevant experiences, and what follows if they do." },
    ],
  },
  {
    name: "Mathematics",
    slug: "mathematics",
    description: "Mathematics provides the formal tools needed for rigorous AI safety research — from proving properties of systems to modeling risks.",
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
  {
    name: "Law",
    slug: "law",
    description: "Legal expertise is essential for building governance frameworks, liability structures, and regulatory approaches for AI systems.",
    people: [
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
  {
    name: "Psychology",
    slug: "psychology",
    description: "Psychology informs AI safety through understanding human reasoning, persuasion, bias, and how people interact with AI systems.",
    people: [
      { name: "Michal Kosinski", role: "Professor, Stanford GSB", description: "Studies psychological implications of AI, including how AI systems can infer and influence human psychological traits." },
      { name: "Lisa Sohl", role: "Research Fellow, Centre for Long-Term Resilience", description: "Applies behavioral science and psychology to AI governance, studying how cognitive biases affect AI policy decisions." },
    ],
    trajectory: [
      "Understanding persuasion and manipulation is vital for assessing risks from AI systems that can influence human behavior at scale.",
      "Experimental methodology and study design skills are needed for rigorous AI safety evaluation and benchmarking.",
      "Knowledge of cognitive biases helps identify how AI developers and policymakers might systematically underestimate AI risks.",
      "Clinical psychology perspectives inform understanding of AI-human relationships and dependency risks.",
    ],
    projects: [
      { title: "Study human overreliance on AI systems", description: "Design experiments measuring when and why humans overtrust AI outputs, and develop interventions to calibrate trust appropriately." },
      { title: "Cognitive bias audit of AI safety discourse", description: "Identify systematic cognitive biases (anchoring, scope insensitivity, etc.) that may distort how researchers and policymakers think about AI risk." },
      { title: "AI persuasion risk assessment", description: "Evaluate the persuasive capabilities of current language models and develop psychological frameworks for assessing manipulation risks." },
    ],
  },
  {
    name: "Linguistics",
    slug: "linguistics",
    description: "Linguistics provides deep understanding of language, meaning, and communication — central to making language models safe and truthful.",
    people: [
      { name: "Emily M. Bender", role: "Professor, University of Washington", description: "Computational linguist who critically examines what language models actually understand, advocating for careful claims about AI capabilities." },
      { name: "Adele Goldberg", role: "Professor, Princeton University", description: "Construction grammar researcher whose work on how humans learn and represent language informs debates about AI language understanding." },
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
];
