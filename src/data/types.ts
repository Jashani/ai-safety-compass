export interface Person {
  name: string;
  role: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
}

export type ContentType = "read" | "listen" | "watch";

export interface ContentItem {
  title: string;
  type: ContentType;
  url?: string;
  description?: string;
}

export interface Field {
  name: string;
  slug: string;
  description: string;
  skills: string[];
  people: Person[];
  trajectory: string[];
  projects: Project[];
  content: ContentItem[];
  questions: string[];
}

export interface Background {
  label: string;
  category: string;
  skills: string[];
  showFreetext?: boolean;
}
