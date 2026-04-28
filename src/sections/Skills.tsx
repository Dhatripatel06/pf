import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Smartphone, Server, Brain, Wrench } from "lucide-react";

const icons = [Smartphone, Server, Brain, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">02 — Skills</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient">
            A modern mobile toolkit.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From pixel-perfect Flutter UI to Firebase backends and on-device ML.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative glass-card rounded-3xl p-6 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary/60 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
