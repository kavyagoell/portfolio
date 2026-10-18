import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SiteHeader";
import { skills } from "@/lib/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Kavya Goel" },
      { name: "description", content: "Python, SQL, machine learning, Power BI, MongoDB, React, Node.js, Flask and more." },
      { property: "og:title", content: "Skills — Kavya Goel" },
      { property: "og:description", content: "Programming, analytics, ML/AI, databases, APIs and frontend skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <SectionLabel>Skills</SectionLabel>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">The toolkit I bring to a team.</h1>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="rounded-3xl border bg-card p-6">
            <h2 className="text-lg font-semibold">{g.title}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-muted px-3 py-1.5 text-sm">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
