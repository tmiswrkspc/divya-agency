"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ArrowLeft, ShoppingCart, Minus, Plus, CheckCircle, Truck, Shield } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Product } from '@/lib/products';
import PrimaryCtaButton from '@/components/primary-cta-button';

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      });
    }
    
    toast.success(`${quantity} × ${product.title} added to cart!`);
    setIsAdding(false);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/products" className="flex items-center text-[#1A6B3D] hover:underline transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          {product.originalPrice && (
            <Badge className="absolute top-4 right-4 bg-red-500 text-white">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div>
          <Badge variant="secondary" className="mb-4">
            {product.category}
          </Badge>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-[#1A6B3D]">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Product Description */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 text-lg font-medium">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <PrimaryCtaButton
            size="lg"
            className="w-full mb-6"
            onClick={handleAddToCart}
            disabled={isAdding || !product.inStock}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
          </PrimaryCtaButton>

          {/* Features */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>In Stock - Ready to Ship</span>
            </div>
            <div className="flex items-center text-blue-600">
              <Truck className="h-5 w-5 mr-2" />
              <span>Free Shipping on Orders Above ₹10,000</span>
            </div>
            <div className="flex items-center text-purple-600">
              <Shield className="h-5 w-5 mr-2" />
              <span>2-5 Year Warranty Included</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}