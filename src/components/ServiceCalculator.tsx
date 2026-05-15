import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Clock, Users } from 'lucide-react';

interface ServiceOption {
  name: string;
  basePrice: number;
  complexity: number;
}

interface ServiceCalculator {
  id: string;
  name: string;
  options: ServiceOption[];
  description: string;
}

const services: ServiceCalculator[] = [
  {
    id: 'ai-implementation',
    name: 'AI Implementation',
    description: 'Custom AI/ML solution development',
    options: [
      { name: 'Pilot Project', basePrice: 25000, complexity: 1 },
      { name: 'Production System', basePrice: 75000, complexity: 2 },
      { name: 'Enterprise Solution', basePrice: 150000, complexity: 3 }
    ]
  },
  {
    id: 'automation',
    name: 'Workflow Automation',
    description: 'RPA and process automation',
    options: [
      { name: 'Single Process', basePrice: 15000, complexity: 1 },
      { name: 'Multi-Process Suite', basePrice: 45000, complexity: 2 },
      { name: 'Full Platform', basePrice: 100000, complexity: 3 }
    ]
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    description: 'Data strategy and BI solutions',
    options: [
      { name: 'Basic Dashboard', basePrice: 20000, complexity: 1 },
      { name: 'Advanced Analytics', basePrice: 60000, complexity: 2 },
      { name: 'Enterprise Intelligence', basePrice: 120000, complexity: 3 }
    ]
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Comprehensive business transformation',
    options: [
      { name: 'Strategy Phase', basePrice: 30000, complexity: 1 },
      { name: 'Implementation', basePrice: 90000, complexity: 2 },
      { name: 'Full Program', basePrice: 200000, complexity: 3 }
    ]
  }
];

const ServiceCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedOption, setSelectedOption] = useState(0);
  const [teamSize, setTeamSize] = useState(3);
  const [duration, setDuration] = useState(3);
  const [includeSupport, setIncludeSupport] = useState(true);

  const service = services.find(s => s.id === selectedService)!;
  const option = service.options[selectedOption];

  const calculations = useMemo(() => {
    const basePrice = option.basePrice;
    const teamCost = teamSize * 5000 * duration;
    const supportCost = includeSupport ? basePrice * 0.15 : 0;
    const total = basePrice + teamCost + supportCost;

    return {
      basePrice,
      teamCost,
      supportCost,
      total,
      monthlyRate: Math.round(total / duration)
    };
  }, [option, teamSize, duration, includeSupport]);

  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Project Scope Calculator</h2>
          </div>
          <p className="text-gray-400 mb-12">
            Estimate your project scope and investment. Adjust parameters to see how they impact your project timeline and budget.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Service Type</h3>
                <div className="space-y-3 mb-6">
                  {services.map(svc => (
                    <button
                      key={svc.id}
                      onClick={() => {
                        setSelectedService(svc.id);
                        setSelectedOption(0);
                      }}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedService === svc.id
                          ? 'bg-brand-green/20 border-brand-green text-white'
                          : 'bg-white/5 border-brand-green/20 text-gray-300 hover:border-brand-green/50'
                      }`}
                    >
                      <p className="font-semibold">{svc.name}</p>
                      <p className="text-sm opacity-75">{svc.description}</p>
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-white mb-4">Package</h3>
                <div className="space-y-2">
                  {service.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedOption(idx)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedOption === idx
                          ? 'bg-brand-teal/20 border-brand-teal'
                          : 'bg-white/5 border-brand-green/20 hover:border-brand-green/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">{opt.name}</span>
                        <span className="text-brand-green font-semibold">${opt.basePrice.toLocaleString()}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-6">Customize</h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="flex items-center gap-2 text-white font-medium">
                        <Users className="w-4 h-4 text-brand-green" />
                        Team Size
                      </label>
                      <span className="text-brand-green font-bold">{teamSize} people</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                    <p className="text-xs text-gray-400 mt-2">Dedicated team members: ${teamSize * 5000}/month each</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="flex items-center gap-2 text-white font-medium">
                        <Clock className="w-4 h-4 text-brand-green" />
                        Duration
                      </label>
                      <span className="text-brand-green font-bold">{duration} months</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full h-2 bg-brand-green/20 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                  </div>

                  <label className="flex items-center gap-3 p-3 bg-brand-green/10 border border-brand-green/20 rounded-lg cursor-pointer hover:bg-brand-green/20 transition-colors">
                    <input
                      type="checkbox"
                      checked={includeSupport}
                      onChange={(e) => setIncludeSupport(e.target.checked)}
                      className="w-4 h-4 accent-brand-green cursor-pointer"
                    />
                    <span className="text-white font-medium">Include post-launch support (15%)</span>
                  </label>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-green/20 to-brand-teal/20 border border-brand-green/30 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-2">Estimated Investment</p>
                <h3 className="text-4xl font-bold text-brand-green mb-6">
                  ${calculations.total.toLocaleString()}
                </h3>

                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Base Project</span>
                    <span className="text-white font-medium">${calculations.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Team Cost</span>
                    <span className="text-white font-medium">${calculations.teamCost.toLocaleString()}</span>
                  </div>
                  {includeSupport && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">Support</span>
                      <span className="text-white font-medium">${calculations.supportCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-brand-green/20 pt-3 flex justify-between">
                    <span className="text-gray-300">Monthly Rate</span>
                    <span className="text-brand-green font-bold">${calculations.monthlyRate.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-brand-green text-brand-dark font-bold rounded-lg hover:bg-brand-teal transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCalculator;