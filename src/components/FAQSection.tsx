
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
  },
  {
    question: "How is this different from language learning apps?",
    answer: "While apps are great for practice, our newsletter provides deeper insights, expert strategies, and cultural context that most apps miss. It's designed to complement any app or course you're already using."
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
            Everything you need to know about the LingoOwl newsletter.
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
