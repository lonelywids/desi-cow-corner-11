
import { Leaf, Heart, TreeDeciduous } from "lucide-react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MeetOurCows = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Cows | Vardini Farms</title>
        <meta
          name="description"
          content="Meet the beloved desi cows of Vardini Farms. Learn about our rescue efforts and the special characteristics of indigenous Indian cattle breeds."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-earth-100/30 to-cream-100/20 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-leaf-100 text-leaf-800 text-sm font-medium rounded-full mb-4">
              Our Sacred Friends
            </span>
            <h1 className="heading-lg mb-6 text-earth-800">Meet Our Beloved Desi Cows</h1>
            <p className="subheading mx-auto mb-8">
              At Vardini Farms, our desi cows are not just animals – they're family. Discover the stories of these 
              majestic creatures, their rescue journeys, and how they've found a forever home with us.
            </p>
          </div>
        </div>
      </section>

      {/* Rescue Mission Section */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-800 text-sm font-medium rounded-full mb-4">
                Our Rescue Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
                Saving Lives, One Cow at a Time
              </h2>

              <div className="prose prose-earth max-w-none">
                <p className="text-lg text-earth-700 mb-6">
                  Vardini Farms began as a sanctuary for abused and abandoned cows destined for slaughter. Our journey started in 2010 when we rescued our first cow, Lakshmi, from a truck headed to an illegal slaughterhouse.
                </p>

                <p className="text-lg text-earth-700 mb-6">
                  Today, we've rescued over 87 cows from various situations of neglect, abuse, and imminent slaughter. Each rescue operation involves careful planning, veterinary support, and the creation of a safe space for these gentle beings to heal.
                </p>

                <h3 className="text-xl font-playfair font-bold text-earth-800 mt-8 mb-4">Our Rescue Process</h3>

                <ol className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="bg-terracotta-100 text-terracotta-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                    <div>
                      <strong className="font-medium">Identification & Assessment</strong>
                      <p className="text-earth-700">We receive alerts about cows in distress through our network, assess their condition, and determine rescue feasibility.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-terracotta-100 text-terracotta-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                    <div>
                      <strong className="font-medium">Rescue Operation</strong>
                      <p className="text-earth-700">Our trained team safely transports the cows to our sanctuary, often working with local authorities to handle legal obstacles.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-terracotta-100 text-terracotta-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                    <div>
                      <strong className="font-medium">Rehabilitation</strong>
                      <p className="text-earth-700">Veterinary care, proper nutrition, and emotional healing help traumatized cows recover their health and trust.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-terracotta-100 text-terracotta-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                    <div>
                      <strong className="font-medium">Forever Home</strong>
                      <p className="text-earth-700">Each cow becomes part of our family, living out its natural life in dignity, receiving love and care.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <button className="btn-accent inline-flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  <span>Support Our Rescue Mission</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-cream-50 rounded-2xl overflow-hidden shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                  alt="Rescued cow at Vardini Farms" 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-earth-800 mb-2">Rescue Stories</h3>
                  <p className="text-earth-700 mb-4">
                    Each of our cows has a unique story of resilience and survival. From Lakshmi, who was rescued hours before slaughter, to Gauri, who was abandoned due to a leg injury.
                  </p>
                  <div className="flex items-center text-terracotta-600">
                    <Heart className="h-5 w-5 mr-2 fill-terracotta-500" /> 
                    <span>87+ successful rescues and counting</span>
                  </div>
                </div>
              </div>

              <div className="bg-leaf-50 rounded-2xl overflow-hidden shadow-glass">
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-earth-800 mb-2">Life at the Sanctuary</h3>
                  <p className="text-earth-700 mb-4">
                    Our cows enjoy sprawling pastures, nutritious feed, regular health check-ups, and plenty of love and attention from our dedicated caretakers.
                  </p>
                  <div className="flex items-center text-leaf-600">
                    <TreeDeciduous className="h-5 w-5 mr-2" /> 
                    <span>20+ acres of natural grazing space</span>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Happy cows grazing at Vardini Farms" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desi Cow Breeds Section */}
      <section className="py-20 bg-earth-50 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-earth-100 text-earth-800 text-sm font-medium rounded-full mb-4">
              Indigenous Treasures
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
              Our Sacred Desi Cow Breeds
            </h2>
            <p className="text-lg text-earth-700 max-w-3xl mx-auto">
              India is home to over 40 indigenous cattle breeds, each with unique characteristics and qualities. 
              At Vardini Farms, we're dedicated to preserving these native breeds and their genetic heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DesiCowCard 
              name="Gir"
              region="Gujarat & Rajasthan"
              description="Recognizable by their distinctive domed forehead and long, pendulous ears. Gir cows are known for their high-quality A2 milk with rich fat content."
              imageSrc="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
              color="terracotta"
            />
            
            <DesiCowCard 
              name="Sahiwal"
              region="Punjab & Haryana"
              description="A dual-purpose breed known for its milk production and heat tolerance. Sahiwal cattle have a distinctive red color and are among the best dairy breeds in India."
              imageSrc="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
              color="leaf"
            />
            
            <DesiCowCard 
              name="Tharparkar"
              region="Rajasthan"
              description="White or light gray in color, these hardy cows thrive in arid conditions. They're known for regularly calving even during drought conditions."
              imageSrc="https://images.unsplash.com/photo-1572357280636-d8f708473654"
              color="earth"
            />
            
            <DesiCowCard 
              name="Kankrej"
              region="Gujarat & Rajasthan"
              description="Majestic, large-bodied cattle with distinctive upward-curving horns. They're excellent drought-resistant and produce quality A2 milk."
              imageSrc="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              color="cream"
            />
            
            <DesiCowCard 
              name="Rathi"
              region="Rajasthan"
              description="Medium-sized with a reddish-brown coat, Rathi cows are known for adapting to harsh climates and producing nutritious milk even in scarce feed conditions."
              imageSrc="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
              color="terracotta"
            />
            
            <DesiCowCard 
              name="Hallikar"
              region="Karnataka"
              description="Known for their long, elegant horns and powerful build. Historically used for draft purposes, these graceful cows also produce highly nutritious milk."
              imageSrc="https://images.unsplash.com/photo-1472396961693-142e6e269027"
              color="leaf"
            />
          </div>
        </div>
      </section>

      {/* Care Practices Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                alt="Cow care at Vardini Farms" 
                className="rounded-2xl shadow-glass-lg w-full h-auto"
              />
            </div>
            
            <div>
              <span className="inline-block px-4 py-1.5 bg-leaf-100 text-leaf-800 text-sm font-medium rounded-full mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
                How We Care for Our Cows
              </h2>
              
              <div className="prose prose-earth max-w-none">
                <p className="text-lg text-earth-700 mb-6">
                  At Vardini Farms, we believe in traditional, holistic cow care that honors these sacred animals while ensuring their wellbeing. Our practices combine ancient wisdom with modern veterinary knowledge.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-cream-50 p-6 rounded-xl border border-cream-100">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Natural Diet & Grazing</h3>
                    <p className="text-earth-700">
                      Our cows graze freely on organic pastures, supplemented with nutritious feed including organic grasses, jaggery, and seasonal fruits. We never use artificial hormones or antibiotics.
                    </p>
                  </div>
                  
                  <div className="bg-cream-50 p-6 rounded-xl border border-cream-100">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Traditional Healing Practices</h3>
                    <p className="text-earth-700">
                      We incorporate Ayurvedic treatments for our cows, using turmeric, neem, and other natural remedies for prevention and healing. These are complemented by regular veterinary check-ups.
                    </p>
                  </div>
                  
                  <div className="bg-cream-50 p-6 rounded-xl border border-cream-100">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Ethical Milk Collection</h3>
                    <p className="text-earth-700">
                      We milk our cows manually, after their calves have fed. This ensures the calves receive adequate nutrition and maintains the mother-calf bond that is essential for their emotional wellbeing.
                    </p>
                  </div>
                  
                  <div className="bg-cream-50 p-6 rounded-xl border border-cream-100">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Love & Respect</h3>
                    <p className="text-earth-700">
                      Every cow at Vardini has a name and receives individual attention. We celebrate their birthdays, play music for them, and ensure they receive affection daily, acknowledging their sentience and emotional needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Program */}
      <section className="py-20 bg-earth-800 text-white relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 to-earth-800/90 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full mb-4">
              Join Our Family
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
              Adopt a Cow Program
            </h2>
            <p className="text-lg text-cream-100 max-w-3xl mx-auto">
              Through our Adopt-a-Cow program, you can support the lifelong care of a specific cow at our sanctuary. 
              Your monthly contribution helps provide food, shelter, and medical care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col h-full">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Basic Adoption</h3>
              <div className="text-3xl font-playfair font-bold text-terracotta-400 mb-4">₹2,100<span className="text-lg text-cream-200">/month</span></div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Feed and basic care for one cow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Quarterly updates with photos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Certificate of adoption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Name recognition on our website</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Adopt Now</button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col h-full">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Premium Adoption</h3>
              <div className="text-3xl font-playfair font-bold text-terracotta-400 mb-4">₹5,100<span className="text-lg text-cream-200">/month</span></div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">All Basic benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Monthly video updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Quarterly farm visit (for local adopters)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Monthly delivery of cow products</span>
                </li>
              </ul>
              <button className="btn-accent w-full">Adopt Now</button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex flex-col h-full">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Lifetime Adoption</h3>
              <div className="text-3xl font-playfair font-bold text-terracotta-400 mb-4">₹1,51,000<span className="text-lg text-cream-200">/one-time</span></div>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">All Premium benefits for life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Special plaque with your name at the farm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">Name a rescued calf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta-400 mr-2">•</span>
                  <span className="text-cream-100">VIP access to all farm events</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Adopt Forever</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const DesiCowCard = ({ 
  name, 
  region, 
  description, 
  imageSrc, 
  color 
}: { 
  name: string; 
  region: string; 
  description: string; 
  imageSrc: string; 
  color: "earth" | "terracotta" | "leaf" | "cream" 
}) => {
  const getBgColor = () => {
    switch (color) {
      case "earth": return "bg-earth-50";
      case "terracotta": return "bg-terracotta-50";
      case "leaf": return "bg-leaf-50";
      case "cream": return "bg-cream-50";
      default: return "bg-cream-50";
    }
  };
  
  const getBorderColor = () => {
    switch (color) {
      case "earth": return "border-earth-100";
      case "terracotta": return "border-terracotta-100";
      case "leaf": return "border-leaf-100";
      case "cream": return "border-cream-100";
      default: return "border-cream-100";
    }
  };

  return (
    <div className={`rounded-xl overflow-hidden border ${getBorderColor()} ${getBgColor()} shadow-glass animate-fade-in`}>
      <div className="h-56 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${name} cow breed`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-playfair font-medium text-earth-800">{name}</h3>
          <span className="text-sm text-earth-600 bg-white/60 px-2 py-1 rounded-full">{region}</span>
        </div>
        <p className="text-earth-700 mb-4">{description}</p>
        <button className="btn-secondary w-full text-sm">Learn More</button>
      </div>
    </div>
  );
};

export default MeetOurCows;
