import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swamienterprises.com"),
  title: "Swami Enterprises | Guiding Your Financial Future",
  description: "Swami Enterprises helps individuals, families, and businesses make informed financial decisions through trusted advisory, personalised investment strategies, insurance protection, borrowing guidance, and tax compliance.",
  keywords: [
    "Swami Enterprises",
    "Financial Advisory Mumbai",
    "Mutual Fund Investments",
    "Equity Advisory",
    "Portfolio Management Services",
    "Term Insurance",
    "General Insurance",
    "GST Filing Services",
    "Income Tax Return filing",
    "Loan Advisory",
    "Sameer Dalvi Financial Advisor"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swami Enterprises | Guiding Your Financial Future",
    description: "Personalised, research-driven financial advice. One-stop financial solutions for investments, protection, borrowing, and business compliance.",
    url: "https://swamienterprises.com",
    siteName: "Swami Enterprises",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swami Enterprises - Guiding Your Financial Future",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swami Enterprises | Guiding Your Financial Future",
    description: "Personalised, research-driven financial advice. One-stop financial solutions for investments, protection, borrowing, and business compliance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Financial Service Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Swami Enterprises",
    "description": "Unified financial planning, mutual fund investments, insurance advisory, loans, and business compliance services.",
    "url": "https://swamienterprises.com",
    "telephone": "+919769042701",
    "email": "swamienterprise13@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Sameer Dalvi"
    }
  };

  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy-dark text-warm-white">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
