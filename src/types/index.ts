export type Project = {
  id: number;
  title: string;
  description: {
    summary: string;
    sections: { label: string; content: string }[];
  };
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  accent: string;
  spine: string;
  thickness: number;
  emoji: string;
  period: string;
  team: string;
  contribution: { label: string; pct: number }[];
  performance: { label?: string; value: string }[];
  tags: string[];
};
export type CareerItem = {
  type: 'education' | 'work';
  period: string;
  title: string;
  subtitle: string;
  description: string;
};
export type SkillGroup = { label: string; skills: string[] };
