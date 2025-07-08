import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Divya Agency',
  description: 'Learn how Divya Agency protects your privacy and handles your personal information in compliance with global data protection standards.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Privacy Policy
            </h1>
            
            <div className="prose max-w-none prose-lg text-gray-700">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Your Privacy is Our Priority
              </h2>
              
              <p className="mb-6">
                At Divya Agency, your privacy is our top priority. We are committed to protecting the personal information you share with us, ensuring your data is handled securely, transparently, and in compliance with India&apos;s Information Technology Act and globally recognized data protection standards such as the GDPR.
              </p>
              
              <p className="mb-8">
                This Privacy Policy explains what information we collect, how we use it, safeguard it, and your rights when interacting with our website, products, and services.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Information We Collect
              </h3>
              
              <p className="mb-4">
                When you visit our website, place an order, contact us for product inquiries, or subscribe to updates, we may collect the following types of information:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Shipping & Billing Address</li>
                <li>Payment Details (processed securely via third-party gateways)</li>
                <li>Order History & User Preferences</li>
                <li>Device & Browser Information</li>
                <li>Cookies and Tracking Data (for performance analytics)</li>
              </ul>
              
              <p className="mb-8">
                We collect only the essential data needed to provide you with seamless service and product experience—nothing more.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Why We Collect Your Information
              </h3>
              
              <p className="mb-4">
                We collect and use your information solely for legitimate purposes, including:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Updating you on shipping and delivery statuses</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Managing account and order preferences</li>
                <li>Sending promotional content and offers (only if you opt-in)</li>
                <li>Analyzing website usage and performance (aggregated and anonymized)</li>
                <li>Improving our product offerings and website experience</li>
              </ul>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                How Your Information is Protected
              </h3>
              
              <p className="mb-4">
                We apply strict security practices to ensure your data remains secure and confidential at all times.
              </p>
              
              <p className="mb-4">
                Our safeguards include:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>SSL Encryption:</strong> All data transmitted on our website is encrypted using Secure Sockets Layer (SSL) technology.</li>
                <li><strong>Secure Payment Gateway:</strong> Payments are securely processed through PCI-compliant third-party gateways. We do not store your payment details.</li>
                <li><strong>Server Security:</strong> Our servers utilize robust firewalls, access controls, and undergo regular security audits.</li>
                <li><strong>Restricted Access:</strong> Only authorized personnel can access sensitive data, with protocols in place to prevent unauthorized disclosure.</li>
              </ul>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Your Rights & Choices
              </h3>
              
              <p className="mb-4">
                You have full control over your data. At any point, you can:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Update or correct your information</li>
                <li>Request deletion of your data (subject to applicable legal obligations)</li>
                <li>Withdraw consent from promotional communications</li>
                <li>Report concerns related to data privacy or misuse</li>
              </ul>
              
              <p className="mb-8">
                To exercise any of these rights, contact us directly via the <Link href="/contact" className="text-blue-600 hover:underline">Contact page</Link> or at <a href="mailto:info@divyaagency.life" className="text-blue-600 hover:underline">info@divyaagency.life</a>. We will respond to your request within 30 days.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Contact Us
              </h3>
              
              <p className="mb-4">
                For any queries, concerns, or requests regarding this Privacy Policy or our data practices, please reach our Data Protection Officer at:
              </p>
              
              <address className="not-italic mb-8">
                <p className="font-semibold">Divya Agency</p>
                <p>Attn: Data Protection Officer</p>
                <p>No:1/39, Mavaleripatti,</p>
                <p>Harur, Dharmapuri,</p>
                <p>Tamil Nadu - 636902, India</p>
                <p>Email: <a href="mailto:info@divyaagency.life" className="text-blue-600 hover:underline">info@divyaagency.life</a></p>
                <p>Phone: <a href="tel:+919003572453" className="text-blue-600 hover:underline">+91 90035 72453</a></p>
              </address>
              
              <p className="mb-8">
                We take all privacy concerns seriously and investigate every complaint thoroughly. If you are not satisfied with our response, you have the right to reach out to your local data protection authority.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Policy Updates
              </h3>
              
              <p className="mb-8">
                We may occasionally update this Privacy Policy to reflect changes in our business practices or legal obligations. Any updates will be posted on this page along with an updated &quot;Last Revised&quot; date.
              </p>
              
              <p className="text-sm text-gray-500 mt-12 mb-4">
                Last Revised: July 8, 2025
              </p>
              
              <p className="text-gray-600">
                Thank you for trusting Divya Agency with your personal information. We are committed to providing a secure and trustworthy online experience.
              </p>
              
              <p className="text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
                © 2025 Divya Agency. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
