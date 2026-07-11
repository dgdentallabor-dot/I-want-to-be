import { DollarSign, ShieldCheck, Heart } from "lucide-react";
import { motion } from "motion/react";
import { DonationStats } from "../types";

interface HeaderProps {
  stats: DonationStats;
}

export default function Header({ stats }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-neutral-900 font-mono text-sm font-bold text-white shadow-sm"
          >
            S.
          </motion.div>
          <span className="font-display text-sm tracking-tight font-semibold text-neutral-900 hidden sm:inline-block">
            Shamelessly Honest
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 rounded-full bg-neutral-50 px-3.5 py-1.5 font-mono text-[11px] sm:text-xs font-medium text-neutral-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{stats.donorsCount.toLocaleString()} Strangers Donated</span>
          </div>

          <div className="flex items-center gap-1 bg-neutral-900/5 hover:bg-neutral-900/10 transition-colors duration-200 rounded-sm px-3 py-1 font-mono text-xs font-bold text-neutral-900">
            <DollarSign className="h-3 w-3" />
            <span>{stats.currentAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
