'use client';

import React from 'react';

// Animated hash display
const MOCK_HASH = 'b94d27b9934d3e08a52e52d7da7dabfac484efe04294e576f9b7a945b9f2b3b0';

function MockBlockRecord() {
  return (
    <div className="glass-morphism-premium rounded-2xl p-6 border border-purple-500/20 font-mono text-xs">
      {/* Window bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-2 text-slate-500 text-[10px] tracking-widest">HEDERA CONSENSUS RECORD</span>
      </div>

      <div className="space-y-3 text-slate-400">
        <div className="flex justify-between gap-4">
          <span className="text-slate-600">topicId</span>
          <span className="text-blue-400">0.0.4823991</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-slate-600">sequenceNumber</span>
          <span className="text-purple-400">147</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-slate-600">message (SHA-256)</span>
          <span className="text-green-400 break-all leading-relaxed">{MOCK_HASH}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-slate-600">consensusTimestamp</span>
          <span className="text-pink-400">2025-11-14T09:22:31Z</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-slate-600">status</span>
          <span className="text-green-400 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
            SUCCESS
          </span>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { label: 'Experiences Anchored', val: '1,240+', color: 'text-purple-400' },
  { label: 'Verification Rate', val: '94%', color: 'text-green-400' },
  { label: 'Avg. Verify Time', val: '< 48h', color: 'text-blue-400' },
  { label: 'Blockchain Network', val: 'Hedera', color: 'text-pink-400' },
];

export default function LandingTrustSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-blue-950/10 to-slate-950 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-[0.04]" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Mock record */}
        <div className="animate-fade-in">
          <MockBlockRecord />
          {/* Hashscan link pill */}
          <div className="mt-4 flex items-center gap-3 px-4 py-3 glass-morphism rounded-xl border border-green-500/20">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8 L6 11 L13 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-slate-400 font-mono">Verifiable at hashscan.io/testnet/topic/0.0.4823991</span>
          </div>
        </div>

        {/* Right: copy */}
        <div className="animate-fade-in animation-delay-1000">
          <div className="inline-block mb-5 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
            <span className="text-sm font-accent font-semibold text-green-300 tracking-wide">Cryptographic Trust</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display leading-tight">
            Every decision leaves an{' '}
            <span className="text-gradient-animated">indelible record</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
            When an issuer approves your experience, a canonical JSON payload is hashed with SHA-256
            and submitted to the Hedera Hashgraph. The hash is public. The personal data is not.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="glass-morphism rounded-xl p-4 border border-slate-800">
                <div className={`text-2xl font-bold font-display mb-1 ${s.color}`}>{s.val}</div>
                <div className="text-xs text-slate-500 font-light">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
