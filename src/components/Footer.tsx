
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-800 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter */}
        <div className="bg-earth-700 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-4">
                Join the Vardini Family
              </h3>
              <p className="text-cream-100 mb-0 max-w-md">
                Subscribe for farm updates, health tips, recipes, and exclusive offers.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 bg-earth-600 border border-earth-500 rounded-md text-white placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                />
                <button className="btn-accent flex items-center justify-center gap-2 whitespace-nowrap">
                  <span>Subscribe</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-playfair font-bold text-white">
                Vardini Farms
              </span>
            </div>
            <p className="text-cream-200 mb-6">
              Committed to ethical farming practices and cow protection since 2010. 
              Every purchase supports our rescue mission.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-playfair font-medium text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#" label="Our Products" />
              <FooterLink href="#" label="Meet Our Cows" />
              <FooterLink href="#" label="Rescue Mission" />
              <FooterLink href="#" label="Farm Experience" />
              <FooterLink href="#" label="Blog & Updates" />
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-playfair font-medium text-white mb-6">
              Support Our Mission
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#" label="Adopt a Cow" />
              <FooterLink href="#" label="Make a Donation" />
              <FooterLink href="#" label="Volunteer With Us" />
              <FooterLink href="#" label="Become an Ambassador" />
              <FooterLink href="#" label="Corporate Partnerships" />
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-playfair font-medium text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-terracotta-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-cream-200">
                  Vardini Farms, Doddaballapur Road, Bangalore Rural, Karnataka 561203
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-terracotta-400 mr-3 flex-shrink-0" />
                <span className="text-cream-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-terracotta-400 mr-3 flex-shrink-0" />
                <span className="text-cream-200">info@vardinifarms.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-earth-700 text-center text-cream-300 text-sm">
          <p>© {new Date().getFullYear()} Vardini Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="h-10 w-10 rounded-full bg-earth-700 flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href} 
      className="text-cream-200 hover:text-terracotta-400 transition-colors duration-200 flex items-center group"
    >
      <span className="mr-2 text-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">•</span>
      {label}
    </a>
  </li>
);

export default Footer;
