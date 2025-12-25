import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categoryColor: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  category, 
  excerpt, 
  author, 
  date, 
  readTime,
  categoryColor 
}) => {
  return (
    <article className="bg-brand-dark/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-green/20 hover:border-brand-green/50 group">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 ${categoryColor} text-xs font-medium rounded-full`}>
            {category}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-sm">
            <User className="w-4 h-4 mr-2" />
            <span className="mr-4">{author}</span>
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          
          <button className="flex items-center text-brand-green hover:text-brand-teal transition-colors text-sm font-medium">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in African Business",
      category: "Artificial Intelligence",
      excerpt: "Exploring how artificial intelligence is transforming businesses across Africa and creating new opportunities for growth.",
      author: "Makori Brian",
      date: "March 15, 2024",
      readTime: "5 min read",
      categoryColor: "bg-brand-green/10 text-brand-green border border-brand-green/20"
    },
    {
      title: "Automation Strategies for SMEs",
      category: "Automation",
      excerpt: "A comprehensive guide to implementing automation in small and medium enterprises without breaking the bank.",
      author: "Sarah Kimani",
      date: "March 12, 2024",
      readTime: "4 min read",
      categoryColor: "bg-brand-teal/10 text-brand-teal border border-brand-teal/20"
    },
    {
      title: "Data-Driven Decision Making",
      category: "Analytics",
      excerpt: "How modern businesses are leveraging data analytics to make better, more informed decisions.",
      author: "John Mwangi",
      date: "March 10, 2024",
      readTime: "6 min read",
      categoryColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-brand-dark to-brand-dark/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Blog</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Insights and perspectives on technology, business, and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="javascript:void(0)"
            className="inline-flex items-center px-8 py-3 bg-brand-gradient hover:bg-brand-gradient-hover text-white font-medium rounded-md shadow-lg hover:shadow-xl transition duration-300"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;