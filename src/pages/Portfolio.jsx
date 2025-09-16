import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-12">
            

            <h1 className="text-7xl lg:text-8xl font-black leading-none">
              <span className="block text-white">PORTFOLIO</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                SHOWCASE
              </span>
            </h1>

            <p className="text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
              Discover the extraordinary events we've transformed through innovative beverage artistry. 
              Each project represents our commitment to excellence and creative innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Gradient background with subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-6xl font-black text-white mb-16">
            CORPORATE{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
              "/logos/pagani.png",
              "/Images/chopard.png",
              "/Images/versace.png",
              "/Images/fendi.png",
              "/logos/bmw.png",
              "/Images/darglobal.png",
              "/logos/damas.png",
              "/logos/breitling.png",
              "/Images/tiktok.png",
              "/Images/kilian.png",
              "/logos/hublot.png",
              "/Images/cartier.png",
              "/Images/DHL.png",
              "/Images/valrhona.png",
              "/Images/time.png",
              "/Images/bmw.png",
              "/Images/mastercard.png",
              "/Images/margiela.png",
              "/Images/octa.png",
              "/Images/breitling.png",
              "/Images/damas.png",
              "/Images/hublot.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
            <h2 className="text-7xl font-black text-white leading-tight">
              READY FOR YOUR <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SHOWCASE?
              </span>
            </h2>

            <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Let's create an extraordinary event that will become part of our next portfolio showcase.
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              <Link
                to="/contact"
                className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105"
              >
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
