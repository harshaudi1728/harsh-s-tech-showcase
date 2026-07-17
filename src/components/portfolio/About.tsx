import { motion } from "motion/react";
import { GraduationCap, Code2, Rocket, GitBranch } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Rocket },
  { label: "Technologies Learned", value: "15+", icon: Code2 },
  { label: "DSA Problems Solved", value: "500+", icon: GitBranch },
  { label: "Open Source PRs", value: "20+", icon: GraduationCap },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="01 — About" title="Curious mind, clean code" />

        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-8"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm an aspiring <span className="gradient-text font-semibold">Software Engineer</span> currently
              pursuing a Bachelor of Technology, driven by a love for building scalable web applications
              and cracking algorithmic puzzles.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I focus on writing clean, maintainable code, contributing to open source, and staying
              close to modern web technologies. Every project is a chance to learn something new and
              ship something useful.
            </p>

            <div className="mt-8 glass-strong rounded-2xl p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary-foreground" size={22} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Education</div>
                <div className="font-semibold mt-1">Bachelor of Technology (B.Tech)</div>
                <div className="text-sm text-muted-foreground">
                  Pranveer Institute of Technology, Kanpur · Expected 2027
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
              >
                <s.icon size={20} className="text-[color:var(--cyan)]" />
                <div className="mt-3 text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl"
    >
      <div className="font-mono text-xs tracking-[0.2em] text-[color:var(--cyan)] uppercase">{kicker}</div>
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}
