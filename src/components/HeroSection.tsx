
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "You're subscribed!",
        description: "Watch your inbox for language learning tips soon.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block bg-lingoowl-light text-lingoowl-purple font-medium px-4 py-2 rounded-full text-sm">
              The #1 Newsletter for Language Learners
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Learn a Language <span className="text-lingoowl-purple">the Right Way</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join 15,000+ subscribers receiving expert tips and strategies to master any language faster than you thought possible.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base flex-grow"
              />
              <Button 
                type="submit" 
                className="h-12 px-6 bg-lingoowl-purple hover:bg-lingoowl-secondary whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Try it free"}
              </Button>
            </form>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-lingoowl-purple">✓</span> No credit card required
              <span className="mx-2">•</span>
              <span className="text-lingoowl-purple">✓</span> Cancel anytime
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-lingoowl-purple h-2"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-lingoowl-light rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-lingoowl-purple">LO</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">LingoOwl Weekly</h3>
                    <p className="text-sm text-gray-500">Every Monday at 8:00 AM</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-lingoowl-light rounded-lg">
                    <h4 className="font-bold mb-2">5 Spanish Phrases Locals Actually Use</h4>
                    <p className="text-gray-600 text-sm">Forget what your textbook taught you. Here's how natives really speak...</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold mb-2">Weekly Language Challenge</h4>
                    <p className="text-gray-600 text-sm">Record yourself saying these 3 tongue twisters and share your progress!</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold mb-2">Spotlight: Japanese Counters</h4>
                    <p className="text-gray-600 text-sm">Master this tricky concept with our simple memory technique...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-5 right-5 w-40 h-40 bg-lingoowl-gold opacity-20 rounded-full -z-10"></div>
            <div className="absolute bottom-5 left-5 w-40 h-40 bg-lingoowl-purple opacity-10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
