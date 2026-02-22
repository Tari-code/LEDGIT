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
      // Set launch date to 90 days from now
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 90);

      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 animate-gradient-shift transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl border border-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animated font-display">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-xs sm:text-sm font-semibold text-purple-300 mt-4 uppercase tracking-widest font-accent">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
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

        {/* Pulse indicator */}
        <div className="flex justify-center mt-16 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-scale-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
