import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import DynamicIcon from '../common/DynamicIcon';
import Button from '../common/Button';
import { CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';

export const Contact = () => {
  const { contact } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    enquiryType: 'college',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com)';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Institution or organization name is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Store locally for demo preview
      setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString() });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      organization: '',
      enquiryType: 'college',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left Column: Contact Cards & Corporate Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-brand-navy-900 to-brand-navy-800 text-white rounded-2xl p-7 sm:p-8 shadow-card border border-brand-navy-700 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal-300">
                  Campus Consulting Desk
                </span>
                <h3 className="text-xl font-bold mt-1">
                  Start the Conversation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Connect directly with the Diverse Campus Connect team for campus placement drive scheduling, recruiter alignments, and institutional MoUs.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {contact.infoCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-brand-teal/20 text-brand-teal-300 shrink-0 mt-0.5">
                      <DynamicIcon name={card.iconName} className="w-5 h-5 text-brand-teal-300" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                        {card.title}
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {card.details}
                      </div>
                      <div className="text-xs text-slate-300">
                        {card.subDetails}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                Operating under the professional governance of <strong className="text-slate-200">Diverse Solutions</strong>. All inquiries are reviewed by our institutional consulting team.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-card">
              {submittedData ? (
                /* Success Feedback State */
                <div className="py-6 space-y-5 animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Enquiry Submitted Successfully (Demo State)
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Thank you, <strong>{submittedData.name}</strong>. Your enquiry details have been verified on the frontend.
                    </p>
                  </div>

                  {/* Summary of what was entered */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                    <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">
                      Submitted Enquiry Summary:
                    </div>
                    <div><span className="font-semibold">Full Name:</span> {submittedData.name}</div>
                    <div><span className="font-semibold">Email:</span> {submittedData.email}</div>
                    <div><span className="font-semibold">Organization:</span> {submittedData.organization}</div>
                    <div><span className="font-semibold">Category:</span> {submittedData.enquiryType}</div>
                    <div><span className="font-semibold">Message:</span> "{submittedData.message}"</div>
                    <div><span className="font-semibold">Client Timestamp:</span> {submittedData.timestamp}</div>
                  </div>

                  {/* Explicit Transparent Notice */}
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                    <p>
                      <strong>Frontend Notice:</strong> This is a client-side prototype. No backend email server is connected yet, so this message was not dispatched across the web. You can integrate Formspree, EmailJS, or your backend API seamlessly.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={handleReset}
                      icon={<RotateCcw className="w-4 h-4" />}
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Input Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Send an Official Inquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please provide your details below. All fields with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="Dr. Rajesh / Priya Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all ${
                          errors.name
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-300 focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal'
                        } focus:outline-none`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Official Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="name@organization.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all ${
                          errors.email
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-300 focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal'
                        } focus:outline-none`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Organization & Enquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Organization / College Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => {
                          setFormData({ ...formData, organization: e.target.value });
                          if (errors.organization) setErrors({ ...errors, organization: null });
                        }}
                        placeholder="University or Enterprise name"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all ${
                          errors.organization
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-300 focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal'
                        } focus:outline-none`}
                      />
                      {errors.organization && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.organization}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Stakeholder / Enquiry Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal"
                      >
                        {contact.enquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-slate-700">
                        Inquiry Message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Please share details such as candidate batch size, preferred placement drive dates, target job profiles, or consulting scope..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition-all resize-none ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200 focus:border-rose-500'
                          : 'border-slate-300 focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal'
                      } focus:outline-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Form Submission CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-500 text-center sm:text-left">
                      Strict privacy assurance under Diverse Solutions guidelines.
                    </p>
                    <Button
                      type="submit"
                      variant="teal"
                      size="md"
                      className="w-full sm:w-auto shadow-card hover:shadow-glow-teal"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Official Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
