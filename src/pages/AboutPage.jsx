// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import SEOHead from '../components/SEOHead';
import OptimizedImage from '@/components/ui/optimized-image';
import { Flower2, Star, Mail, Phone } from 'lucide-react';

// Aceternity-inspired components
const ProfileSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-50 to-indigo-50 p-8 md:p-10 shadow-sm">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-200 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-teal-200 blur-3xl" />
      
      <div className="relative flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <OptimizedImage 
            src="/profile.png" 
            alt="Mihir Chavan - MBA Finance, Vedic Astrologer, and Art of Living Faculty" 
            className="w-full h-full object-cover"
            width="192"
            height="192"
          />
        </div>
        
        <div className="text-center md:text-left max-w-4xl mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Me</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            I'm <span className="font-semibold">Mihir Chavan</span>, a finance professional with a passion for both corporate excellence and meaningful service. As a Program Manager at Redington Ltd and Faculty with The Art of Living, I believe in bringing purpose and precision to everything I do.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            My journey has taken me from the vibrant streets of Thane, Maharashtra, through Mumbai University for my foundational education, and eventually to Sri Sri University in Cuttack, Odisha, where I earned my MBA in Finance. This diverse educational experience shaped my perspective on balancing professional growth with personal development.
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
        "Manage comprehensive P&L for Cloud Business across AWS, Microsoft, and Google Cloud partnerships",
        "Developed automated vendor scheme tracking systems, improving program visibility and revenue forecasting",
        "Established streamlined processes that enhanced operational efficiency by 25%",
        "Created advanced Excel-based dashboards for real-time program performance monitoring"
      ]
    },
    {
      title: "Adani Ports & SEZ - Financial Planning & Analysis Manager",
      period: "2016-2022",
      responsibilities: [
        "Led comprehensive MIS reporting transformation, delivering actionable insights to senior management",
        "Implemented automated expense tracking solutions, reducing manual processing time by 40%",
        "Managed annual budget planning for administrative operations across multiple port facilities",
        "Successfully led UAT team for enterprise-wide G-suite implementation, ensuring seamless transition"
      ]
    }
  ];

  const education = [
    {
      title: "MBA in Finance",
      institution: "Sri Sri University, Cuttack, Odisha",
      period: "2014-2016",
      details: "Specialized in Financial Management, Strategic Planning, and Business Analytics"
    },
    {
      title: "Bachelor's Degree",
      institution: "Mumbai University, Maharashtra",
      period: "2011-2014",
      details: "Foundation in business fundamentals and analytical thinking"
    }
  ];

  return (
    <div className="space-y-16 my-12">
      {/* Professional Experience */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>

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

      {/* Education & Qualifications */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Qualifications</h2>
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -ml-px md:mx-auto bg-purple-200" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-2.5 h-5 w-5 rounded-full border-4 border-purple-500 bg-white" />

                  {/* Content */}
                  <div className="pl-8 md:pl-0 md:w-1/2 md:px-8">
                    <Card className="md:ml-4 md:mr-0 border-purple-100">
                      <CardHeader>
                        <CardTitle className="text-purple-800">{edu.title}</CardTitle>
                        <CardDescription className="font-medium">{edu.institution}</CardDescription>
                        <CardDescription>{edu.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{edu.details}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="bg-slate-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Financial Management</h3>
            <p className="text-slate-600 text-sm">P&L Management, Budget Planning, Financial Analysis</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Program Management</h3>
            <p className="text-slate-600 text-sm">Vendor Relations, Process Optimization, Team Leadership</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Technology & Analytics</h3>
            <p className="text-slate-600 text-sm">Advanced Excel, MIS Reporting, System Implementation</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Vedic Sciences</h3>
            <p className="text-slate-600 text-sm">Jyotish Consultation, Spiritual Guidance</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Wellness Training</h3>
            <p className="text-slate-600 text-sm">Art of Living Programs, Meditation Instruction</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-slate-800">Holistic Healing</h3>
            <p className="text-slate-600 text-sm">Marma Therapy, Traditional Wellness Practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallToActionSection = () => {
  const ctaOptions = [
    {
      title: "Art of Living Programs",
      description: "Join transformative breathing workshops and meditation programs for inner peace and wellness",
      icon: Flower2,
      link: "/aol",
      buttonText: "Explore Programs",
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Jyotish Consultation",
      description: "Get personalized Vedic astrology guidance for clarity on life's important decisions",
      icon: Star,
      link: "/jyotish",
      buttonText: "Book Consultation",
      color: "from-purple-600 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Connect With Me",
      description: "Have questions or want to discuss your specific needs? Let's connect directly",
      icon: Mail,
      link: "/contact",
      buttonText: "Get In Touch",
      color: "from-teal-600 to-green-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <div className="mt-16 mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Begin Your Journey?</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose how you'd like to connect and take the next step toward transformation
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ctaOptions.map((cta, index) => {
          const IconComponent = cta.icon;
          return (
            <Card key={index} className={`${cta.bgColor} border-0 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cta.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{cta.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{cta.description}</p>
                <Link to={cta.link}>
                  <Button 
                    className={`w-full bg-gradient-to-r ${cta.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200`}
                  >
                    {cta.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-slate-600 mb-4">Prefer to talk directly?</p>
        <Button 
          variant="outline" 
          className="border-slate-300 text-slate-700 hover:bg-slate-50"
          onClick={() => window.open('https://wa.me/918369790166?text=Hi%20Mihir%2C%20I%20would%20like%20to%20connect%20with%20you', '_blank')}
        >
          <Phone className="w-4 h-4 mr-2" />
          WhatsApp: +91 83697 90166
        </Button>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-8 pb-16">
      <SEOHead
        title="About Mihir Chavan | Program Manager & Art of Living Faculty"
        description="Discover Mihir Chavan's journey as a Program Manager at Redington Ltd and Art of Living Faculty. MBA Finance, 9+ years experience, Jyotish practitioner, Excel expert based in Mumbai."
        keywords="Mihir Chavan about, Program Manager Mumbai, Art of Living Faculty, MBA Finance, Jyotish practitioner, Excel expert, Redington Ltd, Sri Sri University"
        ogImage="https://mihirchavan.in/og-image.svg"
      />
      <Container>
        <ProfileSection />
        <CareerTimeline />
        <CallToActionSection />
      </Container>
    </div>
  );
};

export default AboutPage;