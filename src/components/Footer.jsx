import React from 'react';
import { Zap, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

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
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        
            
          
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center">
  <img
    src="/Images/logo.png"
    alt="KBC Logo"
    className="h-20 w-auto object-contain md:h-24 lg:h-28"
  />
</div>

                
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Crafting extraordinary beverage experiences through the perfect fusion of 
                  molecular gastronomy, premium ingredients, and artistic presentation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-zinc-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span>International City</span>
                  </div>
                  <div className="flex items-center space-x-4 text-zinc-300">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <span>+971 50 482 6961</span>
                  </div>
                  <div className="flex items-center space-x-4 text-zinc-300">
                    <Mail className="h-5 w-5 text-purple-400" />
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
                      className="block text-zinc-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
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
                      className="text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social & Awards */}
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
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      <div className="relative bg-zinc-900 border border-zinc-800 p-4 rounded-xl group-hover:border-zinc-700 transition-all duration-300">
                        <social.icon className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
                
            
            
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-8">
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-zinc-500 text-sm">
                © 2025 KBC Beverages. All rights reserved. Crafted with precision.
              </div>
              <div className="flex space-x-8 text-sm">
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-zinc-500 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;