"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger CSS animations after hydration
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary-500 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/golf-course.webp"
          alt="Golf course aerial view"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/80 via-primary-500/60 to-primary-500/90" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 w-full">
        <div className="max-w-3xl">
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-300/20 px-3 py-1.5 text-[11px] sm:text-xs md:text-sm font-medium text-accent-300 mb-5 sm:mb-6 backdrop-blur-sm border border-accent-300/10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-300 animate-pulse" />
              Now live on iOS and Android
            </span>
          </div>

          <h1
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08]"
          >
            Your members are your{" "}
            <span className="text-accent-300">heartbeat.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Give them a modern way to connect.
          </h1>

          <p
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
            }}
            className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-xl"
          >
            Communitee helps golf clubs protect, enhance and grow their
            communities through secure, modern communication that members
            actually love.
          </p>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
            }}
            className="mt-7 sm:mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <Button
              href="mailto:hello@communitee.co"
              variant="accent"
              size="lg"
            >
              Request a Demo
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </Button>
            <Button
              href="https://apps.apple.com/au/app/communitee-golf/id6741360611"
              variant="ghost"
              size="lg"
              external
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download the App
            </Button>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.7s ease-out 0.5s",
            }}
            className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/40"
          >
            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              End-to-end encrypted
            </div>
            <div className="h-3 w-px bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18h6" /></svg>
              Live on iOS, Android &amp; Web
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.7s ease-out 1s",
        }}
      >
        <div className="animate-bounce">
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>
    </section>
  );
}
