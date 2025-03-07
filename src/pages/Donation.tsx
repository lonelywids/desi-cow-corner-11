
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShieldCheck, BarChart3, DollarSign, Award, Check, AlertCircle, Calendar, CreditCard, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [donorPhone, setDonorPhone] = useState<string>("");
  const [isRecurring, setIsRecurring] = useState<boolean>(false);
  const [recurringPeriod, setRecurringPeriod] = useState<string>("monthly");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [impactMetric, setImpactMetric] = useState<string>("food");

  // Calculate impact based on donation amount
  const calculateImpact = (amount: number | null) => {
    if (!amount) return { food: 0, medical: 0, rescue: 0 };
    
    return {
      food: Math.floor(amount / 500), // Days of food per cow
      medical: Math.floor(amount / 1500), // Medical treatments
      rescue: Math.floor(amount / 25000), // Number of potential rescues
    };
  };

  const impact = calculateImpact(selectedAmount);

  // Set predefined amount
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    const numericValue = parseFloat(value);
    setSelectedAmount(isNaN(numericValue) ? null : numericValue);
  };

  // Validate the form
  const validateForm = () => {
    const errors: {[key: string]: string} = {};

    if (!selectedAmount || selectedAmount < 100) {
      errors.amount = "Please select or enter a donation amount of at least ₹100";
    }

    if (!donorName.trim()) {
      errors.name = "Please enter your name";
    }

    if (!donorEmail.trim()) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(donorEmail)) {
      errors.email = "Please enter a valid email address";
    }

    if (!donorPhone.trim()) {
      errors.phone = "Please enter your phone number";
    } else if (!/^[0-9]{10}$/.test(donorPhone.replace(/\s/g, ''))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Donation Initiated",
        description: `Thank you for your ${isRecurring ? recurringPeriod : 'one-time'} donation of ₹${selectedAmount?.toLocaleString('en-IN')}. You will be redirected to the payment gateway.`,
        variant: "default",
      });
      
      // Here you would normally redirect to a payment gateway
      console.log("Donation form submitted", {
        amount: selectedAmount,
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        isRecurring,
        recurringPeriod
      });
    }
  };

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

            {/* New rescue story gallery */}
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
                <div className="md:col-span-2 bg-earth-800 text-white p-8 flex flex-col justify-between">
                  <div>
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
                  
                  {/* New impact calculator */}
                  {selectedAmount ? (
                    <div className="bg-white/10 rounded-xl p-4 mt-6">
                      <h4 className="text-lg font-medium mb-3">Your Donation Impact</h4>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Cow Food & Care</span>
                            <span>{impact.food} days</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-terracotta-500 h-2 rounded-full" style={{ width: `${Math.min(impact.food * 5, 100)}%` }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Medical Treatments</span>
                            <span>{impact.medical}</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-terracotta-500 h-2 rounded-full" style={{ width: `${Math.min(impact.medical * 10, 100)}%` }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Potential Rescues</span>
                            <span>{impact.rescue}</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-terracotta-500 h-2 rounded-full" style={{ width: `${Math.min(impact.rescue * 50, 100)}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6">Make a Donation</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-earth-700 mb-3 font-medium">Select Amount</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[500, 1000, 2500, 5000, 10000, 25000].map((amount) => (
                          <button
                            type="button"
                            key={amount}
                            onClick={() => handleAmountSelect(amount)}
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
                      <Input
                        type="number"
                        id="custom-amount"
                        min="100"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={formErrors.amount ? "border-red-500" : ""}
                      />
                      {formErrors.amount && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" /> {formErrors.amount}
                        </p>
                      )}
                    </div>
                    
                    {/* New recurring donation option */}
                    <div className="bg-cream-50 p-4 rounded-lg border border-cream-200">
                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="recurring-donation"
                          checked={isRecurring}
                          onChange={() => setIsRecurring(!isRecurring)}
                          className="h-4 w-4 text-terracotta-500 focus:ring-terracotta-500 border-earth-300 rounded"
                        />
                        <label htmlFor="recurring-donation" className="ml-2 block text-earth-700 font-medium">
                          Make this a recurring donation
                        </label>
                      </div>
                      
                      {isRecurring && (
                        <div className="flex space-x-3">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="monthly"
                              name="recurring-period"
                              value="monthly"
                              checked={recurringPeriod === "monthly"}
                              onChange={() => setRecurringPeriod("monthly")}
                              className="h-4 w-4 text-terracotta-500 focus:ring-terracotta-500 border-earth-300"
                            />
                            <label htmlFor="monthly" className="ml-2 block text-earth-700">
                              Monthly
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="quarterly"
                              name="recurring-period"
                              value="quarterly"
                              checked={recurringPeriod === "quarterly"}
                              onChange={() => setRecurringPeriod("quarterly")}
                              className="h-4 w-4 text-terracotta-500 focus:ring-terracotta-500 border-earth-300"
                            />
                            <label htmlFor="quarterly" className="ml-2 block text-earth-700">
                              Quarterly
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="yearly"
                              name="recurring-period"
                              value="yearly"
                              checked={recurringPeriod === "yearly"}
                              onChange={() => setRecurringPeriod("yearly")}
                              className="h-4 w-4 text-terracotta-500 focus:ring-terracotta-500 border-earth-300"
                            />
                            <label htmlFor="yearly" className="ml-2 block text-earth-700">
                              Yearly
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-earth-700 mb-2 font-medium">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className={formErrors.name ? "border-red-500" : ""}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" /> {formErrors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-earth-700 mb-2 font-medium">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-earth-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        className={formErrors.phone ? "border-red-500" : ""}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Button 
                        type="submit"
                        className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 text-lg"
                        disabled={!selectedAmount}
                      >
                        {isRecurring ? (
                          <>
                            <RefreshCcw className="w-5 h-5 mr-2" />
                            Donate ₹{selectedAmount?.toLocaleString('en-IN') || '0'} {recurringPeriod}
                          </>
                        ) : (
                          <>
                            <Heart className="w-5 h-5 mr-2" />
                            Donate ₹{selectedAmount?.toLocaleString('en-IN') || '0'}
                          </>
                        )}
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4 text-earth-500 text-sm">
                      <div className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-1" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-1" />
                        <span>Multiple Options</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Tax Benefits</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-earth-500 text-center">
                      By donating, you agree to our terms and privacy policy.
                      All donations are eligible for tax benefits under Section 80G.
                    </p>
                  </form>
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

// New component for rescue stories
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
