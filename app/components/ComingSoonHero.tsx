'use client';

import React, { useState } from 'react';
import RegistrationModal from './RegistrationModal';

export default function ComingSoonHero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Additional gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full hover:border-blue-500/60 transition-all duration-500 group cursor-pointer overflow-hidden glass-morphism-premium animate-fade-in">
          {/* Pulsing indicator dot with glow */}
          <span className="inline-block w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></span>

          {/* Text with gradient and neon glow on hover */}
          <span className="relative text-sm font-medium text-slate-300 font-accent">
            <span className="z-10">Coming Soon</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0  transition-opacity duration-300"></span>
          </span>

        
        </div>

        {/* Main Heading with premium font and animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-display animate-fade-in animation-delay-1000 tracking-tight">
          <span className="text-gradient-animated">Under Construction</span>
        </h1>

        {/* Subheading with staggered animation */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-2000 font-light">
          We're building something <span className="text-purple-300 font-semibold">extraordinary</span>. Get ready to experience the next level of innovation and excellence.
        </p>

        {/* CTA Buttons with enhanced animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-3000">
          <button 
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 btn-glow font-accent backdrop-blur-sm relative group overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="animate-bounce-soft">✨</span>
              Notify Me
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </button>
          
          <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-accent glass-morphism backdrop-blur-sm group">
            <span className="flex items-center justify-center gap-2">
              Learn More
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>
        
      </div>

      {/* Animated grid background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #a855f7 1px, transparent 1px), linear-gradient(#a855f7 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
