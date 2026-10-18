import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { SectionLabel } from "@/components/SiteHeader";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kavya Goel" },
      { name: "description", content: "Kavya Goel, B.Tech CSE (Data Science) at SRM IST Chennai, graduating 2027 with a CGPA of 8.74." },
      { property: "og:title", content: "About Kavya Goel" },
      { property: "og:description", content: "Background and education of Kavya Goel, data science and AI student." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_2fr] md:px-8">
      <SectionLabel>About me</SectionLabel>
      <div>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Curious about data, driven by real problems.
        </h1>
        <div className="mt-8 space-y-4 text-lg text-muted-foreground">
          <p>
            I'm a Computer Science Engineering student specializing in Data Science. I'm passionate about using data, technology and analytical problem-solving to address real-world challenges.
          </p>
          <p>
            My hands-on experience spans exploratory data analysis, machine learning algorithms, database management and full-stack web applications — from cleaning raw datasets to shipping dashboards and APIs.
          </p>
        </div>
        <div className="mt-10 rounded-3xl border bg-card p-8 shadow-soft">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h2>
              <p className="text-muted-foreground">SRM Institute of Science and Technology, Chennai</p>
              <dl className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-muted p-4"><dt className="text-sm text-muted-foreground">Expected graduation</dt><dd className="text-2xl font-bold">2027</dd></div>
                <div className="rounded-2xl bg-muted p-4"><dt className="text-sm text-muted-foreground">CGPA</dt><dd className="text-2xl font-bold">8.74</dd></div>
              </dl>
              <a href={profile.resume || `mailto:${profile.email}?subject=Resume%20request`} className="mt-6 inline-block font-medium text-primary underline underline-offset-4">
                {profile.resume ? "Download resume" : "Request my resume by email"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
