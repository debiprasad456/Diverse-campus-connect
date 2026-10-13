import React from 'react';
import SectionHeading from '../common/SectionHeading';
import DynamicIcon from '../common/DynamicIcon';
import { siteContent } from '../../data/siteContent';

export const WhyChooseUs = () => {
  const { whyChooseUs } = siteContent;

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {whyChooseUs.reasons.map((reason, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-brand-teal/40 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:bg-brand-navy-900 group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-xs">
                  <DynamicIcon
                    name={reason.iconName}
                    className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-brand-navy-800 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-brand-teal transition-colors">
                <span>Differentiator {index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
