
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="recipe-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-6 w-6 text-recipe-primary" />
              <span className="text-lg font-heading font-bold text-recipe-primary">Recipe Genius</span>
            </Link>
            <p className="text-recipe-lightText mb-4">
              Personalized healthy recipes tailored to your unique needs and preferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-recipe-lightText hover:text-recipe-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-recipe-lightText hover:text-recipe-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-recipe-lightText hover:text-recipe-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-recipe-lightText hover:text-recipe-primary">Home</Link></li>
              <li><Link to="/profile" className="text-recipe-lightText hover:text-recipe-primary">Create Profile</Link></li>
              <li><Link to="/favorites" className="text-recipe-lightText hover:text-recipe-primary">Saved Recipes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Nutrition Guide</a></li>
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Cooking Tips</a></li>
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Healthy Eating Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Support</a></li>
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-recipe-lightText hover:text-recipe-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-recipe-lightText text-sm">
          <p>© {new Date().getFullYear()} Recipe Genius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
