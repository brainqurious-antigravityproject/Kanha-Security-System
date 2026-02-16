
import React from 'react';
import { Hero } from './Hero';
import { StatsSection } from './StatsSection';
import { ServicesGrid } from './ServicesGrid';
import { Integrations } from './Integrations';
import { TestimonialSection } from './TestimonialSection';
import { ContactSection } from './ContactSection';

export const HomePage = () => (
  <>
    <Hero />
    <StatsSection />
    <ServicesGrid />
    <Integrations />
    <TestimonialSection />
    <ContactSection />
  </>
);
