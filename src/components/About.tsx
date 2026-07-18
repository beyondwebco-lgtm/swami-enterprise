import { Award, Shield, User } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Shield className="w-5 h-5 text-gold" />,
      title: "Trust & Integrity",
      desc: "Providing unbiased advice with transparent relationships.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Market Expertise",
      desc: "Backed by 18+ years of equity market experience.",
    },
    {
      icon: <User className="w-5 h-5 text-gold" />,
      title: "Client-Centric Planning",
      desc: "Customized strategies built around your goals and needs.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-navy-dark border-t border-navy-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block (7 columns) */}
          <div className="lg:col-span-7">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
              About Our Firm
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-warm-white leading-tight mb-6">
              Financial Guidance Built on Trust, Expertise and Long-Term Relationships
            </h3>
            
            {/* Elegant Divider */}
            <div className="w-16 h-1 bg-gold rounded mb-8" />

            <div className="space-y-6 text-warm-white/70 font-light leading-relaxed text-sm sm:text-base">
              <p>
                At Swami Enterprises, we are committed to helping individuals,
                families, and businesses make informed financial decisions through
                trusted advice, personalised solutions, and professional expertise.
                Guided by our philosophy,{" "}
                <strong className="text-gold-light font-semibold">
                  “Guiding Your Financial Future,”
                </strong>{" "}
                we build long-term relationships based on integrity, transparency, and
                excellence.
              </p>
              <p>
                Founded by Mr. Sameer Dalvi, Swami Enterprises offers comprehensive
                financial, investment, insurance, tax, and compliance services under
                one roof, making it a reliable destination for unified wealth growth and protection.
              </p>
            </div>
          </div>

          {/* Cards Highlights block (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-5 rounded-lg bg-navy-slate/30 border border-gold/5"
              >
                <div className="flex-shrink-0 p-2.5 bg-navy-light/40 border border-gold/15 rounded-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-white tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-warm-white/60 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
