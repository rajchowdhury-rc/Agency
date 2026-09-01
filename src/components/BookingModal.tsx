import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, ArrowRight, Calendar, MessageSquare, Mail, CheckCircle2, LogIn } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { useAuth } from '../hooks/useAuth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string | null;
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [serviceType, setServiceType] = useState<string>('growth-combo');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [brief, setBrief] = useState('');
  const [budget, setBudget] = useState('Growth Combo (₹45,000 setup + ₹28,000/mo)');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, login } = useAuth();

  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('kickstart') || initialService.toLowerCase().includes('starter')) {
        setServiceType('starter-combo');
        setBudget('Kickstart Combo (₹28,000 setup + ₹12,500/mo)');
      } else if (initialService.toLowerCase().includes('scale')) {
        setServiceType('scale-combo');
        setBudget('Scale Combo (₹75,000+ setup + ₹48,000+/mo)');
      } else if (initialService.toLowerCase().includes('website')) {
        setServiceType('website');
        setBudget('Standalone Website (₹35,000 / $520)');
      } else if (initialService.toLowerCase().includes('mvp')) {
        setServiceType('mvp');
        setBudget('Full-Stack MVP (₹1,25,000 / $1,650)');
      } else {
        setServiceType('growth-combo');
        setBudget('Growth Combo (₹45,000 setup + ₹28,000/mo)');
      }
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'inquiries'), {
        userId: user.uid,
        userEmail: user.email,
        name: name || user.displayName || 'Founder',
        phone,
        brief,
        serviceType,
        budget,
        createdAt: serverTimestamp(),
        status: 'new'
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setBrief('');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#FAF8F5] border border-[#E4DCD0] shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="absolute top-5 right-5 p-2 rounded-full bg-[#F2ECE0] hover:bg-[#E7DAC9] text-[#7A6E60] hover:text-[#141F2D] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#9A5328] animate-pulse" />
                <span className="text-xs font-mono text-[#8B481E] font-semibold">
                  2 CLIENT SLOTS OPEN THIS MONTH
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#141F2D] font-display">
                Start your project & growth engine.
              </h3>
              <p className="text-xs sm:text-sm text-[#5E5245] mt-1 mb-6">
                Tell us about your brand or product. We review your requirements and follow up with a custom roadmap in under 4 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Package Track Selector */}
                <div>
                  <label className="block text-xs font-mono text-[#8B481E] uppercase mb-2 font-semibold">
                    Select Package / Service
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'mvp', name: '21-Day MVP', sub: '₹1.25L / $1,650', type: 'Single Sprint' },
                      { id: 'website', name: 'Website Only', sub: '₹35k / $520', type: 'Single Sprint' },
                      { id: 'starter-combo', name: 'Kickstart', sub: '₹28k + ₹12.5k/mo', type: 'Combo' },
                      { id: 'growth-combo', name: 'Growth', sub: '₹45k + ₹28k/mo', type: 'Combo' },
                      { id: 'scale-combo', name: 'Scale', sub: '₹75k+ + ₹48k+/mo', type: 'Combo' },
                    ].map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => {
                          setServiceType(t.id);
                          if (t.id === 'mvp') setBudget('Full-Stack MVP (₹1,25,000 / $1,650)');
                          if (t.id === 'website') setBudget('Standalone Website (₹35,000 / $520)');
                          if (t.id === 'starter-combo') setBudget('Kickstart Combo (₹28,000 setup + ₹12,500/mo)');
                          if (t.id === 'growth-combo') setBudget('Growth Combo (₹45,000 setup + ₹28,000/mo)');
                          if (t.id === 'scale-combo') setBudget('Scale Combo (₹75,000+ setup + ₹48,000+/mo)');
                        }}
                        className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                          serviceType === t.id
                            ? 'bg-[#141F2D] border-[#141F2D] text-[#FAF8F5] font-semibold shadow-subtle'
                            : 'bg-white border-[#E4DCD0] text-[#5E5245] hover:border-[#CCC1B0] hover:text-[#141F2D]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={serviceType === t.id ? 'text-white font-medium' : 'text-[#141F2D] font-medium'}>
                            {t.name}
                          </span>
                        </div>
                        <div className={`text-[10px] font-mono ${serviceType === t.id ? 'text-[#D8C6B6]' : 'text-[#8B481E]'}`}>
                          {t.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label className="block text-xs font-mono text-[#8B481E] uppercase mb-1 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={user ? user.displayName || "e.g. Rohan Sharma" : "e.g. Rohan Sharma"}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8D0C2] text-[#141F2D] text-xs sm:text-sm placeholder-[#A09383] focus:outline-none focus:border-[#9A5328] focus:ring-1 focus:ring-[#9A5328] transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-mono text-[#8B481E] uppercase mb-1 font-semibold">
                    Phone / WhatsApp (Optional for instant alert demo)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8D0C2] text-[#141F2D] text-xs sm:text-sm placeholder-[#A09383] focus:outline-none focus:border-[#9A5328] focus:ring-1 focus:ring-[#9A5328] transition-all"
                  />
                </div>

                {/* Brief */}
                <div>
                  <label className="block text-xs font-mono text-[#8B481E] uppercase mb-1 font-semibold">
                    Tell us about your project or goals
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Describe your website needs, social channels, or specific automation workflows..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8D0C2] text-[#141F2D] text-xs sm:text-sm placeholder-[#A09383] focus:outline-none focus:border-[#9A5328] focus:ring-1 focus:ring-[#9A5328] transition-all resize-none"
                  />
                </div>

                {/* Package / Budget Breakdown Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-[#8B481E] uppercase mb-1 font-semibold">
                    Selected Pricing Plan
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8D0C2] text-[#141F2D] text-xs sm:text-sm focus:outline-none focus:border-[#9A5328] focus:ring-1 focus:ring-[#9A5328] transition-all"
                  >
                    <option value="Kickstart Combo (₹28,000 setup + ₹12,500/mo)">Kickstart: ₹28k / $420 Setup + ₹12.5k / $190/mo</option>
                    <option value="Growth Combo (₹45,000 setup + ₹28,000/mo)">Growth: ₹45k / $680 Setup + ₹28k / $420/mo (Most Popular)</option>
                    <option value="Scale Combo (₹75,000+ setup + ₹48,000+/mo)">Scale: ₹75k+ / $1,150+ Setup + ₹48k+ / $750+/mo</option>
                    <option value="Standalone Website (₹35,000 / $520)">Standalone Website Only: ₹35,000 / $520</option>
                    <option value="Full-Stack MVP (₹1,25,000 / $1,650)">Full-Stack 21-Day MVP: ₹1,25,000 / $1,650</option>
                  </select>
                </div>

                <div className="pt-2">
                  {!user ? (
                    <button
                      type="button"
                      onClick={login}
                      className="w-full py-3.5 rounded-full bg-white border-2 border-[#141F2D] text-[#141F2D] hover:bg-[#F3EFE9] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Sign in with Google to Book</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-booking-form-btn"
                      className="w-full py-3.5 rounded-full bg-[#141F2D] hover:bg-[#1E2E42] text-[#FAF8F5] font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-card disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry & Get Roadmap →'}</span>
                    </button>
                  )}
                  <div className="text-center text-[11px] text-[#7A6E60] mt-2 font-mono">
                    Direct partner review · Instant automated lead routing · 4-hour response
                  </div>
                </div>
              </form>
            </div>
          ) : (
            /* Submission Success Screen */
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F5ECE2] border border-[#E7DAC9] text-[#9A5328] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h4 className="text-2xl font-bold text-[#141F2D] font-display">
                Request Captured & Routed
              </h4>
              <p className="text-xs sm:text-sm text-[#5E5245] mt-2 max-w-md mx-auto leading-relaxed">
                Thanks <strong className="text-[#141F2D]">{name || user?.displayName || 'Founder'}</strong>. Your brief for the <strong className="text-[#9A5328] uppercase">{budget}</strong> was instantly captured by our automation pipeline and forwarded to our team. We'll reply directly to <span className="text-[#141F2D] font-medium">{user?.email}</span>.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E4DCD0] text-left text-xs space-y-2">
                <div className="font-semibold text-[#141F2D]">Automated Next Steps:</div>
                <div className="flex items-center gap-2 text-[#5E5245]">
                  <Check className="w-3.5 h-3.5 text-[#9A5328]" />
                  <span>Lead recorded in CRM via instant webhook pipeline</span>
                </div>
                <div className="flex items-center gap-2 text-[#5E5245]">
                  <Check className="w-3.5 h-3.5 text-[#9A5328]" />
                  <span>We send a calendar invite with a customized strategy outline</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <a
                  href={`mailto:${STUDIO_INFO.email}?subject=Inquiry%20from%20${encodeURIComponent(name)}`}
                  className="flex-1 py-2.5 rounded-full bg-[#F5ECE2] hover:bg-[#EBDCCB] text-[#8B481E] text-xs font-semibold border border-[#E7DAC9] flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Studio Directly</span>
                </a>
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-full bg-[#141F2D] text-[#FAF8F5] text-xs font-semibold hover:bg-[#1E2E42] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
