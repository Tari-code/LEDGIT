'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PreRegister() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateStep = (stepNum: number) => {
    const newErrors: Record<string, string> = {};

    if (stepNum === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = 'Please enter a valid email';
      }
    } else if (stepNum === 2) {
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(2)) {
      setSubmitted(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden py-8 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display">
            <span className="text-gradient-animated">Join Us</span>
          </h1>
          <p className="text-gray-300 text-lg font-light">
            Get early access to the future
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex gap-2 mb-12 animate-fade-in animation-delay-1000">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                s <= step
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'bg-slate-700/50'
              }`}
            ></div>
          ))}
        </div>

        {/* Form Card */}
        <div className="glass-morphism-premium rounded-3xl p-8 sm:p-10 border border-purple-500/20 relative animate-fade-in animation-delay-2000">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                {/* Step 1: Personal Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3 font-accent">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-2 font-light">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3 font-accent">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-2 font-light">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3 font-accent">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 font-light">{errors.email}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 btn-glow font-accent backdrop-blur-sm relative group overflow-hidden mt-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Next Step
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </>
            ) : (
              <>
                {/* Step 2: Password Setup */}
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3 font-accent">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="At least 8 characters"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm mt-2 font-light">{errors.password}</p>
                  )}
                  <div className="mt-3 space-y-2 text-xs text-gray-400 font-light">
                    <p>✓ At least 8 characters</p>
                    <p>✓ Mix of letters and numbers</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-3 font-accent">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Re-enter your password"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 backdrop-blur-sm font-light"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm mt-2 font-light">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 border-2 border-purple-400 text-purple-300 font-bold rounded-xl hover:bg-purple-400/10 transition-all duration-300 font-accent backdrop-blur-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 btn-glow font-accent backdrop-blur-sm relative group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Create Account</span>
                      <span className="animate-bounce-soft">✨</span>
                    </span>
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-8 font-light">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Success State */}
        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
            <div className="glass-morphism-premium rounded-3xl p-12 border border-purple-500/20 text-center max-w-sm mx-4 animate-fade-in">
              <div className="text-6xl mb-4 animate-bounce-soft">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-3 font-display">Success!</h2>
              <p className="text-gray-300 mb-6 font-light">
                Welcome to the future. Your account has been created successfully.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-300">
                <span className="animate-spin">⚙️</span>
                <span className="font-light">Redirecting...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
