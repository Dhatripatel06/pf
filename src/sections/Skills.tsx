import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Smartphone, Database, Cpu, Palette, Cloud, Code2, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Smartphone, Database, Cpu, Palette, Cloud, Code2,
};

const iconBg: Record<string, string> = {
  Smartphone: "from-sky-500 to-blue-500",
  Database: "from-indigo-500 to-violet-500",
  Cpu: "from-emerald-500 to-teal-500",
  Palette: "from-pink-500 to-rose-500",
  Cloud: "from-cyan-500 to-sky-500",
  Code2: "from-amber-500 to-orange-500",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            My Stack
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-brand leading-[1]">
            Skills &amp; Toolbox
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A balanced mix across mobile, backend, AI and modern web.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            const grad = iconBg[group.icon] ?? "from-primary to-accent";
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative glass-card rounded-3xl p-7 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} grid place-items-center text-white shadow-glow mb-6`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1.5 mb-5">
                    {group.skills.length} Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
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
