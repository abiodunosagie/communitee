"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setPastHero(y > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg = pastHero
    ? isDark
      ? "bg-dark-base shadow-sm shadow-dark-border/50"
      : "bg-white shadow-sm"
    : scrolled
      ? isDark
        ? "bg-dark-surface/80 backdrop-blur-xl"
        : "bg-primary-500/90 backdrop-blur-xl"
      : "bg-transparent";

  const isLight = pastHero && !isDark;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            <Link href="/" className="relative shrink-0">
              <div
                className={`flex items-center gap-2 sm:gap-2.5 transition-colors duration-300 ${
                  isLight ? "text-primary-500" : "text-white"
                }`}
              >
                <Image
                  src="/images/logo.webp"
                  alt="Communitee"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300"
                  style={
                    isLight
                      ? {
                          filter:
                            "brightness(0) saturate(100%) invert(17%) sepia(97%) saturate(1237%) hue-rotate(143deg) brightness(93%) contrast(105%)",
                        }
                      : {}
                  }
                />
                <span className="text-base sm:text-lg md:text-xl font-heading font-bold tracking-tight">
                  communitee
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    isLight
                      ? "text-gray-600 hover:text-primary-500"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle isLight={isLight} />
              <a
                href="https://communitee-24792.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors py-2 ${
                  isLight
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Login
              </a>
              <a
                href="mailto:hello@communitee.co"
                className={`inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
                  isLight
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-accent-300 text-primary-950 hover:bg-accent-400"
                }`}
              >
                Request a Demo
              </a>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <ThemeToggle isLight={isLight} />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                  isLight ? "text-gray-900" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white dark:bg-dark-base lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end px-5 sm:px-6 pt-4 sm:pt-5">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-700 dark:text-gray-300"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100dvh-80px)] gap-7 sm:gap-8 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-accent-300 transition-colors py-1"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.3s ease-out ${i * 0.05 + 0.1}s, transform 0.3s ease-out ${i * 0.05 + 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="flex flex-col items-center gap-5 mt-6 w-full max-w-xs"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.3s ease-out 0.3s, transform 0.3s ease-out 0.3s",
            }}
          >
            <a
              href="https://communitee-24792.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
            >
              Login
            </a>
            <a
              href="mailto:hello@communitee.co"
              className="inline-flex items-center justify-center w-full rounded-xl bg-primary-500 text-white px-7 py-4 text-base font-medium hover:bg-primary-600 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
