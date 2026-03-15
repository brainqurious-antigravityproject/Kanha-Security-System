
import React, { useEffect } from 'react';

export const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <section className="pt-40 pb-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight mb-6">
            PRIVACY <span className="text-[#257995]">POLICY</span>
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy outlines how we handle your data with transparency and security.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white p-12 md:p-16 rounded-[32px] shadow-xl border border-gray-50 prose prose-lg max-w-none font-inter text-[#4B5563]">
          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mb-6">1. Introduction</h2>
          <p>
            Kanha Security System ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kanhasecurity.in.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">2. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Fill out a contact or inquiry form</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email or phone</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, and any other details you provide in your inquiry.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send technical updates or promotional materials (if opted-in)</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-bold">
            Kanha Security System<br />
            Email: sales@kanhasecurity.in<br />
            Phone: +91 9810021487
          </p>
        </div>
      </section>
    </div>
  );
};
