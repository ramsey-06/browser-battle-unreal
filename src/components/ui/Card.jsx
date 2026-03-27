import React from 'react';

export default function Card({ children, className = '', hover = true, padding = true }) {
  return (
    <div
      className={`
        rounded-2xl border transition-all duration-300
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)',
        boxShadow: '0 1px 4px var(--shadow-color)',
      }}
    >
      {children}
    </div>
  );
}
