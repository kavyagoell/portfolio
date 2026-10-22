import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, GraduationCap, Linkedin, Github } from "lucide-react";
import { SectionLabel } from "@/components/SiteHeader";
import { profile } from "@/lib/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kavya Goel" },
      { name: "description", content: "Get in touch with Kavya Goel about entry-level roles, internships or collaborations." },
      { property: "og:title", content: "Contact Kavya Goel" },
      { property: "og:description", content: "Email or call Kavya about entry-level data science and software roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}` },
    { icon: GraduationCap, label: "University email", value: profile.uniEmail, href: `mailto:${profile.uniEmail}` },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedin ? "View profile" : "Profile link coming soon", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: profile.github ? "kavyagoell" : "Profile link coming soon", href: profile.github },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <div className="rounded-3xl bg-surface p-8 md:p-14">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Hiring for an entry-level role? Let's talk.</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">I'm open to full-time roles, internships and collaborative opportunities in data, AI and software.</p>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><Icon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block break-all font-medium">{value}</span>
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 rounded-2xl bg-card p-5 transition-shadow hover:shadow-soft focus-visible:outline-2 focus-visible:outline-ring">{inner}</a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl bg-card/60 p-5 opacity-70">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
