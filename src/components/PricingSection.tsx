"use client";

import { useState } from 'react';
import { COMBO_PACKAGES, STANDALONE_SPRINTS } from '../data/studioData';
import { Check, Sparkles, ArrowRight, ShieldCheck, Workflow, Share2, Globe, Rocket } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [pricingMode, setPricingMode] = useState<'standalone' | 'combos'>('standalone');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" className="pt-20 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8 relative bg-[#FBF9F5] border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] text-[#8B481E] text-xs font-mono mb-3 font-semibold shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B]" />
              <span>Transparent Fixed Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
              Single MVP sprints <span className="font-serif-display italic font-normal text-[#9A5328]">&amp; Grow Up combos</span>.
            </h2>
            <p className="mt-3 text-[#5E5245] text-sm sm:text-base leading-relaxed">
              Choose between our standalone 21-Day Full-Stack MVP and Website sprints, or get complete all-in-one Growth Combos (Website + Social Media + n8n Automations).
            </p>
          </div>

          {/* Controls: Mode Switcher & Currency Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 self-start md:self-auto">
            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-[#F4EFE6] border border-[#E4DCD0]">
              <button
                onClick={() => setPricingMode('standalone')}
                id="tab-standalone-sprints"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  pricingMode === 'standalone'
                    ? 'bg-white text-[#141F2D] shadow-subtle'
                    : 'text-[#6A5E52] hover:text-[#141F2D]'
                }`}
              >
                Single MVP &amp; Websites
              </button>
              <button
                onClick={() => setPricingMode('combos')}
                id="tab-growth-combos"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  pricingMode === 'combos'
                    ? 'bg-white text-[#141F2D] shadow-subtle'
                    : 'text-[#6A5E52] hover:text-[#141F2D]'
                }`}
              >
                Grow Up Combos (All-in-One)
              </button>
            </div>

            {/* Currency Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#F4EFE6] border border-[#E4DCD0]">
              <button
                onClick={() => setCurrency('INR')}
                id="currency-inr-btn"
                className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono transition-all ${
                  currency === 'INR'
                    ? 'bg-white text-[#141F2D] shadow-subtle'
                    : 'text-[#6A5E52] hover:text-[#141F2D]'
                }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                id="currency-usd-btn"
                className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono transition-all ${
                  currency === 'USD'
                    ? 'bg-white text-[#141F2D] shadow-subtle'
                    : 'text-[#6A5E52] hover:text-[#141F2D]'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* STANDALONE SPRINTS VIEW (SINGLE MVP & WEBSITES) */}
        {pricingMode === 'standalone' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
              {STANDALONE_SPRINTS.map((plan) => {
                const currentPrice = currency === 'INR' ? plan.priceInr : plan.priceUsd;
                const originalPrice = currency === 'INR' ? plan.originalPriceInr : plan.originalPriceUsd;
                const isMvp = plan.id === 'mvp-standalone';

                return (
                  <div
                    key={plan.id}
                    id={`standalone-card-${plan.id}`}
                    className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isMvp
                        ? 'bg-white border-2 border-[#9A5328] shadow-card'
                        : 'bg-white border border-[#E4DCD0] shadow-card hover:border-[#C8BCAB]'
                    }`}
                  >
                    {isMvp && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-[#9A5328] text-white shadow-subtle">
                        <Sparkles className="w-3 h-3 text-amber-200" />
                        <span>Most Popular Single Sprint</span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-[11px] font-mono uppercase text-[#8B481E] font-semibold">
                            {plan.type}
                          </span>
                          <h3 className="text-2xl font-bold text-[#141F2D] font-display mt-0.5">
                            {plan.name}
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono text-[#8B481E] bg-[#F5ECE2] px-2.5 py-1 rounded-full font-medium border border-[#E7DAC9]">
                          {plan.timeline}
                        </span>
                      </div>

                      <p className="text-xs text-[#5E5245] leading-relaxed mb-5">
                        {plan.description}
                      </p>

                      {/* Price Block */}
                      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE3D7] mb-5">
                        <div className="flex flex-col gap-0.5 mb-1">
                          {originalPrice && (
                            <span className="text-sm font-semibold text-[#A09383] line-through font-display">
                              {originalPrice}
                            </span>
                          )}
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-[#141F2D] font-display tracking-tight">
                              {currentPrice}
                            </span>
                            <span className="text-xs text-[#7A6E60] font-mono">
                              / {plan.period}
                            </span>
                          </div>
                        </div>
                        <div className="text-[11px] text-[#8B481E] font-mono mt-2 flex items-center gap-1.5 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#9A5328]" />
                          <span>100% Code &amp; Asset Transfer Guarantee</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-mono uppercase text-[#7A6E60] font-semibold">
                          What's Included:
                        </div>
                        {plan.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-[#3E342B] leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#9A5328]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectPlan(`Sprint: ${plan.name}`)}
                      id={`standalone-btn-${plan.id}`}
                      className={`w-full py-2.5 rounded-full font-semibold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                        isMvp
                          ? 'bg-[#141F2D] hover:bg-[#1E2D40] text-[#FAF8F5] shadow-subtle'
                          : 'bg-[#F6F2EB] hover:bg-[#EAE2D6] text-[#141F2D] border border-[#DDD5C8]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick banner below standalone sprint */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setPricingMode('combos')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8B481E] hover:text-[#9A5328] font-semibold transition-colors"
              >
                <span>Looking for Website + Monthly Social Growth + Workflow Automations?</span>
                <span className="underline">View Grow Up Combos →</span>
              </button>
            </div>
          </div>
        ) : (
          /* COMBOS VIEW ("GROW UP" PLANS) */
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {COMBO_PACKAGES.map((pkg) => {
                const isPopular = pkg.popular;
                const setupFee = currency === 'INR' ? pkg.setupFeeInr : pkg.setupFeeUsd;
                const originalSetupFee = currency === 'INR' ? pkg.originalSetupFeeInr : pkg.originalSetupFeeUsd;
                const retainerFee = currency === 'INR' ? pkg.retainerInr : pkg.retainerUsd;

                return (
                  <div
                    key={pkg.id}
                    id={`combo-card-${pkg.id}`}
                    className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      isPopular
                        ? 'bg-white border-2 border-[#9A5328] shadow-card'
                        : 'bg-white border border-[#E4DCD0] shadow-card hover:border-[#C8BCAB]'
                    }`}
                  >
                    {/* Hero Badge */}
                    {pkg.badge && (
                      <div
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider ${
                          isPopular
                            ? 'bg-[#9A5328] text-white shadow-subtle'
                            : 'bg-[#F5ECE2] text-[#8B481E] border border-[#E7DAC9]'
                        }`}
                      >
                        {isPopular && <Sparkles className="w-3 h-3 text-amber-200" />}
                        <span>{pkg.badge}</span>
                      </div>
                    )}

                    <div>
                      {/* Header */}
                      <div className="mb-3 pt-1">
                        <span className="text-[11px] font-mono uppercase text-[#8B481E] font-semibold">
                          Grow Up Combo
                        </span>
                        <h3 className="text-2xl font-bold text-[#141F2D] font-display mt-0.5">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-[#7A6E60] font-mono mt-1">
                          {pkg.tagline}
                        </p>
                      </div>

                      <p className="text-xs text-[#5E5245] leading-relaxed mb-5">
                        {pkg.idealFor}
                      </p>

                      {/* Dual Pricing Breakdown Box (Setup Fee + Monthly Retainer) */}
                      <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE3D7] mb-5 space-y-3">
                        {/* One-Time Setup Fee */}
                        <div className="flex items-baseline justify-between border-b border-[#EFE9DF] pb-2.5">
                          <div>
                            <div className="text-[10px] font-mono uppercase text-[#7A6E60] font-semibold">
                              One-Time Setup Fee
                            </div>
                            <div className="flex flex-col gap-0.5 mt-0.5">
                              {originalSetupFee && (
                                <span className="text-sm font-semibold text-[#A09383] line-through font-display leading-none">
                                  {originalSetupFee}
                                </span>
                              )}
                              <div className="text-2xl font-bold text-[#141F2D] font-display leading-none mt-1">
                                {setupFee}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#8B481E] bg-[#F5ECE2] px-2 py-0.5 rounded font-medium">
                            Website + Setup
                          </span>
                        </div>

                        {/* Monthly Retainer */}
                        <div className="flex items-baseline justify-between pt-0.5">
                          <div>
                            <div className="text-[10px] font-mono uppercase text-[#7A6E60] font-semibold">
                              Monthly Retainer
                            </div>
                            <div className="text-2xl font-bold text-[#9A5328] font-display">
                              {retainerFee}
                              <span className="text-xs text-[#7A6E60] font-mono font-normal"> / mo</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#6A5E52] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE3D7]">
                            Social + Automations
                          </span>
                        </div>
                      </div>

                      {/* Scope Breakdown Pills */}
                      <div className="space-y-2 mb-5 text-[11px] font-mono">
                        <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EAE3D7] text-[#141F2D] flex items-start gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#9A5328] shrink-0 mt-0.5" />
                          <span><strong>Web:</strong> {pkg.websiteScope}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EAE3D7] text-[#141F2D] flex items-start gap-1.5">
                          <Share2 className="w-3.5 h-3.5 text-[#9A5328] shrink-0 mt-0.5" />
                          <span><strong>Social:</strong> {pkg.socialScope}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#EAE3D7] text-[#141F2D] flex items-start gap-1.5">
                          <Workflow className="w-3.5 h-3.5 text-[#9A5328] shrink-0 mt-0.5" />
                          <span><strong>Automations:</strong> {pkg.automationScope}</span>
                        </div>
                      </div>

                      {/* Detailed Features List */}
                      <div className="space-y-2 mb-6">
                        <div className="text-[11px] font-mono uppercase text-[#7A6E60] font-semibold">
                          What's Included:
                        </div>
                        {pkg.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-[#3E342B] leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#9A5328]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Action */}
                    <button
                      onClick={() => onSelectPlan(`Combo: ${pkg.name}`)}
                      id={`combo-btn-${pkg.id}`}
                      className={`w-full py-2.5 rounded-full font-semibold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                        isPopular
                          ? 'bg-[#141F2D] hover:bg-[#1E2D40] text-[#FAF8F5] shadow-subtle'
                          : 'bg-[#F6F2EB] hover:bg-[#EAE2D6] text-[#141F2D] border border-[#DDD5C8]'
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick banner below combo plans */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setPricingMode('standalone')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8B481E] hover:text-[#9A5328] font-semibold transition-colors"
              >
                <span>Need only a standalone 21-Day Full-Stack MVP or Website?</span>
                <span className="underline">View Single Sprints →</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
