
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much can I save on translation costs?",
    answer: "Most clients save between 30-50% compared to traditional translation services, without compromising on quality. Our automation helps reduce overhead costs while maintaining high standards."
  },
  {
    question: "What languages do you support?",
    answer: "We support over 100 languages for professional translation services, covering all major global languages and many regional dialects."
  },
  {
    question: "How does the platform ensure quality?",
    answer: "Our platform combines advanced automation with human expertise. All translations go through a multi-step quality assurance process including specialist review and automated quality checks."
  },
  {
    question: "How fast can I get my translations?",
    answer: "Turnaround times depend on content volume and language pairs, but our platform typically delivers translations 40% faster than traditional services thanks to our efficient workflow."
  },
  {
    question: "Can I choose specific translators for my projects?",
    answer: "Yes, you can build your own team of preferred translators or let our system automatically match you with the best specialists for your specific content and industry."
  },
  {
    question: "Is my content secure on your platform?",
    answer: "Absolutely. We use enterprise-grade encryption and strict access controls. All translators sign NDAs, and we're compliant with major security standards including GDPR."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-lingoowl-light text-lingoowl-purple font-medium px-4 py-2 rounded-full text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our translation services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium text-left text-gray-800 hover:text-lingoowl-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#" className="text-lingoowl-purple font-medium hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
