
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-recipe-neutral py-12 md:py-20">
      <div className="recipe-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-recipe-text tracking-tight mb-4">
              Personalized Healthy Recipes <span className="text-recipe-primary">Just For You</span>
            </h1>
            <p className="text-recipe-lightText text-lg mb-8 max-w-lg">
              Tell us your preferences, dietary needs, and health goals. 
              We'll create delicious, nutritious recipes tailored specifically for you.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-recipe-primary hover:bg-recipe-primary hover:bg-opacity-90 text-white px-6 py-6 rounded-md">
                Create Your Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-recipe-primary text-recipe-primary hover:bg-recipe-primary hover:text-white px-6 py-6 rounded-md">
                View Sample Recipes
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-up flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Healthy food ingredients" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
