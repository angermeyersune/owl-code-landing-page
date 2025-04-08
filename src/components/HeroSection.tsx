
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
    <section className="relative bg-gradient-to-b from-white to-lingoowl-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Master Languages with the <span className="text-lingoowl-purple">LingoOwl</span> Newsletter
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Join thousands of language enthusiasts receiving weekly tips, exercises, and resources to accelerate your language learning journey.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base"
              />
              <Button 
                type="submit" 
                className="w-full h-12 text-base bg-lingoowl-purple hover:bg-lingoowl-secondary transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Get Weekly Language Tips"}
              </Button>
              <p className="text-sm text-gray-500">
                Join for free. Unsubscribe anytime. No spam.
              </p>
            </form>
          </div>
          
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute top-10 right-10 w-64 h-64 bg-lingoowl-gold opacity-20 rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-lingoowl-purple opacity-10 rounded-full"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-xl transform rotate-3 max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-lingoowl-purple rounded-full flex items-center justify-center text-white font-bold">LO</div>
                  <div className="font-medium">LingoOwl Newsletter</div>
                </div>
                <h3 className="text-xl font-bold mb-2">This Week in Language Learning</h3>
                <p className="text-gray-600 mb-4">Discover the 5 most effective techniques for memorizing vocabulary that the polyglots use...</p>
                <div className="h-1 w-full bg-lingoowl-purple rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-lingoowl-light p-2 rounded text-center text-sm">Vocabulary Tips</div>
                  <div className="bg-lingoowl-light p-2 rounded text-center text-sm">Speaking Practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
