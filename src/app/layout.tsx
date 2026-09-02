import "../index.css";

export const metadata = {
  title: "Kinetic — Websites, Social Media Growth & Workflow Automation",
  description: "Bespoke websites, social media marketing, and smart workflow automations designed to launch, automate, and scale businesses.",
  openGraph: {
    title: "Kinetic — Websites, Social Media Growth & Workflow Automation",
    description: "Bespoke websites, social media marketing, and smart workflow automations designed to launch, automate, and scale businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#FBF9F5] text-slate-900 antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FBF9F5] text-[#19222E] selection:bg-[#1E2E40] selection:text-[#FAF7F2] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
