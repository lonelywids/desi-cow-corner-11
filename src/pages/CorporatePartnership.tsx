
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CorporatePartnership = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Partnership | Vardini Farms</title>
        <meta name="description" content="Partner with Vardini Farms to promote ethical dairy practices and support our cow rescue mission." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-[url('/images/farm-panorama.jpg')] bg-cover bg-center py-20 relative">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Corporate Partnership</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Join hands with Vardini Farms to create a sustainable future and make a positive impact on society.</p>
            </div>
          </section>
          
          {/* Partnership Overview */}
          <section className="py-16 container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Why Partner With Us?</h2>
              <p className="text-lg mb-6">
                At Vardini Farms, we believe in the power of collaboration to create meaningful change. Our corporate partnership program offers businesses the opportunity to align with our mission of preserving indigenous cow breeds, promoting sustainable agriculture, and educating the community about our rich cultural heritage.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Corporate Social Responsibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Demonstrate your commitment to environmental sustainability, animal welfare, and cultural preservation by supporting our initiatives.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Brand Association</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Associate your brand with ethical practices, sustainability, and wellness through co-branded campaigns and events.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Employee Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Offer your employees meaningful volunteer opportunities and team-building experiences at our farm.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Authentic Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Create authentic content around sustainable agriculture, indigenous breeds, and traditional farming techniques.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <Separator />
          
          {/* Partnership Models */}
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Partnership Models</h2>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="border-t-4 border-t-amber-600">
                  <CardHeader>
                    <CardTitle>Sponsor a Cow</CardTitle>
                    <CardDescription>Support our cow rescue efforts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Fund the rescue and care of abandoned desi cows</li>
                      <li>• Regular updates on the sponsored cow</li>
                      <li>• Recognition on our website and premises</li>
                      <li>• Visits to meet the rescued cows</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-emerald-600">
                  <CardHeader>
                    <CardTitle>Fund an Initiative</CardTitle>
                    <CardDescription>Support our educational programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Fund workshops on indigenous farming</li>
                      <li>• Support school educational programs</li>
                      <li>• Co-create awareness campaigns</li>
                      <li>• Branding opportunities at events</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle>Strategic Alliance</CardTitle>
                    <CardDescription>Long-term partnership opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Co-branded product development</li>
                      <li>• Exclusive supply arrangements</li>
                      <li>• Joint research and development</li>
                      <li>• Knowledge sharing and collaboration</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Partner Testimonials */}
          <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Our Corporate Partners</h2>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>EcoTech Solutions</CardTitle>
                  <CardDescription>Technology Partner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600">
                    "Our partnership with Vardini Farms has allowed us to truly live our sustainability values. The employee volunteer program has been transformative for our team, connecting them directly with sustainable agriculture practices."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  - Vikram Mehta, CSR Head
                </CardFooter>
              </Card>
              
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle>Green Earth Foundation</CardTitle>
                  <CardDescription>Non-profit Partner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="italic text-gray-600">
                    "The joint educational initiatives we've developed with Vardini Farms have reached over 5,000 students in urban areas, helping them understand the importance of indigenous cow breeds and sustainable farming."
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-gray-500">
                  - Priya Sharma, Executive Director
                </CardFooter>
              </Card>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-amber-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Make an Impact?</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                Let's discuss how your organization can partner with Vardini Farms to create meaningful change while achieving your corporate social responsibility goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Contact Us</Button>
                <Button size="lg" variant="outline">Download Partnership Brochure</Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CorporatePartnership;
