import React from 'react';
import { Music, Dumbbell, Globe, Coffee, Palette, BookOpen } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const clubs = [
  { icon: Music, name: 'Arts & Culture', count: 34, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
  { icon: Dumbbell, name: 'Sports & Athletics', count: 22, color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' },
  { icon: Globe, name: 'International', count: 18, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
  { icon: Coffee, name: 'Social & Lifestyle', count: 41, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
  { icon: Palette, name: 'Creative & Media', count: 27, color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' },
  { icon: BookOpen, name: 'Academic & Honor', count: 15, color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' },
];

const housing = [
  { name: 'Ashford Hall', type: 'Traditional', capacity: 320, amenities: 'Dining, Study Rooms, Laundry' },
  { name: 'Pioneer Suites', type: 'Suite-Style', capacity: 180, amenities: 'Private Baths, Common Kitchen' },
  { name: 'Founder\'s House', type: 'Apartment', capacity: 120, amenities: 'Full Kitchen, Living Room, AC' },
  { name: 'The Arches', type: 'Graduate', capacity: 200, amenities: 'Private, Quiet Hours, Study Pods' },
];

export default function StudentLife() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Life at Ashford"
                title="More Than Just a Degree"
                subtitle="Student life at Ashford is rich, diverse, and full of opportunity. From 150+ student clubs to championship sports teams, you'll find your place here."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80" alt="Students" className="rounded-2xl w-full h-40 object-cover" />
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&q=80" alt="Events" className="rounded-2xl w-full h-40 object-cover mt-6" />
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" alt="Sports" className="rounded-2xl w-full h-40 object-cover -mt-6" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80" alt="Campus" className="rounded-2xl w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Community" title="150+ Student Organizations" subtitle="Find your passion, build lifelong friendships, and lead with purpose." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clubs.map(({ icon: Icon, name, count, color }) => (
              <Card key={name} className="text-center cursor-pointer group hover:border-blue-400">
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{name}</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{count} clubs</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader eyebrow="Accommodation" title="Campus Housing" subtitle="Safe, comfortable, and community-oriented residential options for every lifestyle." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {housing.map(h => (
              <Card key={h.name} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0 text-lg">🏠</div>
                <div>
                  <p className="font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>{h.name}</p>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">{h.type} · {h.capacity} residents</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{h.amenities}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Wellbeing" title="Health & Wellness" subtitle="Your wellbeing is our priority. Access comprehensive health and counseling services." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { emoji: '🏥', title: 'Health Center', desc: 'On-campus medical clinic open 7 days a week for primary care and urgent needs.' },
              { emoji: '🧠', title: 'Counseling Services', desc: 'Free confidential mental health counseling available to all enrolled students.' },
              { emoji: '🏋️', title: 'Recreation Center', desc: '80,000 sq ft fitness facility with pools, courts, and group fitness classes.' },
            ].map(item => (
              <Card key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
