import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Eye, 
  Flame, 
  Activity, 
  Smile, 
  ActivitySquare,
  Skull
} from "lucide-react";

interface DefectItem {
  icon: React.ComponentType<any>;
  title: string;
  verdict: string;
  why: string;
}

const unfixables: DefectItem[] = [
  {
    icon: Clock,
    title: "My Legendary Procrastination",
    verdict: "UNFIXABLE",
    why: "Instead of putting off my taxes from a cheap laminate table, I will simply put them off while sitting at a custom-carved solid mahogany desk, playing 8 hours of video games on a tablet I bought purely to 'optimize my workflow.' The deadlines will remain just as terrifying.",
  },
  {
    icon: HelpCircle,
    title: "Occasional Self-Doubt",
    verdict: "COMPLETELY UNTOUCHED",
    why: "Even if my account balance looks like a long-distance phone number, I will still lie wide awake at 3:14 AM questioning whether my 7th-grade math teacher secretly knew I didn't understand fractions, or if a random cashier was mocking my posture.",
  },
  {
    icon: Flame,
    title: "My Chronic Tendency to Overthink",
    verdict: "WILL LIKELY ACCELERATE",
    why: "When a barista says 'Enjoy your coffee' and I reply 'Thanks, you too,' I will now analyze this social catastrophe on a state-of-the-art 240Hz luxury monitor, mapping my conversational failure in high-definition spreadsheets.",
  },
  {
    icon: Eye,
    title: "Choosing a Netflix Movie in Under 40 Minutes",
    verdict: "ESTIMATED SELECT TIME: 55 MINS",
    why: "Having more money means buying an 85-inch 8.5K ultra-OLED television, which only increases the scale of my failure. I will scroll past award-winning cinematic masterpieces for an hour, only to fall asleep to a sitcom rerun I have already seen fourteen times.",
  },
  {
    icon: Smile,
    title: "Checking If Random People Liked My Social Post",
    verdict: "DESPERATION REMAINS 100%",
    why: "No amount of capital can cure the dopamine loop. I will still refresh my social feed every 45 seconds to see if a guy named `@ultra_shredder_99` liked my photo of an expensive, mediocre pastry, secretly seeking his silent validation.",
  },
  {
    icon: Skull,
    title: "Whatever Is Happening To My Back After Age 40",
    verdict: "PERMANENT CRACKLING SOUNDS",
    why: "I can hire a personal Swedish posture guru and sleep on a high-density orthopedic cloud mattress floating on magnetic fields, but my lower lumbar spine will still make the crisp sound of dry leaves snapping every time I sneeze or pick up a pen.",
  },
];

export default function WontFix() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract dark decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            03.9 // Internal Disclaimers
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-50 max-w-xl mx-auto leading-tight">
            Things Money Definitely Won&rsquo;t Fix
          </h2>
          <p className="mt-3 text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
            Let&rsquo;s be entirely honest. Even if we reach the absolute maximum target, these structural defects are hardcoded into my existence.
          </p>
        </div>

        {/* Content list */}
        <div className="space-y-4">
          {unfixables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="border border-neutral-800 bg-neutral-950/60 p-6 flex flex-col md:flex-row md:items-start gap-4 transition-all duration-200 hover:border-neutral-700"
              >
                {/* Icon wrapper */}
                <div className="p-3 bg-neutral-900 border border-neutral-800 text-neutral-100 shrink-0 self-start">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h3 className="font-display text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[9px] font-black tracking-widest px-2.5 py-0.5 bg-neutral-800 text-neutral-300 uppercase rounded-inner inline-block self-start">
                      {item.verdict}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                    {item.why}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
