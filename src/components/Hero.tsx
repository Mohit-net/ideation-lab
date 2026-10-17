import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Rocket,
  CalendarDays,
  Award,
  Sparkles,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HIGHLIGHT_STATS } from "../data/content";
import teamPhoto from "../assets/photo.jpg";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  rocket: Rocket,
  calendar: CalendarDays,
  award: Award,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-36 bg-ink-950"
    >
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.25] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[60rem] max-w-[160vw] h-[60rem] bg-brand-500/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-accent-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative container-px container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="eyebrow">
                <Sparkles className="w-3.5 h-3.5" />
                NEC 2026 · E-Cell IIT Bombay
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Cohort Active
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.02] tracking-[-0.03em] text-white text-balance mb-6"
            >
              Where Ideas Meet{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Impact.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 120 1 298 5"
                    stroke="url(#underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  <defs>
                    <linearGradient
                      id="underline"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white/80">Ideate. Innovate.</span>{" "}
              <span className="gradient-text-accent">Impact.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-ink-400 leading-relaxed max-w-2xl mb-10"
            >
              <span className="font-semibold text-white">The Ideation Lab</span>{" "}
              is a student-driven team focused on innovation, entrepreneurship,
              and turning ideas into impactful initiatives through the{" "}
              <span className="font-semibold text-brand-300">
                National Entrepreneurship Challenge (NEC)
              </span>{" "}
              by E-Cell, IIT Bombay.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12"
            >
              <a
                href="#nec-journey"
                className="btn-primary group text-base !py-4 !px-7"
              >
                Explore Our Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#team"
                className="btn-secondary group text-base !py-4 !px-7"
              >
                <Users className="w-5 h-5 text-brand-300" />
                Meet the Team
                <ChevronRight className="w-5 h-5 opacity-60" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
            >
              {HIGHLIGHT_STATS.map((stat) => {
                const Icon = iconMap[stat.icon] || Sparkles;
                return (
                  <div
                    key={stat.label}
                    className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-brand-400/30 hover:bg-white/[0.06] hover:shadow-card-dark-hover transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand-500/15 text-brand-300 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 border border-brand-400/20 group-hover:border-transparent">
                        <Icon className="w-4 h-4" strokeWidth={2.2} />
                      </span>
                      <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ink-400 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-brand rounded-[2rem] opacity-25 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-brand rounded-[2rem] opacity-35 animate-pulse-slow" />

              <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 shadow-[0_40px_80px_-32px_rgba(0,0,0,0.9)]">
                <img
                  src={teamPhoto}
                  alt="The Ideation Lab — Team Photo"
                  className="w-full h-[460px] sm:h-[560px] lg:h-[600px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-0 inset-x-0 p-5 sm:p-7"
                >
                  <div className="bg-ink-900/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/10 shadow-soft-dark flex items-center gap-3 sm:gap-4">
                    <div className="relative shrink-0">
                      <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-brand text-white shadow-glow-brand-strong">
                        <GraduationCap
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          strokeWidth={2}
                        />
                      </span>
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent-500 border-2 border-ink-900" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display font-bold text-[15px] sm:text-base text-white leading-tight">
                        National Entrepreneurship Challenge
                      </p>
                      <p className="text-xs sm:text-sm text-ink-400 font-medium">
                        Organized by E-Cell, IIT Bombay · Batch 2026
                      </p>
                    </div>
                    <div className="hidden sm:block shrink-0 h-10 w-px bg-white/10" />
                    <div className="hidden sm:block text-right shrink-0">
                      <p className="font-display font-extrabold text-2xl gradient-text leading-none">
                        NEC
                      </p>
                      <p className="text-xs text-ink-400 font-semibold mt-1">
                        2026
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -top-3 -left-3 sm:-top-5 sm:-left-6 animate-float"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-5 animate-float-slow animate-delay-300"
              >
                <div className="bg-ink-900/80 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-card-dark border border-white/10 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 text-white shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]">
                    <Award className="w-5 h-5" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="text-xs text-ink-400 font-semibold uppercase tracking-wide">
                      Milestones Hit
                    </p>
                    <p className="font-display font-extrabold text-xl text-white leading-none">
                      15+
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink-500 animate-float-slow">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-ink-600 flex items-start justify-center p-1">
          <span className="w-1 h-2 rounded-full bg-brand-400 animate-[float_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
