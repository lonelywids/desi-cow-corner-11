
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Check, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, getBestSellers } from '@/data/products';
import type { Product } from '@/types/product';
import { toast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct);
      
      // Get best sellers or similar products
      const bestSellers = getBestSellers().filter(p => p.id !== productId);
      setSimilarProducts(bestSellers.slice(0, 3));
    }
  }, [productId]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product?.title} added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-earth-600">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-24">
        <div className="container-custom py-16">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm">
              <Link to="/" className="text-earth-600 hover:text-earth-800">Home</Link>
              <span className="mx-2 text-earth-400">/</span>
              <Link to="/shop" className="text-earth-600 hover:text-earth-800">Shop</Link>
              <span className="mx-2 text-earth-400">/</span>
              <span className="text-earth-800 font-medium">{product.title}</span>
            </nav>
          </div>
          
          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden glass-card">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              {product.bestSeller && (
                <div className="mb-4">
                  <span className="px-3 py-1 bg-terracotta-500 text-white text-xs font-medium rounded-full">
                    Bestseller
                  </span>
                </div>
              )}
              
              <h1 className="heading-md mb-4 text-earth-800">{product.title}</h1>
              
              <div className="mb-6">
                <p className="text-2xl font-medium text-terracotta-600">{product.price}</p>
              </div>
              
              <div className="mb-8">
                <p className="text-earth-700 mb-4">{product.description}</p>
                <p className="text-earth-700">{product.details}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-earth-800 mb-4">Health Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-leaf-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-earth-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <label htmlFor="quantity" className="block text-sm font-medium text-earth-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 flex items-center justify-center border border-earth-200 text-earth-700"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    className="w-20 h-10 text-center border-t border-b border-earth-200 text-earth-700"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button 
                    className="w-10 h-10 flex items-center justify-center border border-earth-200 text-earth-700"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-8">
                <button 
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-md border border-earth-200 text-earth-700 hover:bg-earth-50">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="heading-md mb-8 text-earth-800">You may also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
          
          {/* Back to Shop */}
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-flex items-center text-earth-700 hover:text-earth-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Shop</span>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-xl overflow-hidden glass-card glass-card-hover animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        {product.bestSeller && (
          <div className="mb-2">
            <span className="px-2 py-0.5 bg-terracotta-500 text-white text-xs font-medium rounded-full">
              Bestseller
            </span>
          </div>
        )}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-playfair font-medium text-earth-800">{product.title}</h3>
          <span className="text-sm text-terracotta-600 font-medium">{product.price}</span>
        </div>
        <div className="flex mt-3">
          <Link 
            to={`/shop/${product.id}`} 
            className="w-full btn-secondary text-sm px-3 py-1.5 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
