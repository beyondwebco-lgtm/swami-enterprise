"use client";

import Image from "next/image";
import { LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkedinUrl =
    "https://www.linkedin.com/in/swamienterprise2026?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const instagramUrl =
    "https://www.instagram.com/swamienterprises2026?utm_source=qr&igsh=bmhyYzQ4cHM3MmJh";

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Invest (Mutual Funds & Equity)", href: "#services" },
    { name: "Protect (Insurance Solutions)", href: "#services" },
    { name: "Borrow (Loan Solutions)", href: "#services" },
    { name: "Comply (Tax & GST Compliance)", href: "#services" },
  ];

  return (
    <footer className="bg-navy-dark text-warm-white/80 border-t border-navy-slate pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-gold/30">
                <Image
                  src="/logo.jpeg"
                  alt="Swami Enterprises Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-wider text-warm-white">
                  SWAMI ENTERPRISES
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gold">
                  Guiding Your Financial Future
                </span>
              </div>
            </div>
            <p className="text-xs text-warm-white/60 font-light leading-relaxed max-w-sm">
              Swami Enterprises offers comprehensive financial planning, investment advisory,
              insurance protection, borrowing guidance, and tax compliance coordination.
              We focus on enabling sustainable wealth building and long-term client success.
            </p>

            {/* Follow Us in Footer */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gold block mb-2.5">
                Follow Us
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gold hover:text-primary-hover hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <LinkedinIcon className="w-4.5 h-4.5 fill-current" />
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gold hover:text-primary-hover hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleScroll(link.href);
                      }
                    }}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(service.href);
                    }}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gold mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex flex-col">
                <span className="text-warm-white/40 uppercase tracking-widest text-[9px] font-semibold mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:swamienterprise13@gmail.com"
                  className="hover:text-gold font-medium break-all"
                >
                  swamienterprise13@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-warm-white/40 uppercase tracking-widest text-[9px] font-semibold mb-0.5">
                  Phone
                </span>
                <a href="tel:+919769042701" className="hover:text-gold font-medium">
                  +91 97690 42701
                </a>
              </li>
              <li className="text-warm-white/60">
                <span className="text-warm-white/40 uppercase tracking-widest text-[9px] font-semibold mb-0.5 block">
                  Office
                </span>
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-navy-slate mb-8" />

        {/* Legal Disclaimer & Regulatory Info */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-[10px] text-warm-white/40 font-light leading-relaxed">
            <strong>Legal Disclaimer:</strong> Investment and insurance decisions involve risk
            and are subject to product terms, market conditions, and suitability. Please read all
            relevant offer documents, terms and conditions, and disclosures carefully before making
            a decision. Mutual Fund investments are subject to market risks; read all scheme related
            documents carefully.
          </p>
        </div>

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-warm-white/45">
          <p>© 2026 Swami Enterprises. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <span className="text-warm-white/30">Privacy Policy</span>
            <span className="text-warm-white/30">•</span>
            <span className="text-warm-white/30">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
