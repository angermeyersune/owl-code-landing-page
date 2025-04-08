
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Weekly Language Tips",
    description: "Get practical tips from language experts to improve your vocabulary, grammar, and fluency.",
    icon: "🗣️"
  },
  {
    title: "Learning Resources",
    description: "Access to exclusive resources, from vocabulary lists to pronunciation guides.",
    icon: "📚"
  },
  {
    title: "Cultural Insights",
    description: "Understand the cultural context behind languages for more authentic learning.",
    icon: "🌍"
  },
  {
    title: "Community Challenges",
    description: "Join monthly challenges to practice with other learners and stay motivated.",
    icon: "🏆"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get in Our Newsletter</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of language enthusiasts who receive our weekly newsletter packed with these benefits:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-lingoowl-light p-6 rounded-lg hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-lingoowl-purple to-lingoowl-secondary rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Language Learners Love Us</h3>
              <p className="text-lg opacity-90 mb-6">
                Our newsletter is crafted by language experts with decades of teaching experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Bite-sized lessons that fit into your busy schedule",
                  "Practical examples you can use right away",
                  "Scientifically-backed learning methods",
                  "Content for all levels, from beginner to advanced"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-lingoowl-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-2xl mb-3">💬 From Our Subscribers</div>
              <p className="italic text-lg mb-4">
                "LingoOwl's newsletter has been a game-changer for my Spanish learning. The weekly tips are concise, practical, and actually work!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lingoowl-gold rounded-full flex items-center justify-center text-lingoowl-purple font-bold">
                  MS
                </div>
                <div>
                  <div className="font-medium">Maria S.</div>
                  <div className="text-sm opacity-80">Learning Spanish for 6 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
