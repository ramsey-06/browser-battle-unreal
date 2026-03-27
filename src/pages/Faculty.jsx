import React, { useState } from 'react';
import { Search, BookOpen, Mail } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import { faculty } from '../data/faculty';
import { departments } from '../data/departments';

const deptNames = ['All', ...departments.map(d => d.name)];

export default function Faculty() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = faculty.filter(f =>
    (filter === 'All' || f.department === filter) &&
    (f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.specialty.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader
            eyebrow="People"
            title="Our Distinguished Faculty"
            subtitle="Meet the scholars, researchers, and mentors who drive academic excellence at Ashford."
          />

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-9"
                aria-label="Search faculty"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['All', 'Computer Science', 'Engineering', 'Business Administration', 'Medical Sciences'].map(d => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    filter === d
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'hover:border-blue-400'
                  }`}
                  style={filter !== d ? { borderColor: 'var(--border-color)', color: 'var(--text-secondary)' } : {}}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(f => (
              <Card key={f.id} className="group text-center">
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-800" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{f.name}</h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">{f.title}</p>
                <p className="text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>{f.department}</p>
                <p className="text-xs italic mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.specialty}</p>
                <div className="flex items-center justify-center gap-4 text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} />
                    <span>{f.publications} publications</span>
                  </div>
                </div>
                <a
                  href={`mailto:${f.email}`}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Mail size={12} />
                  {f.email}
                </a>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: 'var(--text-secondary)' }}>No faculty found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
