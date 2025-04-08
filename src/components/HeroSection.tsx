
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#10162f]">
              Run your translation projects on autopilot
            </h1>
            <p className="text-xl text-[#10162f] max-w-2xl">
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
                className="h-12 px-6 bg-lingoowl-purple hover:bg-lingoowl-secondary text-white whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Get a quote"}
              </Button>
            </form>
            
            <p className="text-sm text-[#10162f]">
              Get an instant quote before accepting any project
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/lovable-uploads/8200cea3-9efb-4d2b-9ebd-abf9abfe68b9.png" 
              alt="LingoOwl translation platform illustration" 
              className="w-full max-w-lg object-contain animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
