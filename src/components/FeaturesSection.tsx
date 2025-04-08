
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Clock, Users, Shield } from 'lucide-react';

const features = [
  {
    title: "Save 30-40% on translation costs",
    description: "Our automated project management significantly reduces costs without compromising quality.",
    icon: CreditCard,
    action: "Learn more"
  },
  {
    title: "Launch projects in 60 seconds",
    description: "Get an instant quote and start your translation project in less than a minute.",
    icon: Clock,
    action: "Learn more"
  },
  {
    title: "Expert native translators",
    description: "All translators are native speakers specialized in specific domains for optimal quality.",
    icon: Users,
    action: "Learn more"
  },
  {
    title: "Full transparency",
    description: "We work with complete transparency throughout the entire translation process.",
    icon: Shield,
    action: "Learn more"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose LingoOwl?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technology and human expertise to deliver translations that are more affordable, flexible, and high-quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                <feature.icon className="h-8 w-8 text-lingoowl-purple" />
              </div>
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
