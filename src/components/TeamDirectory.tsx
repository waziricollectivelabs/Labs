import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  location: string;
}

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Dr. Amara Okonkwo', role: 'CTO', expertise: ['AI', 'ML', 'Architecture'], location: 'Lagos, Nigeria' },
  { id: '2', name: 'James Kipchoge', role: 'Head of Automation', expertise: ['RPA', 'Automation', 'Process'], location: 'Nairobi, Kenya' },
  { id: '3', name: 'Sarah Adeyemi', role: 'Data Strategist', expertise: ['Analytics', 'Strategy', 'BI'], location: 'Lagos, Nigeria' },
  { id: '4', name: 'Emma Kinuthia', role: 'Solutions Architect', expertise: ['Cloud', 'Architecture', 'Design'], location: 'Nairobi, Kenya' },
  { id: '5', name: 'David Kiprotich', role: 'Transformation Lead', expertise: ['Strategy', 'Change', 'Leadership'], location: 'Kigali, Rwanda' },
  { id: '6', name: 'Zainab Hassan', role: 'Success Manager', expertise: ['Relations', 'Management', 'Strategy'], location: 'Dar es Salaam, Tanzania' },
  { id: '7', name: 'Marcus Johnson', role: 'Integration Specialist', expertise: ['Integration', 'APIs', 'Development'], location: 'Lagos, Nigeria' },
  { id: '8', name: 'Chioma Ukwu', role: 'ML Engineer', expertise: ['ML', 'Python', 'Data Science'], location: 'Accra, Ghana' },
  { id: '9', name: 'Ahmed Hassan', role: 'Cloud Architect', expertise: ['AWS', 'GCP', 'Azure'], location: 'Cairo, Egypt' },
  { id: '10', name: 'Fatima Al-Mansouri', role: 'Security Lead', expertise: ['Security', 'Compliance', 'Infrastructure'], location: 'Dubai, UAE' },
  { id: '11', name: 'Tom Mwangi', role: 'Product Manager', expertise: ['Product', 'Strategy', 'Development'], location: 'Nairobi, Kenya' },
  { id: '12', name: 'Sandra Okafor', role: 'Business Analyst', expertise: ['Analysis', 'Requirements', 'Documentation'], location: 'Lagos, Nigeria' }
];

const TeamDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const allExpertise = Array.from(new Set(teamMembers.flatMap(m => m.expertise)));
  const allLocations = Array.from(new Set(teamMembers.map(m => m.location)));

  const filtered = useMemo(() => {
    return teamMembers.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesExpertise = !selectedExpertise || member.expertise.includes(selectedExpertise);
      const matchesLocation = !selectedLocation || member.location === selectedLocation;

      return matchesSearch && matchesExpertise && matchesLocation;
    });
  }, [searchTerm, selectedExpertise, selectedLocation]);

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Team Member Directory</h2>
          <p className="text-gray-400 mb-8">
            Find the right expert for your needs. Search by name, role, expertise, or location.
          </p>

          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-brand-green/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-green transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-gray-400 block mb-2">Filter by Expertise</label>
                <select
                  value={selectedExpertise || ''}
                  onChange={(e) => setSelectedExpertise(e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-brand-green/30 rounded-lg text-white focus:outline-none focus:border-brand-green transition-colors"
                >
                  <option value="">All Expertise</option>
                  {allExpertise.map(exp => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400 block mb-2">Filter by Location</label>
                <select
                  value={selectedLocation || ''}
                  onChange={(e) => setSelectedLocation(e.target.value || null)}
                  className="w-full px-3 py-2 bg-white/5 border border-brand-green/30 rounded-lg text-white focus:outline-none focus:border-brand-green transition-colors"
                >
                  <option value="">All Locations</option>
                  {allLocations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {(searchTerm || selectedExpertise || selectedLocation) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedExpertise(null);
                  setSelectedLocation(null);
                }}
                className="text-sm text-brand-green hover:text-brand-teal transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {filtered.map(member => (
                <div key={member.id} className="bg-white/5 border border-brand-green/20 rounded-lg p-5 hover:border-brand-green/50 hover:bg-white/10 transition-all">
                  <h3 className="font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-green text-sm font-semibold mb-3">{member.role}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {member.expertise.map(exp => (
                      <span key={exp} className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400">{member.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No team members found matching your search.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Can't find the right expert? Let us know your needs.</p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDirectory;