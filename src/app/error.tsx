"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-navy-dark text-warm-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-gold mb-4">Error</h1>
        <h2 className="text-2xl font-bold mb-4 tracking-wide">Something Went Wrong</h2>
        <p className="text-sm text-warm-white/70 font-light mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified.
          You can try reloading the page or return to the main dashboard.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded-lg transition-all duration-300 shadow-md hover:shadow-gold/10 cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-warm-white hover:text-gold bg-navy-slate/50 hover:bg-navy-slate border border-gold/20 hover:border-gold/40 rounded-lg transition-all duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
