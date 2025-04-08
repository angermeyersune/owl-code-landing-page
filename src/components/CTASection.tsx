
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-lingoowl-light">
      <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start saving on your translations?</h2>
        <p className="text-lg text-black mb-8 max-w-3xl mx-auto">
          Experience high-quality translations at 30-40% lower cost than traditional agencies. 
          Get an instant quote in less than 60 seconds.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-lingoowl-purple hover:bg-lingoowl-secondary text-white px-8 py-6 text-lg h-auto">
            Get a quote now
          </Button>
          <Button variant="outline" className="border-lingoowl-purple text-black hover:bg-[#FFFAE5] px-8 py-6 text-lg h-auto">
            Contact sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
