import React from 'react';
import { Search, Phone, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: '1. Search',
      description: 'Browse our available properties and find the perfect fit for your needs.'
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: '2. Contact',
      description: 'Reach out to our team to discuss your requirements and schedule a virtual tour.'
    },
    {
      icon: <Key className="w-12 h-12 text-blue-600" />,
      title: '3. Move In',
      description: 'Complete your booking and move into your fully furnished corporate apartment.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple steps to your temporary home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}