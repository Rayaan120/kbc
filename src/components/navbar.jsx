import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-cyan-900/90 backdrop-blur-2xl border-b border-cyan-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo only */}
        <Link to="/" className="flex items-center">
  <img
    src="/Images/logo.png"
    alt="KBC Logo"
    className="h-20 w-auto object-contain md:h-24 lg:h-28 mt-2"
  />
</Link>




         {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-8 py-4 rounded-2xl transition-all duration-500 group overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-cyan-100/70 hover:text-white'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/80 to-teal-800/80 rounded-2xl border border-cyan-600/50 backdrop-blur-sm"></div>
                )}
                <span className="relative z-10 font-medium tracking-wide">{item.name}</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-cyan-300 to-teal-300 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
            <div className="ml-8 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40"></div>
             
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-zinc-300 transition-colors p-2"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-cyan-900/95 backdrop-blur-2xl border-t border-cyan-700/50">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-cyan-800/80'
                      : 'text-cyan-100/70 hover:text-white hover:bg-cyan-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
