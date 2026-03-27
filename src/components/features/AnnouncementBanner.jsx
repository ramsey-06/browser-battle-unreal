import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { announcements } from '../../data/faculty';

export default function AnnouncementBanner() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const colors = {
    info: 'bg-blue-600',
    success: 'bg-teal-600',
    warning: 'bg-amber-500',
  };

  const announcement = announcements[current];

  return (
    <div
      className={`${colors[announcement.type] || colors.info} text-white text-sm`}
      role="banner"
      aria-live="polite"
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
        <button
          onClick={() => setCurrent(prev => (prev - 1 + announcements.length) % announcements.length)}
          aria-label="Previous announcement"
          className="p-1 rounded hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={14} />
        </button>

        <p className="text-center flex-1 text-xs sm:text-sm font-medium px-4 truncate">
          {announcement.text}
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrent(prev => (prev + 1) % announcements.length)}
            aria-label="Next announcement"
            className="p-1 rounded hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
          <button
            onClick={() => setVisible(false)}
            aria-label="Close announcements"
            className="p-1 rounded hover:bg-white/20 transition-colors ml-1"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
