import React, { useEffect } from 'react';
// Added missing Award and ShieldCheck imports
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Award, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9810021487",
      desc: "Mon-Sat from 9am to 6pm.",
      action: "tel:+919810021487",
      actionText: "Call now"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info.kssystem19@gmail.com",
      desc: "Our support team is online 24/7.",
      action: "mailto:info.kssystem19@gmail.com",
      actionText: "Send email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "New Delhi, India",
      desc: "E-155, Suman Colony, Chattarpur, Delhi - 110074",
      action: "https://maps.google.com",
      actionText: "Get directions"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#2F80ED 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
          <div className="flex justify-center">
            <span className="text-[#2F80ED] text-[12px] font-bold tracking-[0.4em] uppercase font-inter border border-[#2F80ED]/30 px-6 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight">
            CONNECT WITH <span className="text-[#2F80ED]">OUR EXPERTS</span>
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Our engineering team is ready to help you design and implement a world-class security ecosystem.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 mt-2 max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center text-center group hover:border-[#2F80ED]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F5F7FA] text-[#2F80ED] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2F80ED] group-hover:text-white transition-all duration-300 shadow-sm">
                <method.icon size={28} />
              </div>
              <h3 className="text-[20px] font-bold text-[#0B1F3A] font-montserrat uppercase mb-2">{method.title}</h3>
              <p className="text-[16px] font-bold text-[#2F80ED] font-inter mb-4">{method.value}</p>
              <p className="text-sm text-[#6B7280] font-inter leading-relaxed mb-6">{method.desc}</p>
              <a 
                href={method.action} 
                className="text-[13px] font-bold text-[#0B1F3A] uppercase tracking-widest font-montserrat flex items-center gap-2 hover:text-[#2F80ED] transition-colors"
              >
                {method.actionText} <Clock size={14} className="opacity-40" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Form & Info */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[32px] shadow-2xl border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F80ED]/5 rounded-bl-full pointer-events-none" />
            
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B1F3A] font-montserrat uppercase">Send an Inquiry</h2>
                <p className="text-[#6B7280] font-inter">Complete the form below and an expert will contact you within 24 hours.</p>
              </div>

              <form 
                action="https://formspree.io/f/xwvnqqzy"
                method="POST"
                className="space-y-6 md:space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      name="Full Name"
                      required
                      className="w-full bg-[#F5F7FA] border-2 border-transparent rounded-xl p-4 text-[#0B1F3A] focus:bg-white focus:ring-4 focus:ring-[#2F80ED]/10 focus:border-[#2F80ED] outline-none transition-all font-inter" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-[#F5F7FA] border-2 border-transparent rounded-xl p-4 text-[#0B1F3A] focus:bg-white focus:ring-4 focus:ring-[#2F80ED]/10 focus:border-[#2F80ED] outline-none transition-all font-inter" 
                      placeholder="email@company.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Inquiry Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-[#F5F7FA] border-2 border-transparent rounded-xl p-4 text-[#0B1F3A] focus:bg-white focus:ring-4 focus:ring-[#2F80ED]/10 focus:border-[#2F80ED] outline-none transition-all font-inter appearance-none cursor-pointer"
                  >
                    <option>CCTV & Surveillance</option>
                    <option>Building Management (BMS)</option>
                    <option>Fire Protection Systems</option>
                    <option>Access Control & Biometrics</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Project Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    required
                    className="w-full bg-[#F5F7FA] border-2 border-transparent rounded-xl p-4 text-[#0B1F3A] focus:bg-white focus:ring-4 focus:ring-[#2F80ED]/10 focus:border-[#2F80ED] outline-none transition-all resize-none font-inter" 
                    placeholder="Describe your security requirements in detail..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#0B1F3A] text-white font-bold text-[15px] uppercase tracking-widest rounded-xl hover:bg-[#2F80ED] transition-all duration-300 font-montserrat shadow-xl flex items-center justify-center gap-3 group"
                >
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Additional Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-[24px] font-bold text-[#0B1F3A] font-montserrat uppercase border-l-4 border-[#2F80ED] pl-6">
                Why Work With Us?
              </h3>
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, title: "24/7 Priority Support", desc: "Our AMC customers receive dedicated emergency response within 4 hours." },
                  { icon: Award, title: "OEM Certified Engineering", desc: "Every design is vetted by our manufacturer-certified senior engineers." },
                  { icon: ShieldCheck, title: "Secure Deployment", desc: "We ensure all networking and IP equipment is hardened against vulnerabilities." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#2F80ED] border border-gray-100">
                      <item.icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#0B1F3A] text-sm uppercase font-montserrat">{item.title}</h4>
                      <p className="text-sm text-[#6B7280] font-inter leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0B1F3A] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10 space-y-4">
                <h4 className="text-lg font-bold font-montserrat uppercase">Headquarters Location</h4>
                <div className="flex items-start gap-4 text-white/70 font-inter text-sm">
                  <MapPin size={18} className="shrink-0 text-[#2F80ED]" />
                  <p>E-155, Suman Colony, Chattarpur,<br />Delhi - 110074<br />(Near Baba Balaknathmandir)</p>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden mt-6 bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Map View Unavailable</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};