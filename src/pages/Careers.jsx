import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Users, Award, Heart, Zap } from 'lucide-react';

const Careers = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Mixologist",
      department: "Operations",
      location: "Downtown Creative District",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      experience: "5+ years",
      description: "Lead our molecular mixology team and create innovative beverage experiences for premium events.",
      requirements: [
        "5+ years professional mixology experience",
        "Knowledge of molecular gastronomy techniques",
        "Experience with high-end events and catering",
        "Creative flair and attention to detail",
        "Leadership and team management skills"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Health, dental, and vision insurance",
        "Professional development opportunities",
        "Creative freedom in recipe development",
        "Work with premium ingredients and equipment"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Event Coordinator",
      department: "Client Services",
      location: "Downtown Creative District",
      type: "Full-time",
      salary: "$45,000 - $60,000",
      experience: "3+ years",
      description: "Coordinate luxury events and ensure flawless execution of our premium beverage services.",
      requirements: [
        "3+ years event planning experience",
        "Excellent communication and organizational skills",
        "Experience with luxury/high-end events",
        "Ability to work under pressure",
        "Strong attention to detail"
      ],
      benefits: [
        "Competitive salary package",
        "Flexible working arrangements",
        "Professional development budget",
        "Team building events",
        "Performance-based bonuses"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote/Hybrid",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      experience: "2+ years",
      description: "Drive our brand presence and create compelling content that showcases our premium beverage artistry.",
      requirements: [
        "2+ years marketing experience",
        "Social media and content creation skills",
        "Photography/videography experience preferred",
        "Understanding of luxury brand marketing",
        "Creative and strategic thinking"
      ],
      benefits: [
        "Remote/hybrid work options",
        "Creative project opportunities",
        "Professional equipment provided",
        "Conference and training budget",
        "Stock options available"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Junior Bartender",
      department: "Operations",
      location: "Downtown Creative District",
      type: "Part-time/Full-time",
      salary: "$35,000 - $45,000",
      experience: "1+ years",
      description: "Join our team and learn advanced mixology techniques while serving at premium events.",
      requirements: [
        "1+ years bartending experience",
        "Passion for craft cocktails and mixology",
        "Excellent customer service skills",
        "Willingness to learn new techniques",
        "Flexible schedule availability"
      ],
      benefits: [
        "Comprehensive training program",
        "Career advancement opportunities",
        "Tips and performance bonuses",
        "Learn from industry experts",
        "Flexible scheduling"
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage plus wellness programs"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with team events and recognition programs"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Work with cutting-edge techniques and premium equipment"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every creation and interaction",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with creative techniques and presentations",
      icon: "🚀"
    },
    {
      title: "Collaboration",
      description: "Working together to create extraordinary experiences",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "Supporting each team member's professional development",
      icon: "📈"
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
      {/* Hero Section */}
     <section className="pt-20 pb-32 relative overflow-hidden">
  <div className="absolute inset-0">
    
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 via-cyan-600/20 to-blue-600/30"></div>

    
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
  </div>
  
  
    <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center space-y-12"
        >
          <motion.h1 variants={fadeInUp} className="text-7xl lg:text-8xl font-black leading-none">
        <span className="block text-white">CRAFT YOUR</span>
        <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
          CAREER
        </span>
      </motion.h1>
      
       <motion.p
            variants={fadeInUp}
            className="text-2xl text-cyan-50/80 leading-relaxed max-w-4xl mx-auto"
          >
        Join a team of passionate artisans who are redefining luxury beverage experiences. 
        Build your career in an environment that values creativity, innovation, and excellence.
      </motion.p>
    </motion.div>
  
</section>

      

      {/* Job Openings - Unique Layout */}
 {/* Job Openings - Unique Layout */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              OPEN <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">POSITIONS</span>
            </h2>
       <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
        At the moment, we don’t have any open positions.  
        Our team is complete for now — but exciting opportunities are on the horizon.  
        Please check back soon, or follow us to stay updated when new roles become available.
      </p>

      <div className="mt-12">
        <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg">
  New opportunities coming soon
</span>

      </div>
    </div>
  </div>
</section>

      

      

      <Footer />
    </div>
  );
};

export default Careers;