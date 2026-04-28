import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { profile, stats, education } from "@/lib/data";
import { GraduationCap, MapPin, Mail } from "lucide-react";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">01 — About</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient">
            Designing apps that feel effortless.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{profile.summary}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 lg:col-span-2"
          >
            <h3 className="font-display text-xl font-semibold mb-6">By the numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-brand">
                    <Counter value={s.value} />+
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 space-y-5"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">{education.degree}</div>
                <div className="text-xs text-muted-foreground mt-1">{education.school}</div>
                <div className="text-xs text-muted-foreground">{education.period}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">Based in</div>
                <div className="text-xs text-muted-foreground mt-1">{profile.location}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">Reach me at</div>
                <a href={`mailto:${profile.email}`} className="text-xs text-muted-foreground mt-1 break-all hover:text-primary">
                  {profile.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
