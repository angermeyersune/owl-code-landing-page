
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DottedSeparator from '@/components/DottedSeparator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAE5]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DottedSeparator />
        <FeaturesSection />
        <DottedSeparator />
        <ProcessSection />
        <DottedSeparator />
        <TestimonialsSection />
        <DottedSeparator />
        <FAQSection />
        <DottedSeparator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
