// src/pages/PassionProjectsPage.jsx
import React from 'react';
import { FileSpreadsheet, Stars, Waves, Calendar, ExternalLink, Globe, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

// Aceternity-inspired feature card
const FeatureCard = ({ icon: Icon, title, description, actionButton }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-sm transition-all duration-500 hover:shadow-xl">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon with gradient background */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 text-white shadow-lg">
        <Icon className="h-5 w-5" />
      </div>
      
      <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      
      <div className="mb-8 text-slate-700 dark:text-slate-300 text-left">
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

  const handleMarmaClick = () => {
    window.open('https://tally.so/r/mOk2xK', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://moonmood.xyz/', '_blank');
  };

  return (
    <div className="py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Passion Projects</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Beyond my professional career, I'm deeply invested in several areas that allow me to explore 
            my creativity, knowledge, and desire to help others.
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
                  As an Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight 
                  to help individuals find clarity and direction. While I remain a lifelong student of this vast science, I'm privileged 
                  to offer guidance through personal consultations.
                </p>
              </>
            }
            actionButton={
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 w-full"
                data-cal-link="hokagemihir/jyotish"
                data-cal-config='{"layout":"month_view"}'
                onClick={handleJyotishClick}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
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
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 w-full"
                onClick={handleExcelClick}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Consultation
              </Button>
            }
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marma Section */}
          <FeatureCard
            icon={Waves}
            title="Marma"
            description={
              <>
                <p className="mb-4">
                  In August 2022 I had the pleasure of learning Medical Varmalogy or Marma Chikitsa from 
                  Thirumoolar Varmalogy Institute.
                </p>
                <p className="mb-4">
                  Varmalogy is a systematic study of vital points (varmams) on human body and also on animal bodies. 
                  The vital points (varmams) are located on nerves, nerve joints, bones, muscles, ligaments and internal 
                  organs. Right or wrong vibration of the vital points (varmams) will either promote or impair health. 
                </p>
                <p>
                  This is an ancient practice which gives surprisingly good results in just a couple of sessions lasting not 
                  more than 10-15 mins. In my personal experience, it has been strongly effective in dealing with pains, 
                  aches and regulating body heat.
                </p>
              </>
            }
            actionButton={
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 w-full"
                onClick={handleMarmaClick}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Consultation
              </Button>
            }
          />
          
          {/* NEW: Website & App Building Section */}
          <FeatureCard
            icon={Globe}
            title="Website Building & App Building with AI"
            description={
              <>
                <p className="mb-4">
                  I've recently discovered my passion for website and application development, enhanced by the power of AI. 
                  By leveraging modern tools and AI capabilities, I've been able to create functional and visually 
                  appealing digital experiences without extensive coding background.
                </p>
                <p className="mb-4">
                  This journey has allowed me to combine my business knowledge with technical solutions, creating websites 
                  and simple applications that solve real problems. From personal projects like the Chandrashtam Calculator 
                  to this very website, I enjoy the process of turning ideas into digital reality.
                </p>
                <p>
                  I'm constantly exploring new AI tools, frameworks, and design systems to improve my skills and create 
                  more sophisticated digital experiences that help businesses and individuals achieve their goals.
                </p>
              </>
            }
            actionButton={
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 w-full"
                onClick={handleWebsiteClick}
              >
                <Code className="w-4 h-4 mr-2" />
                View Chandrashtam Calculator
              </Button>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default PassionProjectsPage;