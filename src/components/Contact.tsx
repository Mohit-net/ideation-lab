import { motion } from "framer-motion";
import {
  Mail,
  Send,
  ArrowRight,
  Sparkles,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { SOCIAL_LINKS } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-60 pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      <div className="relative container-px container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="eyebrow mb-5">
            <MessageCircle className="w-3.5 h-3.5" />
            Contact Us
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-5 text-balance">
            Got an idea? <br />
            <span className="gradient-text-accent">Let's build something.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-400 leading-relaxed max-w-2xl mx-auto">
            Mentorship, collaboration, sponsorship, press, or just a friendly
            hello — our inbox is always open. We usually reply within 24 hours
            on working days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group relative block rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 flex items-start gap-5 overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_1px_0_0_rgba(167,139,250,0.15)_inset,0_16px_48px_-12px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:border-brand-400/30 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand-500/15 rounded-full blur-2xl group-hover:bg-brand-500/25 transition-colors" />
              <div className="relative shrink-0">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-brand text-white shadow-glow-brand">
                  <Mail className="w-7 h-7" strokeWidth={2} />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300 mb-1.5">
                  Preferred
                </p>
                <h4 className="font-display font-extrabold text-xl text-white tracking-tight mb-1">
                  Email Us
                </h4>
                <p className="text-sm text-ink-400 mb-3">
                  For all inquiries — fastest response on weekdays.
                </p>
                <p className="inline-flex items-center gap-2 font-semibold text-ink-200 group-hover:text-brand-300 transition-colors break-all">
                  {SOCIAL_LINKS.email}
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 flex items-start gap-5 overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_1px_0_0_rgba(167,139,250,0.15)_inset,0_16px_48px_-12px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:border-brand-400/30 transition-all duration-500"
            >
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-pink-500/15 to-orange-400/15 rounded-full blur-2xl group-hover:opacity-80 transition-opacity" />
              <div className="relative shrink-0">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-[0_0_40px_-10px_rgba(236,72,153,0.6)]">
                  <InstagramIcon className="w-7 h-7" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-pink-300 mb-1.5">
                  DM us
                </p>
                <h4 className="font-display font-extrabold text-xl text-white tracking-tight mb-1">
                  Instagram
                </h4>
                <p className="text-sm text-ink-400 mb-3">
                  Follow, connect, and send a direct message anytime.
                </p>
                <p className="inline-flex items-center gap-2 font-semibold text-ink-200 group-hover:text-pink-300 transition-colors">
                  @theideationlab
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 flex items-start gap-5 overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_1px_0_0_rgba(167,139,250,0.15)_inset,0_16px_48px_-12px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:border-brand-400/30 transition-all duration-500"
            >
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-brand-500/15 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors" />
              <div className="relative shrink-0">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0A66C2] text-white shadow-[0_0_40px_-10px_rgba(10,102,194,0.6)]">
                  <LinkedinIcon className="w-7 h-7" />
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-300 mb-1.5">
                  Professional
                </p>
                <h4 className="font-display font-extrabold text-xl text-white tracking-tight mb-1">
                  LinkedIn
                </h4>
                <p className="text-sm text-ink-400 mb-3">
                  Follow our company page for long-form updates & posts.
                </p>
                <p className="inline-flex items-center gap-2 font-semibold text-ink-200 group-hover:text-sky-300 transition-colors">
                  The Ideation Lab
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </p>
              </div>
            </a>

            <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 flex items-start gap-5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,0.6)]">
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-white">
                  <MapPin className="w-7 h-7" strokeWidth={2} />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-400 mb-1.5">
                  Based at
                </p>
                <h4 className="font-display font-extrabold text-xl text-white tracking-tight mb-1">
                  NEC 2026 · E-Cell, IIT Bombay
                </h4>
                <p className="text-sm text-ink-400 leading-relaxed">
                  We are a student team participating in the National
                  Entrepreneurship Challenge organized by the Entrepreneurship
                  Cell, IIT Bombay.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand-500/30 via-accent-500/20 to-brand-500/30 blur-xl opacity-60" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks for reaching out! We will get back to you soon ✨",
                );
              }}
              className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-brand opacity-[0.12] rounded-full blur-3xl" />

              <div className="relative flex items-center gap-3 mb-7">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-brand text-white shadow-glow-brand">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight leading-tight">
                    Send us a quick message
                  </h3>
                  <p className="text-sm text-ink-400 mt-0.5">
                    Fill the form and we'll reach out within 24 hours.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400/60 transition-all duration-200 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400/60 transition-all duration-200 font-medium"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400/60 transition-all duration-200 font-medium appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-11"
                  >
                    <option value="">Pick a reason for reaching out…</option>
                    <option>Collaboration / Partnership</option>
                    <option>Mentorship Request</option>
                    <option>Event / Workshop Query</option>
                    <option>Press / Media</option>
                    <option>Sponsorship</option>
                    <option>General Question</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what you have in mind — a few lines is enough to get the conversation started!"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-400/40 focus:border-brand-400/60 transition-all duration-200 font-medium resize-none leading-relaxed"
                  />
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-ink-400">
                  By sending, you agree to be contacted at the email you
                  provided. No spam, ever.
                </p>
                <button
                  type="submit"
                  className="btn-primary !py-4 !px-7 group self-start sm:self-auto"
                >
                  <Send className="w-5 h-5" strokeWidth={2} />
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
