import React, { useState } from "react";
import { X, Lock, CreditCard, Shield, AlertTriangle, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (amount: number) => void;
}

export default function SimulationModal({ isOpen, onClose, onSuccess }: SimulationModalProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s?/g, "").replace(/[^0-9]/gi, "");
    let matches = value.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || "";
    let parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      setCardNumber(parts.join(" "));
    } else {
      setCardNumber(value);
    }
    setErrorMsg("");
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      setExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    } else {
      setExpiry(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please tell me your name so I can appreciate your charity.");
      return;
    }
    if (cardNumber.length < 15) {
      setErrorMsg("A real or fake 16-digit card number is needed.");
      return;
    }
    if (expiry.length < 5) {
      setErrorMsg("Please enter a valid expiry date (MM/YY).");
      return;
    }
    if (cvc.length < 3) {
      setErrorMsg("Please provide a CVC.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Realistic visual simulator
    await new Promise((resolve) => setTimeout(resolve, 1800));

    try {
      const response = await fetch("/api/stats/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1 }),
      });

      if (response.ok) {
        setIsDone(true);
        setIsSubmitting(false);
        // Play subtle simulated success audio or call success callback
        setTimeout(() => {
          onSuccess(1);
        }, 1500);
      } else {
        throw new Error("Failed to process payment");
      }
    } catch (err) {
      setErrorMsg("The internet failed to process your simulated dollar. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 shadow-2xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isDone ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[10px] font-medium text-neutral-600 mb-2">
                    <Shield className="h-3 w-3 text-neutral-500" /> Secure Sandbox Payment
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900">
                    Contribute $1.00 USD
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    Our servers detected no production Stripe key is configured. This sandbox checkout simulates the API response and updates the progress.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Your Name / Handle
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Generous internet stranger"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrorMsg("");
                      }}
                      className="w-full rounded-xs border border-neutral-200 bg-neutral-50 px-3 py-2 font-sans text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-none transition-all duration-150"
                    />
                  </div>

                  {/* Card input group - Mimicking Stripe Elements style */}
                  <div>
                    <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                      Card Details
                    </label>
                    <div className="rounded-xs border border-neutral-200 bg-neutral-50 overflow-hidden focus-within:border-neutral-900 focus-within:bg-white transition-all duration-150">
                      {/* Card Number */}
                      <div className="flex items-center px-3 py-2 border-b border-neutral-100">
                        <CreditCard className="h-4 w-4 text-neutral-400 mr-2 shrink-0" />
                        <input
                          type="text"
                          required
                          placeholder="4242 4242 4242 4242"
                          maxLength={19}
                          value={cardNumber}
                          onChange={handleCardChange}
                          className="w-full bg-transparent font-mono text-sm text-neutral-800 placeholder-neutral-400 outline-none"
                        />
                      </div>

                      {/* Expiry and CVC block */}
                      <div className="flex divide-x divide-neutral-100">
                        <div className="w-1/2 px-3 py-2">
                          <input
                            type="text"
                            required
                            placeholder="MM / YY"
                            maxLength={5}
                            value={expiry}
                            onChange={handleExpiryChange}
                            className="w-full bg-transparent font-mono text-sm text-neutral-800 placeholder-neutral-400 outline-none"
                          />
                        </div>
                        <div className="w-1/2 px-3 py-2">
                          <input
                            type="password"
                            required
                            placeholder="CVC"
                            maxLength={4}
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value.replace(/\D/g, ""))}
                            className="w-full bg-transparent font-mono text-sm text-neutral-800 placeholder-neutral-400 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info card info */}
                  <div className="rounded-xs bg-amber-50/50 border border-amber-100 p-3 flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="font-sans text-[11px] text-amber-800 leading-normal">
                      <strong>Do not enter a real high-limit credit card.</strong> You can use any dummy card details (like 4242s) to complete this simulated transaction. It works exactly like a full production integration.
                    </p>
                  </div>

                  {errorMsg && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-600 font-medium"
                    >
                      {errorMsg}
                    </motion.p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center h-11 rounded-sm bg-neutral-900 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors disabled:bg-neutral-200 disabled:text-neutral-400 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-neutral-400 border-t-white"></span>
                        <span>Securing Simulated Assets...</span>
                      </div>
                    ) : (
                      "Authorize Simulated Payment"
                    )}
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-center gap-1.5 font-mono text-[10px] text-neutral-400">
                  <Lock className="h-3 w-3" /> Encrypted via Simulated SHA-256
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 mb-4 animate-bounce">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900">
                  Absolute Legend.
                </h3>
                <p className="mt-2 text-sm text-neutral-500 px-2 leading-relaxed">
                  Thank you, <strong className="text-neutral-900">{name || "stranger"}.</strong> Your imaginary dollar has climbed successfully into my virtual ledger.
                </p>

                <div className="mt-6 border-t border-dashed border-neutral-200 pt-4 font-mono text-[10px] text-neutral-400 text-left space-y-1.5 max-w-xs mx-auto">
                  <div className="flex justify-between">
                    <span>TRANSACTION_ID:</span>
                    <span className="text-neutral-700 font-bold">TX_SIM_{Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VALUE_TRANSFERRED:</span>
                    <span className="text-neutral-700 font-bold">$1.00 USD (SIM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>REAL-WORLD_GAIN:</span>
                    <span className="text-emerald-600 font-bold">Absolutely unit of truth</span>
                  </div>
                </div>

                <p className="mt-6 text-[10px] text-neutral-400 italic">
                  Completing loop and reloading progress stats...
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
