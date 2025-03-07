
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Heart, Users, Leaf, Book, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VolunteerOpportunities = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer Opportunities | Vardini Farms</title>
        <meta name="description" content="Join our volunteer program and help us educate people about desi cow breeds and Indian culture." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-[url('/images/volunteer-hero.jpg')] bg-cover bg-center py-20 relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Volunteer With Us</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Be a part of our desi initiatives and help us educate people about indigenous cow breeds and Indian cultural heritage.</p>
            </div>
          </section>
          
          {/* Introduction */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Join Our Mission</h2>
              <p className="text-lg mb-6">
                At Vardini Farms, we believe that preserving our indigenous cow breeds and traditional knowledge is not just our responsibility—it's a collective effort. Our volunteer program offers urban Indians an opportunity to reconnect with their roots while making a meaningful impact.
              </p>
              <p className="text-lg mb-6">
                Whether you're a college student, working professional, retiree, or someone passionate about Indian culture and sustainable living, we have volunteer opportunities that match your interests, skills, and availability.
              </p>
            </div>
          </section>
          
          {/* Volunteer Opportunities */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Opportunities</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="border-t-4 border-t-amber-600">
                  <CardHeader>
                    <Heart className="h-8 w-8 text-amber-600 mb-2" />
                    <CardTitle>Cow Care Assistant</CardTitle>
                    <CardDescription>Weekend commitment: 4-6 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Assist our gau sevaks in daily cow care routines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Help prepare special feeds and herbal medicines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Learn traditional care methods for indigenous cows</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">Perfect for animal lovers and those seeking a spiritual connection with gau mata</p>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-green-600">
                  <CardHeader>
                    <Book className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Educational Program Volunteer</CardTitle>
                    <CardDescription>Weekday evenings or weekends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Conduct school workshops about desi cows and traditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Create educational content about Indian agricultural heritage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Guide visitors during farm tours and educational visits</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">Ideal for teachers, students, and those with good communication skills</p>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-blue-600">
                  <CardHeader>
                    <Leaf className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Sustainable Living Mentor</CardTitle>
                    <CardDescription>Flexible commitment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Teach urban dwellers about sustainable living practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Conduct workshops on traditional cooking, Ayurveda, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Help develop content for our sustainable living programs</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">Great for professionals with knowledge of traditional practices and sustainable living</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          
          <Separator />
          
          {/* Impact of Volunteering */}
          <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Your Impact as a Volunteer</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cultural Preservation</h3>
                <p>Help preserve traditional knowledge and practices that are rapidly disappearing from urban India.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cow Protection</h3>
                <p>Directly contribute to the welfare and protection of indigenous cow breeds facing extinction.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Educational Outreach</h3>
                <p>Spread awareness about our cultural heritage, sustainable practices, and indigenous knowledge.</p>
              </div>
            </div>
          </section>
          
          {/* Volunteer Process */}
          <section className="py-16 bg-earth-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">How to Join Our Volunteer Program</h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-earth-200 z-0"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-12">
                    <TimelineItem 
                      number="1"
                      title="Apply Online"
                      description="Fill out our volunteer application form with your interests, skills, and availability."
                      isLeft={true}
                    />
                    
                    <TimelineItem 
                      number="2"
                      title="Orientation Session"
                      description="Attend an orientation session to learn about our mission, values, and volunteer guidelines."
                      isLeft={false}
                    />
                    
                    <TimelineItem 
                      number="3"
                      title="Training"
                      description="Receive specific training for your volunteer role from our experienced team members."
                      isLeft={true}
                    />
                    
                    <TimelineItem 
                      number="4"
                      title="Start Volunteering"
                      description="Begin your volunteering journey and make a positive impact on our community."
                      isLeft={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Volunteer Testimonials */}
          <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Aditya Sharma</CardTitle>
                  <CardDescription>Software Engineer, Bangalore</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600">
                    "As a techie who spends most of my time in front of screens, volunteering at Vardini Farms has been a transformative experience. Connecting with our cultural roots and getting to teach school children about desi cows has brought immense joy and purpose to my life."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Priya Malhotra</CardTitle>
                  <CardDescription>College Student, Delhi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600">
                    "I started volunteering at Vardini Farms during my college break, and it completely changed my perspective. Learning about sustainable living practices and connecting with our ancient wisdom has inspired me to pursue environmental studies."
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="py-16 bg-earth-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Frequently Asked Questions</h2>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Do I need any special qualifications to volunteer?</h3>
                  <p>Most volunteer positions don't require specific qualifications, just enthusiasm and commitment. We provide all necessary training. For specialized roles like Ayurvedic workshops or educational programs, relevant experience is beneficial but not mandatory.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">What is the minimum time commitment?</h3>
                  <p>We offer flexible volunteering options ranging from one-time events to regular weekly commitments. The minimum commitment depends on the role, but generally, we ask for at least 4 hours per month for ongoing positions.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Can I volunteer as a family or with friends?</h3>
                  <p>Absolutely! We encourage family and group volunteering. It's a wonderful way to spend quality time together while making a positive impact. We have special family-friendly volunteer days once a month.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">I live in an urban area. Can I still volunteer?</h3>
                  <p>Yes! Many of our educational initiatives take place in urban areas. Additionally, we offer virtual volunteering opportunities for content creation, social media management, and online educational programs.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-amber-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Make a Difference?</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                Join our team of passionate volunteers and help us preserve our cultural heritage while creating a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Apply as a Volunteer</Button>
                <Button size="lg" variant="outline">Contact Volunteer Coordinator</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

const TimelineItem = ({ number, title, description, isLeft }: { number: string; title: string; description: string; isLeft: boolean }) => {
  return (
    <div className="relative z-10">
      <div className={`flex items-center justify-between ${isLeft ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'}`}>
        <div className="hidden md:block w-5/12"></div>
        
        <div className="flex items-center justify-center z-10">
          <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
            {number}
          </div>
        </div>
        
        <div className="w-full md:w-5/12 ml-4 md:ml-0">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
