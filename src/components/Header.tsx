
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat, Home, Heart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="recipe-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-recipe-primary" />
            <span className="text-xl font-heading font-bold text-recipe-primary">Recipe Genius</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-recipe-text hover:text-recipe-primary transition-colors flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/favorites" className="text-recipe-text hover:text-recipe-primary transition-colors flex items-center space-x-1">
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </Link>
            <Link to="/profile" className="text-recipe-text hover:text-recipe-primary transition-colors flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button className="bg-recipe-primary hover:bg-recipe-primary hover:bg-opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
