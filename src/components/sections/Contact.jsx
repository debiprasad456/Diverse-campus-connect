import React, { useState, useEffect } from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import Button from '../common/Button';
import { CheckCircle2, Send, RotateCcw } from 'lucide-react';

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

  useEffect(() => {
    const handleCategorySelect = (e) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, enquiryType: e.detail }));
      }
    };
    window.addEventListener('select-enquiry-type', handleCategorySelect);
    return () => window.removeEventListener('select-enquiry-type', handleCategorySelect);
  }, []);

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

  const getWhatsAppUrl = (data) => {
    const typeLabel =
      contact.enquiryTypes.find((t) => t.value === data.enquiryType)?.label ||
      data.enquiryType;
    const msg = [
      `*New Inquiry — Diverse Campus Connect*`,
      `• *Name:* ${data.name}`,
      `• *Email:* ${data.email}`,
      `• *Organization/College:* ${data.organization}`,
      `• *Category:* ${typeLabel}`,
      `• *Message:* ${data.message}`,
    ].join('\n');

    return `https://wa.me/918260054398?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const waUrl = getWhatsAppUrl(formData);
      setSubmittedData({
        ...formData,
        whatsappUrl: waUrl,
        timestamp: new Date().toLocaleTimeString(),
      });
      // Directly open WhatsApp with formatted message
      window.open(waUrl, '_blank', 'noopener,noreferrer');
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

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-card">
              {submittedData ? (
                /* Success Feedback State */
                <div className="py-6 space-y-6 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-200 shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Enquiry Submitted Successfully
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5">
                        Thank you, <strong>{submittedData.name}</strong>. Your enquiry details have been prepared for direct dispatch.
                      </p>
                    </div>
                  </div>

                  {/* Summary of what was entered */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                    <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">
                      Submitted Enquiry Summary:
                    </div>
                    <div><span className="font-semibold text-slate-800">Full Name:</span> {submittedData.name}</div>
                    <div><span className="font-semibold text-slate-800">Email:</span> {submittedData.email}</div>
                    <div><span className="font-semibold text-slate-800">Organization:</span> {submittedData.organization}</div>
                    <div><span className="font-semibold text-slate-800">Category:</span> {submittedData.enquiryType}</div>
                    <div><span className="font-semibold text-slate-800">Message:</span> "{submittedData.message}"</div>
                    <div><span className="font-semibold text-slate-800">Timestamp:</span> {submittedData.timestamp}</div>
                  </div>

                  {/* WhatsApp Quick Dispatch Callout */}
                  <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                        <span>Direct WhatsApp Channel</span>
                      </div>
                      <p className="text-xs text-emerald-800">
                        Connect directly with our recruitment desk on WhatsApp for instant coordination.
                      </p>
                    </div>
                    <a
                      href={submittedData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all flex items-center gap-2 shrink-0"
                    >
                      <span>Open in WhatsApp</span>
                    </a>
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
                    <div className="text-[11px] text-slate-500 text-center sm:text-left">
                      <span>Direct connection to our recruitment desk via WhatsApp.</span>
                      <span className="block text-slate-400 font-medium">Official Telephone: <a href="tel:+916743140347" className="hover:text-slate-600 transition-colors">+91 674 3140347</a></span>
                    </div>
                    <Button
                      type="submit"
                      variant="teal"
                      size="md"
                      className="w-full sm:w-auto shadow-card hover:shadow-glow-teal !bg-emerald-600 hover:!bg-emerald-700 !text-white flex items-center justify-center gap-2"
                      icon={<Send className="w-4 h-4" />}
                    >
                      <span>Send Enquiry via WhatsApp</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
