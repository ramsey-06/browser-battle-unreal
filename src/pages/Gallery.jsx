import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80', caption: 'Main Campus, Autumn', category: 'Campus' },
  { id: 2, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80', caption: 'Central Library', category: 'Facilities' },
  { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80', caption: 'Graduation Day 2024', category: 'Events' },
  { id: 4, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', caption: 'Innovation Lab', category: 'Research' },
  { id: 5, src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', caption: 'Athletics Complex', category: 'Sports' },
  { id: 6, src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&q=80', caption: 'Spring Cultural Festival', category: 'Events' },
  { id: 7, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80', caption: 'Student Center', category: 'Facilities' },
  { id: 8, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80', caption: 'Research Symposium', category: 'Events' },
  { id: 9, src: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80', caption: 'Technology Lab', category: 'Research' },
  { id: 10, src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80', caption: 'Career Fair 2024', category: 'Events' },
  { id: 11, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80', caption: 'Alumni Networking Night', category: 'Events' },
  { id: 12, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', caption: 'Faculty Award Ceremony', category: 'Campus' },
];

const categories = ['All', 'Campus', 'Facilities', 'Events', 'Research', 'Sports'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All' ? photos : photos.filter(p => p.category === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex(prev => (prev - 1 + filtered.length) % filtered.length);
  const nextPhoto = () => setLightboxIndex(prev => (prev + 1) % filtered.length);

  React.useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader
            eyebrow="Gallery"
            title="Life at Ashford in Pictures"
            subtitle="Browse moments captured across campus — from daily life to landmark celebrations."
          />

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat ? 'bg-blue-600 text-white border-blue-600' : 'hover:border-blue-400'
                }`}
                style={activeCategory !== cat ? { borderColor: 'var(--border-color)', color: 'var(--text-secondary)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-0">
            {filtered.map((photo, idx) => (
              <div
                key={photo.id}
                className="break-inside-avoid mb-4 cursor-pointer group relative rounded-2xl overflow-hidden"
                onClick={() => openLightbox(idx)}
                role="button"
                aria-label={`View ${photo.caption}`}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
              >
                <img
                  src={photo.thumb}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="relative max-w-4xl max-h-screen p-4" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].caption}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-sm">{filtered[lightboxIndex].caption}</p>
              <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
