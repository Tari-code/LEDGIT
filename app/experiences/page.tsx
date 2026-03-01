'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useExperiences } from '../../hooks/useExperiences';
import { isAuthenticated } from '../../lib/api/auth';
import { useRouter } from 'next/navigation';
import type { ExperienceStatus } from '../../types/api.types';
import { useAuth } from '../../hooks/useAuth';

const statusConfig: Record<ExperienceStatus, { label: string; color: string; dot: string; bg: string }> = {
  PENDING: { label: 'Pending', color: 'text-amber-400', dot: 'bg-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
  VERIFIED: { label: 'Verified', color: 'text-green-400', dot: 'bg-green-400', bg: 'bg-green-500/10 border-green-500/30' },
  REJECTED: { label: 'Rejected', color: 'text-red-400', dot: 'bg-red-400', bg: 'bg-red-500/10 border-red-500/30' },
};

function SkeletonCard() {
  return (
    <div className="glass-morphism rounded-2xl p-6 border border-slate-800 animate-shimmer">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2 flex-1">
          <div className="h-5 bg-slate-800 rounded-lg w-2/3" />
          <div className="h-4 bg-slate-800 rounded-lg w-1/2" />
        </div>
        <div className="h-6 w-20 bg-slate-800 rounded-full" />
      </div>
      <div className="h-3 bg-slate-800 rounded w-1/3" />
    </div>
  );
}

function ExperienceCard({ exp }: { exp: any }) {
  const cfg = statusConfig[exp.status as ExperienceStatus];
  return (
    <Link href={`/status/${exp.id}`}>
      <div className="group glass-morphism rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 card-hover cursor-pointer">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-white font-semibold font-display text-lg leading-tight truncate group-hover:text-purple-200 transition-colors">
              {exp.role}
            </h3>
            <p className="text-slate-400 text-sm mt-0.5 truncate font-light">{exp.institution}</p>
          </div>
          <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color} font-accent`}>
            <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${exp.status === 'PENDING' ? 'animate-pulse' : ''}`} />
            {cfg.label}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-600 font-mono">
            {new Date(exp.startDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
            {exp.endDate ? ` – ${new Date(exp.endDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}` : ' – Present'}
          </p>
          <span className="text-xs text-slate-600 group-hover:text-purple-400 transition-colors">View →</span>
        </div>
      </div>
    </Link>
  );
}

export default function ExperiencesPage() {
  const router = useRouter();
  const { logout } = useAuth();
  const { experiences, loading, fetchList } = useExperiences();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (!isAuthenticated()) { router.push('/apply'); return; }
    fetchList().then(data => { if (data) setUserEmail(data.email); });
  }, []);

  const counts = {
    all: experiences.length,
    pending: experiences.filter(e => e.status === 'PENDING').length,
    verified: experiences.filter(e => e.status === 'VERIFIED').length,
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed -top-40 -right-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-[0.05] animate-blob pointer-events-none" />

      {/* Nav */}
      <nav className="border-b border-slate-800/60 glass-morphism sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold font-display text-gradient-animated">LEDGIT</Link>
          <div className="flex items-center gap-4">
            {userEmail && <span className="text-xs text-slate-500 hidden sm:block font-mono">{userEmail}</span>}
            <Link href="/apply" className="px-4 py-1.5 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-accent hover:bg-purple-600/30 transition-colors">
              + New
            </Link>
            <button onClick={logout} className="text-sm text-slate-500 hover:text-red-400 transition-colors font-accent">Sign out</button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display mb-1">
            My Experiences
          </h1>
          <p className="text-slate-400 font-light text-sm">
            Each one independently verified and blockchain-anchored.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in animation-delay-1000">
          {[
            { label: 'Total', val: counts.all, color: 'text-white' },
            { label: 'Pending', val: counts.pending, color: 'text-amber-400' },
            { label: 'Verified', val: counts.verified, color: 'text-green-400' },
          ].map((s, i) => (
            <div key={i} className="glass-morphism rounded-xl p-4 text-center border border-slate-800">
              <div className={`text-2xl font-bold font-display ${s.color}`}>{s.val}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4 animate-fade-in animation-delay-2000">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          ) : experiences.length === 0 ? (
            <div className="text-center py-20 glass-morphism rounded-2xl border border-slate-800">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white font-display mb-2">No experiences yet</h3>
              <p className="text-slate-400 font-light mb-6 text-sm">Submit your first experience for verification.</p>
              <Link href="/apply" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl font-accent hover:scale-105 transition-all inline-block">
                Submit Experience →
              </Link>
            </div>
          ) : (
            experiences.map(exp => <ExperienceCard key={exp.id} exp={exp} />)
          )}
        </div>
      </div>
    </div>
  );
}
