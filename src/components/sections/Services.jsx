import React from 'react';
import SectionHeading from '../common/SectionHeading';
import DynamicIcon from '../common/DynamicIcon';
import { siteContent } from '../../data/siteContent';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export const Services = ({ onOpenPartnerModal }) => {
  const { services } = siteContent;

  const scrollToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('select-enquiry-type', { detail: 'general' }));
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Consulting Services"
          title="Comprehensive Campus & Corporate Solutions"
          subtitle="From campus placement drives and corporate fresher hiring to long-term industry–academia alliances, we deliver structured solutions for every stage of early-career recruitment."
        />

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header Tag and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-navy-900 group-hover:text-white text-brand-navy-800 flex items-center justify-center transition-colors">
                    <DynamicIcon name={service.iconName} className="w-6 h-6 text-brand-teal group-hover:text-white" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-navy-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 border-t border-slate-100 pt-5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={scrollToContact}
                  className="w-full text-xs font-semibold text-slate-700 group-hover:text-brand-teal flex items-center justify-between py-1 transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {/* Quick CTA Card to fill the 6th spot in a 3x2 grid */}
          <div className="bg-gradient-to-br from-brand-navy-900 to-brand-navy-800 rounded-2xl p-7 border border-brand-navy-700 text-white shadow-card flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-teal-300 block mb-3">
                Tailored Engagements
              </span>
              <h3 className="text-xl font-bold mb-3">
                Custom Campus Consulting Requirement?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need specialized pan-college pooled drives, hackathons, or targeted skill assessment rounds, our team crafts bespoke recruitment frameworks.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Button
                variant="teal"
                size="md"
                onClick={scrollToContact}
                className="w-full text-center"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
