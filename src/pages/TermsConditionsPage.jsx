// src/pages/TermsConditionsPage.jsx
import React from 'react';
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SEOHead from '../components/SEOHead';

const TermsConditionsPage = () => {
  return (
    <div className="py-12">
      <SEOHead 
        title="Terms and Conditions | Mihir Chavan"
        description="Terms and conditions for consultation services offered by Mihir Chavan including Jyotish, Excel, and website development services."
        keywords="Terms and conditions, consultation services, Mihir Chavan terms"
      />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Terms and Conditions</CardTitle>
              <p className="text-center text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-IN')}
              </p>
            </CardHeader>
            
            <CardContent className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to the services provided by Mihir Chavan ("we," "us," or "our"). These Terms and Conditions ("Terms") 
                  govern your use of our consultation services including Jyotish consultations, Excel consultations, and website/app 
                  development services ("Services").
                </p>
                <p className="mb-4">
                  By booking or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
                  please do not use our Services.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services Offered</h2>
                
                <h3 className="text-xl font-medium mb-3">2.1 Jyotish Consultations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Vedic astrology guidance and insights</li>
                  <li>Typical duration: 45 minutes per session</li>
                  <li>Fee: ₹1,100 per consultation</li>
                  <li>Available online and in-person (Mumbai)</li>
                  <li>Digital consultation report provided</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">2.2 Excel Consultations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Excel training, automation, and formula development</li>
                  <li>Duration: Variable (multiple hours/sessions)</li>
                  <li>Fee: ₹500 - ₹5,000 based on complexity</li>
                  <li>Project-based pricing available</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">2.3 Website/App Development</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Simple websites: ₹10,000</li>
                  <li>E-commerce websites: ₹20,000</li>
                  <li>Multiple sessions across several hours</li>
                  <li>20% advance payment required</li>
                  <li>Digital delivery only</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Primary payment method: Online - via payment portal</li>
                  <li>Jyotish consultations: Full advance payment required</li>
                  <li>Website/App development: 20% advance, balance on completion</li>
                  <li>Excel consultations: Payment terms discussed per project</li>
                  <li>All fees are in Indian Rupees (INR)</li>
                  <li>Prices may change with prior notice</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Age and Eligibility</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Minimum age requirement: 18+ for direct consultations</li>
                  <li>Parents may book Jyotish consultations for minors</li>
                  <li>You must provide accurate personal information</li>
                  <li>Birth details must be as accurate as possible for Jyotish consultations</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Service Restrictions</h2>
                <p className="mb-4">We reserve the right to refuse services for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Illegal activities or purposes</li>
                  <li>Unethical requests</li>
                  <li>Harassment or inappropriate behavior</li>
                  <li>Providing false or misleading information</li>
                  <li>Any activity that violates applicable laws</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                
                <h3 className="text-xl font-medium mb-3">6.1 Website/App Development</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ownership transfers to client upon full payment completion</li>
                  <li>Until full payment, ownership remains with Mihir Chavan</li>
                  <li>Techniques and methodologies used remain with Mihir Chavan</li>
                  <li>We reserve the right to use similar techniques in future projects</li>
                  <li>Custom graphics/content created by us may be reused unless specifically provided by client</li>
                  <li>Client-provided content remains client's property</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">6.2 Portfolio Rights</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Completed websites may be displayed in our portfolio</li>
                  <li>We may use project details for marketing purposes</li>
                  <li>Client information will be anonymized unless permission is granted</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
                
                <h3 className="text-xl font-medium mb-3">7.1 Jyotish Consultations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Consultations provide guidance on possibilities, not guarantees</li>
                  <li>Not intended as medical, financial, or legal advice</li>
                  <li>Decisions based on consultations are client's responsibility</li>
                  <li>Accuracy depends on correct birth information provided</li>
                  <li>Results may vary based on individual circumstances</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">7.2 General Services</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Services provided "as is" without warranties</li>
                  <li>Incorrect data provided will yield incorrect results</li>
                  <li>We are not liable for decisions made based on our guidance</li>
                  <li>Technology limitations may affect service delivery</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Geographic Coverage</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>In-person services:</strong> Mumbai, Maharashtra, India</li>
                  <li><strong>Online services:</strong> Available globally</li>
                  <li>Time zone considerations apply for online consultations</li>
                  <li>Local laws of client's jurisdiction may apply</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Mihir Chavan shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from the use of our services.
                </p>
                <p className="mb-4">
                  Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these Terms or our services shall be subject to the exclusive 
                  jurisdiction of the courts in Mumbai, Maharashtra, India.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services after changes constitutes acceptance 
                  of the new Terms.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                <p className="mb-4">
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Mihir Chavan</strong></p>
                  <p>Email: contact@mihirchavan.in</p>
                  <p>Phone: +91 83697 90166</p>
                  <p>Location: Mumbai, Maharashtra, India</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default TermsConditionsPage;