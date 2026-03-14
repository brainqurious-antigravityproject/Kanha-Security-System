import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@kanhasecurity.in", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#257995]"></span>
                <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Expert Consultation</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                Let's Secure <br className="hidden md:block" /> Your Future
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#6B7280] font-inter max-w-lg leading-relaxed">
                Our engineering team is ready to design a custom security ecosystem tailored to your specific organizational needs.
              </p>
            </div>

            <div className="space-y-8 md:space-y-10">
              {/* Phone */}
              <div className="flex items-center sm:items-start gap-5 md:gap-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white shadow-sm border border-gray-100 rounded-[12px] flex items-center justify-center text-[#257995] group-hover:bg-[#257995] group-hover:text-white transition-all duration-300">
                  <Phone size={20} className="md:size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[12px] font-bold text-[#6B7280] uppercase tracking-widest mb-1 font-inter">Direct Line</h4>
                  <p className="text-[18px] md:text-[22px] font-bold text-[#0B1F3A] font-montserrat">+91 9810021487</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center sm:items-start gap-5 md:gap-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white shadow-sm border border-gray-100 rounded-[12px] flex items-center justify-center text-[#257995] group-hover:bg-[#257995] group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="md:size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[12px] font-bold text-[#6B7280] uppercase tracking-widest mb-1 font-inter">Email Inquiries</h4>
                  <p className="text-[16px] sm:text-[18px] md:text-[22px] font-bold text-[#0B1F3A] font-montserrat break-words">sales@kanhasecurity.in</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center sm:items-start gap-5 md:gap-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-white shadow-sm border border-gray-100 rounded-[12px] flex items-center justify-center text-[#257995] group-hover:bg-[#257995] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="md:size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[12px] font-bold text-[#6B7280] uppercase tracking-widest mb-1 font-inter">Headquarters</h4>
                  <p className="text-[18px] md:text-[22px] font-bold text-[#0B1F3A] font-montserrat">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-xl border border-gray-100 relative overflow-hidden z-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#257995]/10 rounded-bl-full pointer-events-none -z-10 translate-x-12 -translate-y-12" />
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0B1F3A] font-montserrat uppercase">Message Sent!</h3>
                  <p className="text-[#6B7280] font-inter max-w-xs mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[#257995] font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-[#F5F7FA] border-transparent rounded-[8px] p-4 text-[#0B1F3A] focus:bg-white focus:ring-2 focus:ring-[#257995]/20 focus:border-[#257995] outline-none transition-all font-inter" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-[#F5F7FA] border-transparent rounded-[8px] p-4 text-[#0B1F3A] focus:bg-white focus:ring-2 focus:ring-[#257995]/20 focus:border-[#257995] outline-none transition-all font-inter" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">Inquiry Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-[#F5F7FA] border-transparent rounded-[8px] p-4 text-[#0B1F3A] focus:bg-white focus:ring-2 focus:ring-[#257995]/20 focus:border-[#257995] outline-none transition-all font-inter appearance-none cursor-pointer"
                  >
                    <option>Building Management System (BMS)</option>
                    <option>Integrated Security Management System (ISMS)</option>
                    <option>Access Control System</option>
                    <option>CCTV System (IP & Analogue)</option>
                    <option>Fire Alarm System</option>
                    <option>Fire Suppression System</option>
                    <option>Perimeter Protection System</option>
                    <option>Public Address & Voice Evacuation (PA / PAVA)</option>
                    <option>Audio-Visual & Lighting Control System</option>
                    <option>Data & Voice Networking Solutions</option>
                    <option>Datacentre Protection & VESDA</option>
                    <option>Contraband Detection Solutions</option>
                    <option>Gate Automation & Barriers</option>
                    <option>Emergency Lighting & Fire Hydrant Systems</option>
                    <option>Rodent Repellent & Water Leak Detection Systems</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#0B1F3A] uppercase font-inter tracking-wider">How can we help?</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    required
                    className="w-full bg-[#F5F7FA] border-transparent rounded-[8px] p-4 text-[#0B1F3A] focus:bg-white focus:ring-2 focus:ring-[#257995]/20 focus:border-[#257995] outline-none transition-all resize-none font-inter" 
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-[#0B1F3A] text-white font-bold text-[16px] uppercase tracking-widest rounded-[8px] hover:bg-[#257995] transition-all duration-300 font-montserrat shadow-lg transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
