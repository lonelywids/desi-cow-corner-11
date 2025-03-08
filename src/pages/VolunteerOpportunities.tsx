
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, Leaf, School, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VolunteerOpportunities = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer Opportunities | Vardini Farms</title>
        <meta name="description" content="Join our volunteer program and help us care for rescued cows while learning about sustainable farming practices." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b')] bg-cover bg-center py-20 relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Volunteer With Us</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Make a meaningful impact by volunteering your time and skills to help our rescued cows and support sustainable farming practices.</p>
            </div>
          </section>
          
          {/* Why Volunteer Section */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Why Volunteer at Vardini Farms?</h2>
              <p className="text-lg mb-6">
                Volunteering at Vardini Farms offers a unique opportunity to connect with nature, serve animals, and be part of a movement that's preserving our cultural heritage. Whether you're looking to learn about sustainable farming, contribute to animal welfare, or simply spend time in a peaceful rural setting, we have something for everyone.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Heart className="h-8 w-8 text-terracotta-500" />
                    <CardTitle>Connect with Cows</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Build relationships with our rescued cows while helping with their daily care and understanding their unique personalities.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                    <CardTitle>Learn Sustainable Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Gain hands-on experience in sustainable farming, natural cow care, and eco-friendly agricultural techniques.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Users className="h-8 w-8 text-blue-600" />
                    <CardTitle>Community Connection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Meet like-minded individuals, form lasting friendships, and be part of a community dedicated to making a difference.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <School className="h-8 w-8 text-amber-600" />
                    <CardTitle>Cultural Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Learn about the cultural significance of indigenous cows in Indian heritage and traditional knowledge systems.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <Separator />
          
          {/* Volunteer Opportunities Section */}
          <section className="py-16 bg-earth-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Opportunities</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Cow Care</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Help with feeding, grooming, and caring for our rescued cows. Learn about their dietary needs and healthcare.</p>
                    <p><strong>Time Commitment:</strong> Flexible, 3-4 hours</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Farm Maintenance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Assist with maintaining cow shelters, fencing, gardening, and general upkeep of the farm facilities.</p>
                    <p><strong>Time Commitment:</strong> Weekly, 4-5 hours</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Educational Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Help conduct tours for visitors, explain our mission, and teach about indigenous cow breeds and their importance.</p>
                    <p><strong>Time Commitment:</strong> Weekends, 5-6 hours</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Organic Farming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Learn and assist with our organic farming operations, from planting to harvesting using traditional methods.</p>
                    <p><strong>Time Commitment:</strong> Seasonal, 4-6 hours</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Cow Products Workshop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Learn to make products from cow milk, dung, and urine following traditional techniques with modern standards.</p>
                    <p><strong>Time Commitment:</strong> Monthly, full day workshop</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Special Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Help organize and conduct special events, festivals, and awareness programs at the farm or in nearby communities.</p>
                    <p><strong>Time Commitment:</strong> As needed, varies</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* How to Apply Section */}
          <section className="py-16 container mx-auto px-4">
            <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1516467508483-a7212febe31a" 
                  alt="Volunteers at Vardini Farms" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 font-playfair text-center">How to Apply</h2>
                <p className="text-lg mb-8 text-center">
                  Ready to make a difference? Follow these simple steps to join our volunteer program:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-bold mb-2">Fill the Form</h3>
                    <p>Complete our online volunteer application form with your details and interests.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-bold mb-2">Orientation</h3>
                    <p>Attend a virtual or in-person orientation session to learn about our work.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-bold mb-2">Start Volunteering</h3>
                    <p>Choose your preferred activities and schedule your first volunteering session.</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600">
                    <Calendar className="mr-2 h-5 w-5" />
                    Apply to Volunteer
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-16 bg-cream-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Testimonials</h2>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                      alt="Volunteer Anita" 
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg text-center mb-2">Anita Sharma</h3>
                    <p className="text-center text-earth-600 mb-4">Volunteer since 2022</p>
                    <p className="italic text-gray-600">
                      "Volunteering at Vardini Farms has been transformative. The connection I've developed with the cows and the knowledge I've gained about sustainable farming has changed my outlook on life. It's a peaceful place where you can truly make a difference."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                      alt="Volunteer Rahul" 
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg text-center mb-2">Rahul Mehra</h3>
                    <p className="text-center text-earth-600 mb-4">Weekend Volunteer</p>
                    <p className="italic text-gray-600">
                      "As a corporate professional, my weekend volunteering at Vardini Farms provides the perfect balance to my busy urban life. Working with the cows is therapeutic, and I've learned so much about our cultural heritage that I wouldn't have otherwise."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md">
                  <CardContent className="pt-6">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                      alt="Volunteer Priya" 
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg text-center mb-2">Priya Patel</h3>
                    <p className="text-center text-earth-600 mb-4">Student Volunteer</p>
                    <p className="italic text-gray-600">
                      "I started volunteering at Vardini as part of a college project, but it's become a passion. The team is incredibly supportive, and I've gained practical experience in sustainable farming that complements my environmental studies perfectly."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Do I need prior experience with cows or farming?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>No prior experience is required. We provide training for all volunteer activities. Your enthusiasm and willingness to learn are all you need to bring!</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>What age groups can volunteer?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We welcome volunteers of all ages. Those under 16 must be accompanied by an adult. We have appropriate activities for different age groups and abilities.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Is there a minimum time commitment?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>While we appreciate any time you can give, we recommend a minimum commitment of 4 hours per month to have a meaningful experience and build relationships with our cows.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Can I volunteer as part of a group or corporate team?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Absolutely! We offer special programs for corporate teams, schools, and community groups. These can be customized based on your group's interests and objectives.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Are meals provided for volunteers?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>For full-day volunteers, we provide a complimentary traditional vegetarian lunch made with organic ingredients from our farm. For shorter sessions, we offer refreshments.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-terracotta-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Make a Difference?</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                Join our community of passionate volunteers and help us in our mission to rescue, rehabilitate, and provide a loving home for indigenous cows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600">Apply Now</Button>
                <Button size="lg" variant="outline">Contact for More Information</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VolunteerOpportunities;
