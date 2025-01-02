import React from 'react';
import { Home, ThumbsUp, DollarSign, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-pink-500" />,
      title: "Property Care",
      description: "Your property will be kept in excellent condition with regular cleanings and inspections after each guest."
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-pink-500" />,
      title: "Hassle-Free",
      description: "Partner with us for a smooth, worry-free management experience. We handle everything proactively."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-pink-500" />,
      title: "Stable Income",
      description: "Count on us for timely rent. Our business thrives on your property's success."
    },
    {
      icon: <Wrench className="w-12 h-12 text-pink-500" />,
      title: "Maintenance-Free",
      description: "Let us take care of the small stuff. Enjoy your property without the maintenance headaches."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why choose Tenants 2 Guest?
          </h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}