import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shipping Policy - Divya Agency',
  description: 'Learn about our shipping policies, delivery timelines, and order processing for domestic and international shipments.',
};

export default function ShippingPolicy() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Shipping Policy
            </h1>
            
            <p className="text-xl text-center text-gray-600 mb-8">
              Reliable & Timely Delivery – From Dharmapuri to Your Farm
            </p>
            
            <div className="prose max-w-none prose-lg text-gray-700">
              <p className="mb-8">
                At Divya Agency, we strive to ensure your orders—whether local or international—arrive safely, securely, and on schedule. Our shipping policy clearly outlines order processing, delivery times, logistics, and what to expect during the shipping process.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Order Processing Time
              </h3>
              
              <p className="mb-6">
                Once your order is successfully placed and payment is confirmed, we initiate processing within 2 to 4 business days. This includes careful quality inspections, secure packaging, and handover to trusted logistics partners.
              </p>
              
              <p className="mb-4">
                Orders placed on weekends or public holidays will be processed the following business day.
              </p>
              
              <p className="mb-8">
                Custom or bulk orders may require additional preparation time, and we will notify you accordingly.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Shipping Destinations & Delivery Timelines
              </h3>
              
              <p className="mb-6">
                Divya Agency ships to destinations across India and internationally through reliable logistics services.
              </p>
              
              <h4 className="font-semibold text-lg mt-6 mb-2">Domestic Shipping (India):</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Metro Cities:</strong> 3–5 business days after dispatch</li>
                <li><strong>Non-Metro / Rural Areas:</strong> 5–9 business days after dispatch</li>
              </ul>
              
              <h4 className="font-semibold text-lg mt-6 mb-2">International Shipping:</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Asia-Pacific, Middle East:</strong> 7–15 business days</li>
                <li><strong>North America, Europe:</strong> 10–20 business days</li>
                <li><strong>Other Regions:</strong> Delivery timelines may vary depending on customs clearance and local logistics.</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-700">
                  <strong>Note:</strong> Delivery times provided are estimates and subject to change due to external factors like customs clearance, regional regulations, and courier delays.
                </p>
              </div>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Shipping Charges
              </h3>
              
              <p className="mb-4">
                Shipping charges depend on:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Delivery location (domestic/international)</li>
                <li>Order weight and dimensions</li>
                <li>Order value and selected shipping method</li>
              </ul>
              
              <p className="mb-6">
                All applicable shipping fees will be transparently displayed during checkout.
              </p>
              
              <h4 className="font-semibold text-lg mt-6 mb-2">Free Shipping Offers:</h4>
              <p className="mb-8">
                We occasionally offer free domestic shipping on orders exceeding certain amounts. Stay updated through promotional announcements or seasonal offers available on our website.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Tracking Your Order
              </h3>
              
              <p className="mb-4">
                Upon dispatch of your order, you will receive:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A tracking number via email, SMS, or WhatsApp</li>
                <li>A real-time tracking link to monitor your shipment</li>
                <li>Access to tracking information through your account dashboard (if an account is created)</li>
              </ul>
              
              <p className="mb-8">
                Please allow up to 24–48 hours for tracking information to reflect after the order has been shipped.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Delays & Exceptions
              </h3>
              
              <p className="mb-4">
                We work diligently to ensure timely deliveries; however, delays may occasionally occur due to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Natural calamities or weather disruptions</li>
                <li>Customs procedures or international logistics holds</li>
                <li>Public holidays or regional disruptions</li>
                <li>Unexpected logistical or courier issues</li>
                <li>Peak season backlogs (festivals, promotional events)</li>
              </ul>
              
              <p className="mb-8">
                We commit to proactively communicating updates via email, phone, or WhatsApp with revised delivery timelines.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Bulk & Wholesale Shipping
              </h3>
              
              <p className="mb-4">
                Shipping arrangements, packaging standards, and delivery timelines for bulk orders or specialized irrigation solutions may differ. For wholesale orders, kindly reach out to our dedicated support team for:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Customized shipping arrangements</li>
                <li>Export documentation assistance</li>
                <li>Discussions on freight terms (FOB/CIF)</li>
                <li>Bulk pricing and terms</li>
              </ul>
              
              <p className="mb-8">
                Our team will ensure your wholesale shipping requirements are efficiently handled.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Need Assistance with Your Shipment?
              </h3>
              
              <p className="mb-6">
                Our customer support team is available to help you with shipping-related queries or concerns. Contact us through:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:info@divyaagency.life" className="text-blue-600 hover:underline">info@divyaagency.life</a></li>
                <li><strong>Phone/WhatsApp:</strong> <a href="tel:+919003572453" className="text-blue-600 hover:underline">+91 90035 72453</a></li>
                <li><strong>Live Chat:</strong> Available during business hours (Mon-Sat, 10 AM - 6 PM IST)</li>
                <li>Or use the <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link> page on our website for additional options.</li>
              </ul>
              
              <p className="mt-8 text-lg">
                Thank you for choosing Divya Agency. We value your trust and are dedicated to delivering a seamless shopping and shipping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
