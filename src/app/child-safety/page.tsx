import { AnimatedSection } from "@/components/AnimatedSection";

export default function ChildSafetyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs sm:text-sm font-semibold text-accent-300 uppercase tracking-wider mb-3 sm:mb-4">
              Policy
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Child Safety Policy
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
              Communitee is committed to protecting children and young people
              who use our platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white dark:bg-dark-base">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-none">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4">
                Our Commitment
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Communitee is designed for adult members of golf clubs. We take
                the safety of all users seriously, with particular attention to
                the protection of children and young people who may access the
                platform through family memberships.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Age Requirements
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Users must be at least 16 years of age to create a Communitee
                account. Users between 16 and 18 require parental or guardian
                consent to use the platform.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Safeguarding Measures
              </h2>
              <ul className="space-y-2.5 sm:space-y-3 mb-6">
                {[
                  "All messages are end-to-end encrypted to protect user privacy",
                  "Club administrators can moderate public channels and content",
                  "Users can block and report other users at any time",
                  "We respond to reports of inappropriate content within 24 hours",
                  "Account verification is handled through club membership records",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="mt-1.5 sm:mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-accent-300 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Reporting Concerns
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                If you have any concerns about child safety on the Communitee
                platform, please contact us immediately at{" "}
                <a
                  href="mailto:hello@communitee.co"
                  className="text-primary-500 hover:text-primary-600 dark:text-accent-300 dark:hover:text-accent-400 font-medium"
                >
                  hello@communitee.co
                </a>
                . We take all reports seriously and will investigate promptly.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Content Moderation
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Club administrators serve as the first line of moderation for
                public channels. Our platform provides tools for administrators
                to remove content, restrict access, and escalate concerns to
                the Communitee team.
              </p>

              <p className="text-xs sm:text-sm text-gray-400 mt-10 sm:mt-12">
                Last updated: February 2026
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
