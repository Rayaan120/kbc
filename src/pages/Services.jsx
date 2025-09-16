import React from 'react';
import { Building, Heart, Users, Zap, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Corporate Excellence",
      description: "Transform business events into memorable experiences that impress clients and motivate teams",
      features: ["Executive mixology sessions", "Branded beverage creation", "Professional presentation", "Full-service setup"],
      price: "From $25/person",
      color: "purple",
      popular: false
    },
    {
      icon: Heart,
      title: "Wedding Luxury",
      description: "Create magical moments with bespoke beverage experiences for your special day",
      features: ["Signature couple cocktails", "Ceremony refreshments", "Reception bar service", "Late-night treats"],
      price: "From $35/person",
      color: "pink",
      popular: true
    },
    {
      icon: Users,
      title: "Private Celebrations",
      description: "Elevate intimate gatherings with personalized beverage artistry",
      features: ["Custom menu design", "Interactive mixology", "Premium ingredients", "Themed presentations"],
      price: "From $30/person",
      color: "blue",
      popular: false
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$1,200",
      duration: "4 hours",
      guests: "Up to 30",
      features: [
        "3 signature beverages",
        "Professional bartender",
        "Premium glassware",
        "Basic setup & cleanup",
        "Standard garnishes"
      ],
      highlight: false
    },
    {
      name: "Premium",
      price: "$2,800",
      duration: "6 hours",
      guests: "Up to 75",
      features: [
        "5 signature creations",
        "Master mixologist team",
        "Luxury presentation",
        "Molecular elements",
        "Custom menu design",
        "Full event coordination",
        "Photography included"
      ],
      highlight: true
    },
    {
      name: "Platinum",
      price: "$5,500",
      duration: "Full day",
      guests: "Up to 150",
      features: [
        "Unlimited beverage options",
        "Multiple service stations",
        "Celebrity mixologist",
        "Theatrical presentations",
        "Bespoke ingredient sourcing",
        "Complete event design",
        "Dedicated event manager",
        "Post-event consultation"
      ],
      highlight: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Vision Discovery",
      description: "Deep dive consultation to understand your event goals and preferences"
    },
    {
      step: "02",
      title: "Concept Creation",
      description: "Custom beverage menu design with unique presentations and flavors"
    },
    {
      step: "03",
      title: "Tasting Experience",
      description: "Private tasting session to perfect every element of your selection"
    },
    {
      step: "04",
      title: "Flawless Execution",
      description: "Professional service delivery that exceeds expectations"
    }
  ];

  return (
    <div className="pt-24 bg-black">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center space-y-12">
            <div className="inline-flex items-center space-x-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3">
              <Zap className="h-5 w-5 text-purple-400" />
              <span className="text-zinc-300 font-medium">Premium Services</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-black leading-none">
              <span className="block text-white">ELEVATE</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                EVERY MOMENT
              </span>
            </h1>
            
            <p className="text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
              From intimate gatherings to grand celebrations, we transform ordinary events 
              into extraordinary experiences through the art of premium beverage service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview - Asymmetric Grid */}
      <section className="py-32 relative">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative ${index === 1 ? 'lg:-mt-16' : index === 2 ? 'lg:mt-16' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center space-x-2 z-10">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 transform group-hover:scale-105 transition-all duration-500">
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className={`relative bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 p-6 rounded-2xl w-fit`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6">{service.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 text-${service.color}-400 flex-shrink-0`} />
                        <span className="text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zinc-800 pt-8">
                    <p className={`text-3xl font-black bg-gradient-to-r from-${service.color}-400 to-${service.color}-500 bg-clip-text text-transparent mb-6`}>
                      {service.price}
                    </p>
                    <button className={`w-full bg-gradient-to-r from-${service.color}-600 to-${service.color}-700 hover:from-${service.color}-700 hover:to-${service.color}-800 text-white py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105`}>
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section - Horizontal Cards */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
        
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              SERVICE <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PACKAGES</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Comprehensive solutions designed to match your event scale and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="group relative">
                {pkg.highlight && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center space-x-2 z-10">
                    <Star className="h-4 w-4" />
                    <span>Best Value</span>
                  </div>
                )}
                
                <div className={`absolute -inset-1 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  pkg.highlight 
                    ? 'bg-gradient-to-br from-purple-600/30 to-pink-600/30' 
                    : 'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
                }`}></div>
                <div className={`relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-10 transform group-hover:scale-105 transition-all duration-500 ${
                  pkg.highlight ? 'border-2 border-purple-500/50' : 'border border-zinc-800'
                }`}>
                  <div className="text-center mb-10">
                    <h3 className="text-4xl font-black text-white mb-4">{pkg.name}</h3>
                    <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                      {pkg.price}
                    </div>
                    <div className="space-y-2 text-zinc-400">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{pkg.guests}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <span className="text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  }`}>
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              OUR <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">PROCESS</span>
            </h2>
            <p className="text-xl text-zinc-400">From concept to celebration, every step is crafted to perfection</p>
          </div>
          
          <div className="space-y-16">
            {process.map((step, index) => (
              <div key={index} className="flex items-center space-x-12 group">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black">
                      {step.step}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-12">
            <h2 className="text-7xl font-black text-white leading-tight">
              READY TO <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ELEVATE?
              </span>
            </h2>
            
            <p className="text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Let's create an unforgettable experience that will have your guests talking for years to come.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                <button className="relative bg-white text-black px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                  <span>Book Consultation</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              <button className="border-2 border-zinc-700 hover:border-zinc-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:bg-zinc-900">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;