'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── SVG: Hedera / Chain Icon ─────────────────────────────────────────────
function ChainSVG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
      <circle cx="24" cy="24" r="23" stroke="url(#chainGrad)" strokeWidth="1.5" />
      <path d="M14 24 L24 14 L34 24 L24 34 Z" stroke="url(#chainGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="4" fill="url(#chainGrad)" />
      <defs>
        <linearGradient id="chainGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── SVG: Fingerprint / Verified ─────────────────────────────────────────
function VerifiedSVG({ size = 320 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="160" cy="160" r="155" stroke="url(#vGrad1)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
      {/* Middle ring */}
      <circle cx="160" cy="160" r="120" stroke="url(#vGrad1)" strokeWidth="1" opacity="0.3" />
      {/* Inner ring */}
      <circle cx="160" cy="160" r="85" stroke="url(#vGrad1)" strokeWidth="1.5" opacity="0.5" />

      {/* Center diamond */}
      <path d="M160 100 L200 160 L160 220 L120 160 Z" stroke="url(#vGrad2)" strokeWidth="2" fill="none" />
      <path d="M160 118 L185 160 L160 202 L135 160 Z" fill="url(#vGrad2)" opacity="0.15" />

      {/* Checkmark */}
      <path d="M140 162 L154 176 L182 148" stroke="url(#vGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Corner dots */}
      <circle cx="160" cy="45" r="4" fill="#a855f7" opacity="0.8" />
      <circle cx="275" cy="160" r="4" fill="#3b82f6" opacity="0.8" />
      <circle cx="160" cy="275" r="4" fill="#ec4899" opacity="0.8" />
      <circle cx="45" cy="160" r="4" fill="#a855f7" opacity="0.8" />

      {/* Corner connectors */}
      <line x1="160" y1="45" x2="160" y2="75" stroke="#a855f7" strokeWidth="1" opacity="0.5" />
      <line x1="275" y1="160" x2="245" y2="160" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      <line x1="160" y1="275" x2="160" y2="245" stroke="#ec4899" strokeWidth="1" opacity="0.5" />
      <line x1="45" y1="160" x2="75" y2="160" stroke="#a855f7" strokeWidth="1" opacity="0.5" />

      <defs>
        <linearGradient id="vGrad1" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="vGrad2" x1="120" y1="100" x2="200" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── SVG: Grid / Background decoration ───────────────────────────────────
function GridBG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// ─── Animated hash strings (decorative) ──────────────────────────────────
const HASHES = [
  '0x4f3d...a8c2',
  '0x9b1e...f762',
  '0x2c8a...d541',
  '0x7f4b...3e9d',
];

export default function LandingHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden"
      style={{ '--mx': '0px', '--my': '0px' } as React.CSSProperties}
    >
      {/* Grid background */}
      <GridBG />

      {/* Blob ambience */}
      <div className="absolute -top-60 -right-60 w-[700px] h-[700px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08] animate-blob" />
      <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.07] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.06] animate-blob animation-delay-4000" />

      {/* Hash rain — decorative side columns */}
      <div className="absolute left-4 top-0 h-full flex flex-col justify-around opacity-20 hidden xl:flex pointer-events-none select-none">
        {HASHES.map((h, i) => (
          <span key={i} className="text-[10px] text-purple-400 font-mono tracking-widest rotate-90" style={{ animationDelay: `${i * 0.5}s` }}>
            {h}
          </span>
        ))}
      </div>
      <div className="absolute right-4 top-0 h-full flex flex-col justify-around opacity-20 hidden xl:flex pointer-events-none select-none">
        {HASHES.slice().reverse().map((h, i) => (
          <span key={i} className="text-[10px] text-blue-400 font-mono tracking-widest -rotate-90" style={{ animationDelay: `${i * 0.5}s` }}>
            {h}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <ChainSVG />
            <span className="text-sm font-medium text-slate-300 font-accent">Powered by Hedera Consensus</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight font-display mb-6 animate-fade-in animation-delay-1000">
            Your experience.
            <br />
            <span className="text-gradient-animated">Provably real.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl animate-fade-in animation-delay-2000 font-light">
            LEDGIT anchors your work history on the Hedera blockchain.
            Every credential is independently verified, cryptographically hashed,
            and publicly auditable — forever.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-3000">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 btn-glow font-accent"
            >
              Submit Your Experience
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-purple-500/60 hover:text-white hover:bg-purple-500/10 transition-all duration-300 font-accent glass-morphism"
            >
              View My Records
            </Link>
          </div>

          {/* Trust micro-line */}
          <p className="text-xs text-slate-600 mt-8 font-mono animate-fade-in animation-delay-4000">
            No account passwords. No central database. Just math.
          </p>
        </div>

        {/* Right: animated SVG graphic */}
        <div className="flex items-center justify-center animate-fade-in animation-delay-2000">
          <div
            className="relative"
            style={{ transform: 'translate(var(--mx, 0px), var(--my, 0px))', transition: 'transform 0.1s ease-out' }}
          >
            {/* Glow behind SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 animate-scale-pulse" />
            </div>
            <div className="animate-spin-slow">
              <VerifiedSVG size={340} />
            </div>
            {/* Center static element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 glass-morphism-premium rounded-2xl flex items-center justify-center border border-purple-500/40">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 4 L28 12 L28 24 L18 32 L8 24 L8 12 Z" stroke="url(#cGrad)" strokeWidth="1.5" fill="none" />
                  <path d="M12 18 L16 22 L24 14" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="cGrad" x1="0" y1="0" x2="36" y2="36">
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce-soft">
        <span className="text-xs text-slate-500 font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </div>
  );
}
