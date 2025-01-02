import React from 'react';

export default function About() {
  const coreValues = [
    {
      number: "1",
      title: "Professionalism",
      description: "We hold ourselves to the highest standards of professionalism in everything we do. Our team is dedicated to delivering exceptional service and results with everyone we partner with."
    },
    {
      number: "2",
      title: "Transparency",
      description: "We believe in full transparency with our partners. We’ll always keep you informed about what we’re doing and why, and we’ll never hide anything from you."
    },
    {
      number: "3",
      title: "Accountability",
      description: "We take full responsibility for our actions and decisions. If something goes wrong, we’ll own up to it and work tirelessly to make it right."
    },
    {
      number: "4",
      title: "Continual Improvement",
      description: "We are committed to ongoing learning and improvement. We stay up-to-date with the latest industry trends and best practices to ensure top quality performance. "
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Specialization Section */}
        <div className="mb-16">
          <h2 className="text-indigo-900 text-lg font-semibold mb-4">Specialization</h2>
          <h3 className="text-4xl font-bold text-pink-500 mb-8">Vacation Home Rental Experts</h3>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our values:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-pink-500 mb-4">
                Transparency & Accountability
              </h3>
              <p className="text-gray-700">
                We believe in being transparent and accountable in all of our business dealings, ensuring that our partners always know what to expect.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-500 mb-4">
                Guest Satisfaction & Experience
              </h3>
              <p className="text-gray-700">
                We are committed to providing our guests with unforgettable vacation experiences, ensuring that they return to us time and time again.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
          
            <h3 className="text-4xl font-bold text-pink-500 mb-8">
              Our Core Values
            </h3>
            
            {coreValues.map((value, index) => (
              <div key={index} className="mb-8">
                <div className="bg-indigo-900 text-white px-6 py-4 mb-6">
                  <h4 className="text-xl font-semibold">{value.number}/ {value.title}</h4>
                </div>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative aspect-[3/4] w-full">
            <img
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1016651365896770004/original/4bfed27b-c75c-4a8f-a38c-bc6163258ce2.jpeg?im_w=1200&im_format=avif"
              alt="Modern home exterior"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}