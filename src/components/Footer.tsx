import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="container-px mx-auto max-w-7xl py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with Flutter-energy.
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} aria-label="GitHub" className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary transition-colors">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary transition-colors">
            <Mail size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 w-10 h-10 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
