import React from 'react';
import { Sofa, MapPin, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Sofa className="w-12 h-12 text-blue-600" />,
      title: 'Luxury Furnishings',
      description: 'Premium, hand-selected furniture and amenities that create a sophisticated and comfortable living space.'
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: 'Strategic Locations',
      description: 'Prime locations near business districts, offering convenient access to corporate offices and urban amenities.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Flexible Stays',
      description: 'Customizable lease terms that adapt to your business travel schedule, from weeks to months.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Tenants 2 Guest?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience corporate housing redefined with our premium amenities and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}