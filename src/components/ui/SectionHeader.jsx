import React from 'react';

export default function SectionHeader({ eyebrow, title, subtitle, centered = false, className = '' }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
