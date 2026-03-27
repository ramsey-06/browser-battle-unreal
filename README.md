# Ashford University Portal

A modern, premium university website frontend built with React + Vite + Tailwind CSS.

## 🚀 Quick Start

```bash
cd university-portal
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout
│   ├── ui/            # Button, Card, SectionHeader, FormInput
│   └── features/      # AnnouncementBanner, SearchBar, ChatbotWidget,
│                        DarkModeToggle, VirtualTourCarousel
├── pages/             # 10 full pages
├── data/              # Mock data (departments, events, faculty)
└── styles/            # Global CSS + Tailwind
```

## ✨ Features

- ✅ Dark / Light mode toggle (persisted in localStorage)
- ✅ Floating AI Chatbot (Ash) with mock responses
- ✅ Global search across departments, events & faculty
- ✅ Virtual tour image carousel with auto-scroll
- ✅ Announcement banner with auto-rotation
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Gallery with masonry grid and lightbox
- ✅ Event filtering by category
- ✅ Faculty filtering by department
- ✅ Contact form with success state
- ✅ Login portal UI with show/hide password
- ✅ Accessible (aria labels, semantic HTML, keyboard nav)
- ✅ Mobile-first responsive layout

## 🌐 Deploy

**Vercel:** Push to GitHub → import in Vercel → auto-deploys  
**Netlify:** Push to GitHub → import in Netlify → auto-deploys  
**GitHub Pages:** Run `npm run build` → deploy `dist/` folder

## 🎨 Design System

- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Colors:** blue blue primary, Teal accent, Ivory backgrounds
- **Dark mode:** Deep charcoal backgrounds, harmonized accents
