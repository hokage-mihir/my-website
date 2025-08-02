// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { GradientText } from '@/components/ui/text-gradient';
import { Spotlight } from '@/components/ui/spotlight';
import Welcome from '../components/Welcome';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';
import aolProgramsData from '../data/aol-programs.json';

// Aceternity-inspired animated card component
const AnimatedCard = ({ title, children, footer }) => {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-300 to-teal-300 opacity-0 blur-xl transition-opacity group-hover:opacity-70" />
      <div className="relative flex h-full flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <div className="flex-grow">{children}</div>
        {footer && <div className="pt-4">{footer}</div>}
      </div>
    </div>
  );
};

// Navigation Card Component
const NavCard = ({ to, icon: Icon, title, description }) => {
  return (
    <Link to={to} className="block">
      <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-indigo-200">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="font-medium text-lg flex items-center">
              {title}
              <ChevronRight className="h-4 w-4 ml-1 text-indigo-500" />
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const HomePage = () => {
  // Helper function to extract area and city from address (consistent with AOL portal page)
  const getAreaCity = (address, city) => {
    if (!address) return city || '';
    
    const addressParts = address.split(',').map(part => part.trim()).filter(part => part.length > 0);
    
    let area = '';
    
    // Look for directional areas anywhere in the address
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
    
    return area ? `${area}, ${city}` : city || '';
  };

  // Get the next upcoming Art of Living program from Excel data
  const nextProgram = aolProgramsData.programs.upcoming[0];
  
  return (
    <div>
      <SEOHead 
        title="Mihir Chavan | Excel Expert, Jyotish Practitioner & Finance Professional"
        description="Mihir Chavan offers expertise in Microsoft Excel, Vedic astrology (Jyotish) consultations, and Marma healing. Finance professional with specialized skills to help transform your workflow and wellbeing."
        keywords="Mihir Chavan, Excel automation, Excel consultant, Jyotish, Vedic astrology, Marma healing, Finance professional, Mumbai"
        ogImage="https://mihirchavan.in/og-image.svg"
      />
      <Welcome />
      
      <section className="py-12 bg-slate-50" aria-labelledby="services-heading">
        <Container>
          <h2 id="services-heading" className="text-3xl font-bold mb-12 text-center">Programs & Consultation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Art of Living Programs Card */}
            <AnimatedCard
              title="Upcoming Art of Living Programs"
              footer={null} // Removing the footer since we'll handle buttons within the content
            >
              <div className="text-slate-600 mb-4">
                <p className="mb-4">
                  The Art of Living offers programs that help individuals eliminate stress, 
                  experience deeper meditations, and realize their full potential of mind, 
                  body and spirit.
                </p>
                
                {/* Dynamic Program Section - Shows actual upcoming program from Excel data */}
                {nextProgram ? (
                  <div className="bg-indigo-50 rounded-lg p-4 mb-5 border border-indigo-100">
                    <h4 className="font-medium text-indigo-800 mb-2">
                      Next Upcoming Program
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">{nextProgram.programType}</div>
                      <div className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        {nextProgram.formattedDate}
                      </div>
                    </div>
                    <div className="text-xs text-indigo-700 mb-2">
                      📍 {getAreaCity(nextProgram.address, nextProgram.city)} • {nextProgram.startTime}
                    </div>
                    <p className="text-sm mb-3">
                      Experience powerful breathing techniques, meditation, and wisdom to reduce stress
                      and live with joy and purpose.
                    </p>
                  </div>
                ) : (
                  // Fallback when no programs are available
                  <div className="bg-indigo-50 rounded-lg p-4 mb-5 border border-indigo-100">
                    <h4 className="font-medium text-indigo-800 mb-2">
                      Programs Available
                    </h4>
                    <p className="text-sm mb-3">
                      Check our programs page for upcoming Art of Living sessions.
                    </p>
                  </div>
                )}
                
                <div className="mt-4">
                  <div className="flex gap-1 mb-6">
                    {/* Dynamic registration button - links to actual program URL */}
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-xs sm:text-sm px-2 py-2"
                      onClick={() => window.open(
                        nextProgram ? `https://${nextProgram.registrationUrl}` : 'https://aolt.in/894652', 
                        '_blank'
                      )}
                    >
                      Register
                    </Button>
                    {/* Dynamic WhatsApp message with specific program type */}
                    <Button 
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-xs sm:text-sm px-2 py-2"
                      onClick={() => window.open(
                        `https://wa.me/918369790166?text=I%20want%20to%20know%20more%20about%20the%20upcoming%20${nextProgram?.programType || 'Art of Living program'}`, 
                        '_blank'
                      )}
                    >
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">WhatsApp</span>
                      <span className="sm:hidden">WA</span>
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-xs sm:text-sm px-2 py-2"
                      onClick={() => window.open('tel:+918369790166', '_self')}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                  <Link to="/aol">
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      View All Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedCard>

            {/* Jyotish Consultation Card */}
            <AnimatedCard
              title="Jyotish Consultation"
              footer={
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    data-cal-namespace="30min"
                    data-cal-link="hokagemihir/30min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book 30min Consultation
                  </Button>
                  <div className="text-center">
                    <Link 
                      to="/jyotish" 
                      className="text-sm text-indigo-600 hover:text-indigo-700 underline font-medium"
                    >
                      View All Consultation Options →
                    </Link>
                  </div>
                </div>
              }
            >
              <div className="flex flex-col h-full">
                <p className="text-slate-600 mb-5">
                  Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey.
                  As an Astroshiromani and Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight
                  to help individuals find clarity and direction.
                </p>
                
                
                {/* Additional explanation about methodology */}
                <div className="rounded-lg border border-slate-200 p-4 mb-1">
                  <h4 className="font-medium text-slate-700 mb-2">My Approach</h4>
                  <p className="text-sm text-slate-600">
                    I focus on empowering individuals through knowledge rather than fear. <br></br> Each reading is personalized 
                    to provide practical insights that can be applied to navigate life's challenges and make informed decisions.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;