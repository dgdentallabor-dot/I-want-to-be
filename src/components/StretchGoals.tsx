import React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, Palette, Compass, Flame } from "lucide-react";

interface StretchGoal {
  amount: string;
  title: string;
  description: string;
  vibe: string;
}

const stretchGoals: StretchGoal[] = [
  {
    amount: "$500,000",
    title: "The Regal Oil Portrait",
    description: "I will commission a renaissance-style, 6-foot oil painting of myself wearing a heavy velvet robe, holding a golden apple, and looking dramatically into the middle distance. It will hang in my hallway to intimidate my delivery drivers.",
    vibe: "Ego Expansion: 400%"
  },
  {
    amount: "$750,050",
    title: "Equine Corporate Disruption",
    description: "I will register for an elite tech & leadership conference and make my grand entrance arriving entirely on a white horse, wearing a tailored business suit. I will refuse to answer questions about the horse.",
    vibe: "Practicality: Negative"
  },
  {
    amount: "$1,000,000",
    title: "The Gold-Plated Toast Masterpiece",
    description: "I will buy an actual 24-karat gold-plated toaster and publicly admit on a live video broadcast that it toasts bread exactly the same as a $15 appliance, and that it was a thoroughly terrible financial decision.",
    vibe: "ROI: Absolute Zero"
  },
  {
    amount: "$2,500,000",
    title: "Personal Suspense Harpist",
    description: "I will hire a professional classical harpist to follow me around my apartment for three weeks, playing quiet, highly suspenseful arpeggios every single time I open the refrigerator or check the mail.",
    vibe: "Atmospheric Noise: Maximum"
  },
  {
    amount: "$5,000,000",
    title: "Micronation of 'Egoland'",
    description: "I will buy a tiny desert island or sandbar, declare sovereign independence, name it 'Egoland', and draft a constitution where the only law is that you must congratulate me on my financial success at least once per hour.",
    vibe: "Diplomatic Status: Questionable"
  }
];

export default function StretchGoals() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8 bg-neutral-50/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            03.75 // Beyond the Horizon
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900">
            Sarcastic Stretch Goals
          </h2>
          <p className="mt-3 text-xs text-neutral-500 max-w-md mx-auto">
            Should we accidentally cross the initial threshold, these are the completely unhinged milestones we will fund together.
          </p>
        </div>

        {/* Stretch Goals List */}
        <div className="space-y-6">
          {stretchGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative border border-neutral-200/80 bg-white p-6 sm:p-8 rounded-sm hover:border-neutral-900 transition-all duration-200 hover:shadow-xs"
            >
              {/* Corner accent for premium design feeling */}
              <div className="absolute top-0 right-0 bg-neutral-900 text-white font-mono text-[10px] font-bold px-3.5 py-1 uppercase tracking-wider rounded-bl-sm">
                {goal.amount}
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Visual number tag */}
                <div className="font-mono text-xs font-bold text-neutral-300 tracking-widest shrink-0 uppercase">
                  Goal_0{index + 1} //
                </div>

                {/* Content */}
                <div className="space-y-2.5 flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
                    {goal.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {goal.description}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      {goal.vibe}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
