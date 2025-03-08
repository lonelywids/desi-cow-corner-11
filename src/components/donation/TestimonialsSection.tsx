
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-earth-800 mb-4">
            Words from Our Supporters
          </h2>
          <p className="text-lg text-earth-600 max-w-3xl mx-auto">
            Hear from the individuals and families who have supported our mission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="Contributing to Vardini Farms has been one of the most fulfilling decisions I've made. Knowing that I'm helping protect these beautiful desi cows and our cultural heritage brings me immense joy."
            name="Priya Sharma"
            title="Monthly Donor"
            image="https://images.unsplash.com/photo-1536321115970-5dfa13356211"
          />
          
          <Testimonial
            quote="After visiting Vardini Farms and seeing the incredible work they're doing, I knew I had to support their mission. The care and respect they show for these sacred animals is truly inspiring."
            name="Rajesh Patel"
            title="Corporate Donor"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          />
          
          <Testimonial
            quote="My family has been supporting Vardini Farms for three years now. We love receiving updates about the cows we've helped rescue and the educational programs our donations have funded."
            name="Anjali Verma"
            title="Family Donor"
            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonial = ({ quote, name, title, image }: { quote: string; name: string; title: string; image: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-earth-100 hover:shadow-md transition-shadow">
    <p className="text-earth-700 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-lg font-medium text-earth-800">{name}</h4>
        <p className="text-earth-500">{title}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
