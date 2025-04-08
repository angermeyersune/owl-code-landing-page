
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
        title: "Thanks for your interest!",
        description: "We'll be in touch soon to discuss your translation needs.",
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-[#FFFAE5] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Professional translation at 30-40% lower cost
          </h1>
          <p className="text-xl text-black max-w-2xl">
            Combining technology and human expertise to deliver high-quality translations without compromising on service. Launch any project in under 60 seconds.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md w-full mt-8">
            <Input
              type="email"
              placeholder="Enter your email for an instant quote"
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
              {isLoading ? "Processing..." : "Get a quote"}
            </Button>
          </form>
          
          <p className="text-sm text-black">
            Get an instant quote before accepting any project
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
