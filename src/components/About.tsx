import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="bg-brand-dark/50 p-6 rounded-lg border border-brand-green/20 hover:border-brand-green/50 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      title: "Human-Centered Design",
      description: "We build technology that adapts to humans, not the other way around. Our systems are intuitive, accessible, and empowering."
    },
    {
      title: "Ethical AI Practices",
      description: "We prioritize transparency, fairness, and responsible use in all our AI implementations, with rigorous testing for bias."
    },
    {
      title: "Collaborative Innovation",
      description: "We believe the best solutions emerge from diverse perspectives and cross-disciplinary collaboration."
    },
    {
      title: "Sustainable Impact",
      description: "We design for long-term value creation, with scalable solutions that grow with your organization."
    }
  ];

  const capabilities = [
    "Custom AI model development",
    "Enterprise workflow automation",
    "Predictive analytics systems",
    "Natural language processing",
    "Computer vision solutions",
    "Data pipeline engineering",
    "ML model deployment & monitoring",
    "System architecture design"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Waziri Ethos</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We don't just build tech. We build frameworks for freedom—freeing people from outdated
            systems, repetitive tasks, and decision fatigue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Technical Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
              <p className="text-gray-400 mb-6">
                Because technology should serve people—not replace them. We blend cutting-edge technology
                with strategic thinking to create solutions that make a meaningful difference.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md transition duration-300"
              >
                Work With Us
              </a>
            </div>
          </div>
          
          <div className="bg-brand-dark/50 rounded-xl overflow-hidden shadow-xl border border-brand-green/20">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Who We Serve</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-brand-green mb-2">Startups & Founders</h4>
                  <p className="text-gray-400">
                    Launching lean, scalable digital products with a focus on market fit and growth.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-brand-teal mb-2">Enterprises</h4>
                  <p className="text-gray-400">
                    Modernizing legacy systems and processes for a future-ready competitive edge.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-brand-green mb-2">Social Impact Organizations</h4>
                  <p className="text-gray-400">
                    Using data and technology to fuel equity, mental health initiatives, and opportunity.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-brand-teal mb-2">Governments & Institutions</h4>
                  <p className="text-gray-400">
                    Implementing citizen-centered innovation and efficient service delivery systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;