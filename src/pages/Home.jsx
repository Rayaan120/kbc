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
  },
  {
    name: "Sarah Chen",
    rating: 5,
    text: "KBC transformed our corporate event into something extraordinary. The molecular mixology was absolutely stunning!",
    date: "2 weeks ago",
    avatar: "SC"
  },
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
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
      {/* Hero Section - Unique Diagonal Layout */}
      <section 
  className="relative min-h-screen flex items-center bg-cover bg-center" 
  style={{ backgroundImage: "url('/Images/mocktail-bg.png')" }}
>
  {/* Overlay to improve text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 pt-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      
      {/* Left Content */}
      <div className="lg:col-span-7 space-y-12">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none drop-shadow-lg">
  <span className="block text-white">CRAFT</span>
  <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
    PERFECTION
  </span>
</h1>

          
          <p className="text-2xl text-cyan-50/90 leading-relaxed max-w-2xl drop-shadow-md">
            Elevate your events with our revolutionary approach to beverage artistry. 
            Where molecular gastronomy meets timeless mixology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            <Link 
              to="/products" 
              className="relative bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <span>Explore Menu</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


 {/* Services Preview - Asymmetric Layout */}
      <section className="py-32 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

  <div className="max-w-8xl mx-auto px-6 lg:px-12">
    <div className="space-y-16">
      
      {/* Centered Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-snug">
  SIGNATURE <br />
  <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
    EXPERIENCES
  </span>
</h2>

        <p className="text-xl text-cyan-50/80 leading-relaxed">
          From molecular gastronomy to classic mixology, we create bespoke beverage 
          experiences that define luxury events.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[
          { title: "Molecular Mixology", desc: "Scientific artistry in every glass" },
          { title: "Corporate Catering", desc: "Professional service for business events" },
          { title: "Wedding Packages", desc: "Romantic beverages for your special day" },
          { title: "Private Parties", desc: "Unforgettable drinks tailored for intimate celebrations" },
          { title: "Brand Launching", desc: "Innovative beverage concepts to elevate your brand event" },
          { title: "Mixology", desc: "Creative bartending tailored for any occasion" },
          { title: "Equipment Renting", desc: "Special glassware and bar tools for hire" },
           { title: "Luxury Bar Setup", desc: "Elegant bar designs that elevate the atmosphere of any event" }
        ].map((service, index) => (
          <div 
            key={index} 
            className="group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="flex items-center space-x-6 p-6 rounded-2xl border border-white/20 
                            hover:border-cyan-400/50 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-cyan-100/70">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>




     {/* Process Section - Minimal Premium Line Flow */}
<section className="py-32 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-teal-700/30 via-cyan-600/20 to-blue-600/30"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-snug">
        OUR{" "}
        <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
          PROCESS
        </span>
      </h2>
      <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
        A seamless journey from vision to delivery
      </p>
    </div>

    {/* Process Flow */}
    <div className="relative">
      {/* Horizontal line (desktop only) */}
      <div className="hidden lg:block absolute top-[65px] left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400"></div>
      
      {/* Vertical line (mobile only) */}
      <div className="lg:hidden absolute top-0 left-[29px] h-full w-[2px] bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-400"></div>

      <div className="grid grid-cols-1 lg:flex lg:justify-between gap-12 lg:gap-0">
        {[
          { step: "01", title: "Consultation", desc: "We understand your goals and vision." },
          { step: "02", title: "Creation", desc: "Unique concepts crafted with care." },
          { step: "03", title: "Testing", desc: "Flavors and details perfected." },
          { step: "04", title: "Event Setups", desc: "Designing the ultimate service space." },
          { step: "05", title: "Delivery", desc: "A flawless experience executed." },
        ].map((p, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center text-center lg:w-40"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-lg font-black text-white shadow-lg mb-6 z-10">
              {p.step}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-cyan-50/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


     
      {/* Google Reviews Section - Unique Floating Cards */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-white/20 border border-white/30 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9/5</span>
              <span className="text-cyan-100/70">Google Reviews</span>
            </div>
            
            <h2 className="text-6xl font-black text-white mb-6">
              CLIENT <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">STORIES</span>
            </h2>
            <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
              Real experiences from events we've transformed into unforgettable moments
            </p>
          </div>


    {/* Active Review */}
<div className="relative bg-gradient-to-br from-cyan-900/40 to-teal-800/40 backdrop-blur-xl border border-cyan-700/30 p-12 rounded-3xl shadow-2xl transition-all duration-700 ease-in-out">
  <Quote className="h-10 w-10 text-cyan-300 mx-auto mb-6" />
  <p className="text-cyan-50 text-2xl italic leading-relaxed mb-10 min-h-[120px]">
    "{reviews[activeIndex].text}"
  </p>
  <div className="flex justify-center items-center space-x-4">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
      {reviews[activeIndex].avatar}
    </div>
    <div className="text-left">
      <h4 className="text-white font-bold">{reviews[activeIndex].name}</h4>
      <p className="text-cyan-100/70 text-sm">{reviews[activeIndex].date}</p>
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
          ? "bg-cyan-400 scale-125"
          : "bg-cyan-800 hover:bg-cyan-400"
      }`}
    ></button>
  ))}
</div>

  </div>
</section>


      

   {/* CTA Section - Full Width Dark */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-snug">
  Designing Experiences <br />
  <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
    Beyond the Glass
  </span>
</h2>

            
            <p className="text-2xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
                Not just drinks. Not just service. An unforgettable performance where
        every detail is crafted for impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
                <Link to="/contact" className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105">
                  Start Your Project
                </Link>
              </div>
              <Link to="/portfolio" className="border-2 border-white/30 hover:border-white/50 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;