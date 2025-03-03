
import { ShoppingBag } from 'lucide-react';

type ProductProps = {
  title: string;
  image: string;
  price: string;
  description: string;
};

const FeaturedProducts = () => {
  return (
    <section className="section-spacing bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cream-200 text-earth-800 text-sm font-medium rounded-full mb-4">
            A2 Goodness
          </span>
          <h2 className="heading-lg mb-6 text-earth-800">Our Featured Products</h2>
          <p className="subheading mx-auto">
            Experience the pure taste and natural goodness of products from our ethically raised desi cows, 
            crafted with care and traditional methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Product 
            title="Pure Desi Ghee" 
            image="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
            price="₹1200/litre" 
            description="Hand-churned A2 ghee from our Gir cows, rich in Omega-3 and essential nutrients."
          />
          <Product 
            title="Fresh A2 Milk" 
            image="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
            price="₹120/litre" 
            description="Unprocessed, farm-fresh A2 milk delivered within 24 hours of milking."
          />
          <Product 
            title="Artisanal Paneer" 
            image="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
            price="₹600/kg" 
            description="Soft, crumbly paneer made fresh daily using traditional techniques."
          />
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="btn-primary flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Browse All Products</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Product = ({ title, image, price, description }: ProductProps) => {
  return (
    <div className="rounded-xl overflow-hidden glass-card glass-card-hover animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-playfair font-medium text-earth-800">{title}</h3>
          <span className="text-terracotta-600 font-medium">{price}</span>
        </div>
        <p className="text-earth-600 mb-6">{description}</p>
        <button className="w-full btn-secondary flex items-center justify-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
