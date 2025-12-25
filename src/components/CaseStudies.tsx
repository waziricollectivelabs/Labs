import React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap } from 'lucide-react';

interface CaseStudyCardProps {
  icon: React.ReactNode;
  title: string;
  client: string;
  description: string;
  tags: string[];
  gradient: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  icon, 
  title, 
  client, 
  description, 
  tags, 
  gradient 
}) => {
  return (
    <div className="bg-brand-dark/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-green/20 hover:border-brand-green/50 group">
      <div className={`h-2 ${gradient}`}></div>
      <div className="p-6">
        <div className="mb-4 text-brand-green group-hover:text-brand-teal transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-brand-teal text-sm font-medium mb-3">{client}</p>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-medium rounded-full border border-brand-green/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <button className="flex items-center text-brand-green hover:text-brand-teal transition-colors text-sm font-medium">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI-Powered Customer Service Automation",
      client: "Client: Leading Telecom Provider",
      description: "Implemented an AI chatbot solution that reduced customer service response times by 80%",
      tags: ["AI", "Automation", "Customer Service"],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Data Analytics for Retail Optimization",
      client: "Client: Major Retail Chain",
      description: "Developed predictive analytics system for inventory management, reducing waste by 35%",
      tags: ["Analytics", "Retail", "Machine Learning"],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Supply Chain Automation Platform",
      client: "Client: Manufacturing Company",
      description: "Created end-to-end supply chain automation, improving efficiency by 50%",
      tags: ["Supply Chain", "Automation", "Integration"],
      gradient: "bg-brand-gradient"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-brand-dark/90 to-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Real-world examples of how we've helped businesses transform through technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;