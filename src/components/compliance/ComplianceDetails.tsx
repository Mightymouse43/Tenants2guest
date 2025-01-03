import React from 'react';
import StepCarousel from './StepCarousel';

export default function ComplianceDetails() {
  const screeningDetails = [
    "This is the first compliance step that occurs when a potential guest requests to book with Tenants 2 Guest.",
    "The primary guest on all Tenants 2 Guest reservations is screened for criminal background, regardless of the booking platform.",
    "A guest must successfully pass all levels of Tenants 2 Guest's screening process or their reservation will be canceled."
  ];

  const securityDetails = [
    "To ensure the safety of the property, proper occupancy, and appropriate noise levels, we use a security suite of noise monitoring, smart locks, and cameras.",
    "🧠🔒 Our smart lock system provides unique codes for each guest and maintains detailed access logs.",
    "Noise monitoring devices alert us to potential disturbances without recording audio.",
    "External security cameras allows us to enforce occupancy and make sure the right guest is entering the home."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Background Screening */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                1. Criminal Background Screening
              </h3>
            </div>
            <StepCarousel items={screeningDetails} />
          </div>

          {/* Rental Agreement */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                2. Rental Agreement
              </h3>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Once our clients have passed our screening process, they must sign our rental agreement, 
                regardless of the booking platform which includes our community standards for the duration 
                of their stay. The client's signature is legally binding with timestamps and their IP addresses.
              </p>
            </div>
          </div>

          {/* Security System */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                3. Security System
              </h3>
            </div>
            <StepCarousel items={securityDetails} />
          </div>
        </div>
      </div>
    </section>
  );
}