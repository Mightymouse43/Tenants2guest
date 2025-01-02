import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Tenants 2 Guest</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
            <Link to="/compliance" className="text-gray-700 hover:text-blue-600 transition">Compliance Protocol</Link>
            <a href="#listings" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              View Listings
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}