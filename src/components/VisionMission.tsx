import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative py-24 bg-navy-slate/20 border-t border-navy-slate/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="glass p-8 rounded-xl border border-gold/15 flex flex-col items-start relative group overflow-hidden">
            {/* Visual glow overlay */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            
            <div className="p-3 bg-navy-slate/60 border border-gold/20 rounded-md mb-6 relative z-10">
              <Eye className="w-6 h-6 text-gold" />
            </div>
            
            <h3 className="text-2xl font-bold text-warm-white tracking-wide mb-4 relative z-10">
              Our Vision
            </h3>
            
            <p className="text-sm text-warm-white/70 font-light leading-relaxed relative z-10">
              To become a trusted and preferred financial advisory firm by empowering
              individuals and businesses with innovative financial solutions, expert guidance,
              and lifelong partnerships.
            </p>
          </div>

          {/* Mission Card */}
          <div className="glass p-8 rounded-xl border border-gold/15 flex flex-col items-start relative group overflow-hidden">
            {/* Visual glow overlay */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
            
            <div className="p-3 bg-navy-slate/60 border border-gold/20 rounded-md mb-6 relative z-10">
              <Target className="w-6 h-6 text-gold" />
            </div>
            
            <h3 className="text-2xl font-bold text-warm-white tracking-wide mb-4 relative z-10">
              Our Mission
            </h3>
            
            <p className="text-sm text-warm-white/70 font-light leading-relaxed relative z-10">
              To provide holistic financial, investment, insurance, taxation, and compliance
              services with integrity, professionalism, and transparency—helping clients create,
              protect, and grow their wealth at every stage of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
