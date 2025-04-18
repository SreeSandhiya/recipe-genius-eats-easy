
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Loader2, ChefHat } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This is a mock recipe for demonstration purposes
const mockRecipe = {
  title: "Mediterranean Quinoa Bowl with Roasted Vegetables",
  description: "A nutrient-rich bowl with quinoa, roasted vegetables, and a lemon-tahini dressing. High in protein, fiber, and essential vitamins.",
  prepTime: "15 mins",
  cookTime: "30 mins",
  totalTime: "45 mins",
  servings: 2,
  calories: 450,
  protein: "15g",
  carbs: "55g",
  fat: "20g",
  ingredients: [
    "1 cup quinoa, rinsed",
    "2 cups vegetable broth",
    "1 zucchini, diced",
    "1 red bell pepper, diced",
    "1 small eggplant, diced",
    "1 red onion, sliced",
    "2 tbsp olive oil",
    "1 tsp dried oregano",
    "1/2 tsp ground cumin",
    "Salt and pepper to taste",
    "1/4 cup tahini",
    "2 tbsp lemon juice",
    "1 clove garlic, minced",
    "2-3 tbsp water",
    "1/4 cup fresh parsley, chopped",
    "2 tbsp pine nuts, toasted (optional)"
  ],
  instructions: [
    "Preheat oven to 425°F (220°C).",
    "Cook quinoa in vegetable broth according to package instructions, usually 15-20 minutes until all liquid is absorbed.",
    "Toss zucchini, bell pepper, eggplant, and red onion with olive oil, oregano, cumin, salt, and pepper.",
    "Spread vegetables on a baking sheet and roast for 20-25 minutes until tender and slightly caramelized.",
    "While vegetables are roasting, make the dressing by whisking together tahini, lemon juice, garlic, water, and a pinch of salt until smooth.",
    "Fluff the cooked quinoa with a fork and divide between two bowls.",
    "Top with roasted vegetables.",
    "Drizzle with tahini dressing.",
    "Garnish with fresh parsley and toasted pine nuts if using."
  ],
  youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // This would be a real YouTube tutorial in the actual app
  tags: ["Mediterranean", "Vegetarian", "High Protein", "Vitamin-Rich"]
};

const Generate = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipe, setRecipe] = useState<typeof mockRecipe | null>(null);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [mealType, setMealType] = useState("any");

  const handleGenerate = () => {
    // In a real app, we would call the Supabase function here
    // For demonstration, we'll just set the mock recipe after a delay
    setIsGenerating(true);
    setTimeout(() => {
      setRecipe(mockRecipe);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 bg-recipe-neutral">
        <div className="recipe-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-heading font-bold mb-6 text-center">
              Generate Your <span className="text-recipe-primary">Perfect Recipe</span>
            </h1>
            <p className="text-recipe-lightText mb-8 text-center">
              We'll create a personalized recipe based on your profile and preferences.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Recipe Options</CardTitle>
                    <CardDescription>
                      Customize your recipe generation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="meal-type">Meal Type</Label>
                        <Select value={mealType} onValueChange={setMealType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select meal type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any meal</SelectItem>
                            <SelectItem value="breakfast">Breakfast</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="dinner">Dinner</SelectItem>
                            <SelectItem value="snack">Snack</SelectItem>
                            <SelectItem value="dessert">Dessert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-notes">Additional Notes</Label>
                        <Textarea 
                          id="additional-notes" 
                          placeholder="Any specific ingredients you'd like to include or exclude? Any other preferences?"
                          className="h-32"
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleGenerate} 
                      disabled={isGenerating}
                      className="w-full bg-recipe-primary text-white"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <ChefHat className="mr-2 h-4 w-4" />
                          Generate Recipe
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="lg:col-span-2">
                {recipe ? (
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {recipe.tags.map((tag, index) => (
                          <span key={index} className="bg-recipe-secondary bg-opacity-20 text-recipe-secondary px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Prep Time</p>
                          <p className="font-semibold">{recipe.prepTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Cook Time</p>
                          <p className="font-semibold">{recipe.cookTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Total Time</p>
                          <p className="font-semibold">{recipe.totalTime}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Servings</p>
                          <p className="font-semibold">{recipe.servings}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Calories</p>
                          <p className="font-semibold">{recipe.calories}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Protein</p>
                          <p className="font-semibold">{recipe.protein}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-recipe-lightText text-sm">Carbs</p>
                          <p className="font-semibold">{recipe.carbs}</p>
                        </div>
                      </div>

                      <Tabs defaultValue="ingredients">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                          <TabsTrigger value="instructions">Instructions</TabsTrigger>
                          <TabsTrigger value="video">Video Tutorial</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ingredients" className="space-y-4">
                          <h3 className="font-heading font-semibold text-lg mt-4">Shopping List</h3>
                          <ul className="space-y-2">
                            {recipe.ingredients.map((ingredient, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="h-2 w-2 rounded-full bg-recipe-primary"></div>
                                <span>{ingredient}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="instructions">
                          <h3 className="font-heading font-semibold text-lg mt-4">Step-by-Step Instructions</h3>
                          <ol className="space-y-3 mt-3">
                            {recipe.instructions.map((instruction, index) => (
                              <li key={index} className="flex space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-recipe-primary text-white flex items-center justify-center font-semibold">
                                  {index + 1}
                                </div>
                                <p>{instruction}</p>
                              </li>
                            ))}
                          </ol>
                        </TabsContent>
                        <TabsContent value="video">
                          <div className="mt-4">
                            <h3 className="font-heading font-semibold text-lg mb-3">Video Tutorial</h3>
                            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                              <p className="text-recipe-lightText">
                                In the full application, a relevant YouTube tutorial would be embedded here.
                              </p>
                            </div>
                            <div className="mt-3">
                              <a 
                                href={recipe.youtubeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-recipe-primary hover:underline flex items-center"
                              >
                                Watch on YouTube
                              </a>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                    <CardFooter>
                      <div className="flex w-full justify-between">
                        <Button variant="outline">
                          Save Recipe
                        </Button>
                        <Button 
                          onClick={handleGenerate} 
                          className="bg-recipe-primary text-white"
                        >
                          Generate Another
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ) : (
                  <div className="h-full bg-white rounded-lg border border-gray-200 flex items-center justify-center p-8">
                    {isGenerating ? (
                      <div className="text-center">
                        <Loader2 className="h-12 w-12 animate-spin mx-auto text-recipe-primary mb-4" />
                        <h3 className="text-xl font-heading font-semibold mb-2">Creating your perfect recipe...</h3>
                        <p className="text-recipe-lightText">We're using your preferences to craft a personalized recipe just for you.</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <ChefHat className="h-12 w-12 mx-auto text-recipe-primary mb-4" />
                        <h3 className="text-xl font-heading font-semibold mb-2">Ready to create your recipe</h3>
                        <p className="text-recipe-lightText">Select your options on the left and click "Generate Recipe" to get started.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Generate;
