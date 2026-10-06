import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/marketplaceData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f6f7f5]/90 backdrop-blur-md border-b border-[#e4e5e2]">
      <div className="max-w-[1180px] w-[92%] mx-auto h-[78px] flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="text-[23px] font-black tracking-[-1px] text-[#111]">
          SELLERS <span className="text-[#10a89b]">HUB</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[30px]">
          <a href="#services" className="text-[14px] text-[#555] hover:text-[#10a89b] transition-colors">
            Services
          </a>
          <a href="#marketplaces" className="text-[14px] text-[#555] hover:text-[#10a89b] transition-colors">
            Marketplaces
          </a>
          <a href="#specialized" className="text-[14px] text-[#555] hover:text-[#10a89b] transition-colors">
            Specialized Support
          </a>
          <a href="#pricing" className="text-[14px] text-[#555] hover:text-[#10a89b] transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-[14px] text-[#555] hover:text-[#10a89b] transition-colors">
            About
          </a>
          <a
            href={getWhatsAppUrl("Hello SELLERS HUB, I want to grow my marketplace business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] text-white text-[14px] font-semibold px-[19px] py-[12px] rounded-full hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e4e5e2] bg-[#f6f7f5] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-[15px] font-medium text-[#444]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#10a89b] transition-colors"
            >
              Services
            </a>
            <a
              href="#marketplaces"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#10a89b] transition-colors"
            >
              Marketplaces
            </a>
            <a
              href="#specialized"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#10a89b] transition-colors"
            >
              Specialized Support
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#10a89b] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#10a89b] transition-colors"
            >
              About
            </a>
          </nav>
          <div className="pt-2 border-t border-[#e4e5e2]">
            <a
              href={getWhatsAppUrl("Hello SELLERS HUB, I want to grow my marketplace business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#111] text-white text-[14px] font-semibold py-3 rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
