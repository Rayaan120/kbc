import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar, MessageSquare, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

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
      primary: ["+971 50 482 6961", "+971 58 587 9702"],
      secondary: "Available within business hours",
      color: "purple"
    },
    {
      icon: Mail,
      title: "Email Studio",
      primary: "info@kbcbeverages.com",
      secondary: "Response within business hours",
      color: "pink"
    },
    {
      icon: MapPin,
      title: "Atelier Location",
      primary: "Downtown Creative District",
      secondary: "By appointment only",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      primary: "Mon-Fri: 9AM - 8PM",
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

  return (
    <div className=" bg-black">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-zinc-900 via-black to-black transform skew-x-12 origin-top-right"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-12">
            
            
            <h1 className="text-7xl lg:text-8xl font-black leading-none">
              <span className="block text-white">START YOUR</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                JOURNEY
              </span>
            </h1>
            
            <p className="text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
              Ready to transform your vision into an extraordinary reality? 
              Let's discuss how we can create something truly unforgettable together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Floating Cards */}
      <section className="py-20 relative">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`group relative ${index % 2 === 1 ? 'lg:mt-12' : ''}`}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 text-center transform group-hover:scale-105 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${method.color}-500 to-${method.color}-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className={`relative bg-gradient-to-br from-${method.color}-500 to-${method.color}-600 p-4 rounded-2xl w-fit mx-auto`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <div className="space-y-1 mb-2">
  {Array.isArray(method.primary)
    ? method.primary.map((num, i) => (
        <a
          key={i}
          href={`tel:${num.replace(/\s+/g, '')}`} 
          className="block text-white font-medium hover:text-purple-400 transition"
        >
          {num}
        </a>
      ))
    : <a href={`tel:${method.primary.replace(/\s+/g, '')}`} className="text-white font-medium hover:text-purple-400 transition">{method.primary}</a>}
</div>

                  <p className="text-zinc-400 text-sm">{method.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Split Layout */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="space-y-12">
              <div>
                <h2 className="text-6xl font-black text-white mb-6">
                  LET'S <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">CREATE</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Share your vision with us and we'll craft a personalized proposal 
                  that brings your dream event to life.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="+971 12 345 6789"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Event Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-purple-400 font-bold">Guest Count</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Number of guests"
                    />
                  </div>
                  
                </div>
                
                <div className="space-y-2">
                  <label className="block text-purple-400 font-bold">Tell Us Your Vision</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Describe your event vision, special requirements, themes, or any specific ideas you have in mind..."
                  ></textarea>
                </div>
                
                <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
          <button
            type="submit"
            disabled={isSending}
            className="relative w-full bg-white text-black px-8 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-50"
          >
            <Send className="h-6 w-6" />
            <span>{isSending ? "Sending..." : "Send My Vision"}</span>
          </button>
        </div>

        {success === true && (
          <p className="text-green-400 font-bold mt-4">✅ Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-400 font-bold mt-4">❌ Failed to send. Try again later.</p>
        )}
      </form>
    
            </div>
            
            {/* Additional Info */}
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-white mb-8">What Happens Next?</h3>
                  <div className="space-y-6">
                    {[
                      { step: "01", title: "Immediate Response", desc: "We'll acknowledge your inquiry" },
                      { step: "02", title: "Discovery Call", desc: "30-minute consultation to understand your vision" },
                      { step: "03", title: "Custom Proposal", desc: "Detailed proposal with pricing and timeline" },
                      { step: "04", title: "Tasting Session", desc: "Private tasting to finalize your selections" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12">
                <Zap className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Emergency Events</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Need something extraordinary on short notice? Our emergency response team 
                  can create magic with as little as 48 hours notice.
                </p>
                <a 
                  href="tel:+971 50 482 6961"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Hotline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
            <h2 className="text-6xl font-black text-white mb-6">
              VISIT OUR <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ATELIER</span>
            </h2>
            
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-16">
              <div className="aspect-video bg-zinc-800 rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-20 w-20 text-purple-400 mx-auto mb-6" />
                  <p className="text-zinc-400 text-xl">Interactive Location Map</p>
                  <p className="text-zinc-500">Downtown Creative District</p>
                </div>
              </div>
              <p className="text-xl text-zinc-400 mb-8">
                Experience our creative process firsthand in our state-of-the-art mixology laboratory. 
                Private tours and tastings available by appointment.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
                Schedule Studio Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;