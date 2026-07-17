import { motion } from "motion/react";
import { SectionHeader } from "./About";
import {
  Code, Braces, Server, Database, BrainCircuit, Wrench, BookOpen, Users,
} from "lucide-react";

const groups = [
  { title: "Languages", icon: Code, items: ["C", "C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend", icon: Braces, items: ["React.js", "HTML5", "CSS3", "Responsive Design"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { title: "Machine Learning", icon: BrainCircuit, items: ["Pandas", "NumPy"] },
  { title: "Dev Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code"] },
  { title: "Core CS", icon: BookOpen, items: ["DSA", "OOP", "OS", "DBMS", "Networks", "ML"] },
  { title: "Soft Skills", icon: Users, items: ["Leadership", "Team Work", "Communication", "Adaptability", "Problem Solving"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="02 — Skills" title="Tools of the craft" subtitle="A curated stack I use to design, build, and ship." />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center opacity-90 group-hover:opacity-100">
                  <g.icon size={18} className="text-primary-foreground" />
                </div>
                <div className="font-display font-semibold">{g.title}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
