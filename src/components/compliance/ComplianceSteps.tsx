import React from 'react';
import { FileCheck, FileText, Lock } from 'lucide-react';

export default function ComplianceSteps() {
  const steps = [
    {
      icon: <FileCheck className="w-12 h-12 text-pink-500" />,
      title: "Criminal Background Screening",
      description: "Comprehensive background checks to ensure the safety and security of our community."
    },
    {
      icon: <FileText className="w-12 h-12 text-pink-500" />,
      title: "Comprehensive Rental Agreement",
      description: "Detailed rental agreements that clearly outline responsibilities and expectations."
    },
    {
      icon: <Lock className="w-12 h-12 text-pink-500" />,
      title: "Preventative Security System",
      description: "Advanced security measures to protect our properties and residents."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-900 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}