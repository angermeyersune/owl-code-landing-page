
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-lingoowl-purple to-lingoowl-secondary text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Language Learning?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join over 15,000 language enthusiasts who are improving their skills every week with our expert tips and resources.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base bg-white/20 border-white/10 placeholder:text-white/60 text-white"
            />
            <Button 
              type="submit" 
              className="h-12 text-base bg-white text-lingoowl-purple hover:bg-lingoowl-gold hover:text-gray-900"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Join Free"}
            </Button>
          </div>
          <p className="mt-3 text-sm opacity-80">
            No credit card required. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
