import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Images, Search, X, ZoomIn } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/content';
import { cn } from '../lib/utils';

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === activeCat);
  const activeItem = lightbox !== null ? GALLERY_ITEMS.find((i) => i.id === lightbox) : null;

  return (
    <section id="gallery" className="relative section-padding bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-accent-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">
              <Images className="w-3.5 h-3.5" />
              Photo Gallery
            </span>
            <h2 className="section-title mb-5 text-balance text-white">
              Moments that <span className="gradient-text-accent">mattered</span>.
            </h2>
            <p className="section-subtitle text-ink-400">
              Snapshots from our NEC journey, workshops, late-night hustle sessions, campus events, and the little moments in between that made this cohort unforgettable.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink-900/80 border border-white/10 shadow-card-dark text-sm text-ink-400 w-fit sm:w-auto backdrop-blur">
            <Search className="w-4 h-4 text-ink-500" />
            <span className="font-medium"><span className="text-white font-bold">{GALLERY_ITEMS.length}</span> moments captured</span>
            <Camera className="w-4 h-4 text-brand-400 ml-1" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 sm:gap-2.5 mb-10 sm:mb-12"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const count = cat.id === 'all' ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;
            const active = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCat(cat.id)}
                className={cn(
                  'group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border font-semibold text-sm transition-all duration-300',
                  active
                    ? 'bg-gradient-brand text-white border-transparent shadow-glow-brand -translate-y-0.5'
                    : 'bg-ink-900/60 text-ink-300 border-white/10 hover:border-brand-500/40 hover:text-white hover:-translate-y-0.5 hover:bg-ink-900'
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    'text-[10px] px-2 py-0.5 rounded-md font-bold transition-all duration-300',
                    active ? 'bg-white/20 text-white' : 'bg-white/5 text-ink-400 group-hover:bg-brand-500/15 group-hover:text-brand-300'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item.id)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40 shadow-card-dark hover:shadow-card-dark-hover transition-all duration-500 aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-ink-900/90 backdrop-blur border border-white/10 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                    {GALLERY_CATEGORIES.find((c) => c.id === item.category)?.label.split(' ')[0]}
                  </span>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-ink-900/90 backdrop-blur border border-white/10 text-white shadow-soft">
                    <ZoomIn className="w-5 h-5" strokeWidth={2} />
                  </span>
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-display font-bold text-white text-base sm:text-lg leading-tight mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-ink-300 font-medium">The Ideation Lab · NEC 2026</p>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-ink-500">No photos in this category yet — check back soon!</div>
        )}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-ink-950/97 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            aria-modal="true"
            role="dialog"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
            >
              <div className="relative rounded-t-2xl overflow-hidden bg-ink-900 border border-white/10 border-b-0 flex items-center justify-center aspect-[16/10] shrink-0">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>
              <div className="rounded-b-2xl bg-ink-900 p-5 sm:p-7 border border-white/10 border-t-0">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="tag-brand">
                    {GALLERY_CATEGORIES.find((c) => c.id === activeItem.category)?.label}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight mb-1.5">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-ink-400">Captured during the NEC 2026 journey with The Ideation Lab team.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
