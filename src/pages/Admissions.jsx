import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, DollarSign, FileText, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const steps = [
  { step: '01', title: 'Create Account', desc: 'Register on the admissions portal and start your application.' },
  { step: '02', title: 'Submit Application', desc: 'Complete your personal statement, academics, and extracurriculars.' },
  { step: '03', title: 'Upload Documents', desc: 'Transcripts, test scores, letters of recommendation, and ID.' },
  { step: '04', title: 'Interview', desc: 'Selected applicants will be invited to an on-campus or virtual interview.' },
  { step: '05', title: 'Decision', desc: 'Receive your admission decision within 4–6 weeks of completing your application.' },
  { step: '06', title: 'Enroll', desc: 'Accept your offer, pay the enrollment deposit, and begin your journey.' },
];

const deadlines = [
  { round: 'Early Decision', date: 'November 1, 2024', status: 'Closed' },
  { round: 'Early Action', date: 'December 15, 2024', status: 'Closed' },
  { round: 'Regular Decision', date: 'March 31, 2025', status: 'Open' },
  { round: 'Rolling Admission', date: 'June 1, 2025', status: 'Open' },
];

const requirements = [
  'Completed online application form',
  'Official high school or college transcripts',
  'SAT/ACT scores (optional for 2025)',
  'Two letters of recommendation',
  'Personal statement (500–800 words)',
  'Application fee: $75 (waivers available)',
];

export default function Admissions() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Admissions"
              title="Begin Your Ashford Journey"
              subtitle="We welcome applicants from all backgrounds who share our passion for learning, innovation, and making a difference in the world."
            />
            <div className="flex gap-4">
              <Link to="/login" className="btn-primary">Start Application <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn-secondary">Request Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Process" title="How to Apply" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(s => (
              <Card key={s.step}>
                <span className="font-mono text-3xl font-bold text-blue-200 dark:text-blue-900 mb-3 block">{s.step}</span>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Deadlines */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionHeader eyebrow="Checklist" title="Requirements" />
              <ul className="space-y-3">
                {requirements.map(r => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-teal-500 shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeader eyebrow="Dates" title="Key Deadlines" />
              <div className="space-y-3">
                {deadlines.map(d => (
                  <Card key={d.round} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-blue-500" />
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{d.round}</p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{d.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      d.status === 'Open'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-slate-400'
                    }`}>
                      {d.status}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Finances" title="Tuition & Financial Aid" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { label: 'Undergraduate Tuition', value: '$42,500', note: 'per academic year' },
              { label: 'Graduate Tuition', value: '$28,000', note: 'per academic year' },
              { label: 'Aid Recipients', value: '76%', note: 'of all students receive aid' },
            ].map(item => (
              <Card key={item.label} className="text-center">
                <DollarSign size={24} className="text-blue-500 mx-auto mb-3" />
                <p className="font-display text-3xl font-semibold text-gradient mb-1">{item.value}</p>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{item.label}</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.note}</p>
              </Card>
            ))}
          </div>
          <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FileText size={20} className="text-blue-500 shrink-0" />
            <div className="flex-1">
              <p className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Need-Based & Merit Scholarships Available</p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Ashford offers Presidential, Dean's, STEM Excellence, and Community Leader scholarships. Apply by March 31 for full consideration.</p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">Learn More</Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
