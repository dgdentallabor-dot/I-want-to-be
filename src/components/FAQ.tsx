import { HelpCircle, Sparkles } from "lucide-react";
import { FAQItem } from "../types";

const faqItems: FAQItem[] = [
  {
    id: "charity",
    question: "Is this a charity?",
    answer: "No. Charities aim to solve real problems and helper societies. I am simply a single individual sitting at a keyboard wanting a sportscar and premium food items. There is zero tax write-off, zero charitable benefit, and zero ethical high ground here.",
  },
  {
    id: "world",
    question: "Will my dollar change the world?",
    answer: "Almost certainly not. It won't fund clean energy, vaccinate any pets, or plant trees. It goes into my bank account, where it will eventually flow into restaurants, gadget reviews, and travel boards. However, it will change my mood slightly for about 4 seconds.",
  },
  {
    id: "will-rich",
    question: "Will you become rich?",
    answer: "Statistically speaking, probably not. Unless this page somehow goes viral on professional internet forums, I will likely end up with about enough to buy a nice jacket and a single bottle of sparkling water. But a nice jacket is still better than no jacket.",
  },
  {
    id: "why-do",
    question: "Then why are you doing this?",
    answer: "Because I was curious whether radical honesty is more refreshing than fake marketing. The internet is bloated with startups pretending to 'democratize synergy lists' when they just want to make a profit. I wanted to see what happens when you skip the marketing presentation entirely.",
  },
  {
    id: "where-money",
    question: "Where does the money go?",
    answer: "Directly toward my financial ambitions. It lives in a designated bank balance labelled 'Luxury & Absurdity Sandbox', waiting to be spent on the aforementioned yacht, car, overly expensive mechanical watch and proof that my ego is doing fine",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-neutral-100 sm:px-8 bg-neutral-50/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-2">
            02 // Deep Transparency
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900">
            The Most Honest FAQ On The Internet
          </h2>
          <p className="mt-3 text-xs text-neutral-500 max-w-sm mx-auto">
            Answers to questions that corporate PR departments would spend eighteen weeks rewriting.
          </p>
        </div>

        <div className="space-y-8 divide-y divide-neutral-200/80">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`pt-8 ${index === 0 ? "pt-0 border-t-0" : ""}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Question column */}
                <div className="md:col-span-1">
                  <h3 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-tight flex items-start gap-2">
                    <span className="font-mono text-xs font-medium text-neutral-400">Q // </span>
                    <span>{item.question}</span>
                  </h3>
                </div>

                {/* Answer column */}
                <div className="md:col-span-2">
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
