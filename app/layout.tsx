import type { Metadata, Viewport } from "next";
import { Jost, Montserrat, Questrial, Roboto, Unbounded } from "next/font/google";
import SectionNavigation from "@/components/SectionNavigation";
import "./globals.css";

// Fonts are downloaded at build time and self-hosted by Next.js (no external requests).
const jost = Jost({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jost", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-montserrat", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"], variable: "--font-roboto", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["600"], variable: "--font-unbounded", display: "swap" });
const questrial = Questrial({ subsets: ["latin"], weight: ["400"], variable: "--font-questrial", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Pentawise Consultants | Study Abroad Consultants",
  description:
    "Pentawise is your trusted study abroad partner, guiding students to top universities across 20+ countries, with career counselling, scholarship, document, visa and travel support.",
  openGraph: {
    title: "Pentawise Consultants | Study Abroad Consultants",
    description: "Vibing your way to global campuses. Book a free expert consultation.",
    type: "website",
    images: ["/images/brand/pentawise-logo.webp"],
  },
  icons: { icon: "/images/brand/pentawise-mark.webp" },
  authors: [{ name: 'H2H8 Studios', url: 'https://www.h2h8studios.com' }],
  creator: 'H2H8 Studios',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.pentawiseconsultants.com/',
  creator: {
    '@type': 'Organization',
    name: 'H2H8 Studios',
    url: 'https://www.h2h8studios.com',
    description:
      'H2H8 Studios is a digital agency offering branding and logo design, brand identity, packaging and social media design, website and mobile app development, Shopify store development, UI/UX design, SEO, Google and Meta ads, social media marketing, lead generation, influencer marketing, video production, motion graphics, product photography and AI video production, all under one roof.',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#46268a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jost.variable} ${montserrat.variable} ${roboto.variable} ${unbounded.variable} ${questrial.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <SectionNavigation />
        {children}
      </body>
    </html>
  );
}
