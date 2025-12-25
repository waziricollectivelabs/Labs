import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
          service: '',
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join the Collective</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Ready to turn your boldest ideas into scalable systems? Let's collaborate on something that matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-brand-dark rounded-xl overflow-hidden shadow-xl p-8 border border-brand-green/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-brand-green" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Received</h4>
                  <p className="text-gray-400">
                    Thank you for reaching out! Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-brand-dark/50 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-brand-dark/50 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-brand-dark/50 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-brand-dark/50 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-automation">AI & Automation</option>
                        <option value="data-intelligence">Data Intelligence</option>
                        <option value="tech-strategy">Tech Strategy</option>
                        <option value="research-labs">Research Labs</option>
                        <option value="impact-projects">Impact Projects</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-brand-dark/50 border border-brand-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-white"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md shadow transition duration-300 flex items-center justify-center ${
                      formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div>
              <div className="bg-brand-dark rounded-xl overflow-hidden shadow-xl p-8 mb-8 border border-brand-green/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Work With Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Deep Technical Expertise</h4>
                      <p className="text-gray-400 text-sm">Our team brings decades of combined experience in AI, machine learning, and software engineering.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Strategic Approach</h4>
                      <p className="text-gray-400 text-sm">We think beyond code, aligning technology solutions with your business goals and growth targets.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Rapid Delivery</h4>
                      <p className="text-gray-400 text-sm">Our agile development approach ensures quick iterations and continuous deployment of value.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-brand-green/20 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Long-term Partnership</h4>
                      <p className="text-gray-400 text-sm">We're invested in your success for the long run, providing ongoing support and strategic guidance.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-gradient rounded-xl overflow-hidden shadow-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Schedule a Consultation</h3>
                <p className="text-gray-100 mb-6">
                  Prefer a live conversation? Book a 30-minute consultation with our team to discuss your project needs.
                </p>
                <a
                  href="javascript:void(0)"
                  className="block w-full px-6 py-3 bg-white text-brand-dark font-medium rounded-md shadow text-center hover:bg-gray-100 transition duration-300"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;