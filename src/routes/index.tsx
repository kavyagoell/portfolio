import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, focus } from "@/lib/profile";
import { SectionLabel } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavya Goel — Data Science & AI Portfolio" },
      { name: "description", content: "Computer Science & Data Science student at SRM IST building ML models, dashboards and full-stack apps. Seeking entry-level roles." },
      { property: "og:title", content: "Kavya Goel — Data Science & AI Portfolio" },
      { property: "og:description", content: "ML, analytics and full-stack projects by Kavya Goel. Seeking entry-level opportunities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-surface px-6 pb-10 pt-10 md:px-10 md:pb-14">
          <p aria-hidden className="text-outline-fade pointer-events-none absolute inset-x-0 top-10 select-none text-center text-[18vw] font-extrabold leading-none tracking-tighter md:text-[11rem]">
            ANALYST
          </p>
          <div className="relative grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <div className="order-2 md:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Seeking entry-level opportunities
              </span>
              <p className="mt-6 text-lg text-muted-foreground">Hey, I'm Kavya.</p>
              <h1 className="mt-2 text-4xl font-bold leading-[1.02] md:text-6xl">
                Computer Science & Data Science Student
              </h1>
              <p className="mt-4 text-lg font-medium text-primary">AI, Machine Learning, and Analytics</p>
              <p className="mt-4 max-w-lg text-muted-foreground">
                I build predictive models, interactive dashboards, REST APIs and data-driven applications — hands-on work turning raw data into useful decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground">
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
                {profile.resume ? (
                  <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-medium">
                    <Download className="h-4 w-4" /> Download resume
                  </a>
                ) : (
                  <a href={`mailto:${profile.email}?subject=Resume%20request`} className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-medium" title="Resume file coming soon — request by email">
                    <Download className="h-4 w-4" /> Request resume
                  </a>
                )}
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium">
                  <Mail className="h-4 w-4" /> Contact me
                </Link>
              </div>
            </div>
            <div className="relative order-1 mx-auto w-full max-w-sm md:order-2">
              <div className="bg-arch relative mx-auto flex aspect-[4/5] w-4/5 items-end justify-center overflow-hidden rounded-t-full">
                {/* Replaceable photo placeholder */}
                <span className="mb-[30%] text-7xl font-bold text-primary-foreground/90">KG</span>
              </div>
              <span className="absolute left-0 top-1/3 -rotate-12 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">Machine learning</span>
              <span className="absolute right-0 top-12 rotate-12 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">Data analytics</span>
              <div className="absolute -bottom-4 right-0 flex items-center gap-6 rounded-2xl bg-card px-5 py-4 shadow-soft">
                <p className="text-sm leading-tight text-muted-foreground">CGPA<br />SRM IST</p>
                <p className="text-3xl font-bold">8.74</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[1fr_2fr] md:px-8">
        <SectionLabel>Where I can contribute</SectionLabel>
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            I use data, technology and analytical problem-solving to tackle real-world challenges.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {focus.map((f, i) => (
              <li key={f} className="flex items-center gap-4 rounded-2xl border bg-card p-5">
                <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            Open to entry-level roles, internships and collaborative opportunities.{" "}
            <Link to="/contact" className="font-medium text-primary underline underline-offset-4">Let's talk</Link>
          </p>
        </div>
      </section>
    </>
  );
}
