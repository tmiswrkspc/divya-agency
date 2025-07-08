import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/divya-agency-logo.png"
                  alt="Divya Agency Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-xl font-bold">Divya Agency</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading supplier of premium drip irrigation systems and agricultural equipment. 
              Helping farmers achieve efficient water management and sustainable crop yields.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@divyaagency.com</p>
              <p>📍 No:1/39, Maveripatty, H Eachampadi post, Harur, Dharmapuri, Tamil Nadu - 636902, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Divya Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}