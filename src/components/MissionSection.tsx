
import { Heart, Clock, Users } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 md:py-32 relative bg-earth-800 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
          alt="Rescued cow at Vardini Farms" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="heading-lg text-white mb-6">Rescue, Rehabilitate, Respect</h2>
            
            <p className="text-cream-100 text-lg mb-8 max-w-xl">
              At Vardini Farms, our mission extends beyond producing quality dairy products. 
              We are committed to rescuing abandoned and abused cows, providing them a safe haven,
              and honoring their sacred place in Indian culture.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-terracotta-500/20 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-medium text-cream-100 mb-2">
                    Compassionate Care
                  </h3>
                  <p className="text-cream-200">
                    Each rescued cow receives individualized care, proper nutrition, and regular veterinary check-ups.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-terracotta-500/20 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-medium text-cream-100 mb-2">
                    Natural Lifetime
                  </h3>
                  <p className="text-cream-200">
                    We ensure each cow lives out its natural lifespan in dignity, never sent for slaughter.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-terracotta-500/20 rounded-full mr-4">
                  <Users className="h-6 w-6 text-terracotta-400" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-medium text-cream-100 mb-2">
                    Community Education
                  </h3>
                  <p className="text-cream-200">
                    We host educational programs about cow protection and sustainable farming practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-accent">
                Support Our Mission
              </button>
              <button className="btn-secondary">
                Adopt a Cow
              </button>
            </div>
          </div>
          
          {/* Rescue Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-glass-lg animate-fade-in">
            <h3 className="text-2xl font-playfair font-medium text-white mb-6">
              Our Rescue Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-5xl font-playfair font-bold text-terracotta-400 mb-2">87+</div>
                <p className="text-cream-100">Cows rescued from slaughter and neglect</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-5xl font-playfair font-bold text-terracotta-400 mb-2">12+</div>
                <p className="text-cream-100">Years of dedicated cow protection efforts</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-5xl font-playfair font-bold text-terracotta-400 mb-2">45+</div>
                <p className="text-cream-100">Calves born and raised at our sanctuary</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-5xl font-playfair font-bold text-terracotta-400 mb-2">5,000+</div>
                <p className="text-cream-100">Visitors educated annually on cow protection</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-white/10">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Cattle rescue at Vardini Farms" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">Daily care and feeding at our rescue shelter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
