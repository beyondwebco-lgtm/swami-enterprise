"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-md border border-gold/30">
              <Image
                src="/logo.jpeg"
                alt="Swami Enterprises Logo"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-warm-white group-hover:text-gold transition-colors duration-300">
                SWAMI ENTERPRISES
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold/80">
                Guiding Your Financial Future
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-warm-white/80 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded transition-all duration-200 shadow-md hover:shadow-gold/10"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-warm-white/80 hover:text-gold hover:bg-navy-slate/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-navy-dark/95 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-10 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xl font-semibold text-warm-white hover:text-gold transition-colors duration-200 border-b border-navy-slate pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light rounded transition-colors duration-200"
            >
              Book a Free Consultation
            </a>
            <div className="text-center text-xs text-warm-white/50">
              <a href="tel:+919769042701" className="hover:text-gold block mb-1">
                +91 97690 42701
              </a>
              <a href="mailto:swamienterprise13@gmail.com" className="hover:text-gold">
                swamienterprise13@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
