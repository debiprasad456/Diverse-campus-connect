import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
  light = false,
}) => {
  return (
    <div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm ${
            light
              ? 'bg-brand-teal/20 text-brand-teal-300 border border-brand-teal-500/30'
              : 'bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-200'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
