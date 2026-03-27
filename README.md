# Ashford University Portal

A modern, premium university website frontend built with React, Vite, and Tailwind CSS.

---

## Quick Start

```bash
cd university-portal
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout
│   ├── ui/            # Button, Card, SectionHeader, FormInput
│   └── features/      # AnnouncementBanner, SearchBar, ChatbotWidget,
│                        DarkModeToggle, VirtualTourCarousel
├── pages/             # Application pages
├── data/              # Mock data (departments, events, faculty)
└── styles/            # Global CSS + Tailwind
```

---

## Features

* Dark / Light mode toggle (stored in localStorage)
* Floating AI chatbot interface with mock responses
* Global search across departments, events, and faculty
* Virtual tour image carousel with auto-scroll
* Announcement banner with rotation support
* Responsive navigation with mobile menu
* Gallery with grid layout and lightbox
* Event filtering interface
* Faculty filtering by department
* Contact form UI with success state
* Login portal interface
* Accessible design (ARIA, semantic HTML, keyboard navigation)
* Mobile-first responsive layout

---

## Deployment

Vercel: Connect repository and deploy
Netlify: Connect repository and deploy
GitHub Pages: Build project and deploy the dist folder

---

## Design System

* Typography: Playfair Display (headings), DM Sans (body)
* Colors: Muted blue primary, teal accent, soft neutral backgrounds
* Dark mode: Charcoal backgrounds with balanced contrast

---

## Notes

* Frontend-only project
* Uses mock data for demonstration
* Structured for scalability and future backend integration

---

## Author

Sanjana V Shetty

