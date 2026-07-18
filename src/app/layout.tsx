import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swami Enterprises | Guiding Your Financial Future",
    description: "Personalised, research-driven financial advice. One-stop financial solutions for investments, protection, borrowing, and business compliance.",
    locale: "en_IN",
    type: "website",
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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo.jpeg" />
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
