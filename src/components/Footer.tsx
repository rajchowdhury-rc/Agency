"use client";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-t border-[#E5DFD5] bg-[#F4EFE6] text-[#5E5245]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-[#E4DCD0]">
          {/* Brand & Mission */}
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-[#141F2D] flex items-center justify-center text-[#FAF8F5] text-xs font-bold font-display">
                K
              </div>
              <span className="text-base font-bold text-[#141F2D] font-display tracking-tight">
                {STUDIO_INFO.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5245] leading-relaxed">
              {STUDIO_INFO.subline}
            </p>
            <div className="text-[11px] font-mono text-[#8B481E] pt-1 font-medium">
              Two senior partners · Zero account managers · 21-day shipping cadence
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <div className="font-mono uppercase text-[#141F2D] font-semibold mb-3 tracking-wider text-[11px]">
                Navigation
              </div>
              <ul className="space-y-2">
                {['Home', 'Services', 'Process', 'Pricing', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(`#${item.toLowerCase()}`);
                      }}
                      className="hover:text-[#9A5328] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase text-[#141F2D] font-semibold mb-3 tracking-wider text-[11px]">
                Services & Combos
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-[#9A5328] transition-colors"
                  >
                    Custom Websites & Web Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-[#9A5328] transition-colors"
                  >
                    Social Media Marketing (FB/IG/LI)
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-[#9A5328] transition-colors"
                  >
                    Smart Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#pricing');
                    }}
                    className="hover:text-[#9A5328] transition-colors"
                  >
                    Growth Combos (Setup + Retainer)
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="font-mono uppercase text-[#141F2D] font-semibold mb-3 tracking-wider text-[11px]">
                Connect Directly
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="hover:text-[#9A5328] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#9A5328]" />
                    <span>Email Studio</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9A5328] transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-[#9A5328]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#7A6E60]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9A5328] transition-colors flex items-center gap-1.5"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#9A5328]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#7A6E60]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#9A5328] transition-colors flex items-center gap-1.5"
                  >
                    <Twitter className="w-3.5 h-3.5 text-[#9A5328]" />
                    <span>X (Twitter)</span>
                    <ArrowUpRight className="w-3 h-3 text-[#7A6E60]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6E60]">
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-[#141F2D]">
              {STUDIO_INFO.tagline}
            </span>
            <span>·</span>
            <span>All rights reserved &copy; {new Date().getFullYear()}</span>
          </div>

          <div className="font-mono text-[11px] text-[#7A6E60]">
            Crafted with Next.js, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
