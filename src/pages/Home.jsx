import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, BookOpen, Trophy, Globe,
  ChevronRight, Star, Play, CheckCircle2
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import VirtualTourCarousel from '../components/features/VirtualTourCarousel';
import { departments } from '../data/departments';
import { events } from '../data/events';

const stats = [
  { label: 'Students Enrolled', value: '18,400+', icon: Users },
  { label: 'Academic Programs', value: '200+', icon: BookOpen },
  { label: 'Years of Excellence', value: '130+', icon: Trophy },
  { label: 'Partner Universities', value: '80+', icon: Globe },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    program: 'MSc Computer Science, 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&q=80',
    text: 'The research opportunities at Ashford are unparalleled. My time here transformed how I think about technology and its impact on society.',
    rating: 5,
  },
  {
    name: 'David Okonkwo',
    program: 'MBA, 2023',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: 'The business school network opened doors I never imagined possible. World-class faculty, incredible peers, and a campus that truly inspires.',
    rating: 5,
  },
  {
    name: 'Mia Tanaka',
    program: 'BSc Engineering, 2024',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    text: 'State-of-the-art labs, hands-on projects, and professors who genuinely care — Ashford gave me every tool I needed to succeed.',
    rating: 5,
  },
];

const highlights = [
  'Top 15 nationally ranked university',
  '98% graduate employment rate',
  'Research presence in 90+ countries',
  'Need-blind admissions policy',
];

function useFadeInUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function Home() {
  const upcomingEvents = events.slice(0, 3);
  const featuredDepts = departments.slice(0, 6);
  const heroRef = useFadeInUp();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--bg-primary)', minHeight: '90vh', display: 'flex', alignItems: 'center' }}
      >
        <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark" />
        <div className="absolute top-24 right-16 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-8 w-[500px] h-[500px] rounded-full bg-teal-500/4 dark:bg-teal-500/8 blur-3xl pointer-events-none" />

        <div className="container-max section-padding relative z-10 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div ref={heroRef}>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-widest uppercase text-blue-700 dark:text-blue-300 mb-8"
                style={{ backgroundColor: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Ranked #12 Nationally — 2025
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6" style={{ color: 'var(--text-primary)' }}>
                Where Great{' '}
                <em className="not-italic text-gradient">Minds</em>
                <br />Find Their Path
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Ashford University has been shaping tomorrow's leaders since 1892. Discover world-class education, cutting-edge research, and a community that lifts you higher.
              </p>

              <ul className="space-y-2.5 mb-10">
                {highlights.map(h => (
                  <li key={h} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary text-base px-8 py-4">
                  Apply Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 text-base px-6 py-4 rounded-xl font-medium transition-all hover:gap-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center shrink-0">
                    <Play size={13} className="text-blue-600 dark:text-blue-400 ml-0.5" />
                  </span>
                  Campus Tour
                </Link>
              </div>
            </div>

            {/* Right: photo collage (xl+) */}
            <div className="hidden xl:grid grid-cols-2 gap-4 h-[480px]">
              <div className="flex flex-col gap-4 pt-10">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80"
                  alt="Ashford campus"
                  className="rounded-2xl w-full flex-1 object-cover"
                  style={{ maxHeight: '260px' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
                  alt="Athletics"
                  className="rounded-2xl w-full object-cover"
                  style={{ height: '160px' }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                  alt="Students"
                  className="rounded-2xl w-full object-cover"
                  style={{ height: '160px' }}
                />
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                  alt="Library"
                  className="rounded-2xl w-full flex-1 object-cover"
                  style={{ maxHeight: '260px' }}
                />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="mt-16 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            style={{ borderTop: '1px solid var(--border-color)' }}
          >
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <Icon size={15} className="text-blue-500" />
                  <span className="font-display text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </span>
                </div>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Departments ─────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Academics"
              title="World-Class Departments"
              subtitle="Eight distinguished departments offering over 200 programs designed for the careers of tomorrow."
            />
            <Link to="/departments" className="btn-secondary shrink-0 self-start sm:self-auto">
              All Departments <ChevronRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredDepts.map((dept, i) => (
              <Reveal key={dept.id} delay={i * 60}>
                <Card className="group h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {dept.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {dept.name}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {dept.description}
                  </p>
                  <div
                    className="flex items-center gap-3 text-xs pt-4"
                    style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
                  >
                    <span>
                      <strong style={{ color: 'var(--text-primary)' }}>{dept.students.toLocaleString()}</strong> students
                    </span>
                    <span>·</span>
                    <span>
                      <strong style={{ color: 'var(--text-primary)' }}>{dept.programs}</strong> programs
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Tour ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="mb-10">
            <SectionHeader
              eyebrow="Campus Tour"
              title="Explore Our Campus"
              subtitle="Take a virtual journey through Ashford's stunning grounds and facilities."
            />
          </Reveal>
          <Reveal>
            <VirtualTourCarousel />
          </Reveal>
        </div>
      </section>

      {/* ── Events ─────────────────────────────────────── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="Upcoming"
              title="Events & Activities"
              subtitle="Stay connected with the vibrant pulse of campus life."
            />
            <Link to="/events" className="btn-secondary shrink-0 self-start sm:self-auto">
              All Events <ChevronRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingEvents.map((event, i) => (
              <Reveal key={event.id} delay={i * 80}>
                <Card padding={false} className="overflow-hidden group flex flex-col h-full">
                  <div className="relative overflow-hidden" style={{ height: '180px' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/90 dark:bg-slate-900/90 text-blue-600 dark:text-blue-400">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-blue-600 text-white rounded-xl px-3 py-2 text-center min-w-[48px]">
                        <div className="text-lg font-bold font-display leading-none">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs uppercase tracking-wide">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {event.title}
                    </h3>
                    <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {event.location} · {event.time}
                    </p>
                    <p className="text-sm leading-relaxed flex-1 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {event.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="text-center mx-auto max-w-2xl mb-12">
            <SectionHeader
              eyebrow="Student Stories"
              title="Voices from Our Community"
              centered
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <Card className="flex flex-col h-full">
                  <div className="flex mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: 'var(--text-secondary)' }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{t.program}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10 md:p-16 text-center">
              <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-teal-400/10 pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-blue-200 mb-4">
                  Applications Open · Fall 2025
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-white font-semibold mb-4">
                  Your Future Starts Here
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                  Join 18,000+ students building extraordinary careers. Scholarship applications close March 31st.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all hover:shadow-lg active:scale-95"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white rounded-xl font-semibold text-sm hover:bg-white/25 transition-colors border border-white/20"
                  >
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
