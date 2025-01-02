import React from 'react';
import Navbar from '../components/Navbar';
import ComplianceHero from '../components/compliance/ComplianceHero';
import ComplianceSteps from '../components/compliance/ComplianceSteps';
import ComplianceExplanation from '../components/compliance/ComplianceExplanation';
import ComplianceDetails from '../components/compliance/ComplianceDetails';
import Footer from '../components/Footer';

export default function ComplianceProtocol() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ComplianceHero />
      <ComplianceSteps />
      <ComplianceExplanation />
      <ComplianceDetails />
      <Footer />
    </div>
  );
}