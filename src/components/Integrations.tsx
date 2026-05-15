import React, { useState } from 'react';
import { Zap, Database, Code, BarChart3, Lock, Cloud } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const integrations: Integration[] = [
  {
    id: '1',
    name: 'Cloud Platforms',
    category: 'Infrastructure',
    description: 'AWS, Google Cloud, Microsoft Azure - Deploy and scale with enterprise-grade infrastructure',
    icon: <Cloud className="w-6 h-6" />
  },
  {
    id: '2',
    name: 'Data Warehousing',
    category: 'Data',
    description: 'BigQuery, Snowflake, Redshift - Centralized data management and analytics',
    icon: <Database className="w-6 h-6" />
  },
  {
    id: '3',
    name: 'Business Intelligence',
    category: 'Analytics',
    description: 'Tableau, Power BI, Looker - Advanced visualization and reporting tools',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: '4',
    name: 'RPA Platforms',
    category: 'Automation',
    description: 'UiPath, Automation Anywhere, Blue Prism - Enterprise workflow automation',
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: '5',
    name: 'API & Integration',
    category: 'Integration',
    description: 'REST, GraphQL, Kafka - Seamless system connectivity and data flow',
    icon: <Code className="w-6 h-6" />
  },
  {
    id: '6',
    name: 'Security & Compliance',
    category: 'Security',
    description: 'Okta, Vault, CloudSecurity - Enterprise-grade security and governance',
    icon: <Lock className="w-6 h-6" />
  }
];

const Integrations: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(integrations[0].id);
  const selected = integrations.find(i => i.id === selectedId) || integrations[0];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technology Stack</h2>
          <p className="text-gray-400 mb-12">
            We integrate with industry-leading platforms and tools to build comprehensive solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {integrations.map(integration => (
                <button
                  key={integration.id}
                  onClick={() => setSelectedId(integration.id)}
                  className={`w-full p-4 rounded-lg border transition-all text-left ${
                    selectedId === integration.id
                      ? 'bg-brand-green/20 border-brand-green'
                      : 'bg-white/5 border-brand-green/20 hover:border-brand-green/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={selectedId === integration.id ? 'text-brand-green' : 'text-gray-400'}>
                      {integration.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{integration.name}</h3>
                      <p className="text-xs text-gray-400">{integration.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-8 flex flex-col justify-between min-h-96">
              <div>
                <div className="text-brand-green mb-4">
                  {selected.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{selected.name}</h3>
                <p className="text-xs text-brand-green font-semibold mb-4">{selected.category}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{selected.description}</p>

                <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    We have deep expertise with {selected.name} and can guide you through implementation, migration, and optimization.
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">20+</div>
              <p className="text-gray-400 text-sm">Platform Integrations</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">15+</div>
              <p className="text-gray-400 text-sm">Data Sources</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
              <p className="text-gray-400 text-sm">Secure Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;