// src/components/PassionProjects.jsx
import React from 'react';
import { FileSpreadsheet, Stars, Waves, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const PassionProjects = () => {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-3xl font-bold my-8 text-center">Explore My Passion Projects</h2>
        
        {/* Excel Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <FileSpreadsheet className="w-5 h-5" />
                Microsoft Excel
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Since discovering Excel's nested IF formulas in 2009, I've developed expertise in building advanced 
                spreadsheet solutions for business analytics and semi automatic workflows. My journey was enriched during 
                my MBA at Sri Sri University under the mentorship of Ramnik Bansal, leading to deeper exploration of 
                Excel's capabilities.
              </p>
              <p className="text-muted-foreground mb-4">
                While I've previously conducted group workshops and individual training sessions, I now focus 
                on personalized consultations to help professionals transform their Excel workflow. 
                Whether it's complex formulas, automated templates, or custom dashboards, I'm here to help you 
                leverage Excel's full potential.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                data-cal-link="hokagemihir/excel-consult"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Jyotish Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center flex-wrap">
                <Stars className="w-5 h-5" />
                <span className="whitespace-normal text-center">Jyotish (Vaidic astrology)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Jyotish, meaning 'science of light', is the foremost Vedanga that illuminates our understanding of life's journey. 
                My fascination with this ancient wisdom led me to study under world-renowned astrologer Shri Alok Khandelwal at 
                Asttrolok institute.
              </p>
              <p className="text-muted-foreground mb-4">
                As an Astromani graduate and practicing astrologer, I combine traditional Vedic knowledge with contemporary insight 
                to help individuals find clarity and direction. While I remain a lifelong student of this vast science, I'm privileged 
                to offer guidance through personal consultations.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                data-cal-link="hokagemihir/30"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Marma Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Waves className="w-5 h-5" />
                Marma
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                In August 2022 I had the pleasure of learning Medical Varmalogy or Marma Chikitsa from 
                Thirumoolar Varmalogy Institute.
              </p>
              <p className="text-muted-foreground mb-4">
                Varmalogy is a systematic study of vital points (varmams) on human body and also on animal bodies. 
                The vital points (varmams) are located on nerves, nerve joints, bones, muscles, ligaments and internal 
                organs. Right or wrong vibration of the vital points (varmams) will either promote or impair health. 
              </p>
              <p className="text-muted-foreground mb-4">
                This is an ancient practice which gives surprisingly good results in just couple of session lasting not 
                more than 10-15 mins. In my personal experience, it has been strongly effective in dealing with pains, 
                aches and regulating body heat.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                data-cal-link="hokagemihir/marma-appointment"
                data-cal-config='{"layout":"month_view"}'
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default PassionProjects;