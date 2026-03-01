'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../hooks/useAuth';
import { useExperiences } from '../../hooks/useExperiences';
import { isAuthenticated } from '../../lib/api/auth';
import Link from 'next/link';

// ─── Schemas ─────────────────────────────────────────────────────────────────
const emailSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});

const expSchema = z.object({
  role: z.string().min(2, 'Role is required').max(120),
  institution: z.string().min(2, 'Institution is required').max(200),
  startDate: z.string().min(1, 'Start date required'),
  endDate: z.string().optional(),
  issuerEmail: z.string().email('Enter a valid issuer email'),
  documentUrl: z.string().optional(),
});

type EmailForm = z.infer<typeof emailSchema>;
type ExpForm = z.infer<typeof expSchema>;

// ─── Nav ─────────────────────────────────────────────────────────────────────
function NavBar({ onLogout }: { onLogout: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 glass-morphism">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold font-display text-gradient-animated">LEDGIT</Link>
        <div className="flex items-center gap-4">
          <Link href="/experiences" className="text-sm text-slate-400 hover:text-white transition-colors font-accent">
            My Records
          </Link>
          <button
            onClick={onLogout}
            className="text-sm text-slate-500 hover:text-red-400 transition-colors font-accent"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Step 1: Email form ──────────────────────────────────────────────────────
function EmailStep({ onSent }: { onSent: (email: string) => void }) {
  const { requestLink, loading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    const ok = await requestLink(data.email);
    if (ok) onSent(data.email);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300 font-accent">No password required</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white font-display mb-3">
          Sign in to <span className="text-gradient-animated">LEDGIT</span>
        </h1>
        <p className="text-slate-400 font-light">We'll send a magic link to your inbox.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-light text-lg"
            autoFocus
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-400 font-light">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed font-accent text-lg btn-glow"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending…
            </span>
          ) : 'Send Magic Link →'}
        </button>
      </form>
    </div>
  );
}

// ─── Step 2: Check email ──────────────────────────────────────────────────────
function CheckEmailStep({ email }: { email: string }) {
  return (
    <div className="text-center animate-fade-in-up">
      <div className="text-7xl mb-6 animate-bounce-soft">📬</div>
      <h2 className="text-3xl font-bold text-white font-display mb-3">Check your inbox</h2>
      <p className="text-slate-400 mb-2 font-light">
        We sent a magic link to
      </p>
      <p className="text-purple-300 font-semibold text-lg mb-8">{email}</p>
      <p className="text-sm text-slate-500 font-light">
        Click the link to sign in. It expires in 15 minutes.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-purple-500 animate-scale-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
    </div>
  );
}

// ─── Step 3: Experience form ──────────────────────────────────────────────────
function ExperienceForm() {
  const { create, submitting, runOcr } = useExperiences();
  const [ocrLoading, setOcrLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Record<string, string> | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ExpForm>({ resolver: zodResolver(expSchema) });

  const handleApplySuggestion = (key: keyof ExpForm, val: string) => {
    setValue(key, val);
    setSuggestions(prev => {
      if (!prev) return prev;
      const next = { ...prev };
      delete next[key];
      return Object.keys(next).length ? next : null;
    });
  };

  const handleDocUrl = async (url: string) => {
    setValue('documentUrl', url);
    setOcrLoading(true);
    const result = await runOcr(url);
    setOcrLoading(false);
    if (result?.suggestions && Object.keys(result.suggestions).length) {
      setSuggestions(result.suggestions as Record<string, string>);
    }
  };

  const onSubmit = async (data: ExpForm) => {
    await create(data);
  };

  const fields: { key: keyof ExpForm; label: string; type?: string; placeholder: string }[] = [
    { key: 'role', label: 'Job Title / Role', placeholder: 'Software Engineer' },
    { key: 'institution', label: 'Company / Institution', placeholder: 'Acme Corp' },
    { key: 'startDate', label: 'Start Date', type: 'date', placeholder: '' },
    { key: 'endDate', label: 'End Date (optional)', type: 'date', placeholder: '' },
    { key: 'issuerEmail', label: "Issuer's Email", type: 'email', placeholder: 'hr@acmecorp.com' },
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-2">
          Submit an <span className="text-gradient-animated">Experience</span>
        </h2>
        <p className="text-slate-400 font-light text-sm">
          Your issuer will receive a secure 72-hour verification link.
        </p>
      </div>

      {/* AI suggestions banner */}
      {ocrLoading && (
        <div className="mb-5 p-3 glass-morphism border border-purple-500/30 rounded-xl flex items-center gap-3 animate-fade-in">
          <span className="w-4 h-4 border-2 border-purple-400/40 border-t-purple-400 rounded-full animate-spin flex-shrink-0" />
          <span className="text-sm text-purple-300 font-light">AI is reading your document…</span>
        </div>
      )}
      {suggestions && Object.keys(suggestions).length > 0 && (
        <div className="mb-5 p-4 glass-morphism border border-blue-500/30 rounded-xl animate-fade-in">
          <p className="text-xs text-blue-300 font-semibold mb-3 font-accent tracking-wide">✨ AI SUGGESTIONS</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(suggestions).map(([k, v]) => (
              <button
                key={k}
                type="button"
                onClick={() => handleApplySuggestion(k as keyof ExpForm, v)}
                className="px-3 py-1.5 text-xs glass-morphism rounded-lg border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-white transition-all duration-200 font-mono"
              >
                {k}: {v}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map(f => (
          <div key={f.key}>
            <label className="block text-sm font-medium text-slate-300 mb-1.5 font-accent">{f.label}</label>
            <div className="relative">
              <input
                {...register(f.key)}
                type={f.type || 'text'}
                placeholder={f.placeholder}
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-light"
              />
              {suggestions?.[f.key] && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">AI</span>
                </div>
              )}
            </div>
            {errors[f.key] && (
              <p className="mt-1 text-sm text-red-400 font-light">{errors[f.key]?.message}</p>
            )}
          </div>
        ))}

        {/* Doc URL */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5 font-accent">Document URL <span className="text-slate-600">(optional)</span></label>
          <input
            type="url"
            placeholder="https://your-storage.supabase.co/..."
            onChange={(e) => {
              const v = e.target.value;
              setValue('documentUrl', v);
              if (v.startsWith('http')) handleDocUrl(v);
            }}
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 font-light"
          />
          <p className="mt-1 text-xs text-slate-600">Paste a Supabase document URL. AI will extract fields automatically.</p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed font-accent text-lg btn-glow mt-2"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Submitting…
            </span>
          ) : 'Submit for Verification →'}
        </button>
      </form>

      {/* Link to all experiences */}
      <p className="text-center mt-6 text-sm text-slate-600">
        <Link href="/experiences" className="text-purple-400 hover:text-purple-300 transition-colors">
          View all your experiences →
        </Link>
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ApplyPage() {
  const { logout } = useAuth();
  const [authed, setAuthed] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sentTo, setSentTo] = useState('');

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  const handleEmailSent = (email: string) => {
    setSentTo(email);
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* BG blobs */}
      <div className="fixed -top-40 -right-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-[0.06] animate-blob pointer-events-none" />
      <div className="fixed -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-[0.05] animate-blob animation-delay-2000 pointer-events-none" />

      {authed && <NavBar onLogout={logout} />}

      <div className={`min-h-screen flex items-center justify-center px-4 ${authed ? 'pt-14' : ''}`}>
        <div className="w-full max-w-md">
          <div className="glass-morphism-premium rounded-3xl p-8 sm:p-10 border border-purple-500/20">
            {authed ? (
              <ExperienceForm />
            ) : emailSent ? (
              <CheckEmailStep email={sentTo} />
            ) : (
              <EmailStep onSent={handleEmailSent} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
