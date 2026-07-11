import { motion } from "motion/react";
import pigImage from "../assets/images/cute_baby_pig_1782669440225.jpg";

export default function CutePig() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 border-t border-neutral-100 bg-white flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full border border-neutral-200 p-6 rounded-sm bg-neutral-50/20 shadow-xs flex flex-col items-center"
      >
        {/* Decorative subtle header */}
        <div className="w-full flex justify-between items-center border-b border-neutral-100 pb-3 mb-5 font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
          <span>Aesthetic Engagement Booster</span>
          <span>v1.0_pig_opt</span>
        </div>

        {/* Cute Baby Pig Image Frame */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white border border-neutral-200 p-2 rounded-xs overflow-hidden shadow-sm group">
          <img
            src={pigImage}
            alt="Extremely cute small baby pig on a pure white background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Sarcastic Engagement Sign */}
        <div className="mt-6 text-center max-w-xs">
          <h4 className="font-display text-sm font-extrabold text-neutral-900 tracking-wider uppercase">
            HERE IS A CUTE PIG.
          </h4>
          <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
            It has absolutely nothing to do with getting rich, but cute animals improve engagement. <span className="italic font-normal text-neutral-800">Allegedly.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
