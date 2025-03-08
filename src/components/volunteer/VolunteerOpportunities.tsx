
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VolunteerOpportunitiesSection = () => {
  return (
    <section className="py-16 bg-earth-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Opportunities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Daily Cow Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Help with feeding, grooming, and caring for our rescued cows. Learn about their dietary needs and healthcare.</p>
              <p><strong>Time Commitment:</strong> Flexible, 3-4 hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Farm Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Assist with maintaining cow shelters, fencing, gardening, and general upkeep of the farm facilities.</p>
              <p><strong>Time Commitment:</strong> Weekly, 4-5 hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Educational Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Help conduct tours for visitors, explain our mission, and teach about indigenous cow breeds and their importance.</p>
              <p><strong>Time Commitment:</strong> Weekends, 5-6 hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Organic Farming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn and assist with our organic farming operations, from planting to harvesting using traditional methods.</p>
              <p><strong>Time Commitment:</strong> Seasonal, 4-6 hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cow Products Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Learn to make products from cow milk, dung, and urine following traditional techniques with modern standards.</p>
              <p><strong>Time Commitment:</strong> Monthly, full day workshop</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Special Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Help organize and conduct special events, festivals, and awareness programs at the farm or in nearby communities.</p>
              <p><strong>Time Commitment:</strong> As needed, varies</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesSection;
