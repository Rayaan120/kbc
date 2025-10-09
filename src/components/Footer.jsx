import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Corporate Events',
    'Wedding Catering',
    'Private Parties',
    'Molecular Mixology',
    'Custom Creations',
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kbc.beverages/', name: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/971504826961', name: 'WhatsApp' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background & overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/smoke.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>

      {/* Subtle glow */}
      <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-[18rem] h-[18rem] bg-cyan-300/10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 pt-8 pb-5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] gap-6">
            
            {/* Brand */}
            <div className="space-y-5 max-w-md">
              <div className="flex items-start">
                <img
                  src="/Images/logo.png"
                  alt="KBC Logo"
                  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
                />
              </div>
              <p className="text-cyan-50/80 text-sm leading-relaxed max-w-sm">
                Crafting extraordinary beverage experiences through the perfect fusion of 
                molecular gastronomy, premium ingredients, and artistic presentation.
              </p>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-white/90 text-sm">
                  <MapPin className="h-4 w-4 text-cyan-200" />
                  <span>International City</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90 text-sm">
                  <Phone className="h-4 w-4 text-cyan-200" />
                  <span>+971 50 482 6961</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90 text-sm">
                  <Mail className="h-4 w-4 text-cyan-200" />
                  <span>info@kbcbeverages.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="space-y-1.5">
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="block text-cyan-100/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Services (inactive) */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-1.5">
                {services.map((service, i) => (
                  <span
                    key={i}
                    className="block text-cyan-100/50 select-none cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-lg blur opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="relative bg-white/10 border border-white/20 p-3 rounded-lg group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                      <social.icon className="h-5 w-5 text-cyan-100/70 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-3 backdrop-blur-sm bg-black/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center text-cyan-100/60 text-xs space-y-2 lg:space-y-0">
          <div>© 2025 KBC Beverages. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
