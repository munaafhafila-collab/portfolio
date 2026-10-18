import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anisahafila.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anisa Hafila | Digital Marketing Fresher & SEO Enthusiast",
    template: "%s | Anisa Hafila",
  },
  description:
    "Explore Anisa Hafila's digital marketing portfolio featuring SEO practice projects, content marketing, social media strategies, Canva designs, and digital marketing skills.",
  keywords: [
    "Anisa Hafila",
    "Digital Marketing Fresher",
    "SEO Enthusiast",
    "Content Marketing",
    "Social Media Marketing",
    "Canva Graphic Design",
    "Keyword Research",
    "Digital Marketing Portfolio",
    "Google Analytics 4",
    "On-Page SEO",
  ],
  authors: [{ name: "Anisa Hafila", url: siteUrl }],
  creator: "Anisa Hafila",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anisa Hafila Portfolio",
    title: "Anisa Hafila | Digital Marketing Fresher & SEO Enthusiast",
    description:
      "Explore Anisa Hafila's digital marketing portfolio featuring SEO practice projects, content marketing, social media strategies, Canva designs, and digital marketing skills.",
    images: [
      {
        url: "/images/anisa-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Anisa Hafila - Digital Marketing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anisa Hafila | Digital Marketing Fresher & SEO Enthusiast",
    description:
      "Explore Anisa Hafila's digital marketing portfolio featuring SEO practice projects, content marketing, social media strategies, and digital marketing skills.",
    images: ["/images/anisa-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for Person and WebSite
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: PERSONAL_INFO.name,
        jobTitle: PERSONAL_INFO.title,
        description: PERSONAL_INFO.heroBio,
        url: siteUrl,
        sameAs: [PERSONAL_INFO.linkedin],
        knowsAbout: [
          "Search Engine Optimization (SEO)",
          "Social Media Marketing",
          "Content Marketing",
          "Canva Graphic Design",
          "Keyword Research",
          "Google Analytics 4",
          "Digital Advertising Concepts",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${PERSONAL_INFO.name} - Digital Marketing Portfolio`,
        description:
          "Professional digital marketing portfolio of Anisa Hafila, aspiring digital marketer and fresher.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B1120] text-white antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
