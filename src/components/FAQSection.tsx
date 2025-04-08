
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do you maintain quality while lowering costs?",
      answer: "We've automated the project management aspects of translation, which traditionally add significant overhead costs. Our translators are still highly qualified professionals and native speakers, but our technology streamlines the process, removing unnecessary expenses."
    },
    {
      question: "What languages do you support?",
      answer: "We support translations between most major world languages. Our network includes native-speaking translators for each language pair we offer, ensuring high-quality and culturally appropriate translations."
    },
    {
      question: "How quickly can I get my translation?",
      answer: "Turnaround times depend on the volume and complexity of your content. However, our automated workflow significantly speeds up the process compared to traditional agencies. When you submit your content, you'll receive an estimated delivery time along with your quote."
    },
    {
      question: "Do you offer specialized translation services?",
      answer: "Yes, we provide specialized translations across various domains including legal, medical, technical, marketing, and more. We match your project with translators who have expertise in your specific field."
    },
    {
      question: "How does your pricing work?",
      answer: "Our pricing is transparent and based on word count, language pair, and content complexity. You'll receive an instant quote before committing to any project, with no hidden fees or surprises."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-[#10162f]">
            Find answers to commonly asked questions about our translation services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-[#10162f]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#10162f]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
