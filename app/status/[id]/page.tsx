'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useExperiences } from '../../../hooks/useExperiences';
import { isAuthenticated } from '../../../lib/api/auth';
import type { Experience, ExperienceStatus } from '../../../types/api.types';
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'sonner';

const HASHSCAN = 'https://hashscan.io/testnet/transaction/';

type StepStatus = 'done' | 'active' | 'pending';

function TimelineStep({
  title, sub, status, last,
}: {
  title: string; sub: string; status: StepStatus; last?: boolean;
}) {
  const dotColors = {
    done: 'bg-green-400 border-green-400',
    active: 'bg-amber-400 border-amber-400 animate-pulse',
    pending: 'bg-slate-700 border-slate-600',
  };
  const lineColor = status === 'done' ? 'bg-green-400/40' : 'bg-slate-700';

  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 ${dotColors[status]}`} />
        {!last && <div className={`w-px flex-1 mt-1 min-h-[32px] ${lineColor}`} />}
      </div>
      <div className={`pb-6 ${last ? '' : ''}`}>
        <p className={`font-semibold text-sm font-display ${status === 'pending' ? 'text-slate-600' : 'text-white'}`}>{title}</p>
        <p className={`text-xs font-light mt-0.5 ${status === 'pending' ? 'text-slate-700' : 'text-slate-400'}`}>{sub}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ExperienceStatus }) {
  const map = {
    PENDING: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    VERIFIED: 'bg-green-500/10 border-green-500/30 text-green-400',
    REJECTED: 'bg-red-500/10 border-red-500/30 text-red-400',
  };
  const icons = { PENDING: '⏳', VERIFIED: '✅', REJECTED: '❌' };
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold font-accent ${map[status]}`}>
      {icons[status]} {status}
    </span>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Copied!');
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-morphism border border-slate-700 hover:border-purple-500/40 text-slate-400 hover:text-white rounded-lg text-xs font-mono transition-all duration-200"
    >
      {copied ? '✓ Copied' : `Copy ${label}`}
    </button>
  );
}

export default function StatusPage() {
  const params = useParams();
  const router = useRouter();
  const { logout } = useAuth();
  const { fetchOne, loading } = useExperiences();
  const [exp, setExp] = useState<Experience | null>(null);
  const id = params?.id as string;

  useEffect(() => {
    if (!isAuthenticated()) { router.push('/apply'); return; }
    if (id) fetchOne(id).then(e => e && setExp(e));
  }, [id]);

  const getSteps = (status: ExperienceStatus): { title: string; sub: string; status: StepStatus }[] => [
    { title: 'Submitted', sub: exp ? new Date(exp.createdAt).toLocaleString() : '', status: 'done' },
    {
      title: 'Issuer Reviewing',
      sub: `Verification email sent to ${exp?.issuerEmail}`,
      status: status === 'PENDING' ? 'active' : 'done',
    },
    {
      title: status === 'REJECTED' ? 'Rejected by Issuer' : 'Verified',
      sub: status === 'VERIFIED'
        ? 'Credential anchored on Hedera blockchain'
        : status === 'REJECTED'
        ? exp?.issuerComment ?? 'No comment provided'
        : 'Awaiting issuer decision',
      status: status === 'VERIFIED' ? 'done' : status === 'REJECTED' ? 'done' : 'pending',
    },
    ...(status === 'VERIFIED' ? [{
      title: 'Blockchain Anchored',
      sub: `Hedera Tx: ${exp?.hederaTxId?.slice(0, 30)}…`,
      status: 'done' as StepStatus,
    }] : []),
  ];

  const verifyUrl = typeof window !== 'undefined' ? `${window.location.origin}/verify/${id}` : `/verify/${id}`;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed -top-40 -right-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] opacity-[0.05] animate-blob pointer-events-none" />

      {/* Nav */}
      <nav className="border-b border-slate-800/60 glass-morphism sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold font-display text-gradient-animated">LEDGIT</Link>
          <div className="flex items-center gap-4">
            <Link href="/experiences" className="text-sm text-slate-400 hover:text-white transition-colors font-accent">← My Records</Link>
            <button onClick={logout} className="text-sm text-slate-500 hover:text-red-400 transition-colors font-accent">Sign out</button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {loading && !exp ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 glass-morphism rounded-2xl animate-shimmer border border-slate-800" />
            ))}
          </div>
        ) : !exp ? (
          <div className="text-center py-20 text-slate-500">Experience not found.</div>
        ) : (
          <div className="space-y-6 animate-fade-in-up">
            {/* Header card */}
            <div className="glass-morphism-premium rounded-2xl p-7 border border-purple-500/20">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">{exp.role}</h1>
                  <p className="text-slate-400 mt-0.5 font-light">{exp.institution}</p>
                </div>
                <StatusBadge status={exp.status} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-slate-600 text-xs">Start</span>
                  <p className="text-slate-300">{new Date(exp.startDate).toLocaleDateString()}</p>
                </div>
                {exp.endDate && (
                  <div>
                    <span className="text-slate-600 text-xs">End</span>
                    <p className="text-slate-300">{new Date(exp.endDate).toLocaleDateString()}</p>
                  </div>
                )}
                <div>
                  <span className="text-slate-600 text-xs">Issuer</span>
                  <p className="text-slate-300 truncate">{exp.issuerEmail}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-morphism rounded-2xl p-7 border border-slate-800">
              <h2 className="text-lg font-bold text-white font-display mb-6">Verification Timeline</h2>
              <div>
                {getSteps(exp.status).map((s, i, arr) => (
                  <TimelineStep key={i} {...s} last={i === arr.length - 1} />
                ))}
              </div>
            </div>

            {/* Blockchain proof — only if VERIFIED */}
            {exp.status === 'VERIFIED' && (
              <div className="glass-morphism rounded-2xl p-7 border border-green-500/20 animate-fade-in">
                <h2 className="text-lg font-bold text-white font-display mb-5 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                    <path d="M7 10 L9 12 L13 8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Blockchain Proof
                </h2>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-500">Tx ID</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400 text-xs truncate max-w-[200px]">{exp.hederaTxId}</span>
                      {exp.hederaTxId && <CopyButton text={exp.hederaTxId} label="Tx" />}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-500">Timestamp</span>
                    <span className="text-blue-400 text-xs">{exp.hederaTimestamp}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-900/60 rounded-lg">
                    <span className="text-slate-500">Hash</span>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 text-xs truncate max-w-[180px]">{exp.verificationHash}</span>
                      {exp.verificationHash && <CopyButton text={exp.verificationHash} label="Hash" />}
                    </div>
                  </div>
                </div>
                {exp.hederaTxId && (
                  <a
                    href={`${HASHSCAN}${exp.hederaTxId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    View on HashScan ↗
                  </a>
                )}
              </div>
            )}

            {/* Share public link */}
            {exp.status === 'VERIFIED' && (
              <div className="glass-morphism rounded-2xl p-6 border border-blue-500/20 animate-fade-in">
                <h2 className="text-base font-bold text-white font-display mb-3">Share Verification Link</h2>
                <div className="flex flex-wrap gap-2 items-center">
                  <code className="flex-1 text-xs text-slate-400 font-mono bg-slate-900/60 px-3 py-2 rounded-lg truncate border border-slate-800">
                    {verifyUrl}
                  </code>
                  <CopyButton text={verifyUrl} label="Link" />
                  <Link
                    href={`/verify/${id}`}
                    className="px-3 py-2 text-xs bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors font-accent"
                    target="_blank"
                  >
                    Open ↗
                  </Link>
                </div>
              </div>
            )}

            {/* Rejected comment */}
            {exp.status === 'REJECTED' && exp.issuerComment && (
              <div className="glass-morphism rounded-2xl p-6 border border-red-500/20 animate-fade-in">
                <h2 className="text-base font-bold text-white font-display mb-2">Issuer Comment</h2>
                <p className="text-red-300 text-sm font-light">{exp.issuerComment}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <Link href="/apply" className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-xl font-accent hover:scale-105 transition-all">
                + Submit Another
              </Link>
              <Link href="/experiences" className="px-5 py-2.5 glass-morphism border border-slate-700 text-slate-300 text-sm font-semibold rounded-xl font-accent hover:border-purple-500/40 transition-all">
                All Records
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
