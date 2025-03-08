
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Make an Impact?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Let's discuss how your organization can partner with Vardini Farms to create meaningful change while achieving your corporate social responsibility goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Contact Us</Button>
          <Button size="lg" variant="outline">Download Partnership Brochure</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
