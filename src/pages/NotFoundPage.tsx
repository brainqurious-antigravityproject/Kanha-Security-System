import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-[#F5F7FA]">
      <div className="text-center space-y-6">
        <h1 className="text-[120px] font-bold text-[#0B1F3A] font-montserrat leading-none drop-shadow-sm">404</h1>
        <h2 className="text-[32px] font-bold text-[#0B1F3A] font-montserrat uppercase">Page Not Found</h2>
        <p className="text-[#6B7280] font-inter max-w-md mx-auto text-lg leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-6">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0B1F3A] text-white font-bold uppercase tracking-widest text-[14px] rounded-[8px] hover:bg-[#257995] transition-colors duration-300 shadow-md font-montserrat"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
