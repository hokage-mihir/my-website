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
      <Welcome />
      
      {/* Page Navigation Section */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NavCard 
              to="/about"
              icon={User}
              title="About Me"
              description="Learn about my background, skills, and professional journey"
            />
            <NavCard 
              to="/projects"
              icon={Lightbulb}
              title="Passion Projects"
              description="Explore my various interests and specialized skills"
            />
          </div>
        </Container>
      </section>
      
      <section className="py-12 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold mb-12 text-center">Programs & Consultation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Art of Living Programs Card */}
            <AnimatedCard
              title="Upcoming Art of Living Programs"
              footer={
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => window.open('https://tally.so/r/w2oP4D', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Tell me more
                </Button>
              }
            >
              <p className="text-slate-600 mb-2">
                The Art of Living offers programs that help individuals eliminate stress, experience deeper meditations, 
                and realize their full potential of mind, body and spirit.
              </p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Happiness Program: Coming Soon</li>
                <li>Online Meditation & Breath Workshop: Coming Soon</li>
              </ul>
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
              <p className="text-slate-600 mb-4">
                Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey.
                As an Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight
                to help individuals find clarity and direction.
              </p>
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