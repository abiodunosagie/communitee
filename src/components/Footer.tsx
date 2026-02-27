import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Communitee"
                width={28}
                height={28}
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <span className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                communitee
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
              The modern chat app for golf club members. Protect, enhance and
              grow your club community.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Features", "How It Works", "Testimonials", "FAQ"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase().replace(/ /g, "-")}`}
                      className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href="mailto:hello@communitee.co"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  href="/child-safety"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Child Safety Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href="mailto:hello@communitee.co"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block break-all sm:break-normal"
                >
                  hello@communitee.co
                </a>
              </li>
              <li>
                <a
                  href="https://communitee-24792.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Member Login
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/au/app/communitee-golf/id6741360611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Download on iOS
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.communitee.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors py-0.5 inline-block"
                >
                  Download on Android
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[11px] sm:text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Communitee. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500">
            Built with care for the golf community
          </p>
        </div>
      </div>
    </footer>
  );
}
