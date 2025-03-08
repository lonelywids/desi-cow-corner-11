
import React from "react";

const FaqSection = () => {
  return (
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
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
    <h3 className="text-xl font-medium text-earth-800 mb-3">{question}</h3>
    <p className="text-earth-600">{answer}</p>
  </div>
);

export default FaqSection;
