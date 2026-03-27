import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Leaf } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const values = [
  { icon: Award, title: 'Academic Excellence', description: 'We hold ourselves to the highest standards in teaching, research, and scholarship.' },
  { icon: Users, title: 'Inclusive Community', description: 'We celebrate diversity and ensure every student feels welcomed and supported.' },
  { icon: BookOpen, title: 'Lifelong Learning', description: 'We foster intellectual curiosity and a passion for continuous discovery.' },
  { icon: Leaf, title: 'Sustainability', description: 'We are committed to a greener campus and a more sustainable future for all.' },
];

const milestones = [
  { year: '1892', event: 'Founded by Chancellor William Ashford' },
  { year: '1920', event: 'Graduate School established' },
  { year: '1958', event: 'Medical Sciences Department launched' },
  { year: '1976', event: 'First female president, Dr. Ruth Harmon' },
  { year: '1995', event: 'Innovation Research Center opened' },
  { year: '2010', event: 'Achieved R1 research university status' },
  { year: '2020', event: 'Launched global online learning programs' },
  { year: '2025', event: 'Ranked #12 nationally' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
                Est. 1892
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                Over 130 Years of Shaping the Future
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Ashford University began as a small liberal arts college in Cambridge, Massachusetts. Today it stands as one of America's most respected research universities, home to 18,000 students from over 120 countries.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Our mission has never wavered: to advance knowledge, foster innovation, and prepare students to lead with wisdom, integrity, and purpose in a rapidly changing world.
              </p>
              <Link to="/admissions" className="btn-primary">
                Join Our Community <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="Campus" className="rounded-2xl object-cover w-full h-48 md:h-64" />
              <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" alt="Library" className="rounded-2xl object-cover w-full h-48 md:h-64 mt-8" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" alt="Students" className="rounded-2xl object-cover w-full h-48 md:h-64 -mt-8" />
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Athletics" className="rounded-2xl object-cover w-full h-48 md:h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Our Values" title="What We Stand For" centered className="mx-auto max-w-xl text-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader eyebrow="Our History" title="130 Years of Milestones" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-900 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} pl-10 md:pl-0`}>
                    <Card className="inline-block text-left">
                      <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">{m.year}</p>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{m.event}</p>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-slate-950 mt-4 md:mt-6 shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Leadership" title="University Administration" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: 'Dr. James Whitmore', title: 'President', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
              { name: 'Dr. Helen Park', title: 'Provost & VP Academic Affairs', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
              { name: 'Mr. Robert Kane', title: 'VP Finance & Operations', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&q=80' },
            ].map(p => (
              <Card key={p.name} className="flex items-center gap-4">
                <img src={p.img} alt={p.name} className="w-16 h-16 rounded-2xl object-cover shrink-0" />
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{p.name}</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
