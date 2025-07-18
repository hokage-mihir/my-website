import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Star, Moon, Sun, Globe, BookOpen, Award, CheckCircle, ChevronDown, ChevronRight, ExternalLink, Phone, Mail, Home, ChevronRight as BreadcrumbChevron } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import SEOHead from '../components/SEOHead';
import OptimizedImage from '@/components/ui/optimized-image';

// Hero Section Component
const HeroSection = () => {
  const handleLearnMore = () => {
    const faqSection = document.getElementById('understanding-jyotish-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] lg:h-[500px] bg-gradient-to-r from-purple-900/95 to-indigo-900/95 text-white overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2000&q=80" 
          alt="Starry night sky representing ancient Vedic wisdom and cosmic knowledge for Jyotish consultations" 
          className="w-full h-full object-cover opacity-40"
          width="2000"
          height="1200"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-indigo-900/60" />
        
        {/* Subtle star pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <Container className="relative h-full flex items-center justify-center py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm sm:text-base mb-6" aria-label="Breadcrumb">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-purple-200/80 hover:text-white transition-colors duration-200 group"
                aria-label="Return to Mihir Chavan's main website"
              >
                <Home className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Mihir Chavan</span>
                <span className="sm:hidden">Home</span>
              </Link>
              <BreadcrumbChevron className="h-4 w-4 mx-2 text-purple-300/60" />
              <span className="text-yellow-400 font-medium">Jyotish</span>
            </div>
          </nav>
          
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 mr-3 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide">Professional Vedic Astrology</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ancient Wisdom for 
            <span className="text-yellow-400"> Modern Life</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Discover clarity, purpose, and direction through the profound science of Vedic astrology. 
            Let the cosmic patterns illuminate your path forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-purple-900 font-semibold px-8 py-3"
              data-cal-link="hokagemihir/jyotish"
              aria-label="Book Jyotish consultation appointment with Mihir Chavan"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-900 transition-all duration-200 px-8 py-3"
              onClick={handleLearnMore}
              aria-label="Learn more about Jyotish and Vedic astrology services"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Learn About Jyotish
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Astrologer Introduction Component
const AstrologerIntroduction = () => {
  return (
    <section id="about-section" className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                <OptimizedImage 
                  src="/profile.png" 
                  alt="Mihir Chavan - Astro Shiromani and Astromani graduate, Professional Vedic Astrologer" 
                  className="w-full h-full object-cover"
                  width="256"
                  height="256"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-600 rounded-full p-3 shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              {/* Cosmic ring decoration */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Your Guide Through the Cosmic Map
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As an Astro Shiromani (advanced certification) and Astromani graduate from the prestigious 
              Asttrolok institute under world-renowned astrologer Shri Alok Khandelwal, I bring deep 
              expertise in traditional Vedic wisdom combined with contemporary understanding to provide 
              meaningful insights into your life's journey.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Jyotish, meaning "science of light," reveals the intricate connections between cosmic 
              patterns and human experience. Through careful analysis of planetary positions and 
              their influences, I help individuals find clarity, direction, and deeper understanding 
              of their life's purpose.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-600 mr-3" />
                <span className="text-gray-700">Astro Shiromani (Advanced) - Asttrolok</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-600 mr-3" />
                <span className="text-gray-700">Astromani Graduate - Asttrolok</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-purple-600 mr-3" />
                <span className="text-gray-700">Traditional Vedic Methods</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-indigo-600 mr-3" />
                <span className="text-gray-700">Modern Contextual Insights</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Services Showcase Component
const ServicesShowcase = () => {
  const services = [
    {
      title: "Complete Birth Chart Analysis",
      duration: "60 minutes",
      description: "A comprehensive reading of your entire birth chart, covering personality, career, relationships, health, and spiritual path.",
      includes: [
        "Detailed personality analysis",
        "Career and financial guidance", 
        "Relationship compatibility insights",
        "Health and wellness indicators",
        "Spiritual growth opportunities",
        "Timing of major life events"
      ],
      note: "No recordings will be provided",
      icon: Sun,
      price: "₹2,500",
      popular: true
    },
    {
      title: "30 min Consultation",
      duration: "30 minutes",
      description: "Focused guidance on a specific area of life - career decisions, relationship questions, or timing of important events.",
      includes: [
        "Targeted analysis for your question",
        "Practical actionable advice",
        "Timing recommendations",
        "Remedial suggestions if needed",
        "Follow-up guidance"
      ],
      note: "No recordings will be provided",
      icon: Moon,
      price: "₹1,500",
      popular: false
    },
    {
      title: "60 min Consultation for 2 People",
      duration: "60 minutes", 
      description: "Joint consultation session for couples or family members to understand compatibility and shared life paths.",
      includes: [
        "Individual chart analysis for both",
        "Compatibility assessment",
        "Relationship dynamics insights",
        "Joint life path guidance",
        "Timing for important decisions",
        "Family harmony recommendations"
      ],
      note: "No recordings will be provided",
      icon: Star,
      price: "₹3,000",
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "Kundali Preparation",
      description: "Complete birth chart preparation in PDF format",
      price: "₹500",
      note: "Soft copy (PDF)"
    },
    {
      title: "Kundali Preparation and Years Prediction",
      description: "Complete birth chart with detailed yearly predictions",
      price: "₹1000",
      note: "Comprehensive written analysis"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Consultation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the consultation that best fits your needs. Each session provides deep insights 
            tailored to your unique cosmic blueprint and current life circumstances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-2 border-yellow-400 shadow-lg' : 'border shadow-md'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-purple-700">
                    {service.duration}
                  </CardDescription>
                  <div className="text-2xl font-bold text-gray-900 mt-2">{service.price}</div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-700">
                        <strong>Please note:</strong> {service.note}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-yellow-600 hover:bg-yellow-700' 
                        : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                    data-cal-link="hokagemihir/jyotish"
                  >
                    Book This Reading
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Additional Services</h3>
            <p className="text-lg text-gray-600">
              Complementary services to enhance your astrological journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-600">{service.price}</div>
                      <div className="text-xs text-gray-500">{service.note}</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    data-tally-open={service.title === "Kundali Preparation" ? "kundali-form" : "year-report-form"}
                    data-tally-layout="modal"
                    data-tally-width="600"
                    data-tally-emoji-text="🌟"
                    data-tally-emoji-animation="wave"
                  >
                    Request Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Consultation Process Component
const ConsultationProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Book Your Session",
      description: "Choose your consultation type and select a convenient time slot through our booking system.",
      icon: Calendar
    },
    {
      step: "2", 
      title: "Provide Birth Details",
      description: "Share your accurate birth date, time, and location. Precision is crucial for accurate chart calculation.",
      icon: Star
    },
    {
      step: "3",
      title: "Prepare Your Questions",
      description: "Think about the areas of life you'd like guidance on. Come with an open mind and specific questions.",
      icon: BookOpen
    },
    {
      step: "4",
      title: "Your Consultation",
      description: "We'll explore your chart together, discussing insights, patterns, and guidance for your path forward.",
      icon: Globe
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">The Consultation Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, respectful approach to accessing ancient wisdom for modern guidance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <IconComponent className="h-5 w-5 text-purple-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-purple-100 border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Important Note</h3>
                <p className="text-purple-800">
                  All consultations are conducted with the highest respect for Vedic traditions and your privacy. 
                  Birth time accuracy within 5-10 minutes provides the most precise insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

// About Jyotish Section
const AboutJyotishSection = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  
  const sections = [
    {
      title: "What is Jyotish?",
      content: "Jyotish, literally meaning 'science of light,' is the ancient Vedic system of astrology that has been practiced for over 5,000 years. Unlike Western astrology, Jyotish uses the sidereal zodiac and focuses on karma, dharma, and the soul's evolutionary journey."
    },
    {
      title: "How is it Different from Western Astrology?",
      content: "Jyotish uses the fixed star positions (sidereal zodiac) rather than the tropical zodiac, includes lunar mansions (nakshatras), emphasizes predictive techniques, and integrates spiritual philosophy with practical guidance for living in harmony with cosmic rhythms."
    },
    {
      title: "What Can a Reading Reveal?",
      content: "A Jyotish reading can provide insights into your personality, career path, relationship patterns, health tendencies, spiritual inclinations, karmic lessons, favorable periods for important decisions, and guidance for personal growth and fulfillment."
    },
    {
      title: "Is This Compatible with My Beliefs?",
      content: "Jyotish is a spiritual science that respects all belief systems. It doesn't conflict with any religion and can complement your existing spiritual practices. The focus is on understanding cosmic patterns and making conscious choices for your highest good."
    }
  ];

  return (
    <section id="understanding-jyotish-section" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Understanding Jyotish</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about this ancient science and how it can provide meaningful guidance for your life
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                className="w-full text-left p-6 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 rounded-lg transition-colors border border-purple-100"
                aria-expanded={expandedSection === index}
                aria-controls={`section-${index}`}
                aria-label={`Toggle ${section.title} section`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 text-lg">{section.title}</h3>
                  {expandedSection === index ? (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-purple-600" />
                  )}
                </div>
              </button>
              
              {expandedSection === index && (
                <div 
                  id={`section-${index}`}
                  className="p-6 bg-white border border-purple-100 rounded-b-lg"
                  role="region"
                  aria-labelledby={`section-title-${index}`}
                >
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            onClick={() => window.open('https://www.asttrolok.com/', '_blank')}
            aria-label="Learn more about Vedic astrology at Asttrolok Institute"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Learn More About Vedic Astrology
          </Button>
        </div>
      </Container>
    </section>
  );
};

// Testimonials Component
const TestimonialsSection = () => {
  // Testimonials data - currently disabled but ready for implementation
  // const testimonials = [
  //   {
  //     name: "Priya K.",
  //     role: "Software Manager",
  //     content: "The insights from my birth chart reading helped me understand my career struggles and gave me clarity on the right path forward. The timing predictions were remarkably accurate.",
  //     rating: 5,
  //     category: "Career Guidance"
  //   },
  //   {
  //     name: "Rajesh M.",
  //     role: "Entrepreneur", 
  //     content: "I was skeptical at first, but the consultation provided incredible insights into my relationship patterns and helped me make better decisions in my personal life.",
  //     rating: 5,
  //     category: "Relationship Insights"
  //   },
  //   {
  //     name: "Ananya S.",
  //     role: "Creative Professional",
  //     content: "The annual forecast reading helped me plan my year strategically. Understanding the cosmic trends gave me confidence in timing major decisions.",
  //     rating: 5,
  //     category: "Life Planning"
  //   }
  // ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
    {/*  <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What People have to say</h2>
          <p className="text-xl text-gray-600">Insights that have made a meaningful difference</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Privacy & Confidentiality</h3>
            <p className="text-gray-700">
              All consultations are conducted with complete confidentiality. Your personal information 
              and reading details are never shared. Testimonials are shared only with explicit permission 
              and often anonymized to protect privacy.
            </p>
          </div>
        </div>
      </Container> */}
    </section>
  );
};

// Booking Section
const BookingSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Explore Your Cosmic Blueprint?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward greater clarity and understanding. Book your consultation 
            and discover what the stars reveal about your unique path.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Calendar */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book Your Consultation</CardTitle>
                <CardDescription className="text-center">
                  Select your preferred consultation type and time
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
                    data-cal-link="hokagemihir/jyotish"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Button>
                  
                  <div className="text-sm text-gray-600">
                    Choose from Birth Chart Analysis, 30 min Consultation, or Couples Reading
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Consultation Hours:</strong> Weekdays: 7-9 PM | Weekends: 11 AM-7 PM IST</p>
                  <p><strong>Availability:</strong> By prior appointment only</p>
                  <p><strong>Languages:</strong> English, Hindi, Marathi</p>
                  <p className="text-xs text-gray-500 italic">*Hours subject to change without prior notice</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Have Questions?</CardTitle>
                <CardDescription className="text-center">
                  Get in touch before booking your consultation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <div className="font-medium">Phone Consultation Available</div>
                      <div className="text-sm text-gray-600">+91 83697 90166</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Call to discuss consultation options
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <div className="font-medium">Email Inquiries</div>
                      <div className="text-sm text-gray-600">contact@mihirchavan.in</div>
                      <div className="text-xs text-gray-500 mt-1">
                        For detailed questions about consultation process
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-2">Birth Information Needed:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Exact date of birth</li>
                      <li>• Time of birth (as precise as possible)</li>
                      <li>• Place of birth (city, state, country)</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link 
                      to="/terms" 
                      className="text-sm text-purple-600 hover:text-purple-700 underline"
                    >
                      View Terms & Conditions and Privacy Policy
                    </Link>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={() => window.open('https://wa.me/918369790166?text=I%20want%20to%20know%20more%20about%20Jyotish%20consultation', '_blank')}
                    aria-label="Contact via WhatsApp for Jyotish consultation inquiries"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    WhatsApp Quick Query
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Call to Action Component
const CallToActionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto">
          <Star className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          
          <h2 className="text-4xl font-bold mb-6">Begin Your Journey of Self-Discovery</h2>
          <p className="text-xl mb-8 text-purple-100 leading-relaxed">
            The cosmic patterns that shaped your birth continue to influence your life. 
            Understand these influences and align with your highest potential through 
            the ancient wisdom of Jyotish.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-yellow-600 hover:bg-yellow-700 text-purple-900 font-semibold px-8 py-3"
              data-cal-link="hokagemihir/jyotish"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Reading Today
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-900 transition-all duration-200 px-8 py-3"
              onClick={() => window.open('https://wa.me/918369790166?text=I%20would%20like%20to%20speak%20with%20you%20about%20Jyotish%20consultation', '_blank')}
              aria-label="Contact Mihir Chavan via WhatsApp for Jyotish consultation"
            >
              <Phone className="w-5 h-5 mr-2" />
              Speak with Mihir
            </Button>
          </div>
          
          <div className="text-purple-200 text-sm">
            Consultations available in English and Hindi • Privacy guaranteed • No question too small
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              to="/terms" 
              className="text-sm text-purple-300 hover:text-white underline"
            >
              Terms & Conditions • Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Main Jyotish Portal Component
const JyotishPortal = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mihirchavan.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Jyotish Consultation",
            "item": "https://mihirchavan.in/jyotish"
          }
        ]
      },
      {
        "@type": "Service",
    "name": "Jyotish Consultation",
    "description": "Professional Vedic astrology consultations with Astromani graduate Mihir Chavan",
    "serviceType": "Astrology Reading",
    "provider": {
      "@type": "Person",
      "name": "Mihir Chavan",
      "jobTitle": "Jyotish Astrologer",
      "description": "Astromani graduate practicing Vedic astrology",
      "url": "https://mihirchavan.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jyotish Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Birth Chart Analysis",
            "description": "60-minute comprehensive birth chart reading"
          },
          "price": "2500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "30 min Consultation",
            "description": "30-minute focused consultation"
          },
          "price": "1500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "60 min Consultation for 2 People",
            "description": "60-minute joint consultation for couples"
          },
          "price": "3000",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Kundali Preparation",
            "description": "Complete birth chart preparation in PDF format"
          },
          "price": "500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Kundali Preparation and Years Prediction",
            "description": "Complete birth chart with detailed yearly predictions"
          },
          "price": "1000",
          "priceCurrency": "INR"
        }
      ]
    }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Jyotish Consultation | Vedic Astrology Reading by Mihir Chavan"
        description="Professional Jyotish (Vedic astrology) consultations with Astromani graduate Mihir Chavan. Birth chart analysis, annual forecasts, and spiritual guidance for clarity and direction."
        keywords="Jyotish consultation, Vedic astrology, birth chart reading, astrology Mumbai, Mihir Chavan astrologer, Astromani graduate, spiritual guidance"
        ogImage="https://mihirchavan.in/og-image.jpg"
        structuredData={structuredData}
      />
      <HeroSection />
      <AstrologerIntroduction />
      <ServicesShowcase />
      <ConsultationProcess />
      <AboutJyotishSection />
      <TestimonialsSection />
      <BookingSection />
      <CallToActionSection />
    </div>
  );
};

export default JyotishPortal;