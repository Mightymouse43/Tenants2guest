import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import AboutVision from '../components/about/AboutVision';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <AboutVision />
      <Footer />
    </div>
  );
}