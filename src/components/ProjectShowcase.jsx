// src/components/ProjectShowcase.jsx
import React, { useState } from 'react';
import { ExternalLink, Palette, Briefcase, Heart, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Website portfolio data with SEO-rich descriptions
const portfolioWebsites = [
  {
    id: 1,
    name: "Anjanavivek.in",
    url: "https://anjanavivek.in",
    description: "Personal portfolio website for Anjanavivek showcasing professional work and achievements.",
    category: "Portfolio",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Divyavenugopal.com",
    url: "https://divyavenugopal.com",
    description: "Professional website for Divya Venugopal featuring services and portfolio showcase.",
    category: "Portfolio",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Growlogyy.com",
    url: "https://growlogyy.com",
    description: "Psychology services and coaching website with modern design and user experience.",
    category: "Business",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "Shreyavats.com",
    url: "https://shreyavats.com",
    description: "Personal website for Shreya Vats highlighting professional expertise and services.",
    category: "Portfolio",
    icon: Heart,
    color: "from-rose-500 to-orange-500"
  },
  {
    id: 5,
    name: "Rimaengineer.com",
    url: "https://rimaengineer.com",
    description: "Personal website for Rima Engineers showcasint their expertise as a holistic healer and Art Of Living Faculty.",
    category: "Portfolio",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    name: "Moonmood.xyz",
    url: "https://moonmood.xyz",
    description: "Chandrashtam Calculator - Vedic astrology tool for calculating lunar phases and their effects.",
    category: "Astrology Tool",
    icon: Calendar,
    color: "from-violet-500 to-purple-500"
  }
];

// Project card component with enhanced SEO and accessibility
const ProjectCard = ({ project }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Track analytics if needed
    if (typeof gtag !== 'undefined') {
      gtag('event', 'portfolio_click', {
        'event_category': 'Portfolio',
        'event_label': project.name,
        'value': 1
      });
    }
    
    // Small delay for UX feedback
    setTimeout(() => {
      window.open(project.url, '_blank', 'noopener,noreferrer');
      setIsLoading(false);
    }, 200);
  };

  return (
    <article className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-indigo-200">
      {/* Animated gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon with gradient background */}
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${project.color} text-white shadow-md`}>
        <project.icon className="h-5 w-5" />
      </div>
      
      {/* Project details */}
      <div className="relative z-10">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
            {project.name}
          </h3>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <Button 
          onClick={handleClick}
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200 group-hover:shadow-md"
          aria-label={`Visit ${project.name} website`}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </>
          )}
        </Button>
      </div>
    </article>
  );
};

// Main ProjectShowcase component
const ProjectShowcase = () => {
  // Generate structured data for SEO
  const generateStructuredData = () => {
    const projects = portfolioWebsites.map(project => ({
      "@type": "CreativeWork",
      "@id": `https://mihirchavan.in/#project-${project.id}`,
      "name": project.name,
      "description": project.description,
      "url": project.url,
      "creator": {
        "@id": "https://mihirchavan.in/#person"
      },
      "genre": project.category,
      "dateCreated": "2024"
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Mihir Chavan Web Development Portfolio",
      "description": "Collection of websites and applications built by Mihir Chavan",
      "numberOfItems": portfolioWebsites.length,
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": project
      }))
    };
  };

  // Add structured data to page
  React.useEffect(() => {
    const structuredData = generateStructuredData();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = 'portfolio-structured-data';
    
    // Remove existing portfolio structured data if present
    const existingScript = document.getElementById('portfolio-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('portfolio-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section aria-labelledby="portfolio-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioWebsites.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
        <p className="text-sm text-indigo-700 text-center">
          <strong>Note:</strong> These projects showcase my skills in web development, design, and AI-assisted programming. 
          Each website is built with modern technologies and optimized for performance and user experience.
        </p>
      </div>
    </section>
  );
};

export default ProjectShowcase;