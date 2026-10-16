import { motion } from 'framer-motion';
import { Flag, CheckSquare, ArrowRight, Award, CalendarDays, Rocket } from 'lucide-react';
import { NEC_MILESTONES } from '../data/content';
import { cn } from '../lib/utils';

const stageIcons = [Flag, Rocket, CheckSquare, Award, Flag, Rocket, Award];

export default function NECJourney() {
  return (
    <section id="nec-journey" className="relative section-padding bg-ink-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-brand-600/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50rem] h-[40rem] bg-accent-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-semibold uppercase tracking-[0.08em] mb-5">
            <CalendarDays className="w-3.5 h-3.5" />
            NEC 2026 · The Journey
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.05] tracking-tight text-white text-balance mb-5">
            Every milestone. <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Every lesson earned.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            From a small idea in a classroom to the national stage at E-Cell IIT Bombay — trace our NEC 2026 journey, the challenges we overcame, and the moments that shaped us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2 bg-gradient-to-b from-brand-400/50 via-accent-400/30 to-transparent" />

          <ol className="relative space-y-12 sm:space-y-20">
            {NEC_MILESTONES.map((milestone, idx) => {
              const Icon = stageIcons[idx] || Flag;
              const isEven = idx % 2 === 0;

              return (
                <motion.li
                  key={milestone.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 lg:gap-20 items-start">
                    <div
                      className={cn(
                        'relative sm:pr-12 lg:pr-20',
                        isEven ? 'sm:order-1 sm:text-right' : 'sm:order-2 sm:col-start-2 sm:pl-12 lg:pl-20'
                      )}
                    >
                      <div
                        className={cn(
                          'relative ml-14 sm:ml-0 card border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-7 hover:bg-white/[0.05] hover:border-brand-400/30 transition-all duration-500',
                          isEven ? 'sm:mr-0' : 'sm:ml-0'
                        )}
                      >
                        <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:justify-start" style={{ justifyContent: isEven ? undefined : 'flex-start' }}>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
                            Step {milestone.step}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/15 border border-accent-400/30 text-accent-300 text-xs font-semibold">
                            <CalendarDays className="w-3 h-3" strokeWidth={2.4} />
                            {milestone.date}
                          </span>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl sm:text-[28px] text-white tracking-tight mb-3 leading-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-ink-300 leading-relaxed mb-5">
                          {milestone.description}
                        </p>

                        <div className="space-y-2.5">
                          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink-400 mb-3">
                            Key Highlights
                          </p>
                          <ul className={cn('space-y-2', isEven ? 'sm:items-end sm:flex sm:flex-col' : '')}>
                            {milestone.highlights.map((h) => (
                              <li
                                key={h}
                                className={cn(
                                  'inline-flex items-start gap-2.5 text-sm text-ink-200 group/item',
                                  isEven ? 'sm:flex-row-reverse sm:text-right' : ''
                                )}
                              >
                                <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded-md bg-gradient-brand text-white">
                                  <ArrowRight className={cn('w-3 h-3', isEven ? 'sm:rotate-180' : '')} strokeWidth={3} />
                                </span>
                                <span className="font-medium leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 z-10',
                        isEven ? 'sm:static sm:order-2 sm:translate-x-0 sm:justify-start sm:pl-0 sm:top-0' : 'sm:static sm:order-1 sm:row-start-1 sm:justify-end sm:pr-0'
                      )}
                    >
                      <div className="relative hidden sm:flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-40 animate-pulse-slow scale-75" />
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-[0_0_60px_-15px_rgba(139,92,246,0.6)] border-2 border-white/20">
                          <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                        </div>
                        <div className="absolute -inset-4 rounded-[1.75rem] border border-dashed border-white/15 animate-[spin_20s_linear_infinite]" />
                      </div>
                    </div>
                  </div>

                  <div className="sm:hidden absolute left-4 -translate-x-1/2 top-8 z-10">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-brand blur-lg opacity-40 animate-pulse-slow" />
                      <div className="relative w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-brand border-2 border-white/30">
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-20 sm:mt-28"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative rounded-[2rem] p-px bg-gradient-to-br from-brand-400/40 via-accent-400/40 to-brand-400/40 overflow-hidden">
              <div className="rounded-[calc(2rem-1px)] bg-ink-950/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center border border-white/10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand/20 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-[0.1em] mb-6">
                  <Award className="w-4 h-4" />
                  Still Writing History
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight text-balance">
                  Our story is <span className="bg-gradient-accent bg-clip-text text-transparent">far from over.</span>
                </h3>
                <p className="text-base sm:text-lg text-ink-300 max-w-2xl mx-auto leading-relaxed mb-8">
                  Every challenge is a new chapter, every mentor a new teacher, every idea a seed for what comes next. Follow our journey as we wrap up NEC 2026 and take everything we've built into the world.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <a href="#blog" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow-brand hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)] transition-all duration-300 hover:-translate-y-0.5">
                    Read Our Blog
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#events" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                    See Our Events
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
