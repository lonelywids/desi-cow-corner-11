
import React from "react";

const AmbassadorResponsibilities = () => {
  return (
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
  );
};

export default AmbassadorResponsibilities;
