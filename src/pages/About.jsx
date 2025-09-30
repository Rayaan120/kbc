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
    <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
     {/* Hero Section - Split Layout */}
<section className="py-32 relative overflow-hidden">
  {/* Background elements (clean full gradient) */}
  <div className="absolute inset-0">
   
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>

  
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
      
      {/* Left Content */}
      <div className="flex flex-col justify-start">
        <div className="space-y-8">
          <h1 className="text-7xl font-black leading-none">
            <span className="block text-white">REDEFINING</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
              LUXURY
            </span>
          </h1>

          <p className="text-2xl text-cyan-50/80 leading-relaxed">
            KBC Beverages is a premier event planning company specializing in mobile bar services. 
            With over 10 years of expertise in hospitality, we transform venues into vibrant, 
            stylish bar experiences. From private celebrations to large-scale corporate events, 
            we deliver a seamless bar set up with premium glassware, curated decor, and only the 
            freshest ingredients. Our mission is simple: to create unforgettable moments where 
            every sip counts.
          </p>
        </div>
      </div>

      {/* Right Side - Mocktail Image */}
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



      



{/* Values Section - Flowing Anchors */}
<section className="py-32 relative overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent"></div>
    <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    {/* Section Title */}
    <div className="text-center mb-28">
      <h2 className="text-6xl font-black text-white mb-6">
        CORE <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">VALUES</span>
      </h2>
      <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
        The principles that drive every decision, every creation, every moment we craft
      </p>
    </div>

    {/* Flow Layout */}
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-200/30 to-transparent"></div>

      <div className="space-y-32">
        {values.map((value, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Anchor Circle */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <value.icon className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className={`lg:w-1/2 mt-10 lg:mt-0 ${index % 2 === 0 ? "lg:mr-auto lg:text-right pr-12" : "lg:ml-auto lg:text-left pl-12"}`}>
              <h3 className="text-3xl font-black text-white mb-4">{value.title}</h3>
              <p className="text-lg text-cyan-50/80 leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


   {/* Company Culture Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-teal-600/30 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              COMPANY <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">CULTURE</span>
            </h2>
            <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
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
                      <p className="text-cyan-50/80 leading-relaxed">{culture.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/10 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
                <blockquote className="text-2xl text-white leading-relaxed italic mb-8">
                  "At KBC, we believe that every beverage tells a story. Our mission is to craft narratives that captivate, inspire, and create lasting memories for every guest."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    KC
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Kristina Chen</div>
                    <div className="text-cyan-200">Founder & Creative Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      

      {/* Team Section - Card Grid */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              MASTER <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">CRAFTSMEN</span>
            </h2>
            <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
              Meet the visionaries behind every extraordinary experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-cyan-300/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/10 border border-white/20 rounded-3xl p-12 transform group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-2xl font-black">
                      {member.avatar}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-200 font-medium mb-4">{member.role}</p>
                    <p className="text-cyan-100/70">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
            <h2 className="text-7xl font-black text-white leading-tight">
              JOIN OUR <br />
              <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
                LEGACY
              </span>
            </h2>
            
            <p className="text-2xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
              Become part of our story. Let's create something extraordinary together.
            </p>
            
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
              <Link to="/contact" className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
                <span>Start Your Journey</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;