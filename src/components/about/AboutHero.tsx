import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-pink-500 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-pink-500">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Tenants2Guest! We are a corporate housing company based out of the San Francisco Bay Area, helping homeowners and investors transform traditional landlording into modern hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}