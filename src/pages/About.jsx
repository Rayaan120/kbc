import React from 'react';
import { Zap, Target, Award, Users, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
  const timeline = [
    { year: "2018", title: "Foundation", description: "Started with a vision to revolutionize beverage experiences", highlight: true },
    { year: "2020", title: "Innovation", description: "Introduced molecular mixology to corporate events", highlight: false },
    { year: "2022", title: "Expansion", description: "Opened premium catering division serving 500+ events annually", highlight: false },
    { year: "2024", title: "Recognition", description: "Awarded 'Best Luxury Catering Service' by Industry Awards", highlight: true }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every element crafted with scientific precision and artistic flair"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge techniques and presentations"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Uncompromising quality in ingredients, service, and execution"
    }
  ];

  const team = [
    { name: "Alexandra Chen", role: "Master Mixologist", specialty: "Molecular Gastronomy", avatar: "AC" },
    { name: "Marcus Rivera", role: "Creative Director", specialty: "Event Design", avatar: "MR" },
    { name: "Sofia Volkov", role: "Operations Lead", specialty: "Client Relations", avatar: "SV" }
  ];

  return (
    <div className=" bg-black">
      {/* Hero Section - Split Layout */}
     <section className="py-32 relative overflow-hidden">

  {/* Background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
  {/* Left Content */}
  <div className="flex flex-col justify-start">
    <div className="space-y-8">
      <h1 className="text-7xl font-black leading-none">
        <span className="block text-white">REDEFINING</span>
        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          LUXURY
        </span>
      </h1>

      <p className="text-2xl text-zinc-400 leading-relaxed">
        KBC Beverages is a premier event planning company specializing in mobile bar services. 
        With over 10 years of expertise in hospitality, we transform venues into vibrant, 
        stylish bar experiences. From private celebrations to large-scale corporate events, 
        we deliver a seamless bar set up with premium glassware, curated decor, and only the 
        freshest ingredients. Our mission is simple: to create unforgettable moments where 
        every sip counts.
      </p>
    </div>
  </div>

  {/* Right Side - Mocktail Image (matches text height) */}
  <div className="flex">
    <img
      src="/Images/mocktail.png"
      alt="Luxury Mocktail"
      className="h-full object-cover rounded-3xl shadow-[0_0_60px_rgba(236,72,153,0.5)]"
    />
  </div>
</div>

  </div>
</section>


      



{/* Core Values Section - Rotating Orbit */}
<section className="relative py-40 bg-black overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[700px] h-[700px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-24">
      <h2 className="text-6xl font-black text-white mb-6 tracking-tight">
        CORE{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          VALUES
        </span>
      </h2>
      <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        The heart of everything we do — orbiting around one central purpose.
      </p>
    </div>

    {/* Orbit Container */}
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Core Circle */}
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-[0_0_60px_rgba(236,72,153,0.5)] z-20">
        CORE
        <br />
        VALUES
      </div>

      {/* Rotating Orbit Layer */}
      <div className="absolute w-[600px] h-[600px] animate-spin-slower">
        {values.map((value, i) => {
          const angle = (i / values.length) * 2 * Math.PI;
          const radius = 260;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute w-56"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x - 112}px, ${y - 112}px)`,
              }}
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center shadow-xl">
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

 {/* Company Culture Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              COMPANY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CULTURE</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Built on passion, driven by innovation, united by excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                {[
                  {
                    title: "Innovation First",
                    description: "We constantly push boundaries, experimenting with new techniques and ingredients to create beverages that have never been seen before.",
                    icon: "🚀"
                  },
                  {
                    title: "Artisan Craftsmanship",
                    description: "Every beverage is handcrafted by master mixologists who treat each creation as a work of art, ensuring perfection in every detail.",
                    icon: "🎨"
                  },
                  {
                    title: "Client Partnership",
                    description: "We don't just serve clients; we partner with them to understand their vision and exceed their expectations at every turn.",
                    icon: "🤝"
                  }
                ].map((culture, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{culture.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{culture.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-12">
                <blockquote className="text-2xl text-white leading-relaxed italic mb-8">
                  "At KBC, we believe that every beverage tells a story. Our mission is to craft narratives that captivate, inspire, and create lasting memories for every guest."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    KC
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Kristina Chen</div>
                    <div className="text-purple-400">Founder & Creative Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      

      {/* Team Section - Card Grid */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              MASTER <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CRAFTSMEN</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Meet the visionaries behind every extraordinary experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 transform group-hover:scale-105 transition-all duration-500">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-2xl font-black">
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                    <p className="text-zinc-400">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden bg-black">
  {/* Gradient background + glowing rings */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20"></div>
    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 animate-spin-slower"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      {/* Headline */}
      <h2 className="text-7xl font-black text-white leading-tight tracking-tight">
        JOIN OUR <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          LEGACY
        </span>
      </h2>

      {/* Subtext */}
      <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
        Become part of our story. Let’s create something extraordinary together.
      </p>

      {/* CTA Button with glow + magnetic hover */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group inline-block"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <Link to="/contact" className="relative bg-white text-black px-14 py-6 rounded-2xl font-black text-xl flex items-center space-x-3 mx-auto shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
          <span>Start Your Journey</span>
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Floating sparkles */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <Sparkles
        key={i}
        className="absolute text-purple-400/30 animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          fontSize: `${12 + Math.random() * 18}px`,
        }}
      />
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;