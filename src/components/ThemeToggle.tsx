"use client";

import { useState, useEffect } from "react";

interface ThemeToggleProps {
  isLight?: boolean;
}

export function ThemeToggle({ isLight = false }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden />;
  }

  return (
    <button
      onClick={toggle}
      className={`relative w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 ${
        isLight
          ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          : "text-white/70 hover:text-white hover:bg-white/10"
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon */}
      <svg
        className={`w-[18px] h-[18px] absolute transition-all duration-300 ${
          isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
        />
      </svg>
      {/* Moon icon */}
      <svg
        className={`w-[18px] h-[18px] absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 8.002-4.248 9.7 9.7 0 0 1 1-.75z"
        />
      </svg>
    </button>
  );
}
