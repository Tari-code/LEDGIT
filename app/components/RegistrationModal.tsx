'use client';

import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset and close after 2 seconds
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep(1);
      setEmail('');
      setFirstName('');
      setLastName('');
      setSubmitSuccess(false);
      setErrors({});
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 max-w-md w-full border border-blue-500/30 glass-morphism-premium card-3d animate-flip-in shadow-2xl shadow-blue-500/20"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitSuccess ? (
          /* Success State */
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-scale-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 font-display">Welcome Aboard! 🎉</h2>
              <p className="text-gray-300">You've been added to our waitlist. Check your email for updates!</p>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-2 font-display">
                {step === 1 ? 'Join the Waitlist' : 'Complete Your Profile'}
              </h2>
              <p className="text-gray-400 text-sm">
                {step === 1 ? 'Get early access when we launch' : 'Tell us a bit about yourself'}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex gap-2">
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-700'}`}></div>
              <div className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-700'}`}></div>
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({});
                    }}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 font-light ${
                      errors.email ? 'border-red-500/50' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 btn-glow btn-3d"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Name */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) setErrors({});
                    }}
                    placeholder="John"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 font-light ${
                      errors.firstName ? 'border-red-500/50' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (errors.lastName) setErrors({});
                    }}
                    placeholder="Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 font-light ${
                      errors.lastName ? 'border-red-500/50' : 'border-blue-500/20'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 border-2 border-blue-500/30 text-blue-300 font-bold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 btn-glow btn-3d disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. We'll only contact you about launch updates.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
