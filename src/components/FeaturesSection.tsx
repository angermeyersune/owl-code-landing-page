
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Expert Language Tips",
    description: "Learn powerful techniques from polyglots and linguistic experts that you won't find in textbooks.",
    icon: "🧠"
  },
  {
    title: "Interactive Exercises",
    description: "Each newsletter includes practical exercises you can complete in under 10 minutes a day.",
    icon: "✍️"
  },
  {
    title: "Cultural Insights",
    description: "Understand the cultural context behind expressions to communicate more naturally.",
    icon: "🌎"
  },
  {
    title: "Community Challenges",
    description: "Join monthly speaking and writing challenges with feedback from our community.",
    icon: "🏆"
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
  <div className="p-6 rounded-lg bg-white border border-gray-100 hover:shadow-md transition duration-300">
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-lingoowl-light text-lingoowl-purple font-medium px-4 py-2 rounded-full text-sm mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get Each Week</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our newsletter is carefully designed to provide maximum value in the minimum amount of time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} key={index} />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-lingoowl-light text-lingoowl-purple font-medium px-4 py-2 rounded-full text-sm mb-4">
                  Success Guarantee
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">See Progress in Just 30 Days</h3>
                <p className="text-lg text-gray-600 mb-6">
                  If you don't notice improvement in your language skills after following our newsletter for a month, we'll personally work with you to adjust your learning strategy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Consistent, bite-sized content that fits into any schedule",
                    "Scientifically-backed learning methods",
                    "Real-world examples you can use immediately",
                    "Content adapted for all levels from beginner to advanced"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-lingoowl-purple shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-lingoowl-purple to-lingoowl-secondary text-white p-8 md:p-12 flex flex-col justify-center">
                <div className="text-2xl mb-6">Skills You'll Develop</div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Vocabulary Retention", 
                    "Natural Pronunciation", 
                    "Grammar Mastery", 
                    "Listening Comprehension",
                    "Cultural Fluency",
                    "Confidence Speaking",
                    "Reading Proficiency",
                    "Writing Skills"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-lingoowl-gold"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
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
