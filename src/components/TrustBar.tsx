import { Shield, Award, Sparkles, Compass } from "lucide-react";

export default function TrustBar() {
  const trustPoints = [
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      text: "18+ Years of Equity Market Experience",
    },
    {
      icon: <Shield className="w-5 h-5 text-gold" />,
      text: "NISM-Certified Professional",
    },
    {
      icon: <Compass className="w-5 h-5 text-gold" />,
      text: "Personalised Financial Guidance",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      text: "One-Stop Financial Solutions",
    },
  ];

  return (
    <div className="relative z-10 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 glass p-6 rounded-xl border border-gold/15 shadow-xl">
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-navy-slate/30 transition-colors duration-300"
          >
            <div className="flex-shrink-0 p-2 bg-navy-slate/50 border border-gold/20 rounded-md">
              {point.icon}
            </div>
            <p className="text-sm font-medium text-warm-white/95 leading-snug">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
