
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HomePage } from './HomePage';
import { ServicesPage } from './ServicesPage';
import { ServiceDetailPage } from './ServiceDetailPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen text-[#1F2937] bg-[#F5F7FA] overflow-x-hidden font-inter">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
