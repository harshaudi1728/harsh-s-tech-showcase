import { motion } from "motion/react";
import { SectionHeader } from "./About";
import { Layers, Palette, Server, Database, Cable, Gauge } from "lucide-react";

const services = [
  { icon: Layers, title: "Full Stack Web Development", desc: "Complete, scalable web apps end-to-end with modern MERN tooling." },
  { icon: Palette, title: "Frontend Development", desc: "Responsive, accessible, and delightful React interfaces." },
  { icon: Server, title: "Backend Development", desc: "Secure APIs, authentication, and scalable server architectures." },
  { icon: Database, title: "Database Management", desc: "Efficient schema design with MongoDB and MySQL." },
  { icon: Cable, title: "REST API Development", desc: "Robust APIs built on Node.js and Express.js." },
  { icon: Gauge, title: "Performance Optimization", desc: "Speed, responsiveness, and scalability tuning." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="03 — Services" title="What I can build for you" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), oklch(0.68 0.19 275 / 0.15), transparent 40%)" }} />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl glass-strong flex items-center justify-center">
                  <s.icon size={20} className="text-[color:var(--cyan)]" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
