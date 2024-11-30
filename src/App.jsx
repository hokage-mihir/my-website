import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Calendar,
  FileSpreadsheet,
  Stars,
  Waves,
  Moon,
  Sun
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
      <header className="relative h-[300px] md:h-[350px] lg:h-[400px] bg-gradient-to-r from-purple-900/80 to-indigo-800/80 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80" 
            alt="Ama Dablam mountain peak" 
            className="w-full h-full object-cover object-center opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-indigo-800/30 backdrop-blur-[1px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">Mihir Chavan</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:text-purple-300 transition-colors">
              <a href="https://www.linkedin.com/in/mihir-chavan-48710717/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-7 h-7 drop-shadow-md" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-purple-300 transition-colors">
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
      <section className="py-16">
        <Container>
          <Card>
            <CardHeader>
              <CardTitle>Hello There!</CardTitle>
            </CardHeader>
            <CardContent>
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
          <h2 className="text-3xl font-bold my-8">Explore My Passion Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Excel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Microsoft Excel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I came across MS Excel as a workplace tool to maintain accounts and do tax computations back in 2009. 
                  Finding out you can have nested IF formulas was an excitement I couldn't very well describe in words. 
                  This began a journey of figuring out what more can be done and pushing excel to (my known) limits.
                </p>
                <p className="text-muted-foreground mb-4">
                  My mission is simple: I want people to go from surviving Excel to thriving with Excel.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/excel-consult"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </CardFooter>
            </Card>

            {/* Jyotish */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stars className="w-5 h-5" />
                  Jyotish (Vaidic astrology)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Jyoti means light and Jyotish is the light that guides. It is considered the first Vedanga (limb of Vedas) 
                  and the first principle for understanding the Vedas and life. Since childhood I had a fascination towards 
                  this ancient teaching that helps people navigate the highs and lows of living.
                </p>
                <p className="text-muted-foreground mb-4">
                  I have successfully completed the Astromani program under Shri Alok Khandelwal at Asttrolok institute.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/30"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Reading
                </Button>
              </CardFooter>
            </Card>

            {/* Marma */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="w-5 h-5" />
                  Marma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Varmalogy is a systematic study of vital points (varmams) on human body. The vital points are located 
                  on nerves, nerve joints, bones, muscles, ligaments and internal organs. Right or wrong vibration of 
                  the vital points will either promote or impair health.
                </p>
                <p className="text-muted-foreground mb-4">
                  This ancient practice gives surprisingly good results in just couple of sessions lasting not more than 10-15 mins.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  data-cal-link="hokagemihir/marma-appointment"
                  data-cal-config='{"layout":"month_view"}'
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <Container>
          <h2 className="text-3xl font-bold mb-8 dark:text-gray-100">About Me</h2>
          <Card>
            <CardContent className="pt-6">
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
      <section className="py-16 bg-muted">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Career Journey</h2>
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
      <footer className="bg-gray-800 dark:bg-black text-white py-8">
        <Container>
          <div className="text-center">
            <p className="text-gray-200">© {new Date().getFullYear()} Mihir Chavan. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;