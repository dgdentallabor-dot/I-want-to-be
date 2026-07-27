import { CornerRightDown, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

interface FinalProps {
  onDonateClick: () => void;
}

export default function Final({ onDonateClick }: FinalProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32 border-t border-neutral-100 sm:px-8 bg-white flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl border border-neutral-200/80 p-8 sm:p-12 md:p-16 rounded-sm relative bg-neutral-50/20 shadow-xs">
        {/* Decorative corner borders to emphasize museum/manifesto vibe */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neutral-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neutral-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neutral-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neutral-400"></div>

        <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-4">
          04 // Epilogue
        </span>

        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-snug">
          Thank You For Reading This Far.
        </h2>

        {/* Manifesto block */}
        <div className="mt-8 space-y-5 font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
          <p>
            <span className="text-neutral-900 font-medium">If you donate $1,</span> you are funding an absolute masterclass in pointless ambition. But more importantly, you&rsquo;ll be proving that life is far too short for masks, fake success stories, and corporate buzzwords.
          </p>
          <p>
            <span className="text-neutral-900 font-medium">If you don&rsquo;t donate,</span> you successfully guarded your coin against psychological manipulation.
          </p>
          <p className="italic font-light text-neutral-800">
            &ldquo;If you laughed, that&rsquo;s already more than most multi-billion dollar tech companies accomplish with their entire marketing departments.&rdquo;
          </p>
          <p className="text-neutral-400 pt-1 text-xs font-mono uppercase tracking-widest">
            &mdash;
          </p>
          <p className="text-neutral-600 font-light max-w-md mx-auto">
            The internet is crowded with people pretending to build decentralized civilizations or cure cosmic boredom when they actually just want a nicer apartment.
          </p>
        </div>

        {/* Dynamic final push button */}
        <div className="mt-12">
          <button
            onClick={onDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-sm bg-neutral-950 px-8 py-4.5 font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-neutral-900 transition-all duration-200 cursor-pointer active:scale-98 shadow-md border border-neutral-800"
          >
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 mr-0.5 animate-pulse" />
            <span>Send Me $1 in Crypto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
