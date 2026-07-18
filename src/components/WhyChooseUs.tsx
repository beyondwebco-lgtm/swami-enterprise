import {
  TrendingUp,
  Award,
  Home,
  UserCheck,
  Scale,
  Handshake,
  Headphones,
  Users2,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "18+ Years of Equity Market Expertise",
      desc: "Deep knowledge in navigating capital market cycles and equity trends.",
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "NISM-Certified Financial Professional",
      desc: "Advising with industry-standard certifications and professional rigor.",
    },
    {
      icon: <Home className="w-6 h-6 text-gold" />,
      title: "Comprehensive Solutions Under One Roof",
      desc: "Investments, protection, borrowing, and compliance coordinated seamlessly.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gold" />,
      title: "Personalised Investment Strategies",
      desc: "Custom-made financial maps structured specifically for your life goals.",
    },
    {
      icon: <Scale className="w-6 h-6 text-gold" />,
      title: "Transparent & Ethical Advisory Services",
      desc: "Honest communication with no unverified claims or hidden guidelines.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-gold" />,
      title: "Trusted Partnerships with Top Institutions",
      desc: "Accessing quality platforms to deliver clean execution services.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-gold" />,
      title: "Dedicated Client Support",
      desc: "Committed guidance and responsive assistance at every step.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-gold" />,
      title: "Long-Term Relationship Focus",
      desc: "Partnering through life stages to build wealth across generations.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 bg-navy-dark">
      {/* Light visual graph pattern in background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Our Edge
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-warm-white">
            Why Choose Swami Enterprises?
          </h3>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="glow-card glass-card p-6 rounded-lg border border-gold/5 flex flex-col items-start"
            >
              <div className="p-3 bg-navy-slate/50 border border-gold/10 rounded-md mb-5">
                {point.icon}
              </div>
              <h4 className="text-sm font-semibold text-warm-white tracking-wider mb-2 leading-snug">
                {point.title}
              </h4>
              <p className="text-xs text-warm-white/60 leading-relaxed font-light mt-auto">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
