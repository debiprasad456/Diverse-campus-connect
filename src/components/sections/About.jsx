import React from 'react';
import SectionHeading from '../common/SectionHeading';
import DynamicIcon from '../common/DynamicIcon';
import { siteContent } from '../../data/siteContent';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={about.description}
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {about.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 hover:border-brand-teal/40 transition-all duration-300 shadow-sm hover:shadow-card hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Pillar Icon */}
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-brand-navy-900 text-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-teal transition-colors">
                  <DynamicIcon name={pillar.iconName} className="w-6 h-6 text-brand-teal-300 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-navy-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-semibold text-brand-teal group-hover:text-brand-teal-700">
                <span>Core Ecosystem Pillar</span>
                <CheckCircle2 className="w-4 h-4 ml-1.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Holistic Ecosystem Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-brand-navy-900 to-brand-navy-800 text-white shadow-card relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-teal/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase font-semibold tracking-wider text-brand-teal-400">
                A Brand of Diverse Solutions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Synergizing Academic Ambition with Corporate Excellence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                By maintaining continuous dialogue between university placement officers and corporate talent acquisition leaders, Diverse Campus Connect reduces hiring friction, shortens recruitment cycles, and ensures graduating students transition into meaningful careers.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-brand-navy-900 font-semibold text-xs tracking-wide transition-all border border-white/20"
              >
                <span>Discover Placement Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
