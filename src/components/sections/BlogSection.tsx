import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../constants/blogs';

export const BlogSection = () => {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[14px] font-bold text-[#257995] uppercase tracking-[0.2em] block font-inter">KSS Insights</span>
            <h2 className="text-[36px] font-semibold text-[#0B1F3A] font-montserrat uppercase leading-tight">LATEST FROM OUR BLOG</h2>
          </div>
          <Link 
            to="/blogs" 
            className="text-[#257995] font-bold text-[14px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All Posts <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((blog, i) => (
            <Link 
              key={i} 
              to={`/blog/${blog.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-[#6B7280] font-inter mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#257995]" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} className="text-[#257995]" />
                    <span>{blog.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight mb-4 group-hover:text-[#257995] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-[#6B7280] font-inter text-sm leading-relaxed mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#257995] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
