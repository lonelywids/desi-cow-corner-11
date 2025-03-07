
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Flag, Users } from "lucide-react";

const ApplicationForm = () => {
  return (
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
  );
};

export default ApplicationForm;
