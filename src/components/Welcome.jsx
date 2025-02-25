// src/components/Welcome.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const Welcome = () => {
  return (
    <section className="py-10" id="welcome">
      <Container>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Hello There!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Welcome to my personal corner on the world wide web.
            </p>
            <p className="text-muted-foreground mb-6">
              My name is Mihir, and this is my own space to explore and express life's vibrance and variety. 
              To know more about me, check out my passion projects with the links below.
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-muted-foreground">
                Check out my latest creation:
              </p>
              <a 
                href="https://moonmood.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition-colors duration-200"
              >
                <span>Chandrashtam Calculator</span>
                <svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default Welcome;
