import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

const  Clients = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const logoAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
     <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
      {/* Hero Section */}
 <section 
  className="pt-20 pb-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Hero-style black smoky overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center space-y-12"
  >
    <motion.h1
      variants={fadeInUp}
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none drop-shadow-lg"
    >
      <span className="block text-white">PORTFOLIO</span>
      <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
        SHOWCASE
      </span>
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      className="text-2xl text-cyan-50/80 leading-relaxed max-w-4xl mx-auto"
    >
      Discover the extraordinary events we've transformed through innovative beverage artistry. 
      Each project represents our commitment to excellence and creative innovation.
    </motion.p>
  </motion.div>
</section>



     {/* Corporate Clients Section */}
<section 
  className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-snug">
      CORPORATE <br />
      <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
        CLIENTS
      </span>
    </h2>

    {/* Logos Grid (Full-Color Version) */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-center mt-16">
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
        "/Images/vacheron.png"
      ].map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center transition-transform duration-500 hover:scale-105"
        >
          <img
            src={logo}
            alt="Client logo"
            loading="lazy"
            className="max-h-16 object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      {/* CTA Section */}
      <section

  className="py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay for depth */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
    <div className="space-y-12">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-snug drop-shadow-lg">
        READY FOR YOUR <br />
        <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
          SHOWCASE?
        </span>
      </h2>
      
      <p className="text-2xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
        Let's create an extraordinary event that will become part of our next portfolio showcase.
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative group inline-block"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <Link 
          to="/contact" 
          className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105"
        >
          Start Your Project
        </Link>
      </motion.div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Clients;
