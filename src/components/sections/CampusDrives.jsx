import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteContent } from '../../data/siteContent';
import {
  GraduationCap,
  Calendar,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ZoomIn,
} from 'lucide-react';
import Button from '../common/Button';

export const CampusDrives = ({ onOpenPartnerModal }) => {
  const { campusDrives } = siteContent;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [showAllMobilePhotos, setShowAllMobilePhotos] = useState(false);

  const filterCategories = [
    { id: 'all', label: 'All Partner Drives' },
    { id: 'iim', label: 'Premier IIMs' },
    { id: 'management', label: 'Management & IT' },
    { id: 'engineering', label: 'Engineering Colleges' },
  ];

  const filteredDrives = campusDrives.drives.filter((drive) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'iim') return drive.college.includes('IIM') || drive.highlightTag.includes('IIM');
    if (activeFilter === 'management') return drive.disciplines.some(d => d.includes('Management') || d.includes('MBA') || d.includes('MCA'));
    if (activeFilter === 'engineering') return drive.college.includes('Engineering') || drive.highlightTag.includes('Engineering');
    return true;
  });

  const openLightbox = (photoUrl) => {
    const idx = campusDrives.galleryPhotos.findIndex((p) => p.url === photoUrl);
    setSelectedPhotoIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === campusDrives.galleryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? campusDrives.galleryPhotos.length - 1 : prev - 1
    );
  };

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
    <section id="drives" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={campusDrives.eyebrow}
          title={campusDrives.title}
          subtitle={campusDrives.subtitle}
        />

        {/* Drive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-brand-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Drives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDrives.map((drive) => (
            <div
              key={drive.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              {/* Drive Media Banner */}
              <div
                className="relative h-56 sm:h-60 bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(drive.image)}
              >
                {/* Real Photo */}
                <img
                  src={drive.image}
                  alt={`${drive.college} Campus Drive`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white shadow-xs">
                    {drive.highlightTag}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur-sm shadow-xs">
                    <ZoomIn className="w-3 h-3 text-brand-teal" />
                    <span>View</span>
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white z-10">
                  <div className="text-[10px] uppercase tracking-wider text-brand-teal-300 font-semibold mb-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-teal-300" />
                    {drive.location}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold leading-snug drop-shadow-sm line-clamp-2">
                    {drive.college}
                  </h4>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <div className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-1">
                    {drive.type}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {drive.summary}
                  </p>
                </div>

                {/* Disciplines Covered */}
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Disciplines & Batches:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {drive.disciplines.map((stream, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70"
                      >
                        {stream}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {drive.stats}
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="font-bold text-brand-teal hover:text-brand-teal-700 flex items-center gap-1 transition-colors text-[11px]"
                  >
                    <span>Partner</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Campus Drive Photo Gallery Subsection */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal-50 text-brand-teal-700 border border-brand-teal-200 mb-2">
                <ImageIcon className="w-3.5 h-3.5" />
                Live On-Campus Photography
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Institutional Campus Drives Gallery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Visual highlights capturing digital placement itineraries, executive boardroom GD/PI rounds, auditorium keynotes, and celebrated student cohort placements.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Click any photo to enlarge
            </div>
          </div>

          {/* Gallery Category Tab - All Photos only */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-navy-900 text-white shadow-xs">
              All Photos ({campusDrives.galleryPhotos.length})
            </span>
          </div>

          {/* Clean Photo Gallery Grid - No Text On Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {campusDrives.galleryPhotos.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => openLightbox(photo.url)}
                className={`group relative h-48 sm:h-56 rounded-xl overflow-hidden bg-slate-100 cursor-pointer shadow-xs hover:shadow-card border border-slate-200/80 hover:border-brand-teal/50 transition-all duration-300 ${
                  !showAllMobilePhotos && pIdx >= 6 ? 'hidden sm:block' : ''
                }`}
              >
                {/* Unobstructed Clean Image */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Action without text clutter */}
                <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/95 text-slate-800 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4 text-brand-teal" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Show More / Show Less Button */}
          {campusDrives.galleryPhotos.length > 6 && (
            <div className="mt-5 flex justify-center sm:hidden">
              <button
                type="button"
                onClick={() => setShowAllMobilePhotos((prev) => !prev)}
                className="w-full py-3 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-navy-900 border border-slate-300 shadow-xs active:scale-[0.98] transition-all"
              >
                {showAllMobilePhotos ? (
                  <>
                    <span>Show Less Photos</span>
                    <ChevronUp className="w-4 h-4 text-brand-teal" />
                  </>
                ) : (
                  <>
                    <span>
                      Show More Photos (+{campusDrives.galleryPhotos.length - 6} more)
                    </span>
                    <ChevronDown className="w-4 h-4 text-brand-teal" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Bottom Callout: Host a drive at your institution */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white/10 text-brand-teal-300 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold">
                Host an Official Campus Drive at Your Institution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Partner with Diverse Campus Connect under Diverse Solutions to conduct structured campus recruitment, corporate evaluations, and pooled drives.
              </p>
            </div>
          </div>
          <Button
            variant="teal"
            size="md"
            onClick={scrollToContact}
            className="shrink-0 text-xs shadow-card"
          >
            Connect Placement Cell
          </Button>
        </div>
      </div>

      {/* Lightbox Modal - Click blank space to close, Close X icon, high-contrast readable text */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 animate-fade-in cursor-pointer select-none"
        >
          {/* Close Button (Cross / X icon) */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 border border-white/20 transition-all shadow-xl hover:scale-105 active:scale-95"
            aria-label="Close enlarged photo"
            title="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Top Header - High-contrast readable title & category */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl text-center pt-2 pr-12 sm:pr-0 cursor-default"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-white shadow-sm mb-2">
              <span>{campusDrives.galleryPhotos[selectedPhotoIndex].category}</span>
              <span className="text-white/60">•</span>
              <span className="text-white/90">
                Photo {selectedPhotoIndex + 1} of {campusDrives.galleryPhotos.length}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight drop-shadow">
              {campusDrives.galleryPhotos[selectedPhotoIndex].title}
            </h3>
          </div>

          {/* Center Image Container with Prev / Next */}
          <div
            className="relative w-full max-w-4xl flex-1 max-h-[70vh] flex items-center justify-center my-3"
          >
            <img
              onClick={(e) => e.stopPropagation()}
              src={campusDrives.galleryPhotos[selectedPhotoIndex].url}
              alt={campusDrives.galleryPhotos[selectedPhotoIndex].title}
              className="max-w-full max-h-[68vh] object-contain rounded-2xl shadow-2xl border border-white/10 cursor-default"
            />

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 transition-all shadow-xl border border-white/20 hover:scale-105"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 transition-all shadow-xl border border-white/20 hover:scale-105"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="w-full max-w-3xl text-center pb-2 cursor-pointer"
          >
            <p
              onClick={(e) => e.stopPropagation()}
              className="text-xs sm:text-sm text-slate-200 bg-slate-900/70 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md inline-block shadow-lg leading-relaxed cursor-default"
            >
              {campusDrives.galleryPhotos[selectedPhotoIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampusDrives;
