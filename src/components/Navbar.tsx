"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'process', 'pricing', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E6DFD4]/90 shadow-subtle' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Studio Brand Pill */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="nav-brand-logo"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141F2D] flex items-center justify-center text-[#FBF9F5] text-xs font-bold font-mono tracking-wider shadow-sm group-hover:bg-[#1E2D40] transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#16202C] font-display leading-tight">
                {STUDIO_INFO.fullName}
              </span>
              <span className="text-[10px] font-mono text-[#827568] uppercase tracking-widest leading-none mt-0.5 font-medium">
                Design & Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            id="desktop-nav-menu"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F3EFE9]/90 backdrop-blur-md border border-[#E3DBD0]/90 shadow-subtle"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-[#141F2D] font-semibold' : 'text-[#685D52] hover:text-[#16202C]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white rounded-full border border-[#E0D7CB] shadow-subtle"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#8B471D] bg-[#F5EDE4] border border-[#E5D7C7] px-3 py-1 rounded-full shadow-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2652B] animate-pulse" />
              <span>2 Sprint Slots Open</span>
            </div>

            <button
              onClick={onOpenBooking}
              id="nav-book-slot-btn"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full bg-[#141F2D] text-[#FAF8F5] hover:bg-[#1E2E42] transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              <span>Book a Sprint</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4C8BC]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              className="md:hidden p-2 rounded-xl bg-[#F0EBE3] border border-[#E0D8CC] text-[#4A3F35] hover:text-[#16202C]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav-drawer"
            className="fixed top-18 left-4 right-4 z-40 p-4 rounded-2xl bg-[#FAF8F5]/98 backdrop-blur-xl border border-[#E4DDD2] shadow-elevated md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`mobile-link-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#EFE9DF] text-[#141F2D] font-semibold'
                      : 'text-[#685D52] hover:text-[#16202C] hover:bg-[#F5F0E8]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EAE3D7] mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  id="mobile-drawer-book-btn"
                  className="w-full py-2.5 text-center text-sm font-semibold rounded-xl bg-[#141F2D] text-[#FAF8F5] hover:bg-[#1E2E42] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book a 21-Day Sprint</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] font-mono text-[#8B471D] py-1 font-semibold">
                  ● 2 development slots open for next cohort
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
