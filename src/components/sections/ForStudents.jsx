import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import {
  Users,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  BookOpen,
  ArrowRight,
  Compass,
} from 'lucide-react';
import Button from '../common/Button';

export const ForStudents = ({ onOpenPartnerModal }) => {
  const { forStudents } = siteContent;

  const pathways = [
    {
      step: '01',
      title: 'Skill Assessment & Profile Curation',
      desc: 'Understand benchmark requirements for entry-level engineering, analyst, and business roles.',
    },
    {
      step: '02',
      title: 'Real-World Corporate Internships',
      desc: 'Access verified 2-month to 6-month internship stints that count toward practical credit and PPOs.',
    },
    {
      step: '03',
      title: 'Campus & Pooled Placement Drives',
      desc: 'Participate in structured multi-round interview drives with transparent eligibility and salary packages.',
    },
    {
      step: '04',
      title: 'Career Launch & Onboarding',
      desc: 'Smooth transition from college campus to your first corporate workspace with mentorship support.',
    },
  ];

  return (
    <section id="for-students" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={forStudents.eyebrow}
          title={forStudents.title}
          subtitle={forStudents.description}
        />

        {/* 4-Step Career Progression Pathway */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-brand-teal/30 group-hover:text-brand-teal transition-colors">
                    {path.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-navy-900 group-hover:text-white flex items-center justify-center transition-colors">
                    <Compass className="w-4 h-4 text-brand-teal group-hover:text-white" />
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {path.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {path.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-semibold text-brand-teal">
                <span>Pathway Phase {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {forStudents.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <h4 className="text-sm font-bold text-slate-900">{benefit.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Student CTA banner */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-slate-200/90 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Student Placement Desk & Internship Inquiries
            </h4>
            <p className="text-xs text-slate-600 max-w-xl">
              Ask your college placement cell to connect with Diverse Campus Connect for upcoming campus drives and internship listings.
            </p>
          </div>
          <Button
            variant="teal"
            size="md"
            onClick={onOpenPartnerModal}
            className="shrink-0 text-xs"
          >
            Explore Student Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForStudents;
