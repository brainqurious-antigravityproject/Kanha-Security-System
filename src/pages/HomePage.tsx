
import React from 'react';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/sections/StatsSection';
import { SolutionsHighlight } from '../components/sections/SolutionsHighlight';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Integrations } from '../components/sections/Integrations';
import { TestimonialSection } from '../components/sections/TestimonialSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => (
  <>
    <Hero />
    <StatsSection />
    <SolutionsHighlight />
    <ServicesGrid />
    <Integrations />
    <TestimonialSection />
    <FAQSection />
    <ContactSection />
  </>
);
