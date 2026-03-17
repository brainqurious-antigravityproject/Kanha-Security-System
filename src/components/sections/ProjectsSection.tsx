
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    title: "Ch. Charan Singh Haryana Agricultural University",
    location: "Hisar, Haryana",
    image: "https://ais-dev-7ghgz654lihkhw4kgk772u-105713341735.asia-southeast1.run.app/api/attachments/037153e5-4e46-4c55-9e80-51f3915529ce/67d80587-c54d-450f-901b-c75c0262111a/image_1.png",
    category: "Education"
  },
  {
    title: "Shiv Nadar School",
    location: "Gurugram & Noida",
    image: "https://ais-dev-7ghgz654lihkhw4kgk772u-105713341735.asia-southeast1.run.app/api/attachments/037153e5-4e46-4c55-9e80-51f3915529ce/67d80587-c54d-450f-901b-c75c0262111a/image_3.png",
    category: "Education"
  },
  {
    title: "Zara Rossa Residential Complex",
    location: "Gurugram, Haryana",
    image: "https://ais-dev-7ghgz654lihkhw4kgk772u-105713341735.asia-southeast1.run.app/api/attachments/037153e5-4e46-4c55-9e80-51f3915529ce/67d80587-c54d-450f-901b-c75c0262111a/image_2.png",
    category: "Residential"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-[2px] bg-[#257995]"></span>
              <span className="text-sm font-bold text-[#257995] uppercase tracking-[0.3em] font-inter">Our Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight"
            >
              Recent <span className="text-[#257995]">Projects</span> <br />
              We've Delivered
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/projects"
              className="group flex items-center gap-3 text-[#0B1F3A] font-bold uppercase tracking-widest text-sm hover:text-[#257995] transition-colors"
            >
              View All Projects
              <div className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center group-hover:bg-[#257995] group-hover:text-white transition-all">
                <ChevronRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-4">
                  <span className="bg-[#257995] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-montserrat uppercase leading-tight group-hover:text-[#257995] transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
