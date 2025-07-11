// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ExternalLink, ChevronRight, User, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { GradientText } from '@/components/ui/text-gradient';
import { Spotlight } from '@/components/ui/spotlight';
import Welcome from '../components/Welcome';
import ContactSection from '../components/ContactSection';
import SEOHead from '../components/SEOHead';

// Aceternity-inspired animated card component
const AnimatedCard = ({ title, children, footer }) => {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-300 to-teal-300 opacity-0 blur-xl transition-opacity group-hover:opacity-70" />
      <div className="relative flex h-full flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <div className="flex-grow">{children}</div>
        {footer && <div className="pt-6">{footer}</div>}
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
  return (
    <div>
      <SEOHead 
        title="Mihir Chavan | Excel Expert, Jyotish Practitioner & Finance Professional"
        description="Mihir Chavan offers expertise in Microsoft Excel, Vedic astrology (Jyotish) consultations, and Marma healing. Finance professional with specialized skills to help transform your workflow and wellbeing."
        keywords="Mihir Chavan, Excel automation, Excel consultant, Jyotish, Vedic astrology, Marma healing, Finance professional, Mumbai"
        ogImage="https://mihirchavan.in/og-image.jpg"
      />
      <Welcome />
      
      <section className="py-12 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Programs & Consultation</h2>
          
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
                
                {/* Featured/Current Program Section */}
                <div className="bg-indigo-50 rounded-lg p-4 mb-5 border border-indigo-100">
                  <h4 className="font-medium text-indigo-800 mb-2">
                    Upcoming Program
                  </h4>
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Happiness Program</div>
                    <div className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      25th to 27th July
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    Experience powerful breathing techniques, meditation, and wisdom to reduce stress
                    and live with joy and purpose.
                  </p>
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => window.open('https://wa.me/918369790166?text=I%20want%20to%20know%20more%20about%20the%20upcoming%20happiness%20program', '_blank')}
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </AnimatedCard>

            {/* Jyotish Consultation Card */}
            <AnimatedCard
              title="Jyotish Consultation"
              footer={
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  data-cal-link="hokagemihir/jyotish"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              }
            >
              <div className="flex flex-col h-full">
                <p className="text-slate-600 mb-5">
                  Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey.
                  As an Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight
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