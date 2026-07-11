import React from "react";
import { X, ShieldAlert, FileText, CalendarDays } from "lucide-react";
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
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-sm border border-neutral-200 bg-white p-6 md:p-8 shadow-2xl flex flex-col"
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
                <span>Legalese & Disclaimers</span>
              </div>
              <h3 className="font-display text-2xl font-black tracking-tight text-neutral-900">
                Privacy Policy
              </h3>
              <div className="mt-1.5 flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase">
                <CalendarDays className="h-3 w-3" />
                <span>Last Updated: June 2026</span>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed custom-scrollbar">
              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  1. Introduction
                </h4>
                <p>This website respects your privacy.</p>
                <p className="mt-2">
                  The purpose of this website is to provide information and allow voluntary financial contributions. We do not maintain user accounts, mailing lists, public profiles, or any other form of user registration.
                </p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  2. Information We Collect
                </h4>
                <p>We do not directly collect personal information through forms, registrations, or account creation.</p>
                <p className="mt-2 font-medium text-neutral-800">
                  If you choose to make a payment, certain personal and payment-related information may be collected and processed by our payment provider, Stripe.
                </p>
                <p className="mt-2">This may include information such as:</p>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 font-mono text-[11px] text-neutral-500">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Billing information</li>
                  <li>Payment method details</li>
                  <li>Transaction information</li>
                </ul>
                <p className="mt-2">We do not receive or store your full payment card details.</p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  3. Payment Processing
                </h4>
                <p>
                  All payments are processed securely by Stripe. Stripe acts as an independent payment processor and handles personal information according to its own privacy practices.
                </p>
                <p className="mt-2">
                  For more information, please review Stripe's Privacy Policy:{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-900 font-medium underline hover:text-neutral-700 font-mono text-[12px]"
                  >
                    https://stripe.com/privacy
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  4. Server Logs
                </h4>
                <p>Like most websites, our hosting provider may automatically record technical information such as:</p>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 font-mono text-[11px] text-neutral-500">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Date and time of access</li>
                  <li>Requested pages</li>
                </ul>
                <p className="mt-2">This information is used solely for security, maintenance, and technical operation of the website.</p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  5. Cookies
                </h4>
                <p>
                  This website does not intentionally use advertising cookies, tracking cookies, or marketing cookies.
                  However, certain technical cookies may be used by third-party services necessary for the operation of the website, including payment processing services.
                </p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  6. Third-Party Services
                </h4>
                <p>This website may utilize third-party services that operate independently from us, including:</p>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 font-mono text-[11px] text-neutral-500">
                  <li>Stripe (payment processing)</li>
                  <li>Hosting providers</li>
                  <li>Security and infrastructure providers</li>
                </ul>
                <p className="mt-2">These providers may process personal data according to their own privacy policies.</p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  7. Data Retention
                </h4>
                <p>We do not maintain a separate database of donor information.</p>
                <p className="mt-2">
                  Transaction-related information may be retained by Stripe and other service providers as required by law, accounting obligations, fraud prevention requirements, or regulatory compliance.
                </p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  8. Your Rights
                </h4>
                <p>Depending on your jurisdiction, you may have rights regarding your personal data, including:</p>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 font-mono text-[11px] text-neutral-500">
                  <li>Access to your data</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of personal information where applicable</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                </ul>
                <p className="mt-2">Requests regarding payment information should generally be directed to Stripe.</p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  9. Contact
                </h4>
                <p>
                  If you have questions regarding this Privacy Policy, you may contact:{" "}
                  <a
                    href="mailto:info@shamelesslyhonest.com"
                    className="text-neutral-900 font-medium underline font-mono text-[12px]"
                  >
                    info@shamelesslyhonest.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-display text-neutral-900 font-bold text-sm sm:text-base mb-1.5 uppercase tracking-wide">
                  10. Changes to This Policy
                </h4>
                <p>This Privacy Policy may be updated from time to time. Any changes will be posted on this page with an updated revision date.</p>
              </div>
            </div>

            {/* Footer actions of modal */}
            <div className="mt-6 shrink-0 border-t border-neutral-100 pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-sm bg-neutral-900 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </ AnimatePresence>
  );
}
