"use client";
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/studioData';
import { Compass, Palette, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const stepIcons = [Compass, Palette, Code2, Rocket];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBF9F5] border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#8B481E] mb-3 px-3.5 py-1.5 rounded-full bg-[#F5ECE2] border border-[#E7DAC9]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B]" />
            <span className="font-semibold">The 21-Day Cadence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141F2D] font-display">
            Four steps. <span className="font-serif-display italic font-normal text-[#9A5328]">Guaranteed delivery</span>.
          </h2>
          <p className="mt-3 text-[#5E5245] text-base leading-relaxed">
            Zero bureaucracy. Direct senior partner collaboration from kickoff to production deployment.
          </p>
        </div>

        {/* 4 Steps Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index] || Compass;

            return (
              <div
                key={step.number}
                id={`process-step-${step.number}`}
                className="p-6 rounded-2xl bg-white border border-[#E4DCD0] shadow-card flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#F5ECE2] border border-[#E7DAC9] text-[#8B481E] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8B481E] font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EAE3D7]">
                      {step.days}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-[#7A6E60] font-semibold uppercase mb-1">
                    Phase {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#141F2D] font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5E5245] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables snippet */}
                <div className="pt-4 border-t border-[#EFE9DF] space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-[#7A6E60] font-semibold">
                    Key Handover:
                  </div>
                  {step.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#2B231D]">
                      <CheckCircle2 className="w-3 h-3 text-[#9A5328] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
