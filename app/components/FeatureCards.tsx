import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, index }) => {
  return (
    <div
      className={`group relative glass-morphism-premium rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 card-hover ${delay}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/30 group-hover:via-blue-500/30 group-hover:to-blue-500/0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Glow effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

      <div className="relative z-10">
        {/* Icon with animations */}
        <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:animate-bounce-soft transition-all duration-300 origin-center text-blue-400 group-hover:text-cyan-300">
          {icon}
        </div>

        {/* Title with premium font */}
        <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description with improved typography */}
        <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>

        {/* Accent line on hover */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default function FeatureCards() {
  const features = [
    {
      icon: '🚀',
      title: 'Blazing Speed',
      description: 'Under one second load times with intelligent caching and edge delivery.',
    },
    {
      icon: '🧠',
      title: 'AI-Powered Insights',
      description: 'Built-in analytics that learn from your usage and suggest optimizations.',
    },
    {
      icon: '🔐',
      title: 'Zero-Trust Security',
      description: 'Multi-layered encryption and continuous validation keep you airtight.',
    },
    {
      icon: '📦',
      title: 'Modular Architecture',
      description: 'Plug-and-play components that adapt to your workflow effortlessly.',
    },
    {
      icon: '☁️',
      title: 'Cloud Native',
      description: 'Auto-scaling, serverless-ready, and globally distributed by design.',
    },
    {
      icon: '🌐',
      title: 'Real-Time Collaboration',
      description: 'Work together live with instant sync across devices and teams.',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glowing blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
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
                  '--star-size': 0.9 + Math.random() * 0.6,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties}
              ></span>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title with animations */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full animate-fade-in">
            <span className="text-sm font-accent font-semibold text-blue-300">Features</span>
          </div>
          <h2 className="text-4xl sm:text-6xl text-gradient-animated">
            Next-Gen Capabilities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-2000 font-light">
            We're crafting an exceptional ecosystem with <span className="text-blue-300 font-semibold">cutting-edge features</span> built for the future of collaboration.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay="animate-fade-in-up"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
