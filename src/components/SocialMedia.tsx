import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Bookmark, MessageCircle, Rss } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/content';
import { IMAGE_MOCK } from '../lib/utils';

const feedPosts = [
  {
    image: IMAGE_MOCK('Team group photo celebrating after pitch win students cheering bright colorful candid instagram post square format', 600, 600),
    likes: 284,
    comments: 42,
    caption: 'Still buzzing from that pitch night energy! 🚀',
  },
  {
    image: IMAGE_MOCK('Hands typing on laptop with colorful sticky notes design thinking workshop square instagram style', 600, 600),
    likes: 198,
    comments: 27,
    caption: 'The magic happens where ideas meet execution ✨',
  },
  {
    image: IMAGE_MOCK('College campus outdoor event crowd sunset warm photography instagram aesthetic', 600, 600),
    likes: 412,
    comments: 65,
    caption: '200+ curious minds. One unforgettable day. 🔥',
  },
  {
    image: IMAGE_MOCK('Close up whiteboard with business model canvas markers team brainstorming square', 600, 600),
    likes: 156,
    comments: 18,
    caption: 'Behind every deck is 100 versions of the truth. 🛠',
  },
  {
    image: IMAGE_MOCK('Student founder giving presentation on stage confident speaking spotlight square photo', 600, 600),
    likes: 365,
    comments: 51,
    caption: 'If you can pitch it, you can build it. 💡',
  },
  {
    image: IMAGE_MOCK('Six friends eating pizza late night coding session startup vibe cozy', 600, 600),
    likes: 489,
    comments: 74,
    caption: 'Fueling the hustle, one slice at a time 🍕',
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-4">
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

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center justify-between"
            >
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-accent-400" />
                Latest from the feed
              </h3>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-brand-300 hover:text-brand-200 inline-flex items-center gap-1.5"
              >
                View all <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
              {feedPosts.map((post, idx) => (
                <motion.a
                  key={idx}
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative block aspect-square rounded-2xl overflow-hidden shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)] border border-white/10"
                >
                  <img src={post.image} alt={post.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-3.5 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-4 text-xs font-bold text-white mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Heart className="w-4 h-4" fill="currentColor" />
                        {post.likes}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                      <span className="ml-auto">
                        <Bookmark className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-white text-[11px] sm:text-xs font-medium leading-snug line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
