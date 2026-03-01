'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { verificationApi } from '../../../lib/api/verification';
import type { VerificationResponse } from '../../../types/api.types';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'sonner';

const HASHSCAN = 'https://hashscan.io/testnet/transaction/';

function VerifiedCard({ data, verifyUrl }: { data: VerificationResponse; verifyUrl: string }) {
  const [qrVisible, setQrVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(verifyUrl);
    setCopied(true);
    toast.success('Link copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Status banner */}
      <div className="glass-morphism-premium rounded-2xl p-8 border border-green-500/30 text-center">
        <div className="text-5xl mb-4 animate-bounce-soft">✅</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-display mb-2">
          Experience Verified
        </h1>
        <p className="text-green-400 text-sm font-light">
          This credential has been verified by the issuer and anchored on Hedera.
        </p>
      </div>

      {/* Details */}
      <div className="glass-morphism rounded-2xl p-7 border border-slate-800">
        <h2 className="text-lg font-bold text-white font-display mb-5">Credential Details</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Role', val: data.role },
            { label: 'Institution', val: data.institution },
            { label: 'Start Date', val: data.startDate ? new Date(data.startDate).toLocaleDateString() : '—' },
            { label: 'End Date', val: data.endDate ? new Date(data.endDate).toLocaleDateString() : 'Present' },
            { label: 'Verified By', val: data.issuerEmail },
            { label: 'Status', val: data.status },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-slate-900/60 rounded-lg">
              <span className="text-xs text-slate-600 font-mono">{item.label}</span>
              <p className="text-white text-sm font-medium mt-0.5 font-display">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hedera proof */}
      {(data.hederaTxId || data.hederaTimestamp) && (
        <div className="glass-morphism rounded-2xl p-7 border border-green-500/20">
          <h2 className="text-base font-bold text-white font-display mb-4 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <polygon points="9,1 16,5 16,13 9,17 2,13 2,5" stroke="#22c55e" strokeWidth="1.5" fill="none" />
              <path d="M6 9 L8 11 L12 7" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Hedera Record
          </h2>
          <div className="space-y-2 font-mono text-xs">
            {data.hederaTxId && (
              <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-900/60 rounded-lg flex-wrap">
                <span className="text-slate-500">Transaction ID</span>
                <span className="text-green-400 truncate max-w-xs">{data.hederaTxId}</span>
              </div>
            )}
            {data.hederaTimestamp && (
              <div className="flex items-center justify-between gap-2 p-2.5 bg-slate-900/60 rounded-lg">
                <span className="text-slate-500">Consensus Time</span>
                <span className="text-blue-400">{data.hederaTimestamp}</span>
              </div>
            )}
          </div>
          {data.hederaTxId && (
            <a
              href={`${HASHSCAN}${data.hederaTxId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              Verify on HashScan ↗
            </a>
          )}
        </div>
      )}

      {/* Share / QR */}
      <div className="glass-morphism rounded-2xl p-6 border border-purple-500/20">
        <h2 className="text-base font-bold text-white font-display mb-4">Share This Credential</h2>
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <code className="flex-1 text-xs text-slate-400 font-mono bg-slate-900/60 px-3 py-2 rounded-lg truncate border border-slate-800 min-w-0">
            {verifyUrl}
          </code>
          <button
            onClick={copyLink}
            className="px-3 py-2 text-xs glass-morphism border border-slate-700 hover:border-purple-500/40 text-slate-400 hover:text-white rounded-lg font-mono transition-all"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          <button
            onClick={() => setQrVisible(!qrVisible)}
            className="px-3 py-2 text-xs bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg font-accent hover:bg-purple-600/30 transition-colors"
          >
            {qrVisible ? 'Hide QR' : 'Show QR'}
          </button>
        </div>

        {qrVisible && (
          <div className="flex justify-center mt-4 animate-fade-in">
            <div className="p-4 bg-white rounded-xl">
              <QRCodeSVG
                value={verifyUrl}
                size={180}
                level="H"
                marginSize={1}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PendingCard() {
  return (
    <div className="glass-morphism-premium rounded-2xl p-10 text-center border border-amber-500/20 animate-fade-in-up">
      <div className="text-5xl mb-4 animate-scale-pulse">⏳</div>
      <h1 className="text-3xl font-bold text-white font-display mb-3">Pending Verification</h1>
      <p className="text-amber-400 font-light">This credential is awaiting issuer review.</p>
    </div>
  );
}

function RejectedCard({ data }: { data: VerificationResponse }) {
  return (
    <div className="glass-morphism-premium rounded-2xl p-10 text-center border border-red-500/20 animate-fade-in-up">
      <div className="text-5xl mb-4">❌</div>
      <h1 className="text-3xl font-bold text-white font-display mb-3">Not Verified</h1>
      <p className="text-red-400 font-light">This experience was rejected by the issuer.</p>
      {data.role && (
        <p className="text-slate-400 text-sm mt-3">{data.role} at {data.institution}</p>
      )}
    </div>
  );
}

export default function VerifyPage() {
  const params = useParams();
  const id = params?.id as string;
  const [data, setData] = useState<VerificationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const verifyUrl = typeof window !== 'undefined' ? `${window.location.origin}/verify/${id}` : `/verify/${id}`;

  useEffect(() => {
    if (!id) return;
    verificationApi.verify(id)
      .then(res => setData(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-[0.04]" />
      </div>

      {/* Minimal nav */}
      <nav className="border-b border-slate-800/40 glass-morphism">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold font-display text-gradient-animated">LEDGIT</Link>
          <Link href="/apply" className="text-sm text-slate-400 hover:text-white transition-colors font-accent">
            Get Verified →
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Public badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400 font-mono">
            🌐 Public verification page
          </span>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400 font-light">Loading credential…</p>
          </div>
        ) : error ? (
          <div className="glass-morphism rounded-2xl p-10 text-center border border-slate-800 animate-fade-in">
            <div className="text-4xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-white font-display mb-2">Not Found</h2>
            <p className="text-slate-400 font-light">This experience ID does not exist.</p>
          </div>
        ) : data?.status === 'VERIFIED' ? (
          <VerifiedCard data={data} verifyUrl={verifyUrl} />
        ) : data?.status === 'REJECTED' ? (
          <RejectedCard data={data} />
        ) : (
          <PendingCard />
        )}
      </div>
    </div>
  );
}
