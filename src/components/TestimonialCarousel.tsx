"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { testimonials } from "@/lib/data";

const AUTOPLAY_MS = 5000;

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
      setProgress(0);
    },
    [count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);

  // Autoplay + progress bar
  useEffect(() => {
    if (paused) return;

    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / AUTOPLAY_MS, 1));
    }, 30);

    intervalRef.current = setTimeout(() => {
      next();
    }, AUTOPLAY_MS) as unknown as ReturnType<typeof setInterval>;

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
      if (intervalRef.current) clearTimeout(intervalRef.current as unknown as ReturnType<typeof setTimeout>);
    };
  }, [active, paused, next]);

  // Touch handlers
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setPaused(true);
  }

  function onTouchMove(e: React.TouchEvent) {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }

  function onTouchEnd() {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) {
        goTo(active + 1);
      } else {
        goTo(active - 1);
      }
    }
    setPaused(false);
  }

  return (
    <section
      id="testimonials"
      className="py-14 sm:py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-dark-surface"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-sm font-medium text-primary-500 dark:text-accent-300 mb-3">
            What clubs say
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-8 sm:mb-12 md:mb-16">
            Clubs love Communitee. Their members do too.
          </h2>
        </AnimatedSection>

        {/* ── Desktop grid (sm+) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <div
                className={`bg-white dark:bg-dark-card rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-dark-border ${
                  i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Stars />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Mobile carousel (below sm) ── */}
        <div className="sm:hidden">
          <AnimatedSection>
            <div
              className="relative overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Cards */}
              <div className="relative" style={{ minHeight: 240 }}>
                {testimonials.map((t, i) => (
                  <div
                    key={t.author}
                    className="w-full"
                    style={{
                      position: i === active ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "translateX(0) scale(1)" : i > active ? "translateX(40px) scale(0.96)" : "translateX(-40px) scale(0.96)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                      pointerEvents: i === active ? "auto" : "none",
                    }}
                  >
                    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-100 dark:border-dark-border">
                      <Stars />
                      <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                            {t.author}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goTo(i);
                      setPaused(false);
                    }}
                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                    style={{ width: i === active ? 32 : 12 }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    {/* Track */}
                    <span className="absolute inset-0 bg-gray-200 dark:bg-dark-border rounded-full" />
                    {/* Fill */}
                    {i === active && (
                      <span
                        className="absolute inset-y-0 left-0 bg-primary-500 dark:bg-accent-300 rounded-full"
                        style={{
                          width: `${progress * 100}%`,
                          transition: "width 30ms linear",
                        }}
                      />
                    )}
                    {i < active && (
                      <span className="absolute inset-0 bg-primary-500 dark:bg-accent-300 rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 mb-4 sm:mb-5">
      {[...Array(5)].map((_, j) => (
        <svg
          key={j}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
