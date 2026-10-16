import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-5",
      )}
    >
      <div className="container-px container-max">
        <nav
          className={cn(
            "relative flex items-center justify-between px-4 sm:px-5 rounded-2xl transition-all duration-500",
            scrolled
              ? "bg-ink-950/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]"
              : "bg-transparent",
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-3 pr-4 py-2 group"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/src/assets/logo.png" 
                alt="The Ideation Lab Logo" 
                className="h-full w-auto object-contain brightness-110"
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center leading-tight text-left border-l border-white/10 pl-4 h-10 sm:h-12">
              <span className="font-display font-bold text-[14px] text-white tracking-tight">
                NEC 2026
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-400 font-bold">
                Active Cohort
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 py-3">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                className="relative px-3.5 py-2 rounded-lg text-sm font-medium text-ink-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center py-3 pl-4 ml-2 border-l border-white/10">
            <a
              href="#contact"
              className="btn-primary !py-2.5 !px-5 text-sm group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-3 overflow-hidden rounded-2xl bg-ink-900/85 backdrop-blur-xl border border-white/10 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.9)]"
            >
              <div className="px-3 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-xl text-sm font-medium text-ink-200 hover:bg-brand-500/15 hover:text-brand-200 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full justify-center"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
