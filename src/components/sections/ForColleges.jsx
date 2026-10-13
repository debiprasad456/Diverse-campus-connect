import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import {
  GraduationCap,
  Building2,
  CheckCircle2,
  Network,
  TrendingUp,
  FileCheck,
  CalendarCheck,
} from 'lucide-react';
import Button from '../common/Button';

export const ForColleges = ({ onOpenPartnerModal }) => {
  const { forColleges } = siteContent;

  const scrollToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.querySelector('#contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('select-enquiry-type', { detail: 'college' }));
  };

  return (
    <section id="for-colleges" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Placement Dashboard Preview */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal/20 to-brand-navy-600/20 rounded-3xl blur-xl" />

              <div className="relative bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-card space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal-50 text-brand-teal flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Placement Cell Support
                      </h4>
                      <p className="text-xs text-slate-500">
                        Institutional Partnership Module
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-teal uppercase tracking-wider bg-brand-teal-50 px-2.5 py-1 rounded-full border border-brand-teal-200">
                    Active MoUs
                  </span>
                </div>

                {/* Benefits List */}
                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <CalendarCheck className="w-5 h-5 text-brand-teal shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Structured Placement Calendar
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Predictable drive schedules aligned with academic semesters.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-brand-navy-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Multi-Corporate Recruiter Access
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Simultaneous outreach to growth tech firms & enterprise brands.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Enhanced Conversion Ratio
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Pre-screening & readiness coaching boosts offer rollouts.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-semibold">Ready for 2026-2027 Drives?</span>
                    <span className="text-slate-300 text-[11px]">Enquire for upcoming recruitment seasons</span>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="px-3 py-1.5 rounded-lg bg-brand-teal text-white font-semibold hover:bg-brand-teal-600 transition-colors"
                  >
                    Partner
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              eyebrow={forColleges.eyebrow}
              title={forColleges.title}
              subtitle={forColleges.description}
              centered={false}
              className="mb-6 sm:mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forColleges.benefits.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-teal/40 transition-colors"
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
                variant="primary"
                size="md"
                onClick={scrollToContact}
              >
                Connect Your Placement Cell
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForColleges;
