import { motion } from "framer-motion";
import { profile, stats2, education } from "@/lib/data";
import { GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px mx-auto max-w-6xl">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-gradient-brand leading-[1.05]">
            Crafting ideas into apps
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresher with a builder's mindset, a designer's eye, and an engineer's discipline.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Who I am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-primary/10 grid place-items-center text-primary">
                <GraduationCap size={18} />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Who I Am</span>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              I'm a passionate Flutter Developer and Computer Applications undergraduate who turns ideas
              into elegant, production-ready mobile experiences. I love clean architecture,
              buttery-smooth UI, and shipping apps that genuinely help people.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-6 border-t border-border/50">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">BCA — SSCCS</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{education.period}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold">{profile.location}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Based in</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats 2x2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats2.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl p-6 sm:p-8 text-center flex flex-col justify-center min-h-[140px] sm:min-h-[160px] hover:shadow-glow transition-shadow"
              >
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-brand">
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
