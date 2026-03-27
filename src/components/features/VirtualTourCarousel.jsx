import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const tourSlides = [
  {
    id: 1,
    title: 'Main Campus',
    subtitle: 'The Heart of Ashford',
    description: 'Our iconic main campus spanning 200 acres of parkland and modern architecture.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Central Library',
    subtitle: 'Knowledge Hub',
    description: 'A state-of-the-art research facility housing over 2 million volumes and digital resources.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Innovation Lab',
    subtitle: 'Where Ideas Become Reality',
    description: 'Cutting-edge labs equipped for AI, robotics, biotech, and interdisciplinary research.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Student Center',
    subtitle: 'Life Beyond the Classroom',
    description: 'A vibrant hub for student organizations, dining, wellness, and social connection.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Athletics Complex',
    subtitle: 'Champions Are Made Here',
    description: 'World-class facilities for 22 varsity sports, fitness centers, and outdoor fields.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
  },
];

export default function VirtualTourCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback((next) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(next);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const prev = () => go((current - 1 + tourSlides.length) % tourSlides.length);
  const next = useCallback(() => go((current + 1) % tourSlides.length), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = tourSlides[current];

  return (
    <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '16/7' }}>
      {/* Images */}
      {tourSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transition-opacity duration-300"
        style={{ opacity: transitioning ? 0 : 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={14} className="text-teal-400" />
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">{slide.subtitle}</span>
        </div>
        <h3 className="font-display text-2xl md:text-4xl text-white font-semibold mb-2">{slide.title}</h3>
        <p className="text-sm md:text-base text-white/80 max-w-lg hidden sm:block">{slide.description}</p>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:bg-white/30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex items-center gap-1.5">
        {tourSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
}
