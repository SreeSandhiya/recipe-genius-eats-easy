
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-recipe-primary py-16">
      <div className="recipe-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Discover Recipes Tailored Just for You?
          </h2>
          <p className="text-white text-opacity-90 mb-8 text-lg">
            Create your profile now and get personalized healthy recipes that match your preferences, dietary needs, and health goals.
          </p>
          <Button
            className="bg-white text-recipe-primary hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-md"
          >
            Create Your Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
