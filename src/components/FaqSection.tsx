"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { faqs } from "@/lib/data";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-dark-base">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 lg:gap-20">
          <AnimatedSection>
            <div className="md:sticky md:top-28 lg:top-32">
              <p className="text-sm font-medium text-primary-500 dark:text-accent-300 mb-3">
                Common questions
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                Got questions? We have answers.
              </h2>
            </div>
          </AnimatedSection>

          <div className="border-t border-gray-200 dark:border-dark-border">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={i * 0.04}>
                <div className="border-b border-gray-200 dark:border-dark-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full py-4 sm:py-5 md:py-6 text-left group min-h-[48px]"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4 group-hover:text-primary-500 dark:group-hover:text-accent-300 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className="shrink-0 transition-transform duration-200"
                      style={{
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: openFaq === i ? "200px" : "0px",
                      opacity: openFaq === i ? 1 : 0,
                    }}
                  >
                    <p className="pb-5 sm:pb-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
