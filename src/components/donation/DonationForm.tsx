
import React, { useState, useEffect } from "react";
import { 
  Heart, AlertCircle, ShieldCheck, CreditCard, 
  Calendar, RefreshCcw, DollarSign, Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const DonationForm = () => {
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
              
              {/* Impact calculator */}
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
                
                {/* Recurring donation option */}
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
  );
};

export default DonationForm;
