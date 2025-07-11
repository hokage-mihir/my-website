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
        title="Terms and Conditions & Privacy Policy | Mihir Chavan"
        description="Terms and conditions and privacy policy for consultation services offered by Mihir Chavan including Jyotish, Excel, and website development services."
        keywords="Terms and conditions, privacy policy, consultation services, Mihir Chavan terms, data protection"
      />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Terms and Conditions & Privacy Policy</CardTitle>
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
                <h2 className="text-2xl font-semibold mb-4">4. Cancellation & Refund Policy</h2>
                
                <h3 className="text-xl font-medium mb-3">4.1 Cancellation Notice Requirements</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Minimum 2-4 hours advance notice required for all cancellations</li>
                  <li>For no-show situations, minimum 30 minutes prior intimation required</li>
                  <li>Cancellations must be communicated via email, phone, or WhatsApp</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">4.2 Refund Policy by Service Type</h3>
                
                <h4 className="font-medium mb-2">Jyotish Consultations:</h4>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>Full refund available if cancelled with sufficient notice and unable to reschedule</li>
                  <li>No refund for no-shows without prior intimation</li>
                  <li>Refunds processed within 7-10 working days</li>
                </ul>

                <h4 className="font-medium mb-2">Website/App Development:</h4>
                <ul className="list-disc pl-6 mb-3 space-y-1">
                  <li>20% advance payment is non-refundable once project commences</li>
                  <li>Balance payment refundable if project not completed or cancelled by client</li>
                  <li>Partial work delivered will be charged proportionally</li>
                </ul>

                <h4 className="font-medium mb-2">Excel Consultations:</h4>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Refund terms discussed and agreed upon per project basis</li>
                  <li>Generally follows same principles as Jyotish consultations</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">4.3 Service Provider Cancellations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>In case of cancellations initiated by Mihir Chavan, full refund will be provided</li>
                  <li>Clients are free to reschedule at any convenient time without additional charges</li>
                  <li>Emergency cancellations will be communicated as soon as possible</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">4.4 No-Show Policy</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>No refunds applicable for no-shows without prior intimation</li>
                  <li>Minimum 30 minutes advance notice required to avoid no-show charges</li>
                  <li>Repeated no-shows may result in requirement of full advance payment for future bookings</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Age and Eligibility</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Minimum age requirement: 18+ for direct consultations</li>
                  <li>Parents may book Jyotish consultations for minors</li>
                  <li>You must provide accurate personal information</li>
                  <li>Birth details must be as accurate as possible for Jyotish consultations</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Service Restrictions</h2>
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
                <h2 className="text-2xl font-semibold mb-4">7. Data Collection & Storage</h2>
                
                <h3 className="text-xl font-medium mb-3">7.1 Information We Collect</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>General:</strong> Mobile number, email address</li>
                  <li><strong>Jyotish Consultations:</strong> Birth date, time, and place of birth</li>
                  <li><strong>Website/App Development:</strong> Comprehensive business information as required for project development</li>
                  <li><strong>Excel Consultations:</strong> Relevant business/personal data for project requirements</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">7.2 Data Storage & Security</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All personal information is stored securely on personal devices</li>
                  <li>Website/App project data may be stored in private GitHub repositories</li>
                  <li>No personal information is shared with third parties</li>
                  <li>Data access is limited to service delivery purposes only</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">7.3 Session Recording Policy</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Jyotish consultations may be audio recorded for creating digital consultation reports</li>
                  <li>Audio recordings are stored temporarily and deleted after document creation</li>
                  <li>Recordings are not shared with anyone and remain confidential</li>
                  <li>Clients will be informed before any recording begins</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
                
                <h3 className="text-xl font-medium mb-3">8.1 Website/App Development Ownership</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ownership transfers to client upon full payment completion</li>
                  <li>Until full payment, ownership remains with Mihir Chavan</li>
                  <li>Techniques, methodologies, and frameworks used remain with Mihir Chavan</li>
                  <li>Right to use similar techniques and approaches in future projects is retained</li>
                  <li>Custom graphics/content created may be reused unless specifically provided by client</li>
                  <li>Client-provided content remains client's exclusive property</li>
                  <li>App development ownership terms are case-by-case basis</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">8.2 Portfolio & Marketing Rights</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Completed websites may be displayed in portfolio</li>
                  <li>Project details may be used for marketing purposes</li>
                  <li>Client information will be anonymized unless explicit permission granted</li>
                  <li>Right to showcase work style and technical capabilities</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Disclaimers & Service Limitations</h2>
                
                <h3 className="text-xl font-medium mb-3">9.1 Jyotish Consultations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Consultations provide guidance on possibilities and potential outcomes, not guarantees</li>
                  <li>Services are for guidance and spiritual insight purposes only</li>
                  <li>Not intended as substitute for medical, financial, legal, or professional advice</li>
                  <li>Decisions based on consultations are entirely client's responsibility</li>
                  <li>Accuracy depends on correct and complete birth information provided</li>
                  <li>Results and interpretations may vary based on individual circumstances</li>
                  <li>No guarantees are made regarding life events or outcomes</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">9.2 General Service Limitations</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>All services provided "as is" without express or implied warranties</li>
                  <li>Incorrect, incomplete, or false data provided will yield incorrect results</li>
                  <li>We are not liable for decisions made based on our guidance or deliverables</li>
                  <li>Technology limitations, internet connectivity issues may affect service delivery</li>
                  <li>Service quality depends on client cooperation and timely feedback</li>
                </ul>

                <h3 className="text-xl font-medium mb-3">9.3 Business Structure</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Services provided under freelancing/individual consultant capacity</li>
                  <li>No registered business entity or GST registration (small-scale operations)</li>
                  <li>All agreements are between individual client and Mihir Chavan personally</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Geographic Coverage & Service Delivery</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>In-person services:</strong> Mumbai, Maharashtra, India only</li>
                  <li><strong>Online services:</strong> Available globally with internet connectivity</li>
                  <li>Time zone coordination is client's responsibility for scheduling</li>
                  <li>No specific geographic restrictions for online consultations</li>
                  <li>Local laws and regulations of client's jurisdiction may apply to service usage</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Dispute Resolution</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Initial disputes should be communicated directly via email or phone</li>
                  <li>Good faith effort will be made to resolve issues through direct communication</li>
                  <li>Mediation preferred before any legal proceedings</li>
                  <li>Response to complaints within 48-72 hours during business days</li>
                  <li>Escalation procedures available for unresolved issues</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
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
                <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these Terms or our services shall be subject to the exclusive 
                  jurisdiction of the courts in Thane, Maharashtra, India.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services after changes constitutes acceptance 
                  of the new Terms.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
                <p className="mb-4">
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Mihir Chavan</strong></p>
                  <p>Email: contact@mihirchavan.in</p>
                  <p>Phone: +91 83697 90166</p>
                  <p>Location: Thane, Maharashtra, India</p>
                </div>
              </section>

              <div className="my-12 border-t-4 border-indigo-200"></div>

              <section className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Privacy Policy</h1>
                
                <h2 className="text-2xl font-semibold mb-4">16. Introduction to Privacy Policy</h2>
                <p className="mb-4">
                  This privacy policy sets out how Mihir Chavan uses and protects any information that you give 
                  Mihir Chavan when you visit their website and/or agree to purchase from them. Mihir Chavan is 
                  committed to ensuring that your privacy is protected. Should we ask you to provide certain 
                  information by which you can be identified when using this website, and then you can be assured 
                  that it will only be used in accordance with this privacy statement.
                </p>
                <p className="mb-4">
                  Mihir Chavan may change this policy from time to time by updating this page. You should check 
                  this page from time to time to ensure that you adhere to these changes.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">17. Information We Collect</h2>
                <p className="mb-4">We may collect the following information:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Name</li>
                  <li>Contact information including email address</li>
                  <li>Demographic information such as postcode, preferences and interests, if required</li>
                  <li>Other information relevant to customer surveys and/or offers</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">18. How We Use the Information</h2>
                <p className="mb-4">
                  We require this information to understand your needs and provide you with a better service, 
                  and in particular for the following reasons:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Internal record keeping</li>
                  <li>We may use the information to improve our products and services</li>
                  <li>
                    We may periodically send promotional emails about new products, special offers or other 
                    information which we think you may find interesting using the email address which you have provided
                  </li>
                  <li>
                    From time to time, we may also use your information to contact you for market research purposes. 
                    We may contact you by email, phone, fax or mail
                  </li>
                  <li>We may use the information to customise the website according to your interests</li>
                </ul>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">19. Information Security</h2>
                <p className="mb-4">
                  We are committed to ensuring that your information is secure. In order to prevent unauthorised 
                  access or disclosure we have put in suitable measures.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">20. How We Use Cookies</h2>
                <p className="mb-4">
                  A cookie is a small file which asks permission to be placed on your computer's hard drive. 
                  Once you agree, the file is added and the cookie helps analyze web traffic or lets you know 
                  when you visit a particular site. Cookies allow web applications to respond to you as an individual. 
                  The web application can tailor its operations to your needs, likes and dislikes by gathering and 
                  remembering information about your preferences.
                </p>
                
                <p className="mb-4">
                  We use traffic log cookies to identify which pages are being used. This helps us analyze data 
                  about webpage traffic and improve our website in order to tailor it to customer needs. We only 
                  use this information for statistical analysis purposes and then the data is removed from the system.
                </p>
                
                <p className="mb-4">
                  Overall, cookies help us provide you with a better website, by enabling us to monitor which pages 
                  you find useful and which you do not. A cookie in no way gives us access to your computer or any 
                  information about you, other than the data you choose to share with us.
                </p>
                
                <p className="mb-4">
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but 
                  you can usually modify your browser setting to decline cookies if you prefer. This may prevent 
                  you from taking full advantage of the website.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">21. Controlling Your Personal Information</h2>
                <p className="mb-4">
                  You may choose to restrict the collection or use of your personal information in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Whenever you are asked to fill in a form on the website, look for the box that you can click 
                    to indicate that you do not want the information to be used by anybody for direct marketing purposes
                  </li>
                  <li>
                    If you have previously agreed to us using your personal information for direct marketing purposes, 
                    you may change your mind at any time by writing to or emailing us at contact@mihirchavan.in
                  </li>
                </ul>
                
                <p className="mb-4">
                  We will not sell, distribute or lease your personal information to third parties unless we have 
                  your permission or are required by law to do so. We may use your personal information to send you 
                  promotional information about third parties which we think you may find interesting if you tell us 
                  that you wish this to happen.
                </p>
              </section>

              <Separator className="my-6" />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">22. Privacy Policy Contact Information</h2>
                <p className="mb-4">
                  If you believe that any information we are holding on you is incorrect or incomplete, please 
                  contact us as soon as possible. We will promptly correct any information found to be incorrect.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Mihir Chavan</strong></p>
                  <p>Email: contact@mihirchavan.in</p>
                  <p>Phone: +91 83697 90166</p>
                  <p>Location: Thane, Maharashtra</p>
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