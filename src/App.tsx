import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenBooking = (service?: string) => {
    if (service) setSelectedService(service);
    else setSelectedService('Growth Combo');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141F2D] antialiased selection:bg-[#141F2D] selection:text-[#FAF8F5]">
      {/* Floating Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking('Growth Combo')} />

      {/* Main Streamlined Experience */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking('Growth Combo')} />
        <ServicesSection onSelectService={(svc) => handleOpenBooking(svc)} />
        <ProcessSection />
        <PricingSection onSelectPlan={(planId) => handleOpenBooking(planId)} />
        <FAQSection />
        <FinalCTA onOpenBooking={() => handleOpenBooking('Growth Combo')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking / Sprint Reservation Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

