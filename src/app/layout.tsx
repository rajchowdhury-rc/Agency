import "../index.css";

export const metadata = {
  title: "Kinetic — Websites, Social Media Growth & Workflow Automation",
  description: "Bespoke websites, social media marketing, and smart workflow automations designed to launch, automate, and scale businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#FBF9F5] text-slate-900 antialiased">
      <body className="bg-[#FBF9F5] text-[#19222E] selection:bg-[#1E2E40] selection:text-[#FAF7F2] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
