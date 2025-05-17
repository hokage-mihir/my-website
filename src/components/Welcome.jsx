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
    <section className="py-6 relative overflow-hidden bg-background" id="welcome">
      <Container>
        <Spotlight className="rounded-3xl">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-center text-3xl md:text-4xl text-foreground">
                Hello There! I'm <GradientText>Mihir Chavan</GradientText>
              </CardTitle>
            </CardHeader>
              <CardContent className="text-center px-6 py-8">
              <h3 className="text-2xl font-medium text-slate-800 mb-4">
                Welcome to My Digital Sanctuary
              </h3>
              
              <p className="text-slate-600 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                Where professional expertise meets spiritual wisdom to guide you toward balance and fulfillment.
              </p>
              
              <div className="space-y-2 text-slate-600 mb-8 max-w-2xl mx-auto">
                <p className="leading-relaxed">
                  By day, I navigate the intricacies of finance as a Program Manager at Redington's cloud business, bringing over 9 years of analytical precision to the corporate world.
                </p>
                
                <p className="leading-relaxed">
                  By calling, I'm a Vaidic Astrologer who helps individuals decode the cosmic blueprint of their lives, offering clarity and direction during times of uncertainty.
                </p>
                
                <p className="leading-relaxed">
                  As a certified Facilitator for The Art of Living's Happiness Program, I've had the privilege of guiding countless individuals toward stress-free, purposeful living through ancient breathing techniques and meditation practices.
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 max-w-xl mx-auto">
                <p className="font-medium text-slate-700 mb-2">Begin your journey to wellness and clarity</p>
                <p className="text-slate-600 mb-0">
                  Discover upcoming Art of Living workshops or schedule a Jyotish consultation in the section below.
                </p>
              </div>
            </CardContent>
          </Card>
        </Spotlight>
      </Container>
    </section>
  );
};

export default Welcome;