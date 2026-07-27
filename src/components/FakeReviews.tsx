import { Star, Building2, Briefcase, ShieldCheck, Sparkles, Quote, Globe, Zap, Layers, Command } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  logo: typeof Building2;
  avatar: string;
  rating: number;
  quote: string;
  tag: string;
}

const fakeReviews: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Robert Hayes",
    role: "Senior Psychiatrist",
    company: "Advanced Psychiatry Group",
    logo: Building2,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 4.0,
    quote: "I recommended this website to all my personalities. Four of them loved it. One is still writing an angry email.",
    tag: "Multiple Opinions Collected",
  },
  {
    id: "2",
    name: "Kayla Monetize",
    role: "Digital Creator, Thought Leader & Person Holding Coffee",
    company: "Influence Without Talent LLC",
    logo: Zap,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5.0,
    quote: "I sent $1 and posted a crying video about how vulnerable the experience made me feel. Full story in my paid newsletter.",
    tag: "Emotion Successfully Monetized",
  },
  {
    id: "3",
    name: "Jonathan Powerpoint",
    role: "Chief Visionary Vision Officer",
    company: "Global Leadership Institute",
    logo: Command,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 4.9,
    quote: "I sent $1, scheduled six meetings about it, created a task force, and hired three consultants. We now estimate the total cost at $48,000.",
    tag: "Budget Under Review",
  },
  {
    id: "4",
    name: "Michael Tomorrow",
    role: "Senior Director of Future Results",
    company: "Campaign Promise Technologies",
    logo: Globe,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5.0,
    quote: "I promised to send $1 on day one. We are currently in year four and remain fully committed to beginning the discussion.",
    tag: "Delivery Expected Soon™",
  },
  {
    id: "5",
    name: "Chad Sterling",
    role: "High-Performance Wealth Mentor",
    company: "Luxury Mindset International",
    logo: Briefcase,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&h=256&q=80",
    rating: 5.0,
    quote: "Poor people spend $1. Rich people invest $1. I know this because I rented a Lamborghini for the thumbnail.",
    tag: "Vehicle Returned at 6 PM",
  },
];

export default function FakeReviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 border-t border-neutral-200/80 bg-neutral-50/50">
      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-amber-700 mb-4"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-600" />
          <span>UNSOLICITED SOCIAL PROOF</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight"
        >
          Top Fake Reviews We Received This Month.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-sans text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto"
        >
          We couldn't convince our clients to leave reviews... so we wrote them ourselves. Please keep this between us.
        </motion.p>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fakeReviews.map((item, index) => {
          const CompanyIcon = item.logo;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top bar with Company Logo & Satirical Tag */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-5">
                  <div className="flex items-center gap-2 text-neutral-800">
                    <CompanyIcon className="h-4 w-4 text-blue-600 shrink-0" />
                    <span className="font-mono text-xs font-bold tracking-tight text-neutral-700">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Profile Photo & Info */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Large Circular Profile Photo */}
                  <div className="relative shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-neutral-100 shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-400 text-neutral-900 rounded-full p-1 border-2 border-white shadow-xs">
                      <Quote className="h-3 w-3 fill-neutral-900" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-base font-bold text-neutral-900 leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 font-medium leading-tight mt-0.5">
                      {item.role}
                    </p>
                    {/* Star Rating (Filled vs Unfilled) */}
                    <div className="flex items-center gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <Star
                          key={starVal}
                          className={`h-4 w-4 ${
                            starVal <= item.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-neutral-200 text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm text-neutral-700 leading-relaxed font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Badge Tag */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="truncate">{item.tag}</span>
                <span className={`font-bold ${item.rating >= 4 ? "text-amber-500" : "text-rose-500"}`}>
                  {item.rating.toFixed(1)} ★
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
