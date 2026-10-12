export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  association?: {
    event: string;
    category: string;
    sector: string;
  };
  details?: {
    flowSteps?: string[];
    useCase?: string;
    outcomes?: string[];
  };
}

export interface SkillCategory {
  title: string;
  index: string;
  skills: string[];
}
