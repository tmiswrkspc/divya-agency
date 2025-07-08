"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { CreditCard, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import EmptyState from '@/components/empty-state';
import PrimaryCtaButton from '@/components/primary-cta-button';
import { useFormValidation } from '@/hooks/use-form-validation';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'cod' | 'cashfree'>('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });

  const { errors, validateForm } = useFormValidation({
    firstName: { required: true },
    lastName: { required: true },
    email: { required: true, email: true },
    phone: { required: true, minLength: 10 },
    address: { required: true },
    city: { required: true },
    state: { required: true },
    pincode: { required: true, minLength: 6 }
  });

  // Check if all required fields are filled
  const isFormValid = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
    return requiredFields.every(field => formData[field as keyof typeof formData]?.trim() !== '');
  };

  const isPaymentButtonEnabled = isFormValid() && !isProcessing;

  if (items.length === 0) {
    return (
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmptyState
            icon={ShoppingBag}
            title="No items to checkout"
            message="Your cart is empty. Add some products first."
          >
            <PrimaryCtaButton 
              size="lg" 
              onClick={() => router.push('/products')}
            >
              Continue Shopping
            </PrimaryCtaButton>
          </EmptyState>
        </div>
      </main>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm(formData)) {
      toast.error('Please fix the form errors');
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Clear cart and redirect
    clearCart();
    toast.success('Order placed successfully! You will receive a confirmation email shortly.');
    router.push('/');
    
    setIsProcessing(false);
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 10000 ? 0 : 500;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-light text-gray-900 mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Information */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading font-normal">Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={errors.firstName ? 'border-red-500' : ''}
                        required
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={errors.lastName ? 'border-red-500' : ''}
                        required
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'border-red-500' : ''}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'border-red-500' : ''}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your full address"
                      className={errors.address ? 'border-red-500' : ''}
                      required
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={errors.city ? 'border-red-500' : ''}
                        required
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        type="text"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={errors.state ? 'border-red-500' : ''}
                        required
                      />
                      {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className={errors.pincode ? 'border-red-500' : ''}
                        required
                      />
                      {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for your order"
                    />
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
                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm truncate">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-6" />

                  {/* Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? 'text-green-600' : ''}>
                        {shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Tax (18% GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="mt-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="h-4 w-4 text-gray-600 mr-2" />
                      <span className="text-sm font-medium">Select Payment Method</span>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Cash on Delivery Option */}
                      <div
                        onClick={() => setSelectedPaymentMethod('cod')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedPaymentMethod === 'cod'
                            ? 'border-[#1A6B3D] bg-[#1A6B3D]/5 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              selectedPaymentMethod === 'cod'
                                ? 'border-[#1A6B3D] bg-[#1A6B3D]'
                                : 'border-gray-300'
                            }`}>
                              {selectedPaymentMethod === 'cod' && (
                                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">Cash on Delivery</h4>
                              <p className="text-sm text-gray-600">Pay when your order arrives</p>
                            </div>
                          </div>
                          <div className="text-2xl">💵</div>
                        </div>
                      </div>

                      {/* Cashfree Payment Gateway Option */}
                      <div
                        onClick={() => setSelectedPaymentMethod('cashfree')}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedPaymentMethod === 'cashfree'
                            ? 'border-[#1A6B3D] bg-[#1A6B3D]/5 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              selectedPaymentMethod === 'cashfree'
                                ? 'border-[#1A6B3D] bg-[#1A6B3D]'
                                : 'border-gray-300'
                            }`}>
                              {selectedPaymentMethod === 'cashfree' && (
                                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">Cashfree Payment Gateway</h4>
                              <p className="text-sm text-gray-600">Pay securely with cards, UPI, or net banking</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CreditCard className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <PrimaryCtaButton
                    type="submit"
                    size="lg"
                    className="w-full mt-6"
                    disabled={!isPaymentButtonEnabled}
                  >
                    {!isFormValid() && !isProcessing ? 
                      'Complete Billing Information' : 
                      isProcessing ? 
                        'Processing...' : 
                        `${selectedPaymentMethod === 'cod' ? 'Place Order' : 'Proceed to Payment'} - ₹${total.toLocaleString()}`
                    }
                  </PrimaryCtaButton>
                  
                  {!isFormValid() && (
                    <p className="text-sm text-gray-500 text-center mt-2">
                      Please fill in all required billing information to continue
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}