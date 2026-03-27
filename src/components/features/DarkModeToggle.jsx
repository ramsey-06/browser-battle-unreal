import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({ darkMode, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      style={{ color: 'var(--text-secondary)' }}
    >
      <span className={`absolute transition-all duration-300 ${darkMode ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
        <Sun size={18} />
      </span>
      <span className={`absolute transition-all duration-300 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
        <Moon size={18} />
      </span>
    </button>
  );
}
