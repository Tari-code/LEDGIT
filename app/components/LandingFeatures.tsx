'use client';

import React from 'react';

const features = [
  {
    title: 'Multi-Experience Support',
    desc: 'Submit multiple roles, jobs, and degrees. Each verified independently with its own blockchain anchor.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="#ec4899" strokeWidth="1.5" fill="none" />
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="#a855f7" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    accent: 'purple',
  },
  {
    title: 'SHA-256 Hash Anchoring',
    desc: 'Every decision is reduced to a deterministic hash and written immutably to Hedera Consensus Service.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8 L24 8 M4 14 L24 14 M4 20 L24 20 M8 4 L8 24 M14 4 L14 24 M20 4 L20 24" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
        <rect x="9" y="9" width="10" height="10" rx="1" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="#3b82f6" />
      </svg>
    ),
    accent: 'blue',
  },
  {
    title: 'AI Document OCR',
    desc: 'Upload a PDF or image. GPT-4o Vision extracts role, institution, and dates. You approve the suggestions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#ec4899" strokeWidth="1.5" fill="none" />
        <path d="M9 10 L14 8 L19 10" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 14 L19 14" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 18 L15 18" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" fill="rgba(15,23,42,1)" stroke="#ec4899" strokeWidth="1.5" />
        <path d="M18 20 L20 22 L23 18" stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'pink',
  },
  {
    title: 'Tamper-Proof Audit Trail',
    desc: 'Every state change — submission, verification, rejection — is logged with a hashed payload. Immutable.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 6 L22 6 L22 18 L14 24 L6 18 Z" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <path d="M10 13 L13 16 L18 11" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'purple',
  },
  {
    title: 'Public Verification Link',
    desc: 'Share a URL or QR code. Anyone can verify your experience without needing an account.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="8" cy="14" r="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="6" r="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="22" r="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <line x1="12" y1="12" x2="16" y2="8" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="16" y2="20" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
    accent: 'blue',
  },
  {
    title: 'Zero Password Auth',
    desc: 'Magic links only. No passwords stored. Signed JWTs with short expiries. Security by design.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="13" width="14" height="11" rx="2" stroke="#ec4899" strokeWidth="1.5" fill="none" />
        <path d="M10 13 L10 9 C10 6.8 17.8 6.8 18 9 L18 13" stroke="#ec4899" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="14" cy="18" r="2" fill="#ec4899" />
      </svg>
    ),
    accent: 'pink',
  },
];

const accentMap = {
  purple: 'border-purple-500/30 hover:border-purple-400/60 group-hover:shadow-purple-500/20',
  blue: 'border-blue-500/30 hover:border-blue-400/60 group-hover:shadow-blue-500/20',
  pink: 'border-pink-500/30 hover:border-pink-400/60 group-hover:shadow-pink-500/20',
};

export default function LandingFeatures() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-[0.06] animate-blob animation-delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-sm font-accent font-semibold text-purple-300 tracking-wide">Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 font-display">
            Built for <span className="text-gradient-animated">trust at every layer</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Every design decision prioritizes cryptographic integrity over convenience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative glass-morphism rounded-2xl p-7 transition-all duration-500 hover:shadow-xl ${accentMap[f.accent as keyof typeof accentMap]} card-hover`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 glass-morphism rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
