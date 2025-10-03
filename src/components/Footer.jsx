import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Corporate Events',
    'Wedding Catering',
    'Private Parties',
    'Molecular Mixology',
    'Custom Creations'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kbc.beverages/', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-teal-600/30 to-cyan-700/40 border-t border-white/20 w-full">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
      </div>

     {/* Main Footer Content */}
<div className="pt-4 pb-6 relative">
  <div className="w-full px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] gap-8 w-full">
            {/* Brand Section */}
<div className="space-y-8 max-w-md">
  <div className="flex items-start">
    <img
      src="/Images/logo.png"
      alt="KBC Logo"
      className="h-20 w-auto object-contain md:h-24 lg:h-28"
    />
  </div>
  <p className="text-cyan-50/80 text-lg leading-relaxed">
    Crafting extraordinary beverage experiences through the perfect fusion of 
    molecular gastronomy, premium ingredients, and artistic presentation.
  </p>
  <div className="space-y-3 w-fit">
    <div className="flex items-center space-x-4 text-white/90">
      <MapPin className="h-5 w-5 text-cyan-200" />
      <span>International City</span>
    </div>
    <div className="flex items-center space-x-4 text-white/90">
      <Phone className="h-5 w-5 text-cyan-200" />
      <span>+971 50 482 6961</span>
    </div>
    <div className="flex items-center space-x-4 text-white/90">
      <Mail className="h-5 w-5 text-cyan-200" />
      <span>info@kbcbeverages.com</span>
    </div>
  </div>
</div>


            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Quick Links</h3>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-cyan-100/70 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Services</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="text-cyan-100/70 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-xl blur opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="relative bg-white/10 border border-white/20 p-4 rounded-xl group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                      <social.icon className="h-6 w-6 text-cyan-100/70 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="w-full px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-cyan-100/60 text-sm">
            © 2025 KBC Beverages. All rights reserved. Crafted with precision.
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-cyan-100/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-cyan-100/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-cyan-100/60 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
