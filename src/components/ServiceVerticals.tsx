"use client";

import Image from "next/image";
import { TrendingUp, ShieldAlert, Landmark, FileText, CheckCircle2 } from "lucide-react";

interface ServiceFormMapping {
  url: string;
  title: string;
  subtitle: string;
}

const VERTICAL_FORMS: Record<string, ServiceFormMapping> = {
  Invest: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLScEZ9xYGq6xKnD3QLPZlXHeQo1U1rrVpH2-9QyJJeP8KDhpsA/viewform",
    title: "Mutual Fund Enquiry Form",
    subtitle: "Invest & Wealth Creation",
  },
  Protect: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfHl3pAe_638Y5nUd0fZ2u7fHL1XVFZom345PoesTBgrbmouA/viewform",
    title: "Health Insurance Enquiry Form",
    subtitle: "Family & Health Coverage",
  },
  Borrow: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeYMI2mUSbJFfve2UnTpWG8tksaUqfHIWP10GVd1pS34btXSg/viewform",
    title: "Loan Enquiry Form",
    subtitle: "Home, Personal & Business Loans",
  },
  Comply: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf0wABbSPo28hLaFsIt_u3Kxj5DkmiycO6BnFmzEVR1lg64qQ/viewform",
    title: "Pre-Meeting Form",
    subtitle: "Consultation & Compliance Support",
  },
};

export default function ServiceVerticals() {
  const verticals = [
    {
      id: "invest",
      title: "Invest",
      image: "/services/invest.jpg",
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      description: "Build long-term wealth with disciplined, research-driven investment strategies aligned with your financial goals.",
      services: [
        "Mutual Fund Investments",
        "Equity Investment Advisory",
        "Equity Portfolio Management",
        "Portfolio Review & Rebalancing",
        "Financial Planning",
        "Wealth Creation Strategies",
        "Stocks & Demat",
        "Dematerialisation of Physical Shares",
        "Investment & Trading Account Support",
      ],
    },
    {
      id: "protect",
      title: "Protect",
      image: "/services/protect.jpg",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />,
      description: "Protect what matters most with insurance solutions designed around your family, health, assets, and business.",
      services: [
        "Term Insurance",
        "Health Insurance",
        "Motor Insurance",
        "General Insurance",
        "Business Insurance",
      ],
    },
    {
      id: "borrow",
      title: "Borrow",
      image: "/services/borrow.jpg",
      icon: <Landmark className="w-8 h-8 text-gold" />,
      description: "Get guidance for suitable borrowing solutions with transparent support throughout the process.",
      services: [
        "Home Loan",
        "Business Loan",
        "Loan Against Property",
        "Personal Loan",
        "Vehicle Loan",
      ],
    },
    {
      id: "comply",
      title: "Comply",
      image: "/services/comply.jpg",
      icon: <FileText className="w-8 h-8 text-gold" />,
      description: "Stay financially organised and compliant with dependable tax and business-support services.",
      services: [
        "Income Tax Return Filing",
        "GST Registration",
        "GST Return Filing",
        "Tax Planning",
        "Business Registration",
      ],
    },
  ];

  const handleEnquire = (serviceName: string) => {
    const formData = VERTICAL_FORMS[serviceName];
    if (formData) {
      window.open(formData.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-navy-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Our Offerings
          </h2>
          <h3 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-warm-white">
            Complete Financial Solutions for Every Stage of Life
          </h3>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert) => (
            <div
              key={vert.id}
              style={{
                border: "3px solid #B8860B",
                boxShadow: "0 10px 30px rgba(139, 107, 31, 0.22)",
              }}
              className="glass-card flex flex-col justify-between p-6 rounded-xl hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(139,107,31,0.4)] transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden border border-gold/20 shadow-md">
                  <Image
                    src={vert.image}
                    alt={`${vert.title} Services - Swami Enterprises`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-navy-slate/50 border border-gold/15 rounded-lg">
                    {vert.icon}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-gold/60 tracking-widest">
                    {vert.title} Services
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-warm-white mb-3 tracking-wide">
                  {vert.title}
                </h3>
                <p className="text-sm text-warm-white/70 leading-relaxed font-light mb-6">
                  {vert.description}
                </p>

                <div className="w-full h-[1px] bg-gold/10 mb-6" />

                <ul className="space-y-3 mb-8">
                  {vert.services.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-warm-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mr-2.5 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleEnquire(vert.title)}
                className="w-full mt-auto inline-flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-warm-white hover:text-navy-dark bg-transparent hover:bg-gold border border-gold/45 hover:border-gold rounded transition-all duration-300 shadow-sm"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
