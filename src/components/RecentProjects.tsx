import React, { useState } from 'react';
import { Calendar, TrendingUp, Users, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  category: string;
  completionDate?: string;
  impact: string;
  teamSize: number;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Supply Chain Optimization',
    client: 'Pan-African Logistics',
    status: 'Completed',
    category: 'AI/Automation',
    completionDate: '2 weeks ago',
    impact: '35% faster delivery times',
    teamSize: 8,
    image: 'https://images.pexels.com/photos/1388369/pexels-photo-1388369.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    title: 'Fraud Detection System',
    client: 'Regional Banking Group',
    status: 'Completed',
    category: 'Machine Learning',
    completionDate: '1 month ago',
    impact: '99.2% detection accuracy',
    teamSize: 6,
    image: 'https://images.pexels.com/photos/8369453/pexels-photo-8369453.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    title: 'Customer Intelligence Platform',
    client: 'East Africa Retail',
    status: 'In Progress',
    category: 'Analytics',
    impact: '+42% customer retention',
    teamSize: 5,
    image: 'https://images.pexels.com/photos/3657109/pexels-photo-3657109.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    title: 'Workflow Automation Suite',
    client: 'Innovation Labs Africa',
    status: 'In Progress',
    category: 'RPA',
    impact: '80% manual work reduction',
    teamSize: 7,
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    title: 'Data Strategy Implementation',
    client: 'Continental Manufacturing',
    status: 'Planning',
    category: 'Strategy',
    impact: 'Data-driven operations',
    teamSize: 4,
    image: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    title: 'Cloud Migration Program',
    client: 'Enterprise Solutions Ltd',
    status: 'Planning',
    category: 'Infrastructure',
    impact: '40% cost reduction',
    teamSize: 9,
    image: 'https://images.pexels.com/photos/3808516/pexels-photo-3808516.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const statusColors = {
  'Completed': { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  'In Progress': { bg: 'bg-brand-green/20', text: 'text-brand-green', border: 'border-brand-green/30' },
  'Planning': { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' }
};

const RecentProjects: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filtered = selectedStatus
    ? projects.filter(p => p.status === selectedStatus)
    : projects;

  const statusOptions = Array.from(new Set(projects.map(p => p.status)));

  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-400 mb-8">
            See what we're currently working on and recent completed projects.
          </p>

          <div className="flex gap-2 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedStatus(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedStatus === null
                  ? 'bg-brand-green text-brand-dark'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Projects ({projects.length})
            </button>
            {statusOptions.map(status => {
              const count = projects.filter(p => p.status === status).length;
              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedStatus === status
                      ? 'bg-brand-green text-brand-dark'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {status} ({count})
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(project => {
              const colors = statusColors[project.status];
              return (
                <div
                  key={project.id}
                  className="bg-white/5 border border-brand-green/20 rounded-lg overflow-hidden hover:border-brand-green/50 hover:bg-white/10 transition-all group"
                >
                  <div className="h-48 overflow-hidden bg-brand-dark/50 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {project.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.client}</p>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-green" />
                        <span className="text-gray-300">{project.impact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-green" />
                        <span className="text-gray-300">{project.teamSize} experts</span>
                      </div>
                    </div>

                    {project.completionDate && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Completed {project.completionDate}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-brand-green/20">
                      <span className="text-xs text-brand-green font-semibold">{project.category}</span>
                      <button className="p-1 hover:bg-brand-green/20 rounded transition-colors text-brand-green">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;