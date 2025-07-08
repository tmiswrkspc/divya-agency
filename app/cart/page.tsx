"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import LoadingSkeleton from '@/components/loading-skeleton';
import EmptyState from '@/components/empty-state';
import PrimaryCtaButton from '@/components/primary-cta-button';
import OutlineCtaButton from '@/components/outline-cta-button';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LoadingSkeleton />
        </div>
      </main>
    );
  }

  const handleUpdateQuantity = async (id: string, quantity: number) => {
    setIsUpdating(id);
    await new Promise(resolve => setTimeout(resolve, 200));
    updateQuantity(id, quantity);
    setIsUpdating(null);
  };

  const handleRemoveItem = async (id: string) => {
    setIsUpdating(id);
    await new Promise(resolve => setTimeout(resolve, 200));
    removeItem(id);
    setIsUpdating(null);
  };

  if (items.length === 0) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmptyState
            icon={ShoppingBag}
            title="Your cart is empty"
            message="Start shopping to add products to your cart"
          >
            <PrimaryCtaButton size="lg" asChild>
              <Link href="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </PrimaryCtaButton>
          </EmptyState>
        </div>
      </main>
    );
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-light text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-normal">Cart Items ({items.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ₹{item.price.toLocaleString()} each
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={isUpdating === item.id || item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          disabled={isUpdating === item.id}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          disabled={isUpdating === item.id}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-normal">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      {getTotalPrice() >= 10000 ? 'Free' : '₹500'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax (18% GST)</span>
                    <span>₹{Math.round(getTotalPrice() * 0.18).toLocaleString()}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>
                      ₹{(getTotalPrice() + 
                          (getTotalPrice() >= 10000 ? 0 : 500) + 
                          Math.round(getTotalPrice() * 0.18)
                        ).toLocaleString()}
                    </span>
                  </div>
                  
                  {getTotalPrice() < 10000 && (
                    <p className="text-sm text-gray-600">
                      Add ₹{(10000 - getTotalPrice()).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>
                
                <div className="mt-6 space-y-3">
                  <PrimaryCtaButton size="lg" className="w-full" asChild>
                    <Link href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </PrimaryCtaButton>
                  
                  <OutlineCtaButton size="lg" className="w-full" asChild>
                    <Link href="/products">
                      Continue Shopping
                    </Link>
                  </OutlineCtaButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}