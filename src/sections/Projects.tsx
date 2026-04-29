import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Featured Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-gradient-brand leading-[1.05]">
            Selected Projects
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked apps showcasing my craft in Flutter, Firebase &amp; AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative glass-card rounded-3xl p-6 sm:p-8 overflow-hidden ${
                projects.length % 2 === 1 && i === projects.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />

              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6 flex-wrap">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass grid place-items-center text-2xl sm:text-3xl shrink-0">
                      {p.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl font-bold truncate">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-primary mt-0.5 truncate">{p.subtitle}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/30 whitespace-nowrap">
                    <Award size={11} />
                    {p.award}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed sm:min-h-[80px]">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-3 py-1.5 rounded-full bg-secondary/60 border border-border/50 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-7">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-4 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-4 py-2.5 rounded-full glass hover:bg-secondary font-medium transition-all hover:-translate-y-0.5"
                  >
                    <Github size={13} /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
