"use client";

import { useState } from 'react';
import { SERVICE_PILLARS } from '../data/studioData';
import { 
  Globe, 
  Share2, 
  Workflow, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const serviceIcons = {
  web: Globe,
  social: Share2,
  automation: Workflow,
};

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'social' | 'automation'>('all');

  const filteredPillars = activeTab === 'all' 
    ? SERVICE_PILLARS 
    : SERVICE_PILLARS.filter((p) => p.id === activeTab);

  return (
    <section id="services" className="pt-10 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBF9F5] border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#8B481E] mb-3 px-3.5 py-1.5 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] shadow-subtle font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B]" />
              <span>Full-Spectrum Digital Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
              Three pillars. <span className="font-serif-display italic font-normal text-[#9A5328]">One unified engine</span>.
            </h2>
            <p className="mt-3 text-[#5E5245] text-sm sm:text-base leading-relaxed">
              We combine high-craft web engineering, consistent social media management, and intelligent workflow automations so your business runs on autopilot.
            </p>
          </div>

          {/* Service Pillar Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#F4EFE6] border border-[#E4DCD0] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-[#141F2D] shadow-subtle'
                  : 'text-[#6A5E52] hover:text-[#141F2D]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeTab === 'web'
                  ? 'bg-white text-[#141F2D] shadow-subtle'
                  : 'text-[#6A5E52] hover:text-[#141F2D]'
              }`}
            >
              Websites & MVP
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeTab === 'social'
                  ? 'bg-white text-[#141F2D] shadow-subtle'
                  : 'text-[#6A5E52] hover:text-[#141F2D]'
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                activeTab === 'automation'
                  ? 'bg-white text-[#141F2D] shadow-subtle'
                  : 'text-[#6A5E52] hover:text-[#141F2D]'
              }`}
            >
              Workflow Automation
            </button>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPillars.map((pillar) => {
            const Icon = serviceIcons[pillar.id as keyof typeof serviceIcons] || Globe;
            const isDifferentiator = pillar.id === 'automation';

            return (
              <div
                key={pillar.id}
                id={`service-card-${pillar.id}`}
                className={`rounded-2xl p-6 sm:p-7 bg-white border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDifferentiator
                    ? 'border-[#C8BCAB] ring-1 ring-[#E2D8CA]'
                    : 'border-[#E4DCD0] hover:border-[#CCC1B0]'
                }`}
              >
                <div>
                  {/* Top Eyebrow & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5ECE2] border border-[#E7DAC9] text-[#8B481E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {pillar.badge ? (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B481E] bg-[#F5ECE2] border border-[#E7DAC9] px-2.5 py-0.5 rounded-full font-bold">
                        {pillar.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#7A6E60] font-semibold">
                        {pillar.eyebrow}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#141F2D] font-display mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#5E5245] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 mb-6">
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D7] text-left">
                        <div className="font-semibold text-xs text-[#141F2D] mb-0.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A5328] shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-[11px] text-[#5E5245] leading-relaxed pl-5">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooling and CTA */}
                <div className="pt-4 border-t border-[#EFE9DF] space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tooling.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE3D7] text-[#6A5E52] text-[10px] font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(pillar.title)}
                    className="w-full py-2.5 rounded-full bg-[#141F2D] hover:bg-[#1E2E42] text-[#FAF8F5] font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-subtle active:scale-[0.98]"
                  >
                    <span>Inquire About {pillar.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D8C6B6]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
