"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/studioData';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Focus on top 4 most pertinent questions to avoid text overload
  const displayedFaqs = FAQS.slice(0, 4);

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#FBF9F5] border-t border-[#E5DFD5]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5ECE2] border border-[#E7DAC9] text-[#8B481E] text-xs font-mono mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141F2D] font-display">
            Common <span className="font-serif-display italic font-normal text-[#9A5328]">questions</span>.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C8BCAB] shadow-card'
                    : 'bg-white border-[#E4DCD0] hover:border-[#CCC1B0]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  id={`faq-toggle-${faq.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#8B481E] font-semibold shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#141F2D] group-hover:text-[#9A5328] transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#141F2D] text-[#FAF8F5]'
                        : 'bg-[#F5ECE2] text-[#8B481E]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#EAE3D7] text-xs sm:text-sm text-[#5E5245] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
