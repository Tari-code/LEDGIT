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
      className={`group relative glass-morphism-premium rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 card-hover ${delay}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/30 group-hover:via-purple-500/30 group-hover:to-purple-500/0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Glow effect background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

      <div className="relative z-10">
        {/* Icon with animations */}
        <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:animate-bounce-soft transition-all duration-300 origin-center">
          {icon}
        </div>

        {/* Title with premium font */}
        <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description with improved typography */}
        <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>

        {/* Accent line on hover */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default function FeatureCards() {
  const features = [
    {
      icon: '🚀',
      title: 'High Performance',
      description: 'Lightning-fast loading speeds optimized for the best user experience.',
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautiful and intuitive interface crafted with attention to detail.',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise-grade security to protect your data and privacy.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Seamlessly works across all devices and screen sizes.',
    },
    {
      icon: '⚡',
      title: 'Powerful API',
      description: 'Comprehensive API for seamless integrations and automation.',
    },
    {
      icon: '🌟',
      title: '24/7 Support',
      description: 'Dedicated support team ready to help you succeed.',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title with animations */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full animate-fade-in">
            <span className="text-sm font-accent font-semibold text-purple-300">Features</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 font-display animate-fade-in animation-delay-1000">
            <span className="text-gradient-animated">What's Coming</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-2000 font-light">
            We're preparing an incredible platform packed with <span className="text-purple-300 font-semibold">powerful features</span> designed to revolutionize your workflow.
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
