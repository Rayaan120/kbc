import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // removed Zap since no icon needed

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
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-8 py-4 rounded-2xl transition-all duration-500 group overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700"></div>
                )}
                <span className="relative z-10 font-medium tracking-wide">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-zinc-800">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-white bg-zinc-800'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-white text-black px-6 py-4 rounded-xl font-bold mt-6"
              >
                Book Event
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
