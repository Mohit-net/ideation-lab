import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";
import { TEAM_MEMBERS } from "../data/content";

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="relative section-padding bg-ink-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-70 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[65rem] h-[32rem] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[45rem] h-[45rem] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <span className="eyebrow mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Meet The Crew
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-5 text-balance">
            Twelve minds.{" "}
            <span className="bg-gradient-to-r from-purple-400 via-brand-400 to-brand-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              One mission.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-400 leading-relaxed max-w-2xl mx-auto">
            Every one of us brings a different superpower. Engineers, designers,
            storytellers, strategists, marketers, and number-crunchers — united
            by one thing: the relentless urge to build things that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="group relative"
            >
              <div
                className={`relative bg-white/[0.04] rounded-2xl border border-white/10 shadow-card-dark transition-all duration-500 p-5 sm:p-6 h-full ${hovered === idx ? "shadow-card-dark-hover -translate-y-1.5 border-purple-400/30" : ""}`}
              >
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-br from-purple-500/20 via-brand-500/10 to-transparent rounded-t-[15px] pointer-events-none" />

                <div className="relative flex flex-col items-center text-center mb-5">
                  <div className="relative mb-4">
                    <div
                      className={`absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-purple-500 to-brand-500 transition-all duration-500 blur-xl ${hovered === idx ? "opacity-40 scale-100" : "opacity-0 scale-90"}`}
                    />
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[1.75rem] overflow-hidden border-4 border-white/10 shadow-card-dark">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-gradient-to-br from-purple-600 to-brand-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-glow-brand">
                      {member.role.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-300 mb-2.5">
                    {member.role}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                    <GraduationCap
                      className="w-3.5 h-3.5 text-ink-400"
                      strokeWidth={2.2}
                    />
                    <span className="text-xs font-medium text-ink-400">
                      {member.department}
                    </span>
                  </div>
                </div>

                <div className="relative border-t border-white/10 pt-5 space-y-4">
                  <p className="text-sm text-ink-400 leading-relaxed line-clamp-3">
                    {member.intro}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-400/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-brand-600 text-white hover:shadow-glow-brand-strong transition-all duration-300 mt-1 hover:-translate-y-0.5"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        Connect on LinkedIn
                      </span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
