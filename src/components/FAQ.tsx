import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'What services does Waziri Collective Labs offer?',
    answer: 'We specialize in AI implementation, workflow automation, data analytics, and comprehensive digital transformation. Our solutions are tailored to help organizations optimize operations, reduce costs, and drive innovation.'
  },
  {
    id: '2',
    category: 'General',
    question: 'How do you approach new projects?',
    answer: 'We start with a deep discovery phase to understand your business challenges, goals, and constraints. We then develop a strategic roadmap, build proof-of-concept solutions, and iterate based on feedback before full-scale implementation.'
  },
  {
    id: '3',
    category: 'Projects',
    question: 'What is the typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Pilot projects typically take 2-3 months, while larger implementations may take 6-12 months. We always provide detailed timelines during the planning phase.'
  },
  {
    id: '4',
    category: 'Projects',
    question: 'Do you provide post-implementation support?',
    answer: 'Yes, we provide comprehensive post-launch support including training, monitoring, optimization, and maintenance. We offer support packages ranging from basic to premium levels based on your needs.'
  },
  {
    id: '5',
    category: 'Pricing',
    question: 'How do you determine project pricing?',
    answer: 'Pricing depends on project scope, complexity, required resources, and duration. We use our interactive calculator for initial estimates and provide detailed quotes after the discovery phase. We offer flexible engagement models including fixed-price, time-and-materials, and retainer options.'
  },
  {
    id: '6',
    category: 'Pricing',
    question: 'What is your cancellation policy?',
    answer: 'We work with clients to ensure project success. Contract terms and cancellation policies are customized per engagement. We typically include protection clauses for both parties and maintain open communication throughout the project.'
  },
  {
    id: '7',
    category: 'Technology',
    question: 'What technologies and platforms do you work with?',
    answer: 'We work with a wide range of modern technologies including cloud platforms (AWS, Google Cloud, Azure), AI/ML frameworks, RPA tools, and enterprise solutions. We choose the best technology stack for each specific use case.'
  },
  {
    id: '8',
    category: 'Technology',
    question: 'Do you help with legacy system modernization?',
    answer: 'Yes, we specialize in helping organizations modernize legacy systems. We assess existing infrastructure, develop migration strategies, and implement new solutions while minimizing disruption to ongoing operations.'
  },
  {
    id: '9',
    category: 'Security',
    question: 'How do you ensure data security?',
    answer: 'Data security is paramount. We follow industry best practices including encryption, access controls, compliance with regulations (GDPR, CCPA, etc.), regular security audits, and comprehensive documentation. All our solutions are built with security-first principles.'
  },
  {
    id: '10',
    category: 'Training',
    question: 'Do you provide team training?',
    answer: 'Absolutely. We provide comprehensive training programs including documentation, workshops, hands-on training sessions, and ongoing support to ensure your team can effectively use and maintain the solutions we build.'
  }
];

const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  const filtered = selectedCategory
    ? faqItems.filter(item => item.category === selectedCategory)
    : faqItems;

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-400 mb-12">
            Find answers to common questions about our services, projects, and processes.
          </p>

          <div className="flex gap-2 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-brand-green text-brand-dark'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-green text-brand-dark'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map(item => (
              <div
                key={item.id}
                className="bg-white/5 border border-brand-green/20 rounded-lg overflow-hidden hover:border-brand-green/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-xs text-brand-green font-semibold mb-1">{item.category}</p>
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-green transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-green flex-shrink-0 ml-4 transition-transform ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 pb-6 border-t border-brand-green/20">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-green/10 border border-brand-green/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Didn't find your answer?</h3>
            <p className="text-gray-400 mb-4">Our team is ready to help with any questions you may have.</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;