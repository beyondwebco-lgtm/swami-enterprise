"use client";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePreMeetingForm = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf0wABbSPo28hLaFsIt_u3Kxj5DkmiycO6BnFmzEVR1lg64qQ/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-navy-dark">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-navy-light/20 rounded-full blur-[150px]" />
      </div>

      {/* Abstract geometric gold grid pattern representing wealth trends */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
            </linearGradient>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Subtle line representing steady market growth */}
          <path
            d="M -100 700 Q 200 650 500 450 T 1100 250 T 1800 150"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2.5"
            strokeDasharray="8 4"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Headline */}
          <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold tracking-tight text-warm-white leading-tight mb-6">
            Guiding Your Financial Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Clarity and Confidence
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg text-warm-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Comprehensive financial advisory, mutual fund investments, equity portfolios,
            insurance protection, borrowing guidance, and tax compliance coordination.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePreMeetingForm}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Book a Free Consultation
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#services");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-warm-white hover:text-gold bg-navy-slate/50 hover:bg-navy-slate border border-gold/20 hover:border-gold/40 rounded-lg transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

