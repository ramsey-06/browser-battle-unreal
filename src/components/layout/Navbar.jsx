import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import DarkModeToggle from '../features/DarkModeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Departments', path: '/departments' },

  { label: 'Research', path: '/research' },
  { label: 'Alumni', path: '/alumni' },
  { label: 'Placement', path: '/placement' },

  { label: 'Faculty', path: '/faculty' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Events', path: '/events' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ darkMode, toggleDark, onSearchOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* 🔹 BIG HEADER (LIKE BMS) */}
      <header className="bg-white dark:bg-black border-b">
  <div className="container-max px-12 py-6 flex items-center justify-between">

    {/* LEFT SIDE → LOGO + NAME */}
    <div className="flex items-center gap-6 ml-8 md:ml-12">

      {/* BIG LOGO */}
      <img
        src="/images/logo.png"
        alt="College Logo"
        className="h-28 w-auto object-contain"
      />

      {/* COLLEGE NAME */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Ashford University
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          Affiliated with University of Arizona
        </p>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex items-center gap-4">

      <button
        onClick={onSearchOpen}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
      >
        <Search size={18} />
      </button>

      <DarkModeToggle darkMode={darkMode} toggle={toggleDark} />

      <Link
        to="/login"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
      >
        Portal
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden w-10 h-10 flex items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

    </div>
  </div>
</header>

      {/* 🔹 BLUE NAVBAR */}
      <div className="bg-blue-700 text-white hidden lg:block">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 py-3 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:underline ${
                  location.pathname === link.path ? 'underline font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-20 lg:hidden bg-white dark:bg-black">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}