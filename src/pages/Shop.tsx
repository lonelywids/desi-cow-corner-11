
import React, { useState } from 'react';
import { ShoppingBag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import type { Product } from '@/types/product';

type CategoryFilter = 'all' | Product['category'];

const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  
  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(product => product.category === categoryFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-24">
        {/* Hero Section */}
        <div className="bg-cream-100 py-16">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-cream-200 text-earth-800 text-sm font-medium rounded-full mb-4">
                Our Products
              </span>
              <h1 className="heading-lg mb-6 text-earth-800">Shop Our Desi A2 Products</h1>
              <p className="subheading">
                Experience the pure taste and health benefits of products from our ethically raised desi cows,
                crafted with care using traditional methods that preserve their natural goodness.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="py-8 bg-cream-50 border-y border-cream-200">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-earth-600" />
                <span className="text-earth-800 font-medium">Filter By:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <CategoryButton 
                  active={categoryFilter === 'all'} 
                  onClick={() => setCategoryFilter('all')}
                >
                  All Products
                </CategoryButton>
                <CategoryButton 
                  active={categoryFilter === 'milk'} 
                  onClick={() => setCategoryFilter('milk')}
                >
                  Milk
                </CategoryButton>
                <CategoryButton 
                  active={categoryFilter === 'ghee'} 
                  onClick={() => setCategoryFilter('ghee')}
                >
                  Ghee
                </CategoryButton>
                <CategoryButton 
                  active={categoryFilter === 'paneer'} 
                  onClick={() => setCategoryFilter('paneer')}
                >
                  Paneer
                </CategoryButton>
                <CategoryButton 
                  active={categoryFilter === 'other'} 
                  onClick={() => setCategoryFilter('other')}
                >
                  Other Products
                </CategoryButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <section className="py-16">
          <div className="container-custom">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-earth-600">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const CategoryButton = ({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active 
          ? 'bg-earth-500 text-white' 
          : 'bg-cream-100 text-earth-600 hover:bg-cream-200'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
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
        {product.bestSeller && (
          <div className="mb-3">
            <span className="px-3 py-1 bg-terracotta-500 text-white text-xs font-medium rounded-full">
              Bestseller
            </span>
          </div>
        )}
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

export default Shop;
