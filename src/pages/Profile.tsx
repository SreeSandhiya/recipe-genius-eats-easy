
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { User, Heart, AlertCircle, Globe, Apple } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile saved successfully!",
      description: "Your preferences have been updated.",
    });
    // In a real app, we would save the profile to Supabase here
    // For now, we'll just navigate to the recipe generation page
    navigate('/generate');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 bg-recipe-neutral">
        <div className="recipe-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-heading font-bold mb-6 text-center">
              Create Your <span className="text-recipe-primary">Profile</span>
            </h1>
            <p className="text-recipe-lightText mb-8 text-center">
              Tell us about yourself so we can create personalized recipes just for you.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  This information helps us recommend recipes that match your health needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                            <User className="h-4 w-4" />
                          </span>
                          <Input id="name" placeholder="Your name" className="rounded-l-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Your age" min="1" max="120" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non-binary">Non-binary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activity">Activity Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                          <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                          <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                          <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                          <SelectItem value="very-active">Very Active (very hard exercise daily)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center mb-4">
                        <Heart className="h-5 w-5 text-recipe-primary mr-2" />
                        <h3 className="text-lg font-heading font-semibold">Dietary Preferences</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vegetarian" />
                          <Label htmlFor="vegetarian">Vegetarian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vegan" />
                          <Label htmlFor="vegan">Vegan</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pescatarian" />
                          <Label htmlFor="pescatarian">Pescatarian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="keto" />
                          <Label htmlFor="keto">Keto</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="paleo" />
                          <Label htmlFor="paleo">Paleo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="low-carb" />
                          <Label htmlFor="low-carb">Low carb</Label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center mb-4">
                        <AlertCircle className="h-5 w-5 text-recipe-danger mr-2" />
                        <h3 className="text-lg font-heading font-semibold">Allergies & Restrictions</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="gluten" />
                          <Label htmlFor="gluten">Gluten</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dairy" />
                          <Label htmlFor="dairy">Dairy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="nuts" />
                          <Label htmlFor="nuts">Nuts</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="soy" />
                          <Label htmlFor="soy">Soy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="shellfish" />
                          <Label htmlFor="shellfish">Shellfish</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="eggs" />
                          <Label htmlFor="eggs">Eggs</Label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="other-allergies">Other Allergies or Restrictions</Label>
                        <Textarea 
                          id="other-allergies" 
                          placeholder="List any other food allergies or restrictions here"
                          className="h-20"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center mb-4">
                        <Apple className="h-5 w-5 text-recipe-primary mr-2" />
                        <h3 className="text-lg font-heading font-semibold">Health Concerns & Deficiencies</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diabetes" />
                          <Label htmlFor="diabetes">Diabetes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="heart-disease" />
                          <Label htmlFor="heart-disease">Heart Disease</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="high-blood-pressure" />
                          <Label htmlFor="high-blood-pressure">High Blood Pressure</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="iron-deficiency" />
                          <Label htmlFor="iron-deficiency">Iron Deficiency</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="vitamin-d-deficiency" />
                          <Label htmlFor="vitamin-d-deficiency">Vitamin D Deficiency</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="calcium-deficiency" />
                          <Label htmlFor="calcium-deficiency">Calcium Deficiency</Label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="other-health-concerns">Other Health Concerns</Label>
                        <Textarea 
                          id="other-health-concerns" 
                          placeholder="List any other health concerns or nutritional needs"
                          className="h-20"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center mb-4">
                        <Globe className="h-5 w-5 text-recipe-primary mr-2" />
                        <h3 className="text-lg font-heading font-semibold">Cuisine Preferences</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="italian" />
                          <Label htmlFor="italian">Italian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mexican" />
                          <Label htmlFor="mexican">Mexican</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="indian" />
                          <Label htmlFor="indian">Indian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="chinese" />
                          <Label htmlFor="chinese">Chinese</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="japanese" />
                          <Label htmlFor="japanese">Japanese</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="thai" />
                          <Label htmlFor="thai">Thai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mediterranean" />
                          <Label htmlFor="mediterranean">Mediterranean</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="american" />
                          <Label htmlFor="american">American</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="french" />
                          <Label htmlFor="french">French</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button type="submit" className="bg-recipe-primary text-white px-8 py-6 text-lg w-full md:w-auto">
                      Save Profile & Continue
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
