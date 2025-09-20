// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFoundPage = () => {
  return (
    <div className="pt-16 pb-24">
      <SEOHead
        title="Page Not Found | Mihir Chavan"
        description="Sorry, the page you're looking for doesn't exist. Navigate back to explore Mihir Chavan's services including Excel consulting, Jyotish readings, and Art of Living programs."
        keywords="404, page not found, Mihir Chavan"
        ogImage="https://mihirchavan.in/og-image.svg"
      />
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-slate-200 mb-4">404</div>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Oops! Page Not Found
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            The page you're looking for seems to have taken a different path.
            Let's get you back on track to explore the services and programs available.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Explore Popular Pages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/about"
                className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <h3 className="font-medium text-slate-900">About Me</h3>
                <p className="text-sm text-slate-600">Learn about my journey</p>
              </Link>

              <Link
                to="/jyotish"
                className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <h3 className="font-medium text-slate-900">Jyotish Portal</h3>
                <p className="text-sm text-slate-600">Vedic astrology consultations</p>
              </Link>

              <Link
                to="/aol"
                className="p-4 rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                <h3 className="font-medium text-slate-900">Art of Living</h3>
                <p className="text-sm text-slate-600">Breathing & meditation programs</p>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;