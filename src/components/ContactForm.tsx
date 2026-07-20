"use client";

import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Invest");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  // Status states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const linkedinUrl =
    "https://www.linkedin.com/in/swamienterprise2026?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const instagramUrl =
    "https://www.instagram.com/swamienterprises2026?utm_source=qr&igsh=bmhyYzQ4cHM3MmJh";

  useEffect(() => {
    // Listen to service selections from Service Cards
    const handleServiceSelect = (e: Event) => {
      const serviceName = (e as CustomEvent).detail;
      setService(serviceName);
    };
    window.addEventListener("swami-service-select", handleServiceSelect);
    return () => window.removeEventListener("swami-service-select", handleServiceSelect);
  }, []);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = "Full Name is required.";
    
    // Simple mobile regex validation
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanMobile = mobile.replace(/[\s-]/g, "");
    if (!mobile.trim()) {
      tempErrors.mobile = "Mobile Number is required.";
    } else if (!mobileRegex.test(cleanMobile) && cleanMobile.length !== 10) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!consent) {
      tempErrors.consent = "You must agree to be contacted to submit your enquiry.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    
    // Simulated API response delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);

    // Reset Form
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
    setConsent(false);

    // Auto-hide success screen after 6 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="relative py-24 bg-navy-dark border-t border-navy-slate/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Description and Contact details (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
                Connect With Us
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-warm-white leading-tight mb-6">
                Start Your Financial Journey with Confidence
              </h3>
              <div className="w-16 h-1 bg-gold rounded mb-8" />
              <p className="text-sm text-warm-white/70 font-light leading-relaxed mb-6">
                Whether you are investing, protecting your family, planning a loan,
                or managing compliance, Swami Enterprises is here to guide you. Fill
                out the form and our advisory team will contact you shortly.
              </p>

              {/* Quick Google Forms Banner */}
              <div className="p-4 rounded-xl bg-navy-slate/60 border border-gold/25 mb-8">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-gold inline-block mr-2 animate-ping" />
                  Prefer Google Forms?
                </p>
                <p className="text-xs text-warm-white/70 font-light mb-3">
                  You can also complete our dedicated application forms directly:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("swami-open-form", {
                          detail: {
                            url: "https://docs.google.com/forms/d/e/1FAIpQLSf0wABbSPo28hLaFsIt_u3Kxj5DkmiycO6BnFmzEVR1lg64qQ/viewform",
                            title: "Pre-Meeting Form",
                            description: "Swami Enterprises Consultation",
                          },
                        })
                      );
                    }}
                    className="px-2.5 py-1.5 text-[11px] font-medium text-warm-white bg-navy-dark hover:text-gold border border-gold/20 hover:border-gold/50 rounded transition-all text-left truncate"
                  >
                    📋 Pre-Meeting Form
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("swami-open-form", {
                          detail: {
                            url: "https://docs.google.com/forms/d/e/1FAIpQLScEZ9xYGq6xKnD3QLPZlXHeQo1U1rrVpH2-9QyJJeP8KDhpsA/viewform",
                            title: "Mutual Fund Enquiry Form",
                            description: "Mutual Fund & SIP Advisory",
                          },
                        })
                      );
                    }}
                    className="px-2.5 py-1.5 text-[11px] font-medium text-warm-white bg-navy-dark hover:text-gold border border-gold/20 hover:border-gold/50 rounded transition-all text-left truncate"
                  >
                    📈 Mutual Funds
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("swami-open-form", {
                          detail: {
                            url: "https://docs.google.com/forms/d/e/1FAIpQLSfHl3pAe_638Y5nUd0fZ2u7fHL1XVFZom345PoesTBgrbmouA/viewform",
                            title: "Health Insurance Enquiry Form",
                            description: "Health & Medical Coverage",
                          },
                        })
                      );
                    }}
                    className="px-2.5 py-1.5 text-[11px] font-medium text-warm-white bg-navy-dark hover:text-gold border border-gold/20 hover:border-gold/50 rounded transition-all text-left truncate"
                  >
                    🛡️ Health Insurance
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("swami-open-form", {
                          detail: {
                            url: "https://docs.google.com/forms/d/e/1FAIpQLSeYMI2mUSbJFfve2UnTpWG8tksaUqfHIWP10GVd1pS34btXSg/viewform",
                            title: "Loan Enquiry Form",
                            description: "Home, Personal & Business Loans",
                          },
                        })
                      );
                    }}
                    className="px-2.5 py-1.5 text-[11px] font-medium text-warm-white bg-navy-dark hover:text-gold border border-gold/20 hover:border-gold/50 rounded transition-all text-left truncate"
                  >
                    🏦 Loan Enquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Contact Blocks */}
            <div className="space-y-6">
              {/* Phone click-to-call */}
              <a
                href="tel:+919769042701"
                className="flex items-center space-x-4 p-4 rounded-lg bg-navy-slate/20 border border-gold/5 hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-navy-slate/50 border border-gold/15 rounded-md group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Phone className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-warm-white/50 uppercase tracking-widest font-semibold">
                    Phone Number
                  </p>
                  <p className="text-sm sm:text-base font-bold text-warm-white tracking-wide mt-0.5">
                    +91 97690 42701
                  </p>
                </div>
              </a>

              {/* Email click-to-email */}
              <a
                href="mailto:swamienterprise13@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-lg bg-navy-slate/20 border border-gold/5 hover:border-gold/20 transition-all duration-300 group"
              >
                <div className="p-3 bg-navy-slate/50 border border-gold/15 rounded-md group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <Mail className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-warm-white/50 uppercase tracking-widest font-semibold">
                    Email Address
                  </p>
                  <p className="text-sm sm:text-base font-bold text-warm-white mt-0.5 break-all">
                    swamienterprise13@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-navy-slate/20 border border-gold/5">
                <div className="p-3 bg-navy-slate/50 border border-gold/15 rounded-md">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-warm-white/50 uppercase tracking-widest font-semibold">
                    Office Location
                  </p>
                  <p className="text-sm font-medium text-warm-white mt-0.5 leading-snug">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className="p-4 rounded-lg bg-navy-slate/20 border border-gold/5">
                <p className="text-xs text-warm-white/50 uppercase tracking-widest font-semibold mb-3">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-md bg-navy-slate/60 border border-gold/15 hover:border-gold/40 text-warm-white hover:text-gold text-xs font-medium transition-all duration-300 group"
                  >
                    <LinkedinIcon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-md bg-navy-slate/60 border border-gold/15 hover:border-gold/40 text-warm-white hover:text-gold text-xs font-medium transition-all duration-300 group"
                  >
                    <InstagramIcon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform duration-300" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Lead Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-xl border border-gold/15 shadow-xl relative overflow-hidden">
              {isSuccess ? (
                /* Success View */
                <div className="py-16 text-center flex flex-col items-center justify-center animate-float">
                  <div className="p-4 bg-gold/10 border border-gold/30 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-gold animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-bold text-warm-white mb-3">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-sm text-warm-white/70 font-light leading-relaxed max-w-md">
                    Thank you for connecting with Swami Enterprises. Our financial advisors
                    will review your inquiry and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light rounded transition-colors duration-200"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form View */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullname" className="block text-xs font-semibold text-warm-white/80 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-3 text-sm text-warm-white placeholder-warm-white/30 bg-navy-slate/40 border ${
                          errors.name ? "border-red-500" : "border-gold/20 hover:border-gold/40 focus:border-gold"
                        } rounded focus:outline-none transition-colors duration-200`}
                        placeholder="Enter your name"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "fullname-error" : undefined}
                      />
                      {errors.name && (
                        <p id="fullname-error" className="text-red-500 text-xs mt-1.5 font-light" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobile" className="block text-xs font-semibold text-warm-white/80 uppercase tracking-wider mb-2">
                        Mobile Number *
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                          if (errors.mobile) setErrors({ ...errors, mobile: "" });
                        }}
                        className={`w-full px-4 py-3 text-sm text-warm-white placeholder-warm-white/30 bg-navy-slate/40 border ${
                          errors.mobile ? "border-red-500" : "border-gold/20 hover:border-gold/40 focus:border-gold"
                        } rounded focus:outline-none transition-colors duration-200`}
                        placeholder="10-digit number"
                        aria-invalid={errors.mobile ? "true" : "false"}
                        aria-describedby={errors.mobile ? "mobile-error" : undefined}
                      />
                      {errors.mobile && (
                        <p id="mobile-error" className="text-red-500 text-xs mt-1.5 font-light" role="alert">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-warm-white/80 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3 text-sm text-warm-white placeholder-warm-white/30 bg-navy-slate/40 border ${
                          errors.email ? "border-red-500" : "border-gold/20 hover:border-gold/40 focus:border-gold"
                        } rounded focus:outline-none transition-colors duration-200`}
                        placeholder="name@domain.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-xs mt-1.5 font-light" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service Interested In */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-warm-white/80 uppercase tracking-wider mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 text-sm text-warm-white bg-navy-slate border border-gold/20 hover:border-gold/40 focus:border-gold rounded focus:outline-none transition-colors duration-200"
                      >
                        <option value="Invest" className="bg-navy-dark">Invest (Wealth & Mutual Funds)</option>
                        <option value="Protect" className="bg-navy-dark">Protect (Insurance Solutions)</option>
                        <option value="Borrow" className="bg-navy-dark">Borrow (Loan & Debt Guidance)</option>
                        <option value="Comply" className="bg-navy-dark">Comply (Tax & GST Compliance)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-warm-white/80 uppercase tracking-wider mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 text-sm text-warm-white placeholder-warm-white/30 bg-navy-slate/40 border border-gold/20 hover:border-gold/40 focus:border-gold rounded focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your financial goals or questions..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <label className="relative flex items-start cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors({ ...errors, consent: "" });
                        }}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded border border-gold/30 bg-navy-slate/40 peer-checked:bg-gold peer-checked:border-gold flex items-center justify-center flex-shrink-0 transition-all duration-200">
                        <svg className="w-3.5 h-3.5 text-navy-dark opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-xs text-warm-white/70 leading-normal font-light">
                        I agree to be contacted by Swami Enterprises regarding my enquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 text-xs mt-1.5 font-light" role="alert">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light disabled:bg-gold/50 disabled:cursor-not-allowed border border-gold rounded shadow-md hover:shadow-gold/10 hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Book a Free Consultation
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
