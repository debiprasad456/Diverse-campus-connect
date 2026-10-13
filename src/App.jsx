import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import About from './components/sections/About';
import Services from './components/sections/Services';
import CampusDrives from './components/sections/CampusDrives';
import ForColleges from './components/sections/ForColleges';
import ForCorporates from './components/sections/ForCorporates';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';
import WhatsAppButton from './components/common/WhatsAppButton';

function App() {
  const scrollToContact = (category) => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const headerOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (category && typeof category === 'string') {
      window.dispatchEvent(new CustomEvent('select-enquiry-type', { detail: category }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-teal selection:text-white">
      {/* Top Sticky Header */}
      <Navbar onOpenPartnerModal={scrollToContact} onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPartnerModal={() => scrollToContact()} onOpenContact={() => scrollToContact()} />
        <TrustBar />
        <About />
        <Services onOpenPartnerModal={() => scrollToContact('general')} onOpenContact={() => scrollToContact('general')} />
        <CampusDrives onOpenPartnerModal={() => scrollToContact('college')} onOpenContact={() => scrollToContact('college')} />
        <ForColleges onOpenPartnerModal={() => scrollToContact('college')} onOpenContact={() => scrollToContact('college')} />
        <ForCorporates onOpenPartnerModal={() => scrollToContact('corporate')} onOpenContact={() => scrollToContact('corporate')} />
        <WhyChooseUs />
        <Contact />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer onOpenPartnerModal={() => scrollToContact()} onOpenContact={() => scrollToContact()} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
