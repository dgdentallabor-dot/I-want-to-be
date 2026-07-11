import { useEffect, useState } from "react";
import { DollarSign, ShieldAlert, CheckCircle, Sparkles, Smile, MessageSquare, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { loadStripe } from "@stripe/stripe-js";

import { DonationStats, StripeConfig } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import FAQ from "./components/FAQ";
import Progress from "./components/Progress";
import ProgressReports from "./components/ProgressReports";
import StretchGoals from "./components/StretchGoals";
import WontFix from "./components/WontFix";
import Final from "./components/Final";
import CutePig from "./components/CutePig";
import SimulationModal from "./components/SimulationModal";
import PrivacyModal from "./components/PrivacyModal";

export default function App() {
  const [stats, setStats] = useState<DonationStats>({
    currentAmount: 1452,
    goal: 300000,
    donorsCount: 1452,
  });

  const [stripeConfig, setStripeConfig] = useState<StripeConfig>({
    stripeEnabled: false,
    publishableKey: "",
  });

  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isProcessingRealStripe, setIsProcessingRealStripe] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    text: string;
    sub: string;
    type: "success" | "info" | "warning";
  } | null>(null);

  // Load stats and stripe config on mount
  useEffect(() => {
    fetchStats();
    fetchStripeConfig();

    // Check for success/cancelled query params
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      const isSimulated = params.get("simulated") === "true";
      if (!isSimulated) {
        // Real stripe payment succeeded. In production, we'd confirm with webhook,
        // but here we can trigger a stats fetch or increment to give instant reward!
        fetchStats();
        setToastMessage({
          text: "Real Dollar Captured Successfully!",
          sub: "Your real-world sacrifice is highly appreciated. Welcome to the elite roster.",
          type: "success",
        });
      } else {
        setToastMessage({
          text: "Simulated Success!",
          sub: "Your imaginary asset transfers successfully entered our database.",
          type: "success",
        });
      }
      // Clean query params from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (params.get("cancelled") === "true") {
      setToastMessage({
        text: "Donation Aborted",
        sub: "You decided not to help. Totally understandable, Lamborghini dealerships can wait.",
        type: "info",
      });
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/stats");
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Failed to load progress stats:", error);
    }
  };

  const fetchStripeConfig = async () => {
    try {
      const response = await fetch("/api/checkout-config");
      if (response.ok) {
        const data = await response.json();
        setStripeConfig(data);
      }
    } catch (error) {
      console.error("Failed to load Stripe configuration:", error);
    }
  };

  // Payment button handler
  const handleDonateClick = async () => {
    if (!stripeConfig.stripeEnabled) {
      // Real Stripe is not configured. Fall back to simulation modal!
      setIsSimulationOpen(true);
      return;
    }

    // Real stripe flow
    try {
      setIsProcessingRealStripe(true);
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("API session creation failed");
      }

      const { sessionUrl, simulated } = await response.json();

      if (simulated) {
        // Redirection to the simulated checkout callback
        window.location.href = sessionUrl;
      } else if (sessionUrl) {
        // Redirect user to Stripe's Hosted Checkout page
        window.location.href = sessionUrl;
      }
    } catch (error) {
      console.error("Checkout redirection failed:", error);
      setToastMessage({
        text: "Gateway Failure",
        sub: "Stripe error occurred. Initializing simulated sandbox instead.",
        type: "warning",
      });
      setIsSimulationOpen(true);
    } finally {
      setIsProcessingRealStripe(false);
    }
  };

  // Callback when simulated checkout reports success
  const handleSimulationSuccess = (amount: number) => {
    // Refresh stats from backend to fetch updated donations
    fetchStats();
    setToastMessage({
      text: "Simulated Dollar Placed!",
      sub: "Thank you for the validation. The ledger counter is climbing.",
      type: "success",
    });
    setTimeout(() => {
      setIsSimulationOpen(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white relative font-sans flex flex-col justify-between">
      <div>
        {/* Absolute top notice indicating status */}
        <div className="bg-neutral-950 text-white font-mono text-[10px] uppercase py-2.5 px-6 text-center tracking-widest flex items-center justify-center gap-1.5 border-b border-neutral-800">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Stripe Status: {stripeConfig.stripeEnabled ? "Production Ready" : "Local Sandbox Mode Active"}</span>
        </div>

        {/* Global floating Header */}
        <Header stats={stats} />

        {/* SECTION 1 - HERO */}
        <Hero onDonateClick={handleDonateClick} />

        {/* Interactive Processing Real Stripe Overlay */}
        {isProcessingRealStripe && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 mb-4"></div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
              Generating Stripe Checkout Session...
            </p>
            <p className="text-[11px] text-neutral-500 mt-1">
              Contacting decentralized servers for actual currency transfer API.
            </p>
          </div>
        )}

        {/* SECTION 2 - WHY */}
        <Why />

        {/* SECTION 3 - FAQ */}
        <FAQ />

        {/* SECTION 4 - LIVE PROGRESS */}
        <Progress stats={stats} />

        {/* LUXURY PROGRESS REPORTS */}
        <ProgressReports stats={stats} />

        {/* STRETCH GOALS */}
        <StretchGoals />

        {/* THINGS MONEY DEFINITELY WON'T FIX */}
        <WontFix />

        {/* SECTION 5 - FINAL MESSAGE */}
        <Final onDonateClick={handleDonateClick} />

        {/* CUTE ENGAGEMENT PIG */}
        <CutePig />
      </div>

      {/* FOOTER */}
      <footer className="border-t border-neutral-100 bg-neutral-50/40 py-12 px-6 sm:px-8 text-center mt-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="font-display text-lg font-bold tracking-tight text-neutral-900">
            I Want To Be Rich.
          </div>
          <p className="font-mono text-[10px] text-neutral-400 max-w-md mx-auto leading-normal uppercase tracking-wider">
            © 2026 Shamelessly Honest. Fully transparent. Not a corporate offering. No security claims or promises. Made for pure humorous validity.
          </p>
          <div className="flex items-center justify-center gap-1.5 font-mono text-[9px] text-neutral-400">
            <span>Powered by absolute digital truth</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-neutral-900">
              <Flame className="h-3 w-3 fill-rose-500 text-rose-500" /> 100% Honest
            </span>
            <span>•</span>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-neutral-900 underline cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Simulated Stripe Checkout Modal */}
      <SimulationModal
        isOpen={isSimulationOpen}
        onClose={() => setIsSimulationOpen(false)}
        onSuccess={handleSimulationSuccess}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Elegant Toast notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4.5 bg-neutral-950 text-white rounded-sm border border-neutral-800 shadow-2xl flex gap-3.5 items-start"
          >
            <div className="shrink-0 mt-0.5">
              {toastMessage.type === "success" ? (
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              ) : toastMessage.type === "warning" ? (
                <ShieldAlert className="h-5 w-5 text-amber-400" />
              ) : (
                <Smile className="h-5 w-5 text-neutral-400" />
              )}
            </div>
            <div className="flex-1 space-y-0.5 text-left">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                {toastMessage.text}
              </h4>
              <p className="font-sans text-[11px] text-neutral-400 leading-normal">
                {toastMessage.sub}
              </p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="font-mono text-[10px] text-neutral-500 hover:text-white transition-colors cursor-pointer uppercase font-bold shrink-0 mt-0.5"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
