
import { Helmet } from "react-helmet";
import { Calendar, Award, BookOpen, GraduationCap, Users, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CowProfiles from "@/components/CowProfiles";

const AdoptACow = () => {
  return (
    <>
      <Helmet>
        <title>Adopt a Cow | Vardini Farms</title>
        <meta
          name="description"
          content="Start your own dairy business with Vardini Farms' Adopt a Cow program. We provide high-quality desi cows, comprehensive training, and ongoing support."
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-leaf-100 text-leaf-800 text-sm font-medium rounded-full mb-4">
              Build Your Dairy Dream
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-earth-800 mb-6">
              Adopt a Cow, Transform Your Life
            </h1>
            <p className="text-lg md:text-xl text-earth-700 mx-auto mb-8">
              Start your dairy journey with a Vardini Farms desi cow. We provide the cow, training, and ongoing support to help urban Indians reconnect with traditional farming and build sustainable livelihoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary inline-flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Book Consultation</span>
              </button>
              <button className="btn-secondary inline-flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cow Profiles Section */}
      <CowProfiles />

      {/* Why Adopt Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-800 text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
              Why Adopt a Desi Cow from Vardini?
            </h2>
            <p className="text-lg text-earth-700 max-w-3xl mx-auto">
              Our Adopt a Cow program is designed for urban Indians who dream of starting their own dairy enterprise 
              or simply want to reconnect with India's farming heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Pure Indigenous Breeds</h3>
              <p className="text-earth-700">
                All our cows are authentic indigenous breeds like Gir, Sahiwal, and Rathi, known for their adaptability to Indian climate and high-quality A2 milk production.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Comprehensive Training</h3>
              <p className="text-earth-700">
                We provide hands-on training in cow care, milking, organic feed preparation, disease prevention, and basic business management for dairy operations.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Ongoing Support</h3>
              <p className="text-earth-700">
                Our relationship continues after adoption with 24/7 veterinary support, regular check-ins, and consultation to ensure your dairy venture thrives.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Marketing Assistance</h3>
              <p className="text-earth-700">
                Learn to market pure desi milk products at premium prices. We help you connect with health-conscious urban customers who value authentic dairy products.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Community Network</h3>
              <p className="text-earth-700">
                Join our growing network of urban dairy entrepreneurs. Share experiences, solve challenges together, and grow your business with peer support.
              </p>
            </div>

            <div className="bg-cream-50 rounded-xl p-8 border border-cream-100 shadow-glass">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Cultural Reconnection</h3>
              <p className="text-earth-700">
                Reconnect with India's agricultural heritage while building a sustainable, ethical business that preserves indigenous cow breeds for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-earth-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-leaf-100 text-leaf-800 text-sm font-medium rounded-full mb-4">
                Learn from Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
                Comprehensive Training Programs
              </h2>
              
              <div className="prose prose-earth max-w-none">
                <p className="text-lg text-earth-700 mb-6">
                  We understand that many urban Indians are new to dairy farming. Our training programs are designed to equip you with all the skills needed to successfully care for your cows and run a profitable dairy business.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl border border-cream-100 shadow-sm">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Basic Cow Care (3 Days)</h3>
                    <p className="text-earth-700 mb-3">
                      Learn the fundamentals of desi cow care, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-earth-700">
                      <li>Daily feeding and nutrition requirements</li>
                      <li>Housing and space requirements</li>
                      <li>Basic health monitoring</li>
                      <li>Traditional grooming practices</li>
                    </ul>
                    <p className="text-earth-600 mt-4">
                      ₹5,000 per person | Free with cow adoption
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-cream-100 shadow-sm">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Advanced Dairy Management (5 Days)</h3>
                    <p className="text-earth-700 mb-3">
                      Comprehensive training for serious dairy entrepreneurs:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-earth-700">
                      <li>Ethical milking techniques and equipment</li>
                      <li>Milk processing and product creation</li>
                      <li>Quality control and testing</li>
                      <li>Breeding and calf management</li>
                      <li>Business planning and financial management</li>
                    </ul>
                    <p className="text-earth-600 mt-4">
                      ₹12,000 per person | 50% off with cow adoption
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-cream-100 shadow-sm">
                    <h3 className="text-xl font-playfair font-medium text-earth-800 mb-3">Ayurvedic Treatments (2 Days)</h3>
                    <p className="text-earth-700 mb-3">
                      Traditional methods to keep your cows healthy:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-earth-700">
                      <li>Herbal remedies for common ailments</li>
                      <li>Preventative health measures</li>
                      <li>Seasonal care considerations</li>
                      <li>Natural supplements and tonics</li>
                    </ul>
                    <p className="text-earth-600 mt-4">
                      ₹4,000 per person | 25% off with cow adoption
                    </p>
                  </div>
                </div>
                
                <button className="btn-accent inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book a Training Session</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                  alt="Training session at Vardini Farms" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-glass mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                  alt="Hands-on cow care training" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                  alt="Milking demonstration" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-glass mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" 
                  alt="Marketing class for dairy products" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Plans */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-800 text-sm font-medium rounded-full mb-4">
              Our Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
              Cow Adoption Plans
            </h2>
            <p className="text-lg text-earth-700 max-w-3xl mx-auto">
              Choose the plan that best fits your dairy ambitions. All plans include the cow, 
              initial training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream-50 rounded-xl overflow-hidden border border-cream-100 shadow-glass flex flex-col">
              <div className="bg-leaf-500 text-white p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold mb-1">Starter Package</h3>
                <p className="text-cream-50 text-sm">For beginners to dairy farming</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="text-center mb-6">
                  <div className="text-4xl font-playfair font-bold text-earth-800">₹65,000</div>
                  <p className="text-earth-600">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">One healthy Gir or Sahiwal cow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Basic 3-day training course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Starter feed supply (1 month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Phone support for 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Basic equipment kit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-leaf-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Initial farm setup guidance</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button className="btn-secondary w-full">Get Started</button>
              </div>
            </div>

            <div className="bg-cream-50 rounded-xl overflow-hidden border border-terracotta-200 shadow-glass-lg flex flex-col relative transform scale-105 md:-mt-4 md:-mb-4">
              <div className="absolute top-5 right-5 bg-terracotta-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="bg-terracotta-500 text-white p-8 text-center">
                <h3 className="text-2xl font-playfair font-bold mb-1">Premium Package</h3>
                <p className="text-cream-50 text-sm">For serious dairy entrepreneurs</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="text-center mb-6">
                  <div className="text-4xl font-playfair font-bold text-earth-800">₹1,20,000</div>
                  <p className="text-earth-600">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Two premium desi cows of your choice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Complete 5-day training course</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Premium feed supply (3 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">24/7 support for 1 year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Complete equipment setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Marketing assistance for 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta-500 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Monthly farm visits by our experts</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button className="btn-primary w-full">Choose Premium</button>
              </div>
            </div>

            <div className="bg-cream-50 rounded-xl overflow-hidden border border-cream-100 shadow-glass flex flex-col">
              <div className="bg-earth-700 text-white p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold mb-1">Business Package</h3>
                <p className="text-cream-50 text-sm">For commercial dairy operations</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="text-center mb-6">
                  <div className="text-4xl font-playfair font-bold text-earth-800">₹2,85,000</div>
                  <p className="text-earth-600">One-time payment</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Five premium desi cows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">All training courses included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Feed supply for 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Priority support for 2 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Complete farm setup consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Full business plan development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-700 font-bold mr-2">✓</span>
                    <span className="text-earth-700">Exclusive access to our buyer network</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button className="btn-secondary w-full">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-leaf-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-leaf-100 text-leaf-800 text-sm font-medium rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
              Urban Farmers Who Started With Us
            </h2>
            <p className="text-lg text-earth-700 max-w-3xl mx-auto">
              Meet some of our successful adopters who transformed their lives and built thriving dairy businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-glass">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-earth-100 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-earth-800">Rajesh Sharma</h3>
                    <p className="text-earth-600">IT Professional turned Dairy Farmer</p>
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "After 15 years in IT, I wanted to reconnect with my roots. I started with two Gir cows from Vardini, and now manage a thriving farm with 12 cows supplying A2 milk to over 100 families in Pune."
                </p>
                <div className="flex items-center text-earth-600 text-sm">
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs mr-2">Started: 2019</span>
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs">Monthly Revenue: ₹1.2 Lakhs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-glass">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-earth-100 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-earth-800">Meera & Suresh Patel</h3>
                    <p className="text-earth-600">Couple from Bangalore</p>
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "We started with the Premium Package in 2020. Today, our farm on the outskirts of Bangalore not only provides milk but also offers farm stays for urban families wanting to experience rural life."
                </p>
                <div className="flex items-center text-earth-600 text-sm">
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs mr-2">Started: 2020</span>
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs">Monthly Revenue: ₹2.5 Lakhs</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-glass">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-earth-100 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-earth-800">Priya Desai</h3>
                    <p className="text-earth-600">Former Bank Manager, Mumbai</p>
                  </div>
                </div>
                <p className="text-earth-700 mb-4">
                  "My specialty ghee business grew from a single cow adoption at Vardini. Their marketing training helped me create a premium brand that now supplies to organic stores across Maharashtra."
                </p>
                <div className="flex items-center text-earth-600 text-sm">
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs mr-2">Started: 2021</span>
                  <span className="bg-leaf-100 text-leaf-800 px-2 py-1 rounded text-xs">Monthly Revenue: ₹95,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-earth-100 text-earth-800 text-sm font-medium rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-earth-800 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">How much space do I need for a cow?</h3>
              <p className="text-earth-700">
                For a single cow, you'll need at least 600-800 sq. ft. of covered area and about 1,000 sq. ft. of open area. For urban settings, we recommend at least 1,500 sq. ft. total area for humane cow keeping. We can help assess your space during consultation.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">What permits do I need in urban/semi-urban areas?</h3>
              <p className="text-earth-700">
                Requirements vary by city and state. Generally, you'll need clearances from local municipal corporations and potentially pollution control boards. Our team assists with navigating the paperwork and compliance for your specific location.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">How much does it cost to maintain a cow monthly?</h3>
              <p className="text-earth-700">
                Monthly maintenance costs range from ₹5,000-8,000 per cow, including feed, healthcare, and basic supplies. A desi cow typically produces 8-12 liters of milk daily, which can generate ₹15,000-25,000 monthly at premium A2 milk prices.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">What if I have no experience with cows?</h3>
              <p className="text-earth-700">
                That's exactly why our program exists! Most of our adopters are first-time cow owners. Our comprehensive training starts from the basics and our support continues long after adoption. We've successfully trained doctors, IT professionals, and corporate executives.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">What if the cow gets sick?</h3>
              <p className="text-earth-700">
                All adoption packages include veterinary support. We have a network of experienced vets specializing in indigenous cattle across major cities. For emergency situations, we provide 24/7 phone consultation and can arrange for immediate veterinary visits.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-100">
              <h3 className="text-xl font-playfair font-medium text-earth-800 mb-2">Can I visit Vardini Farms before deciding?</h3>
              <p className="text-earth-700">
                Absolutely! We encourage prospective adopters to visit our farm, meet our cows, and speak with our team. We host farm tours every weekend. You can also speak with previous adopters to understand their experiences firsthand.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-earth-700 mb-6">
              Still have questions? Reach out to our adoption specialists.
            </p>
            <button className="btn-secondary inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdoptACow;
