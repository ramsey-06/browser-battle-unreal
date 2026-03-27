import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Contact from './pages/Contact';
import StudentLife from './pages/StudentLife';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('ashford-dark-mode');
      if (saved !== null) return saved === 'true';
    } catch (_) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('ashford-dark-mode', String(darkMode));
    } catch (_) {}
  }, [darkMode]);

  const toggleDark = () => setDarkMode(prev => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout darkMode={darkMode} toggleDark={toggleDark} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
