
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Leaf, MapPin, MilkOff, Sun, Wheat, TreeDeciduous } from 'lucide-react';

const FarmExperience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Farm Experience | Vardini Farms</title>
        <meta name="description" content="Visit our farm, connect with our desi cows, and enjoy a peaceful rural experience away from city noise." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-earth-100 bg-grain">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-earth-800 mb-6">Experience Rural Bliss at Vardini Farms</h1>
            <p className="subheading mb-8">
              Escape the city noise and connect with nature at our sanctuary for desi cows. 
              A peaceful weekend retreat for families to experience authentic farm life.
            </p>
            <Button className="btn-primary text-lg px-8 py-6">Book Your Visit</Button>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-earth-800 mb-6">Visit Our Farm</h2>
              <p className="text-earth-700 mb-4">
                We welcome visitors every weekend to experience the tranquility of Vardini Farms and connect with our beloved desi cows. Our farm tours are completely free and open to families with children of all ages.
              </p>
              <p className="text-earth-700 mb-6">
                During your visit, you'll get to learn about desi cow breeds, their special care requirements, and why we're committed to their protection and welfare regardless of milk production.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-terracotta-500" />
                  <span className="text-earth-800 font-medium">Open every Saturday and Sunday, 9 AM - 4 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-terracotta-500" />
                  <span className="text-earth-800 font-medium">Located just 40 minutes from the city center</span>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="h-6 w-6 text-terracotta-500" />
                  <span className="text-earth-800 font-medium">Sustainable farming practices and natural surroundings</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Peaceful farm landscape" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cow Care Experience */}
      <section className="section-spacing bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-earth-800 mb-6">Experience Desi Cow Care</h2>
            <p className="text-earth-700">
              Our desi cows are the heart of our farm. During your visit, we'll show you how we care for these special animals and why their well-being is our top priority.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-leaf-100 rounded-full flex items-center justify-center mb-6">
                <Wheat className="h-6 w-6 text-leaf-700" />
              </div>
              <h3 className="text-xl font-medium text-earth-800 mb-3">Traditional Feeding</h3>
              <p className="text-earth-700">
                Watch and participate in feeding our cows with traditional organic feed mixtures prepared on our farm. Learn about the nutritional needs of desi cows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-leaf-100 rounded-full flex items-center justify-center mb-6">
                <MilkOff className="h-6 w-6 text-leaf-700" />
              </div>
              <h3 className="text-xl font-medium text-earth-800 mb-3">No-Pressure Environment</h3>
              <p className="text-earth-700">
                Understand how we care for our cows without production pressure. Many of our rescued cows don't produce milk, but they receive the same loving care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-leaf-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-6 w-6 text-leaf-700" />
              </div>
              <h3 className="text-xl font-medium text-earth-800 mb-3">Natural Lifestyle</h3>
              <p className="text-earth-700">
                See how our cows enjoy free movement in open pastures, natural shade, and clean water sources. We prioritize their natural behaviors and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Family farm experience" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="heading-lg text-earth-800 mb-6">Farm Activities for All Ages</h2>
              <p className="text-earth-700 mb-4">
                We offer a range of activities suitable for the whole family. From cow feeding to nature walks, there's something for everyone to enjoy.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracotta-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800">Taste Fresh Farm Products</h4>
                    <p className="text-earth-700">Sample authentic desi cow milk, ghee, and other farm-fresh products directly from our production.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracotta-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800">Nature Walks</h4>
                    <p className="text-earth-700">Explore our farm's natural surroundings with guided walks highlighting local flora and fauna.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracotta-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800">Children's Activities</h4>
                    <p className="text-earth-700">Special activities for children including safe cow interactions and educational games about farm life.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-terracotta-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800">Relaxation Areas</h4>
                    <p className="text-earth-700">Peaceful spots for relaxation, meditation, and connecting with nature away from the city buzz.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-earth-100 bg-grain">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-earth-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <TreeDeciduous className="h-8 w-8 text-earth-700" />
            </div>
            <h2 className="heading-lg text-earth-800 mb-6">Plan Your Visit to Vardini Farms</h2>
            <p className="text-lg text-earth-700 mb-8">
              Escape the city noise and experience the peaceful rhythm of farm life. Our weekend visits are completely free - just bring your family and an open heart.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="btn-primary">Book a Visit</Button>
              <Link to="/rescue-mission">
                <Button variant="outline" className="btn-secondary">Support Our Mission</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-earth-800 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-earth-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-earth-800 mb-2">Is there an entry fee to visit the farm?</h3>
              <p className="text-earth-700">No, our farm visits are completely free. We want to share our love for desi cows and sustainable farming with everyone.</p>
            </div>
            
            <div className="border border-earth-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-earth-800 mb-2">Do I need to book in advance?</h3>
              <p className="text-earth-700">While walk-ins are welcome, we recommend booking your visit to ensure we can provide the best experience and accommodate everyone.</p>
            </div>
            
            <div className="border border-earth-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-earth-800 mb-2">Are there food options available?</h3>
              <p className="text-earth-700">Yes, we offer simple farm-to-table meals and refreshments made with our own produce. You're also welcome to bring your own picnic.</p>
            </div>
            
            <div className="border border-earth-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-earth-800 mb-2">Is the farm suitable for children?</h3>
              <p className="text-earth-700">Absolutely! We have special activities designed for children of all ages, and our staff ensures a safe environment for families.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FarmExperience;
