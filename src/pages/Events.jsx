import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { events, eventCategories } from '../data/events';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory);

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader
            eyebrow="Calendar"
            title="Events & Activities"
            subtitle="Stay connected with everything happening at Ashford — from academic symposiums to cultural celebrations."
          />

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {eventCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'hover:border-blue-400'
                }`}
                style={activeCategory !== cat ? { borderColor: 'var(--border-color)', color: 'var(--text-secondary)' } : {}}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(event => (
              <Card key={event.id} padding={false} className="overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-blue-600 text-white">{event.category}</span>
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 rounded-full font-medium bg-amber-400 text-amber-900">Featured</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-display text-lg font-semibold leading-tight">{event.title}</p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{event.description}</p>
                  <button className="mt-4 w-full py-2.5 rounded-xl border text-sm font-medium transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 hover:text-blue-600"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                    Register / Learn More
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: 'var(--text-secondary)' }}>No events in this category right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
