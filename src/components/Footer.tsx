import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] bg-brand-700/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container-px container-max pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <div className="relative h-14 sm:h-20 w-auto transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/src/assets/logo.png"
                  alt="The Ideation Lab Logo"
                  className="h-full w-auto object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col justify-center leading-tight text-left border-l border-white/10 pl-4 h-12 sm:h-14 ml-1">
                <span className="font-display font-bold text-[16px] text-white tracking-tight">
                  The Ideation Lab
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-300 font-bold">
                  MCT's RGIT, Mumbai
                </span>
              </div>
            </a>
            <p className="text-ink-400 leading-relaxed max-w-md mb-7">
              A student-driven team on a mission to turn ambitious ideas into
              real-world, impactful ventures. We compete, collaborate, learn,
              and build — one idea at a time.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:border-transparent transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5 text-ink-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-brand-600 hover:border-brand-500 transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5 text-ink-300 group-hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                aria-label="Email"
                className="group inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-500 hover:border-accent-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-ink-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-white transition-colors group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#nec-journey"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-white transition-colors group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  NEC Timeline
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-white transition-colors group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  Past Activities
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-white transition-colors group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  Meet the Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-brand-300" />
                  </span>
                  <span className="break-all">{SOCIAL_LINKS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <span className="mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-accent-400" />
                </span>
                <span>
                  MCT Rajiv Gandhi Institute of Technology, MUMBAI
                  <br />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {year} The Ideation Lab. Crafted with{" "}
            <span className="text-accent-400">curiosity</span> and{" "}
            <span className="text-brand-400">ambition</span>.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-500">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              NEC 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
