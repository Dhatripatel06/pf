import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { useRef } from "react";

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="group relative glass-card rounded-3xl overflow-hidden"
    >
      {/* Phone mockup preview */}
      <div className={`relative h-64 bg-gradient-to-br ${p.accent} overflow-hidden`}>
        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative w-36 h-64 rounded-[2rem] bg-background border-[6px] border-foreground/80 shadow-elegant overflow-hidden"
            style={{ transform: "translateY(40px)" }}
          >
            <div className="absolute top-0 inset-x-0 h-5 bg-foreground/80" />
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-background" />
            <div className="absolute inset-0 pt-7 px-3">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/30 via-cyan/20 to-brand/30 grid place-items-center">
                <span className="font-display text-xl font-bold text-gradient">{p.title.charAt(0)}</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-foreground/70 bg-background/40 backdrop-blur px-2 py-1 rounded-full">
          {p.tag}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {p.stack.map((s) => (
            <span key={s} className="text-[10px] px-2 py-1 rounded-md bg-secondary/60 border border-border/50 text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-5">
          <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-shadow">
            <ExternalLink size={13} /> Live
          </a>
          <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg glass hover:bg-secondary font-medium">
            <Github size={13} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">03 — Projects</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient">
              Selected Work.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse of the apps and systems I've built — combining clean UI with real-world impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
