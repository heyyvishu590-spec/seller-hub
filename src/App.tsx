import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { MarketplacesSection } from './components/MarketplacesSection';
import { SpecializedSupport } from './components/SpecializedSupport';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f7f5] text-[#111] antialiased">
      <Header />
      
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <MarketplacesSection />
        <SpecializedSupport />
        <PricingSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
