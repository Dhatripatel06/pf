import { motion } from "framer-motion";
import { experience, certifications } from "@/lib/data";
import { Briefcase, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">04 — Journey</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient">
            Experience & Recognition.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((e) => (
                <div key={e.role} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-gradient-primary shadow-glow" />
                  <div className="text-sm font-semibold">{e.role}</div>
                  <div className="text-xs text-primary mt-0.5">{e.company}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.period}</div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.stack.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-1 rounded-md bg-secondary/60 border border-border/50 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-secondary border border-border" />
                <div className="text-sm font-semibold">Award · 2nd Rank</div>
                <div className="text-xs text-primary mt-0.5">Flash@SSCCS IT Exhibition</div>
                <div className="text-xs text-muted-foreground mt-1">2024 (AgreeCare) & 2025 (MindHeal)</div>
              </div>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-secondary border border-border" />
                <div className="text-sm font-semibold">Published Research Paper</div>
                <div className="text-xs text-primary mt-0.5">International Journal — Research Matrix</div>
                <div className="text-xs text-muted-foreground mt-1">December 2024</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary">
                <Award size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((c, i) => (
                <motion.a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-secondary/40 border border-border/50 hover:border-primary/40 hover:bg-secondary/60 transition-all"
                >
                  <span className="text-sm">{c.name}</span>
                  <span className="text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">VIEW ↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
