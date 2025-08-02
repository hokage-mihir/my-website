import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Heart, Brain, Flower2, Star, ChevronDown, ChevronRight, ExternalLink, MapPin, Home, ChevronRight as BreadcrumbChevron, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import SEOHead from '../components/SEOHead';
import OptimizedImage from '@/components/ui/optimized-image';
import aolProgramsData from '../data/aol-programs.json';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:h-[500px] bg-gradient-to-r from-blue-600/90 to-blue-400/90 text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* Optimized local image - replaced external Unsplash CDN for better performance */}
        <OptimizedImage 
          src="/hero-mountains-peace.jpg" 
          alt="Peaceful mountain landscape representing inner peace" 
          className="w-full h-full object-cover opacity-30"
          width="1200"
          height="800"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-400/40" />
      </div>
      
      <Container className="relative h-full flex items-center justify-center py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm sm:text-base mb-6" aria-label="Breadcrumb">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-blue-200/80 hover:text-white transition-colors duration-200 group"
                aria-label="Return to Mihir Chavan's main website"
              >
                <Home className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Mihir Chavan</span>
                <span className="sm:hidden">Home</span>
              </Link>
              <BreadcrumbChevron className="h-4 w-4 mx-2 text-blue-300/60" />
              <span className="text-yellow-300 font-medium">Art of Living</span>
            </div>
          </nav>
          
          <div className="flex items-center mb-4">
            <Flower2 className="h-8 w-8 mr-3 text-yellow-300" />
            <span className="text-yellow-300 font-medium">Art of Living Programs</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Life with 
            <span className="text-yellow-300"> Ancient Wisdom</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Join millions worldwide who have discovered inner peace, improved health, 
            and deeper happiness through proven breathing techniques and meditation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3"
              onClick={() => {
                const upcomingSection = document.getElementById('upcoming-programs');
                upcomingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Upcoming Programs
            </Button>
            {/* <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 transition-all duration-200 px-8 py-3"
              onClick={() => window.open('VIDEO_URL_HERE', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Introduction
            </Button> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Teacher Introduction Component
const TeacherIntroduction = () => {
  return (
    <section className="py-16 bg-blue-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                <OptimizedImage 
                  src="/profile.png" 
                  alt="Mihir Chavan - Certified Art of Living Teacher and Program Facilitator" 
                  className="w-full h-full object-cover"
                  width="256"
                  height="256"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 rounded-full p-3 shadow-lg">
                <Flower2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Your Guide to Inner Transformation
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a certified Art of Living teacher, I have the privilege of sharing these 
              life-transforming techniques with individuals and groups. Having personally 
              experienced the profound benefits of these practices, I am passionate about 
              helping others discover their own path to inner peace and joy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-700">Certified Art of Living Teacher</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Programs every month</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-700">Focus on Holistic Wellbeing</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">Weekly Follow-ups</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Programs Showcase Component - Links static program cards with dynamic Excel data
const ProgramsShowcase = () => {
  // Helper function to extract area and city from address using pincode as anchor point
  const getAreaCity = (address, city) => {
    if (!address) return city || '';
    
    // Extract area from address using pincode as anchor
    const addressParts = address.split(',').map(part => part.trim()).filter(part => part.length > 0);
    
    // Find pincode (6 digits)
    const pincodeIndex = addressParts.findIndex(part => /\b\d{6}\b/.test(part));
    
    let area = '';
    
    // First, try to find areas with directional indicators anywhere in the address
    for (let i = 0; i < addressParts.length; i++) {
      const part = addressParts[i];
      
      // Skip unwanted parts
      if (part.toLowerCase().includes('centre') || 
          part.toLowerCase().includes('complex') ||
          part.toLowerCase() === city?.toLowerCase() ||
          part.toLowerCase().includes('maharashtra') ||
          part.toLowerCase().includes('india') ||
          /\b\d{6}\b/.test(part)) {
        continue;
      }
      
      // Look for directional areas (most reliable)
      if (part.includes('West') || part.includes('East') || part.includes('North') || part.includes('South')) {
        area = part;
        break;
      }
    }
    
    // If no directional area found, look near pincode
    if (!area && pincodeIndex > 0) {
      for (let i = Math.max(0, pincodeIndex - 5); i < pincodeIndex; i++) {
        const part = addressParts[i];
        
        // Skip unwanted parts
        if (part.toLowerCase().includes('centre') || 
            part.toLowerCase().includes('complex') ||
            part.toLowerCase() === city?.toLowerCase() ||
            part.toLowerCase().includes('maharashtra') ||
            part.toLowerCase().includes('india')) {
          continue;
        }
        
        // Take first reasonable area name
        if (part.length > 3 && !area) {
          area = part;
        }
      }
    }
    
    return area ? `${area}, ${city}` : city || '';
  };

  // Helper function to find matching programs from Excel data based on program type
  const findMatchingPrograms = (programKey) => {
    // Mapping between UI program keys and actual Excel program type names
    const typeMapping = {
      'happiness': ['Happiness Program', 'Happiness Program (3 Days)'],
      'youth': ['Happiness Program for Youth-3 Days'],
      'ombw': ['OMBW', 'Online Meditation & Breath Workshop']
    };
    
    const matchingTypes = typeMapping[programKey] || [];
    
    // Filter from upcoming programs (which already have formattedDate and are sorted by date)
    const matchingPrograms = aolProgramsData.programs.upcoming.filter(program => 
      matchingTypes.includes(program.programType)
    );
    
    return matchingPrograms;
  };

  // Helper function to get next available program for a specific program type
  const getNextProgram = (programKey) => {
    const matchingPrograms = findMatchingPrograms(programKey);
    // Return first program (earliest date) since upcoming array is already sorted
    return matchingPrograms.length > 0 ? matchingPrograms[0] : null;
  };

  const programs = [
    {
      title: "Happiness Program",
      duration: "3-6 days, 2-3 hours per day",
      description: "Learn powerful breathing techniques, gain practical wisdom, and experience guided meditations.",
      benefits: ["Stress elimination", "Better sleep", "Improved focus", "Enhanced relationships"],
      level: "Ages 18+",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      programKey: "happiness",
      registrationLink: "https://aolt.in/894652"
    },
    {
      title: "Online Meditation & Breath Workshop",
      duration: "4 days, 2 hours per day",
      description: "Introduction to Sudarshan Kriya and basic meditation techniques for daily practice.",
      benefits: ["Energy boost", "Mental clarity", "Emotional balance", "Inner peace"],
      level: "Ages 18+",
      icon: Brain,
      color: "from-blue-500 to-indigo-500",
      programKey: "ombw",
      comingSoon: true
    },
    {
      title: "Youth Programs",
      duration: "3-6 days, 2-3 hours per day",
      description: "Specially designed for young adults to handle academic pressure and life challenges.",
      benefits: ["Confidence building", "Stress management", "Better relationships", "Goal clarity"],
      level: "Ages 18-35",
      icon: Users,
      color: "from-green-500 to-teal-500",
      programKey: "youth",
      comingSoon: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of programs designed to meet you wherever you are 
            in your journey towards greater wellbeing and inner peace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            const nextProgram = getNextProgram(program.programKey);
            const hasAvailableProgram = nextProgram && !program.comingSoon;
            const registrationUrl = hasAvailableProgram ? `https://${nextProgram.registrationUrl}` : program.registrationLink;
            
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-blue-600">
                    {program.duration} • {program.level}
                  </CardDescription>
                  
                  {/* Show next available program info if exists */}
                  {hasAvailableProgram && (
                    <div className="mt-3 p-2 bg-green-50 rounded-lg">
                      <div className="text-xs font-semibold text-green-800">Next Session Available</div>
                      <div className="text-xs text-green-700">
                        {nextProgram.formattedDate} • {getAreaCity(nextProgram.address, nextProgram.city)}
                      </div>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    {program.comingSoon && !hasAvailableProgram ? (
                      <>
                        <Button 
                          className="w-full bg-gray-400 cursor-not-allowed"
                          disabled
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          onClick={() => window.open(`https://wa.me/918369790166?text=I%20want%20to%20know%20more%20about%20the%20${program.title}%20and%20when%20it%20will%20be%20available`, '_blank')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Get Notified
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => window.open(registrationUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {hasAvailableProgram && nextProgram?.formattedDate ? `Register: ${nextProgram.formattedDate}` : 'Register Now'}
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          onClick={() => window.open(`https://wa.me/918369790166?text=I%20want%20to%20know%20more%20about%20the%20${program.title}`, '_blank')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          WhatsApp for Details
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

// Benefits Section with Tabs
const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState('physical');
  
  const benefitsData = {
    physical: {
      title: "Physical Benefits",
      icon: Heart,
      benefits: [
        "Reduced stress hormones (cortisol)",
        "Improved cardiovascular health",
        "Better sleep quality",
        "Enhanced immune system function",
        "Increased energy levels",
        "Pain reduction and management"
      ]
    },
    mental: {
      title: "Mental Benefits", 
      icon: Brain,
      benefits: [
        "Improved focus and concentration",
        "Enhanced memory and learning",
        "Reduced anxiety and depression",
        "Better emotional regulation",
        "Increased mental clarity",
        "Enhanced creativity and intuition"
      ]
    },
    spiritual: {
      title: "Spiritual Benefits",
      icon: Flower2,
      benefits: [
        "Deeper sense of inner peace",
        "Greater self-awareness",
        "Enhanced sense of purpose",
        "Improved relationships",
        "Increased compassion and empathy",
        "Connection to inner wisdom"
      ]
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Scientifically Proven Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Art of Living techniques have been researched extensively and shown to provide 
            measurable improvements across physical, mental, and spiritual dimensions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              {Object.entries(benefitsData).map(([key, data]) => {
                const IconComponent = data.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center px-6 py-3 rounded-md transition-colors ${
                      activeTab === key 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    {data.title}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Tab Content */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    {benefitsData[activeTab].title}
                  </h3>
                  <ul className="space-y-4">
                    {benefitsData[activeTab].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Research Highlights:</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>• Studies show 87% reduction in stress levels after program completion</p>
                    <p>• Participants report 73% improvement in sleep quality</p>
                    <p>• Significant increase in positive emotions and life satisfaction</p>
                    <p>• Programs practiced in 180+ countries worldwide</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

// Upcoming Schedule Component - Displays dynamic programs from Excel data
const UpcomingSchedule = () => {
  // Helper function to extract area and city from address using pincode (same logic as ProgramsShowcase)
  const getAreaCity = (address, city) => {
    if (!address) return city || '';
    
    // Extract area from address using pincode as anchor
    const addressParts = address.split(',').map(part => part.trim()).filter(part => part.length > 0);
    
    // Find pincode (6 digits)
    const pincodeIndex = addressParts.findIndex(part => /\b\d{6}\b/.test(part));
    
    let area = '';
    
    // First, try to find areas with directional indicators anywhere in the address
    for (let i = 0; i < addressParts.length; i++) {
      const part = addressParts[i];
      
      // Skip unwanted parts
      if (part.toLowerCase().includes('centre') || 
          part.toLowerCase().includes('complex') ||
          part.toLowerCase() === city?.toLowerCase() ||
          part.toLowerCase().includes('maharashtra') ||
          part.toLowerCase().includes('india') ||
          /\b\d{6}\b/.test(part)) {
        continue;
      }
      
      // Look for directional areas (most reliable)
      if (part.includes('West') || part.includes('East') || part.includes('North') || part.includes('South')) {
        area = part;
        break;
      }
    }
    
    // If no directional area found, look near pincode
    if (!area && pincodeIndex > 0) {
      for (let i = Math.max(0, pincodeIndex - 5); i < pincodeIndex; i++) {
        const part = addressParts[i];
        
        // Skip unwanted parts
        if (part.toLowerCase().includes('centre') || 
            part.toLowerCase().includes('complex') ||
            part.toLowerCase() === city?.toLowerCase() ||
            part.toLowerCase().includes('maharashtra') ||
            part.toLowerCase().includes('india')) {
          continue;
        }
        
        // Take first reasonable area name
        if (part.length > 3 && !area) {
          area = part;
        }
      }
    }
    
    return area ? `${area}, ${city}` : city || '';
  };

  // Transform upcoming programs from parsed Excel data for display
  const upcomingPrograms = aolProgramsData.programs.upcoming.map(program => ({
    title: program.programType,
    dates: program.formattedDate,
    time: program.startTime,
    location: getAreaCity(program.address, program.city), // Extract clean area name
    address: program.address, // Keep full address for tooltip/details
    type: "In-person",
    registrationLink: `https://${program.registrationUrl}`, // Direct AOL portal link
    teachers: program.teachers.slice(0, 3), // Show first 3 teachers for space
    id: program.id
  }));

  return (
    <section id="upcoming-programs" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Upcoming Programs</h2>
          <p className="text-xl text-gray-600">Join our next session and begin your transformation journey</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        program.type === 'Virtual' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {program.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        {program.dates}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        {program.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        {program.location}
                      </div>
                    </div>
                    
                    {/* Show address if available */}
                    {program.address && (
                      <div className="text-xs text-gray-500 mb-2">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {program.address}
                      </div>
                    )}
                    
                    {/* Show teachers if available */}
                    {program.teachers && program.teachers.length > 0 && (
                      <div className="text-xs text-gray-600">
                        <Users className="h-3 w-3 inline mr-1" />
                        Teachers: {program.teachers.map(t => t.name).join(', ')}
                        {program.teachers.length === 3 && ' and more...'}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(program.registrationLink || 'https://aolt.in/894652', '_blank')}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            data-tally-open="w2oP4D"
            data-tally-layout="modal"
            data-tally-width="600"
            data-tally-emoji-text="🌟"
            data-tally-emoji-animation="wave"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Program Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
};

// Testimonials Component
const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <Container>
        {/*<div className="text-center mb-12">
           <h2 className="text-4xl font-bold mb-4 text-gray-900">Life-Changing Experiences</h2>
         <p className="text-xl text-gray-600">Hear from participants who have transformed their lives</p>
        </div>
        
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">450M+</div>
                <div className="text-gray-600">People Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">180+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">40+</div>
                <div className="text-gray-600">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// FAQ Component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "Do I need any prior meditation experience?",
      answer: "Not at all! Our programs are designed for complete beginners. We start with the basics and guide you step by step through each technique."
    },
    {
      question: "How much time do I need to commit daily?",
      answer: "The daily practice takes about 20-30 minutes. Daily practice can provide significant benefits."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Our general programs are suitable for ages 18 and above. We also offer specialized youth programs and children's programs for different age groups."
    },
    {
      question: "What should I bring to the program?",
      answer: "Just bring yourself with an open mind! We provide all materials, cushions, and refreshments. Wear comfortable clothing."
    },
    {
      question: "Is this affiliated with any religion?",
      answer: "Art of Living techniques are universal and non-religious. People from all faiths and backgrounds practice these techniques together."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about getting started</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full text-left p-6 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="p-6 bg-white border border-blue-100 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Call to Action Component - Dynamic button linking to closest upcoming program
const CallToActionSection = () => {
  // Helper function to extract area and city from address using pincode (same logic as other components)
  const getAreaCity = (address, city) => {
    if (!address) return city || '';
    
    const addressParts = address.split(',').map(part => part.trim());
    const pincodeIndex = addressParts.findIndex(part => /\b\d{6}\b/.test(part));
    
    let area = '';
    if (pincodeIndex > 0) {
      for (let i = Math.max(0, pincodeIndex - 3); i < pincodeIndex; i++) {
        const part = addressParts[i];
        if (part.includes('West') || part.includes('East') || part.includes('North') || part.includes('South') || 
            (part.length > 3 && !part.toLowerCase().includes('centre') && !part.toLowerCase().includes('complex'))) {
          area = part;
        }
      }
    }
    
    if (!area) {
      for (let i = 0; i < addressParts.length; i++) {
        const part = addressParts[i];
        if (part.includes('West') || part.includes('East') || part.includes('North') || part.includes('South')) {
          area = part;
          break;
        }
        if (part.toLowerCase().includes(city?.toLowerCase() || '')) {
          area = addressParts[i - 1] || '';
          break;
        }
      }
    }
    
    return area ? `${area}, ${city}` : city || '';
  };

  // Get the closest upcoming program (first in sorted array)
  const nextProgram = aolProgramsData.programs.upcoming[0];
  
  // Fallback configuration if no programs are available
  const fallbackLink = 'https://aolt.in/894652';
  const registrationLink = nextProgram 
    ? `https://${nextProgram.registrationUrl}` 
    : fallbackLink;
  
  // Dynamic button text based on program availability
  const buttonText = nextProgram 
    ? `Register: ${nextProgram.programType}` 
    : 'Register for Next Program';
  
  // Dynamic program information display
  const programInfo = nextProgram 
    ? `${nextProgram.formattedDate} • ${getAreaCity(nextProgram.address, nextProgram.city)}`
    : 'Join our upcoming program';

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join thousands who have discovered inner peace, better health, and lasting happiness. 
            Your transformation begins with a single breath.
          </p>
          
          {/* Show next program info if available */}
          {nextProgram && (
            <div className="mb-6 p-4 bg-blue-700/30 rounded-lg inline-block">
              <div className="text-lg font-semibold text-yellow-300">
                Next Program: {nextProgram.programType}
              </div>
              <div className="text-blue-200 text-sm">
                {programInfo}
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3"
              onClick={() => window.open(registrationLink, '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {buttonText}
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 transition-all duration-200 px-8 py-3"
              onClick={() => window.open('https://artofliving.org', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Learn More About Art of Living
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            Questions? Contact me directly at contact@mihirchavan.in or call +91 83697 90166
          </div>
          
          <div className="mt-4 text-blue-200 text-sm">
            Programs conducted in English, Hindi and Marathi • Located in Mulund, Mumbai
          </div>
        </div>
      </Container>
    </section>
  );
};

// Main Art of Living Portal Component
const ArtOfLivingPortal = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Art of Living Programs | Happiness & Breathing Workshops by Mihir Chavan | Mulund, Mumbai"
        description="Join certified Art of Living programs with Mihir Chavan in Mulund, Mumbai. Experience powerful breathing techniques, meditation, and stress elimination through proven wellness practices. Programs available in English and Hindi."
        keywords="Art of Living, Happiness Program, breathing techniques, meditation, stress relief, wellness workshop, Mihir Chavan, AOL programs, Mulund Mumbai, English Hindi programs"
        ogImage="https://mihirchavan.in/og-image.svg"
      />
      <HeroSection />
      <TeacherIntroduction />
      <ProgramsShowcase />
      <BenefitsSection />
      <UpcomingSchedule />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
    </div>
  );
};

export default ArtOfLivingPortal;