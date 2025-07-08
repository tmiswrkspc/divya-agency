"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
    
    toast.success(`${product.title} added to cart!`);
    setIsAdding(false);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-[#1A6B3D]">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <Badge variant="secondary" className="mb-3">
          {product.category}
        </Badge>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          asChild
        >
          <Link href={`/products/${product.slug}`}>
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Link>
        </Button>
        
        <Button 
          size="sm" 
          className="flex-1 bg-[#FFB400] hover:bg-[#FFB400]/90"
          onClick={handleAddToCart}
          disabled={isAdding || !product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}