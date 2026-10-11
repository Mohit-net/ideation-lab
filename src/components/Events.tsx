import { motion } from 'framer-motion';
import { CalendarDays, Users, ArrowRight, History } from 'lucide-react';
import { PAST_EVENTS } from '../data/content';

export default function Events() {
  return (
    <section id="events" className="relative section-padding bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[50rem] h-[40rem] bg-brand-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="eyebrow-accent mb-5">
            <CalendarDays className="w-3.5 h-3.5" />
            Events & Activities
          </span>
          <h2 className="section-title mb-5 text-balance text-white">
            Where the <span className="gradient-text">magic happens.</span>
          </h2>
          <p className="section-subtitle mx-auto text-ink-400">
            Workshops, summits, pitch nights, hackathons, and community meetups. We host and participate in events designed to build, connect, and level up every curious mind around us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 lg:col-span-2"
          >
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-brand text-white shadow-glow-brand">
              <History className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-xl text-white leading-none">Events We've Hosted</h3>
              <p className="text-sm text-ink-400 font-medium mt-1">Moments we've already shared together.</p>
            </div>
          </motion.div>

          {PAST_EVENTS.map((ev, idx) => (
            <motion.article
              key={ev.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group card card-hover p-4 sm:p-5 flex flex-col gap-4 bg-ink-900/60 border-white/10"
            >
              <div className="flex items-stretch gap-4">
                <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-white/10">
                  <img src={ev.image} alt={ev.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="min-w-0 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="tag-brand text-[10px] px-2 py-0.5 uppercase tracking-wider">{ev.category}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-400">
                      <CalendarDays className="w-3 h-3" />
                      {ev.date}
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-base sm:text-lg text-white tracking-tight leading-snug mb-1.5 line-clamp-2">
                    {ev.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-ink-400 leading-relaxed line-clamp-3">{ev.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {ev.gallery?.map((src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 cursor-zoom-in"
                  >
                    <img
                      src={src}
                      alt={`${ev.title} — photo ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-bold text-ink-300 pt-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Users className="w-3 h-3" />
                  {ev.attendees}+ attendees
                </span>
                <a href="#gallery" className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 transition-colors ml-auto group/btn">
                  View gallery
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
