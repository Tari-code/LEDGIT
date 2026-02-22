'use client';

import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Animated background decoration */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>

        <div className="glass-morphism-premium rounded-3xl p-10 sm:p-16 relative border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Icon with animation */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="inline-block text-6xl animate-bounce-soft">✨</div>
            </div>

            {/* Title with premium font */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4 font-display animate-fade-in animation-delay-1000">
              Stay <span className="text-gradient-animated">Updated</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-center mb-10 text-lg leading-relaxed animate-fade-in animation-delay-2000 font-light">
              Be the first to know when we launch. Sign up for <span className="text-purple-300 font-semibold">exclusive updates</span> and early access to our platform.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in animation-delay-3000">
              <div className="relative group">
                {/* Input background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  className="relative w-full px-6 py-4 bg-slate-800/50 border-2 border-blue-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  required
                />

                {/* Animated border */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-500 rounded-xl opacity-0 -z-10 ${focused ? 'opacity-100' : 'opacity-0'} blur transition-opacity duration-300`}></div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-900 via-slate-500 to-blue-900 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 btn-glow font-accent backdrop-blur-sm relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <span className="animate-pulse">✓</span>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <span>Get Notified</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Success Message with animation */}
            {submitted && (
              <div className="mt-6 p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-xl text-green-300 text-center text-sm font-accent animate-fade-in">
                <span className="flex items-center justify-center gap-2">
                  <span className="text-lg">🎉</span>
                  Thanks for subscribing! Check your email for confirmation.
                </span>
              </div>
            )}

            {/* Privacy Notice */}
            <p className="text-xs text-gray-400 text-center mt-8 opacity-70 hover:opacity-100 transition-opacity">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
