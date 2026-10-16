import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, ArrowRight, PenLine } from 'lucide-react';
import { BLOG_POSTS, BLOG_SERIES } from '../data/content';

export default function Blog() {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = openId !== null ? BLOG_POSTS.find((p) => p.id === openId) : null;

  return (
    <section id="blog" className="relative section-padding bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[45rem] h-[40rem] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[35rem] bg-accent-500/10 rounded-full blur-[140px] pointer-events-none" />

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
              <PenLine className="w-3.5 h-3.5" />
              {BLOG_SERIES.name}
            </span>
            <h2 className="section-title mb-5 text-balance text-white">
              Ideas worth <span className="gradient-text">writing down</span>.
            </h2>
            <p className="section-subtitle text-ink-400">{BLOG_SERIES.description}</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink-900/80 border border-white/10 shadow-card-dark text-sm text-ink-400 w-fit sm:w-auto backdrop-blur">
            <BookOpen className="w-4 h-4 text-brand-400" />
            <span className="font-medium">
              <span className="text-white font-bold">{BLOG_POSTS.length}</span> articles · LinkedIn series
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpenId(post.id)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40 shadow-card-dark hover:shadow-card-dark-hover hover:border-brand-400/30 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-900/90 backdrop-blur border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  Part {post.part}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.hashtags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-brand-300 bg-brand-500/10 border border-brand-500/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-lg text-white tracking-tight leading-snug mb-2.5">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-400 group-hover:text-brand-300 transition-colors">
                  Read article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenId(null)}
            className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-8 overflow-y-auto"
            aria-modal="true"
            role="dialog"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setOpenId(null)}
              className="fixed top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl my-auto rounded-2xl bg-ink-900 border border-white/10 shadow-card-dark overflow-hidden"
            >
              <div className="relative">
                <img src={active.image} alt={active.title} className="w-full h-48 sm:h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                <span className="absolute bottom-4 left-5 sm:left-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-900/90 backdrop-blur border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white">
                  Part {active.part} of {BLOG_POSTS.length}
                </span>
              </div>

              <div className="p-5 sm:p-8">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2">
                  {active.title}
                </h3>
                <p className="text-sm text-ink-500 font-medium mb-6">
                  {BLOG_SERIES.name} · The Ideation Lab, RGIT
                </p>

                <div className="space-y-4">
                  {active.blocks.map((block, idx) => {
                    if (block.kind === 'h') {
                      return (
                        <h4
                          key={idx}
                          className="font-display font-bold text-lg sm:text-xl text-white tracking-tight pt-2"
                        >
                          {block.text}
                        </h4>
                      );
                    }
                    if (block.kind === 'list') {
                      return (
                        <ul key={idx} className="space-y-2">
                          {block.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex gap-3 text-sm sm:text-base text-ink-300 leading-relaxed"
                            >
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx} className="text-sm sm:text-base text-ink-300 leading-relaxed">
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                {active.source && (
                  <p className="text-xs text-ink-500 mt-6 italic">{active.source}</p>
                )}

                <div className="mt-7 pt-6 border-t border-white/10">
                  <p className="text-sm sm:text-base text-white font-semibold leading-relaxed">
                    {active.cta}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.hashtags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold text-brand-300 bg-brand-500/10 border border-brand-500/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs text-ink-500 leading-relaxed">{BLOG_SERIES.campaign}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
