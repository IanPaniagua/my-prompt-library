export type Prompt = {
  id: string;
  title: string;
  description?: string;
  prompt: string;
  tags: string[]; // e.g., ['roadmap', 'user-research']
};

export const TAGS = [
  'roadmap',
  'prioritization',
  'user-research',
  'spec-writing',
  'analytics',
  'stakeholders',
  'ideation',
  'competitive',
  'gpt-guardrails',
] as const;

export const PROMPTS: Prompt[] = [
  {
    id: 'roadmap-quarters',
    title: 'Quarterly Roadmap Draft',
    description: 'Generate a balanced roadmap proposal with risks and dependencies.',
    tags: ['roadmap', 'stakeholders'],
    prompt: `You are an experienced Product Manager. Create a quarterly roadmap for the product given the inputs below.
- Product vision: <vision>
- Strategic goals for the quarter: <goals>
- Current team capacity: <capacity>
- Known dependencies: <deps>
- Key risks: <risks>

Requirements:
- Group initiatives by theme.
- For each initiative, include user problem, hypothesis, success metric, rough effort, dependencies, and risks.
- Provide a one-page executive summary.
- End with open questions and assumptions to validate.`,
  },
  {
    id: 'rgrf',
    title: 'RGRF: Research Goal & Result Framework',
    description: 'Structure a lean user research plan and expected outcomes.',
    tags: ['user-research'],
    prompt: `Act as a UX Research partner for a PM. Based on the product area and target user segment below, produce a lean research plan.
Include:
- Research goal (1-2 sentences)
- Top 5 research questions
- Hypotheses to test
- Participant profile & recruiting notes
- Methods (discovery, evaluative, etc.) with rationale
- Risks & ethical considerations
- How insights will affect roadmap/prioritization`,
  },
  {
    id: 'prio-rice',
    title: 'Prioritization with RICE',
    description: 'Turn a feature backlog into a RICE-scored list with notes.',
    tags: ['prioritization', 'analytics'],
    prompt: `You are a PM facilitating a backlog grooming session.
Given a list of candidate features with context (reach, impact, confidence, effort), produce:
- A table with RICE scores and rank order
- Notes explaining trade-offs
- A short recommendation memo to stakeholders
- Alternatives not chosen and why`,
  },
  {
    id: 'spec-min',
    title: 'Minimal Product Spec Outline',
    description: 'Draft a crisp, minimal spec that engineers and design can use.',
    tags: ['spec-writing'],
    prompt: `Create a minimal product spec outline for the feature below.
Include:
- Problem statement, goals, and non-goals
- User stories & acceptance criteria
- Key flows and edge cases
- Metrics (leading/lagging) and launch checklist
- Open questions & rollout plan`,
  },
  {
    id: 'stakeholder-update',
    title: 'Executive Stakeholder Update',
    description: 'Weekly update optimized for brevity and clarity.',
    tags: ['stakeholders'],
    prompt: `Write a concise weekly stakeholder update.
Sections:
- What shipped (bullet list)
- Progress vs. plan
- Risks/blockers (with asks)
- Metrics snapshot
- Next week focus`,
  },
  {
    id: 'competitive-scan',
    title: 'Competitive Landscape Scan',
    description: 'Summarize competitors and differentiate strategy.',
    tags: ['competitive', 'ideation'],
    prompt: `Given a product domain, create a competitive landscape.
Include:
- Top competitors and positioning
- Feature comparison table (top 10 criteria)
- Gaps/opportunities
- Differentiation strategies (near-, mid-, long-term)`,
  },
  {
    id: 'guardrails',
    title: 'AI Prompt Guardrails',
    description: 'Define safe-use guardrails for internal AI tools.',
    tags: ['gpt-guardrails', 'stakeholders'],
    prompt: `Draft guardrails for using generative AI in product workflows.
Cover:
- Data sensitivity & privacy
- Prompt patterns to avoid
- Review/approval processes
- Logging & red-teaming
- Incident response`,
  },
];
