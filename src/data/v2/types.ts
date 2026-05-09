export type LabelAxis =
  | "domain"
  | "skill"
  | "create_mode"
  | "action"
  | "level"
  | "format"
  | "intent";

export interface Label {
  axis: LabelAxis;
  value: string;
}

export type ContentFormat =
  | "paper"
  | "article"
  | "blog"
  | "video"
  | "podcast"
  | "interactive"
  | "tool"
  | "book"
  | "org"
  | "course";

export type ConsumeType = "read" | "listen" | "watch" | "try";
export type Level = "intro" | "intermediate" | "deep";

export interface Content {
  id: string;
  title: string;
  url: string;
  byline?: string;
  summary: string;
  format: ContentFormat;
  consumeType: ConsumeType;
  level: Level;
  timeMinutes?: number;
  labels: Label[];
}

export interface PersonLink {
  label: string;
  url: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  why: string;
  links: PersonLink[];
  readFirst?: { title: string; url: string };
  labels: Label[];
}

export interface Project {
  id: string;
  title: string;
  blurb: string;
  steps: string[];
  timeEstimate: string;
  labels: Label[];
}

export interface ProduceTemplate {
  id: string;
  title: string;
  prompt: string;
  exampleAngles: string[];
  labels: Label[];
}

export interface CareerResource {
  title: string;
  url: string;
  byline?: string;
  summary?: string;
}

export interface Background {
  id: string;
  label: string;
  blurb: string;
  labels: Label[];
  careerResources?: CareerResource[];
}

export interface LabelDef {
  value: string;
  display: string;
  description?: string;
  category?: string;
}
