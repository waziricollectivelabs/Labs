import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Blog', href: '#blog' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <BrainCircuit className="w-8 h-8 text-brand-green mr-2" />
            <span className="text-white font-bold text-xl">Waziri Labs</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  activeSection === item.href.substring(1) 
                    ? 'text-brand-green' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-gradient hover:bg-brand-gradient-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Started
            </a>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-brand-dark px-2 pt-2 pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'bg-brand-green/20 text-brand-green'
                    : 'text-gray-300 hover:bg-brand-green/10 hover:text-brand-green'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-gradient hover:bg-brand-gradient-hover text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;