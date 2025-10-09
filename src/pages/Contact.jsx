import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });
const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      "service_wpyjduc",
      "template_69vv5id",
      formData,
      "_MaMl2caEo5gsW8HH"
    )
    .then((response) => {
  console.log("SUCCESS!", response.status, response.text);
  setSuccess(true);
  setFormData({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  // Hide message after 2 seconds
  setTimeout(() => setSuccess(null), 3000);
})
.catch((err) => {
  console.error("FAILED...", err);
  setSuccess(false);

  // Hide message after 2 seconds
  setTimeout(() => setSuccess(null), 3000);
})

    .finally(() => setIsSending(false));
  };

  const contactMethods = [
   {
  icon: Phone,
  title: "Direct Line",
  primary: ["+971 50 482 6961", "+971 55 123 4567"], // ✅ added second number here
  secondary: "Available within business hours",
  color: "purple"
},

    {
  icon: Mail,
  title: "Email Studio",
  primary: ["info@kbcbeverages.com", "support@kbcbeverages.com"], // ✅ added new email
  secondary: "Response within business hours",
  color: "pink"
},

    {
      icon: MapPin,
      title: "Atelier Location",
      primary: "International City",
      secondary: "By appointment only",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      primary: "Mon-Sat: 9AM - 6PM",
      secondary: "Weekends: By arrangement",
      color: "amber"
    }
  ];

  const eventTypes = [
    "Corporate Gala",
    "Wedding Celebration",
    "Private Party",
    "Product Launch",
    "Anniversary",
    "Birthday Celebration",
    "Holiday Event",
    "Custom Experience"
  ];

  const budgetRanges = [
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+"
  ];
 const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  return (

     <div className="pt-24 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 min-h-screen">
      {/* Hero Section */}
      <section 
  className="pt-20 pb-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center space-y-12"
  >
    <motion.h1 
      variants={fadeInUp} 
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none drop-shadow-lg"
    >
      <span className="block text-white">START YOUR</span>
      <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-blue-200 bg-clip-text text-transparent">
        JOURNEY
      </span>
    </motion.h1>

    <p className="text-2xl text-cyan-50/80 leading-relaxed max-w-4xl mx-auto">
      Ready to transform your vision into an extraordinary reality? 
      Let’s discuss how we can create something truly unforgettable together.
    </p>
  </motion.div>
</section>


       {/* Contact Methods - Floating Cards */}
     <section 
  className="py-20 relative overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Images/smoke.png')" }}
>
  {/* Black smoky overlay for consistency */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90"></div>

  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contactMethods.map((method, index) => (
        <div key={index} className="group relative">
          {/* Outer glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-cyan-300/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Card content */}
          <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 text-center transform group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-cyan-400 to-teal-500 p-4 rounded-2xl w-fit mx-auto">
                <method.icon className="h-8 w-8 text-white" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
           <div className="space-y-1">
  {Array.isArray(method.primary) ? (
    method.primary.map((num, i) => (
      <p
        key={i}
        className="text-white font-medium mb-1"
      >
        {num}
      </p>
    ))
  ) : (
    <p className="text-white font-medium mb-1">{method.primary}</p>
  )}
</div>

            <p className="text-cyan-100/70 text-sm">{method.secondary}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Contact Form & Info - Split Layout */}
   <section className="py-32 relative overflow-hidden">
  {/* === Background (same smoky black tone as hero) === */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-3xl"></div>
  </div>

  {/* === Content === */}
  <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      
      {/* Left — Contact Form */}
      <div className="space-y-12">
        <div>
          <h2 className="text-6xl font-black text-white mb-6">
            LET’S <span className="bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">CREATE</span>
          </h2>
          <p className="text-xl text-cyan-50/80 leading-relaxed">
            Share your vision with us and we’ll craft a personalized proposal 
            that brings your dream event to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Contact + Event Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Event Type</label>
             <select
  name="eventType"
  value={formData.eventType}
  onChange={handleChange}
  className="w-full bg-black/40 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-md appearance-none"
  style={{
    colorScheme: 'dark',
  }}
>

                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Name + Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Please Name Your Event</label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="e.g., Summer Soirée 2025"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Event Style</label>
              <input
                type="text"
                name="eventStyle"
                value={formData.eventStyle}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Elegant, Tropical, Modern, etc."
              />
            </div>
          </div>

          {/* Date, Time & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Address & Postal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Delivery Address</label>
              <input
                type="text"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Event venue address"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-cyan-200 font-bold">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="12345"
              />
            </div>
          </div>

          {/* Other Requirements */}
          <div className="space-y-2">
            <label className="block text-cyan-200 font-bold">Other Requirements</label>
            <textarea
              name="otherRequirements"
              value={formData.otherRequirements}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
              placeholder="Any additional needs, logistics, or preferences..."
            ></textarea>
          </div>

          {/* Referral Source */}
          <div className="space-y-2">
            <label className="block text-cyan-200 font-bold">How Did You Hear About Us?</label>
           <select
  name="referralSource"
  value={formData.referralSource}
  onChange={handleChange}
  className="w-full bg-black/40 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 
             focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 
             backdrop-blur-md appearance-none"
  style={{
    colorScheme: 'dark', // forces dark dropdown theme
  }}
>

              <option value="">Select one</option>
              <option value="Instagram">Instagram</option>
              <option value="Google Search">Google Search</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Event Planner">Event Planner</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-cyan-200 font-bold">Tell Us Your Vision</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-cyan-100/50 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 backdrop-blur-sm"
              placeholder="Describe your event vision, special requirements, or ideas..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            <button
              type="submit"
              disabled={isSending}
              className="relative w-full bg-white text-black px-8 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-50"
            >
              <Send className="h-6 w-6" />
              <span>{isSending ? "Sending..." : "Send My Vision"}</span>
            </button>
          </div>

          {/* Status Messages */}
          {success === true && (
            <p className="text-green-400 font-bold mt-4">✅ Message sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-400 font-bold mt-4">❌ Failed to send. Try again later.</p>
          )}
        </form>
      </div>

      {/* Right — What Happens Next */}
      <div className="space-y-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/10 border border-white/20 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-8">What Happens Next?</h3>
            <div className="space-y-6">
              {[
                { step: "01", title: "Immediate Response", desc: "We’ll acknowledge your inquiry within 2 hours." },
                { step: "02", title: "Discovery Call", desc: "A 30-minute consultation to understand your vision." },
                { step: "03", title: "Custom Proposal", desc: "A detailed proposal with pricing and timeline." },
                { step: "04", title: "Tasting Session", desc: "Private tasting to finalize your selections." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-cyan-100/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <a
  href="https://wa.me/971504826961"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center z-50 transition-colors duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="h-6 w-6" />
</a>
</section>

     
      <Footer />
    </div>
  );
};

export default Contact;