import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 to-black border-t border-slate-800/60 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-[0.03] animate-blob pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 font-display">
              <span className="text-gradient-animated">LEDGIT</span>
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-light max-w-xs">
              Tamper-proof credential anchoring on Hedera Hashgraph. Your experience, provably real.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-mono">Testnet — Phase 1</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-5 font-display">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Submit Experience', href: '/apply' },
                { label: 'My Records', href: '/experiences' },
                { label: 'How It Works', href: '/#how' },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-slate-500 hover:text-purple-400 transition-colors text-sm font-light relative group">
                    {l.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="font-bold text-white mb-5 font-display">Technology</h4>
            <ul className="space-y-3">
              {['Hedera HCS', 'SHA-256 Hashing', 'GPT-4o Vision OCR', 'Supabase Storage'].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-light">
                  <span className="w-1 h-1 bg-slate-600 rounded-full" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-mono">
            © 2026 LEDGIT. Phase 1 — Hedera Testnet.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((l, i) => (
              <a key={i} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-light">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
