'use client';

import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Sign in via Magic Link',
    desc: 'No passwords. Enter your email and receive a secure one-time link. Zero friction.',
    svg: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="8" y="14" width="36" height="26" rx="4" stroke="url(#s1g)" strokeWidth="1.5" fill="none" />
        <path d="M8 22 L26 31 L44 22" stroke="url(#s1g)" strokeWidth="1.5" />
        <circle cx="26" cy="10" r="4" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <line x1="26" y1="14" x2="26" y2="18" stroke="#a855f7" strokeWidth="1.5" />
        <defs>
          <linearGradient id="s1g" x1="8" y1="14" x2="44" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" /><stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Submit an Experience',
    desc: 'Fill in your role, institution, and dates. Upload a document. AI extracts fields automatically.',
    svg: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="12" y="8" width="28" height="36" rx="3" stroke="url(#s2g)" strokeWidth="1.5" fill="none" />
        <line x1="18" y1="18" x2="34" y2="18" stroke="url(#s2g)" strokeWidth="1.5" />
        <line x1="18" y1="24" x2="34" y2="24" stroke="url(#s2g)" strokeWidth="1.5" />
        <line x1="18" y1="30" x2="28" y2="30" stroke="url(#s2g)" strokeWidth="1.5" />
        <path d="M32 36 L38 30 L44 36" stroke="#ec4899" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <defs>
          <linearGradient id="s2g" x1="12" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" /><stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Issuer Verifies',
    desc: 'Your issuer receives a secure 72-hour link. They approve or reject — independently per experience.',
    svg: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="22" r="12" stroke="url(#s3g)" strokeWidth="1.5" fill="none" />
        <path d="M20 22 L24 26 L32 18" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 36 C16 30 36 30 36 36" stroke="url(#s3g)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="s3g" x1="14" y1="10" x2="38" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" /><stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Anchored on Hedera',
    desc: 'A SHA-256 hash of the decision is published to Hedera Consensus. Your credential is now public proof.',
    svg: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <polygon points="26,8 44,18 44,34 26,44 8,34 8,18" stroke="url(#s4g)" strokeWidth="1.5" fill="none" />
        <polygon points="26,16 36,22 36,30 26,36 16,30 16,22" stroke="url(#s4g)" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="26" cy="26" r="4" fill="url(#s4g)" />
        <defs>
          <linearGradient id="s4g" x1="8" y1="8" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" /><stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function LandingHowItWorks() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-[0.05] animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-[0.05] animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-sm font-accent font-semibold text-blue-300 tracking-wide">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 font-display">
            Four steps to an <span className="text-gradient-animated">unforgeable</span> record
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            No third-party trust. No central authority. The blockchain does the work.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 hidden lg:block pointer-events-none" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative glass-morphism rounded-2xl p-7 hover:border-purple-400/50 transition-all duration-500 card-hover"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Number badge */}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white font-mono">{step.num}</span>
              </div>

              {/* Icon */}
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {step.svg}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-purple-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
