// src/components/Career.jsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const Career = () => {
  return (
    <section className="py-10 bg-muted" id="career">
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
  );
};

export default Career;