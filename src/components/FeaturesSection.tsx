
import React from 'react';
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Lower your costs by 30-50%",
    description: "You only pay a small fee to use the platform — the language services are at cost price.",
    action: "Learn more"
  },
  {
    title: "Team up with top specialists",
    description: "You're instantly connected to a global network of highly skilled language specialists.",
    action: "Learn more"
  },
  {
    title: "Dedicated and helpful support",
    description: "We're here to help you with everything from guidance and advice to tech support.",
    action: "Learn more"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why work with us?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Button variant="outline" className="border-lingoowl-purple text-lingoowl-purple hover:bg-lingoowl-light">
                {feature.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
