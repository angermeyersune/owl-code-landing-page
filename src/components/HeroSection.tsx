
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
    <section className="bg-[#FFFAE5] py-20 md:py-32 overflow-hidden">
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
          
          <div className="md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-lingoowl-gold opacity-30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-lingoowl-purple opacity-20 rounded-full blur-xl"></div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10 max-w-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center px-3 py-1 bg-lingoowl-purple/10 rounded-full">
                    <span className="text-xs font-semibold text-lingoowl-purple">Autopilot Mode</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-lingoowl-light rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lingoowl-purple font-bold">EN</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 w-full">
                      <p className="text-[#10162f]">The product launch will be next Thursday.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center my-2">
                    <div className="px-3 py-1 bg-lingoowl-light rounded-full flex items-center gap-2">
                      <span className="animate-pulse w-2 h-2 bg-lingoowl-purple rounded-full"></span>
                      <span className="text-xs text-lingoowl-purple font-medium">Translating...</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-lingoowl-light rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lingoowl-purple font-bold">ES</span>
                    </div>
                    <div className="bg-lingoowl-purple/10 rounded-lg p-3 w-full">
                      <p className="text-[#10162f]">El lanzamiento del producto será el próximo jueves.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-lingoowl-light rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lingoowl-purple font-bold">FR</span>
                    </div>
                    <div className="bg-lingoowl-purple/10 rounded-lg p-3 w-full">
                      <p className="text-[#10162f]">Le lancement du produit aura lieu jeudi prochain.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-500">3 languages processed</span>
                    </div>
                    <span className="text-xs text-gray-500">100% complete</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-lingoowl-purple rounded-full w-full animate-pulse"></div>
                  </div>
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
