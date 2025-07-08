import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Truck, Headphones } from 'lucide-react';
import HeroSection from '@/components/hero-section';
import FeatureCard from '@/components/feature-card';
import StatisticItem from '@/components/statistic-item';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        altText="About Divya Agency"
        title="About Divya Agency"
        description="Transforming Agriculture Through Innovation"
      />

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-light text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2012, Divya Agency has been at the forefront of agricultural innovation in India. 
                We started with a simple mission: to help farmers achieve better yields while conserving 
                precious water resources through advanced irrigation technology.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we&apos;ve grown from a small local supplier to a trusted partner for farmers 
                across the country. Our commitment to quality, innovation, and customer service has made 
                us a leading provider of drip irrigation systems and agricultural equipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#1A6B3D] mr-3" />
                  <span>Over 10 years of industry experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#1A6B3D] mr-3" />
                  <span>5000+ satisfied customers nationwide</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#1A6B3D] mr-3" />
                  <span>Premium quality products with warranty</span>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Agricultural innovation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Driving sustainable agriculture through innovative irrigation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-normal text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower farmers with cutting-edge irrigation technology that maximizes crop yields 
                  while conserving water resources and promoting sustainable farming practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB400] to-[#FFC533] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-heading font-normal text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading provider of agricultural irrigation solutions in India, 
                  transforming farming communities through innovation, quality, and exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re committed to your success with quality products and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-normal mb-2">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                All our products are made from high-grade materials with extensive quality testing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-normal mb-2">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and reliable delivery across India with careful packaging and handling
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-normal mb-2">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technical team provides installation guidance and ongoing maintenance support
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A6B3D] to-[#2A7B4D] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-normal mb-2">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Thousands of farmers have increased their yields and saved water with our solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-[#1A6B3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatisticItem value="5000+" label="Happy Customers" />
            <StatisticItem value="10+" label="Years Experience" />
            <StatisticItem value="50+" label="Product Varieties" />
            <StatisticItem value="25" label="States Served" />
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-[#1A6B3D]/10 text-[#1A6B3D] hover:bg-[#1A6B3D]/20">Innovation</Badge>
                <h3 className="text-xl font-heading font-normal mb-4">Continuous Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly research and develop new technologies to improve farming efficiency 
                  and sustainability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-[#FFB400]/10 text-[#FFB400] hover:bg-[#FFB400]/20">Quality</Badge>
                <h3 className="text-xl font-heading font-normal mb-4">Uncompromising Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every product undergoes rigorous testing to ensure it meets our high standards 
                  and your expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-[#1A6B3D]/10 text-[#1A6B3D] hover:bg-[#1A6B3D]/20">Service</Badge>
                <h3 className="text-xl font-heading font-normal mb-4">Customer First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your success is our success. We provide comprehensive support from selection 
                  to installation and beyond. Here&apos;s what sets us apart from the competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}