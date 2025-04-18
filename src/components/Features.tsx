
import React from 'react';
import { Heart, ClipboardList, Utensils, AlertCircle, Clock, Youtube } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-10 w-10 text-recipe-primary" />,
    title: "Personalized For You",
    description: "Recipes tailored to your dietary preferences, restrictions, and health needs."
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-recipe-primary" />,
    title: "Shopping Lists",
    description: "Detailed ingredient lists with everything you need to make the perfect meal."
  },
  {
    icon: <Utensils className="h-10 w-10 text-recipe-primary" />,
    title: "Step-by-Step Instructions",
    description: "Easy to follow cooking directions to help you create delicious meals."
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-recipe-primary" />,
    title: "Allergy Aware",
    description: "All recipes account for your food allergies and dietary restrictions."
  },
  {
    icon: <Clock className="h-10 w-10 text-recipe-primary" />,
    title: "Quick & Easy",
    description: "Recipes designed to fit your schedule, from quick meals to weekend projects."
  },
  {
    icon: <Youtube className="h-10 w-10 text-recipe-primary" />,
    title: "Video Tutorials",
    description: "Watch related YouTube cooking tutorials to perfect your technique."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="recipe-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-recipe-text mb-4">
            How Recipe Genius <span className="text-recipe-primary">Works</span>
          </h2>
          <p className="text-recipe-lightText max-w-2xl mx-auto">
            Our smart recipe generator creates personalized meal ideas based on your unique profile and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-recipe-neutral p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-recipe-lightText">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
