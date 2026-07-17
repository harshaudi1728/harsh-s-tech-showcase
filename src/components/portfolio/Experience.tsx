import { motion } from "motion/react";
import { SectionHeader } from "./About";
import { Briefcase, GraduationCap, GitPullRequest, Wrench, Layers } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    year: "2024 — Present",
    title: "Software Developer Contributor",
    org: "Independent · Open Source",
    desc: "Contributing to open source projects, fixing bugs, and improving web app performance across the full stack.",
    tag: "Experience",
  },
  {
    icon: GitPullRequest,
    year: "2024",
    title: "Open Source Bug Fixing",
    org: "Various Repositories",
    desc: "Diagnosed and resolved issues in community repositories, submitting reviewed pull requests.",
    tag: "Experience",
  },
  {
    icon: Layers,
    year: "2023 — 2024",
    title: "Full Stack Project Development",
    org: "Personal Projects",
    desc: "Shipped MERN-stack apps end to end — auth, APIs, database design, and responsive UIs.",
    tag: "Experience",
  },
  {
    icon: GraduationCap,
    year: "2023 — 2027",
    title: "Bachelor of Technology",
    org: "Pranveer Institute of Technology, Kanpur",
    desc: "Pursuing B.Tech with focus on software engineering, DSA, and modern web technologies.",
    tag: "Education",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          kicker="05 — Journey"
          title="Experience & Education"
          subtitle="A fresher's roadmap — real work through projects, open source, and study."
        />

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`pl-12 md:pl-0 md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-primary/60 transition-colors">
                    <div className="flex items-center gap-2 text-xs font-mono text-[color:var(--cyan)]">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 border border-primary/30">{it.tag}</span>
                      <span>{it.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold">{it.title}</h3>
                    <div className="text-sm text-muted-foreground">{it.org}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>

                <div className="hidden md:block" />

                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-9 w-9 rounded-full gradient-bg flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <it.icon size={16} className="text-primary-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
