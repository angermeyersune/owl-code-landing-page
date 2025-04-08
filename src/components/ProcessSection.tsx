
import React from 'react';
import { FileText, Users, Clock, Check } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Upload your content",
    description: "Upload your document or paste your text to get an instant quote."
  },
  {
    icon: Users,
    title: "Expert assignment",
    description: "Your project is assigned to native translators specialized in your domain."
  },
  {
    icon: Clock,
    title: "Automated workflow",
    description: "Our technology manages the process efficiently, saving time and reducing costs."
  },
  {
    icon: Check,
    title: "Quality delivery",
    description: "Receive your professionally translated content with quality assurance."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#FFFAE5]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How LingoOwl works</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Our streamlined process combines technology and human expertise to deliver high-quality translations quickly and cost-effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="bg-lingoowl-light p-5 rounded-full mb-6 relative z-10">
                  <step.icon className="h-8 w-8 text-lingoowl-purple" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gray-200 z-0">
                    <div className="absolute top-0 left-0 h-full bg-lingoowl-purple" style={{ width: '100%' }}></div>
                  </div>
                )}
              </div>
              <div className="absolute top-0 left-0 -ml-4 mt-6 text-5xl font-bold text-gray-100 z-0">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
