import React, { useState } from 'react';
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
import PartnerModal from './components/common/PartnerModal';

function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const handleOpenPartnerModal = () => {
    setIsPartnerModalOpen(true);
  };

  const handleClosePartnerModal = () => {
    setIsPartnerModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-teal selection:text-white">
      {/* Top Sticky Header */}
      <Navbar onOpenPartnerModal={handleOpenPartnerModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPartnerModal={handleOpenPartnerModal} />
        <TrustBar />
        <About />
        <Services onOpenPartnerModal={handleOpenPartnerModal} />
        <CampusDrives onOpenPartnerModal={handleOpenPartnerModal} />
        <ForColleges onOpenPartnerModal={handleOpenPartnerModal} />
        <ForCorporates onOpenPartnerModal={handleOpenPartnerModal} />
        <WhyChooseUs />
        <Contact />
      </main>

      {/* Corporate Multi-Column Footer */}
      <Footer onOpenPartnerModal={handleOpenPartnerModal} />

      {/* Fast Quick-Action Partnership Modal */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={handleClosePartnerModal}
      />
    </div>
  );
}

export default App;
