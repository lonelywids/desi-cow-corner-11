
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
          alt="Cows grazing on Vardini Farms" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full z-10 flex items-center justify-center text-center">
        <div className="container-custom pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="inline-block mb-6 animate-slide-in">
              <span className="px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full">
                Ethical Farming • Desi Cows • Pure Products
              </span>
            </div>
            
            <h1 className="text-white mb-6 animate-slide-in [animation-delay:200ms] text-balance drop-shadow-md">
              Pure. Natural. Desi.<br />
              <span className="text-cream-100">Experience the Goodness of Native Indian Cattle.</span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in [animation-delay:400ms]">
              Vardini Farms brings you the finest A2 milk products from ethically raised desi cows, 
              combining traditional wisdom with modern farming practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in [animation-delay:600ms]">
              <button className="btn-primary">
                Shop Our Products
              </button>
              <button className="btn-secondary">
                Visit Our Farm
              </button>
              <button className="btn-accent">
                Support Our Mission
              </button>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
              <a href="#stats" className="text-white flex flex-col items-center">
                <span className="mb-2 text-sm font-medium">Discover More</span>
                <ChevronRight className="h-6 w-6 transform rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
