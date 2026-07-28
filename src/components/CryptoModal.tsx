import { useEffect, useState } from "react";
import { X, Copy, Check, AlertTriangle, Coins } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import qrCodeImage from "../assets/images/qr_code_base.png";

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CryptoModal({ isOpen, onClose }: CryptoModalProps) {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0xC25c61120F5A392dC56D23FA5459699fAaB645D6";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark semi-transparent background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-white my-auto flex flex-col items-center text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Icon / Badge */}
            <div className="inline-flex items-center gap-2 bg-neutral-800/80 border border-neutral-700/60 px-3 py-1 rounded-full text-xs font-mono font-medium text-neutral-300 mb-4">
              <Coins className="h-3.5 w-3.5 text-blue-400" />
              <span>Crypto Donation</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Fund My Bad Decisions- $1 
            </h2>

            {/* Subheading */}
            <p className="mt-1.5 font-sans text-xs sm:text-sm text-neutral-400 font-light">
              Scan the QR code or copy the wallet address.
            </p>

            {/* Crypto Disclaimer Text */}
            <div className="mt-3.5 w-full bg-neutral-950/80 border border-neutral-800 rounded-xl p-3.5 text-center text-xs text-neutral-300 leading-relaxed font-sans space-y-1.5">
              <p className="font-medium text-neutral-200">
                This website has absolutely no interest in convincing you to buy crypto.
              </p>
              <p className="text-neutral-400 italic">
                Come back when you accidentally own some.
              </p>
              <p className="font-semibold text-amber-400">
                We'll still be here!
              </p>
            </div>

            {/* Network Label */}
            <div className="mt-4 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold px-3.5 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>USDC on Base Network</span>
            </div>

            {/* QR Code Area - Clean White Margin & Proportions */}
            <div className="mt-5 w-full bg-white p-4 sm:p-5 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 aspect-square flex items-center justify-center select-none">
                <img
                  src={qrCodeImage}
                  alt="Crypto Donation QR Code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Wallet Address Display */}
            <div className="mt-5 w-full">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 sm:p-3.5 font-mono text-xs text-neutral-300 tracking-wider break-all select-all text-center mb-3">
                {walletAddress}
              </div>

              {/* Copy Wallet Address Button */}
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 bg-white text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-200 cursor-pointer active:scale-98 shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-emerald-950 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Wallet Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Warning Message */}
            <div className="mt-5 w-full bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 text-left flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed font-sans">
              <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Only send USDC using the Base network. Funds sent using another token or network may be permanently lost.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
