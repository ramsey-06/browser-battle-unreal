import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBanner from '../features/AnnouncementBanner';
import ChatbotWidget from '../features/ChatbotWidget';
import SearchBar from '../features/SearchBar';

export default function Layout({ darkMode, toggleDark }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Close search on Escape key
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Navbar darkMode={darkMode} toggleDark={toggleDark} onSearchOpen={() => setSearchOpen(true)} />
      <main className="flex-1 page-enter">
        <Outlet />
      </main>
      <Footer />
      <ChatbotWidget />
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
    </div>
  );
}
