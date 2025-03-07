
import React from "react";
import { Award, UserCheck, Users, Heart } from "lucide-react";

const AmbassadorBenefits = () => {
  return (
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
  );
};

export default AmbassadorBenefits;
