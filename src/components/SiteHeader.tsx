import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 md:px-8">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">KG</span>
          Kavya Goel
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "font-semibold text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link to="/contact" className="group flex items-center">
        <span className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-ink-foreground">Get in touch</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-ink-foreground transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
      <nav aria-label="Mobile" className="fixed inset-x-4 bottom-4 z-50 flex justify-around rounded-full bg-card/95 p-2 text-sm shadow-soft backdrop-blur md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="rounded-full px-3 py-2 text-muted-foreground" activeProps={{ className: "bg-primary text-primary-foreground" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-24 pt-12 text-sm text-muted-foreground md:px-8 md:pb-10">
      © {new Date().getFullYear()} Kavya Goel · B.Tech CSE (Data Science), SRM IST Chennai
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <span className="h-2 w-2 rounded-full bg-primary" /> {children}
    </p>
  );
}
