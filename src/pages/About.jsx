import React, { useState, useEffect } from 'react';

import { Zap, Target, Award, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
  // ✅ SLIDESHOW LOGIC (right-to-left sliding transition)
  const SlideshowImages = () => {
    const images = [
      "/Images/mocktail-1.png",
      "/Images/mocktail-2.png",
      "/Images/mocktail-3.png",
    ];

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000); // 4 seconds per slide
      return () => clearInterval(interval);
    }, [images.length]);

    const variants = {
      enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
        zIndex: 1,
      },
      exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        zIndex: 0,
      }),
    };

    return (
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Luxury Mocktail ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 100, damping: 25 },
              opacity: { duration: 0.3 },
            }}
            className="absolute w-full h-full object-cover rounded-3xl"
          />
        </AnimatePresence>

        {/* Luxury gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
      </div>
    );
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

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
<section 
  className="py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay identical to hero */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-start space-y-8 text-center lg:text-left"
      >
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none drop-shadow-lg">
            <span className="block text-white">REDEFINING</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
              LUXURY
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-cyan-50/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            KBC Beverages is a premier event planning company specializing in mobile bar services. 
            With over 10 years of expertise in hospitality, we transform venues into vibrant, 
            stylish bar experiences. From private celebrations to large-scale corporate events, 
            we deliver a seamless bar setup with premium glassware, curated decor, and only the 
            freshest ingredients. Our mission is simple: to create unforgettable moments where 
            every sip counts.
          </p>
        </div>
      </motion.div>

      {/* Right Sliding Carousel */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.3)] 
                   h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <SlideshowImages />
      </motion.div>
    </div>
  </div>
</section>


<section 
  className="relative py-24 sm:py-32 md:py-40 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Ambient background overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/95"></div>

  {/* Light energy glows */}
  <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-1/3 right-[15%] w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>

  {/* Light lines */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-300/40 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
    
    {/* Section Heading */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-24 sm:mb-32"
    >
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
        <span className="block">SIGNATURE</span>
        <span className="block bg-gradient-to-r from-cyan-200 via-teal-300 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
          EXPERIENCES
        </span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
        A curated journey through luxury mixology — every service crafted to inspire, engage, and transcend the ordinary.
      </p>
    </motion.div>

    {/* Elegant glowing timeline */}
    <div className="relative">
      {/* Central glowing line (left on mobile, center on desktop) */}
      <div className="absolute left-6 sm:left-10 lg:left-1/2 lg:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent rounded-full opacity-60"></div>

      <div className="space-y-20 sm:space-y-24">
        {[
          { title: "Molecular Mixology", desc: "Scientific artistry that redefines how flavor and chemistry intertwine." },
          { title: "Luxury Bar Design", desc: "Architectural elegance meets experiential storytelling through every pour." },
          { title: "Event Artistry", desc: "Immersive beverage narratives tailored for mood, light, and theme." },
          { title: "Corporate Catering", desc: "Precision-driven service, customized for sophisticated business gatherings." },
          { title: "Wedding Experiences", desc: "Romantic compositions designed to mirror the harmony of love and taste." },
          { title: "Private Soirées", desc: "Intimate, curated moments brought to life with creative finesse." },
          { title: "Brand Launches", desc: "Signature drink concepts that embody your brand’s vision and allure." },
          { title: "Luxury Equipment Rental", desc: "Elevating presentation through refined glassware, barware, and design." },
          { title: "Mobile Bar Catering (Private & Corporate)", desc: "Full-service bar experience for any occasion." },
          { title: "Welcome Drink & Signature Cocktails", desc: "Customized drinks that set the tone for your event." },
          { title: "Masterclasses & Mixology Experiences", desc: "Hands-on sessions guided by expert bartenders." },
          { title: "Consultancy Services", desc: "From menu design to bar setup optimization." },
          { title: "Equipment & Glassware Rental", desc: "Premium materials and glassware for your events." },
        ].map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 ${
              i % 2 === 0 ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Connector glow dot (left on mobile, center on desktop) */}
            <div className="absolute left-6 sm:left-10 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.5)]"></div>

            {/* Text blocks */}
            <div
              className={`relative pl-12 sm:pl-16 lg:pl-0 w-full lg:w-1/2 text-left space-y-3 ${
                i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug tracking-tight bg-gradient-to-r from-cyan-200 to-teal-300 bg-clip-text text-transparent">
                {exp.title}
              </h3>
              <p className="text-base sm:text-lg text-cyan-100/80 leading-relaxed max-w-md">
                {exp.desc}
              </p>
            </div>

            {/* Floating line (desktop only) */}
            <div
              className="hidden lg:block w-1/2 h-[1px] bg-gradient-to-r from-cyan-400/40 via-transparent to-transparent"
              style={{ transform: i % 2 === 0 ? "rotate(180deg)" : "none" }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>



      



{/* Values Section - Flowing Anchors */}
<section 
  className="py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay identical to hero */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    {/* Section Title */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-20"
    >
      <h2 className="text-6xl font-black text-white mb-6">
        CORE{" "}
        <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
          VALUES
        </span>
      </h2>
      <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
        The principles that drive every decision, every creation, every moment we craft
      </p>
    </motion.div>

    {/* Values Grid */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <value.icon className="h-10 w-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-white mb-3">{value.title}</h3>
          <p className="text-lg text-cyan-50/80 leading-relaxed">{value.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>



   {/* Company Culture Section */}
     <section 
  className="py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay identical to hero */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    {/* Section Heading */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-20"
    >
      <h2 className="text-6xl font-black text-white mb-6">
        COMPANY{" "}
        <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
          CULTURE
        </span>
      </h2>
      <p className="text-xl text-cyan-50/80 max-w-3xl mx-auto">
        Built on passion, driven by innovation, united by excellence
      </p>
    </motion.div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {[
          {
            title: "Innovation First",
            description:
              "We constantly push boundaries, experimenting with new techniques and ingredients to create beverages that have never been seen before.",
          },
          {
            title: "Artisan Craftsmanship",
            description:
              "Every beverage is handcrafted by master mixologists who treat each creation as a work of art, ensuring perfection in every detail.",
          },
          {
            title: "Client Partnership",
            description:
              "We don't just serve clients; we partner with them to understand their vision and exceed their expectations at every turn.",
          },
        ].map((culture, index) => (
          <div key={index} className="flex items-start space-x-6 group">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{culture.title}</h3>
              <p className="text-cyan-50/80 leading-relaxed">{culture.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Right Image Block */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex items-stretch"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(0,255,255,0.3)] h-full">
          <img
            src="/Images/team-culture.jpg"
            alt="KBC Team Culture"
            loading="lazy"
            className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-out hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
        </div>
      </motion.div>
    </div>
  </div>
</section>





      

      

     {/* CTA Section */}
     <section
  className="py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Hero-style black smoky overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
    <div className="space-y-12">
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-snug">
        ELEVATE YOUR <br />
        <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
          EVENT EXPERIENCE
        </span>
      </h2>

      <p className="text-2xl text-cyan-50/80 max-w-3xl mx-auto leading-relaxed">
        Transform your celebration into a luxury experience. From intimate soirées 
        to grand corporate events — KBC Beverages crafts moments your guests will never forget.
      </p>

      <div className="relative group inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <Link
          to="/contact"
          className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto"
        >
          <span>Book Your Experience</span>
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