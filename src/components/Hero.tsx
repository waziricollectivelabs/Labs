import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center bg-brand-dark overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-green/30 via-transparent to-brand-teal/20"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Intelligent Systems</span>
              <span className="block mt-2">for a <span className="text-brand-green">More Human</span> Future</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              At Waziri Collective Labs, we design AI-powered solutions that amplify human potential. 
              Because precise automation unlocks creativity.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#services"
                className="px-8 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition duration-300 flex items-center justify-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="w-full h-[400px] bg-brand-gradient rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
              
              <div className="absolute top-[30%] left-[20%] w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg animate-float-slow"></div>
              <div className="absolute top-[60%] left-[65%] w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg animate-float"></div>
              <div className="absolute top-[20%] left-[70%] w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg animate-float-slow"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 backdrop-blur-xl rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-gray-400 mb-8">Trusted by innovative organizations</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-24 bg-white/10 rounded"></div>
            <div className="h-8 w-32 bg-white/10 rounded"></div>
            <div className="h-8 w-28 bg-white/10 rounded"></div>
            <div className="h-8 w-20 bg-white/10 rounded"></div>
            <div className="h-8 w-36 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-brand-green rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero