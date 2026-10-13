import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight, GraduationCap } from 'lucide-react';
import Button from '../common/Button';

export const Navbar = ({ onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Campus Drives', href: '#drives' },
    { label: 'For Colleges', href: '#for-colleges' },
    { label: 'For Corporates', href: '#for-corporates' },
    { label: 'For Students', href: '#for-students' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
          ? 'glass-header border-b border-slate-200/80 shadow-soft py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Identifier */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group select-none"
          >
            {/* Visual Logo Container with user logo */}
            <div className="relative h-10 px-2 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src="/logo.jpg"
                alt="Diverse Solutions Logo"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logo.svg';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-brand-navy-800 transition-colors">
                Diverse Campus Connect
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-brand-teal-700">
                A Brand of Diverse Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-brand-navy-900 hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="teal"
              size="sm"
              onClick={onOpenPartnerModal}
              className="text-xs tracking-wide shadow-sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <Button
              variant="teal"
              size="sm"
              onClick={onOpenPartnerModal}
              className="sm:hidden text-xs px-2.5 py-1.5"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 px-3 py-1">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-brand-navy-900 hover:bg-slate-50 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 mt-2 px-1">
              <Button
                variant="teal"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
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
