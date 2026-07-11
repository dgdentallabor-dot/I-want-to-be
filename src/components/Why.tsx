import React from "react";
import { Car, Anchor, Watch, Plane, Coffee, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface LuxuryItem {
  icon: React.ComponentType<any>;
  title: string;
  price: string;
  why: string;
}

const items: LuxuryItem[] = [
  {
    icon: Car,
    title: "Ridiculously expensive car.",
    price: "~ $280,000 USD",
    why: "Preferably in a ridiculously loud, fluorescent orange color that makes everyone look at me in traffic while I question my deep personal insecurities.",
  },
  {
    icon: Anchor,
    title: "A Yacht (Which I definitely don't need)",
    price: "~ $1.2M USD (Used)",
    why: "I don't know how to navigate, I get moderately seasick, and maintenance costs are ruinous. But sitting on deck in a white linen shirt sounds incredible.",
  },
  {
    icon: Watch,
    title: "An absurdly expensive mechanical watch",
    price: "~ $45,000 USD",
    why: "It runs on springs, sits on my wrist, and tells the exact same hour/minute as a $12 digital Casio. But it looks beautiful when I gesture dramatically during telling stories.",
  },
  {
    icon: Plane,
    title: "Continuous Business Class Flights",
    price: "~ $6,000/trip",
    why: "Because sitting in extra-wide lie-flat seats and drinking cheap champagne at 35,000 feet makes me feel like a person of extreme importance, instead of a regular human.",
  },
  {
    icon: Coffee,
    title: "$18 Artisanal Coffee",
    price: "~ $18.00/cup",
    why: "Brewed from beans that have been handwashed in Icelandic glacier run-off, then vacuum-sealed by a guy wearing round copper spectacles. It tastes like dirt, but premium dirt.",
  },
  {
    icon: Sparkles,
    title: "Completely Irrational Luxury Purchases",
    price: "Whatever remains",
    why: "Personal chef for my cat? Reclaiming a historical painting to hang in my bathroom? Random Italian leather jackets? Let's find out together.",
  },
];

export default function Why() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left column info - sticky-like behavior */}
        <div className="lg:col-span-1 space-y-4">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">
            01 // The Pure Objective
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900 leading-none">
            Why Do You Want Money?
          </h2>
          <div className="pt-2">
            <p className="font-display text-2xl font-semibold text-neutral-700 italic">
              "Because I like nice things."
            </p>
            <p className="mt-4 text-xs text-neutral-500 leading-relaxed max-w-xs">
              Let's stop pretending we want money to 'save the blockchain' or 'synergize human interaction paradigms'. Here is exactly what is being funded.
            </p>
          </div>

          <div className="mt-6 rounded-xs bg-neutral-50 px-4 py-3.5 border border-neutral-100/80">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-neutral-400 mt-0.5 shrink-0" />
              <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                Level of Necessity: 0.00%
              </p>
            </div>
          </div>
        </div>

        {/* Right column items grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group border border-neutral-100 bg-white hover:border-neutral-900 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mb-4 uppercase">
                    <span>Item 0{index + 1}</span>
                    <span className="text-neutral-900 font-bold tracking-tight">{item.price}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 flex items-center gap-2 group-hover:text-neutral-900 transition-colors">
                    <Icon className="h-4 w-4 stroke-[1.5] text-neutral-700 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="mt-2.5 font-sans text-xs text-neutral-500 leading-relaxed">
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
