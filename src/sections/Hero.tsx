import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles, Smartphone, Palette } from "lucide-react";
import { profile } from "@/lib/data";

const HeroScene = lazy(() => import("@/components/HeroScene"));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="w-full h-full bg-gradient-hero" />}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
      </div>

      <div className="container-px mx-auto max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
          Available for Flutter & Frontend Developer Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold leading-[0.95] tracking-tighter"
        >
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">Hi, I'm</span>
          <span className="block mt-2 sm:mt-3 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gradient-brand break-words">
            {profile.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium">
            <Smartphone size={16} className="text-primary" />
            Flutter Developer
          </span>
          <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium">
            <Sparkles size={16} className="text-primary" />
            UI/UX Enthusiast
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          I build <span className="text-primary font-medium">beautiful</span> and{" "}
          <span className="text-primary font-medium">scalable</span> mobile apps — blending clean
          architecture, rich animations and AI-powered experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-primary text-primary-foreground text-sm sm:text-base font-medium shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            <Palette size={16} />
            View Projects
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
          >
            
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
