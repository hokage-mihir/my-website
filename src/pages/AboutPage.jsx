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
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700 max-w-2xl leading-relaxed">
            Your typical city bred, corporate employee with a varied experience in the finance field. With a bachelors 
            in commerce and MBA in Finance, I have been pursuing a work journey that aligns with my expertise. Aside 
            from work, I am also a certified marma practitioner and an astrologer in training. I have a certain love 
            of Microsoft Excel which I enjoy sharing with others to make life with Excel a much better experience.
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