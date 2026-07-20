"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, Loader2, FileSpreadsheet } from "lucide-react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
  title: string;
  description?: string;
}

export default function FormModal({
  isOpen,
  onClose,
  formUrl,
  title,
  description = "Complete the form below to get started with Swami Enterprises.",
}: FormModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when formUrl changes
  useEffect(() => {
    setIsLoading(true);
  }, [formUrl]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Dark backdrop overlay */}
      <div
        className="fixed inset-0 bg-navy-dark/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-navy-slate border-2 border-gold/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden z-10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20 bg-navy-dark/80">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-navy-slate border border-gold/30 rounded-lg text-gold">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-warm-white tracking-wide">
                {title}
              </h3>
              <p className="text-xs text-warm-white/60 font-light hidden sm:block">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Open in New Tab Button */}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-warm-white/80 hover:text-gold bg-navy-slate/80 hover:bg-navy-slate border border-gold/20 hover:border-gold/50 rounded-lg transition-all"
              title="Open form in new window"
            >
              <span className="hidden sm:inline">Open in Tab</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className="p-2 text-warm-white/70 hover:text-gold hover:bg-navy-dark rounded-lg border border-transparent hover:border-gold/20 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe Container */}
        <div className="relative flex-1 w-full bg-navy-dark min-h-[550px] overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-dark text-warm-white z-20 space-y-3">
              <Loader2 className="w-8 h-8 text-gold animate-spin" />
              <p className="text-xs uppercase tracking-widest text-gold/80 font-semibold">
                Loading Form...
              </p>
            </div>
          )}

          <iframe
            src={formUrl}
            title={title}
            className="w-full h-full min-h-[550px] border-0"
            onLoad={() => setIsLoading(false)}
          >
            Loading form...
          </iframe>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-2.5 bg-navy-dark/90 border-t border-gold/15 flex items-center justify-between text-[11px] text-warm-white/50">
          <span>Powered by Google Forms & Swami Enterprises</span>
          <button
            onClick={onClose}
            className="text-warm-white/70 hover:text-gold underline transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
