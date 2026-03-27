import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { departments } from '../../data/departments';
import { events } from '../../data/events';
import { faculty } from '../../data/faculty';

const allItems = [
  ...departments.map(d => ({ ...d, type: 'Department' })),
  ...events.map(e => ({ ...e, type: 'Event' })),
  ...faculty.map(f => ({ ...f, type: 'Faculty' })),
];

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allItems.filter(item =>
      item.name?.toLowerCase().includes(q) ||
      item.title?.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q) ||
      item.specialty?.toLowerCase().includes(q) ||
      item.department?.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(filtered);
  }, [query]);

  const typeColors = {
    Department: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    Event: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
    Faculty: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
      <div
        className="w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-fade-up"
        style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
      >
        <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <Search size={20} style={{ color: 'var(--text-secondary)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search departments, events, faculty..."
            className="flex-1 bg-transparent text-base focus:outline-none font-body"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Search university"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close search"
          >
            <X size={18} style={{ color: 'var(--text-secondary)' }} />
          </button>
        </div>

        {results.length > 0 && (
          <ul className="max-h-96 overflow-y-auto py-2">
            {results.map((item, i) => (
              <li
                key={`${item.type}-${item.id}`}
                className="flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-slate-800"
                onClick={onClose}
              >
                <span className="text-2xl">{item.icon || (item.type === 'Faculty' ? '👤' : item.type === 'Event' ? '📅' : '🏛')}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                    {item.name || item.title}
                  </p>
                  <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
                    {item.specialty || item.description || item.location || item.department}
                  </p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${typeColors[item.type]}`}>
                  {item.type}
                </span>
              </li>
            ))}
          </ul>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>No results found for "<span className="font-medium">{query}</span>"</p>
          </div>
        )}

        {query.length < 2 && (
          <div className="px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-secondary)' }}>Quick Links</p>
            <div className="flex flex-wrap gap-2">
              {['Computer Science', 'Admissions', 'Events', 'Faculty', 'Library'].map(link => (
                <button
                  key={link}
                  onClick={() => setQuery(link)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
