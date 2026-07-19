"use client";

import { TrendingUp, ShieldAlert, Landmark, FileText, CheckCircle2 } from "lucide-react";

export default function ServiceVerticals() {
  const verticals = [
    {
      id: "invest",
      title: "Invest",
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
      ],
    },
    {
      id: "protect",
      title: "Protect",
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
      icon: <FileText className="w-8 h-8 text-gold" />,
      description: "Stay financially organised and compliant with dependable tax and business-support services.",
      services: [
        "Income Tax Return Filing",
        "GST Registration",
        "GST Return Filing",
        "Tax Planning",
        "Business Registration",
        "Dematerialisation of Physical Shares",
        "Investment & Trading Account Support",
      ],
    },
  ];

  const handleEnquire = (serviceName: string) => {
    // Custom event to update Contact Form selection
    const event = new CustomEvent("swami-service-select", { detail: serviceName });
    window.dispatchEvent(event);
    
    // Scroll down to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-navy-dark">
      {/* Visual glowing accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Our Offerings
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-warm-white">
            Complete Financial Solutions for Every Stage of Life
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vert) => (
            <div
              key={vert.id}
              className="glow-card glass-card flex flex-col justify-between p-6 rounded-[16px] border-2 border-[#8B6B1F] hover:border-[#C89B3C] shadow-lg shadow-[#8B6B1F]/10 hover:shadow-xl hover:shadow-[#C89B3C]/20 hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-navy-slate/50 border border-gold/15 rounded-lg">
                    {vert.icon}
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-gold/60 tracking-widest">
                    {vert.title} Services
                  </span>
                </div>

                {/* Vertical Name & Description */}
                <h3 className="text-2xl font-bold text-warm-white mb-3 tracking-wide">
                  {vert.title}
                </h3>
                <p className="text-sm text-warm-white/70 leading-relaxed font-light mb-6">
                  {vert.description}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gold/10 mb-6" />

                {/* Sub services list */}
                <ul className="space-y-3 mb-8">
                  {vert.services.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-warm-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mr-2.5 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
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
