
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: "Building Management Systems in Delhi: The Complete Guide to Smarter, Safer Buildings",
      excerpt: "Discover how Building Management Systems (BMS) can reduce energy costs, enhance security, and automate your commercial building. Expert solutions by KSS Delhi.",
      date: "March 15, 2026",
      author: "Kanha Security System",
      slug: "building-management-systems-delhi",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "IP CCTV vs Analogue CCTV: Which Surveillance System Is Right for Your Business in Delhi?",
      excerpt: "Compare IP CCTV and Analogue CCTV systems for your business in Delhi. Expert insights on cost, image quality, scalability & installation by Kanha Security System.",
      date: "March 15, 2026",
      author: "Kanha Security System",
      slug: "ip-cctv-vs-analogue-cctv-delhi",
      image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fire Protection Systems for Commercial Buildings in Delhi: Types, Standards & What You Need to Know",
      excerpt: "Learn about fire detection, alarm & suppression systems for commercial buildings in Delhi. NBC/NFPA-compliant solutions by Kanha Security System.",
      date: "March 15, 2026",
      author: "Kanha Security System",
      slug: "fire-protection-systems-commercial-buildings-delhi",
      image: "https://images.unsplash.com/photo-1599700403969-f77b3df74e8e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <section className="pt-40 pb-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight mb-6">
            KSS <span className="text-[#257995]">INSIGHTS</span>
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            Expert analysis, technical guides, and industry news from the leaders in electronic security and building automation.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
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
                <div className="absolute top-4 left-4 bg-[#257995] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Technical Guide
                </div>
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
                <p className="text-[#6B7280] font-inter text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#257995] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
