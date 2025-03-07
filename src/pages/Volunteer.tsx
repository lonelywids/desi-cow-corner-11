
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Calendar, MapPin, Clock, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Volunteer = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer With Us | Vardini Farms</title>
        <meta name="description" content="Join our volunteer program and be a part of our mission to protect desi cows and preserve Indian cultural heritage." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-earth-50 py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-6">
                  Join Our Volunteer Family
                </h1>
                <p className="text-lg text-earth-700 mb-8">
                  Become a part of our mission to protect desi cows, preserve Indian cultural heritage, and educate communities about sustainable living.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Apply to Volunteer
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Volunteer Roles
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569937756447-1d44f657dc69"
                  alt="Volunteers at Vardini Farms" 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Why Volunteer With Us?
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                When you volunteer with Vardini Farms, you're not just giving your time – you're making a meaningful impact on our mission to protect desi cows and preserve our cultural heritage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard 
                icon={<Heart className="h-10 w-10 text-terracotta-500" />}
                title="Make a Real Difference"
                description="Your time and efforts directly contribute to the wellbeing of our rescued cows and the success of our educational initiatives."
              />
              
              <BenefitCard 
                icon={<CheckCircle className="h-10 w-10 text-terracotta-500" />}
                title="Learn Valuable Skills"
                description="Gain hands-on experience in sustainable farming, animal care, event management, education, and more."
              />
              
              <BenefitCard 
                icon={<Users className="h-10 w-10 text-terracotta-500" />}
                title="Join a Community"
                description="Become part of a passionate community of like-minded individuals dedicated to making a positive impact."
              />
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
        <section id="opportunities" className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Volunteer Opportunities
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                We offer a variety of volunteer roles to match your interests, skills, and availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <OpportunityCard 
                title="Cow Care Assistant"
                description="Help with daily care of our rescued cows, including feeding, grooming, and assisting with health check-ups."
                commitment="4-6 hours per week"
                location="On-site at Vardini Farms"
              />
              
              <OpportunityCard 
                title="Educational Program Volunteer"
                description="Assist with our educational programs in schools, colleges, and corporate settings about cow protection and cultural heritage."
                commitment="4-8 hours per week"
                location="Various locations in and around the city"
              />
              
              <OpportunityCard 
                title="Event Coordinator"
                description="Help plan and execute farm visits, workshops, and cultural events to raise awareness about our mission."
                commitment="6-10 hours per week"
                location="Hybrid (on-site and remote)"
              />
              
              <OpportunityCard 
                title="Social Media Volunteer"
                description="Create content, manage our social media presence, and help spread awareness about our mission online."
                commitment="3-5 hours per week"
                location="Remote"
              />
              
              <OpportunityCard 
                title="Farm Maintenance Helper"
                description="Assist with maintaining our farm facilities, gardens, and infrastructure to ensure a safe and pleasant environment."
                commitment="4-8 hours per week"
                location="On-site at Vardini Farms"
              />
              
              <OpportunityCard 
                title="Administrative Support"
                description="Help with administrative tasks such as data entry, correspondence, donor management, and record keeping."
                commitment="3-6 hours per week"
                location="Hybrid (on-site and remote)"
              />
            </div>
          </div>
        </section>

        {/* Volunteer Process Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Volunteer Process
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Joining our volunteer team is simple. Here's how to get started:
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <ProcessStep 
                number="1"
                title="Apply Online"
                description="Fill out our volunteer application form with your information, interests, and availability."
              />
              
              <ProcessStep 
                number="2"
                title="Orientation"
                description="Attend a volunteer orientation session to learn about our mission, values, and guidelines."
              />
              
              <ProcessStep 
                number="3"
                title="Training"
                description="Receive role-specific training to ensure you have the knowledge and skills needed for your volunteer role."
              />
              
              <ProcessStep 
                number="4"
                title="Start Volunteering"
                description="Begin your volunteer journey and make a meaningful impact on our mission."
              />
            </div>
          </div>
        </section>

        {/* Volunteer Stories Section */}
        <section className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Volunteer Stories
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Hear from some of our dedicated volunteers about their experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <StoryCard 
                quote="Volunteering at Vardini Farms has been a life-changing experience. The connection I've developed with the cows and the team has enriched my life in ways I never expected."
                name="Ananya Singh"
                role="Cow Care Volunteer"
                duration="1.5 years"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              />
              
              <StoryCard 
                quote="Being part of the educational program has allowed me to share my passion for our cultural heritage with students across the city. Their enthusiasm and curiosity gives me hope for the future."
                name="Vikram Malhotra"
                role="Educational Program Volunteer"
                duration="2 years"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              />
              
              <StoryCard 
                quote="As a remote volunteer managing social media, I've been able to contribute to this amazing cause even with my busy schedule. The impact we're making together is truly inspiring."
                name="Meera Joshi"
                role="Social Media Volunteer"
                duration="8 months"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              />
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section id="volunteer-form" className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-earth-800 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Join Us?</h3>
                  <p className="mb-6">
                    Fill out our volunteer application form, and we'll contact you about the next steps in your volunteer journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Flexible scheduling to accommodate your availability.</p>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Minimum commitment of 3 months preferred for most roles.</p>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Both on-site and remote opportunities available.</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6">Volunteer Application</h3>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first-name" className="block text-earth-700 mb-2 font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="last-name" className="block text-earth-700 mb-2 font-medium">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                        />
                      </div>
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
                    
                    <div>
                      <label htmlFor="interests" className="block text-earth-700 mb-2 font-medium">
                        Areas of Interest
                      </label>
                      <select
                        id="interests"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      >
                        <option value="">Select your area of interest</option>
                        <option value="cow-care">Cow Care</option>
                        <option value="education">Educational Programs</option>
                        <option value="events">Event Coordination</option>
                        <option value="social-media">Social Media</option>
                        <option value="maintenance">Farm Maintenance</option>
                        <option value="admin">Administrative Support</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="availability" className="block text-earth-700 mb-2 font-medium">
                        Availability
                      </label>
                      <select
                        id="availability"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      >
                        <option value="">Select your availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="both">Both Weekdays and Weekends</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="why-volunteer" className="block text-earth-700 mb-2 font-medium">
                        Why do you want to volunteer with us?
                      </label>
                      <textarea
                        id="why-volunteer"
                        rows={4}
                        placeholder="Tell us why you're interested in volunteering with Vardini Farms"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <Button 
                      className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 text-lg"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Submit Application
                    </Button>
                  </div>
                </div>
              </div>
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
                Find answers to common questions about volunteering with Vardini Farms.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-6">
              <FaqItem
                question="Do I need prior experience to volunteer?"
                answer="No prior experience is required for most volunteer positions. We provide comprehensive training for all our volunteers. What's most important is your passion for our cause and willingness to learn."
              />
              
              <FaqItem
                question="How much time do I need to commit?"
                answer="Our volunteer opportunities vary in time commitment. Many roles require 4-8 hours per week, but we have flexible options to accommodate different schedules. We generally prefer a minimum commitment of 3 months."
              />
              
              <FaqItem
                question="Can I volunteer remotely?"
                answer="Yes, we offer several remote volunteer opportunities, including social media management, content creation, and administrative support."
              />
              
              <FaqItem
                question="Is there an age requirement for volunteering?"
                answer="Volunteers must be at least 18 years old for most positions. However, we do have family volunteer days and special youth programs for younger supporters."
              />
              
              <FaqItem
                question="Will I receive a certificate for my volunteer work?"
                answer="Yes, we provide certificates of recognition for our volunteers, which can be valuable for your resume or academic requirements."
              />
              
              <FaqItem
                question="Can I volunteer as part of a group or corporate team?"
                answer="Absolutely! We welcome group and corporate volunteer opportunities. Please contact us directly to discuss group volunteering arrangements."
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
                  Ready to Make a Difference?
                </h2>
                <p className="text-lg text-cream-100 mb-8">
                  Join our community of passionate volunteers and help us protect desi cows, preserve our cultural heritage, and educate communities for a sustainable future.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Apply to Volunteer
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = "/donation"}
                  >
                    Support Our Mission
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

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-100 text-center hover:shadow-md transition-shadow h-full">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const OpportunityCard = ({ title, description, commitment, location }: { title: string; description: string; commitment: string; location: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow h-full">
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600 mb-4">{description}</p>
    <div className="mt-auto">
      <div className="flex items-center text-earth-500 mb-2">
        <Clock className="h-4 w-4 mr-2" />
        <span>{commitment}</span>
      </div>
      <div className="flex items-center text-earth-500">
        <MapPin className="h-4 w-4 mr-2" />
        <span>{location}</span>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 rounded-full bg-terracotta-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const StoryCard = ({ quote, name, role, duration, image }: { quote: string; name: string; role: string; duration: string; image: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow h-full">
    <p className="text-earth-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-earth-800">{name}</h4>
        <p className="text-earth-500">{role} • {duration}</p>
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

export default Volunteer;
