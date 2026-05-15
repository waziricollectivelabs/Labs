import React from 'react';
import { Building2 } from 'lucide-react';

interface Client {
  name: string;
  category: string;
}

const clients: Client[] = [
  { name: 'Pan-African Finance', category: 'Financial Services' },
  { name: 'Logistics Solutions Africa', category: 'Logistics' },
  { name: 'East Africa Retail Group', category: 'Retail' },
  { name: 'Innovation Labs Africa', category: 'Tech' },
  { name: 'Enterprise Solutions Ltd', category: 'Consulting' },
  { name: 'Regional Banking Group', category: 'Banking' },
  { name: 'Continental Manufacturing', category: 'Manufacturing' },
  { name: 'African Energy Corp', category: 'Energy' },
  { name: 'Digital Services Network', category: 'Technology' },
  { name: 'Global Trade Finance', category: 'Finance' },
  { name: 'Smart City Initiatives', category: 'Smart Cities' },
  { name: 'Healthcare Systems Africa', category: 'Healthcare' }
];

const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-green font-semibold text-sm mb-2">TRUSTED BY LEADERS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Partnering with Industry Leaders</h2>
          <p className="text-gray-400">Organizations across Africa trust us to drive their digital transformation</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-brand-green/20 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-brand-green/50 hover:bg-white/10 transition-all group cursor-pointer min-h-32"
            >
              <div className="text-brand-green/40 group-hover:text-brand-green transition-colors mb-3">
                <Building2 className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-brand-green transition-colors">
                {client.name}
              </h3>
              <p className="text-xs text-gray-500">{client.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-green/10 border border-brand-green/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Join 50+ Leading Organizations</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Partner with Waziri Collective Labs to transform your business. Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md transition-all"
          >
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;