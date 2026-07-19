import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Mutual Fund Investor",
      comment:
        "Sameer sir explained every investment option in simple terms and helped me build a disciplined investment plan. I now feel much more confident about my financial future. Highly recommended.",
      stars: 5,
    },
    {
      name: "Priya Sharma",
      role: "Working Professional",
      comment:
        "I approached Swami Enterprises for financial planning and was impressed by the honest guidance. There was no unnecessary selling—only practical advice based on my goals.",
      stars: 5,
    },
    {
      name: "Amit Desai",
      role: "Business Owner",
      comment:
        "From business insurance to tax planning, everything was handled professionally under one roof. Their responsiveness and expertise made the entire process smooth.",
      stars: 5,
    },
    {
      name: "Sneha Kulkarni",
      role: "Home Loan Customer",
      comment:
        "The team guided me through every step of my home loan journey. Their support made the documentation process simple and stress-free.",
      stars: 5,
    },
    {
      name: "Kunal Shah",
      role: "Equity Investor",
      comment:
        "Portfolio reviews and investment suggestions are always backed by research and explained clearly. I truly appreciate the transparent approach and long-term perspective.",
      stars: 5,
    },
    {
      name: "Neha Patil",
      role: "Family Financial Planning",
      comment:
        "We wanted to secure our family's future through insurance and investments. Swami Enterprises helped us choose solutions that suited our needs without any pressure.",
      stars: 5,
    },
    {
      name: "Rohan Verma",
      role: "Salaried Professional",
      comment:
        "Filing my income tax returns has become effortless. The team is knowledgeable, prompt, and always available to answer my questions.",
      stars: 5,
    },
    {
      name: "Pooja Nair",
      role: "Entrepreneur",
      comment:
        "I received excellent guidance for business registration and GST compliance. Everything was completed efficiently, and I continue to rely on their advisory services.",
      stars: 5,
    },
    {
      name: "Vivek Joshi",
      role: "Long-Term Client",
      comment:
        "What I value most is the trust and transparency. Sameer Dalvi takes the time to understand your goals and recommends solutions that genuinely fit your financial journey.",
      stars: 5,
    },
    {
      name: "Anjali Kapoor",
      role: "Investment & Insurance Client",
      comment:
        "Swami Enterprises has become my trusted financial partner. Whether it's investments, insurance, or tax-related guidance, I know I'll receive professional and unbiased advice every time.",
      stars: 5,
    },
  ];

  // Split testimonials into two rows for marquee
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);

  const renderCard = (t: typeof testimonials[0], index: number) => (
    <div
      key={index}
      className="w-[340px] sm:w-[400px] flex-shrink-0 glass-card p-6 rounded-xl border border-gold/10 mx-3 relative flex flex-col justify-between group hover:border-gold/30 transition-all duration-300"
    >
      <div>
        {/* Quote Icon & Stars */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {[...Array(t.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <Quote className="w-5 h-5 text-gold/20 group-hover:text-gold/40 transition-colors duration-300" />
        </div>

        {/* Comment Text */}
        <p className="text-xs sm:text-sm text-warm-white/80 font-light leading-relaxed mb-6 italic">
          &ldquo;{t.comment}&rdquo;
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center space-x-3 pt-4 border-t border-navy-slate/60">
        <div className="w-9 h-9 rounded-full bg-navy-slate/80 border border-gold/20 flex items-center justify-center text-gold font-bold text-xs">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h4 className="text-xs font-bold text-warm-white tracking-wider">
            {t.name}
          </h4>
          <p className="text-[10px] uppercase tracking-widest text-gold/80 mt-0.5">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="relative py-24 bg-navy-dark border-t border-navy-slate/40 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
          Client Experiences & Trust
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-warm-white">
          What Our Clients Say
        </h3>
        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        <p className="text-sm text-warm-white/60 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
          Read authentic feedback from individuals, working professionals, and business owners who rely on Swami Enterprises for clear financial guidance.
        </p>
      </div>

      {/* Marquee Row 1 (Scrolling Left) */}
      <div className="relative w-full overflow-hidden mb-6">
        {/* Left & Right Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left">
          {/* Duplicate row items to create seamless 100% infinite loop */}
          {firstRow.map((t, idx) => renderCard(t, idx))}
          {firstRow.map((t, idx) => renderCard(t, idx + 100))}
        </div>
      </div>

      {/* Marquee Row 2 (Scrolling Right) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-right">
          {/* Duplicate row items to create seamless 100% infinite loop */}
          {secondRow.map((t, idx) => renderCard(t, idx))}
          {secondRow.map((t, idx) => renderCard(t, idx + 200))}
        </div>
      </div>
    </section>
  );
}
