import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  // 👇 dynamic background logic
  const isHome = location.pathname === '/';
  const navbarBg = isHome
    ? isScrolled
      ? 'bg-black/95 backdrop-blur-2xl border-b border-gray-600/30'
      : 'bg-transparent'
    : 'bg-black/95 backdrop-blur-2xl border-b border-gray-600/30';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${navbarBg}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Images/logo.png"
              alt="KBC Logo"
              className="h-20 w-auto object-contain md:h-24 lg:h-28 mt-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
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
  <div className="absolute inset-0 bg-black/80 rounded-2xl border border-gray-600/50 backdrop-blur-sm"></div>
)}

                <span className="relative z-10 font-medium tracking-wide">{item.name}</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/70 group-hover:w-full transition-all duration-500"></div>

              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-gray-700/50">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-cyan-800/80'
                      : 'text-cyan-100/70 hover:text-white hover:bg-gray-800/50'
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
