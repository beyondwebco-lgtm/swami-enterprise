"use client";

import { CalendarCheck, TrendingUp, ShieldAlert, Landmark, ArrowRight, ExternalLink } from "lucide-react";

export interface FormItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  badge: string;
}

export const GOOGLE_FORMS: FormItem[] = [
  {
    id: "pre-meeting",
    title: "Pre-Meeting Form",
    subtitle: "Schedule & Prepare Your Consultation",
    description: "Share your financial priorities and current portfolio details before our meeting so we can prepare a tailored advisory strategy for you.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSf0wABbSPo28hLaFsIt_u3Kxj5DkmiycO6BnFmzEVR1lg64qQ/viewform",
    icon: <CalendarCheck className="w-6 h-6 text-gold" />,
    badge: "Recommended First Step",
  },
  {
    id: "mutual-fund",
    title: "Mutual Fund Enquiry",
    subtitle: "SIP & Wealth Creation Advisory",
    description: "Submit your mutual fund investment goals, risk preference, and horizon for personalized scheme recommendations and portfolio setup.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScEZ9xYGq6xKnD3QLPZlXHeQo1U1rrVpH2-9QyJJeP8KDhpsA/viewform",
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    badge: "Investments",
  },
  {
    id: "health-insurance",
    title: "Health Insurance Enquiry",
    subtitle: "Family & Individual Health Coverage",
    description: "Get customized health insurance quotes, cash-less hospital coverage evaluation, and critical illness policy comparison.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfHl3pAe_638Y5nUd0fZ2u7fHL1XVFZom345PoesTBgrbmouA/viewform",
    icon: <ShieldAlert className="w-6 h-6 text-gold" />,
    badge: "Protection",
  },
  {
    id: "loan-enquiry",
    title: "Loan Enquiry Form",
    subtitle: "Home, Personal & Business Loans",
    description: "Submit loan requirements for competitive interest rates, fast processing, and guidance across top banks and NBFC partners.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeYMI2mUSbJFfve2UnTpWG8tksaUqfHIWP10GVd1pS34btXSg/viewform",
    icon: <Landmark className="w-6 h-6 text-gold" />,
    badge: "Borrowing",
  },
];

export default function QuickFormsSection() {
  const handleOpenForm = (form: FormItem) => {
    window.open(form.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="online-forms" className="relative py-20 bg-navy-dark border-t border-gold/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Quick Application Hub
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-warm-white">
            Specialized Online Enquiry Forms
          </p>
          <p className="text-sm text-warm-white/70 font-light mt-3">
            Fill out our dedicated Google Forms to speed up your enquiry or prepare for your advisory session.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
        </div>

        {/* 4 Form Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_FORMS.map((form) => (
            <div
              key={form.id}
              style={{
                border: "2px solid rgba(212, 175, 55, 0.35)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
              className="bg-navy-slate/90 rounded-xl p-6 flex flex-col justify-between hover:border-gold hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header icon & badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-navy-dark border border-gold/25 rounded-lg group-hover:border-gold/60 transition-colors">
                    {form.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full">
                    {form.badge}
                  </span>
                </div>

                {/* Form Title & Subtitle */}
                <h3 className="text-xl font-bold text-warm-white mb-1 group-hover:text-gold transition-colors">
                  {form.title}
                </h3>
                <p className="text-xs font-medium text-gold/80 mb-3">
                  {form.subtitle}
                </p>
                <p className="text-xs text-warm-white/70 font-light leading-relaxed mb-6">
                  {form.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 mt-4 pt-4 border-t border-gold/15">
                <button
                  onClick={() => handleOpenForm(form)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded-lg transition-all duration-300 shadow-md"
                >
                  <span>Fill Form Here</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </button>

                <a
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-[11px] font-medium text-warm-white/60 hover:text-gold hover:bg-navy-dark/50 rounded-lg transition-colors"
                >
                  <span>Open in Google Forms</span>
                  <ExternalLink className="w-3 h-3 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
