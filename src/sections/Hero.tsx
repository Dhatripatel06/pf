import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const HeroScene = lazy(() => import("@/components/HeroScene"));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="w-full h-full bg-gradient-hero" />}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background pointer-events-none" />
      </div>

      <div className="container-px mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Available for Flutter Developer roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tighter"
          >
            Hi, I'm <span className="text-gradient-brand">{profile.name.split(" ")[0]}</span>
            <br />
            <span className="text-gradient">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {profile.tagline}. Crafting clean, performant, and beautifully animated experiences for iOS & Android.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass hover:bg-secondary/80 font-medium transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex items-center gap-8 text-xs text-muted-foreground"
          >
            <div>
              <div className="text-foreground font-display text-2xl font-bold">BCA</div>
              <div>SSCCS · 2023–26</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-foreground font-display text-2xl font-bold">Bhavnagar</div>
              <div>Gujarat, India</div>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-foreground font-display text-2xl font-bold">5+</div>
              <div>Certifications</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
