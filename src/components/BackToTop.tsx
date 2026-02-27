"use client";

import { useState, useEffect } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 hover:scale-110 hover:-translate-y-0.5 active:scale-90 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 ${
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
    </button>
  );
}
