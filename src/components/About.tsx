import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Lightbulb,
  Compass,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    icon: Eye,
    tag: "Our Vision",
    tagClass: "eyebrow",
    title: "A boundaryless ecosystem of doers.",
    body: "To cultivate a boundaryless ecosystem where every student transforms ambitious ideas into real-world, impactful ventures.",
    accent: "from-purple-500/20 via-brand-500/10 to-transparent",
    border: "hover:border-purple-400/40",
  },
  {
    icon: Target,
    tag: "Our Mission",
    tagClass: "eyebrow-accent",
    title: "Empower beyond campus walls.",
    body: "To empower students beyond campus walls through hands-on mentorship, experiential learning, and resource access, enabling them to build and execute innovative solutions for societal impact.",
    accent: "from-brand-500/20 via-purple-500/10 to-transparent",
    border: "hover:border-brand-400/40",
  },
  {
    icon: Heart,
    tag: "What We Believe",
    tagClass: "eyebrow",
    title: "Every idea can make a difference.",
    body: "We believe every idea has the potential to make a difference. Through creativity, innovation, and teamwork, we turn ideas into meaningful action — no matter how small the first step feels.",
    accent: "from-purple-500/15 via-brand-500/10 to-transparent",
    border: "hover:border-purple-400/40",
  },
];

const beliefs = [
  "Curiosity beats talent, every single time.",
  "Execution is the only idea that matters.",
  "Fail fast, learn faster, iterate forever.",
  "Community multiplies individual impact.",
  "Real problems deserve real, empathetic solutions.",
  "The best mentors are the ones still learning.",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden bg-ink-950 text-white"
    >
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-70 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-[45rem] h-[45rem] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative container-px container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow mb-5">
                <Compass className="w-3.5 h-3.5" />
                About Us
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-5 text-balance">
                A team built on{" "}
                <span className="bg-gradient-to-r from-purple-400 via-brand-400 to-brand-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  curiosity
                </span>
                ,
                <br /> forged through{" "}
                <span className="bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  action
                </span>
                .
              </h2>
              <p className="text-base sm:text-lg text-ink-400 leading-relaxed max-w-2xl mb-8">
                The Ideation Lab was created to give students a direct platform
                to explore ideas, build real-world entrepreneurial skills, and
                compete at the national level. We are an independent challenge
                task force representing RGIT in NEC 2026 - acting as a
                collaborative sandbox for ambitious campus minds.
              </p>

              <div className="relative rounded-3xl p-px bg-gradient-to-br from-purple-500/40 via-brand-500/20 to-purple-500/40">
                <div className="relative rounded-[calc(1.5rem-1px)] bg-white/[0.03] p-6 sm:p-8 border border-white/10 shadow-card-dark">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-brand-600 text-white shrink-0 shadow-glow-brand">
                      <Lightbulb className="w-6 h-6" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-1">
                        Why we exist
                      </h3>
                      <p className="text-sm text-ink-400 font-medium">
                        Our Origin Story
                      </p>
                    </div>
                  </div>
                  <p className="text-ink-400 leading-relaxed">
                    Great ideas were always present across our campus, but the
                    bridge connecting them to national platforms was missing.
                    Initiated through the E-Cell IIT Bombay Campus Ambassador
                    network, The Ideation Lab was established to close that gap.
                    Bringing together students across Information Technology,
                    Computer Engineering, and EXTC, we formed to represent MCT’s
                    RGIT in the 2026 National Entrepreneurship Challenge. We
                    exist to eliminate execution barriers, promote peer-led
                    problem solving, and prove that student initiatives can
                    create measurable, lasting impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.tag}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`relative group bg-white/[0.04] rounded-2xl border border-white/10 shadow-card-dark transition-all duration-500 hover:shadow-card-dark-hover hover:-translate-y-1 p-7 sm:p-8 overflow-hidden ${p.border}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative grid grid-cols-[auto,1fr] gap-5 items-start">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-purple-500 to-brand-500 opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500" />
                        <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-brand-600 group-hover:border-transparent transition-all duration-500 shadow-soft-dark">
                          <Icon className="w-7 h-7" strokeWidth={2} />
                        </span>
                        <span className="absolute -bottom-1 -right-1 font-display font-black text-[11px] px-1.5 py-0.5 rounded-lg bg-ink-900 border border-white/10 text-purple-300 shadow-soft-dark">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`${p.tagClass} mb-3 !bg-purple-500/10 !border-purple-400/20 !text-purple-300`}
                        >
                          {p.tag}
                        </div>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight mb-2.5 leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-ink-400 leading-relaxed text-[15px]">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white/[0.04] rounded-2xl border border-white/10 shadow-card-dark p-7 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-purple-500/20 via-brand-500/10 to-transparent rounded-full blur-3xl" />
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 tracking-tight flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-400/20 text-purple-300">
                  <Heart className="w-5 h-5" />
                </span>
                Core Values We Live By
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 relative">
                {beliefs.map((b, i) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-purple-400/30 transition-all duration-300"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-brand-500 text-white mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <p className="text-sm text-ink-300 font-medium leading-relaxed pt-0.5">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
