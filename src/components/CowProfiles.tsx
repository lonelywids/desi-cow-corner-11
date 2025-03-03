
import { useState } from 'react';
import { Heart, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

type CowBreed = {
  id: number;
  name: string;
  region: string;
  description: string;
  characteristics: string[];
  image: string;
};

const cowBreeds: CowBreed[] = [
  {
    id: 1,
    name: 'Gir',
    region: 'Gujarat & Rajasthan',
    description: 'Known for their distinctive convex forehead and pendulous ears, Gir cows produce rich A2 milk with high fat content.',
    characteristics: ['High resistance to tropical diseases', 'Produces 8-10 liters daily', 'Rich golden milk with 4-5% fat'],
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
  },
  {
    id: 2,
    name: 'Sahiwal',
    region: 'Punjab & Haryana',
    description: 'Sahiwal cows are known for their reddish-brown color and are one of the best milk-producing desi breeds.',
    characteristics: ['Heat-tolerant and tick-resistant', 'Produces 10-12 liters daily', 'Rich in A2 beta-casein protein'],
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
  },
  {
    id: 3,
    name: 'Hallikar',
    region: 'Karnataka',
    description: 'An ancient breed from South India, known for their distinctive long horns and graceful appearance.',
    characteristics: ['Excellent drought resistance', 'Produces 5-7 liters daily', 'Highly nutritious milk'],
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
  },
  {
    id: 4,
    name: 'Murrah',
    region: 'Haryana & Punjab',
    description: 'This buffalo breed is known for their deep black color and tightly curved horns, producing creamy milk.',
    characteristics: ['Adaptable to various climates', 'Produces 8-10 liters daily', 'High fat content (7-8%)'],
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
  },
];

const CowProfiles = () => {
  const [activeBreed, setActiveBreed] = useState<number>(1);

  const selectedBreed = cowBreeds.find(breed => breed.id === activeBreed);

  return (
    <section className="section-spacing relative overflow-hidden bg-grain">
      <div className="absolute inset-0 bg-earth-50/80"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-earth-100 text-earth-800 text-sm font-medium rounded-full mb-4">
            Our Family
          </span>
          <h2 className="heading-lg mb-6 text-earth-800">Meet Our Desi Cows</h2>
          <p className="subheading mx-auto">
            Each breed brings its unique characteristics and benefits. Our desi cows are the heart of our farm,
            treated with love, respect, and the highest standards of ethical care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Cow Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-glass-lg animate-gentle-pulse">
              <img 
                src={selectedBreed?.image} 
                alt={selectedBreed?.name} 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 bg-glass rounded-xl p-4 shadow-glass">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-1">
                {selectedBreed?.name} Breed
              </h3>
              <p className="text-sm text-earth-600">
                Native to: {selectedBreed?.region}
              </p>
            </div>
          </div>
          
          {/* Cow Information */}
          <div className="bg-white/60 backdrop-blur-xs p-8 rounded-2xl border border-cream-200 shadow-glass">
            <div className="flex flex-wrap gap-3 mb-6">
              {cowBreeds.map((breed) => (
                <button
                  key={breed.id}
                  onClick={() => setActiveBreed(breed.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeBreed === breed.id
                      ? "bg-terracotta-500 text-white"
                      : "bg-cream-100 text-earth-700 hover:bg-cream-200"
                  )}
                >
                  {breed.name}
                </button>
              ))}
            </div>
            
            <h3 className="text-2xl font-playfair font-medium text-earth-800 mb-4">
              About {selectedBreed?.name} Cows
            </h3>
            
            <p className="text-earth-700 mb-6">
              {selectedBreed?.description}
            </p>
            
            <h4 className="flex items-center text-earth-800 font-medium mb-3">
              <Info className="w-5 h-5 mr-2 text-terracotta-500" />
              Key Characteristics
            </h4>
            
            <ul className="space-y-2 mb-8">
              {selectedBreed?.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-terracotta-500 mr-2">•</span>
                  <span className="text-earth-700">{characteristic}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn-secondary flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Adopt a {selectedBreed?.name} Cow</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CowProfiles;
