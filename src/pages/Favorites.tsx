
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Heart, ArrowRight, Bookmark, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock favorites data for demonstration
const mockFavorites = [
  {
    id: 1,
    title: "Mediterranean Quinoa Bowl",
    description: "A nutritious bowl with quinoa, roasted vegetables, and tahini dressing.",
    prepTime: "15 mins",
    cookTime: "30 mins",
    calories: 450,
    tags: ["Mediterranean", "Vegetarian", "High Protein"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Creamy Tuscan Chicken",
    description: "Tender chicken in a creamy garlic sauce with sun-dried tomatoes and spinach.",
    prepTime: "10 mins",
    cookTime: "25 mins",
    calories: 520,
    tags: ["Italian", "High Protein", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Blueberry Oatmeal Breakfast Bars",
    description: "Wholesome breakfast bars made with oats, almond butter, and fresh blueberries.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    calories: 310,
    tags: ["Breakfast", "Vegan", "High Fiber"],
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Thai Coconut Curry Soup",
    description: "A flavorful soup with lemongrass, ginger, coconut milk, and vegetables.",
    prepTime: "20 mins",
    cookTime: "30 mins",
    calories: 380,
    tags: ["Thai", "Dairy-Free", "Spicy"],
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Favorites = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 bg-recipe-neutral">
        <div className="recipe-container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold">
                Your <span className="text-recipe-primary">Favorite</span> Recipes
              </h1>
              <p className="text-recipe-lightText mt-2">
                Access your saved recipes anytime, even offline
              </p>
            </div>
            <div className="relative hidden md:block w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-recipe-lightText h-4 w-4" />
              <Input 
                placeholder="Search your recipes..." 
                className="pl-10"
              />
            </div>
          </div>

          {mockFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFavorites.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full text-recipe-danger hover:bg-recipe-danger hover:text-white transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{recipe.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex space-x-4 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.prepTime} + {recipe.cookTime}</span>
                      </div>
                      <div>
                        <span>{recipe.calories} cal</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-recipe-secondary bg-opacity-20 text-recipe-secondary px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="link" 
                      className="text-recipe-primary p-0 h-auto font-medium"
                    >
                      View Recipe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <Bookmark className="h-12 w-12 mx-auto text-recipe-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">No favorites yet</h3>
              <p className="text-recipe-lightText mb-6">
                When you find recipes you love, save them here for quick access
              </p>
              <Button className="bg-recipe-primary text-white">
                Generate Your First Recipe
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
