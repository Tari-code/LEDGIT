import React from 'react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Security'],
    Company: ['About', 'Blog', 'Careers'],
    Follow: ['Twitter', 'LinkedIn', 'Discord'],
  };

  return (
    <footer className="w-full bg-gradient-to-b from-slate-950 to-black border-t border-purple-500/20 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-3 font-display">
              <span className="text-gradient-animated">Ledgit</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Building the future of innovation, one pixel at a time. Join us on this extraordinary journey.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['f', 'in', 'tw'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-xs font-bold text-blue-300">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Product */}
          <div className="animate-fade-in animation-delay-1000">
            <h4 className="font-bold text-white mb-6 font-display text-lg">Product</h4>
            <ul className="space-y-3">
              {links.Product.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 relative group font-light">
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in animation-delay-2000">
            <h4 className="font-bold text-white mb-6 font-display text-lg">Company</h4>
            <ul className="space-y-3">
              {links.Company.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative group font-light">
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-slate-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in animation-delay-3000">
            <h4 className="font-bold text-white mb-6 font-display text-lg">Follow Us</h4>
            <ul className="space-y-3">
              {links.Follow.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 relative group font-light flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 pt-8 mb-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-light">
            &copy; 2026 <span className="text-blue-400 font-semibold">Ledgit</span>. All rights reserved.
          </p>
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 font-light relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 font-light relative group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 font-light relative group">
              Cookie Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        {/* Scroll to top button indicator */}
        <div className="flex justify-center mt-6">
          <a href="#" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 flex items-center justify-center hover:border-purple-500/60 hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110">
            <span className="text-lg text-purple-300 group-hover:text-purple-100 transition-colors transform group-hover:-translate-y-1 duration-300">↑</span>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
