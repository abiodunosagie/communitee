import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { HeroSection } from "@/components/HeroSection";
import { FaqSection } from "@/components/FaqSection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  features,
  benefits,
  howItWorks,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ─── Social proof strip ─── */}
      <section className="py-6 sm:py-8 md:py-10 bg-gray-50 dark:bg-dark-surface border-b border-gray-100 dark:border-dark-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider leading-relaxed">
              Live on the App Store &amp; Google Play. Trusted by golf clubs across the UK &amp; Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Features (Two-Column Editorial) ─── */}
      <section id="features" className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-dark-base">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 lg:gap-20">
            <AnimatedSection>
              <div className="md:sticky md:top-28 lg:top-32">
                <p className="text-sm font-medium text-primary-500 dark:text-accent-300 mb-3">
                  What Communitee offers
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                  Everything your club needs to thrive, in one app.
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                  From private messaging to club-wide broadcasts, Communitee
                  gives your members the tools to stay connected.
                </p>
              </div>
            </AnimatedSection>

            <div className="border-t border-gray-200 dark:border-dark-border">
              {features.map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.06}>
                  <div className="py-5 sm:py-6 md:py-7 lg:py-8 border-b border-gray-200 dark:border-dark-border">
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                      <span className="text-xs font-medium text-gray-400 pt-1 sm:pt-1.5 tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Image Break ─── */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/hero-golf.webp"
          alt="Golfers enjoying the course"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          quality={75}
        />
        <div className="absolute inset-0 bg-primary-950/40" />
        <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-6">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-accent-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                Why it matters
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-2xl mx-auto">
                They will spend more time making friends, more hours on the
                course, and more money at the club.
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Benefits / Stats ─── */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-28 bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-medium text-accent-300 mb-3">
              The impact
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10 sm:mb-12 md:mb-16">
              Real results for real clubs.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.label} delay={i * 0.08}>
                <div
                  className={`${
                    i < benefits.length - 1
                      ? "lg:border-r lg:border-gray-800"
                      : ""
                  } ${i > 0 ? "lg:pl-8" : ""} ${
                    i < benefits.length - 1 ? "lg:pr-8" : ""
                  }`}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-300 font-heading">
                    {benefit.stat}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-white mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                    {benefit.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-dark-base">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 lg:gap-20">
            <AnimatedSection>
              <div className="md:sticky md:top-28 lg:top-32">
                <p className="text-sm font-medium text-primary-500 dark:text-accent-300 mb-3">
                  How it works
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                  Live in under 24 hours. No hassle, no complexity.
                </h2>
              </div>
            </AnimatedSection>

            <div className="border-t border-gray-200 dark:border-dark-border">
              {howItWorks.map((step, i) => (
                <AnimatedSection key={step.title} delay={i * 0.06}>
                  <div className="py-5 sm:py-6 md:py-7 lg:py-8 border-b border-gray-200 dark:border-dark-border">
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                      <span className="text-xs font-medium text-gray-400 pt-1 sm:pt-1.5 tabular-nums shrink-0">
                        {step.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lifestyle Image ─── */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/golf-lifestyle.webp"
          alt="Golf club members socializing"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-14 w-full">
            <AnimatedSection>
              <p className="text-xs sm:text-sm text-accent-300 font-medium mb-2">
                Built for community
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight max-w-md">
                Where golf friendships grow stronger, on and off the course.
              </h3>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <FaqSection />

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-primary-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent-300 mb-3 sm:mb-4">
                Ready to get started?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.1]">
                Bring your club community together. Download Communitee today.
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/60 leading-relaxed max-w-lg">
                Available now on the App Store and Google Play. See how
                Communitee can transform member engagement at your golf club.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
