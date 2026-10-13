import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, GraduationCap } from 'lucide-react';
import Button from '../common/Button';

export const Navbar = ({ onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Campus Drives', href: '#drives' },
    { label: 'For Colleges', href: '#for-colleges' },
    { label: 'For Corporates', href: '#for-corporates' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy: identify active section based on scroll offset
      const sectionIds = navLinks.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY + 140; // offset for sticky navbar height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const sectionId = href.slice(1);
    setActiveSection(sectionId);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-header border-b border-slate-200/80 shadow-soft py-2.5 sm:py-3'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Brand Logo & Identifier */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group select-none shrink-0"
          >
            {/* Visual Logo Container with user logo */}
            <div className="relative h-9 sm:h-10 px-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src="/logo.jpg"
                alt="Diverse Solutions Logo"
                className="h-6 sm:h-7 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logo.svg';
                }}
              />
            </div>

            <div className="flex flex-col whitespace-nowrap">
              <span className="font-extrabold text-sm sm:text-base lg:text-[17px] tracking-tight text-slate-900 group-hover:text-brand-navy-800 transition-colors leading-tight">
                Diverse Campus Connect
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-brand-teal-700 leading-tight">
                A Unit of Diverse Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Indicator & Animated Hover */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative px-2.5 2xl:px-3 py-2 text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-brand-navy-950 font-bold'
                      : 'text-slate-600 hover:text-brand-navy-950'
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    {link.label}
                    {/* Animated Underline Bar: stays visible on active section, draws from left on hover */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full transition-transform duration-300 ease-out origin-left ${
                        isActive
                          ? 'bg-brand-teal scale-x-100'
                          : 'bg-brand-teal scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <Button
              variant="teal"
              size="sm"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs tracking-wide shadow-sm whitespace-nowrap px-4 py-2"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile / Tablet Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              variant="teal"
              size="sm"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="sm:hidden text-xs px-2.5 py-1.5 whitespace-nowrap"
            >
              Partner
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Active Indicator */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200/80 bg-white/98 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 px-3 py-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-teal-50 text-brand-teal-800 font-bold'
                      : 'text-slate-700 hover:text-brand-navy-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="relative inline-block pb-0.5">
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full transition-transform duration-300 ease-out origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-all ${
                      isActive
                        ? 'text-brand-teal translate-x-0.5'
                        : 'text-slate-400 group-hover:text-brand-teal group-hover:translate-x-0.5'
                    }`}
                  />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-100 mt-2 px-1">
              <Button
                variant="teal"
                size="md"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
