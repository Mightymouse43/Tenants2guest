import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Project Manager',
      content: 'The attention to detail and quality of furnishings exceeded my expectations. Perfect for my 3-month project assignment.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Management Consultant',
      content: 'The strategic location and professional service made my extended stay both comfortable and productive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Tech Executive',
      content: 'Tenants 2 Guest provided the perfect balance of luxury and functionality. Will definitely use again.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from professionals who have experienced our corporate housing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}