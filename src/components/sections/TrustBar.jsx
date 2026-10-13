import React from 'react';
import { Building2, GraduationCap, Users, ShieldCheck, Briefcase } from 'lucide-react';

export const TrustBar = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-teal" />,
      label: 'Campus Recruitment Drives',
      sub: 'Pan-College Coordination',
    },
    {
      icon: <Building2 className="w-5 h-5 text-brand-teal" />,
      label: 'Corporate Employer Network',
      sub: 'Multi-Industry Fresher Roles',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-brand-teal" />,
      label: 'Structured Internships',
      sub: 'Pre-Placement Offer Pathways',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      label: 'Diverse Solutions Governance',
      sub: 'Corporate Consulting Standards',
    },
  ];

  return (
    <div className="bg-white border-y border-slate-200/80 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3.5 ${
                index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {item.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
