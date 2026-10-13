import React from 'react';
import {
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  CheckCircle2,
  Award,
  ShieldCheck,
  Target,
  Layers,
  Network,
  Sparkles,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Building2,
  Users,
  Briefcase,
  CheckCircle2,
  Award,
  ShieldCheck,
  Target,
  Layers,
  Network,
  Sparkles,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  BookOpen,
  CheckCircle,
};

export const DynamicIcon = ({ name, className = 'w-6 h-6', ...props }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;
