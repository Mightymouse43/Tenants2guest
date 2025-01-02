import React from 'react';
import { Shield } from 'lucide-react';

export default function ComplianceHero() {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-r from-indigo-900 to-pink-500">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:3rem_3rem]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <Shield className="w-16 h-16 text-white/90 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            3-Step Compliance Protocol
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our number one priority is the safety of our neighbors and the greater community. 
            We've enacted our compliance protocol to ensure security and peace of mind for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}