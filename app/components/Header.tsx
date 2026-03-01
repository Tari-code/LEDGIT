'use client';

import React, { useState, useEffect } from 'react';
import RegistrationModal from './RegistrationModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Updates', href: '#updates' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'md:bg-slate-950/80 md:backdrop-blur-md md:border-b sm:border-none md:border-blue-500/20 md:shadow-lg shadow-blue-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Logo Icon with gradient
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div> */}

            {/* Logo Text */}
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-display group-hover:animate-gradient-shift transition-all duration-300">
                LEDGIT
              </span>
            </div>

            {/* Mobile Logo Text */}
            {/* <span className="sm:hidden text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-display">
              LEDGIT
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 text-sm font-medium">
              Documentation
            </button>
            <button 
              onClick={() => setShowModal(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-sm font-semibold btn-glow">
              Register
            </button>
          </div>
<div className="w-full flex px-4 py-2 justify-between items-center md:hidden rounded-lg bg-[#f2f2f2f2] z-100 h-auto">
          <span className="sm:hidden text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-display">
              LEDGIT
            </span>


<div className="flex w-full justify-end gap-4">
            {/* Early Access Button with enhanced animations */}
              <button 
                onClick={() => {
                  setShowModal(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-auto px-4 py-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 text-sm font-semibold btn-glow relative group overflow-hidden transform hover:scale-105"
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <span className="relative flex items-center justify-center gap-2">
                  Register
                </span>
              </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 group items-center justify-center"
          >
            <span className={`w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border bg-[#f2f2f2f2] rounded-[10px] mt-2 pb-4 space-y-2 animate-fade-in">
            {/* Navigation Links with staggered animation */}
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-blue-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium relative group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300 -z-10"></div>
                
                {/* Animated left border indicator */}
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
                
                <span className="relative flex items-center">
                  {item.label}
                  <span className="ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                </span>
              </a>
            ))}

            {/* Divider with animation */}
            <div className="flex items-center gap-2 py-2 px-4 my-2">
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
              <span className="text-xs text-blue-400/60 font-semibold">ACTIONS</span>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col gap-2 pt-2 px-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
              {/* Documentation Button */}
              <button className="w-full px-4 py-3 text-blue-300 hover:text-blue-100 rounded-lg transition-all duration-300 text-sm font-medium relative group overflow-hidden border border-blue-500/20 hover:border-blue-500/40">
                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 -z-10"></div>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                
                <span className="relative flex items-center justify-between">
                  <span>📚 Documentation</span>
                  <span className="text-blue-400/60 group-hover:text-blue-400 transition-colors">↗</span>
                </span>
              </button>

              {/* Early Access Button with enhanced animations */}
              {/*  */}
            </div>
          </nav>
        )}
      </div>

      {/* Animated top border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
