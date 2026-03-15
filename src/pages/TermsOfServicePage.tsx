
import React, { useEffect } from 'react';

export const TermsOfServicePage = () => {
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
            TERMS OF <span className="text-[#257995]">SERVICE</span>
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services or website.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="bg-white p-12 md:p-16 rounded-[32px] shadow-xl border border-gray-50 prose prose-lg max-w-none font-inter text-[#4B5563]">
          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mb-6">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website kanhasecurity.in, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Kanha Security System's website for personal, non-commercial transitory viewing only.
          </p>
          <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">3. Disclaimer</h2>
          <p>
            The materials on Kanha Security System's website are provided on an 'as is' basis. Kanha Security System makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">4. Limitations</h2>
          <p>
            In no event shall Kanha Security System or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kanha Security System's website.
          </p>

          <h2 className="text-[#0B1F3A] font-bold font-montserrat uppercase text-2xl mt-12 mb-6">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Delhi, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </section>
    </div>
  );
};
