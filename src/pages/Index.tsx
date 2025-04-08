
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAE5]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Separator className="border-dotted border-t-2 border-gray-300 mx-auto w-1/2 my-0" />
        <FeaturesSection />
        <Separator className="border-dotted border-t-2 border-gray-300 mx-auto w-1/2 my-0" />
        <ProcessSection />
        <Separator className="border-dotted border-t-2 border-gray-300 mx-auto w-1/2 my-0" />
        <TestimonialsSection />
        <Separator className="border-dotted border-t-2 border-gray-300 mx-auto w-1/2 my-0" />
        <FAQSection />
        <Separator className="border-dotted border-t-2 border-gray-300 mx-auto w-1/2 my-0" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
