// src/components/Welcome.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { GradientText } from '@/components/ui/text-gradient';
import { AnimatedGradientBorder } from '@/components/ui/animated-gradient';
import { Spotlight } from '@/components/ui/spotlight';

const Welcome = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-background" id="welcome">
      <Container>
        <Spotlight className="rounded-3xl">
          <Card className="border-0 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-center text-3xl md:text-4xl text-foreground">
                Hello There! I'm <GradientText>Mihir Chavan</GradientText>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 text-lg">
                Welcome to my personal corner on the world wide web.
              </p>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                This is my own space to explore and express life's vibrance and variety. 
                To know more about me, explore my passion projects, professional journey, and the 
                services I offer.
              </p>
              <div className="mt-10 space-y-2">
                <p className="text-muted-foreground">
                  Check out my latest creation:
                </p>
                <AnimatedGradientBorder className="inline-block">
                  <a 
                    href="https://moonmood.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-white shadow-lg"
                  >
                    <span className="font-medium">Chandrashtam Calculator</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </AnimatedGradientBorder>
              </div>
            </CardContent>
          </Card>
        </Spotlight>
      </Container>
    </section>
  );
};

export default Welcome;