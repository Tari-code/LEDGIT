'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Fixed launch date (May 30, 2026)
      const launchDate = new Date('2026-05-30T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Shimmer overlay effect */}
        <div className="absolute inset-0 animate-shimmer-wave rounded-xl pointer-events-none"></div>
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl border border-blue-500/20 group-hover:border-blue-400/60 transition-all duration-600 group-hover:scale-105 animate-pulse-glow">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated font-display">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-xs sm:text-sm font-semibold text-blue-300 mt-4 uppercase tracking-widest font-accent">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glowing blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        {/* scattered stars with color variations and dynamic animations */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(80)].map((_, i) => {
            const top = `${Math.random() * 100}%`;
            const left = `${Math.random() * 100}%`;
            // larger random drift offsets for more visible movement
            const driftX = `${(Math.random() - 0.5) * 150}px`;
            const driftY = `${(Math.random() - 0.5) * 150}px`;
            // vary star colors: blue, cyan, white
            const colors = ['bg-white', 'bg-blue-300', 'bg-cyan-300', 'bg-blue-200'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            // smaller and uniform size
            const sizeClass = 'w-0.5 h-0.5';
            // random opacity
            const opacity = 0.3 + Math.random() * 0.7;
            // faster animation speeds (2-5s)
            const speed = 2 + Math.random() * 3;
            const delay = Math.random() * 5;
            return (
              <span
                key={i}
                className={`absolute ${sizeClass} ${color} rounded-full animate-drift`}
                style={{
                  top,
                  left,
                  '--drift-x': driftX,
                  '--drift-y': driftY,
                  '--drift-speed': `${speed}s`,
                  '--star-opacity': opacity,
                  '--star-size': 0.8 + Math.random() * 0.4,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties}
              ></span>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title with animations */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-display animate-fade-in">
            <span className="text-gradient-animated">Launching In</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in animation-delay-1000 font-light">
            Stay tuned for the big reveal coming your way
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          <TimeBox value={timeLeft.days} label="Days" delay={0} />
          <TimeBox value={timeLeft.hours} label="Hours" delay={0.1} />
          <TimeBox value={timeLeft.minutes} label="Minutes" delay={0.2} />
          <TimeBox value={timeLeft.seconds} label="Seconds" delay={0.3} />
        </div>
      </div>
    </div>
  );
}
