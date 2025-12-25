import React from 'react';
import { Brain, Database, Compass, FlaskConical, Heart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, gradient }) => {
  return (
    <div className="bg-brand-dark/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-green/20 hover:border-brand-green/50 group">
      <div className={`h-2 ${gradient}`}></div>
      <div className="p-6">
        <div className="mb-4 text-brand-green group-hover:text-brand-teal transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-brand-teal mr-2">•</span>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI & Automation Systems",
      description: "Intelligent workflows that free your team from repetitive tasks and manual processes.",
      features: [
        "Workflow Automation",
        "Robotic Process Automation (RPA)",
        "API Integrations",
        "Custom AI Solutions"
      ],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data & Decision Intelligence",
      description: "Transform your data into actionable insights and predictive intelligence.",
      features: [
        "Interactive Dashboards",
        "Data Lakes & Warehouses",
        "Machine Learning Models",
        "Predictive Analytics"
      ],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <Compass className="w-10 h-10" />,
      title: "Tech Strategy & Transformation",
      description: "Navigate your digital journey with expert guidance and strategic roadmaps.",
      features: [
        "CTO-as-a-Service",
        "Innovation Sprints",
        "System Architecture",
        "Digital Transformation"
      ],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "Research & Experimental Labs",
      description: "Pushing boundaries with cutting-edge AI research and advanced prototyping.",
      features: [
        "Custom LLMs",
        "Generative AI Solutions",
        "NLP & Computer Vision",
        "AI Prototyping"
      ],
      gradient: "bg-brand-gradient"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Impact Projects",
      description: "Technology with purpose, addressing real-world challenges across sectors.",
      features: [
        "AI for Mental Health",
        "Educational Technology",
        "Governance Systems",
        "Sustainability Solutions"
      ],
      gradient: "bg-brand-gradient"
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We craft AI-first solutions rooted in clarity, scalability, and purpose. Our expertise spans
            across multiple domains to create systems that augment human capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;