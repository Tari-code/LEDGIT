'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingCTA() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 to-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Big glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-[120px] opacity-[0.08]" />
      </div>

      {/* Decorative SVG circle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none">
          <circle cx="450" cy="450" r="440" stroke="#a855f7" strokeWidth="1" strokeDasharray="6 12" />
          <circle cx="450" cy="450" r="350" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="450" cy="450" r="250" stroke="#ec4899" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center animate-fade-in">
        <div className="glass-morphism-premium rounded-3xl p-12 border border-purple-500/20">
          <div className="text-5xl mb-6 animate-bounce-soft">🔐</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 font-display">
            Start verifying your{' '}
            <span className="text-gradient-animated">career today</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
            It takes less than 5 minutes. No credit card. No password.
            Just your email and the truth of what you've accomplished.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 btn-glow font-accent text-lg"
            >
              Get Started Free
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <p className="text-xs text-slate-600 mt-6 font-mono">
            Testnet mode — free to use during Phase 1
          </p>
        </div>
      </div>
    </section>
  );
}
