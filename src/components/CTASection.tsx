
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-gradient-to-br from-lingoowl-purple to-lingoowl-secondary rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 text-white">
              <span className="inline-block bg-white/20 text-white font-medium px-4 py-2 rounded-full text-sm mb-6">
                Join Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Language Journey Now</h2>
              <p className="text-xl opacity-90 mb-8">
                Join over 15,000 language enthusiasts who are improving their skills every week with our expert tips and resources.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-lg">Weekly bite-sized lessons</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-lg">Expert techniques & strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-xl">✓</span>
                  </div>
                  <span className="text-lg">Supportive community</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex items-center">
              <div className="bg-white rounded-xl p-8 w-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Subscribe to our newsletter</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 text-base w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="h-12 text-base w-full bg-lingoowl-purple hover:bg-lingoowl-secondary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing Up..." : "Get Started for Free"}
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    No credit card required. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
