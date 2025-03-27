// src/components/ContactSection.jsx
import React, { useEffect } from 'react';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const ContactSection = () => {
  // Initialize Tally embed after component mounts
  useEffect(() => {
    // Check if Tally script is already loaded
    if (!window.Tally) {
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        // Load embeds once script is loaded
        if (window.Tally) {
          window.Tally.loadEmbeds();
        }
      };
      document.head.appendChild(script);
    } else {
      // If script already loaded, just load embeds
      window.Tally.loadEmbeds();
    }

    // Cleanup function
    return () => {
      // Optional: Any cleanup if needed
    };
  }, []);

  // Handle schedule call button click
  const handleScheduleClick = () => {
    console.log("Schedule call button clicked");
    // Cal.com will handle this through data attributes
  };

  return (
    <section className="py-16 bg-slate-50" id="contact">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about my services or looking to collaborate? Feel free to reach out.
            I'm always open to discussing new ideas and opportunities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-indigo-500 to-teal-500 p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>contact@mihirchavan.in</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+91 99301 75135</span>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="text-white/80 text-sm">
                    Prefer discussing your needs directly?
                  </p>
                  <Button
                    className="mt-2 bg-white text-indigo-600 hover:bg-white/90 relative z-10"
                    data-cal-link="hokagemihir/chat"
                    data-cal-config='{"layout":"month_view"}'
                    onClick={handleScheduleClick}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Discovery Call
                  </Button>
                </div>
              </div>
              
              {/* Tally Form Embed */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                
                <div className="w-full">
                  <iframe 
                    data-tally-src="https://tally.so/embed/mOk2xK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="320" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    title="Contact form"
                    className="block"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;