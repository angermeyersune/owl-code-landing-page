
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
    <div className="min-h-screen flex flex-col bg-[#FFFAE5] relative">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <div className="py-12 bg-[#10162f] text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">
            <p className="text-xl md:text-2xl leading-relaxed">
              Combining technology and human expertise to deliver high-quality translations without compromising on service. Launch any project in under 60 seconds.
            </p>
          </div>
        </div>
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
