'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';

function VerifyContent() {
  const params = useSearchParams();
  const { verifyLink } = useAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;
    const token = params.get('token');
    if (!token) { setStatus('error'); return; }
    verifyLink(token).then((ok) => setStatus(ok ? 'success' : 'error'));
  }, [params, verifyLink]);

  return (
    <div className="text-center animate-fade-in-up">
      {status === 'loading' && (
        <>
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white font-display mb-2">Verifying your link…</h2>
          <p className="text-slate-400 font-light">Just a moment.</p>
        </>
      )}
      {status === 'success' && (
        <>
          <div className="text-6xl mb-6 animate-bounce-soft">✅</div>
          <h2 className="text-2xl font-bold text-white font-display mb-2">Signed in!</h2>
          <p className="text-slate-400 font-light">Redirecting you now…</p>
        </>
      )}
      {status === 'error' && (
        <>
          <div className="text-6xl mb-6">❌</div>
          <h2 className="text-2xl font-bold text-white font-display mb-2">Invalid or expired link</h2>
          <p className="text-slate-400 font-light mb-6">Please request a new magic link.</p>
          <a href="/apply" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl font-accent transition-all hover:scale-105 inline-block">
            Back to Sign In
          </a>
        </>
      )}
    </div>
  );
}

export default function AuthVerifyPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <Suspense fallback={
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-6" />
          <p className="text-slate-400">Loading…</p>
        </div>
      }>
        <VerifyContent />
      </Suspense>
    </div>
  );
}
