export default function Partners() {
  const partners = [
    { name: "Motilal Oswal", desc: "Equity & Wealth Management Solutions" },
    { name: "5paisa", desc: "Discount Broking & Demat Support Services" },
    {
      name: "Prudent Corporate",
      fullName: "Prudent Corporate Advisory Services Ltd.",
      desc: "Mutual Funds Distribution & Financial Advisory Platforms",
    },
    { name: "AssetPlus", desc: "Digital Mutual Fund & Wealth Tech Operations" },
  ];

  return (
    <section id="partners" className="relative py-16 sm:py-24 bg-navy-dark border-t border-navy-slate/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Collaborations
          </h2>
          <h3 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-warm-white">
            Our Trusted Partners
          </h3>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
          <p className="text-sm text-warm-white/60 font-light mt-6 leading-relaxed">
            To deliver strong financial solutions and seamless investment services,
            Swami Enterprises works with leading financial institutions and platforms.
          </p>
        </div>

        {/* Text-based partner cards (no fake logos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-navy-slate/20 border border-gold/10 flex flex-col justify-between hover:border-gold/25 transition-colors duration-300"
            >
              <div>
                <span className="text-xs font-semibold text-gold tracking-widest uppercase">
                  PARTNER
                </span>
                <h4 className="text-lg font-bold text-warm-white tracking-wide mt-2">
                  {partner.fullName || partner.name}
                </h4>
              </div>
              <p className="text-xs text-warm-white/50 leading-relaxed font-light mt-4">
                {partner.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer */}
        <div className="max-w-3xl mx-auto text-center p-4 border border-gold/10 bg-navy-slate/20 rounded">
          <p className="text-[11px] text-gold/80 font-light leading-relaxed">
            ⚠️ <strong>Disclaimer:</strong> Partner relationships and service availability
            may vary by product and client eligibility.
          </p>
        </div>
      </div>
    </section>
  );
}
