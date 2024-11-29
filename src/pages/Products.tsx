import React, { useState } from 'react';
import { ProductCard } from '@/components/products/product-card';
import { ProductFilters } from '@/components/products/product-filters';
import { ProductSearch } from '@/components/products/product-search';
import type { Product } from '@/types';

// Sample data - In a real app, this would come from an API
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Royal Corgi Essence',
    description: 'A majestic blend of cherry blossom and vanilla, perfect for your royal companion.',
    price: 49.99,
    images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80'],
    category: 'Premium',
    tags: ['royal', 'luxury', 'floral'],
    rating: 4.8,
    reviews: [],
    stock: 50
  },
  {
    id: '2',
    name: 'Sakura Dreams',
    description: 'Inspired by Japanese cherry blossoms, this gentle fragrance brings spring all year round.',
    price: 39.99,
    images: ['https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80'],
    category: 'Floral',
    tags: ['cherry blossom', 'spring', 'gentle'],
    rating: 4.5,
    reviews: [],
    stock: 35
  },
  {
    id: '3',
    name: 'Fresh Puppy',
    description: 'A light and refreshing scent perfect for everyday wear.',
    price: 29.99,
    images: ['https://images.unsplash.com/photo-1546975490-e8b92a360b24?auto=format&fit=crop&q=80'],
    category: 'Essential',
    tags: ['fresh', 'daily', 'light'],
    rating: 4.6,
    reviews: [],
    stock: 75
  }
];

const categories = ['Premium', 'Floral', 'Essential'];

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleAddToCart = (productId: string) => {
    console.log('Adding to cart:', productId);
    // Implement cart functionality
  };

  const handleAddToWishlist = (productId: string) => {
    console.log('Adding to wishlist:', productId);
    // Implement wishlist functionality
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      
      <div className="mb-8">
        <ProductSearch value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <aside className="hidden md:block">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </aside>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;