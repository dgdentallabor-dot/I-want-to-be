import { motion } from "motion/react";
import { ArrowRight, Flame } from "lucide-react";

interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-20 sm:px-8 sm:pt-32 sm:pb-28 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative premium background grid pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-neutral-900" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      {/* Tiny badge of extreme self-awareness */}
      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-flex items-center gap-1.5 bg-neutral-950 px-3.5 py-1.5 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white rounded-sm mb-8 shadow-md border border-neutral-800"
      >
        <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500 animate-pulse" /> 100% Genuine Crowd Wanting
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-neutral-900 max-w-4xl leading-[0.95]"
      >
        I Want To Be <span className="bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">Rich.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 font-display text-xl sm:text-2xl md:text-3xl font-medium text-neutral-600 max-w-3xl leading-snug tracking-tight"
      >
        That's it. No startup. No revolution. No secret investment strategy. <span className="text-neutral-950 font-bold underline decoration-neutral-300 decoration-2 underline-offset-4">I simply want more money.</span>
      </motion.p>

      {/* Short paragraph explaining core intent */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 font-sans text-base sm:text-lg text-neutral-500 max-w-xl leading-relaxed font-light"
      >
        My therapist suggested self-reflection. My inner child suggested a sports car. This website represents a <span className="text-neutral-900 font-medium font-sans">reasonable middle ground</span>.
      </motion.p>

      {/* Large visually tactile CTA */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 w-full max-w-md px-2"
      >
        <button
          onClick={onDonateClick}
          className="group relative w-full inline-flex items-center justify-between gap-4 rounded-sm bg-neutral-950 p-6 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-2xl hover:bg-neutral-900 transition-all duration-300 cursor-pointer overflow-hidden active:scale-98 border border-neutral-800"
        >
          {/* Sliding background layer */}
          <span className="absolute inset-0 bg-neutral-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
          
          <span className="relative z-10 text-left flex-1 pr-2 leading-relaxed">Send $1 For A Virtual Hug & Boost To My Self-Worth</span>
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white text-neutral-950 group-hover:scale-105 transition-transform duration-300 shadow-sm">
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </button>
      </motion.div>

      {/* Non-binding fine print */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6 }}
        className="mt-6 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        <span>No obligations</span>
        <span className="text-neutral-300">•</span>
        <span>Non-refundable</span>
        <span className="text-neutral-300">•</span>
        <span className="text-neutral-950 font-bold">Fully hilarious</span>
      </motion.p>
    </section>
  );
}
