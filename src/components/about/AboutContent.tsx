import React from 'react';
import ImageCarousel from '../ui/ImageCarousel';

export default function AboutContent() {
  const carouselImages = [
    {
      src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1285014167852840449/original/edfa87d0-3e99-4d8b-bf0c-1933c45b187e.jpeg?im_w=1200&im_format=avif",
      alt: "Modern living room with stylish furniture"
    },
    {
      src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1285014167852840449/original/fe333a56-d5d0-43e9-9f4c-07ecb3b6d745.jpeg?im_w=1200&im_format=avif",
      alt: "Cozy bedroom interior"
    },
    {
      src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1278380619530517554/original/e19ede88-965b-4c8e-9fd4-e457fdfaa94d.jpeg?im_w=1200&im_format=avif",
      alt: "Modern kitchen design"
    },
    {
      src: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/prohost-api/Hosting-1016651365896770004/original/82104638-a9d1-4f71-a365-64e5627e234c.jpeg?im_w=1200&im_format=avif",
      alt: "Elegant dining area"
    },
    {
      src: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-750117636306999489/original/6f72186f-c41f-4efb-ae23-dcebc7dee34b.jpeg?im_w=1200&im_format=avif",
      alt: "Luxurious bathroom"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ImageCarousel images={carouselImages} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Unique Approach</h2>
            <p className="text-gray-600 mb-6">
              At Tenants 2 Guest, we do things differently. Instead of looking for clients and finding furnished homes to put them in, we do the opposite. We first look for desirable homes/apartments and invest on the front end by signing multiple year leases, furnishing the place, and then going to market looking for clients.
            </p>
            <p className="text-gray-600">
              We now live in a world of instant gratification. Everything is becoming faster, easier, and more accessible. With remote work becoming the norm, people prefer the flexibility of being able to move around without being tied down to traditional yearly leases. That's where we come in - we sign the lease for them and give them the opportunity to move around freely, accommodating everyone from traveling nurses to relocated professionals and vacationers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}