import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import profileAsset from "@/assets/harsh-profile.jpg.asset.json";
const profile = profileAsset.url;

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
];

function useTyping() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setIdx((idx + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-[120px] bg-[color:var(--indigo)]/25" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] bg-[color:var(--cyan)]/20" />

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-[color:var(--cyan)]" />
            <span>Available for opportunities</span>
            <span className="ml-1 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Hello, I'm{" "}
            <span className="gradient-text animate-gradient">Harsh Audichya</span>
          </h1>

          <div className="mt-5 font-mono text-lg sm:text-xl text-muted-foreground min-h-[2rem]">
            <span className="text-[color:var(--cyan)]">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-[color:var(--cyan)] ml-1 align-middle animate-blink" />
          </div>

          <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
            A dedicated software developer specializing in web development and algorithmic
            problem-solving using C++. I build clean, efficient web applications and continuously
            refine my skills in DSA to solve complex technical challenges.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1a56mJMcIuUwrHVSYcUOGqImLK4goCurF/view?usp=sharing"  target="_blank"
                rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/60 transition-colors"
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="https://github.com/harshaudi1728"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full glass hover:border-primary/60 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-audichya-387a90420"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full glass hover:border-primary/60 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <a href="#about" className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground group">
            <span className="h-8 w-8 rounded-full glass flex items-center justify-center group-hover:border-primary/60">
              <ArrowDown size={14} className="animate-bounce" />
            </span>
            Scroll to explore
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full gradient-bg blur-3xl opacity-40 scale-110" />
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-full p-1 gradient-bg animate-gradient">
              <div className="h-full w-full rounded-full bg-background p-2">
                <img
                  src={profile}
                  alt="Harsh Audichya"
                  width={768}
                  height={768}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-2 glass-strong rounded-2xl px-4 py-2 font-mono text-xs"
            >
              <span className="text-[color:var(--cyan)]">const</span> dev = <span className="text-primary">"pro"</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-2 -left-4 glass-strong rounded-2xl px-4 py-2 flex items-center gap-2 text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Building things
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
