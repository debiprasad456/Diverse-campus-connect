import {
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { siteContent } from '../../data/siteContent';

export const Footer = ({ onOpenPartnerModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-brand-navy-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 px-2.5 rounded-xl bg-white p-1 flex items-center justify-center border border-white/20 shadow-xs shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Diverse Solutions Logo"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/logo.svg';
                  }}
                />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white tracking-tight">
                  Diverse Campus Connect
                </h4>
                <p className="text-xs font-medium text-brand-teal-400 uppercase tracking-wider">
                  A Unit of Diverse Solutions
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Connecting educational institutions, corporate recruiters, and ambitious students through structured campus placements, strategic consulting, and early-career talent programs.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="https://wa.me/918260054398"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] hover:text-white text-[#25D366] border border-[#25D366]/30 flex items-center justify-center transition-all"
                aria-label="WhatsApp Direct Chat"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.19 8.19 0 0 1-5.82 2.41h-.01c-1.46 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.19-.31a8.16 8.16 0 0 1-1.25-4.45c0-4.54 3.7-8.24 8.24-8.24zm4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/diverse-campus-connect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] border border-[#0A66C2]/30 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
                title="Diverse Campus Connect on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  About DCC
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#drives"
                  onClick={(e) => handleNavClick(e, '#drives')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Campus Drives
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleNavClick(e, '#why-choose-us')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stakeholder Gateways */}
          <div>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stakeholders
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#for-colleges"
                  onClick={(e) => handleNavClick(e, '#for-colleges')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  For Colleges & TPOs
                </a>
              </li>
              <li>
                <a
                  href="#for-corporates"
                  onClick={(e) => handleNavClick(e, '#for-corporates')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  For Corporate HR Teams
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Internship Programs
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-brand-teal-300 transition-colors"
                >
                  Corporate Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Details */}
          <div>
            <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect With Us
            </h5>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal-400 shrink-0 mt-0.5" />
                <a
                  href="tel:+916743140347"
                  className="hover:text-white transition-colors"
                >
                  <span className="font-semibold text-white block">+91 674 3140347</span>
                  <span className="text-xs text-slate-400">Office Telephone Desk</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-teal-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:hr@dscampusconnect.co.in"
                  className="hover:text-white transition-colors break-all"
                >
                  <span className="font-semibold text-white block">hr@dscampusconnect.co.in</span>
                </a>
              </li>
              <li className="flex items-start gap-1">
                <Globe className="w-4 h-4 text-brand-teal-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.dscampusconnect.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors break-all"
                >
                  <span className="font-semibold text-white block">www.dscampusconnect.co.in</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white block text-sm">Corporate Office</span>
                  Ground floor, Plot - 3521/8176, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751025
                </div>
              </li>
              <li className="pt-2 border-t border-white/5">
                <span className="text-xs text-slate-500 block">
                  Support & Drive Operations:
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Mon – Sat: 9:30 AM – 6:30 PM IST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} Diverse Campus Connect. A unit of{' '}
            <strong className="text-slate-400 font-semibold">Diverse Solutions</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400">Campus Placements</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400">Corporate Consulting</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-400">Industry Alliances</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
