/**
 * Drop-in replacement for the "Today" section in src/pages/Plan.tsx
 *
 * Replaces the existing {hasAnything && <section>…</section>} block (the one
 * with the "Today" heading and the three cards inside `space-y-5`) with this
 * stacked, minimal-noise list. Keeps the same data shape.
 *
 * Tasks render as: small mono label (READ / REACH / MAKE) · title + 1-line
 * description · optional time on the right. No tags, no icons.
 */

import { isPerson } from "@/data/v2/composer";
import type { Content, Person } from "@/data/v2/types";
import { ExternalLink } from "lucide-react";

type ProduceItem = {
  title: string;
  prompt: string;
  exampleAngles: string[];
  timeMinutes: number;
};

const formatMinutes = (mins: number) => {
  if (mins <= 120) return `${mins} MIN`;
  if (mins <= 480) {
    const hours = Math.round((mins / 60) * 2) / 2;
    return `${hours % 1 === 0 ? hours.toFixed(0) : hours} H`;
  }
  const days = Math.round((mins / 480) * 2) / 2;
  return `${days % 1 === 0 ? days.toFixed(0) : days} D`;
};

const taskTime = (c: Content) =>
  c.timeMinutes ? formatMinutes(c.timeMinutes) : "";

const consumeLabel = (c: Content) => {
  if (c.consumeType === "listen") return "LISTEN";
  if (c.consumeType === "watch") return "WATCH";
  if (c.consumeType === "try") return "TRY";
  return "READ";
};

const Row = ({
  label,
  meta,
  title,
  body,
  href,
  isLast,
}: {
  label: string;
  meta?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  href?: string;
  isLast?: boolean;
}) => (
  <div
    className={`grid grid-cols-[64px_1fr_auto] gap-4 items-baseline px-5 py-[18px] ${
      isLast ? "" : "border-b border-border/60"
    }`}
  >
    <p className="font-mono text-[10.5px] tracking-[0.2em] text-accent font-medium pt-1">
      {label}
    </p>
    <div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-[16px] font-medium leading-snug tracking-[-0.01em] hover:underline inline-flex items-center gap-1.5"
        >
          {title}
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
        </a>
      ) : (
        <p className="text-[16px] font-medium leading-snug tracking-[-0.01em] m-0">
          {title}
        </p>
      )}
      <div className="text-[13px] text-muted-foreground leading-[1.5] mt-1">
        {body}
      </div>
    </div>
    <p className="font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground/80 pt-1 whitespace-nowrap">
      {meta || ""}
    </p>
  </div>
);

export const TodayStack = ({
  todayConsume,
  todayDoOrTry,
  todayProduce,
}: {
  todayConsume?: Content;
  todayDoOrTry?: Content | Person;
  todayProduce?: ProduceItem;
}) => {
  const rows: React.ReactNode[] = [];

  if (todayConsume) {
    rows.push({
      label: consumeLabel(todayConsume),
      meta: taskTime(todayConsume),
      title: todayConsume.title,
      body: todayConsume.summary,
      href: todayConsume.url,
      key: "read",
    });
  }

  if (todayDoOrTry) {
    if (isPerson(todayDoOrTry)) {
      rows.push({
        label: "REACH",
        meta: "15 MIN",
        title: todayDoOrTry.name,
        body: todayDoOrTry.why,
        href: todayDoOrTry.links[0]?.url,
        key: "reach",
      });
    } else {
      const c = todayDoOrTry as Content;
      rows.push({
        label: "TRY",
        meta: taskTime(c),
        title: c.title,
        body: c.summary,
        href: c.url,
        key: "try",
      });
    }
  }

  if (todayProduce) {
    rows.push({
      label: "MAKE",
      meta: formatMinutes(todayProduce.timeMinutes),
      title: todayProduce.title,
      body: (
        <>
          {todayProduce.prompt}
          {todayProduce.exampleAngles.length > 0 && (
            <>
              <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/80 mt-3 mb-1.5">
                Angles
              </span>
              <ul className="space-y-1">
                {todayProduce.exampleAngles.map((a, i) => (
                  <li
                    key={i}
                    className="pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      ),
      key: "make",
    });
  }

  if (rows.length === 0) return null;

  return (
    <section className="mb-12">
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3.5">
        Today
      </p>
      <div className="bg-card border border-border">
        {rows.map((r: any, i) => (
          <Row {...r} isLast={i === rows.length - 1} />
        ))}
      </div>
    </section>
  );
};
