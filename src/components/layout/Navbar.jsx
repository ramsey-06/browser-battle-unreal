import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, GraduationCap } from 'lucide-react';
import DarkModeToggle from '../features/DarkModeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Departments', path: '/departments' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Events', path: '/events' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ darkMode, toggleDark, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--card-bg)' : 'var(--bg-primary)',
          borderBottom: `1px solid ${scrolled ? 'var(--border-color)' : 'transparent'}`,
        }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Ashford University home">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-lg font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>Ashford</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>University</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={onSearchOpen}
                aria-label="Open search"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Search size={18} />
              </button>
              <DarkModeToggle darkMode={darkMode} toggle={toggleDark} />
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-2 ml-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Portal
              </Link>
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 ml-1"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                style={{ color: 'var(--text-primary)' }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 lg:hidden"
          style={{ top: '64px', backgroundColor: 'var(--bg-primary)' }}
        >
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
                style={{ color: location.pathname === link.path ? undefined : 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="mt-4 btn-primary justify-center"
            >
              Student Portal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
