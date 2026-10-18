import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteHeader";
import { projects, profile } from "@/lib/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kavya Goel" },
      { name: "description", content: "VIGIL, an AI disaster risk prediction system, and TeamPulse, a MERN collaboration platform." },
      { property: "og:title", content: "Projects — Kavya Goel" },
      { property: "og:description", content: "Machine learning and full-stack projects by Kavya Goel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <SectionLabel>Selected work</SectionLabel>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">Projects built end-to-end.</h1>
      <div className="mt-12 space-y-6">
        {projects.map((p) => (
          <article key={p.name} className="grid gap-8 overflow-hidden rounded-3xl border bg-card p-6 md:grid-cols-[1fr_1.4fr] md:p-10">
            <div className="bg-arch flex flex-col justify-between rounded-2xl p-6 text-primary-foreground">
              <span className="text-6xl font-bold opacity-80">{p.no}</span>
              <div>
                <h2 className="text-4xl font-bold">{p.name}</h2>
                <p className="mt-2 font-medium">{p.subtitle}</p>
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{pt}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{t}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                {profile.github ? (
                  <a href={profile.github} className="font-medium text-primary underline underline-offset-4">Source code on GitHub</a>
                ) : (
                  "Source code and demo links coming soon."
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
