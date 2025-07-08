"use client";

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/product-card';
import { products, categories } from '@/lib/products';
import { SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600">
          Explore our complete range of irrigation solutions
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name A-Z</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">
            {sortedProducts.length} products
          </Badge>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">No products found</p>
          <Button onClick={() => setSelectedCategory('all')}>
            Show All Products
          </Button>
        </div>
      )}
    </>
  );
}