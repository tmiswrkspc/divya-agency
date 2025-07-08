import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Droplets, Leaf, TrendingUp, Users, Award, CheckCircle, Star, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Drip irrigation system in farmland"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-heading font-light mb-8 leading-tight">
            Efficient Irrigation.<br />
            <span className="text-[#FFB400] font-normal">Sustainable Yields.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Transform your farming with our premium drip irrigation systems. 
            Save water, increase yields, and grow sustainably with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFB400] hover:bg-[#FFB400]/90 text-black font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
              <Link href="/products">
                Shop Products
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-10 py-6 text-lg rounded-full backdrop-blur-sm bg-transparent" asChild>
              <Link href="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex gap-8 text-white">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-6 py-4">
            <div className="text-2xl font-bold">5000+</div>
            <div className="text-sm text-gray-200">Happy Farmers</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-6 py-4">
            <div className="text-2xl font-bold">50%</div>
            <div className="text-sm text-gray-200">Water Saved</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-6 py-4">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm text-gray-200">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#1A6B3D]" />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-[#1A6B3D]" />
              <span className="text-sm font-medium">Free Shipping ₹10,000+</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#FFB400]" />
              <span className="text-sm font-medium">4.8/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#1A6B3D]" />
              <span className="text-sm font-medium">Expert Installation Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#1A6B3D]/10 text-[#1A6B3D] hover:bg-[#1A6B3D]/20">
              Best Sellers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our top-rated irrigation solutions trusted by farmers nationwide. 
              Each product is carefully selected for quality, durability, and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-2 border-[#1A6B3D] text-[#1A6B3D] hover:bg-[#1A6B3D] hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-6">
              Why Choose Divya Agency?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re committed to providing the best irrigation solutions for modern farming. 
              Here&apos;s what sets us apart from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-normal mb-4">Water Efficient</h3>
                <p className="text-gray-600 leading-relaxed">Save up to 50% water compared to traditional irrigation methods while maintaining optimal crop hydration.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-normal mb-4">Increased Yields</h3>
                <p className="text-gray-600 leading-relaxed">Boost crop production by 20-40% with precise water delivery directly to plant roots.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB400] to-[#FFC533] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-heading font-normal mb-4">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed">Durable materials with extended warranty and comprehensive support for long-term reliability.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-normal mb-4">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated team for installation guidance, maintenance support, and technical assistance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-[#FFB400]/10 text-[#FFB400] hover:bg-[#FFB400]/20">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-8 leading-tight">
                Transforming Agriculture with Smart Irrigation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For over a decade, Divya Agency has been at the forefront of agricultural innovation. 
                We specialize in providing cutting-edge drip irrigation systems that help farmers 
                maximize their crop yields while conserving precious water resources.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1A6B3D] rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">10+ years of industry experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1A6B3D] rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">5000+ satisfied farmers nationwide</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#1A6B3D] rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">Premium quality products with comprehensive warranty</span>
                </div>
              </div>
              <Button size="lg" variant="outline" className="border-2 border-[#1A6B3D] text-[#1A6B3D] hover:bg-[#1A6B3D] hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Modern farming with drip irrigation"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1A6B3D] rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50%</div>
                    <div className="text-sm text-gray-600">Water Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A6B3D] to-[#2A7B4D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 leading-tight">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of farmers who have already improved their yields and reduced water consumption 
            with our innovative irrigation systems. Start your journey to sustainable farming today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#FFB400] hover:bg-[#FFB400]/90 text-black font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1A6B3D] font-semibold px-10 py-6 text-lg rounded-full backdrop-blur-sm bg-transparent" asChild>
              <Link href="/contact">
                Get Expert Advice
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />
      </section>
    </main>
  );
}