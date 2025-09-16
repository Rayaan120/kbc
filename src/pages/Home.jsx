import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Play, Sparkles, Award, Users, TrendingUp, Quote } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    
  const reviews = [
  {
    name: "Sarah Chen",
    rating: 5,
    text: "KBC transformed our corporate event into something extraordinary. The molecular mixology was absolutely stunning!",
    date: "2 weeks ago",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    rating: 5,
    text: "Best catering service we've ever used. Their signature mocktails were the talk of our wedding!",
    date: "1 month ago",
    avatar: "MR"
  },
  {
    name: "Elena Volkov",
    rating: 5,
    text: "Professional, creative, and absolutely delicious. KBC exceeded every expectation we had.",
    date: "3 weeks ago",
    avatar: "EV"
  },
  {
    name: "David Kim",
    rating: 5,
    text: "Their team brought a level of creativity we’ve never seen before. Guests were blown away by the presentation and flavors!",
    date: "1 month ago",
    avatar: "DK"
  },
  {
    name: "Amira Hassan",
    rating: 5,
    text: "Absolutely seamless service from start to finish. They made our gala night unforgettable.",
    date: "2 months ago",
    avatar: "AH"
  },
  {
    name: "Luca Romano",
    rating: 5,
    text: "From setup to execution, everything was flawless. Their drinks became the highlight of the entire festival.",
    date: "3 weeks ago",
    avatar: "LR"
  }
];

  const [activeIndex, setActiveIndex] = useState(0);
    // autoplay every 6s
useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, 4000);
  return () => clearInterval(interval);
}, [reviews.length]);

  const stats = [
    { number: "2.5K+", label: "Events Catered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: TrendingUp },
    { number: "150+", label: "Signature Drinks", icon: Sparkles },
    { number: "50+", label: "Corporate Clients", icon: Users }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Unique Diagonal Layout */}
      <section className="py-32 relative overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-zinc-950 via-black to-black transform skew-x-12 origin-top-right"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>
  </div>

  {/* Foreground */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center space-y-10">
    {/* Splashes wrapping around text */}
    <div className="relative inline-block">
      {/* Purple arc (left) */}
      {/* Purple arc (left) */}
{/* Purple arc (left) */}
<img
  src="/Images/splash-purple.png"
  alt="mocktail splash purple"
  className="absolute -left-56 top-[15%] w-[520px] opacity-40 rotate-[-30deg] animate-splash-slow"
/>

{/* Pink arc (continuation of purple) */}
<img
  src="/Images/splash-pink.png"
  alt="mocktail splash pink"
  className="absolute left-[200px] top-[32%] w-[560px] opacity-40 rotate-[5deg] animate-splash-slower"
/>


      {/* Citrus splash (top-right) */}
      <img
  src="/Images/splash-citrus.png"
  alt="mocktail splash citrus"
  className="absolute -right-36 top-[-100px] w-[480px] opacity-75 rotate-[3deg]"
/>




      {/* Headline */}
      <h1 className="relative text-6xl sm:text-7xl lg:text-8xl font-black leading-tight z-10">
        <span className="block text-white">CRAFT</span>
        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          PERFECTION
        </span>
      </h1>
    </div>

    {/* Subtext */}
    <p className="text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
      Elevate your events with our revolutionary approach to beverage artistry. 
      Where molecular gastronomy meets timeless mixology.
    </p>

    {/* CTA Buttons */}
   <div className="flex justify-center">
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
   <Link to="/products" className="relative bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                    <span>Explore Menu</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
  </div>
</div>

  </div>
</section>

{/* Services Preview - Asymmetric Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Services */}
            <div className="space-y-12">
              <div>
                <h2 className="text-6xl font-black text-white mb-6">
                  SIGNATURE <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    EXPERIENCES
                  </span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  From molecular gastronomy to classic mixology, we create bespoke beverage experiences that define luxury events.
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Molecular Mixology", desc: "Scientific artistry in every glass" },
                  { title: "Corporate Catering", desc: "Professional service for business events" },
                  { title: "Wedding Packages", desc: "Romantic beverages for your special day" }
                ].map((service, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center space-x-6 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-zinc-400">{service.desc}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">🍸</div>
                    <h3 className="text-white font-bold">Premium Cocktails</h3>
                  </div>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">🥂</div>
                    <h3 className="text-white font-bold">Elegant Service</h3>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">🧪</div>
                    <h3 className="text-white font-bold">Molecular Art</h3>
                  </div>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-white font-bold">Custom Creations</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="relative py-32 overflow-hidden">
  {/* Background gradient with subtle glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
  <div className="absolute inset-0">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${4 + Math.random() * 6}s`,
        }}
      ></div>
    ))}
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="text-6xl font-black text-white mb-6">
        OUR{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          PROCESS
        </span>
      </h2>
      <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
        A journey designed to craft unforgettable experiences, step by step.
      </p>
    </div>

    {/* Process Journey */}
    <div className="relative">
      {/* Glowing connector line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-lg opacity-30"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative">
        {[
          { step: "01", title: "Consultation", desc: "Understanding your vision and requirements", icon: "💭" },
          { step: "02", title: "Creation", desc: "Crafting unique recipes and presentations", icon: "🧪" },
          { step: "03", title: "Testing", desc: "Perfecting flavors and visual appeal", icon: "⚗️" },
          { step: "04", title: "Delivery", desc: "Flawless execution at your event", icon: "✨" }
        ].map((process, index) => (
          <div key={index} className="relative text-center group">
            {/* Glowing orb with icon */}
            <div className="relative w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl text-white shadow-lg shadow-purple-500/40 group-hover:scale-110 transition-transform duration-500">
              {process.icon}
            </div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-zinc-900/80 to-black/90 border border-zinc-800 rounded-3xl p-8 backdrop-blur-lg shadow-lg hover:shadow-purple-500/20 transform group-hover:-translate-y-2 transition-all duration-500">
              <div className="text-3xl font-black text-purple-400 mb-2">{process.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{process.title}</h3>
              <p className="text-zinc-400">{process.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Google Reviews Section - Unique Floating Cards */}
      <section className="relative py-40 bg-black overflow-hidden">
  {/* background big quotes */}
  <div className="absolute text-[400px] font-black text-zinc-900/40 top-0 left-1/2 -translate-x-1/2 select-none">“</div>
  <div className="absolute text-[400px] font-black text-zinc-900/40 bottom-0 right-1/2 translate-x-1/2 select-none">”</div>

  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h2 className="text-7xl font-extrabold text-white mb-6">
  CLIENT{" "}
  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    STORIES
  </span>
</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
  Honest voices from our clients — sharing how we turned their events into unforgettable memories. 
</p>


    {/* Active Review */}
    <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 border border-zinc-800 p-12 rounded-3xl shadow-2xl transition-all duration-700 ease-in-out">
      <Quote className="h-10 w-10 text-purple-400 mx-auto mb-6" />
      <p className="text-zinc-300 text-2xl italic leading-relaxed mb-10 min-h-[120px]">
        "{reviews[activeIndex].text}"
      </p>
      <div className="flex justify-center items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
          {reviews[activeIndex].avatar}
        </div>
        <div className="text-left">
          <h4 className="text-white font-bold">{reviews[activeIndex].name}</h4>
          <p className="text-zinc-500 text-sm">{reviews[activeIndex].date}</p>
        </div>
      </div>
    </div>

    {/* nav dots */}
    <div className="flex justify-center mt-12 space-x-3">
      {reviews.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`w-3 h-3 rounded-full transition ${
            i === activeIndex
              ? "bg-purple-400 scale-125"
              : "bg-zinc-700 hover:bg-purple-400"
          }`}
        ></button>
      ))}
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

      

      {/* CTA Section - Full Width Dark */}
      <section className="relative py-32 overflow-hidden bg-black">
  {/* Background velvet gradient + floating dust */}
  <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${4 + Math.random() * 6}s`,
        }}
      ></div>
    ))}
  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
    {/* Spotlight effect */}
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-white/10 via-purple-500/5 to-transparent blur-3xl"></div>

    {/* Headline */}
    <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-8">
      Designing Experiences <br />
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        Beyond the Glass
      </span>
    </h2>

    {/* Subtext */}
    <p className="relative text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
      Not just drinks. Not just service. An unforgettable performance where
        every detail is crafted for impact.
    </p>

    {/* Stage-style buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
       <Link to="/contact" className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105">
                  Start Your Project
                </Link>
      </div>

      <Link to="/portfolio" className="border-2 border-zinc-700 hover:border-zinc-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-zinc-900">
                View Portfolio
              </Link>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Home;