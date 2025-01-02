import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Home } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Welcome to Tenants 2 Guest
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Your premier vacation home rental agency in the San Francisco Bay Area. With over five years of experience in the industry, we specialize in providing top-notch property management services and vacation rental experiences for both homeowners and guests.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition rounded-lg"
            >
              <Building2 className="w-5 h-5 mr-2" />
              About Us
            </Link>
            <Link
              to="/compliance"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition rounded-lg"
            >
              <Shield className="w-5 h-5 mr-2" />
              Compliance Protocol
            </Link>
            <a
              href="https://www.airbnb.com/users/show/278040839"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition rounded-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              View Listings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}