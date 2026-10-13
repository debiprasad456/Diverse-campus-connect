import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-navy-800 hover:bg-brand-navy-900 text-white shadow-card hover:shadow-elevated hover:-translate-y-0.5 focus:ring-brand-navy-700',
    teal:
      'bg-brand-teal hover:bg-brand-teal-700 text-white shadow-card hover:shadow-glow-teal hover:-translate-y-0.5 focus:ring-brand-teal-500',
    secondary:
      'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:-translate-y-0.5 focus:ring-slate-400',
    outline:
      'border-2 border-brand-navy-800 text-brand-navy-800 hover:bg-brand-navy-800 hover:text-white focus:ring-brand-navy-700',
    outlineWhite:
      'border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy-900 focus:ring-white',
    ghost:
      'text-slate-600 hover:text-brand-navy-900 hover:bg-slate-100 focus:ring-slate-300',
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
