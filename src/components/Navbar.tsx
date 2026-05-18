import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className={`glass rounded-2xl flex items-center justify-between px-5 py-3 transition-all ${scrolled ? "shadow-soft" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logopf.jpeg"
              alt={`${profile.name} logo`}
              className="w-9 h-9 rounded-full object-cover shadow-glow ring-2 ring-primary/30"
            />
            <span className="font-display font-semibold tracking-tight hidden sm:inline">
              DHATRI
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-secondary text-sm"
                >
                  {l.label}
                </a>
              ))}

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
