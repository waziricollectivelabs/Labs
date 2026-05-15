import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Waziri Collective Labs transformed our operations with their AI solution. We saw a 60% reduction in processing time and incredible ROI within 3 months. Their team is truly exceptional.',
    author: 'Kwame Asare',
    role: 'COO',
    company: 'Pan-African Finance Corp',
    rating: 5,
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    text: 'The automation framework they built has become the backbone of our operations. Not only did they deliver on time, but they stayed to ensure smooth adoption across our teams.',
    author: 'Aisha Okafor',
    role: 'CEO',
    company: 'Logistics Solutions Africa',
    rating: 5,
    image: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    text: 'Working with Waziri has been a game-changer. Their strategic approach to digital transformation is backed by real expertise. Highly recommended for any organization serious about innovation.',
    author: 'Marcus Johnson',
    role: 'VP Technology',
    company: 'East Africa Retail Group',
    rating: 5,
    image: 'https://images.pexels.com/photos/3814517/pexels-photo-3814517.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    text: 'The data analytics platform they delivered exceeded our expectations. We now have insights we never had before, driving better decisions across the organization daily.',
    author: 'Dr. Zainab Hassan',
    role: 'Head of Strategy',
    company: 'Innovation Labs Africa',
    rating: 5,
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '5',
    text: 'Exceptional service and outstanding technical expertise. They understood our challenges immediately and delivered solutions that actually work in our context.',
    author: 'Emmanuel Mwangi',
    role: 'Director',
    company: 'Enterprise Solutions Ltd',
    rating: 5,
    image: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '6',
    text: 'The ROI calculator and business case development they provided gave us the confidence to invest in digital transformation. Highly professional and results-oriented.',
    author: 'Susan Kipchoge',
    role: 'CFO',
    company: 'Regional Banking Group',
    rating: 5,
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToPrevious = () => {
    setAutoplay(false);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setAutoplay(false);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hear from clients who have transformed their operations with our solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-brand-green/10 to-brand-teal/10 border border-brand-green/30 rounded-lg p-8 sm:p-12">
            <div className="flex gap-1 mb-6">
              {Array(current.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-green fill-brand-green" />
                ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-white font-light mb-8 leading-relaxed">
              "{current.text}"
            </blockquote>

            <div className="flex items-center gap-4 mb-8">
              <img
                src={current.image}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border border-brand-green/30"
              />
              <div>
                <p className="font-semibold text-white">{current.author}</p>
                <p className="text-sm text-gray-400">{current.role}, {current.company}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-brand-green w-8' : 'bg-brand-green/30'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  onMouseEnter={() => setAutoplay(false)}
                  className="p-2 hover:bg-brand-green/20 rounded-lg transition-colors text-brand-green"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  onMouseEnter={() => setAutoplay(false)}
                  className="p-2 hover:bg-brand-green/20 rounded-lg transition-colors text-brand-green"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-2xl font-bold text-brand-green">50+</p>
              <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-2xl font-bold text-brand-green">98%</p>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-2xl font-bold text-brand-green">$25M+</p>
              <p className="text-sm text-gray-400">Client Value Created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;