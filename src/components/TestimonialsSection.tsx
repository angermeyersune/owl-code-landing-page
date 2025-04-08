
import React from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I've tried learning Spanish for years with little progress. After just 3 months of LingoOwl's newsletters, I'm now having basic conversations with native speakers!",
    name: "David K.",
    role: "French Learner",
    avatar: "DK"
  },
  {
    quote: "The bite-sized format is perfect for my busy schedule. I complete the exercises during my commute and have learned more Japanese in 6 months than I did in 2 years of classes.",
    name: "Sarah M.",
    role: "Japanese Enthusiast",
    avatar: "SM"
  },
  {
    quote: "The cultural insights in each newsletter have completely transformed how I understand German expressions. Now I sound like a local instead of a textbook.",
    name: "James R.",
    role: "German Student",
    avatar: "JR"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FFFAE5]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-lingoowl-light text-lingoowl-purple font-medium px-4 py-2 rounded-full text-sm mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Community</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            See what our subscribers have achieved with consistent practice and expert guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all border-0 shadow">
              <div className="flex flex-col h-full">
                <div className="text-lingoowl-purple text-4xl font-serif mb-4">"</div>
                <div className="mb-6 flex-grow">
                  <p className="text-lg text-black">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lingoowl-purple text-[#FFFAE5] rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-black">{testimonial.name}</div>
                    <div className="text-sm text-black">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-lingoowl-purple font-medium">
            <span className="text-2xl">★</span>
            <span className="text-2xl">★</span>
            <span className="text-2xl">★</span>
            <span className="text-2xl">★</span>
            <span className="text-2xl">★</span>
          </div>
          <p className="text-lg font-medium mt-2 text-black">4.9/5 average rating from 2,300+ subscribers</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
