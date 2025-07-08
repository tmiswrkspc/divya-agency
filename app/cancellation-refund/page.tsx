import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy - Divya Agency',
  description: 'Learn about our cancellation, return, and refund policies for agricultural equipment and irrigation solutions.',
};

export default function CancellationRefundPolicy() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Cancellation & Refund Policy
            </h1>
            
            <p className="text-xl text-center text-gray-600 mb-8">
              Transparent Policies. Fair Solutions. Dedicated Support.
            </p>
            
            <div className="prose max-w-none prose-lg text-gray-700">
              <p className="mb-8">
                At Divya Agency, we pride ourselves on providing reliable, high-quality agricultural equipment and irrigation solutions. While we ensure careful handling and accurate processing of every order, we understand that issues may occasionally arise. Our Cancellation & Refund Policy clearly outlines our process for cancellations, damages, and refunds, with customer satisfaction as our highest priority.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Order Cancellations
              </h3>
              
              <h4 className="font-semibold text-lg mt-6 mb-2">Cancellation Window: Within 2 Hours of Purchase</h4>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You may request to cancel your order within 2 hours of placing it, provided it hasn&apos;t been processed, packaged, or dispatched.</li>
                <li>Once an order is packaged or handed over to our shipping partner, cancellations are not possible due to the dispatch process.</li>
              </ul>
              
              <p className="mb-4">
                To cancel your order:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Reach out to us via our <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link>, WhatsApp, or customer support email, providing your Order ID and cancellation reason.</li>
                <li>For urgent changes or accidental orders, please contact us immediately, and we will do our utmost to assist.</li>
              </ul>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Damaged or Defective Products
              </h3>
              
              <p className="mb-4">
                Despite rigorous quality controls, if your product:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Is damaged during transit</li>
                <li>Has visible manufacturing defects</li>
                <li>Arrives with tampered packaging or incorrect quantity</li>
              </ul>
              
              <p className="mb-4">
                Please inform our support team within 7 days of delivery.
              </p>
              
              <p className="mb-4">
                For swift resolution, please provide:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Your Order ID</li>
                <li>Clear photos showing product/packaging damage</li>
                <li>A concise description of the issue</li>
              </ul>
              
              <p className="mb-8">
                Upon review, we will arrange a replacement, store credit, or refund, based on the situation.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Returns & Customer Satisfaction
              </h3>
              
              <p className="mb-4">
                Due to the specialized nature of our products, returns for correctly delivered items are typically not accepted unless a defect or service issue arises.
              </p>
              
              <p className="mb-4">
                If the received product fails to meet our quality or description standards, contact us within 7 days of delivery. Depending on the case, we may offer:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Item replacement</li>
                <li>Store credit</li>
                <li>Partial or full refund</li>
              </ul>
              
              <p className="mb-8">
                All requests are assessed with fairness, maintaining customer satisfaction and trust as our guiding principles.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Bulk & Wholesale Orders
              </h3>
              
              <p className="mb-8">
                Cancellation and refund policies for bulk orders or specialized solutions may vary according to agreed-upon terms.
              </p>
              
              <p className="mb-8">
                For clarification on bulk order cancellations, returns, or documentation requirements, please consult your purchase agreement or contact our wholesale support team directly.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Refund Processing
              </h3>
              
              <p className="mb-4">
                Approved refunds will follow these steps:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Initiation:</strong> Within 3–5 business days after confirmation</li>
                <li><strong>Refund Method:</strong> Original payment method used during purchase (credit/debit cards, UPI, bank transfers)</li>
                <li><strong>Processing Time:</strong> Typically 5–10 business days, depending on your bank or payment gateway</li>
              </ul>
              
              <p className="mb-8">
                You will receive a confirmation via email or WhatsApp once your refund has been processed.
              </p>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Exceptions
              </h3>
              
              <p className="mb-4">
                Refunds or replacements might not be available under the following circumstances:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Delays caused by natural events, customs holds, or logistic disruptions outside our control</li>
                <li>Products returned without prior authorization or outside the valid reporting period</li>
                <li>Damage resulting from customer mishandling, improper installation, misuse, or unauthorized modifications</li>
              </ul>

              <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-4">
                Need Assistance?
              </h3>
              
              <p className="mb-4">
                Our customer support team is always available to help with orders, cancellations, refunds, or other concerns.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Phone:</strong> <a href="tel:+919003572453" className="text-blue-600 hover:underline">+91 90035 72453</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@divyaagency.life" className="text-blue-600 hover:underline">info@divyaagency.life</a></li>
                <li><strong>WhatsApp:</strong> Available via our website</li>
                <li>Or use our online <Link href="/contact" className="text-blue-600 hover:underline">Contact Form</Link></li>
              </ul>
              
              <p className="mt-8 text-lg">
                Divya Agency is committed to transparency, excellent customer service, and delivering quality agricultural and irrigation solutions. We appreciate your trust and strive to resolve all genuine concerns promptly and fairly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
