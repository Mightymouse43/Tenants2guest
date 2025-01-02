import React from 'react';

export default function ComplianceExplanation() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-6">
              Why do we have a 3-Step Compliance Protocol?
            </h2>
            <p className="text-gray-600 mb-6">
              Tenants 2 guest was founded on a core traditional principle of respect. 
              As a short-term rental company, we obtain leases in multifamily apartment 
              communities alongside other tenants as neighbors.
            </p>
            <p className="text-gray-600">
              We strive to accommodate the best guests and want our tenant neighbors to 
              feel safe and secure. Our protocol decreases the risk of theft, damage, 
              and criminal activity while ensuring a pleasant experience for everyone in 
              our communities.
            </p>
          </div>
          <div className="relative">
            <img
              src="blob:https://x.com/aad6fa19-cd23-480b-9ad3-6044b5738da0"
              alt="Security system interface"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-pink-500/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}