// src/components/About.jsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const About = () => {
  return (
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
  );
};

export default About;