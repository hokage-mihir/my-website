import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Calendar,
  FileSpreadsheet,
  Stars,
  Waves,
  Moon,
  Sun,
  Heart,
  X,
  Activity
} from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";
import { Toggle } from "@/components/ui/toggle";

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: {
          branding: { brandColor: "#4f46e5" }, // Using indigo-600 color
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-emerald-800/80 to-teal-700/80 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80" 
            alt="Ama Dablam mountain peak" 
            className="w-full h-full object-cover object-center opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/40 to-teal-700/40 backdrop-blur-[0.5px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Mihir Chavan
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:text-teal-300 transition-colors">
              <a href="https://www.linkedin.com/in/mihir-chavan-48710717/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-7 h-7 drop-shadow-md" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-teal-300 transition-colors">
              <a href="https://www.instagram.com/hokagemihir" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-7 h-7 drop-shadow-md" />
              </a>
            </Button>
            <Toggle pressed={document.documentElement.classList.contains('dark')} onPressedChange={toggleDarkMode}>
              <Sun className="w-7 h-7 hidden dark:block drop-shadow-md" />
              <Moon className="w-7 h-7 dark:hidden drop-shadow-md" />
            </Toggle>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-10">
        <Container>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Hello There!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Welcome to my personal corner on the world wide web.
              </p>
              <p className="text-muted-foreground">
                My name is Mihir, and this is my own space to explore and express life's vibrance and variety. 
                To know more about me, check out my passion projects with the links below.
              </p>
            </CardContent>
          </Card>

          {/* Passion Projects Section */}
          <h2 className="text-3xl font-bold my-8 text-center">Explore My Passion Projects</h2>

          {/* Excel - Now Center Aligned */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                  Microsoft Excel
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Since discovering Excel's nested IF formulas in 2009, I've developed expertise in building advanced 
                  spreadsheet solutions for business analytics and semi automatic workflows. My journey was enriched during 
                  my MBA at Sri Sri University under the mentorship of Ramnik Bansal, leading to deeper exploration of 
                  Excel's capabilities.
                </p>
                <p className="text-muted-foreground mb-4">
                  While I've previously conducted group workshops and individual training sessions, I now focus 
                  on personalized consultations to help professionals transform their Excel workflow. 
                  Whether it's complex formulas, automated templates, or custom dashboards, I'm here to help you 
                  leverage Excel's full potential.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/excel-consult"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Jyotish - Center Aligned */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <Stars className="w-5 h-5" />
                  Jyotish (Vaidic astrology)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey. 
                  My fascination with this ancient wisdom led me to study under world-renowned astrologer Shri Alok Khandelwal at 
                  Asttrolok institute.
                </p>
                <p className="text-muted-foreground mb-4">
                  As an Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight 
                  to help individuals find clarity and direction. While I remain a lifelong student of this vast science, I'm privileged 
                  to offer guidance through personal consultations.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/30"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Marma - Right Aligned */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center">
                  <Waves className="w-5 h-5" />
                  Marma
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  In August 2022 I had the pleasure of learning Medical Varmalogy or Marma Chikitsa from 
                  Thirumoolar Varmalogy Institute.
                </p>
                <p className="text-muted-foreground mb-4">
                  Varmalogy is a systematic study of vital points (varmams) on human body and also on animal bodies. 
                  The vital points (varmams) are located on nerves, nerve joints, bones, muscles, ligaments and internal 
                  organs. Right or wrong vibration of the vital points (varmams) will either promote or impair health. 
                </p>
                <p className="text-muted-foreground mb-4">
                  This is an ancient practice which gives surprisingly good results in just couple of session lasting not 
                  more than 10-15 mins. In my personal experience, it has been strongly effective in dealing with pains, 
                  aches and regulating body heat.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/marma-appointment"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-10 bg-background">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Your typical city bred, corporate employee with a varied experience in the finance field. With a bachelors 
                in commerce and MBA in Finance, I have been pursuing a work journey that aligns with my expertise. Aside 
                from work, I am also a certified marma practitioner and an astrologer in training. I have a certain love 
                of Microsoft Excel which I enjoy sharing with others to make life with Excel a much better experience.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Career Section */}
      <section className="py-10 bg-muted">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Redington Ltd - Program Manager Cloud Business</CardTitle>
                <CardDescription>2022-Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Manage P&L for Cloud Business including AWS, Microsoft, and Google products</li>
                  <li>Track vendor schemes and programs, calculate estimated income</li>
                  <li>Establish systems and processes to enhance efficiency</li>
                  <li>Develop user-friendly, Excel-based program trackers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Adani Ports & SEZ - Financial Planning & Analysis Manager</CardTitle>
                <CardDescription>2016-2022</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Led MIS Reporting activities and analytical reports</li>
                  <li>Automated reports for better expense tracking</li>
                  <li>Prepared annual administrative costs budgets</li>
                  <li>Led UAT team for G-suite implementation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hokagemihir/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/mihir-chavan-48710717/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <p>Support a cause:</p>
              <a 
                href="https://vvki-dsy.org/donate" 
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <Heart className="h-4 w-4 mr-2" />
                Dharma Sthambha Yojna
              </a>
            </div>
            <div className="text-right">
              <p>© {new Date().getFullYear()} Mihir Chavan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default App;