"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "Swami Enterprises – Trusted Financial Guidance for Long-Term Growth";
  }, []);

  return (
    <main className="site-shell" aria-label="Swami Enterprises website">
      {!loaded && <div className="loading">Loading Swami Enterprises…</div>}
      <iframe
        title="Swami Enterprises"
        src="/legacy/index.html"
        className="site-frame"
        onLoad={() => setLoaded(true)}
      />
    </main>
  );
}