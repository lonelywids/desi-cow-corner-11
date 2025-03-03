
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import type { Product } from '@/types/product';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

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
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/shop" className="btn-primary flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Browse All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-xl overflow-hidden glass-card glass-card-hover animate-fade-in">
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-playfair font-medium text-earth-800">{product.title}</h3>
          <span className="text-terracotta-600 font-medium">{product.price}</span>
        </div>
        <p className="text-earth-600 mb-6">{product.description}</p>
        <div className="flex space-x-2">
          <Link 
            to={`/shop/${product.id}`} 
            className="flex-1 btn-secondary px-4 py-2 text-center"
          >
            View Details
          </Link>
          <button className="btn-primary flex items-center justify-center gap-2 px-4 py-2">
            <ShoppingBag className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
