"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import HeroSection from '@/components/hero-section';
import IconContainer from '@/components/icon-container';
import PrimaryCtaButton from '@/components/primary-cta-button';
import { useFormValidation } from '@/hooks/use-form-validation';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { errors, validateForm } = useFormValidation({
    name: { required: true },
    email: { required: true, email: true },
    message: { required: true, minLength: 10 }
  });

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

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        altText="Contact us"
        title="Contact Us"
        description="Get in touch with our agricultural experts"
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-normal">Send us a Message</CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  Have questions about our products or need expert advice? We&apos;re here to help!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? 'border-red-500' : ''}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g., Product inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements or questions..."
                      rows={5}
                      className={errors.message ? 'border-red-500' : ''}
                      required
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <PrimaryCtaButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </PrimaryCtaButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-normal">Get in Touch</CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    Reach out to us through any of these channels
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <IconContainer 
                      icon={Phone} 
                      sizeClass="w-10 h-10" 
                      iconSizeClass="h-5 w-5"
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading font-normal text-lg">Phone</h3>
                      <p className="text-gray-600 leading-relaxed">📞 +91 90035 72453</p>
                      <p className="text-gray-600 leading-relaxed">📞 +91 90035 72453</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <IconContainer 
                      icon={Mail} 
                      sizeClass="w-10 h-10" 
                      iconSizeClass="h-5 w-5"
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading font-normal text-lg">Email</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:info@divyaagency.life" className="hover:text-[#1A6B3D]">info@divyaagency.life</a>
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        <a href="mailto:divyaagency1994@gmail.com" className="hover:text-[#1A6B3D]">divyaagency1994@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <IconContainer 
                      icon={MapPin} 
                      sizeClass="w-10 h-10" 
                      iconSizeClass="h-5 w-5"
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading font-normal text-lg">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        No:1/39, Maveripatty,<br />
                        H Eachampadi post, Harur,<br />
                        Dharmapuri, Tamil Nadu - 636902,<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <IconContainer 
                      icon={Clock} 
                      sizeClass="w-10 h-10" 
                      iconSizeClass="h-5 w-5"
                      className="flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading font-normal text-lg">Business Hours</h3>
                      <p className="text-gray-600 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 leading-relaxed">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600 leading-relaxed">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading font-normal">Visit Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive map coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Quick answers to common questions about our products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading font-normal text-lg mb-3">What areas do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We deliver across India. Free shipping is available for orders above ₹10,000.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading font-normal text-lg mb-3">Do you provide installation support?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we provide detailed installation guides and technical support. Professional installation services are available in select areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading font-normal text-lg mb-3">What is your warranty policy?</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our products come with manufacturer warranty ranging from 2-5 years depending on the product.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading font-normal text-lg mb-3">Can I get a custom quote?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Contact us with your specific requirements and we&apos;ll provide a customized solution and quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}