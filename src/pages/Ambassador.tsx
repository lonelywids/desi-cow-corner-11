
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Share2, MessageSquare, Instagram, Facebook, Twitter, Megaphone, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ambassador = () => {
  return (
    <>
      <Helmet>
        <title>Become an Ambassador | Vardini Farms</title>
        <meta name="description" content="Become an ambassador for Vardini Farms and help spread our mission to protect desi cows and preserve Indian cultural heritage." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-earth-50 py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-6">
                  Become a Vardini Ambassador
                </h1>
                <p className="text-lg text-earth-700 mb-8">
                  Help amplify our mission to protect desi cows and preserve Indian cultural heritage by becoming a voice for our cause in your community and online.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => document.getElementById('ambassador-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Megaphone className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ambassador Benefits
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577532803433-76df3f62402c"
                  alt="An ambassador sharing Vardini's story" 
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is an Ambassador Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                What is a Vardini Ambassador?
              </h2>
              <p className="text-lg text-earth-600">
                Our ambassadors are passionate individuals who believe in our mission and help spread awareness about the importance of protecting desi cows and preserving our cultural heritage. Through social media, word of mouth, and community engagement, they amplify our message and inspire others to join our cause.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <RoleCard 
                icon={<Share2 className="h-10 w-10 text-terracotta-500" />}
                title="Social Media Advocate"
                description="Share our content, initiatives, and stories across your social networks to raise awareness about our mission."
              />
              
              <RoleCard 
                icon={<MessageSquare className="h-10 w-10 text-terracotta-500" />}
                title="Community Educator"
                description="Educate your community about the importance of desi cows and traditional practices through conversations and local events."
              />
              
              <RoleCard 
                icon={<Users className="h-10 w-10 text-terracotta-500" />}
                title="Connection Builder"
                description="Connect us with potential partners, donors, and volunteers who can support our mission and help us grow our impact."
              />
            </div>
          </div>
        </section>

        {/* Ambassador Benefits Section */}
        <section id="benefits" className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Ambassador Benefits
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                As a Vardini Ambassador, you'll receive exclusive benefits and resources to support your advocacy efforts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard 
                icon={<Award className="h-12 w-12 text-terracotta-500" />}
                title="Recognition"
                description="Receive official recognition as a Vardini Ambassador with a certificate and featured profile on our website."
              />
              
              <BenefitCard 
                icon={<Instagram className="h-12 w-12 text-terracotta-500" />}
                title="Content Kit"
                description="Access to exclusive content, photos, and messaging to share across your social media platforms."
              />
              
              <BenefitCard 
                icon={<Users className="h-12 w-12 text-terracotta-500" />}
                title="Ambassador Network"
                description="Join a community of like-minded advocates and participate in exclusive ambassador events."
              />
              
              <BenefitCard 
                icon={<Megaphone className="h-12 w-12 text-terracotta-500" />}
                title="Special Access"
                description="Get priority access to Vardini events, farm visits, and special behind-the-scenes experiences."
              />
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                How Our Ambassador Program Works
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Becoming a Vardini Ambassador is a simple process. Here's how to get started:
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <StepCard 
                number="1"
                title="Apply"
                description="Fill out our ambassador application form with your information and why you want to join."
              />
              
              <StepCard 
                number="2"
                title="Onboarding"
                description="Once approved, complete a brief onboarding session to learn about our mission and messaging."
              />
              
              <StepCard 
                number="3"
                title="Get Resources"
                description="Receive your ambassador kit with content, guidelines, and assets to share."
              />
              
              <StepCard 
                number="4"
                title="Start Sharing"
                description="Begin sharing our message with your networks and tracking your impact."
              />
            </div>

            <div className="bg-earth-800 text-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4">Ambassador Commitments</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Share at least 2 Vardini posts on your social media monthly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Participate in quarterly ambassador virtual meetings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Help spread awareness about our events and initiatives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Maintain a positive and accurate representation of Vardini Farms</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-4">Ideal Ambassador Profile</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Passionate about cow protection and Indian cultural heritage</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Active on social media with an engaged following</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Good communication skills and authenticity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 rounded-full bg-terracotta-500"></div>
                      </div>
                      <div className="ml-4">
                        <p className="text-cream-100">Willing to commit for at least 6 months</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambassador Stories Section */}
        <section className="py-20 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
                Meet Our Ambassadors
              </h2>
              <p className="text-lg text-earth-600 max-w-3xl mx-auto">
                Hear from some of our current ambassadors about their experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <AmbassadorStory 
                quote="Being a Vardini Ambassador has allowed me to combine my passion for sustainability with my love for Indian culture. It's rewarding to see how my social media advocacy has inspired others to learn more about desi cows."
                name="Priya Mehta"
                occupation="Yoga Instructor"
                location="Mumbai"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                instagram="@priya_yogalife"
              />
              
              <AmbassadorStory 
                quote="After visiting Vardini Farms, I was moved by the incredible work they're doing. As an ambassador, I've been able to share their mission with my corporate network, leading to meaningful partnerships and support."
                name="Rahul Sharma"
                occupation="Marketing Executive"
                location="Delhi"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                instagram="@rahulsharma_official"
              />
              
              <AmbassadorStory 
                quote="I've always been passionate about preserving our traditions. As a Vardini Ambassador, I've connected with like-minded individuals and helped organize events in my community that celebrate our heritage."
                name="Anita Desai"
                occupation="School Teacher"
                location="Bangalore"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                instagram="@anita_desai_teacher"
              />
            </div>
          </div>
        </section>

        {/* Ambassador Form Section */}
        <section id="ambassador-form" className="py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-earth-800 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-playfair font-bold mb-4">Ready to Amplify Our Mission?</h3>
                  <p className="mb-6">
                    Apply to become a Vardini Ambassador and help us spread awareness about the importance of protecting desi cows and preserving our cultural heritage.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Share2 className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Share our story with your network and community.</p>
                    </div>
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Start meaningful conversations about our mission.</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                      <p>Connect with like-minded advocates in our ambassador community.</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-playfair font-bold text-earth-800 mb-6">Ambassador Application</h3>
                  
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
                      <label htmlFor="location" className="block text-earth-700 mb-2 font-medium">
                        City/Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder="Enter your city or location"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="social-media" className="block text-earth-700 mb-2 font-medium">
                        Social Media Handles
                      </label>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Instagram className="h-5 w-5 text-earth-400 mr-3" />
                          <input
                            type="text"
                            placeholder="Instagram username"
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                          />
                        </div>
                        <div className="flex items-center">
                          <Facebook className="h-5 w-5 text-earth-400 mr-3" />
                          <input
                            type="text"
                            placeholder="Facebook username"
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                          />
                        </div>
                        <div className="flex items-center">
                          <Twitter className="h-5 w-5 text-earth-400 mr-3" />
                          <input
                            type="text"
                            placeholder="Twitter username"
                            className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="why-ambassador" className="block text-earth-700 mb-2 font-medium">
                        Why do you want to become a Vardini Ambassador?
                      </label>
                      <textarea
                        id="why-ambassador"
                        rows={4}
                        placeholder="Tell us why you're interested in becoming an ambassador"
                        className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <Button 
                      className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 text-lg"
                    >
                      <Megaphone className="w-5 h-5 mr-2" />
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
                Find answers to common questions about our Ambassador Program.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid gap-6">
              <FaqItem
                question="Do I need to have a large social media following to become an ambassador?"
                answer="No, we value quality over quantity. While having an engaged audience is helpful, we prioritize ambassadors who are genuinely passionate about our cause and can authentically communicate our mission."
              />
              
              <FaqItem
                question="Is there any cost associated with becoming an ambassador?"
                answer="No, becoming a Vardini Ambassador is completely free. We provide all the resources and support you need to effectively advocate for our cause."
              />
              
              <FaqItem
                question="How long is the ambassador commitment?"
                answer="We ask for a minimum commitment of 6 months, but many of our ambassadors choose to continue their role for much longer as they build deeper connections with our community."
              />
              
              <FaqItem
                question="Can I be an ambassador if I don't live in India?"
                answer="Absolutely! We welcome international ambassadors who are passionate about our mission. Our cause resonates globally, and having voices from around the world strengthens our impact."
              />
              
              <FaqItem
                question="How much time does being an ambassador require?"
                answer="The time commitment is flexible and can be adjusted to fit your schedule. On average, most ambassadors spend 2-3 hours per month sharing content, participating in meetings, and engaging with our community."
              />
              
              <FaqItem
                question="Will I receive training on what to post and how to talk about Vardini Farms?"
                answer="Yes, all new ambassadors receive comprehensive onboarding materials, including messaging guidelines, key talking points, and a content calendar to help you effectively communicate our mission."
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
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                  alt="Desi cows at Vardini Farms" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Become a Voice for Change
                </h2>
                <p className="text-lg text-cream-100 mb-8">
                  Join our ambassador program today and help us spread awareness about the importance of protecting desi cows and preserving our rich cultural heritage.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => document.getElementById('ambassador-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                  >
                    <Megaphone className="w-5 h-5 mr-2" />
                    Apply Now
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

const RoleCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-100 text-center hover:shadow-md transition-shadow h-full">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 text-center hover:shadow-md transition-shadow h-full">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 rounded-full bg-terracotta-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-earth-800 mb-3">{title}</h3>
    <p className="text-earth-600">{description}</p>
  </div>
);

const AmbassadorStory = ({ quote, name, occupation, location, image, instagram }: { quote: string; name: string; occupation: string; location: string; image: string; instagram: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow h-full">
    <p className="text-earth-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-earth-800">{name}</h4>
        <p className="text-earth-600">{occupation}</p>
        <p className="text-earth-500 text-sm">{location}</p>
      </div>
    </div>
    <div className="flex items-center text-terracotta-500">
      <Instagram className="h-4 w-4 mr-2" />
      <span>{instagram}</span>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100">
    <h3 className="text-xl font-medium text-earth-800 mb-3">{question}</h3>
    <p className="text-earth-600">{answer}</p>
  </div>
);

export default Ambassador;
