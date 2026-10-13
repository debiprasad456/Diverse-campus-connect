import React from 'react';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Building2,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
} from 'lucide-react';
import Button from '../common/Button';
import { siteContent } from '../../data/siteContent';

export const Hero = ({ onOpenPartnerModal }) => {
  const { hero, brand } = siteContent;

  const scrollToServices = (e) => {
    e.preventDefault();
    const el = document.querySelector('#services');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-navy-100/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal-50 border border-brand-teal-200/80 text-brand-teal-800 text-xs font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal animate-ping" />
              <span>{brand.parentTagline}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 hidden sm:inline">Campus Consulting & Placements</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Bridging Campuses.{' '}
              <span className="block text-gradient mt-1 sm:mt-2">
                Connecting Careers.
              </span>
            </h1>

            {/* Description Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empowering colleges with high-impact placement drives, enabling corporates with day-one ready fresher talent, and guiding students to rewarding career opportunities through structured industry partnerships.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="teal"
                size="lg"
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto shadow-card hover:shadow-glow-teal"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {hero.primaryCta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </div>

            {/* Trust Badges / Quick Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              {hero.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white/80 p-3 rounded-xl border border-slate-200/60 shadow-xs">
                  <div className="text-xs font-bold text-brand-navy-900 truncate">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-navy-700 via-brand-teal to-brand-navy-900 opacity-20 blur-xl" />

              {/* Central Premium Card */}
              <div className="relative bg-white rounded-2xl border border-slate-200/80 shadow-card p-6 sm:p-7 space-y-6">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy-800 text-white flex items-center justify-center font-bold">
                      <GraduationCap className="w-6 h-6 text-brand-teal-300" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">
                        Campus Recruitment Hub
                      </h2>
                      <p className="text-xs text-brand-teal-600 font-medium">
                        Diverse Campus Connect Model
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Drives
                  </span>
                </div>

                {/* Ecosystem Pillars Preview */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-100/80 transition-colors">
                    <div className="p-2 rounded-lg bg-brand-navy-50 text-brand-navy-700 shrink-0">
                      <GraduationCap className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Colleges & Universities
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        High-volume on-campus placement drives & corporate MoUs.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-100/80 transition-colors">
                    <div className="p-2 rounded-lg bg-brand-navy-50 text-brand-navy-700 shrink-0">
                      <Building2 className="w-5 h-5 text-brand-navy-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Corporate Employers
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        Streamlined fresher intake with pre-evaluated candidate batches.
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-100/80 transition-colors">
                    <div className="p-2 rounded-lg bg-brand-navy-50 text-brand-navy-700 shrink-0">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Emerging Student Talent
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5">
                        Verified internships, skill enablement & direct placement rounds.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Consulting Standards</span>
                  </div>
                  <span className="font-semibold text-brand-navy-800">
                    Diverse Solutions Brand
                  </span>
                </div>
              </div>

              {/* Floating Stat Chip (Top-right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-card border border-slate-200/80 items-center gap-2 text-xs font-semibold text-slate-800 animate-slide-up">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Structured Placement Drives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
