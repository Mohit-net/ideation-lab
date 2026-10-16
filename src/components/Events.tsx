import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays,
  Users,
  History,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from 'lucide-react';
import { PAST_EVENTS } from '../data/content';

interface LightboxState {
  images: string[];
  index: number;
  title: string;
}

export default function Events() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const step = useCallback((dir: number) => {
    setLightbox((state) => {
      if (!state) return state;
      const next = (state.index + dir + state.images.length) % state.images.length;
      return { ...state, index: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, step]);

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

          {PAST_EVENTS.map((ev, idx) => {
            const images = [ev.image, ...(ev.gallery ?? [])];
            return (
              <motion.article
                key={`${ev.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group card card-hover p-4 sm:p-5 flex flex-col gap-4 bg-ink-900/60 border-white/10"
              >
                <div className="flex items-stretch gap-4">
                  <button
                    type="button"
                    onClick={() => openLightbox(images, 0, ev.title)}
                    className="group/img relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-white/10 cursor-zoom-in"
                    aria-label={`View ${ev.title} cover photo`}
                  >
                    <img src={ev.image} alt={ev.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover/img:bg-ink-950/45 transition-colors">
                      <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    </span>
                  </button>
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
                    <button
                      type="button"
                      key={i}
                      onClick={() => openLightbox(images, i + 1, ev.title)}
                      className="group/img relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 cursor-zoom-in"
                      aria-label={`View ${ev.title} photo ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${ev.title} — photo ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover/img:bg-ink-950/45 transition-colors">
                        <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[11px] font-bold text-ink-300 pt-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Users className="w-3 h-3" />
                    {ev.attendees}+ attendees
                  </span>
                  <button
                    type="button"
                    onClick={() => openLightbox(images, 0, ev.title)}
                    className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 transition-colors ml-auto group/btn cursor-pointer"
                  >
                    View photos
                    <ZoomIn className="w-3 h-3 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  className="absolute left-3 sm:left-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  className="absolute right-3 sm:right-6 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.figure
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col items-center"
            >
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.title} — photo ${lightbox.index + 1}`}
                className="w-full max-h-[78vh] object-contain rounded-2xl border border-white/10 shadow-card-dark"
              />
              <figcaption className="mt-4 text-center">
                <p className="text-white font-semibold">{lightbox.title}</p>
                <p className="text-sm text-ink-400 mt-1">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
