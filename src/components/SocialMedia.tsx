import { motion } from 'framer-motion';
import { ArrowRight, Rss } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/content';

export default function SocialMedia() {
  return (
    <section id="social" className="relative section-padding overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[50rem] bg-gradient-to-br from-pink-500/20 via-brand-500/20 to-accent-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="eyebrow-accent mb-5">
            <Rss className="w-3.5 h-3.5" />
            Follow Our Journey
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-5 text-balance">
            The journey, <span className="gradient-text">unfiltered</span> & <span className="gradient-text-accent">unplugged</span>.
          </h2>
          <p className="text-base sm:text-lg text-ink-400 leading-relaxed max-w-2xl mx-auto">
            Behind-the-scenes stories, the wins, the lessons, and everything in between. Follow along on Instagram and LinkedIn — we'd love to have you in our corner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <motion.a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-px shadow-[0_8px_32px_-12px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="rounded-[calc(1.5rem-1px)] bg-ink-900/80 backdrop-blur-sm p-7 sm:p-8 h-full relative overflow-hidden border border-white/5">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-pink-500/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                      <div className="w-14 h-14 rounded-[13px] bg-ink-900 flex items-center justify-center border border-white/10">
                        <InstagramIcon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">Instagram</p>
                      <p className="text-sm text-ink-400 font-medium">@theideationlab</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white text-ink-900 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </span>
                </div>
                <p className="text-ink-400 leading-relaxed">
                  Daily reels, carousel deep-dives, candid BTS, and quick ideas on the go. The most human side of what we do lives here.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-400/20 text-center">
                    <p className="font-display font-black text-2xl text-pink-300 leading-none">1.2K</p>
                    <p className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider mt-1">Followers</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-400/20 text-center">
                    <p className="font-display font-black text-2xl text-purple-300 leading-none">86</p>
                    <p className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider mt-1">Posts</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-400/20 text-center">
                    <p className="font-display font-black text-2xl text-orange-300 leading-none">52</p>
                    <p className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider mt-1">Reels</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-px shadow-[0_8px_32px_-12px_rgba(124,58,237,0.5)] hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="rounded-[calc(1.5rem-1px)] bg-ink-900/80 backdrop-blur-sm p-7 sm:p-8 h-full relative overflow-hidden border border-white/5">
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-brand-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A66C2] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(10,102,194,0.6)]">
                      <LinkedinIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">LinkedIn</p>
                      <p className="text-sm text-ink-400 font-medium">The Ideation Lab</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A66C2] text-white group-hover:bg-brand-600 transition-colors">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                  </span>
                </div>
                <p className="text-ink-400 leading-relaxed">
                  Long-form articles, founder insights, professional milestones, collaborations, and a closer look at the impact we're building.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-brand-500/10 border border-brand-400/20 text-center">
                    <p className="font-display font-black text-2xl text-brand-300 leading-none">850+</p>
                    <p className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider mt-1">Followers</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 text-center">
                    <p className="font-display font-black text-2xl text-emerald-300 leading-none">34</p>
                    <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mt-1">Articles</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/20 text-center">
                    <p className="font-display font-black text-2xl text-sky-300 leading-none">12</p>
                    <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mt-1">Newsletters</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
