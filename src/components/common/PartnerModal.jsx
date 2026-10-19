import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Building2, Users, ArrowRight } from 'lucide-react';
import Button from './Button';

export const PartnerModal = ({ isOpen, onClose, onSelectTrack }) => {
  const [selectedRole, setSelectedRole] = useState('college');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    notes: '',
  });

  if (!isOpen) return null;

  const [whatsappUrl, setWhatsappUrl] = useState('');

  const getWhatsAppUrl = () => {
    const roleLabels = {
      college: 'College / University Placement Cell (TPO)',
      corporate: 'Corporate Recruiter / HR Team',
      student: 'Student Body / Candidate',
    };
    const msg = [
      `*New Partnership Request — Diverse Campus Connect*`,
      `• *Role:* ${roleLabels[selectedRole] || selectedRole}`,
      `• *Name:* ${formData.name}`,
      `• *Work Email:* ${formData.email}`,
      `• *Organization/College:* ${formData.organization}`,
      `• *Requirements/Scope:* ${formData.notes || 'N/A'}`,
    ].join('\n');

    return `https://wa.me/918260054398?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) {
      alert('Please complete the required fields.');
      return;
    }
    const url = getWhatsAppUrl();
    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', organization: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-brand-navy-900 to-brand-navy-800 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-brand-teal-300">
              Partnership Inquiry
            </span>
            <h3 className="text-lg font-bold">Partner With Diverse Campus Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-5 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Partnership Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest, <strong>{formData.name}</strong> from{' '}
                <strong>{formData.organization}</strong>. Your enquiry details have been routed to our campus consulting team.
              </p>
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between gap-3 text-left">
                <div>
                  <span className="font-bold block text-emerald-950">WhatsApp Official Channel:</span>
                  <span>Connect with our recruitment desk</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-colors shrink-0"
                >
                  Open Chat
                </a>
              </div>
              <div className="pt-2">
                <Button variant="primary" onClick={handleReset} className="w-full">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Stakeholder selection pills */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  I represent:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('college')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      selectedRole === 'college'
                        ? 'border-brand-teal bg-brand-teal-50/60 text-brand-teal-800 font-semibold ring-2 ring-brand-teal/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <GraduationCap className="w-5 h-5 mb-1 text-brand-teal" />
                    <span className="text-xs">College / TPO</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole('corporate')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      selectedRole === 'corporate'
                        ? 'border-brand-teal bg-brand-teal-50/60 text-brand-teal-800 font-semibold ring-2 ring-brand-teal/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Building2 className="w-5 h-5 mb-1 text-brand-navy-600" />
                    <span className="text-xs">Corporate HR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole('student')}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                      selectedRole === 'student'
                        ? 'border-brand-teal bg-brand-teal-50/60 text-brand-teal-800 font-semibold ring-2 ring-brand-teal/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <Users className="w-5 h-5 mb-1 text-slate-700" />
                    <span className="text-xs">Student Body</span>
                  </button>
                </div>
              </div>

              {/* Form inputs */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Sharma / Priya Sen"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Official Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Institution / Company <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="College or Company Name"
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Key Requirements / Drive Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly state your target disciplines, hiring dates, or placement drive expectations..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:border-brand-teal resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs text-brand-teal hover:text-brand-teal-700 font-medium underline flex items-center gap-1"
                >
                  Go to full contact form <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Button type="submit" variant="teal" size="md">
                  Submit Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
