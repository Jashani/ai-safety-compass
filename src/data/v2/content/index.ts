import type { Content, ConsumeType, ContentFormat, Label, Level } from "../types";

import medical from "./medical.json";
import misinformation from "./misinformation.json";
import futureOfWork from "./future-of-work.json";

// Friendly authoring shape used in the per-domain JSON files.
// Editors only need to fill what's relevant; arrays default to empty.
interface RawContent {
  id: string;
  title: string;
  url: string;
  byline?: string;
  summary: string;
  format: ContentFormat;
  consume: ConsumeType;
  level: Level;
  minutes?: number;
  domains?: string[];
  actions?: string[];
  intents?: string[];
  formats?: string[];
  skills?: string[];
}

const expand = (raw: RawContent): Content => {
  const labels: Label[] = [
    ...(raw.domains ?? []).map((value) => ({ axis: "domain" as const, value })),
    ...(raw.actions ?? []).map((value) => ({ axis: "action" as const, value })),
    ...(raw.intents ?? []).map((value) => ({ axis: "intent" as const, value })),
    ...(raw.formats ?? []).map((value) => ({ axis: "format" as const, value })),
    ...(raw.skills ?? []).map((value) => ({ axis: "skill" as const, value })),
  ];
  return {
    id: raw.id,
    title: raw.title,
    url: raw.url,
    byline: raw.byline,
    summary: raw.summary,
    format: raw.format,
    consumeType: raw.consume,
    level: raw.level,
    timeMinutes: raw.minutes,
    labels,
  };
};

const sources: RawContent[][] = [
  medical as RawContent[],
  misinformation as RawContent[],
  futureOfWork as RawContent[],
];

export const content: Content[] = sources.flat().map(expand);
