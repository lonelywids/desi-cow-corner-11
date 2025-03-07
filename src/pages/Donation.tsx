
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShieldCheck, BarChart3, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  
  return (
    <>
      <Helmet>
        <title>Make a Donation | Vardini Farms</title>
        <meta name="description" content="Support our mission to rescue and rehabilitate desi cows while preserving Indian cultural heritage." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-earth-50 py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-6">
                  Your Donation Makes a Difference
                </h1>
                <p className="text-lg text-earth-700 mb-8">
                  Every contribution helps us rescue more desi cows from slaughter, provide them a loving home, and preserve our rich cultural heritage for future generations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('our-impact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn About Our Impact
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
                  alt="Rescued cow at Vardini Farms" 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                  <p className="text-white text-lg font-medium">Lakshmi, rescued from a slaughterhouse in 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
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

        {/* Donation Form Section */}
        <section id="donation-form" className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-earth-800 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-playfair font-bold mb-4">Your Support Matters</h3>
                  <p className="mb-6">
                    Every donation, regardless of the amount, makes a significant impact in our mission to protect desi cows and preserve our cultural heritage.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>100% of your donation goes directly to our cause.</p>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>All donations are eligible for tax benefits under Section 80G.</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6">Make a Donation</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-earth-700 mb-3 font-medium">Select Amount</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[500, 1000, 2500, 5000, 10000, 25000].map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setSelectedAmount(amount)}
                            className={`py-3 px-4 rounded-lg border text-center transition-all ${
                              selectedAmount === amount
                                ? "border-terracotta-500 bg-terracotta-50 text-terracotta-600"
                                : "border-earth-200 hover:border-terracotta-300"
                            }`}
                          >
                            ₹{amount.toLocaleString('en-IN')}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="custom-amount" className="block text-earth-700 mb-2 font-medium">
                        Or Enter Custom Amount (₹)
                      </label>
                      <input
                        type="number"
                        id="custom-amount"
                        min="100"
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        onChange={(e) => setSelectedAmount(parseFloat(e.target.value) || null)}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-earth-700 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-earth-700 mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-earth-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 text-lg"
                      disabled={!selectedAmount}
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate ₹{selectedAmount?.toLocaleString('en-IN') || '0'}
                    </Button>
                    
                    <p className="text-sm text-earth-500 text-center">
                      By donating, you agree to our terms and privacy policy.
                      All donations are eligible for tax benefits under Section 80G.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Words from Our Supporters
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Hear from the individuals and families who have supported our mission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                quote="Contributing to Vardini Farms has been one of the most fulfilling decisions I've made. Knowing that I'm helping protect these beautiful desi cows and our cultural heritage brings me immense joy."
                name="Priya Sharma"
                title="Monthly Donor"
                image="https://images.unsplash.com/photo-1536321115970-5dfa13356211"
              />
              
              <Testimonial
                quote="After visiting Vardini Farms and seeing the incredible work they're doing, I knew I had to support their mission. The care and respect they show for these sacred animals is truly inspiring."
                name="Rajesh Patel"
                title="Corporate Donor"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              />
              
              <Testimonial
                quote="My family has been supporting Vardini Farms for three years now. We love receiving updates about the cows we've helped rescue and the educational programs our donations have funded."
                name="Anjali Verma"
                title="Family Donor"
                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Find answers to common questions about donating to Vardini Farms.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-6">
              <FaqItem
                question="Is my donation tax-deductible?"
                answer="Yes, all donations to Vardini Farms are eligible for tax benefits under Section 80G of the Income Tax Act."
              />
              
              <FaqItem
                question="How is my donation used?"
                answer="Your donation directly supports our cow rescue operations, daily care for rescued cows, educational programs, and cultural preservation initiatives."
              />
              
              <FaqItem
                question="Can I specify how I want my donation to be used?"
                answer="Yes, you can specify if you'd like your donation to go towards a specific area of our work, such as cow rescue, educational programs, or general operations."
              />
              
              <FaqItem
                question="Can I donate in memory or honor of someone?"
                answer="Absolutely. You can make a donation in memory or honor of a loved one, and we'll send an acknowledgment to the individual or family you specify."
              />
              
              <FaqItem
                question="Do you accept donations from outside India?"
                answer="Yes, we accept international donations. Please contact us directly for details on how to donate from outside India."
              />
              
              <FaqItem
                question="Can I set up a recurring donation?"
                answer="Yes, you can set up a monthly, quarterly, or annual recurring donation to provide ongoing support for our mission."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" 
                  alt="Desi cows at Vardini Farms" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Join Us in Protecting Our Heritage
                </h2>
                <p className="text-lg text-cream-100 mb-8">
                  Your donation today will help us rescue more desi cows, expand our educational programs, and preserve our rich cultural heritage for future generations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = "/volunteer"}
                  >
                    Volunteer With Us
                  </Button>
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

const Testimonial = ({ quote, name, title, image }: { quote: string; name: string; title: string; image: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow">
    <p className="text-earth-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-earth-800">{name}</h4>
        <p className="text-earth-500">{title}</p>
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
    <h3 className="text-xl font-medium text-earth-800 mb-3">{question}</h3>
    <p className="text-earth-600">{answer}</p>
  </div>
);

export default Donation;
