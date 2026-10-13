import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import {
  Building2,
  Users,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react';
import Button from '../common/Button';

export const ForCorporates = ({ onOpenPartnerModal }) => {
  const { forCorporates } = siteContent;

  const hiringModels = [
    {
      title: 'Dedicated Campus Drives',
      desc: 'Exclusive recruitment days conducted specifically for your organization at target institutions.',
      icon: <Building2 className="w-5 h-5 text-brand-teal" />,
    },
    {
      title: 'Pooled Campus Outreach',
      desc: 'Screen candidates across 5–15 institutions in a consolidated, single-weekend hiring pipeline.',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Pre-Trained Fresher Batches',
      desc: 'Hire talent trained on specific technologies (Full-Stack, Data, Cloud) for immediate project deployment.',
      icon: <Target className="w-5 h-5 text-indigo-500" />,
    },
  ];

  const scrollToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('select-enquiry-type', { detail: 'corporate' }));
  };

  return (
    <section id="for-corporates" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow={forCorporates.eyebrow}
              title={forCorporates.title}
              subtitle={forCorporates.description}
              centered={false}
              className="mb-6 sm:mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forCorporates.benefits.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs hover:border-brand-teal/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <h4 className="text-sm font-bold text-slate-900">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="teal"
                size="md"
                onClick={scrollToContact}
              >
                Hire Fresher Talent
              </Button>
            </div>
          </div>

          {/* Right Column: Hiring Models Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-brand-navy-900 to-brand-navy-800 rounded-2xl p-7 text-white shadow-card border border-brand-navy-700 space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal-300">
                  Talent Acquisition Solutions
                </span>
                <h3 className="text-lg font-bold mt-1">
                  Flexible Campus Hiring Formats
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Tailored to your hiring volume, technical requirements, and timeline.
                </p>
              </div>

              <div className="space-y-3.5">
                {hiringModels.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-white/10 shrink-0">
                      {model.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {model.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {model.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Direct HR Consultation</span>
                <span className="text-brand-teal-300 font-semibold">Diverse Solutions Backed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCorporates;
