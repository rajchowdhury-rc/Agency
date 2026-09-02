"use client";
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

export default function StatsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
            Trusted by startups, founders and builders <span className="font-serif-display italic font-normal text-[#9A5328]">worldwide.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stat 1 */}
          <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD5] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#8B481E] mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-[#141F2D] tracking-tight mb-2">
                10+
              </div>
              <p className="text-sm text-[#5E5245] leading-relaxed">
                MVPS &amp; AI Agents Successfully Delivered
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD5] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#8B481E] mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-[#141F2D] tracking-tight mb-2">
                20<span className="text-3xl">days</span>
              </div>
              <p className="text-sm text-[#5E5245] leading-relaxed">
                Target Timeline For Focused MVP Builds
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E5DFD5] flex flex-col justify-between">
            <div className="flex items-center justify-between text-[#8B481E] mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold">Approach</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-[#141F2D] tracking-tight mb-2">
                4.89
              </div>
              <p className="text-sm text-[#5E5245] leading-relaxed">
                Client Satisfaction On Delivered Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
