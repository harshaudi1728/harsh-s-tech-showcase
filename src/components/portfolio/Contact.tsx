import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./About";
import { Mail, MapPin, Github, Linkedin, Code2, Send } from "lucide-react";
import { toast } from "sonner";

const cards = [
  { icon: Mail, label: "Email", value: "harshaudihcya4@gmail.com", href: "mailto:harshaudihcya4@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kanpur, Uttar Pradesh", href: "#" },
  { icon: Github, label: "GitHub", value: "harshaudi1728", href: "https://github.com/harshaudi1728" },
  { icon: Linkedin, label: "LinkedIn", value: "harsh-audichya", href: "https://www.linkedin.com/in/harsh-audichya-387a90420" },
  { icon: Code2, label: "LeetCode", value: "Alphanzo_193", href: "https://leetcode.com/u/Alphanzo_193/" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message ready! Opening your email client…");
      const body = `Hi Harsh,%0D%0A%0D%0A${form.message}%0D%0A%0D%0A— ${form.name} (${form.email})`;
      window.location.href = `mailto:harshaudihcya4@gmail.com?subject=${encodeURIComponent(form.subject || "Hello from your portfolio")}&body=${body}`;
      setSending(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="06 — Contact" title="Let's build something" subtitle="Have an idea, a role, or just want to say hi? My inbox is open." />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {cards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/60 transition-colors group"
              >
                <div className="h-11 w-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent outline-none py-2 text-sm" placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent outline-none py-2 text-sm" placeholder="you@domain.com" />
              </Field>
            </div>
            <Field label="Subject">
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent outline-none py-2 text-sm" placeholder="What's it about?" />
            </Field>
            <Field label="Message">
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent outline-none py-2 text-sm resize-none" placeholder="Tell me a little about your project or opportunity…" />
            </Field>

            <button
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform disabled:opacity-60"
            >
              <Send size={16} /> {sending ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block glass-strong rounded-xl px-4 py-2 focus-within:border-primary/60 transition-colors">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
      {children}
    </label>
  );
}
