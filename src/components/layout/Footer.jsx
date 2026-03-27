import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Twitter, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Departments', path: '/departments' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Events', path: '/events' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const socials = [
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Ashford</p>
                <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>University</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              Shaping tomorrow's leaders through excellence in education, research, and innovation since 1892.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--text-primary)' }}>Academics</h4>
            <ul className="space-y-2.5">
              {['Undergraduate Programs', 'Graduate Programs', 'Online Courses', 'Research Centers', 'Academic Calendar', 'Library', 'Financial Aid', 'Scholarships'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  100 University Avenue,<br />Cambridge, MA 02139, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <a href="tel:+15550001234" className="text-sm transition-colors hover:text-blue-600" style={{ color: 'var(--text-secondary)' }}>
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <a href="mailto:info@ashford.edu" className="text-sm transition-colors hover:text-blue-600" style={{ color: 'var(--text-secondary)' }}>
                  info@ashford.edu
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Office Hours</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
        >
          <p>© {new Date().getFullYear()} Ashford University. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Sitemap'].map(item => (
              <a key={item} href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
