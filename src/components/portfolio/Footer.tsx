import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="relative py-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          Designed & Developed by <span className="gradient-text font-semibold">Harsh Audichya</span>
          <div className="text-xs mt-1">© {new Date().getFullYear()} — All rights reserved.</div>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com/harshaudi1728", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-audichya-387a90420", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/u/Alphanzo_193/", label: "LeetCode" },
            { icon: Mail, href: "mailto:harshaudihcya4@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-primary/60 hover:text-foreground text-muted-foreground transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition-transform"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
