// src/pages/PassionProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FileSpreadsheet, Stars, Calendar, ExternalLink, Globe, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import SEOHead from '../components/SEOHead';
import ProjectShowcase from '../components/ProjectShowcase';

// Aceternity-inspired feature card
const FeatureCard = ({ icon: Icon, title, description, actionButton }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-xl">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon and Title in same line - Mobile optimized */}
      <div className="mb-6 flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 text-white shadow-lg flex-shrink-0">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-tight">{title}</h3>
      </div>
      
      <div className="mb-8 text-slate-700 text-left">
        {description}
      </div>
      {actionButton && (
        <div className="z-10 relative">{actionButton}</div>
      )}
    </div>
  );
}

const PassionProjectsPage = () => {
  // Handlers for button clicks
  const handleJyotishClick = () => {
    // Cal.com will handle this through data attributes
    console.log("Jyotish consultation button clicked");
  };

  const handleExcelClick = () => {
    window.open('https://tally.so/r/mOk2xK', '_blank');
  };


  return (
    <div className="py-12">
      <SEOHead 
        title="Passion Projects | Mihir Chavan - Excel, Jyotish, Web Development Portfolio"
        description="Explore Mihir Chavan's passion projects including Excel automation, Jyotish consultations, web development portfolio, and digital solutions. Professional expertise in finance, astrology, and modern web technologies."
        keywords="Mihir Chavan projects, Excel automation services, Jyotish consultations, web development portfolio, website development, passion projects, professional services, digital solutions"
        ogImage="https://mihirchavan.in/og-image.jpg"
      />
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Passion Projects</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Beyond my professional career, I'm deeply invested in several areas that allow me to explore 
            my creativity, knowledge, and desire to help others through technology, ancient wisdom, and modern solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Jyotish Section */}
          <FeatureCard
            icon={Stars}
            title="Jyotish (Vedic Astrology)"
            description={
              <>
                <p className="mb-4">
                  Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey. 
                  My fascination with this ancient wisdom led me to study under world-renowned astrologer Shri Alok Khandelwal at 
                  Asttrolok institute.
                </p>
                <p>
                  As an Astroshiromani and Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight 
                  to help individuals find clarity and direction. While I remain a lifelong student of this vast science, I'm privileged 
                  to offer guidance through personal consultations.
                </p>
              </>
            }
            actionButton={
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 flex-1"
                  data-cal-link="hokagemihir/jyotish"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={handleJyotishClick}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="flex-1 border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                >
                  <Link to="/jyotish">
                    <Info className="w-4 h-4 mr-2" />
                    Know More
                  </Link>
                </Button>
              </div>
            }
          />
          
          {/* Excel Section */}
          <FeatureCard
            icon={FileSpreadsheet}
            title="Microsoft Excel"
            description={
              <>
                <p className="mb-4">
                  Since discovering Excel's nested IF formulas in 2009, I've developed expertise in building advanced 
                  spreadsheet solutions for business analytics and semi automatic workflows. My journey was enriched during 
                  my MBA at Sri Sri University under the mentorship of Ramnik Bansal, leading to deeper exploration of 
                  Excel's capabilities.
                </p>
                <p>
                  While I've previously conducted group workshops and individual training sessions, I now focus 
                  on personalized consultations to help professionals transform their Excel workflow. 
                  Whether it's complex formulas, automated templates, or custom dashboards, I'm here to help you 
                  leverage Excel's full potential.
                </p>
              </>
            }
            actionButton={
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 w-full"
                onClick={handleExcelClick}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Consultation
              </Button>
            }
          />
        </div>
        
        {/* Web Development Section - Full Width FeatureCard */}
        <div className="mt-10">
          <FeatureCard
            icon={Globe}
            title="Website Building & App Building with AI"
            description={
              <>
                <p className="mb-4">
                  I've recently discovered my passion for website and application development, enhanced by the power of AI. 
                  By leveraging modern tools and AI capabilities, I've been able to create functional and visually 
                  appealing digital experiences that help businesses and individuals establish their online presence.
                </p>
                <p className="mb-4">
                  This journey has allowed me to combine my creative interests with technical solutions, creating websites 
                  that solve real problems and help professionals showcase their expertise. Each project teaches me 
                  something new about user experience, design, and modern web technologies.
                </p>
                <p className="mb-6">
                  From personal portfolios to business websites and specialized tools like the Chandrashtam Calculator, 
                  I enjoy the process of turning ideas into digital reality that makes a meaningful impact.
                </p>
              </>
            }
            actionButton={
              <div className="mt-6">
                <ProjectShowcase />
              </div>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default PassionProjectsPage;