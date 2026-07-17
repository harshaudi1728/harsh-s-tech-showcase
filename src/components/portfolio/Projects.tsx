import { motion } from "motion/react";
import { SectionHeader } from "./About";
import { Github, ExternalLink, Sparkles, BookOpen } from "lucide-react";

const projects = [
  {
    title: "AI-Finwise",
    tag: "AI Finance Management Platform",
    icon: Sparkles,
    desc: "An AI-powered personal finance platform to track expenses, manage budgets, categorize transactions, and gain financial insights. Secure MERN app with auth and a responsive UX.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript"],
    github: "https://github.com/harshaudi1728",
    demo: "#",
  },
  {
    title: "Connected Virtual Library",
    tag: "Full-Stack Web App",
    icon: BookOpen,
    desc: "A modern web app connecting readers with books and digital resources. Users discover, organize, and manage library content through an intuitive interface.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/harshaudi1728",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="04 — Projects" title="Selected work" subtitle="A few things I've built that I'm proud of." />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/60 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-30 animate-gradient" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-2xl glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                    <p.icon size={44} className="text-[color:var(--cyan)]" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-xs font-mono text-muted-foreground glass rounded-full px-3 py-1">
                  {p.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded border border-primary/30 text-[color:var(--cyan)]/90 bg-primary/5">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs font-medium hover:border-primary/60"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-2 text-xs font-medium text-primary-foreground hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
