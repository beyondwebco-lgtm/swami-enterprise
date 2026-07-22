import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-navy-dark text-warm-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 tracking-wide">Page Not Found</h2>
        <p className="text-sm text-warm-white/70 font-light mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-navy-dark bg-gold hover:bg-gold-light border border-gold rounded-lg transition-all duration-300 shadow-md hover:shadow-gold/10"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
