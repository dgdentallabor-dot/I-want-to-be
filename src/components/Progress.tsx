import { motion } from "motion/react";
import { CheckCircle2, Circle, Sparkles, TrendingUp, Users } from "lucide-react";
import { DonationStats, Milestone } from "../types";

interface ProgressProps {
  stats: DonationStats;
}

const milestones: Milestone[] = [
  { amount: 10, label: "Someone actually believed this shit." },
  { amount: 100, label: "This is getting weird." },
  { amount: 1000, label: "Humanity fascinates me." },
  { amount: 10000, label: "I may need to take this seriously." },
  { amount: 100000, label: "We are all part of something ridiculous now." },
  { amount: 300000, label: "Lambo mode activated." },
];

export default function Progress({ stats }: ProgressProps) {
  const percentage = Math.min((stats.currentAmount / stats.goal) * 100, 100);

  // Find next milestone
  const nextMilestone = milestones.find((m) => stats.currentAmount < m.amount) || milestones[milestones.length - 1];

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">
            03 // The Sandbox Ledger
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900">
            Live Funding Progress
          </h2>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            This dashboard updates in real-time. Or at least as fast as our simulated database can process.
          </p>
        </div>

        {/* Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 border border-neutral-100 p-8 rounded-sm bg-white shadow-xs">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              Total Loot Raised
            </span>
            <span className="font-display text-3xl sm:text-4xl font-black text-neutral-900 mt-1">
              ${stats.currentAmount.toLocaleString()}
            </span>
            <span className="font-mono text-[9px] text-neutral-400/80 mt-1 italic tracking-tight">
              Of course I lie.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              Luxury Goal
            </span>
            <span className="font-display text-3xl sm:text-4xl font-black text-neutral-950 mt-1">
              ${stats.goal.toLocaleString()}
            </span>
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
              Completion Rate
            </span>
            <span className="font-display text-3xl sm:text-4xl font-black text-emerald-600 mt-1">
              {percentage.toFixed(4)}%
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-3 mb-16">
          <div className="flex justify-between font-mono text-[10px] text-neutral-400 font-medium uppercase">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" /> {stats.donorsCount.toLocaleString()} Donors
            </span>
            <span>
              {stats.currentAmount >= stats.goal ? "GOAL REACHED! 🏎️" : `$${(stats.goal - stats.currentAmount).toLocaleString()} remaining`}
            </span>
          </div>

          {/* Actual Outer Progress Bar */}
          <div className="h-4 w-full bg-neutral-100 rounded-full overflow-hidden p-0.5 border border-neutral-200">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-neutral-900 rounded-full relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>
            </motion.div>
          </div>

          <div className="flex justify-between font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
            <span>$0.00</span>
            <span>$150,000.00</span>
            <span>$300,000.00</span>
          </div>
        </div>

        {/* Milestones checklist */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6 flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4" /> Funding Milestones & Absurdities
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {milestones.map((milestone, i) => {
              const isUnlocked = stats.currentAmount >= milestone.amount;
              const isActive = nextMilestone.amount === milestone.amount;

              return (
                <div
                  key={i}
                  className={`border p-4 rounded-xs transition-all duration-200 flex items-start gap-3.5 relative overflow-hidden ${
                    isUnlocked
                      ? "bg-neutral-50/50 border-neutral-200"
                      : isActive
                      ? "border-neutral-900 bg-white ring-1 ring-neutral-900"
                      : "border-neutral-100 bg-white/40 opacity-55"
                  }`}
                >
                  {isUnlocked ? (
                    <CheckCircle2 className="h-5 w-5 text-neutral-900 shrink-0 mt-0.5" />
                  ) : (
                    <Circle className="h-5 w-5 text-neutral-300 shrink-0 mt-0.5" />
                  )}

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-neutral-900">
                        ${milestone.amount.toLocaleString()}
                      </span>
                      {isUnlocked && (
                        <span className="font-mono text-[8px] font-bold uppercase py-0.5 px-1.5 bg-neutral-900 text-white rounded-inner">
                          Unlocked
                        </span>
                      )}
                      {isActive && !isUnlocked && (
                        <span className="font-mono text-[8px] font-bold uppercase py-0.5 px-1.5 bg-orange-100 text-orange-900 rounded-inner animate-pulse">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-neutral-600 leading-normal">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
