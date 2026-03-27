import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Eye, EyeOff, ArrowRight } from 'lucide-react';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('Please enter your credentials.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError('Invalid credentials. This is a demo UI only.');
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-100 pointer-events-none" />
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div
          className="rounded-3xl p-8 md:p-10 shadow-xl"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <GraduationCap size={22} className="text-white" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold leading-none" style={{ color: 'var(--text-primary)' }}>Ashford</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>Student Portal</p>
            </div>
          </div>

          <h1 className="font-display text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Welcome back</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>Sign in to access your courses, grades, and campus services.</p>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Student ID or Email"
              id="username"
              name="username"
              placeholder="s123456 or you@ashford.edu"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />

            <div className="relative">
              <FormInput
                label="Password"
                id="password"
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 bottom-3 p-1 rounded transition-colors hover:text-blue-600"
                style={{ color: 'var(--text-secondary)' }}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span style={{ color: 'var(--text-secondary)' }}>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full justify-center" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <>Sign In <ArrowRight size={16} /></>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid var(--border-color)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              New student?{' '}
              <Link to="/admissions" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Start your application
              </Link>
            </p>
          </div>

          {/* Quick access */}
          <div className="mt-6">
            <p className="text-xs text-center mb-3" style={{ color: 'var(--text-secondary)' }}>Quick Access</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Student', id: 'STU' },
                { label: 'Faculty', id: 'FAC' },
                { label: 'Staff', id: 'STA' },
              ].map(role => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, username: role.id + '001' }))}
                  className="py-2 px-3 rounded-xl text-xs font-medium border transition-all hover:border-blue-400 hover:text-blue-600"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Ashford University · <a href="#" className="hover:underline">Privacy Policy</a> · <a href="#" className="hover:underline">Help</a>
        </p>
      </div>
    </div>
  );
}
