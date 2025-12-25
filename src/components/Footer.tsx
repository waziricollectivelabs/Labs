import React from 'react';
import { BrainCircuit, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-6 h-6 text-brand-green mr-2" />
              <span className="text-white font-bold text-lg">Waziri Labs</span>
            </div>
            <p className="mb-4 text-sm">
              Intelligent systems for a more human future. Because precise automation unlocks human creativity.
            </p>
            <div className="flex space-x-4">
              <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">AI & Automation</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">Data Intelligence</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">Tech Strategy</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">Research Labs</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">Impact Projects</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-green transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-brand-green transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="hover:text-brand-green transition-colors">Blog</a></li>
              <li><a href="javascript:void(0)" className="hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech City, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                <span>hello@wazirilabs.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-green/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Waziri Collective Labs. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">Terms of Service</a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-brand-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;