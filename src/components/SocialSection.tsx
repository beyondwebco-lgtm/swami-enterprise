import { ExternalLink } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function SocialSection() {
  const linkedinUrl =
    "https://www.linkedin.com/in/swamienterprise2026?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const instagramUrl =
    "https://www.instagram.com/swamienterprises2026?utm_source=qr&igsh=bmhyYzQ4cHM3MmJh";

  return (
    <section className="relative py-20 bg-navy-slate/30 border-t border-navy-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
            Social Media
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-warm-white">
            Stay Connected
          </h3>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded" />
          <p className="text-sm text-warm-white/60 font-light mt-4 leading-relaxed">
            Follow Swami Enterprises on social media for financial insights, investment awareness, updates, and company news.
          </p>
        </div>

        {/* Two Premium Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <div className="glow-card glass-card p-8 rounded-xl border border-gold/15 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-navy-slate/60 border border-gold/20 rounded-lg group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <LinkedinIcon className="w-7 h-7 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold/60 tracking-widest">
                  Professional Network
                </span>
              </div>
              <h4 className="text-2xl font-bold text-warm-white mb-3">
                LinkedIn
              </h4>
              <p className="text-sm text-warm-white/70 font-light leading-relaxed mb-8">
                Stay updated with professional financial insights and company updates.
              </p>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on LinkedIn"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-warm-white hover:text-navy-dark bg-navy-slate/60 hover:bg-gold border border-gold/30 hover:border-gold rounded-lg transition-all duration-300 shadow-sm"
            >
              <span>Follow on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="glow-card glass-card p-8 rounded-xl border border-gold/15 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-navy-slate/60 border border-gold/20 rounded-lg group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <InstagramIcon className="w-7 h-7 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold/60 tracking-widest">
                  Visual Insights
                </span>
              </div>
              <h4 className="text-2xl font-bold text-warm-white mb-3">
                Instagram
              </h4>
              <p className="text-sm text-warm-white/70 font-light leading-relaxed mb-8">
                Explore financial tips, market awareness, and behind-the-scenes updates.
              </p>
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-warm-white hover:text-navy-dark bg-navy-slate/60 hover:bg-gold border border-gold/30 hover:border-gold rounded-lg transition-all duration-300 shadow-sm"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
