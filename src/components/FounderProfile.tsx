import Image from "next/image";
import { BookOpen, Award, FileCheck } from "lucide-react";

export default function FounderProfile() {
  const qualifications = [
    { title: "B.Com.", desc: "Bachelor of Commerce" },
    {
      title: "GDC&A",
      desc: "Government Diploma in Co-operation & Accountancy",
    },
    {
      title: "PGDFM",
      desc: "Post Graduate Diploma in Financial Management",
    },
  ];

  const certifications = [
    "NISM Certified — Mutual Funds",
    "NISM Certified — Portfolio Management Services (PMS)",
    "NISM Certified — Equity Derivatives",
    "NISM Certified — Currency Derivatives",
  ];

  return (
    <section className="relative py-24 bg-navy-slate/40 border-t border-navy-slate/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Portrait on the left (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 bg-navy-slate/50 p-2 shadow-2xl group hover:border-gold/60 transition-all duration-500">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/swamiphoto.webp"
                  alt="Mr. Sameer Dalvi - Founder of Swami Enterprises"
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle gradient overlay at bottom for title styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <h4 className="text-xl font-bold text-warm-white tracking-wide shadow-sm">
                    Mr. Sameer Dalvi
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gold mt-1 font-semibold">
                    Proprietor & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography and Qualifications on the right (7 columns) */}
          <div className="lg:col-span-7">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
              Leadership
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-warm-white leading-tight mb-6">
              Mr. Sameer Dalvi
            </h3>

            {/* Elegant Divider */}
            <div className="w-16 h-1 bg-gold rounded mb-8" />

            <div className="space-y-6 text-warm-white/70 font-light leading-relaxed text-sm sm:text-base mb-8">
              <p>
                Mr. Sameer Dalvi is a seasoned financial professional with over 18 years
                of experience in the Indian capital markets, specialising in the Equity
                Segment. His experience in investment planning and portfolio management has
                helped clients pursue their financial goals with greater confidence.
              </p>
            </div>

            {/* Qualifications & Certifications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Qualifications */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-4 h-4 text-gold" />
                  <h4 className="text-sm font-semibold tracking-wider text-warm-white">
                    Qualifications
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start text-xs leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mr-2 mt-1.5 shadow-sm shadow-gold/40" />
                      <div>
                        <strong className="text-gold font-bold">{q.title}</strong>{" "}
                        <span className="text-warm-white/90">— {q.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-gold" />
                  <h4 className="text-sm font-semibold tracking-wider text-warm-white">
                    Certifications
                  </h4>
                </div>
                <ul className="space-y-2">
                  {certifications.map((c, idx) => (
                    <li key={idx} className="flex items-start text-xs text-warm-white/80">
                      <FileCheck className="w-3.5 h-3.5 text-gold flex-shrink-0 mr-2 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Closing text */}
            <div className="p-4 border-l-2 border-gold bg-navy-slate/20 rounded-r">
              <p className="text-xs sm:text-sm text-warm-white/80 italic font-light leading-relaxed">
                “With a disciplined investment approach and deep market knowledge, Mr. Dalvi
                provides unbiased, research-driven financial solutions tailored to each client’s
                needs.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
