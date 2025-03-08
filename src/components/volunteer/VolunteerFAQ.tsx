
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VolunteerFAQ = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Do I need prior experience with cows or farming?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No prior experience is required. We provide training for all volunteer activities. Your enthusiasm and willingness to learn are all you need to bring!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>What age groups can volunteer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We welcome volunteers of all ages. Those under 16 must be accompanied by an adult. We have appropriate activities for different age groups and abilities.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Is there a minimum time commitment?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>While we appreciate any time you can give, we recommend a minimum commitment of 4 hours per month to have a meaningful experience and build relationships with our cows.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Can I volunteer as part of a group or corporate team?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Absolutely! We offer special programs for corporate teams, schools, and community groups. These can be customized based on your group's interests and objectives.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Are meals provided for volunteers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>For full-day volunteers, we provide a complimentary traditional vegetarian lunch made with organic ingredients from our farm. For shorter sessions, we offer refreshments.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerFAQ;
