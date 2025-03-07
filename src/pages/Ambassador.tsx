
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Flag, Heart, Share2, UserCheck, Users, Instagram, Facebook, Twitter, Linkedin, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ambassador = () => {
  return (
    <>
      <Helmet>
        <title>Become an Ambassador | Vardini Farms</title>
        <meta name="description" content="Join our mission as a Vardini Farms Ambassador and help spread awareness about desi cow protection and sustainable farming." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac')] bg-cover bg-center py-24 relative">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Become Our Ambassador</h1>
                <p className="text-xl text-white/90 mb-8">
                  Help us spread the message of cow protection, sustainable farming, and cultural heritage preservation as a Vardini Farms Ambassador.
                </p>
                <Button 
                  size="lg" 
                  className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Flag className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </div>
            </div>
          </section>
          
          {/* What is an Ambassador Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 font-playfair">What is a Vardini Farms Ambassador?</h2>
                <p className="text-lg text-earth-700">
                  Ambassadors are passionate individuals who share our vision of protecting indigenous cow breeds, 
                  promoting sustainable farming, and preserving our rich cultural heritage. They help spread our 
                  message across various platforms and communities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-6 border-t-4 border-terracotta-500">
                  <CardContent className="pt-6">
                    <div className="bg-terracotta-100 p-3 rounded-full inline-flex mb-4">
                      <Share2 className="h-8 w-8 text-terracotta-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Spread Awareness</h3>
                    <p className="text-earth-600">
                      Share our mission, stories, and content with your network to raise awareness about indigenous cow protection.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 border-t-4 border-amber-500">
                  <CardContent className="pt-6">
                    <div className="bg-amber-100 p-3 rounded-full inline-flex mb-4">
                      <Heart className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Inspire Action</h3>
                    <p className="text-earth-600">
                      Motivate others to support our cause through donations, volunteering, or adopting our sustainable practices.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-6 border-t-4 border-green-500">
                  <CardContent className="pt-6">
                    <div className="bg-green-100 p-3 rounded-full inline-flex mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Build Community</h3>
                    <p className="text-earth-600">
                      Connect with like-minded individuals and help grow our community of supporters across India.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <Separator />
          
          {/* Ambassador Benefits */}
          <section className="py-16 bg-earth-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 font-playfair text-center">Benefits of Being an Ambassador</h2>
                <p className="text-lg text-earth-700 text-center mb-12">
                  As a Vardini Farms Ambassador, you'll receive exclusive perks while making a meaningful impact.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="bg-terracotta-100 p-2 rounded-full mr-4">
                        <Award className="h-5 w-5 text-terracotta-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Recognition & Growth</h3>
                        <p className="text-earth-600">
                          Build your personal brand as a sustainability advocate and gain recognition in the community.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="bg-terracotta-100 p-2 rounded-full mr-4">
                        <UserCheck className="h-5 w-5 text-terracotta-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Exclusive Access</h3>
                        <p className="text-earth-600">
                          Get priority access to our events, workshops, and behind-the-scenes experiences at the farm.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="bg-terracotta-100 p-2 rounded-full mr-4">
                        <Users className="h-5 w-5 text-terracotta-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Network Expansion</h3>
                        <p className="text-earth-600">
                          Connect with like-minded individuals, influencers, and organizations in the sustainable living space.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="bg-terracotta-100 p-2 rounded-full mr-4">
                        <Heart className="h-5 w-5 text-terracotta-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">Meaningful Impact</h3>
                        <p className="text-earth-600">
                          Directly contribute to the protection of desi cows and preservation of Indian cultural heritage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ambassador Responsibilities */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-playfair">Ambassador Responsibilities</h2>
                  <p className="text-lg text-earth-700 mb-8">
                    As a Vardini Farms Ambassador, you'll help us spread our message and grow our community through various activities.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">
                        <span className="font-medium">Share Our Content:</span> Post about Vardini Farms' initiatives, events, and products on your social media platforms.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">
                        <span className="font-medium">Create Content:</span> Develop original content highlighting our mission, cow protection, and sustainable farming.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">
                        <span className="font-medium">Represent Us:</span> Attend events (virtual or in-person) as a Vardini Farms representative when possible.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">
                        <span className="font-medium">Engage & Educate:</span> Participate in ambassador-exclusive discussions and share knowledge about desi cows and culture.
                      </p>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                    alt="Indigenous cow at Vardini Farms" 
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-md">
                    <p className="text-earth-800 font-medium">
                      Help us protect these beautiful creatures and our heritage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Social Media Section */}
          <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 font-playfair">Spread Our Message</h2>
                <p className="text-lg text-earth-700 max-w-3xl mx-auto">
                  As an ambassador, you'll help us reach a wider audience through your social media platforms and personal networks.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full shadow-sm inline-flex mb-4">
                    <Instagram className="h-10 w-10 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Instagram</h3>
                  <p className="text-earth-600">
                    Share our visual stories and engage urban audiences
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full shadow-sm inline-flex mb-4">
                    <Facebook className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Facebook</h3>
                  <p className="text-earth-600">
                    Connect with communities and share detailed updates
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full shadow-sm inline-flex mb-4">
                    <Twitter className="h-10 w-10 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Twitter</h3>
                  <p className="text-earth-600">
                    Spread quick updates and join relevant conversations
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-6 rounded-full shadow-sm inline-flex mb-4">
                    <Linkedin className="h-10 w-10 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
                  <p className="text-earth-600">
                    Engage professionals and corporate networks
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ambassador Stories */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 font-playfair">Meet Our Ambassadors</h2>
                <p className="text-lg text-earth-700 max-w-3xl mx-auto">
                  Hear from the individuals who are already making an impact as Vardini Farms Ambassadors.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" 
                      alt="Rajesh Sharma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">Rajesh Sharma</h3>
                    <p className="text-sm text-earth-500 mb-4">Ambassador since 2022</p>
                    <p className="text-earth-700">
                      "Being an ambassador for Vardini Farms has connected me with like-minded individuals passionate about preserving our cultural heritage and protecting indigenous cow breeds. I've learned so much about sustainable farming and have been able to share this knowledge with my community in Mumbai."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" 
                      alt="Priya Patel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">Priya Patel</h3>
                    <p className="text-sm text-earth-500 mb-4">Ambassador since 2021</p>
                    <p className="text-earth-700">
                      "As someone with a background in digital marketing, becoming an ambassador allowed me to use my skills for a cause I deeply care about. It's incredibly rewarding to see how my content has helped raise awareness about desi cows and encouraged people in Bangalore to support ethical dairy practices."
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                      alt="Vikram Mehta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">Vikram Mehta</h3>
                    <p className="text-sm text-earth-500 mb-4">Ambassador since 2020</p>
                    <p className="text-earth-700">
                      "What started as a simple passion for sustainable living has turned into a meaningful journey as a Vardini Farms Ambassador. I've been able to organize workshops in Delhi, connect urban residents with their roots, and help people understand the importance of preserving indigenous cow breeds."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Application Form */}
          <section id="application-form" className="py-16 bg-earth-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-earth-800 text-white p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-playfair font-bold mb-4">Join Our Ambassador Program</h3>
                    <p className="mb-6">
                      Fill out this form to apply for the Vardini Farms Ambassador Program. We'll review your application and get back to you within 5-7 business days.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                        <p>Help us spread awareness about desi cow protection and sustainable farming.</p>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                        <p>Join a community of passionate advocates for Indian cultural heritage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6">Application Form</h3>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="first-name" className="block text-earth-700 mb-2 font-medium">
                            First Name
                          </label>
                          <Input
                            id="first-name"
                            placeholder="Enter your first name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="last-name" className="block text-earth-700 mb-2 font-medium">
                            Last Name
                          </label>
                          <Input
                            id="last-name"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-earth-700 mb-2 font-medium">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-earth-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-earth-700 mb-2 font-medium">
                          City
                        </label>
                        <Input
                          id="city"
                          placeholder="Enter your city"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="social-media" className="block text-earth-700 mb-2 font-medium">
                          Social Media Handles (Instagram, Facebook, Twitter, etc.)
                        </label>
                        <Textarea
                          id="social-media"
                          placeholder="Enter your social media handles"
                          className="min-h-[80px]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="motivation" className="block text-earth-700 mb-2 font-medium">
                          Why do you want to become a Vardini Farms Ambassador?
                        </label>
                        <Textarea
                          id="motivation"
                          placeholder="Tell us about your motivation"
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 text-lg"
                      >
                        <Flag className="w-5 h-5 mr-2" />
                        Submit Application
                      </Button>
                      
                      <p className="text-sm text-earth-500 text-center">
                        By submitting this form, you agree to our terms and privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                    alt="Cows at Vardini Farms" 
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                    Ready to Make an Impact?
                  </h2>
                  <p className="text-lg text-cream-100 mb-8">
                    Join our ambassador program today and help us protect indigenous cow breeds, promote sustainable farming, and preserve our rich cultural heritage.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                      size="lg"
                    >
                      <Flag className="w-5 h-5 mr-2" />
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      size="lg"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Ambassador;
