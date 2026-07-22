"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Forms", href: "#online-forms" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const menuRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll and control Lenis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Prevent scrollbar layout shift on desktop (if any)
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      window.lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.lenis?.start();
    };
  }, [isOpen]);

  // Keyboard Escape listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-close menu when resizing to desktop widths (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set inert on sibling elements when menu is open to prevent interaction/tabbing
  useEffect(() => {
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");
    if (isOpen) {
      mainEl?.setAttribute("inert", "");
      footerEl?.setAttribute("inert", "");
    } else {
      mainEl?.removeAttribute("inert");
      footerEl?.removeAttribute("inert");
    }
    return () => {
      mainEl?.removeAttribute("inert");
      footerEl?.removeAttribute("inert");
    };
  }, [isOpen]);

  // Focus management: Shift focus into menu when open, return to hamburger when closed
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isOpen) {
      menuRef.current?.focus();
    } else {
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "services", "online-forms", "why-us", "testimonials", "partners", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when section is in the focal area of the screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchingLink = navLinks.find((link) => link.href === `#${id}`);
          if (matchingLink) {
            setActiveSection(matchingLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("Home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // Resume Lenis immediately so scroll transitions can start before state updates re-enable it asynchronously
    window.lenis?.start();
    
    setIsOpen(false);

    if (href === "#") {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setActiveSection("Home");
      window.history.pushState(null, "", window.location.pathname + window.location.search);
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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
      
      const matchingLink = navLinks.find((link) => link.href === href);
      if (matchingLink) {
        setActiveSection(matchingLink.name);
      }
      window.history.pushState(null, "", href);
    }
  };

  const handleBookConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf0wABbSPo28hLaFsIt_u3Kxj5DkmiycO6BnFmzEVR1lg64qQ/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Social links removed from Header/Navbar as per requirements. Keep in Footer only.

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isOpen ? "z-[150]" : "z-50"
      } ${
        scrolled
          ? "glass-nav shadow-lg py-2.5 sm:py-3"
          : "bg-navy-dark/85 backdrop-blur-md sm:bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Responsive High-Contrast Logo Block */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0 relative z-[160]"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 overflow-hidden rounded-lg border-2 border-gold/40 shadow-md bg-navy-slate/80 flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="Swami Enterprises Logo"
                fill
                priority
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col min-w-0 flex-shrink-0">
              <span className="text-xs sm:text-base md:text-lg font-bold tracking-wider text-warm-white group-hover:text-gold transition-colors duration-300 truncate">
                SWAMI ENTERPRISES
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gold/80 truncate hidden sm:block">
                Guiding Your Financial Future
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.name
                    ? "text-gold font-semibold"
                    : "text-warm-white/80 hover:text-gold"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleBookConsultation}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded transition-all duration-200 shadow-md hover:shadow-gold/10 cursor-pointer"
            >
              Book a Free Consultation
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex-shrink-0 ml-2 relative z-[160]">
            <button
              ref={hamburgerRef}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-warm-white/90 hover:text-gold bg-navy-slate/60 hover:bg-navy-slate border border-gold/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[140] w-full h-[100dvh] transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop button to close mobile menu */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-default w-full h-full border-none focus:outline-none"
          aria-label="Close mobile menu"
          tabIndex={isOpen ? 0 : -1}
        />

        {/* Solid Drawer Panel */}
        <nav
          ref={menuRef}
          tabIndex={-1}
          id="mobile-menu"
          inert={!isOpen ? true : undefined}
          aria-hidden={!isOpen}
          className={`absolute inset-y-0 right-0 w-full sm:max-w-md bg-navy-dark border-l border-gold/15 shadow-2xl flex flex-col justify-between safe-pt-menu safe-pb-menu px-6 sm:px-10 overflow-y-auto overscroll-contain transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xl font-semibold transition-colors duration-200 border-b border-navy-slate pb-2 ${
                  activeSection === link.name
                    ? "text-gold"
                    : "text-warm-white hover:text-gold"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleBookConsultation}
              className="w-full text-center py-4 font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light rounded transition-colors duration-200 cursor-pointer"
            >
              Book a Free Consultation
            </button>
            <div className="text-center text-xs text-warm-white/50">
              <a href="tel:+919769042701" className="hover:text-gold block mb-1">
                +91 97690 42701
              </a>
              <a href="mailto:swamienterprise13@gmail.com" className="hover:text-gold">
                swamienterprise13@gmail.com
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
