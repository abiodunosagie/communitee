import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Communitee | The Chat App for Golf Club Members",
  description:
    "Protect, enhance and grow your golf club community. Give your members a modern way to connect with secure messaging, club news, and more.",
  keywords: [
    "golf club app",
    "member engagement",
    "golf community",
    "club communication",
    "golf chat app",
  ],
  openGraph: {
    title: "Communitee | The Chat App for Golf Club Members",
    description:
      "Give your members a modern way to connect. Secure messaging, club news, and community channels for golf clubs.",
    type: "website",
    url: "https://www.communitee.co",
  },
  metadataBase: new URL("https://www.communitee.co"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#004225" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-dark-base text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
