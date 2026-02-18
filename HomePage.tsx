
import React from 'react';
import { Hero } from './Hero';
import { StatsSection } from './StatsSection';
import { SolutionsHighlight } from './SolutionsHighlight';
import { ServicesGrid } from './ServicesGrid';
import { Integrations } from './Integrations';
import { TestimonialSection } from './TestimonialSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';

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
