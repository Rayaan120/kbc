import React, { useState } from 'react';
import { Sparkles, Zap, Leaf, Star } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Products = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const [activeCategory, setActiveCategory] = useState('signature');

  const categories = [
    { id: 'signature', name: 'Signature Collection', icon: Sparkles, color: 'purple' },
    { id: 'molecular', name: 'Molecular Artistry', icon: Zap, color: 'pink' },
    { id: 'wellness', name: 'Wellness Series', icon: Leaf, color: 'green' },
    { id: 'premium', name: 'Premium Reserve', icon: Star, color: 'amber' }
  ];

  const products = {
    signature: [
      {
        name: "Midnight Elixir",
        description: "Activated charcoal, elderflower, and citrus with nitrogen infusion",
        price: "From $18",
        image: "🖤",
        ingredients: ["Activated Charcoal", "Elderflower", "Citrus Blend", "Nitrogen"],
        featured: true,
        complexity: "Advanced"
      },
      {
        name: "Golden Phoenix",
        description: "Turmeric, ginger, and honey with edible gold leaf presentation",
        price: "From $22",
        image: "🔥",
        ingredients: ["Turmeric", "Fresh Ginger", "Raw Honey", "Edible Gold"],
        featured: false,
        complexity: "Intermediate"
      },
      {
        name: "Crystal Garden",
        description: "Cucumber, mint, and rose water with crystallized sugar rim",
        price: "From $16",
        image: "💎",
        ingredients: ["Cucumber", "Fresh Mint", "Rose Water", "Crystal Sugar"],
        featured: false,
        complexity: "Classic"
      }
    ],
    molecular: [
      {
        name: "Sphere of Influence",
        description: "Liquid-filled spheres that burst with flavor using spherification",
        price: "From $35",
        image: "🧪",
        ingredients: ["Sodium Alginate", "Calcium Chloride", "Fruit Essences"],
        featured: true,
        complexity: "Master"
      },
      {
        name: "Smoke & Mirrors",
        description: "Dry ice presentation with aromatic herbs and premium spirits",
        price: "From $28",
        image: "💨",
        ingredients: ["Dry Ice", "Aromatic Herbs", "Premium Base", "Essence Oils"],
        featured: false,
        complexity: "Advanced"
      },
      {
        name: "Levitating Liquid",
        description: "Magnetic levitation display with color-changing properties",
        price: "From $45",
        image: "🌀",
        ingredients: ["Magnetic Elements", "pH Indicators", "Natural Colors"],
        featured: true,
        complexity: "Master"
      }
    ],
    wellness: [
      {
        name: "Immunity Fortress",
        description: "Supercharged blend of antioxidants and adaptogens",
        price: "From $14",
        image: "🛡️",
        ingredients: ["Goji Berries", "Ashwagandha", "Vitamin C", "Zinc"],
        featured: false,
        complexity: "Classic"
      },
      {
        name: "Mind Clarity",
        description: "Nootropic blend for enhanced focus and mental performance",
        price: "From $16",
        image: "🧠",
        ingredients: ["Lion's Mane", "Ginkgo", "Green Tea", "L-Theanine"],
        featured: false,
        complexity: "Intermediate"
      },
      {
        name: "Energy Surge",
        description: "Natural energy boost without the crash",
        price: "From $12",
        image: "⚡",
        ingredients: ["Matcha", "Guarana", "B-Vitamins", "Coconut Water"],
        featured: false,
        complexity: "Classic"
      }
    ],
    premium: [
      {
        name: "Platinum Reserve",
        description: "Ultra-premium ingredients with 24k gold presentation",
        price: "From $75",
        image: "👑",
        ingredients: ["Rare Botanicals", "24k Gold", "Premium Spirits", "Exotic Fruits"],
        featured: true,
        complexity: "Master"
      },
      {
        name: "Diamond Dust",
        description: "Crystalline presentation with rare ingredient combinations",
        price: "From $65",
        image: "💍",
        ingredients: ["Crystal Elements", "Rare Essences", "Premium Base"],
        featured: false,
        complexity: "Master"
      },
      {
        name: "Royal Treatment",
        description: "Fit for royalty with the finest ingredients available",
        price: "From $55",
        image: "🏆",
        ingredients: ["Royal Jelly", "Saffron", "Truffle Essence", "Gold Flakes"],
        featured: false,
        complexity: "Advanced"
      }
    ]
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Classic': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-orange-400 bg-orange-400/10';
      case 'Master': return 'text-red-400 bg-red-400/10';
      default: return 'text-zinc-400 bg-zinc-400/10';
    }
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
     <section className="pt-20 pb-32 relative overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>

    
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
  </div>
  
   <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center space-y-12"
        >
    <div className="text-center space-y-12">
      <motion.h1
            variants={fadeInUp}
            className="text-7xl lg:text-8xl font-black leading-none"
          >
        <span className="block text-white">LIQUID</span>
        <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
          ARTISTRY
        </span>
      </motion.h1>
      
        <motion.p
            variants={fadeInUp}
            className="text-2xl text-cyan-50/80 leading-relaxed max-w-4xl mx-auto"
          >
        Discover our curated collection of revolutionary beverages, where science meets artistry 
        and every sip tells a story of innovation and perfection.
      </motion.p>
    </div>
  </motion.div>
</section>


      

      {/* Mocktails Gallery Section */}
{/* Mocktails Gallery Section */}
{/* Mocktails Gallery Section */}
<section className="py-20 relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Array.from({ length: 63 })
        .map((_, index) => index + 1)
        .filter((num) => num !== 3) // 👈 Skip the 3rd image
        .map((num) => (
          <div
            key={num}
            className="group relative overflow-hidden rounded-3xl border border-zinc-800 shadow-lg"
          >
            <div className="aspect-[4/5] w-full h-auto">
              <img
                src={`/Images/mocktails/mocktail${num}.jpg`}
                alt={`Mocktail ${num}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
    </div>
  </div>
</section>




      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 relative"
      >
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30 rounded-3xl"></div>
      <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-16 text-center backdrop-blur-sm">
        
        {/* Heading - smaller on mobile */}
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
          BESPOKE{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
            CREATIONS
          </span>
        </h2>

        {/* Paragraph - more fluid */}
        <p className="text-lg sm:text-2xl text-cyan-50/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Have a vision that transcends our collection? Our master mixologists will craft 
          a completely unique beverage experience tailored to your exact specifications.
        </p>

        {/* Button - fully responsive */}
        <div className="relative group inline-block w-full sm:w-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
          <Link 
            to="/contact" 
            className="relative bg-white text-black w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black text-lg sm:text-xl transition-all duration-300 hover:scale-105 block text-center"
          >
            Contact Us Now
          </Link>
        </div>

      </div>
    </div>
  </div>
</motion.section>



      <Footer />
    </div>
  );
};

export default Products;