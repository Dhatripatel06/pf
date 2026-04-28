import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">05 — Contact</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-gradient">
            Let's build something great.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Open to internships, freelance, or full-time Flutter roles. I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium break-all">{profile.email}</div>
                </div>
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">{profile.phone}</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium">{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-xl glass hover:bg-secondary grid place-items-center hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-xl glass hover:bg-secondary grid place-items-center hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="w-11 h-11 rounded-xl glass hover:bg-secondary grid place-items-center hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-2 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="mt-2 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Tell me about your project or opportunity…"
                className="mt-2 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elegant transition-all hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} />
              {sending ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
