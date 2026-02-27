import { AnimatedSection } from "@/components/AnimatedSection";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
              How we collect, use, and protect your personal information.
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
                Introduction
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Communitee (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                respects your privacy and is committed to protecting your
                personal data. This privacy policy explains how we look after
                your personal data when you use our application and tells you
                about your privacy rights.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Data We Collect
              </h2>
              <ul className="space-y-2.5 sm:space-y-3 mb-6">
                {[
                  "Account information: name, email address, and club membership details",
                  "Profile data: profile photo, handicap, and preferences you choose to share",
                  "Usage data: how you interact with the app to help us improve it",
                  "Device information: device type and operating system for technical support",
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
                Message Privacy
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                All messages on Communitee use end-to-end encryption. We cannot
                read your private messages. Only the intended recipients can
                decrypt and read message content.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                How We Use Your Data
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We use your data to provide and improve the Communitee service,
                communicate important updates, and ensure the security of your
                account. We never sell your personal data to third parties.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Your Rights
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Under data protection law, you have the right to access,
                correct, delete, or export your personal data. You can also
                object to processing or request that we restrict how we use your
                data. Contact us at{" "}
                <a
                  href="mailto:hello@communitee.co"
                  className="text-primary-500 hover:text-primary-600 dark:text-accent-300 dark:hover:text-accent-400 font-medium"
                >
                  hello@communitee.co
                </a>{" "}
                to exercise any of these rights.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-3 sm:mb-4 mt-8 sm:mt-10">
                Contact
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                For any privacy-related questions or concerns, reach out to us
                at{" "}
                <a
                  href="mailto:hello@communitee.co"
                  className="text-primary-500 hover:text-primary-600 dark:text-accent-300 dark:hover:text-accent-400 font-medium"
                >
                  hello@communitee.co
                </a>
                .
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
