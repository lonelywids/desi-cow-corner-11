
import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const SocialMediaSection = () => {
  return (
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
  );
};

export default SocialMediaSection;
