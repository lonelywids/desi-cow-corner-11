
import React from "react";
import { Heart, BarChart3, ShieldCheck } from "lucide-react";

const ImpactSection = () => {
  return (
    <section id="our-impact" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
            The Impact of Your Donation
          </h2>
          <p className="text-lg text-earth-600 max-w-3xl mx-auto">
            Your support enables us to continue our mission of rescuing desi cows, preserving our culture, and educating the next generation about our heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ImpactCard 
            icon={<Heart className="h-10 w-10 text-terracotta-500" />}
            number="87+"
            text="Cows Rescued"
            description="We've rescued over 87 cows from slaughter and neglect, giving them a safe and loving home."
          />
          
          <ImpactCard 
            icon={<BarChart3 className="h-10 w-10 text-terracotta-500" />}
            number="50+"
            text="Educational Programs"
            description="We've conducted more than 50 educational programs in schools, colleges, and corporates."
          />
          
          <ImpactCard 
            icon={<ShieldCheck className="h-10 w-10 text-terracotta-500" />}
            number="12+"
            text="Years of Service"
            description="For over 12 years, we've been dedicated to protecting desi cows and preserving our cultural heritage."
          />
        </div>

        <RescueStoryGallery />

        <div className="bg-earth-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-4">
                How Your Donation Helps
              </h3>
              <ul className="space-y-4">
                <DonationImpactItem 
                  title="Daily Care & Food"
                  description="Provides nutritious food, shelter, and medical care for our rescued cows."
                />
                <DonationImpactItem 
                  title="Educational Programs"
                  description="Funds our outreach initiatives in schools, colleges, and corporations."
                />
                <DonationImpactItem 
                  title="Rescue Operations"
                  description="Enables our team to rescue more desi cows from slaughter and neglect."
                />
                <DonationImpactItem 
                  title="Cultural Preservation"
                  description="Supports programs that preserve and promote our rich Indian heritage."
                />
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                alt="Cows grazing at Vardini Farms" 
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactCard = ({ icon, number, text, description }: { icon: React.ReactNode; number: string; text: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-100 text-center hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <div className="text-4xl font-playfair font-bold text-earth-800 mb-2">{number}</div>
    <div className="text-xl font-medium text-earth-700 mb-3">{text}</div>
    <p className="text-earth-600">{description}</p>
  </div>
);

const RescueStoryGallery = () => (
  <div className="bg-earth-50 rounded-2xl p-8 md:p-12 mb-16">
    <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6 text-center">
      Rescue Stories: The Journey of Hope
    </h3>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RescueStory 
        image="https://images.unsplash.com/photo-1546445317-29f4545e9d53" 
        name="Ganga"
        story="Rescued from a slaughterhouse in Delhi, Ganga was severely malnourished and injured. Today, she's healthy and living peacefully at our sanctuary."
      />
      
      <RescueStory 
        image="https://images.unsplash.com/photo-1500595046743-cd271d694d30" 
        name="Radha"
        story="Abandoned after she stopped producing milk, Radha was found tied to a post without food or water. She now enjoys grazing in our open fields."
      />
      
      <RescueStory 
        image="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
        name="Krishna"
        story="Born at our sanctuary to a rescued mother, Krishna represents the new generation of protected desi cows that will carry forward our heritage."
      />
    </div>
  </div>
);

const RescueStory = ({ image, name, story }: { image: string; name: string; story: string }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={`${name} - rescued cow`} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h4 className="text-xl font-medium text-earth-800 mb-2">{name}'s Story</h4>
      <p className="text-earth-600">{story}</p>
    </div>
  </div>
);

const DonationImpactItem = ({ title, description }: { title: string; description: string }) => (
  <li className="flex">
    <div className="flex-shrink-0 mt-1">
      <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium text-earth-800">{title}</h4>
      <p className="text-earth-600">{description}</p>
    </div>
  </li>
);

export default ImpactSection;
