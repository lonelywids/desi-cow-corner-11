
import React from "react";
import { Button } from "@/components/ui/button";

const VolunteerCTA = () => {
  return (
    <section className="bg-terracotta-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Make a Difference?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join our community of passionate volunteers and help us in our mission to rescue, rehabilitate, and provide a loving home for indigenous cows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600">Apply Now</Button>
          <Button size="lg" variant="outline">Contact for More Information</Button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerCTA;
