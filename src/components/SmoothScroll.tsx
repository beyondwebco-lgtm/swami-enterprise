"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if we should enable Lenis (desktop >= 1024px, non-touch, no reduced motion)
    const checkShouldScroll = () => {
      const isMobile = window.innerWidth < 1024 || "ontouchstart" in window;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      return !isMobile && !prefersReducedMotion;
    };

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    const startRaf = (activeLenis: Lenis) => {
      if (rafId) cancelAnimationFrame(rafId);
      function raf(time: number) {
        activeLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    const stopRaf = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const initLenis = () => {
      if (!checkShouldScroll()) {
        if (lenis) {
          stopRaf();
          lenis.destroy();
          window.lenis = undefined;
          lenis = null;
        }
        return;
      }

      if (lenis) return; // Already initialized

      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      window.lenis = lenis;
      startRaf(lenis);
    };

    // Run initialization
    initLenis();

    const handleResize = () => {
      initLenis();
    };
    window.addEventListener("resize", handleResize);

    const cards = document.querySelectorAll(".glow-card");
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      stopRaf();
      if (lenis) {
        lenis.destroy();
        window.lenis = undefined;
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <>{children}</>;
}
