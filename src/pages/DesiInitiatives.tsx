
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Globe, BookOpen, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const DesiInitiatives = () => {
  return (
    <>
      <Helmet>
        <title>Feel Desi Initiatives | Vardini Farms</title>
        <meta name="description" content="Our educational initiatives to preserve and promote desi culture, traditions, and sustainable practices." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-earth-50 py-16 mb-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-6">
                Feel Desi Initiatives
              </h1>
              <p className="text-lg text-earth-700 mb-8">
                We're on a mission to educate and inspire communities about the importance of 
                preserving our cultural heritage, traditional practices, and sustainable living.
              </p>
              <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white">
                Join Our Next Event
              </Button>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section className="container-custom mb-20">
          <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-10 text-center">
            Our Educational Programs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard 
              icon={<GraduationCap />}
              title="School Outreach"
              description="We visit schools to teach children about sustainable agriculture, traditional farming practices, and the importance of desi cows in our ecosystem."
            />
            
            <ProgramCard 
              icon={<Building />}
              title="Corporate Workshops"
              description="Interactive sessions for companies on sustainable business practices, work-life balance, and reconnecting with cultural roots."
            />
            
            <ProgramCard 
              icon={<Globe />}
              title="Cultural Preservation"
              description="Workshops on traditional art forms, cooking methods, and agricultural practices that have sustained our communities for generations."
            />
            
            <ProgramCard 
              icon={<BookOpen />}
              title="Desi Knowledge Series"
              description="Educational seminars on Ayurveda, traditional farming techniques, and the numerous benefits of indigenous cow products."
            />
            
            <ProgramCard 
              icon={<Users />}
              title="Community Gatherings"
              description="Regular community events where people can learn, share knowledge, and experience the desi way of life first-hand."
            />
            
            <ProgramCard 
              icon={<Calendar />}
              title="Seasonal Celebrations"
              description="Events centered around traditional seasonal celebrations, harvests, and festivals that reconnect people with nature's cycles."
            />
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-earth-50 py-16 mb-20">
          <div className="container-custom">
            <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-10 text-center">
              Our Impact
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ImpactCard number="50+" text="Schools Visited" />
              <ImpactCard number="25+" text="Corporate Partnerships" />
              <ImpactCard number="10,000+" text="People Educated" />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-earth-800 mb-4">Testimonials</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Testimonial 
                  quote="The workshop at our school opened the children's eyes to our rich cultural heritage and sustainable practices. They now have a newfound respect for our traditions."
                  author="Principal, Delhi Public School"
                />
                <Testimonial 
                  quote="Our employees gained valuable insights about work-life balance and sustainable living. The desi cow products demonstration was especially enlightening."
                  author="HR Director, Tech Innovations Ltd."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="container-custom mb-20">
          <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg mb-8">
                Invite us to your school, college, or organization. Together, we can spread awareness about 
                the importance of preserving our cultural heritage and traditional practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white">
                  Request a Workshop
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="container-custom mb-20">
          <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-10 text-center">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              date="June 15, 2024"
              title="Desi Way of Life Workshop"
              location="St. Xavier's College, Mumbai"
              time="10:00 AM - 2:00 PM"
            />
            
            <EventCard 
              date="June 22, 2024"
              title="Traditional Cooking Demonstration"
              location="Cultural Center, Delhi"
              time="11:00 AM - 3:00 PM"
            />
            
            <EventCard 
              date="July 5, 2024"
              title="Corporate Wellness Program"
              location="Tech Park, Bangalore"
              time="9:00 AM - 5:00 PM"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

const ProgramCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow">
    <div className="text-terracotta-500 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const ImpactCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 text-center">
    <div className="text-4xl font-bold text-terracotta-500 mb-2">{number}</div>
    <div className="text-earth-700">{text}</div>
  </div>
);

const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="p-4 border-l-4 border-terracotta-500">
    <p className="italic text-earth-700 mb-2">"{quote}"</p>
    <p className="text-earth-600 font-medium">— {author}</p>
  </div>
);

const EventCard = ({ date, title, location, time }: { date: string; title: string; location: string; time: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow">
    <div className="text-terracotta-500 text-sm font-medium mb-2">{date}</div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600 mb-1">{location}</p>
    <p className="text-earth-500 text-sm">{time}</p>
    <Button variant="outline" className="mt-4 w-full">Register</Button>
  </div>
);

export default DesiInitiatives;
