import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-8">
          <GraduationCap size={36} className="text-blue-600 dark:text-blue-400" />
        </div>
        <p className="font-mono text-7xl font-bold text-gradient mb-4">404</p>
        <h1 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        <p className="text-base mb-8" style={{ color: 'var(--text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
