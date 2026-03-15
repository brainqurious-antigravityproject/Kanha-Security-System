
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronLeft, Share2, Plus, Minus, Facebook, Twitter, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

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

  const posts: Record<string, any> = {
    'building-management-systems-delhi': {
      title: "Building Management Systems in Delhi: The Complete Guide to Smarter, Safer Buildings",
      date: "March 15, 2026",
      author: "Kanha Security System",
      readTime: "12 min read",
      content: (
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
        </div>
      ),
      faqs: [
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
      ]
    },
    'ip-cctv-vs-analogue-cctv-delhi': {
      title: "IP CCTV vs Analogue CCTV: Which Surveillance System Is Right for Your Business in Delhi?",
      date: "March 15, 2026",
      author: "Kanha Security System",
      readTime: "10 min read",
      content: (
        <div className="prose prose-lg max-w-none font-inter text-[#4B5563] leading-relaxed">
          <p className="text-xl text-[#1F2937] font-medium mb-8">
            Security cameras are no longer a luxury — they are a baseline requirement for every commercial establishment in Delhi. But when you start looking for a system, you'll immediately face a choice: IP CCTV or Analogue CCTV?
          </p>

          <p>
            At Kanha Security System (KSS), we've installed thousands of cameras across New Delhi, from small retail shops in Chandni Chowk to massive corporate offices in Okhla. We know that the "right" system depends entirely on your specific needs, budget, and existing infrastructure. This guide compares IP and Analogue systems side-by-side to help you make an informed decision for your Delhi-based business.
          </p>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl my-12 border border-gray-100">
            <h3 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-lg mb-4">Table of Contents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0">
              <li><a href="#analogue-cctv" onClick={(e) => scrollToSection(e, 'analogue-cctv')} className="text-[#257995] hover:underline">What is Analogue CCTV?</a></li>
              <li><a href="#ip-cctv" onClick={(e) => scrollToSection(e, 'ip-cctv')} className="text-[#257995] hover:underline">What is IP CCTV?</a></li>
              <li><a href="#comparison" onClick={(e) => scrollToSection(e, 'comparison')} className="text-[#257995] hover:underline">Side-by-Side Comparison</a></li>
              <li><a href="#pros-cons" onClick={(e) => scrollToSection(e, 'pros-cons')} className="text-[#257995] hover:underline">Pros and Cons</a></li>
              <li><a href="#which-to-choose" onClick={(e) => scrollToSection(e, 'which-to-choose')} className="text-[#257995] hover:underline">Which One Should You Choose?</a></li>
              <li><a href="#kss-expertise" onClick={(e) => scrollToSection(e, 'kss-expertise')} className="text-[#257995] hover:underline">KSS Expertise in Delhi</a></li>
            </ul>
          </div>

          <h2 id="analogue-cctv" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">What is Analogue CCTV? (The Traditional Choice)</h2>
          <p>
            Analogue CCTV systems have been the industry standard for decades. They work by capturing a video signal and sending it over a coaxial cable to a Digital Video Recorder (DVR). The DVR then compresses the video and stores it on a hard drive.
          </p>
          <p>
            While older analogue systems were known for grainy footage, modern <strong>HD-Analogue (TVI/CVI/AHD)</strong> systems can now deliver 2MP, 5MP, and even 4K resolution over traditional wiring.
          </p>

          <h2 id="ip-cctv" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">What is IP CCTV? (The Modern Standard)</h2>
          <p>
            Internet Protocol (IP) cameras are essentially small computers that capture and transmit video data over a network (LAN). Instead of a DVR, they typically use a Network Video Recorder (NVR) or store data directly in the cloud.
          </p>
          <p>
            IP systems are the gold standard for modern surveillance in Delhi's corporate sector due to their superior image quality, advanced analytics, and ease of scalability.
          </p>

          <h2 id="comparison" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Side-by-Side Comparison: Key Differences</h2>
          
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">1. Image Quality & Resolution</h3>
          <p>
            While Analogue HD has improved significantly, IP cameras still lead the way. IP cameras can capture much wider fields of view and offer superior digital zoom without the "pixelation" common in analogue systems. This is crucial for identifying faces or reading license plates in busy Delhi markets.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">2. Wiring & Installation</h3>
          <p>
            Analogue systems require two cables for each camera: one for video (coaxial) and one for power. IP systems use <strong>Power over Ethernet (PoE)</strong>, meaning a single Cat6 cable provides both data and power. This significantly reduces installation time and clutter in office ceilings.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">3. Scalability</h3>
          <p>
            Expanding an analogue system is hard because you are limited by the number of ports on your DVR (usually 4, 8, 16, or 32). With IP, you can simply add a camera to your existing network switch. This makes IP the preferred choice for growing businesses in Okhla or Gurugram.
          </p>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">4. Video Analytics</h3>
          <p>
            IP cameras are "smart." They can be programmed to alert you only when a person crosses a specific line, or when an object is removed from a room. Analogue systems are generally "dumb" and record everything, requiring manual review of hours of footage.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-[#F5F7FA]">
                  <th className="border border-gray-200 p-4 text-left">Feature</th>
                  <th className="border border-gray-200 p-4 text-left">Analogue CCTV</th>
                  <th className="border border-gray-200 p-4 text-left">IP CCTV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Image Quality</td>
                  <td className="border border-gray-200 p-4">Good (up to 4K)</td>
                  <td className="border border-gray-200 p-4">Superior (Higher detail)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Wiring</td>
                  <td className="border border-gray-200 p-4">Coaxial + Power</td>
                  <td className="border border-gray-200 p-4">Single Ethernet (PoE)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Scalability</td>
                  <td className="border border-gray-200 p-4">Limited by DVR ports</td>
                  <td className="border border-gray-200 p-4">Highly Scalable</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Cost</td>
                  <td className="border border-gray-200 p-4">Lower upfront cost</td>
                  <td className="border border-gray-200 p-4">Higher upfront cost</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-bold">Analytics</td>
                  <td className="border border-gray-200 p-4">Basic</td>
                  <td className="border border-gray-200 p-4">Advanced AI Features</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="pros-cons" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Pros and Cons</h2>
          
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Analogue CCTV Pros:</h3>
          <ul>
            <li><strong>Cost:</strong> Generally 30-50% cheaper than IP.</li>
            <li><strong>Reliability:</strong> Works even if your network goes down.</li>
            <li><strong>Simplicity:</strong> No complex configuration required.</li>
          </ul>

          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">IP CCTV Pros:</h3>
          <ul>
            <li><strong>Resolution:</strong> Options up to 30MP+.</li>
            <li><strong>Intelligence:</strong> Face recognition, people counting, and intrusion alerts.</li>
            <li><strong>Remote Access:</strong> Much better mobile app experience.</li>
            <li><strong>Future-Proof:</strong> Uses modern networking standards.</li>
          </ul>

          <h2 id="which-to-choose" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Which One Should You Choose?</h2>
          <p>
            <strong>Choose Analogue if:</strong> You are a small business on a tight budget, or you already have coaxial wiring in place and just want a simple upgrade to HD.
          </p>
          <p>
            <strong>Choose IP if:</strong> You are a corporate office, a large warehouse, or a high-security facility where detail and smart alerts are critical. It's also the best choice for new buildings where you can install Cat6 wiring from day one.
          </p>

          <h2 id="kss-expertise" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">KSS: Your CCTV Experts in Delhi</h2>
          <p>
            At Kanha Security System, we don't just sell cameras; we design security ecosystems. We've helped hundreds of businesses in Delhi NCR find the perfect balance between cost and performance.
          </p>
          <p>
            Whether you need a simple 4-camera analogue setup or a complex 100-camera IP network with AI analytics, our team handles everything from site survey to professional installation and AMC support.
          </p>
        </div>
      ),
      faqs: [
        {
          q: "Can I mix IP and Analogue cameras in the same system?",
          a: "Yes, using a 'Hybrid DVR' (XVR), you can connect both analogue and IP cameras to a single recording unit. This is a great way to transition from an old system to a new one gradually."
        },
        {
          q: "Does IP CCTV consume a lot of internet bandwidth?",
          a: "IP cameras only use internet bandwidth when you are viewing them remotely. For local recording, they use your internal network (LAN), which doesn't affect your internet speed."
        },
        {
          q: "What is the storage capacity needed for 4K cameras?",
          a: "4K cameras generate much larger files. We recommend using H.265+ compression and at least 4TB to 8TB of storage for a 4-camera system to keep 30 days of backup."
        },
        {
          q: "Do you provide installation services in Noida and Gurugram?",
          a: "Yes, Kanha Security System provides full installation and maintenance services across the entire Delhi NCR region, including Noida, Gurugram, Faridabad, and Ghaziabad."
        }
      ]
    },
    'fire-protection-systems-commercial-buildings-delhi': {
      title: "Fire Protection Systems for Commercial Buildings in Delhi: Types, Standards & What You Need to Know",
      date: "March 15, 2026",
      author: "Kanha Security System",
      readTime: "12 min read",
      content: (
        <div className="prose prose-lg max-w-none font-inter text-[#4B5563] leading-relaxed">
          <p className="text-xl text-[#1F2937] font-medium mb-8">
            Fire safety is not optional. In a densely built commercial landscape like Delhi — where high-rise office towers, shopping malls, hospitals, and hotels house thousands of people every day — a failure in fire protection can have catastrophic, irreversible consequences.
          </p>

          <p>
            Yet despite clear regulatory mandates under India's National Building Code (NBC) and international NFPA (National Fire Protection Association) standards, fire safety remains one of the most under-invested areas of building infrastructure across the country. Many facility managers either install minimum-compliance systems or neglect routine maintenance until an audit forces their hand.
          </p>

          <p>
            At Kanha Security System (KSS), we believe fire protection deserves the same strategic attention as any other critical building system. With a comprehensive portfolio covering fire detection, alarm, suppression, and hydrant systems, and a client base spanning hospitality, healthcare, education, and industry, KSS has helped some of Delhi's most recognised organisations build robust, compliant fire safety infrastructure. This guide walks you through everything you need to know.
          </p>

          <div className="bg-[#F5F7FA] p-8 rounded-2xl my-12 border border-gray-100">
            <h3 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-lg mb-4">Table of Contents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0 m-0">
              <li><a href="#why-critical" onClick={(e) => scrollToSection(e, 'why-critical')} className="text-[#257995] hover:underline">Why Fire Protection Is Critical</a></li>
              <li><a href="#key-components" onClick={(e) => scrollToSection(e, 'key-components')} className="text-[#257995] hover:underline">Key Components</a></li>
              <li><a href="#detection-alarm" onClick={(e) => scrollToSection(e, 'detection-alarm')} className="text-[#257995] hover:underline">Detection and Alarm Systems</a></li>
              <li><a href="#suppression" onClick={(e) => scrollToSection(e, 'suppression')} className="text-[#257995] hover:underline">Suppression Systems</a></li>
              <li><a href="#hydrant-sprinkler" onClick={(e) => scrollToSection(e, 'hydrant-sprinkler')} className="text-[#257995] hover:underline">Hydrant and Sprinkler Systems</a></li>
              <li><a href="#vesda" onClick={(e) => scrollToSection(e, 'vesda')} className="text-[#257995] hover:underline">VESDA: Early Detection</a></li>
              <li><a href="#compliance" onClick={(e) => scrollToSection(e, 'compliance')} className="text-[#257995] hover:underline">NBC and NFPA Compliance</a></li>
              <li><a href="#integration" onClick={(e) => scrollToSection(e, 'integration')} className="text-[#257995] hover:underline">Integrating Fire Safety</a></li>
              <li><a href="#industries" onClick={(e) => scrollToSection(e, 'industries')} className="text-[#257995] hover:underline">Industries That Need It</a></li>
              <li><a href="#kss-solutions" onClick={(e) => scrollToSection(e, 'kss-solutions')} className="text-[#257995] hover:underline">KSS Fire Safety Solutions</a></li>
            </ul>
          </div>

          <h2 id="why-critical" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Why Fire Protection Is Critical for Commercial Buildings in Delhi</h2>
          <p>
            The statistics on commercial building fires in India are sobering. According to data from the National Crime Records Bureau (NCRB), fire accidents consistently rank among the top causes of accidental deaths in India, with commercial and industrial properties accounting for a significant share of incidents.
          </p>
          <p>
            In Delhi specifically, older commercial buildings, overloaded electrical infrastructure, and inadequate fire egress design create a high-risk environment. The consequences of a fire event extend far beyond physical damage — business interruption, legal liability, insurance complications, reputational damage, and most critically, loss of human life are all on the table.
          </p>

          <h2 id="key-components" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Key Components of a Complete Fire Protection System</h2>
          <p>
            A comprehensive fire protection system is not a single device — it is a layered architecture of detection, notification, suppression, and evacuation technologies working in coordination. For commercial buildings in Delhi, a complete fire safety system includes:
          </p>
          <ul>
            <li><strong>Fire Detection System</strong> – Smoke detectors, heat detectors, flame detectors, and manual call points</li>
            <li><strong>Fire Alarm System</strong> – Control panels, audible/visual alarms, and notification appliances</li>
            <li><strong>Fire Suppression System</strong> – Automatic gaseous agents (FM200, NOVAC), foam systems, or water mist</li>
            <li><strong>Sprinkler System</strong> – Wet riser and water sprinkler systems for area-wide suppression</li>
            <li><strong>Fire Hydrant System</strong> – Manual firefighting infrastructure as per NBC/NFPA</li>
            <li><strong>Voice Evacuation System</strong> – PA-integrated emergency announcements</li>
            <li><strong>Emergency Lighting</strong> – Battery-backed lighting for safe egress</li>
            <li><strong>VESDA</strong> – Very Early Smoke Detecting Apparatus for mission-critical environments</li>
          </ul>

          <h2 id="detection-alarm" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Fire Detection and Alarm Systems Explained</h2>
          <p>
            The fire alarm system is the nervous system of your fire protection infrastructure. It continuously monitors the building environment and triggers the appropriate response the moment it detects a threat.
          </p>
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Conventional Fire Alarm Systems</h3>
          <p>
            In a conventional fire alarm system, detectors and call points are grouped into zones. These systems are cost-effective for smaller buildings with straightforward layouts — such as small offices, shops, and residential complexes.
          </p>
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">Analogue Addressable Fire Alarm Systems</h3>
          <p>
            An analogue addressable system assigns a unique address to every single detector and call point in the building. This enables pinpoint identification of the affected device and reduced false alarms. For medium-to-large commercial buildings, analogue addressable systems are the industry standard.
          </p>

          <h2 id="suppression" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Fire Suppression Systems: Types and Applications</h2>
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">FM200 (HFC-227ea) Gaseous Suppression</h3>
          <p>
            FM200 is one of the most widely used clean agent fire suppression systems globally. It works by disrupting the chemical reaction of a fire — extinguishing flames rapidly without leaving residue. It is safe for occupied spaces, making it ideal for server rooms and data centres.
          </p>
          <h3 className="text-xl font-bold text-[#0B1F3A] mt-8 mb-4">NOVAC (Inert Gas Suppression)</h3>
          <p>
            NOVAC suppression systems use a blend of inert gases to reduce the oxygen level in a protected space. Unlike FM200, NOVAC has zero global warming potential — making it the environmentally preferred option.
          </p>

          <h2 id="hydrant-sprinkler" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Fire Hydrant and Sprinkler Systems</h2>
          <p>
            For large-area fire suppression — particularly in open floor plans, warehouses, and parking structures — wet riser hydrant systems and automatic sprinkler systems form the backbone of fire suppression infrastructure.
          </p>

          <h2 id="vesda" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">VESDA: Very Early Smoke Detection for Critical Environments</h2>
          <p>
            For environments where conventional smoke detectors are simply not sensitive enough — such as data centres and server rooms — VESDA represents the gold standard. It uses an active air sampling system that continuously draws air from the protected space.
          </p>

          <h2 id="compliance" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">NBC and NFPA Compliance: What Indian Buildings Must Meet</h2>
          <p>
            Regulatory compliance is not just a legal obligation — it directly affects your building's insurance premiums and liability exposure. Key standards include National Building Code (NBC) of India, Part 4 and NFPA 72.
          </p>

          <h2 id="integration" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Integrating Fire Safety with BMS and Security Systems</h2>
          <p>
            Modern fire protection does not operate in isolation. When integrated with a Building Management System (BMS), fire safety becomes part of an intelligent, coordinated emergency response, such as shutting down HVAC systems and unlocking exit doors automatically.
          </p>

          <h2 id="industries" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">Industries That Need Advanced Fire Protection in Delhi</h2>
          <ul>
            <li><strong>Hospitals:</strong> Patients who cannot self-evacuate require the highest levels of early detection.</li>
            <li><strong>Data Centres:</strong> Critical infrastructure makes VESDA and clean agent suppression non-negotiable.</li>
            <li><strong>Hotels:</strong> High occupancy and complex layouts demand robust alarm and PA systems.</li>
            <li><strong>Shopping Malls:</strong> Large public gatherings require zoned addressable systems.</li>
          </ul>

          <h2 id="kss-solutions" className="text-[28px] font-bold text-[#0B1F3A] font-montserrat uppercase mt-16 mb-6">How Kanha Security System Delivers Fire Safety Solutions</h2>
          <p>
            KSS brings a structured, compliance-first approach to every fire protection project, from risk assessment and system design to installation by certified engineers and ongoing maintenance under Annual Maintenance Contracts (AMC).
          </p>
        </div>
      ),
      faqs: [
        {
          q: "Is a fire alarm system mandatory for commercial buildings in Delhi?",
          a: "Yes. The National Building Code (NBC) of India mandates fire detection and alarm systems for all commercial buildings above specified occupancy thresholds and heights."
        },
        {
          q: "What is the difference between FM200 and NOVAC suppression systems?",
          a: "Both are clean agent gaseous suppression systems. FM200 suppresses fire through chemical interference, while NOVAC uses inert gases to reduce oxygen levels. NOVAC is more environmentally friendly with zero global warming potential."
        },
        {
          q: "How often should fire alarm systems be serviced?",
          a: "As per NBC and NFPA 72 guidelines, fire alarm systems should undergo functional testing every six months and a full inspection annually."
        },
        {
          q: "Can fire systems be retrofitted into older commercial buildings in Delhi?",
          a: "Yes. KSS has extensive experience retrofitting modern fire detection, alarm, and suppression systems into older buildings without significant structural modifications."
        },
        {
          q: "What is VESDA and when is it required?",
          a: "VESDA is an active air-sampling smoke detection system that detects fire at a far earlier stage than conventional detectors. It is strongly recommended for data centres, server rooms, and critical IT infrastructure."
        }
      ]
    }
  };

  const post = posts[slug || ''];

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link to="/blogs" className="text-[#257995] hover:underline mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);
  const shareDescription = post.slug === 'building-management-systems-delhi' 
    ? "Help other facility managers in Delhi discover the power of smart building automation."
    : post.slug === 'fire-protection-systems-commercial-buildings-delhi'
    ? "Help other building owners in Delhi ensure the highest standards of fire safety and compliance."
    : "Help other business owners in Delhi choose the right surveillance system for their security.";

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
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-inter">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#257995]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#257995]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#257995]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        {post.content}

        {/* Contact CTA at the end of all blogs */}
        <div className="mt-16 p-8 bg-[#F5F7FA] rounded-3xl border border-gray-100 text-center">
          <h3 className="text-2xl font-bold text-[#0B1F3A] font-montserrat uppercase mb-4">Get Expert Advice for Your Project</h3>
          <p className="text-[#6B7280] font-inter mb-8">Contact Kanha Security System today for a professional consultation and customized security solutions in Delhi NCR.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:sales@kanhasecurity.in"
              className="flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 bg-[#257995] text-white rounded-full font-bold uppercase tracking-wider md:tracking-widest text-[12px] md:text-sm hover:bg-[#1a5d73] transition-colors"
            >
              <Mail size={18} className="md:w-5 md:h-5" /> sales@kanhasecurity.in
            </a>
            <a 
              href="tel:+919810021487"
              className="flex items-center gap-2 px-4 py-3 md:px-8 md:py-4 bg-[#0B1F3A] text-white rounded-full font-bold uppercase tracking-wider md:tracking-widest text-[12px] md:text-sm hover:bg-[#1a2e4a] transition-colors"
            >
              <Phone size={18} className="md:w-5 md:h-5" /> Call: +91 9810021487
            </a>
          </div>
        </div>
      </article>

      {/* FAQs Section */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[32px] font-bold text-[#0B1F3A] font-montserrat uppercase mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {post.faqs.map((faq: any, i: number) => (
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
          <p className="text-[#6B7280] font-inter mb-8">{shareDescription}</p>
          <div className="flex justify-center gap-4">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
              title="Share on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
              title="Share on Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
              title="Share on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#0B1F3A] hover:bg-[#257995] hover:text-white transition-all"
              title="Share on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
