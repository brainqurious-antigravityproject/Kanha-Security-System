
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HomePage } from './HomePage';
import { ServiceDetailPage } from './ServiceDetailPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen text-white bg-[#030014] overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
