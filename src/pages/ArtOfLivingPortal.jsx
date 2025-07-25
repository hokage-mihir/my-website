import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Heart, Brain, Flower2, Star, ChevronDown, ChevronRight, ExternalLink, MapPin, Home, ChevronRight as BreadcrumbChevron, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import SEOHead from '../components/SEOHead';
import OptimizedImage from '@/components/ui/optimized-image';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:h-[500px] bg-gradient-to-r from-blue-600/90 to-blue-400/90 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80" 
          alt="Peaceful mountain landscape representing inner peace" 
          className="w-full h-full object-cover opacity-30"
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
              onClick={() => window.open('https://aolt.in/894652', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
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

// Programs Showcase Component
const ProgramsShowcase = () => {
  const programs = [
    {
      title: "Happiness Program",
      duration: "3-6 days, 2-3 hours per day",
      description: "Learn powerful breathing techniques, gain practical wisdom, and experience guided meditations.",
      benefits: ["Stress elimination", "Better sleep", "Improved focus", "Enhanced relationships"],
      level: "Ages 18+",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
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
      comingSoon: true
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
                    {program.comingSoon ? (
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
                          onClick={() => window.open(program.registrationLink, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Register Now
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

// Upcoming Schedule Component
const UpcomingSchedule = () => {
  const upcomingPrograms = [
    {
      title: "Happiness Program",
      dates: "24th to 27th July, 2025",
      time: "7:00 PM - 9:30 PM",
      location: "Mulund, Mumbai",
      type: "In-person",
      spotsLeft: 18,
      registrationLink: "https://aolt.in/894652"
    }
  ];

  return (
    <section className="py-16 bg-white">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
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
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Spots remaining</div>
                      <div className="text-lg font-bold text-green-600">{program.spotsLeft}</div>
                    </div>
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
            onClick={() => window.open('https://aolt.in/894652', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Registration Page
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

// Call to Action Component
const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who have discovered inner peace, better health, and lasting happiness. 
            Your transformation begins with a single breath.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3"
              onClick={() => window.open('https://aolt.in/894652', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Register for Next Program
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
        ogImage="https://mihirchavan.in/og-image.jpg"
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