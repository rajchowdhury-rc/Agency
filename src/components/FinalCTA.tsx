"use client";

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBF9F5] border-t border-[#E5DFD5]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E4DCD0] shadow-card">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] text-[#8B481E] text-xs font-mono mb-5 font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2652B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A5328]" />
            </span>
            <span>2 Client Slots Open This Month</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
            Ready to build, automate &amp; <span className="font-serif-display italic font-normal text-[#9A5328]">grow</span>?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#5E5245] max-w-lg mx-auto leading-relaxed">
            Get your high-converting website, hands-off social media management, and 5-second lead automations under one focused team.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenBooking}
              id="final-cta-book-btn"
              className="px-8 py-3.5 rounded-full bg-[#141F2D] hover:bg-[#1E2E42] text-[#FAF8F5] font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-card active:scale-[0.98] group"
            >
              <span>Launch Growth Combo →</span>
              <ArrowRight className="w-4 h-4 text-[#D8C6B6] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EFE9DF] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5E5245] font-mono">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5328]" /> Transparent Setup + Retainer
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5328]" /> Instant WhatsApp / CRM Alerting
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5328]" /> 100% Asset &amp; Code Ownership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
