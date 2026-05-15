import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface BlogCategory {
  name: string;
  description: string;
  frequency: string;
}

const categories: BlogCategory[] = [
  { name: 'AI & Machine Learning', description: 'Latest trends and practical implementations', frequency: 'Bi-weekly' },
  { name: 'Automation & RPA', description: 'Workflow optimization and case studies', frequency: 'Weekly' },
  { name: 'Data Analytics', description: 'Analytics insights and best practices', frequency: 'Bi-weekly' },
  { name: 'Digital Transformation', description: 'Strategy and change management', frequency: 'Weekly' }
];

const BlogSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['AI & Machine Learning']));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleCategory = (category: string) => {
    const newSelected = new Set(selectedCategories);
    if (newSelected.has(category)) {
      newSelected.delete(category);
    } else {
      newSelected.add(category);
    }
    setSelectedCategories(newSelected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (selectedCategories.size === 0) {
      setError('Please select at least one category');
      return;
    }

    setSubmitted(true);
    setError('');
    setEmail('');
    setSelectedCategories(new Set(['AI & Machine Learning']));

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Mail className="w-12 h-12 text-brand-green" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Subscribe to Our Blog</h2>
            <p className="text-gray-400">
              Get curated insights delivered to your inbox based on your interests.
            </p>
          </div>

          <div className="bg-white/5 border border-brand-green/20 rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label className="block text-white font-semibold mb-3">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-brand-green/30 text-white placeholder-gray-500 focus:outline-none focus:border-brand-green transition-colors"
                />
              </div>

              <div className="mb-8">
                <label className="block text-white font-semibold mb-4">Select Topics (Choose at least one)</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {categories.map(category => (
                    <label
                      key={category.name}
                      className="cursor-pointer"
                    >
                      <div className={`p-4 rounded-lg border transition-all ${
                        selectedCategories.has(category.name)
                          ? 'bg-brand-green/20 border-brand-green'
                          : 'bg-white/5 border-brand-green/20 hover:border-brand-green/50'
                      }`}>
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={selectedCategories.has(category.name)}
                            onChange={() => toggleCategory(category.name)}
                            className="w-4 h-4 mt-1 accent-brand-green cursor-pointer"
                          />
                          <div className="flex-1">
                            <p className="font-semibold text-white">{category.name}</p>
                            <p className="text-sm text-gray-400 mb-2">{category.description}</p>
                            <p className="text-xs text-brand-green">{category.frequency}</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm mb-4">{error}</p>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-lg transition-all duration-300"
              >
                Subscribe to Selected Topics
              </button>
            </form>

            {submitted && (
              <div className="mt-6 flex items-center justify-center gap-2 text-brand-green">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Subscription confirmed! Check your email for details.</span>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-brand-green/20">
              <p className="text-center text-gray-400 text-sm">
                We respect your privacy. Unsubscribe at any time. See our{' '}
                <a href="#" className="text-brand-green hover:text-brand-teal transition-colors">privacy policy</a>.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-brand-green mb-2">10K+</div>
              <p className="text-gray-400 text-sm">Subscribers</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-brand-green mb-2">4</div>
              <p className="text-gray-400 text-sm">Topics Available</p>
            </div>
            <div className="bg-white/5 border border-brand-green/20 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-brand-green mb-2">35%</div>
              <p className="text-gray-400 text-sm">Average Open Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSubscription;