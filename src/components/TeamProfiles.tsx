import React, { useState } from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Amara Okonkwo',
    role: 'Chief Technology Officer',
    bio: 'AI researcher and innovator with 15+ years of experience building intelligent systems. Passionate about democratizing AI for African businesses.',
    expertise: ['Machine Learning', 'AI Architecture', 'Data Science', 'Strategic Planning'],
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'amara@waziri.labs'
  },
  {
    id: '2',
    name: 'James Kipchoge',
    role: 'Head of Automation',
    bio: 'Workflow automation expert specializing in RPA and business process optimization. Has led 50+ successful automation projects.',
    expertise: ['RPA', 'Workflow Automation', 'Process Optimization', 'Implementation'],
    image: 'https://images.pexels.com/photos/3814517/pexels-photo-3814517.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'james@waziri.labs'
  },
  {
    id: '3',
    name: 'Sarah Adeyemi',
    role: 'Senior Data Strategist',
    bio: 'Data transformation leader helping organizations build data-driven cultures. Expert in analytics architecture and insights generation.',
    expertise: ['Data Strategy', 'Analytics', 'Business Intelligence', 'Insights'],
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'sarah@waziri.labs'
  },
  {
    id: '4',
    name: 'Emma Kinuthia',
    role: 'Solutions Architect',
    bio: 'Cloud architect designing scalable solutions for enterprise clients. Specializes in system design and technical implementation.',
    expertise: ['Cloud Architecture', 'System Design', 'Scalability', 'Enterprise Solutions'],
    image: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'emma@waziri.labs'
  },
  {
    id: '5',
    name: 'David Kiprotich',
    role: 'Digital Transformation Lead',
    bio: 'Change management expert guiding organizations through digital transformation. Over 20 years in enterprise consulting.',
    expertise: ['Change Management', 'Digital Transformation', 'Strategy', 'Leadership'],
    image: 'https://images.pexels.com/photos/3814517/pexels-photo-3814517.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'david@waziri.labs'
  },
  {
    id: '6',
    name: 'Zainab Hassan',
    role: 'Client Success Manager',
    bio: 'Dedicated to ensuring client success and satisfaction. Manages relationships and ensures projects deliver value.',
    expertise: ['Client Relations', 'Project Management', 'Success Strategy', 'Communication'],
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'zainab@waziri.labs'
  }
];

const TeamProfiles: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Meet the experts driving innovation and transformation across our practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <div
              key={member.id}
              className="bg-white/5 border border-brand-green/20 rounded-lg overflow-hidden hover:border-brand-green/50 hover:bg-white/10 transition-all group cursor-pointer"
              onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
            >
              <div className="h-56 overflow-hidden bg-brand-dark/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-brand-green text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{member.bio}</p>

                {expandedId === member.id && (
                  <div className="border-t border-brand-green/20 pt-4 mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">Expertise</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map(skill => (
                        <span
                          key={skill}
                          className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green rounded text-sm font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="hidden sm:inline">Contact</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green rounded text-sm font-medium transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;