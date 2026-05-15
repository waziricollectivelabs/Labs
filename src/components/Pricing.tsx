import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  highlight?: boolean;
  features: Array<{ name: string; included: boolean }>;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$25K',
    duration: 'per project',
    description: 'Perfect for pilot projects and small implementations',
    features: [
      { name: 'Single process automation', included: true },
      { name: 'Up to 2 team members', included: true },
      { name: 'Basic analytics', included: true },
      { name: '3-month engagement', included: true },
      { name: 'Post-launch support (1 month)', included: true },
      { name: '24/7 priority support', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Dedicated account manager', included: false }
    ],
    cta: 'Start Small'
  },
  {
    name: 'Professional',
    price: '$75K',
    duration: 'per project',
    description: 'Our most popular choice for growing businesses',
    highlight: true,
    features: [
      { name: 'Multi-process automation suite', included: true },
      { name: 'Up to 5 team members', included: true },
      { name: 'Advanced analytics & reporting', included: true },
      { name: '6-month engagement', included: true },
      { name: 'Post-launch support (3 months)', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Quarterly strategy reviews', included: true }
    ],
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    duration: 'contact us',
    description: 'Comprehensive solutions for large-scale transformation',
    features: [
      { name: 'Full platform implementation', included: true },
      { name: 'Unlimited team size', included: true },
      { name: 'Enterprise intelligence suite', included: true },
      { name: '12-month+ engagement', included: true },
      { name: 'Ongoing support & optimization', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Full custom development', included: true },
      { name: 'Dedicated account manager', included: true }
    ],
    cta: 'Contact Sales'
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Choose the plan that's right for your organization. All plans include ongoing optimization and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden transition-all ${
                tier.highlight
                  ? 'ring-2 ring-brand-green bg-gradient-to-b from-brand-green/10 to-brand-dark'
                  : 'bg-white/5 border border-brand-green/20 hover:border-brand-green/50'
              }`}
            >
              {tier.highlight && (
                <div className="bg-brand-green text-brand-dark text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-brand-green">{tier.price}</span>
                  <p className="text-gray-400 text-sm mt-1">{tier.duration}</p>
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-bold transition-all mb-8 ${
                    tier.highlight
                      ? 'bg-brand-green text-brand-dark hover:bg-brand-teal'
                      : 'bg-brand-gradient hover:bg-brand-gradient-hover text-white'
                  }`}
                >
                  {tier.cta}
                </button>

                <div className="space-y-4">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-green/10 border border-brand-green/20 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-3">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">
            We offer flexible engagement models and can customize packages based on your specific needs and budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-brand-green text-brand-dark font-bold rounded-md hover:bg-brand-teal transition-colors"
          >
            Contact Our Sales Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;