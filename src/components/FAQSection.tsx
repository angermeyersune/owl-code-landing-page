
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often will I receive the newsletter?",
    answer: "You'll receive our newsletter once a week, typically every Monday morning, so you can start your week with fresh language learning content."
  },
  {
    question: "Is the newsletter free?",
    answer: "Yes, the LingoOwl newsletter is completely free. We may occasionally offer premium resources or courses, but the weekly newsletter itself will always be free."
  },
  {
    question: "What languages do you cover?",
    answer: "Our newsletter primarily focuses on the most popular languages: Spanish, French, German, Italian, Chinese, Japanese, and English. However, we regularly include tips that apply to all language learning."
  },
  {
    question: "I'm a complete beginner. Will this be too advanced for me?",
    answer: "Not at all! We design our content to be useful for all levels. We clearly mark content by level (beginner, intermediate, advanced) so you can focus on what's most relevant to you."
  },
  {
    question: "Can I unsubscribe if I change my mind?",
    answer: "Absolutely. Every newsletter includes a simple one-click unsubscribe link at the bottom. We make it easy to leave, though we hope you won't want to!"
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Got questions about our newsletter? We've got answers.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
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
