
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Building2 } from 'lucide-react';

const PROJECTS = [
  {
    title: "Ch. Charan Singh Haryana Agricultural University",
    location: "Hisar, Haryana",
    description: "Implemented a comprehensive security and surveillance network across the university campus, including high-definition IP CCTV systems and integrated fire safety protocols.",
    image: "/project_images/charan_singh_university__project.webp",
    category: "Education"
  },
  {
    title: "Shiv Nadar School",
    location: "Gurugram & Noida",
    description: "Designed and installed state-of-the-art security infrastructure for multiple campuses, featuring advanced access control, perimeter security, and campus-wide surveillance.",
    image: "/project_images/shiv_nadar_school__project-1.webp",
    category: "Education"
  },
  {
    title: "Zara Rossa Residential Complex",
    location: "Gurugram, Haryana",
    description: "Complete residential security solution including multi-tier access control, visitor management systems, and 24/7 surveillance for the entire complex.",
    image: "/project_images/zara_society_project.webp",
    category: "Residential"
  },
  {
    title: "Guru Gobind Singh Indraprastha University",
    location: "Dwarka, Delhi",
    description: "Deployment of large-scale IP-based surveillance and network infrastructure to ensure safety across the sprawling university campus.",
    image: "/project_images/GGS_Indraprashta_University_project.webp",
    category: "Education"
  },
  {
    title: "Tata Communications Data Center",
    location: "Delhi NCR",
    description: "High-security integration for mission-critical infrastructure, featuring biometric access control and advanced fire suppression systems.",
    image: "/project_images/tata_project.webp",
    category: "Corporate"
  },
  {
    title: "Modern Corporate Hub",
    location: "Noida, UP",
    description: "Integrated Building Management System (IBMS) for a multi-tenant corporate building, optimizing energy efficiency and security operations.",
    image: "/project_images/corporate_project.webp",
    category: "Commercial"
  },
  {
    title: "Shiv Nadar School",
    location: "Gurugram & Noida",
    description: "Designed and installed state-of-the-art security infrastructure for multiple campuses, featuring advanced access control, perimeter security, and campus-wide surveillance.",
    image: "/project_images/shiv_nadar_school__project-2.webp",
    category: "Education"
  },
  {
    title: "DLF Cyber City Corporate Office",
    location: "Gurugram, Haryana",
    description: "Premium security deployment for a high-profile corporate office, including multi-factor biometric authentication and smart visitor management.",
    image: "/project_images/society_project.webp",
    category: "Corporate"
  }
];

export const ProjectsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#257995] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#257995] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#257995] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat uppercase mb-6 leading-tight">
              Showcasing Our <br />
              <span className="text-[#257995]">Success Stories</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-inter">
              From educational institutions to corporate giants, we have delivered uncompromising security solutions across Delhi NCR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#F5F7FA] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#257995] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#257995] mb-3">
                    <MapPin size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-montserrat uppercase mb-4 group-hover:text-[#257995] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] font-inter leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#257995] font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 size={16} />
                    <span>Project Completed</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0B1F3A] rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#257995]/20 rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat uppercase mb-6">
                  Trusted by Over <span className="text-[#257995]">500+ Clients</span>
                </h2>
                <p className="text-white/70 font-inter leading-relaxed mb-8">
                  Our commitment to quality and excellence has made us the preferred security partner for leading organisations in the region. We don't just install systems; we build lasting relationships based on trust and reliability.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[#257995] mb-2">15+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#257995] mb-2">1000+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/50">Projects Delivered</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Government Institutions",
                  "Educational Campuses",
                  "Corporate Data Centers",
                  "Residential Townships",
                  "Industrial Facilities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="w-10 h-10 bg-[#257995] rounded-lg flex items-center justify-center">
                      <Building2 size={20} className="text-white" />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
