import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Divya Agency',
  description: 'Review the terms and conditions governing your use of Divya Agency\'s website and services.',
};

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Terms & Conditions
            </h1>
            
            <p className="text-gray-500 text-center mb-8">
              Last updated: July 8, 2025
            </p>
            
            <div className="prose max-w-none prose-lg text-gray-700">
              <p className="mb-6">
                Welcome to Divya Agency. By accessing and using our website (divyaagency.life), you agree to comply with and be bound by the following Terms and Conditions. These terms govern all interactions, purchases, and services provided through our online platform. Please read them carefully before using the site or placing an order.
              </p>
              
              <p className="mb-8">
                Continued use of this website implies complete acceptance of these terms. If you disagree with any part, please discontinue use immediately.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                1. General Use of the Website
              </h3>
              
              <p className="mb-4">
                By using this website, you confirm that you are:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>At least 18 years of age, or</li>
                <li>Accessing the site under the supervision of a parent or legal guardian.</li>
              </ul>
              
              <p className="mb-6">
                You agree to use the website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the site.
              </p>
              
              <p className="mb-8">
                Divya Agency reserves the right to restrict, suspend, or terminate your access to the website or specific features without prior notice or liability.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                2. Product Listings, Pricing & Availability
              </h3>
              
              <p className="mb-4">
                All products listed on our site are subject to availability and may be updated or discontinued without notice.
              </p>
              
              <p className="mb-4">
                We make every effort to ensure product descriptions, technical details, and images are accurate. However, occasional errors may occur. Divya Agency reserves the right to correct errors, cancel any affected orders, and provide refunds where necessary.
              </p>
              
              <p className="mb-4">
                Prices are displayed in Indian Rupees (INR ₹). Pricing may change due to market conditions, material costs, or internal policies.
              </p>
              
              <p className="mb-8">
                Bulk orders or specialized product requests have minimum order quantities, and specific pricing will be communicated directly to the buyer.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                3. Payments
              </h3>
              
              <p className="mb-4">
                Full payment is required at the time of purchase unless alternative arrangements have been pre-agreed upon (for verified bulk buyers).
              </p>
              
              <p className="mb-4">
                We accept major credit/debit cards, UPI, net banking, and secure digital payments through verified third-party payment gateways.
              </p>
              
              <p className="mb-4">
                Divya Agency does not store any payment details. All transactions are securely handled through third-party payment providers.
              </p>
              
              <p className="mb-8">
                If you encounter payment issues, duplicate charges, or unauthorized transactions, please contact our customer support immediately.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                4. Shipping & Delivery
              </h3>
              
              <p className="mb-4">
                Divya Agency offers domestic and international shipping through reliable courier services.
              </p>
              
              <p className="mb-4">
                Estimated delivery timelines vary by location and are provided during checkout.
              </p>
              
              <p className="mb-4">
                Tracking details will be provided via email, SMS, or WhatsApp once your order is dispatched.
              </p>
              
              <p className="mb-8">
                Delays by third-party logistics providers are outside our direct control; however, we will assist in promptly resolving issues.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                5. User Conduct & Responsibilities
              </h3>
              
              <p className="mb-4">
                By accessing our website, you agree not to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Post or transmit unlawful, misleading, abusive, or harmful content</li>
                <li>Attempt unauthorized access to backend systems or other customers&apos; data</li>
                <li>Utilize the website or its content for commercial purposes without explicit permission</li>
                <li>Engage in actions that compromise website performance, security, or integrity</li>
              </ul>
              
              <p className="mb-8">
                Violation of these terms may lead to account suspension or permanent ban from our platform.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                6. Intellectual Property
              </h3>
              
              <p className="mb-8">
                All website content—including logos, product designs, images, packaging renders, and text—is the intellectual property of Divya Agency.
              </p>
              
              <p className="mb-8">
                Unauthorized reuse, reproduction, or distribution of any site content is prohibited without explicit written consent.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                7. Modifications to Terms
              </h3>
              
              <p className="mb-4">
                Divya Agency reserves the right to update or modify these Terms & Conditions at any time.
              </p>
              
              <p className="mb-4">
                Any updates will appear on this page with an updated &quot;Last Revised&quot; date. Continued use of the site after changes constitutes acceptance of the updated terms.
              </p>
              
              <p className="mb-8">
                We encourage periodic review of these terms.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                8. Limitation of Liability
              </h3>
              
              <p className="mb-4">
                Under no circumstances shall Divya Agency, its directors, employees, or affiliates be liable for:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Direct or indirect damages resulting from the use or inability to use the website</li>
                <li>Product delivery delays or inaccuracies in product details</li>
                <li>Service disruptions caused by third-party actions</li>
              </ul>
              
              <p className="mb-8">
                Your use of this website is at your own risk.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                9. Governing Law
              </h3>
              
              <p className="mb-8">
                These terms are governed by the laws of India, under the jurisdiction of the courts of Dharmapuri, Tamil Nadu.
              </p>
              
              <p className="mb-8">
                Any disputes will be resolved in accordance with applicable law.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                10. Contact Us
              </h3>
              
              <p className="mb-4">
                For any queries, concerns, or assistance, please contact us at:
              </p>
              
              <address className="not-italic mb-8">
                <p className="font-semibold">Divya Agency</p>
                <p>No:1/39, Mavaleripatti,</p>
                <p>Harur, Dharmapuri,</p>
                <p>Tamil Nadu - 636902, India</p>
                <p>📞 Phone: <a href="tel:+919003572453" className="text-blue-600 hover:underline">+91 90035 72453</a></p>
                <p>📧 Email: <a href="mailto:info@divyaagency.life" className="text-blue-600 hover:underline">info@divyaagency.life</a></p>
                <p>💬 WhatsApp & Contact Form: Available on our <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link> page</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
