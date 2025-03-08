
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnershipOverview = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Why Partner With Us?</h2>
        <p className="text-lg mb-6">
          At Vardini Farms, we believe in the power of collaboration to create meaningful change. Our corporate partnership program offers businesses the opportunity to align with our mission of preserving indigenous cow breeds, promoting sustainable agriculture, and educating the community about our rich cultural heritage.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Corporate Social Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Demonstrate your commitment to environmental sustainability, animal welfare, and cultural preservation by supporting our initiatives.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Brand Association</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Associate your brand with ethical practices, sustainability, and wellness through co-branded campaigns and events.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Employee Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Offer your employees meaningful volunteer opportunities and team-building experiences at our farm.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Authentic Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Create authentic content around sustainable agriculture, indigenous breeds, and traditional farming techniques.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnershipOverview;
