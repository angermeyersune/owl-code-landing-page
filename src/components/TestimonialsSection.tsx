
import React from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The weekly vocabulary challenges have expanded my French vocabulary by at least 200 words in just two months. Incredibly effective!",
    name: "David K.",
    role: "French Learner",
    avatar: "DK"
  },
  {
    quote: "As a busy professional, I love how LingoOwl delivers bite-sized language lessons I can practice during my commute. It's perfect!",
    name: "Sarah M.",
    role: "Japanese Enthusiast",
    avatar: "SM"
  },
  {
    quote: "The cultural insights in each newsletter help me understand not just the language, but also how to communicate authentically with native speakers.",
    name: "James R.",
    role: "German Student",
    avatar: "JR"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-lingoowl-light">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Subscribers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied language learners who have accelerated their progress with our newsletter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lingoowl-purple text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
