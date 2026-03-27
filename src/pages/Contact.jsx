import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '100 University Avenue, Cambridge, MA 02139, USA' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-1234' },
  { icon: Mail, label: 'Email', value: 'info@ashford.edu' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Us"
            subtitle="Have questions about admissions, programs, or campus life? We're here to help."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <Card key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>{label}</p>
                    <p className="text-sm whitespace-pre-line" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                </Card>
              ))}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 relative" style={{ border: '1px solid var(--border-color)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 flex flex-col items-center justify-center gap-2">
                  <MapPin size={28} className="text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Cambridge, MA</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>View on Google Maps</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                    <CheckCircle size={48} className="text-teal-500" />
                    <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We'll respond within 1–2 business days.</p>
                    <Button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }} variant="secondary">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Send Us a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput label="Full Name" id="name" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                      <FormInput label="Email Address" id="email" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <FormInput label="Subject" id="subject" name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
                    <FormInput label="Message" id="message" type="textarea" name="message" placeholder="Tell us more..." value={form.message} onChange={handleChange} required />

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <Button type="submit" className="w-full sm:w-auto">
                        Send Message <Send size={16} />
                      </Button>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>We respond within 1–2 business days.</p>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments contacts */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader eyebrow="Departments" title="Specific Enquiries" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { dept: 'Admissions', email: 'admissions@ashford.edu', phone: '555-100-1001' },
              { dept: 'Financial Aid', email: 'finaid@ashford.edu', phone: '555-100-1002' },
              { dept: 'Registrar', email: 'registrar@ashford.edu', phone: '555-100-1003' },
              { dept: 'International', email: 'international@ashford.edu', phone: '555-100-1004' },
            ].map(d => (
              <Card key={d.dept}>
                <p className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{d.dept}</p>
                <a href={`mailto:${d.email}`} className="text-xs text-blue-600 dark:text-blue-400 block mb-1 hover:underline">{d.email}</a>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{d.phone}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
