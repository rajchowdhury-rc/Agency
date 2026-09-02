import type { Metadata, Viewport } from "next";
import "../index.css";
import { FAQS, STUDIO_INFO } from "../data/studioData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBF9F5",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Trive — Websites, Social Media Growth & Workflow Automation",
    template: "%s | Trive",
  },
  description: "Bespoke high-performance websites, end-to-end social media marketing, and smart workflow automations designed to launch, automate, and scale modern businesses.",
  keywords: [
    "Trive Studio",
    "Trive web design",
    "Web development agency",
    "Social media marketing agency",
    "Workflow automation",
    "Next.js web development",
    "Meta ads management",
    "Lead capture automation",
    "Zapier Make n8n automation",
    "Full-stack MVP development",
    "Product design studio",
  ],
  authors: [{ name: "Trive Team", url: "https://trivestudio.dev" }],
  creator: "Trive",
  publisher: "Trive",
  metadataBase: new URL("https://trivestudio.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trive — Websites, Social Media Growth & Workflow Automation",
    description: "We craft conversion-focused websites, run hands-off social media marketing, and wire custom workflow automations that capture leads and save hours.",
    url: "https://trivestudio.dev",
    siteName: "Trive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trive — Websites, Social Media Growth & Workflow Automation",
    description: "Custom websites, social media marketing, and smart workflow automations to launch, automate, and scale your business.",
    creator: "@trivestudio",
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
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://trivestudio.dev/#organization",
        name: "Trive",
        url: "https://trivestudio.dev",
        logo: "https://trivestudio.dev/icon.png",
        description: "Bespoke websites, social media marketing, and smart workflow automations designed to launch, automate, and scale businesses.",
        email: STUDIO_INFO.email,
        priceRange: "$$$",
        openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
        areaServed: {
          "@type": "GeoCircle",
          serviceArea: "Worldwide",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Growth & Automation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Conversion-Focused Website & Web App Development",
                description: "High-craft, performant websites built on Next.js and Tailwind CSS with sub-second page loads.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hands-Off Social Media Growth",
                description: "Complete organic and paid social media management across Instagram, Facebook, and LinkedIn.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Intelligent Workflow Automation",
                description: "Instant lead routing to WhatsApp/Slack, automated CRM sync, and scheduled multi-platform publishing.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://trivestudio.dev/#website",
        url: "https://trivestudio.dev",
        name: "Trive",
        publisher: {
          "@id": "https://trivestudio.dev/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://trivestudio.dev/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth bg-[#FBF9F5] text-slate-900 antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FBF9F5] text-[#19222E] selection:bg-[#1E2E40] selection:text-[#FAF7F2] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}

