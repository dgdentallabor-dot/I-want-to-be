import React from "react";
import { X, ShieldAlert, CalendarDays, Lock, ExternalLink, Server, Coins } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
            className="absolute inset-0 bg-neutral-900/65 backdrop-blur-xs"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ scale: 0.96, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.38 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 md:p-8 shadow-2xl flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 shrink-0 border-b border-neutral-100 pb-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-0.5 font-mono text-[10px] font-medium text-neutral-600 mb-2">
                <ShieldAlert className="h-3.5 w-3.5 text-neutral-500" />
                <span>Legalese & Compliance Notice</span>
              </div>
              <h3 className="font-display text-2xl font-black tracking-tight text-neutral-900">
                Privacy Policy & Legal Terms
              </h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase">
                <CalendarDays className="h-3 w-3" />
                <span>Last Updated: July 2026</span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed custom-scrollbar">
              
              {/* 1. Introduction */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide flex items-center gap-2">
                  <Lock className="h-4 w-4 text-neutral-700" />
                  <span>1. Introduction & General Information</span>
                </h4>
                <p>
                  This website operates as a personal, non-commercial voluntary crowdfunding project. We take your privacy and legal data compliance seriously under applicable data protection laws, including the European Union General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA).
                </p>
                <p className="mt-2">
                  We do not operate user accounts, customer databases, email newsletters, or tracking algorithms. You can browse this website anonymously without disclosing personal identifiers.
                </p>
              </div>

              {/* 2. Web Hosting Provider - Hostinger */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide flex items-center gap-2">
                  <Server className="h-4 w-4 text-neutral-700" />
                  <span>2. Web Hosting & Infrastructure (Hostinger)</span>
                </h4>
                <p>
                  This website is hosted on servers provided by <strong>Hostinger International Ltd.</strong> (Hostinger, UAB, Švitrigailos g. 34, 03230 Vilnius, Lithuania).
                </p>
                <p className="mt-2">
                  When you visit this website, Hostinger automatically collects technical server log data required for network stability, server operations, DDoS protection, and security compliance. Server log information may include:
                </p>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 font-mono text-[11px] text-neutral-500">
                  <li>IP address (anonymized where required by law)</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referrer URL</li>
                  <li>Date and time of server access</li>
                  <li>HTTP request header details</li>
                </ul>
                <p className="mt-2">
                  <strong>Legal Basis:</strong> Processing of server logs is based on Art. 6(1)(f) GDPR (Legitimate Interest) to ensure secure server infrastructure and prevent cyberattacks. For more information, please review Hostinger's Privacy Policy:{" "}
                  <a
                    href="https://www.hostinger.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-900 font-medium underline hover:text-neutral-700 font-mono text-[11px]"
                  >
                    <span>Hostinger Privacy Policy</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>

              {/* 3. Payment & Cryptocurrency Transfers - Trust Wallet */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide flex items-center gap-2">
                  <Coins className="h-4 w-4 text-neutral-700" />
                  <span>3. Cryptocurrency Contributions (Trust Wallet)</span>
                </h4>
                <p>
                  <strong>No Fiat Processing:</strong> We do not accept credit cards, debit cards, bank transfers, or traditional payment cards.
                </p>
                <p className="mt-2 font-medium text-neutral-800">
                  Voluntary contributions are made exclusively via cryptocurrency transfers directly to our public wallet address using non-custodial wallet applications, such as <strong>Trust Wallet</strong>, or other decentralized web3 software.
                </p>
                <p className="mt-2">
                  Trust Wallet (operated by DApps Platform, Inc.) is a non-custodial software wallet. We do not collect, process, or store your private key, seed phrase, financial bank details, or personal identity when you interact with Trust Wallet or send cryptocurrency.
                </p>
                <p className="mt-2">
                  For details on how Trust Wallet processes technical data when utilizing their application, visit:{" "}
                  <a
                    href="https://trustwallet.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-900 font-medium underline hover:text-neutral-700 font-mono text-[11px]"
                  >
                    <span>Trust Wallet Privacy Policy</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>

              {/* 4. Public Blockchain Immutability Disclaimer */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  4. Public Blockchain Ledger & Privacy Notice
                </h4>
                <p>
                  Cryptocurrency transactions occur on public, decentralized blockchain networks (such as Base / Ethereum). Blockchain ledgers are public, permanent, transparent, and globally distributed databases.
                </p>
                <p className="mt-2">
                  When you transmit a cryptocurrency contribution, your public wallet address, transaction hash, timestamp, and amount transferred become permanently recorded on the public blockchain. We do not own, control, or possess the ability to alter, delete, or modify public blockchain records.
                </p>
              </div>

              {/* 5. Cookies & Tracking Technologies */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  5. Cookies & Tracking
                </h4>
                <p>
                  This website does not use tracking cookies, advertising trackers, Google Analytics, Facebook Pixel, or cross-site telemetry tools. No tracking identifiers are stored on your device.
                </p>
              </div>

              {/* 6. Voluntary Nature & Legal Disclaimers */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  6. Voluntary Gift Disclaimer & Non-Refundability
                </h4>
                <p>
                  All contributions submitted via cryptocurrency are completely voluntary personal gifts made without expectation of goods, services, equity, interest, financial returns, or tax deductions.
                </p>
                <p className="mt-2">
                  Due to the irreversible nature of decentralized blockchain networks, all cryptocurrency transfers are final and non-refundable. This website does not offer financial advice or regulated investment opportunities.
                </p>
              </div>

              {/* 7. Data Subject Rights (GDPR & CCPA) */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  7. Your Rights under Data Protection Laws
                </h4>
                <p>
                  Under GDPR (EU) and CCPA (USA), users have rights regarding personal data, including the right to request access, rectification, or deletion of personal data held by data controllers.
                </p>
                <p className="mt-2">
                  Because we do not collect personal names, emails, or user profiles, we hold no personal database files. Note that data permanently recorded on public decentralized blockchains cannot be altered or erased by any party due to mathematical protocol design.
                </p>
              </div>

              {/* 8. Contact & Controller Information */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  8. Contact Information
                </h4>
                <p>
                  If you have legal or privacy questions regarding this website or hoster notifications, please contact the site operator at:{" "}
                  <a
                    href="mailto:info@shamelesslyhonest.com"
                    className="text-neutral-900 font-medium underline font-mono text-[12px]"
                  >
                    info@shamelesslyhonest.com
                  </a>
                </p>
              </div>

              {/* 9. Policy Revisions */}
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  9. Revisions & Updates
                </h4>
                <p>
                  We reserve the right to modify this Privacy Policy at any time to reflect legal changes or technical updates. The latest version will always be accessible via this link.
                </p>
              </div>

            </div>

            {/* Footer actions of modal */}
            <div className="mt-6 shrink-0 border-t border-neutral-100 pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-sm bg-neutral-900 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Accept & Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
