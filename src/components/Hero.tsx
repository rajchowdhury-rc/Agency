"use client";
import { type MouseEvent } from 'react';
import { ArrowRight, ArrowDown, Globe, Share2, Workflow } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToPricing = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FBF9F5]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute inset-0 bg-warm-lines opacity-65 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#EFE8DC]/70 via-[#F5EFE6]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] text-xs font-mono shadow-subtle text-[#8B481E]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2652B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C2652B]" />
              </span>
              <span className="tracking-wider uppercase text-[11px] font-semibold text-[#8B481E]">
                Websites · Social Media · Workflow Automations
              </span>
            </div>
          </div>

          {/* Clean Modern Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141F2D] font-display leading-[1.08]">
            <span>Build. Automate. </span>
            <span className="font-serif-display italic font-normal text-[#9A5328] block sm:inline">
              Grow on Autopilot.
            </span>
          </h1>

          {/* Crisp, Concise Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#5E5245] max-w-xl font-normal leading-relaxed text-balance">
            We craft conversion-focused websites, run hands-off social media marketing, and wire custom workflow automations that capture leads and save hours.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              id="hero-primary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#141F2D] text-[#FAF8F5] font-semibold text-sm hover:bg-[#1E2D40] transition-all shadow-card group active:scale-[0.98]"
            >
              <span>Launch Growth Combo</span>
              <ArrowRight className="w-4 h-4 text-[#D8CEBF] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#pricing"
              onClick={scrollToPricing}
              id="hero-secondary-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#2B231D] border border-[#DDD5C7] font-medium text-sm hover:bg-[#F7F4EC] transition-all active:scale-[0.98] shadow-subtle"
            >
              <span>View Pricing & Single MVP</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#7A6E60]" />
            </a>
          </div>

          {/* Simple Trust Badges */}
          <div className="mt-10 pt-6 border-t border-[#E5DFD5] w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#6A5E52]">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#9A5328] shrink-0" />
              <span>Single 21-Day MVP & Websites</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-[#9A5328] shrink-0" />
              <span>IG, FB & LinkedIn Growth</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-[#9A5328] shrink-0" />
              <span>Real-Time Lead Alerts & Webhooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
