import { useParams, Link } from "react-router-dom";
import { fields } from "@/data/fields";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Headphones, Play } from "lucide-react";
import type { ContentType } from "@/data/types";

const contentTypeIcon: Record<ContentType, typeof BookOpen> = {
  read: BookOpen,
  listen: Headphones,
  watch: Play,
};

const contentTypeLabel: Record<ContentType, string> = {
  read: "Read",
  listen: "Listen",
  watch: "Watch",
};

const FieldDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const field = fields.find((f) => f.slug === slug);

  if (!field) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Field not found.</p>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to all fields
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All fields
        </Link>

        <h1 className="text-2xl font-semibold tracking-tight mb-3">
          {field.name}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed mb-10">
          {field.description}
        </p>

        <Accordion type="multiple" defaultValue={["content", "people", "questions", "projects", "trajectory"]}>
          <AccordionItem value="content">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Read, Listen, Watch
            </AccordionTrigger>
            <AccordionContent>
              {field.content.length === 0 ? (
                <p className="text-sm text-muted-foreground pt-1 leading-relaxed">
                  Coming soon.
                </p>
              ) : (
                <div className="space-y-5 pt-1">
                  {field.content.map((item, i) => {
                    const Icon = contentTypeIcon[item.type];
                    const titleNode = item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    );
                    return (
                      <div key={i}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            {contentTypeLabel[item.type]}
                          </span>
                        </div>
                        <p className="text-sm font-medium mt-1">{titleNode}</p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="people">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Notable People
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-5 pt-1">
                {field.people.map((person) => (
                  <div key={person.name}>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {person.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="questions">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Questions to Explore
            </AccordionTrigger>
            <AccordionContent>
              {field.questions.length === 0 ? (
                <p className="text-sm text-muted-foreground pt-1 leading-relaxed">
                  Coming soon.
                </p>
              ) : (
                <ul className="space-y-3 pt-1">
                  {field.questions.map((q, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="projects">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Project Ideas
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-5 pt-1">
                {field.projects.map((project) => (
                  <div key={project.title}>
                    <p className="text-sm font-medium">{project.title}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trajectory">
            <AccordionTrigger className="text-base font-medium hover:no-underline">
              Trajectory
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pt-1">
                {field.trajectory.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50">
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FieldDetail;
