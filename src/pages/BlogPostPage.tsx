
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronLeft, Share2, Plus, Minus, Facebook, Twitter, Linkedin } from 'lucide-react';

export const BlogPostPage = () => {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent("Building Management Systems in Delhi: The Complete Guide to Smarter, Safer Buildings");

  // For now, we only have one blog post. In a real app, this would be fetched from a CMS or data file.
  if (slug !== 'building-management-systems-delhi') {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link to="/blogs" className="text-[#257995] hover:underline mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="pt-40 pb-16 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link to="/blogs" className="flex items-center gap-2 text-[#257995] font-bold text-sm uppercase tracking-widest mb-8 hover:translate-x-[-4px] transition-transform">
            <ChevronLeft size={16} /> Back to Blogs
          </Link>
          
          <h1 className="text-[32px] md:text-[48px] font-bold text-white font-montserrat uppercase leading-tight mb-8">
            Building Management Systems in Delhi: The Complete Guide to Smarter, Safer Buildings
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-inter">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#257995]" />
              <span>March 15, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#257995]" />
              <span>Kanha Security System</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#257995]" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-lg max-w-none font-inter text-[#4B5563] leading-relaxed">
          <p className="text-xl text-[#1F2937] font-medium mb-8">
            Managing a large commercial building in Delhi is no small task. Between rising energy costs, complex HVAC infrastructure, security demands, and regulatory compliance, facility managers are under constant pressure. A Building Management System (BMS) changes all of that — centralising control of every critical system under one intelligent platform.
          </p>

          <p>
            At Kanha Security System (KSS), we have helped commercial buildings, hospitals, hotels, and educational institutions across New Delhi implement end-to-end BMS solutions that cut operational costs, improve occupant safety, and deliver measurable ROI. This guide breaks down everything you need to know about building management systems — from how they work to what to look for when choosing a provider in Delhi.
          </p>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl my-12 border border-gray-100">
            <h3 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-lg mb-4">Table of Contents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0">
              <li><a href="#what-is-bms" onClick={(e) => scrollToSection(e, 'what-is-bms')} className="text-[#257995] hover:underline">What Is a Building Management System (BMS)?</a></li>
              <li><a href="#key-components" onClick={(e) => scrollToSection(e, 'key-components')} className="text-[#257995] hover:underline">Key Components of a Modern BMS</a></li>
              <li><a href="#energy-costs" onClick={(e) => scrollToSection(e, 'energy-costs')} className="text-[#257995] hover:underline">How BMS Reduces Energy Costs</a></li>
              <li><a href="#integrated-security" onClick={(e) => scrollToSection(e, 'integrated-security')} className="text-[#257995] hover:underline">BMS and Integrated Security</a></li>
              <li><a href="#industries" onClick={(e) => scrollToSection(e, 'industries')} className="text-[#257995] hover:underline">Industries That Benefit Most</a></li>
              <li><a href="#bms-vs-traditional" onClick={(e) => scrollToSection(e, 'bms-vs-traditional')} className="text-[#257995] hover:underline">BMS vs. Traditional Controls</a></li>
              <li><a href="#choosing-provider" onClick={(e) => scrollToSection(e, 'choosing-provider')} className="text-[#257995] hover:underline">Choosing a BMS Provider in Delhi</a></li>
              <li><a href="#kss-implementation" onClick={(e) => scrollToSection(e, 'kss-implementation')} className="text-[#257995] hover:underline">How KSS Implements BMS</a></li>
            </ul>
          </div>

          <h2 id="what-is-bms" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">What Is a Building Management System (BMS)?</h2>
          <p>
            A Building Management System, often referred to as a Building Automation System (BAS), is a computer-based control platform installed within commercial or institutional buildings to monitor and manage all mechanical, electrical, and electromechanical systems.
          </p>
          <p>
            In simple terms, think of a BMS as the "brain" of your building. It continuously monitors data from sensors spread across the facility — measuring temperature, humidity, air quality, energy consumption, lighting levels, and more — and makes real-time automated decisions to keep your building running efficiently and safely.
          </p>
          <p>
            Modern BMS platforms go far beyond basic HVAC control. Today's systems integrate fire alarms, CCTV surveillance, access control, emergency lighting, and even lift management under a single, unified dashboard. This holistic approach to building intelligence is what makes BMS one of the most valuable investments a building owner or facility manager in Delhi can make.
          </p>
          <div className="bg-[#0B1F3A] text-white p-8 rounded-2xl my-10">
            <p className="m-0 italic">
              "According to the Bureau of Energy Efficiency (BEE), India, commercial buildings account for nearly 30% of India's total electricity consumption — and a significant portion of this is wasted through inefficient HVAC and lighting operations. A well-implemented BMS can reduce energy consumption by 20–30% annually."
            </p>
          </div>

          <h2 id="key-components" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Key Components of a Modern BMS</h2>
          <p>
            Understanding the components of a BMS helps facility managers make informed decisions about what their building actually needs. A comprehensive BMS solution from providers like Kanha Security System typically includes:
          </p>
          
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">HVAC Monitoring and Control</h3>
          <p>
            The heating, ventilation, and air conditioning (HVAC) subsystem is usually the largest energy consumer in any commercial building. A BMS monitors zone temperatures, controls air handling units, manages chiller and boiler operations, and automatically adjusts settings based on occupancy patterns and external weather data.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Power and Energy Management</h3>
          <p>
            Real-time tracking of energy usage across all floors and departments allows building managers to identify wastage, benchmark consumption, and meet sustainability targets. Features include:
          </p>
          <ul>
            <li>Diesel level monitoring for backup generators</li>
            <li>Electrical demand management to avoid peak tariff charges</li>
            <li>Thermal (BTU) meter billing for multi-tenant buildings</li>
            <li>Power factor correction monitoring</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Lighting Control Systems</h3>
          <p>
            Smart lighting control through a BMS enables occupancy-based switching, daylight harvesting, and scheduled dimming — particularly valuable in large office complexes and shopping malls where lighting accounts for a major share of electricity bills.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Environmental Monitoring</h3>
          <p>
            Advanced BMS platforms monitor:
          </p>
          <ul>
            <li>Temperature and humidity in server rooms and clean rooms</li>
            <li>Oxygen and CO₂ levels in enclosed parking areas</li>
            <li>Chlorine levels in water treatment areas</li>
            <li>Water levels in tanks and sumps to prevent overflow or shortages</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Integration with Third-Party Systems</h3>
          <p>
            A key advantage of modern BMS is open-protocol integration. Platforms using BACnet, Modbus, or LonWorks protocols can seamlessly connect with third-party fire alarm panels, CCTV systems, access control systems, and lift management systems — creating a truly unified smart building platform.
          </p>

          <h2 id="energy-costs" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">How BMS Reduces Energy Costs in Commercial Buildings</h2>
          <p>
            Energy efficiency is the single biggest driver behind BMS adoption in India today. Here's how a building automation system directly impacts your utility bills:
          </p>
          <ul>
            <li><strong>Demand-side management:</strong> The BMS identifies peak consumption periods and redistributes loads automatically to avoid expensive peak-hour tariffs.</li>
            <li><strong>HVAC scheduling:</strong> HVAC systems are programmed to run only during occupied hours, eliminating the common problem of air conditioning running overnight in empty offices.</li>
            <li><strong>Lighting automation:</strong> Motion sensors and daylight sensors integrated with the BMS switch off lights in unoccupied zones automatically.</li>
            <li><strong>Predictive maintenance alerts:</strong> The BMS flags equipment running outside normal parameters before they fail — preventing energy-wasting mechanical breakdowns.</li>
            <li><strong>Carbon footprint reporting:</strong> Many BMS platforms now generate energy consumption reports that help organizations comply with environmental reporting standards such as GRIHA and LEED certification requirements in India.</li>
          </ul>
          <p>
            A mid-size office building of 50,000 sq. ft. in Delhi operating without a BMS could easily waste ₹15–25 lakh annually on avoidable energy costs. The payback period for a BMS installation typically ranges from 18 to 36 months, making it a financially sound investment.
          </p>

          <h2 id="integrated-security" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">BMS and Integrated Security: A Powerful Combination</h2>
          <p>
            One of the most significant advantages of modern BMS platforms is their ability to integrate with Integrated Security Management Systems (ISMS). At Kanha Security System, our BMS solutions are designed to interface directly with:
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">CCTV Surveillance</h3>
          <p>
            IP-based CCTV cameras can be integrated into the BMS dashboard, allowing security operators to receive real-time video feeds triggered by specific events — such as a door forced open or a fire alarm activated. Both Analogue CCTV and IP CCTV systems are supported, giving clients flexibility based on their existing infrastructure.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Access Control Systems</h3>
          <p>
            The BMS can lock or unlock specific doors, floors, or zones based on pre-programmed schedules, emergency events, or occupancy data. KSS offers a full range of access control solutions including proximity cards, smart card systems, and biometric readers (fingerprint, vein recognition, palm, and iris).
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Fire Alarm Integration</h3>
          <p>
            When a fire alarm is triggered, the BMS can simultaneously:
          </p>
          <ul>
            <li>Switch on emergency lighting</li>
            <li>Unlock emergency exit doors</li>
            <li>Shut down HVAC systems to prevent smoke spread</li>
            <li>Activate the Public Address (PA) system for evacuation announcements</li>
            <li>Send automated alerts to the facility management team</li>
          </ul>

          <h2 id="industries" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Industries That Benefit Most from BMS in Delhi</h2>
          <p>
            Building management systems are not a one-size-fits-all solution, but they deliver exceptional value across several key sectors in the Delhi NCR region:
          </p>
          <ul>
            <li><strong>Hospitality (Hotels & Resorts):</strong> Guest room automation, energy billing per suite, integrated security, and HVAC zone control for large properties like those served by KSS clients including Ramada.</li>
            <li><strong>Healthcare (Hospitals & Clinics):</strong> Critical environment monitoring (temperature, humidity, air pressure), emergency power management, and seamless fire alarm integration.</li>
            <li><strong>Educational Institutions:</strong> Campus-wide lighting and HVAC automation, access control for restricted zones, and intercom/PA integration — relevant for institutions like Shiv Nadar School.</li>
            <li><strong>Shopping Malls & Retail:</strong> Multi-tenant energy metering, car park ventilation control, escalator and lift monitoring, and integrated CCTV.</li>
            <li><strong>Industrial & Manufacturing:</strong> Process environment monitoring, energy demand management, and perimeter security integration.</li>
            <li><strong>Data Centres:</strong> Precision cooling (PAC), VESDA (Very Early Smoke Detecting Apparatus), water leak detection, and rodent repellent systems for critical infrastructure protection.</li>
          </ul>

          <h2 id="bms-vs-traditional" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">BMS vs. Traditional Building Controls: What's the Difference?</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-[#F5F7FA]">
                  <th className="border border-gray-200 p-4 text-left">Feature</th>
                  <th className="border border-gray-200 p-4 text-left">Traditional Controls</th>
                  <th className="border border-gray-200 p-4 text-left">Building Management System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Control Method</td>
                  <td className="border border-gray-200 p-4">Manual / standalone</td>
                  <td className="border border-gray-200 p-4">Centralised, automated</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Energy Monitoring</td>
                  <td className="border border-gray-200 p-4">None or basic meters</td>
                  <td className="border border-gray-200 p-4">Real-time, granular data</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">System Integration</td>
                  <td className="border border-gray-200 p-4">Isolated systems</td>
                  <td className="border border-gray-200 p-4">Unified platform</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Maintenance</td>
                  <td className="border border-gray-200 p-4">Reactive (after failure)</td>
                  <td className="border border-gray-200 p-4">Predictive (alerts before failure)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Remote Access</td>
                  <td className="border border-gray-200 p-4">Not available</td>
                  <td className="border border-gray-200 p-4">Web/mobile dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="choosing-provider" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">What to Look for in a BMS Provider in Delhi</h2>
          <p>
            Choosing the right BMS partner is as important as choosing the system itself. Here are the key criteria to evaluate:
          </p>
          <ul>
            <li><strong>End-to-end capability:</strong> Does the provider handle survey, design, supply, installation, commissioning, and ongoing maintenance? KSS offers all of these under one roof.</li>
            <li><strong>Brand partnerships:</strong> Look for authorized dealers of internationally recognised brands. KSS works with Honeywell, Schneider Electric, Trane, Siemens, and Bosch, among others.</li>
            <li><strong>OEM-certified engineers:</strong> The commissioning of BMS hardware requires manufacturer-certified expertise. Ensure your provider employs OEM-trained engineers.</li>
            <li><strong>Protocol compatibility:</strong> Your BMS should support open protocols like BACnet and Modbus to ensure interoperability with other systems.</li>
            <li><strong>After-sales support:</strong> A dedicated maintenance team is essential for long-term system performance. KSS has a dedicated support team ensuring ongoing uptime for all installed systems.</li>
          </ul>

          <h2 id="kss-implementation" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">How Kanha Security System Implements BMS Solutions</h2>
          <p>
            Kanha Security System follows a structured, phase-wise approach to every BMS project:
          </p>
          <ol>
            <li><strong>Site Survey & Needs Assessment</strong> – Our engineers conduct a detailed audit of your existing infrastructure, energy consumption patterns, and security requirements.</li>
            <li><strong>System Design</strong> – A customised BMS architecture is designed, specifying all hardware, software, communication protocols, and integration points.</li>
            <li><strong>Equipment Supply</strong> – As an authorized dealer for premium international brands, KSS sources equipment of verified quality and reliability.</li>
            <li><strong>Installation & Engineering</strong> – OEM-certified engineers handle all installation work to manufacturer specifications.</li>
            <li><strong>Commissioning & Testing</strong> – Every system is rigorously tested before handover, with full documentation provided.</li>
            <li><strong>Maintenance & Support</strong> – Our dedicated support team provides scheduled preventive maintenance and emergency response to ensure maximum system uptime.</li>
          </ol>

          <h2 className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Conclusion</h2>
          <p>
            A Building Management System is no longer a luxury — it is a necessity for any commercial building that takes energy efficiency, occupant safety, and operational intelligence seriously. From HVAC automation and power management to integrated fire safety and access control, a well-implemented BMS delivers measurable results from day one.
          </p>
          <p>
            Kanha Security System brings deep technical expertise, premium brand partnerships, and a full project lifecycle approach to every BMS installation in Delhi and across India. Whether you are planning a new commercial build or upgrading an existing facility, KSS has the experience and resources to deliver a system tailored to your exact needs.
          </p>

          <div className="mt-16 p-8 bg-[#F5F7FA] rounded-2xl border border-gray-100 text-center">
            <h3 className="text-[#0B1F3A] font-bold font-montserrat uppercase mb-6">Ready to automate your building?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919810021487" className="bg-[#0B1F3A] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#257995] transition-all">
                Call: +91 9810021487
              </a>
              <a href="mailto:sales@kanhasecurity.in" className="bg-white text-[#0B1F3A] border-2 border-[#0B1F3A] px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#0B1F3A] hover:text-white transition-all">
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* FAQs Section */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#0B1F3A] font-montserrat uppercase mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the cost of installing a Building Management System in Delhi?",
                a: "The cost of a BMS installation varies significantly based on building size, number of integrated systems, and brand selection. For a mid-size commercial building (20,000–50,000 sq. ft.), BMS costs typically range from ₹15 lakh to ₹60 lakh. Contact Kanha Security System for a customised quote based on your specific requirements."
              },
              {
                q: "Can an existing building be retrofitted with a BMS?",
                a: "Yes. Modern BMS platforms are designed for both new constructions and retrofit installations. Using open communication protocols like BACnet and Modbus, existing HVAC, fire alarm, and lighting systems can often be integrated without replacing the underlying infrastructure."
              },
              {
                q: "How long does BMS installation take?",
                a: "Installation timelines depend on building complexity. A straightforward office BMS may take 4–8 weeks, while a large hospital or mall installation could take 3–6 months. KSS provides detailed project timelines during the design phase."
              },
              {
                q: "What is the difference between BMS and SCADA?",
                a: "Both BMS and SCADA are monitoring and control systems, but they serve different environments. BMS is optimised for building infrastructure (HVAC, lighting, fire safety), while SCADA (Supervisory Control and Data Acquisition) is used for industrial process control."
              },
              {
                q: "Does a BMS help with green building certification in India?",
                a: "Absolutely. A BMS directly supports GRIHA, LEED India, and IGBC Green Building certifications by providing documented energy consumption data, demand management, and optimised HVAC performance."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold font-montserrat transition-colors uppercase ${openFaqIndex === i ? 'text-[#257995]' : 'text-[#0B1F3A] group-hover:text-[#257995]'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaqIndex === i ? 'bg-[#257995] text-white rotate-180' : 'bg-gray-100 text-[#0B1F3A]'}`}>
                    {openFaqIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 md:p-8 pt-0 text-[#6B7280] font-inter leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Share2 className="mx-auto text-[#257995] mb-6" size={32} />
          <h2 className="text-[24px] font-bold text-[#0B1F3A] font-montserrat uppercase mb-4">Share this guide</h2>
          <p className="text-[#6B7280] font-inter mb-8">Help other facility managers in Delhi discover the power of smart building automation.</p>
          <div className="flex justify-center gap-4">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
