// src/pages/AboutPage.jsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

// Aceternity-inspired components
const ProfileSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-50 to-indigo-50 p-8 md:p-10 shadow-sm">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-200 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal-200 blur-3xl" />
      
      <div className="relative flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
          {/* Placeholder for profile photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-teal-200 flex items-center justify-center">
            <span className="text-6xl text-indigo-600 font-semibold">M</span>
          </div>
        </div>
        
        <div className="text-center md:text-left max-w-4xl mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Me</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Hey there! I'm <span className="font-semibold">Mihir Chavan</span> — an MBA Finance graduate, Vaidic Astrologer, and Faculty with The Art of Living.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Born and raised in Thane, Maharashtra, I completed my schooling and higher education from Mumbai University. To gain a broader perspective and enhance my experience, I pursued my Master's from Sri Sri University in Cuttack, Odisha.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Professional Journey</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            With over 9 years of experience in the Finance field, I currently work as a Program Manager with Redington's cloud business. I also have a special fondness for Microsoft Excel and enjoy sharing my knowledge to help others have a much better experience with this powerful tool.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Holistic Pursuits</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Beyond my professional life, I'm a certified Marma practitioner and Vaidic astrologer. The latest feather in my cap—and perhaps my favorite—is being a trainer for The Art of Living's Happiness Program.
          </p>
          
          <p className="text-slate-700 leading-relaxed">
            Yoga and meditation have long fascinated me, and being able to help people experience the joy and relief they provide is one of my key driving factors.
          </p>
        </div>
      </div>
    </div>
  );
};

const CareerTimeline = () => {
  const careers = [
    {
      title: "Redington Ltd - Program Manager Cloud Business",
      period: "2022-Present",
      responsibilities: [
        "Manage P&L for Cloud Business including AWS, Microsoft, and Google products",
        "Track vendor schemes and programs, calculate estimated income",
        "Establish systems and processes to enhance efficiency",
        "Develop user-friendly, Excel-based program trackers"
      ]
    },
    {
      title: "Adani Ports & SEZ - Financial Planning & Analysis Manager",
      period: "2016-2022",
      responsibilities: [
        "Led MIS Reporting activities and analytical reports",
        "Automated reports for better expense tracking",
        "Prepared annual administrative costs budgets",
        "Led UAT team for G-suite implementation"
      ]
    }
  ];

  return (
    <div className="space-y-10 my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Career Journey</h2>
      
      <div className="relative">
        {/* Timeline track */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -ml-px md:mx-auto bg-indigo-200" />
        
        <div className="space-y-12">
          {careers.map((career, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-2.5 h-5 w-5 rounded-full border-4 border-indigo-500 bg-white" />
                
                {/* Content */}
                <div className="pl-8 md:pl-0 md:w-1/2 md:px-8">
                  <Card className="md:ml-4 md:mr-0">
                    <CardHeader>
                      <CardTitle>{career.title}</CardTitle>
                      <CardDescription>{career.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {career.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-8 pb-16">
      <Container>
        <ProfileSection />
        <CareerTimeline />
      </Container>
    </div>
  );
};

export default AboutPage;