
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import { HandHeart, Leaf, MapPin, HeartHandshake, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const RescueMission = () => {
  const handleDonateClick = () => {
    toast({
      title: "Thank you for your interest in donating!",
      description: "Our team will reach out to you shortly with donation options.",
      duration: 5000,
    });
  };
  
  return (
    <>
      <Helmet>
        <title>Rescue Mission | Vardini Farms</title>
        <meta 
          name="description" 
          content="Learn about our mission to rescue cows from slaughter and provide them a safe, loving home regardless of milk production." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-earth-800 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1546445317-29f4545e9d53"
              alt="Rescued cows at Vardini Farms" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-earth-900/70"></div>
          </div>
          
          <div className="container-custom relative z-10 py-20 md:py-32">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full mb-4">
                Our Sacred Mission
              </span>
              <h1 className="heading-xl text-white mb-6">Saving Lives, One Cow at a Time</h1>
              <p className="text-lg md:text-xl text-cream-100 mb-8">
                At Vardini Farms, we've dedicated our lives to rescuing cows from slaughter and abuse, 
                providing them a forever home with care, dignity, and love – regardless of their ability to produce milk.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600" onClick={handleDonateClick}>
                  Donate Now <HandHeart className="ml-2 h-5 w-5" />
                </Button>
                <Link to="#visit-section">
                  <Button variant="outline" size="lg" className="border-cream-200 text-cream-100 hover:bg-white/10">
                    Visit Our Farm <MapPin className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-cream-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-earth-200 text-earth-800 text-sm font-medium rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="heading-lg mb-6">From Slaughterhouse to Sanctuary</h2>
                <p className="text-earth-800 text-lg mb-6">
                  Our journey began in 2010 when we witnessed the cruel reality faced by cows 
                  who could no longer produce milk. That day, we made a vow to create a safe haven 
                  for these gentle beings who have given so much to humanity.
                </p>
                <p className="text-earth-800 text-lg mb-8">
                  Over the years, we've rescued over 87 cows from butchers and neglectful conditions, 
                  many arriving traumatized, malnourished, and in desperate need of medical attention. 
                  Through patience and dedicated care, we've given them a second chance at life.
                </p>
                
                <div className="border-l-4 border-terracotta-500 pl-6 italic text-earth-700 mb-8">
                  "These cows are not commodities; they are sentient beings deserving dignity and respect. 
                  Each one has a name, a personality, and a forever home with us."
                  <div className="mt-2 font-medium not-italic">— Vardini Farms Founder</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
                    alt="Rescued cow being fed" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1545468259-3477d5287d2d"
                    alt="Healthy rescued cows grazing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80 col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
                    alt="Cow sanctuary at Vardini Farms" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Desi Cow Protection */}
        <section className="py-20 bg-earth-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-earth-200 text-earth-800 text-sm font-medium rounded-full mb-4">
                Desi Cow Protection
              </span>
              <h2 className="heading-lg mb-6">Preserving India's Sacred Heritage</h2>
              <p className="text-earth-800 text-lg">
                Our sanctuary is home to various indigenous (desi) cow breeds, including Gir, Sahiwal, 
                Tharparkar, and Rathi. These native breeds are not only perfectly adapted to India's climate 
                but are also culturally and ecologically significant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1570968915860-54d5c301fa9f" 
                    alt="Desi cow with traditional markings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-earth-800 mb-3">Sacred Heritage</h3>
                  <p className="text-earth-700">
                    Desi cows hold a sacred place in Indian culture and tradition. We work to preserve 
                    these indigenous breeds that are increasingly at risk of disappearing due to industrial farming.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1537616954116-9a18c04fd1c0" 
                    alt="A2 milk from desi cows" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-earth-800 mb-3">A2 Milk Benefits</h3>
                  <p className="text-earth-700">
                    Our desi cows naturally produce A2 milk, which contains A2 beta-casein protein that's more easily 
                    digestible and has numerous health benefits compared to A1 milk from foreign breeds.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1516467716199-0ba54e73a163" 
                    alt="Traditional cow care practices" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-earth-800 mb-3">Traditional Care</h3>
                  <p className="text-earth-700">
                    We follow traditional cow care practices (Gau Seva) that have been perfected over 
                    thousands of years, combining ancient wisdom with modern veterinary science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section (reusing the existing component) */}
        <MissionSection />
        
        {/* Donation Section */}
        <section className="py-20 bg-cream-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full mb-4">
                  Support Our Mission
                </span>
                <h2 className="heading-lg mb-6">Help Us Give Them a Better Life</h2>
                <p className="text-earth-800 text-lg mb-6">
                  Caring for our rescued cows requires significant resources. Each cow needs 
                  food, shelter, medical care, and a dedicated caretaker. Your donation helps us 
                  continue our mission of rescuing and caring for these gentle beings.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-terracotta-100 rounded-full mr-4">
                      <Leaf className="h-5 w-5 text-terracotta-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-earth-800">₹2,500 monthly</h3>
                      <p className="text-earth-700">Provides food and basic care for one cow</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-terracotta-100 rounded-full mr-4">
                      <HeartHandshake className="h-5 w-5 text-terracotta-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-earth-800">₹7,500 monthly</h3>
                      <p className="text-earth-700">Sponsors full care including medical needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-terracotta-100 rounded-full mr-4">
                      <Calendar className="h-5 w-5 text-terracotta-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-earth-800">₹30,000 one-time</h3>
                      <p className="text-earth-700">Helps rescue a cow and provide initial care</p>
                    </div>
                  </div>
                </div>
                
                <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600" onClick={handleDonateClick}>
                  Donate Now
                </Button>
              </div>
              
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-8 border border-earth-200">
                  <h3 className="text-2xl font-playfair font-semibold text-earth-800 mb-6">Adopt a Cow Program</h3>
                  <p className="text-earth-700 mb-6">
                    Through our Adopt a Cow program, you can develop a personal connection with 
                    one of our rescued cows while supporting their care. As an adopter, you'll receive:
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 p-1 bg-terracotta-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-terracotta-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">A personalized adoption certificate with your cow's photo and story</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 p-1 bg-terracotta-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-terracotta-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">Quarterly updates with photos and news about your adopted cow</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 p-1 bg-terracotta-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-terracotta-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">VIP access during farm visits to spend time with your cow</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 p-1 bg-terracotta-100 rounded-full mr-3 mt-1">
                        <div className="h-2 w-2 bg-terracotta-500 rounded-full"></div>
                      </div>
                      <p className="text-earth-700">Recognition on our Cow Adopters Wall at the farm</p>
                    </li>
                  </ul>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-cream-50 rounded-xl p-6 border border-earth-100">
                      <h4 className="text-xl font-medium text-earth-800 mb-2">Monthly Adoption</h4>
                      <p className="text-2xl font-bold text-terracotta-500 mb-2">₹5,000<span className="text-sm text-earth-600 font-normal">/month</span></p>
                      <p className="text-earth-700 text-sm">Flexible commitment, cancel anytime</p>
                    </div>
                    
                    <div className="bg-cream-50 rounded-xl p-6 border border-earth-100">
                      <h4 className="text-xl font-medium text-earth-800 mb-2">Annual Adoption</h4>
                      <p className="text-2xl font-bold text-terracotta-500 mb-2">₹50,000<span className="text-sm text-earth-600 font-normal">/year</span></p>
                      <p className="text-earth-700 text-sm">Save ₹10,000 with annual commitment</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-earth-800 hover:bg-earth-700" size="lg" onClick={handleDonateClick}>
                    Adopt a Cow Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visit Our Farm Section */}
        <section id="visit-section" className="py-20 bg-earth-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-terracotta-500 text-white text-sm font-medium rounded-full mb-4">
                  Farm Visits
                </span>
                <h2 className="heading-lg text-white mb-6">Experience Desi Cow Culture</h2>
                <p className="text-cream-100 text-lg mb-6">
                  We invite you to visit our farm and witness firsthand the beauty and serenity of our cow sanctuary. 
                  Spend time with our rescued cows, learn about traditional cow care practices, and experience the 
                  profound connection between humans and these sacred animals.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-medium text-white mb-3">What to Expect</h3>
                    <ul className="space-y-2 text-cream-200">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-terracotta-500/20 rounded-full mr-3 mt-1">
                          <div className="h-2 w-2 bg-terracotta-400 rounded-full"></div>
                        </div>
                        <p>Guided tour of our sanctuary and introduction to our rescued cows</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-terracotta-500/20 rounded-full mr-3 mt-1">
                          <div className="h-2 w-2 bg-terracotta-400 rounded-full"></div>
                        </div>
                        <p>Hands-on experience feeding and grooming the cows</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-terracotta-500/20 rounded-full mr-3 mt-1">
                          <div className="h-2 w-2 bg-terracotta-400 rounded-full"></div>
                        </div>
                        <p>Demonstration of traditional milking techniques (for milk-producing cows)</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-terracotta-500/20 rounded-full mr-3 mt-1">
                          <div className="h-2 w-2 bg-terracotta-400 rounded-full"></div>
                        </div>
                        <p>Information about our rescue efforts and sustainable farming practices</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-1 bg-terracotta-500/20 rounded-full mr-3 mt-1">
                          <div className="h-2 w-2 bg-terracotta-400 rounded-full"></div>
                        </div>
                        <p>Sampling of our organic dairy products made with love and respect</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-medium text-white mb-3">Visit Details</h3>
                    <ul className="space-y-4 text-cream-100">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-2 bg-terracotta-500/20 rounded-full mr-4">
                          <Calendar className="h-5 w-5 text-terracotta-400" />
                        </div>
                        <div>
                          <p className="font-medium">Open Days</p>
                          <p className="text-cream-200">Thursday through Sunday, 9:00 AM to 4:00 PM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 p-2 bg-terracotta-500/20 rounded-full mr-4">
                          <MapPin className="h-5 w-5 text-terracotta-400" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-cream-200">Vardini Farms, Village Bhondsi, Gurugram, Haryana</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link to="/shop">
                  <Button variant="outline" size="lg" className="border-cream-100 text-cream-100 hover:bg-white/10">
                    Book Your Visit
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden h-48 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a" 
                    alt="Visitors interacting with cows" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 md:h-80 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1564085352725-08da0272627d" 
                    alt="Farm experience with family" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 md:h-80 col-span-2">
                  <img 
                    src="https://images.unsplash.com/photo-1605195340000-089df9b53d90" 
                    alt="Peaceful cow sanctuary" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RescueMission;
