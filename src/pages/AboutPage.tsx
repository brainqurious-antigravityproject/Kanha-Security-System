
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Target, Award, ShieldCheck, 
  Settings, Zap, CheckCircle2, Layout, 
  Search, Package, Cpu, Wrench, ChevronRight
} from 'lucide-react';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      icon: Search,
      title: "Basic Survey",
      desc: "Comprehensive site evaluation and requirement analysis."
    },
    {
      icon: Layout,
      title: "Design",
      desc: "Customized solution planning based on international standards."
    },
    {
      icon: Package,
      title: "Supply",
      desc: "Authorized dealer of prestigious branded products."
    },
    {
      icon: Cpu,
      title: "Engineering",
      desc: "Technical implementation using state-of-the-art technology."
    },
    {
      icon: CheckCircle2,
      title: "Commissioning",
      desc: "Final testing and handover with detailed manuals."
    },
    {
      // Fixed: Replace non-existent 'Tool' icon from lucide-react with 'Wrench'
      icon: Wrench,
      title: "Maintenance",
      desc: "Dedicated support and Annual Maintenance Contracts (AMC)."
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] pt-32 pb-24 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-x-2 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white/40 mb-8 md:mb-12 font-inter">
            <Link to="/" className="hover:text-[#257995] transition-colors">Home</Link>
            <ChevronRight size={12} className="md:size-[14px]" />
            <span className="text-[#257995]">About Us</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#257995]"></span>
                <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Who We Are</span>
              </div>
              <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight">
                SECURE, SAFE & <span className="text-[#257995]">AUTOMATED</span>
              </h1>
              <p className="text-[18px] text-white/70 font-inter leading-relaxed">
                Kanha Security System is a New Delhi-based electronic security, safety, and automation company. We provide a wide spectrum of world-class security services to domestic and international markets.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 aspect-video md:aspect-square lg:aspect-video">
                <img 
                  src="/project_images/building_management_system.webp" 
                  alt="Professional Office Space" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#257995] p-8 rounded-xl shadow-xl hidden md:block">
                <div className="text-white font-montserrat">
                  <span className="text-4xl font-bold block">15+</span>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">Years Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-[36px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                ROOTED IN <span className="text-[#257995]">EXPERTISE</span>
              </h2>
              <p className="text-[17px] text-[#4B5563] font-inter leading-relaxed">
                The company's founders are former marketers of security services, electronic security, fire alarm equipment, and market research. This deep domain knowledge allows us to operate effectively across both domestic and international sectors.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 p-4 bg-[#F5F7FA] rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#257995]">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] font-montserrat uppercase text-sm">Our Mission</h4>
                    <p className="text-sm text-[#6B7280] font-inter">To deliver professional security solutions that increase efficiency and longevity through proper maintenance.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-[#F5F7FA] rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#257995]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] font-montserrat uppercase text-sm">Our Team</h4>
                    <p className="text-sm text-[#6B7280] font-inter">An efficient and energetic workforce with world-class competence and cultural diversity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative group">
                <img 
                  src="/project_images/corporate_project.webp" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="text-xl font-bold font-montserrat uppercase">Collaborative Planning</h4>
                  <p className="opacity-80 font-inter">We sit with clients to understand their specific needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Philosophy */}
      <section className="py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="flex justify-center mb-6">
             <span className="text-[#257995] text-[12px] font-bold tracking-[0.3em] uppercase font-inter border border-[#257995]/40 px-6 py-2 rounded-full">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-bold font-montserrat uppercase tracking-tight">
            Planning Before <span className="text-[#257995]">Execution</span>
          </h2>
          <p className="text-[18px] text-white/60 font-inter max-w-3xl mx-auto mt-6">
            We believe in planning before starting a project because Project Planning is a core part of Project Management. A proper plan leads to successful & cost-effective execution.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[#257995] transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-[#257995]/20 rounded-xl flex items-center justify-center text-[#257995] mb-6 group-hover:scale-110 transition-transform">
                <m.icon size={28} />
              </div>
              <h3 className="text-xl font-bold font-montserrat uppercase mb-3">{m.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-inter">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us / Values Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#257995]/10 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg border border-gray-100">
                    <img src="/project_images/access_control_modern.webp" alt="Detail 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#0B1F3A] rounded-2xl p-6 text-white text-center">
                    <Award size={32} className="mx-auto mb-2 text-[#257995]" />
                    <span className="text-xs font-bold uppercase tracking-wider block">OEM Certified</span>
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-[#257995] rounded-2xl p-6 text-white text-center">
                    <ShieldCheck size={32} className="mx-auto mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider block">International Standards</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-lg border border-gray-100">
                    <img src="/project_images/fire_alarm_system.webp" alt="Detail 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-[#257995]"></span>
                  <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">The KSS Edge</span>
                </div>
                <h2 className="text-[30px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                  UNCOMPROMISING <br />
                  <span className="text-[#257995]">QUALITY STANDARDS</span>
                </h2>
              </div>
              <p className="text-[17px] text-[#6B7280] font-inter leading-relaxed">
                We are the authorized dealer for some of the prestigious brands and popular products of international standards and have OEM's certified engineers for appropriate commissioning of the products supplied by us.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#257995]" size={20} />
                  <span className="font-bold text-[#0B1F3A] font-inter text-sm uppercase">Global Competence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#257995]" size={20} />
                  <span className="font-bold text-[#0B1F3A] font-inter text-sm uppercase">Timely Deliveries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#257995]" size={20} />
                  <span className="font-bold text-[#0B1F3A] font-inter text-sm uppercase">Expert Support Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#257995]" size={20} />
                  <span className="font-bold text-[#0B1F3A] font-inter text-sm uppercase">International Brands</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-bold text-[#0B1F3A] font-inter uppercase tracking-wide italic border-l-4 border-[#257995] pl-4">
                  "Proper maintenance increases product efficiency and longevity."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B1F3A] font-montserrat uppercase">Ready to partner with a leader?</h2>
          <p className="text-[#6B7280] font-inter text-lg">
            Experience security solutions that are engineered for reliability and designed for the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-10 py-5 bg-[#0B1F3A] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#257995] transition-all shadow-lg font-montserrat">
              Get A Consultation
            </a>
            <a href="tel:+919810021487" className="px-10 py-5 bg-white text-[#0B1F3A] border-2 border-[#0B1F3A] font-bold uppercase tracking-widest rounded-lg hover:bg-[#0B1F3A] hover:text-white transition-all font-montserrat">
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
