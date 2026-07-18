"use client";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-navy-dark">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 z-0">
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
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-light">
              SWAMI ENTERPRISES
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-warm-white leading-tight mb-6">
            Guiding Your Financial Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Clarity and Confidence
            </span>
          </h1>

          {/* Hero Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-warm-white/70 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            At Swami Enterprises, we help individuals, families, and businesses
            make informed financial decisions through trusted advice, personalised
            solutions, and professional expertise.
          </p>

          {/* Supporting line */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gold font-bold mb-10">
            Your Financial Goals. Our Expertise. Your Success.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded shadow-lg shadow-gold/10 hover:shadow-gold/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Free Consultation
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#services");
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-warm-white bg-navy-slate hover:bg-navy-light/60 border border-navy-light/40 rounded hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
