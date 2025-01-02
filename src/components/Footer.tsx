import React from 'react';
import { Building2, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-white">Tenants 2 Guest</span>
            </div>
            <p className="mt-4">Enjoyable corporate housing solutions for the modern professional.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#compliance" className="hover:text-blue-500 transition">Compliance</a></li>
              <li><a href="#listings" className="hover:text-blue-500 transition">Listings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                tenants2guest@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (669) 242-9550
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tenants 2 Guest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}