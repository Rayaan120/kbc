import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
     <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
      {/* Hero Section */}
    <section className="pt-20 pb-32 relative overflow-hidden">
  <div className="absolute inset-0">
  
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>

    
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="text-center space-y-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none drop-shadow-lg">
  <span className="block text-white">PORTFOLIO</span>
  <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
    SHOWCASE
  </span>
</h1>
      
      <p className="text-2xl text-cyan-50/80 leading-relaxed max-w-4xl mx-auto">
        Discover the extraordinary events we've transformed through innovative beverage artistry. 
        Each project represents our commitment to excellence and creative innovation.
      </p>
    </div>
  </div>
</section>


     {/* Corporate Clients Section */}
<section className="relative py-32 overflow-hidden">
  {/* Gradient background (same as Client Feedback section) */}
  <div className="absolute inset-0 bg-gradient-to-b from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-snug">
  CORPORATE <br />
  <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
    CLIENTS
  </span>
</h2>

    {/* Logos Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-center">
  {[
    "/Images/astonmartin.png",
    "/Images/dior.png",
    "/Images/hermes.png",
    "/Images/vancleef.png",
    "/Images/pagani.png",
    "/Images/chopard.png",
    "/Images/versace.png",
    "/Images/fendi.png",
    "/Images/bmw.png",
    "/Images/darglobal.png",
    "/Images/damas.png",
    "/Images/breitling.png",
    "/Images/tiktok.png",
    "/Images/kilian.png",
    "/Images/hublot.png",
    "/Images/cartier.png",
    "/Images/DHL.png",
    "/Images/valrhona.png",
    "/Images/time.png",
    
    "/Images/mastercard.png",
    "/Images/margiela.png",
   
    "/Images/damas.png",
    
    "/Images/vacheron.png"
  ].map((logo, i) => (
    <div
      key={i}
      className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
    >
      <img
        src={logo}
        alt="Client logo"
        className="max-h-16 object-contain"
      />
    </div>
  ))}
</div>

   
  </div>
</section>


      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
             <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-snug">
  READY FOR YOUR <br />
  <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
    SHOWCASE?
  </span>
</h2>
            
            <p className="text-2xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
              Let's create an extraordinary event that will become part of our next portfolio showcase.
            </p>
            
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
              <Link to="/contact" className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
