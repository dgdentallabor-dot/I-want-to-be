import React from "react";
import { motion } from "motion/react";
import { Activity, Anchor, Users, TrendingUp, CalendarDays } from "lucide-react";
import { DonationStats } from "../types";

interface ProgressReportsProps {
  stats: DonationStats;
}

export default function ProgressReports({ stats }: ProgressReportsProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block">
            03.5 // Status Audits
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900">
            Luxury Progress Reports
          </h2>
        </div>

        {/* Report Card */}
        <div className="border border-neutral-900 rounded-sm overflow-hidden shadow-xs">
          {/* Header of Report */}
          <div className="bg-neutral-900 text-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono">
            <div className="flex items-center gap-2.5">
              <CalendarDays className="h-5 w-5 text-neutral-300" />
              <div>
                <span className="text-[10px] text-neutral-400 uppercase block leading-none">Reporting Period</span>
                <span className="text-sm font-bold uppercase tracking-wider">June 2026</span>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-neutral-400 uppercase block leading-none">Security Hash</span>
              <span className="text-xs font-bold text-neutral-300">LP_STATUS_VERIFIED_v1.0</span>
            </div>
          </div>

          {/* Report Body */}
          <div className="p-6 sm:p-8 bg-neutral-50/50 divide-y divide-neutral-200">
            {/* Stat 1: Total Raised */}
            <div className="py-5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 rounded-xs text-neutral-950 shrink-0 mt-0.5">
                  <TrendingUp className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-neutral-900">Total raised</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Exactly how close I am to purchasing high-end status symbols.</p>
                </div>
              </div>
              <div className="font-mono text-xl font-black text-neutral-950 sm:text-right">
                ${stats.currentAmount.toLocaleString()}
              </div>
            </div>

            {/* Stat 2: Ego level */}
            <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 rounded-xs text-neutral-950 shrink-0 mt-0.5">
                  <Activity className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-neutral-900">Ego level</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Internal self-worth metric measured by strangers paying attention.</p>
                </div>
              </div>
              <div className="font-mono text-sm font-bold text-neutral-950 sm:text-right bg-emerald-50 text-emerald-900 border border-emerald-100 px-3 py-1 rounded-sm uppercase tracking-wider inline-block self-start sm:self-center">
                Stable
              </div>
            </div>

            {/* Stat 3: Yacht ownership */}
            <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 rounded-xs text-neutral-950 shrink-0 mt-0.5">
                  <Anchor className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-neutral-900">Yacht ownership</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Current progress toward securing marine-grade fiberglass.</p>
                </div>
              </div>
              <div className="font-mono text-xl font-black text-neutral-400 sm:text-right">
                0%
              </div>
            </div>

            {/* Stat 4: Questioning Sanity */}
            <div className="py-5 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 rounded-xs text-neutral-950 shrink-0 mt-0.5">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-neutral-900">Sanity questioning index</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Number of people currently questioning my overall mental state.</p>
                </div>
              </div>
              <div className="font-mono text-sm font-bold text-neutral-950 sm:text-right text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-sm uppercase tracking-wider inline-block self-start sm:self-center">
                Increasing
              </div>
            </div>
          </div>
        </div>

        {/* Sarcastic footnotes */}
        <p className="mt-4 font-mono text-[9px] text-neutral-400 uppercase tracking-widest text-center">
          Note: No audits were conducted by certified public accountants.
        </p>
      </div>
    </section>
  );
}
