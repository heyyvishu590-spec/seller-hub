import React from 'react';
import { getWhatsAppUrl } from '../data/marketplaceData';

export const Hero: React.FC = () => {
  return (
    <section className="pt-[70px] sm:pt-[100px] pb-[60px] sm:pb-[80px] overflow-hidden">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] lg:gap-[70px] items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
              MARKETPLACE GROWTH & MANAGEMENT
            </span>

            <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] font-black leading-[0.98] tracking-[-3px] sm:tracking-[-4px] text-[#111] mb-[25px]">
              Build. Manage.<br />
              <span className="text-[#10a89b]">Grow.</span>
            </h1>

            <p className="text-[17px] sm:text-[18px] text-[#666] max-w-[600px] mb-[32px] leading-relaxed">
              SELLERS HUB helps brands manage their marketplace operations, improve their catalogs and build sustainable growth across India's leading marketplaces.
            </p>

            <div className="flex flex-wrap gap-[14px]">
              <a
                href={getWhatsAppUrl("Hello SELLERS HUB, I want to grow my marketplace business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] hover:bg-[#222] text-white font-bold text-[15px] px-[24px] py-[15px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="bg-white border border-[#ddd] hover:border-[#10a89b] text-[#111] font-bold text-[15px] px-[24px] py-[15px] rounded-[10px] transition-colors shadow-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Dashboard */}
          <div className="lg:col-span-5">
            <div className="bg-[#101313] text-white p-[28px] rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-neutral-800">
              
              <div className="flex justify-between items-start mb-[30px]">
                <div>
                  <div className="text-[#999] text-[12px] uppercase tracking-[1.5px] font-medium">
                    Marketplace Overview
                  </div>
                  <div className="text-[36px] font-extrabold mt-[5px] font-mono tabular-nums leading-tight">
                    ₹15.6L
                  </div>
                </div>

                <div className="text-[#10c7b7] text-[12px] font-medium flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#10c7b7]"></span>
                  <span>Growth Tracking</span>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[150px] flex items-end gap-[12px] border-b border-[#333] mb-[28px] pb-1">
                {[40, 52, 48, 67, 73, 88, 100].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#10a89b] rounded-t-[5px] opacity-85 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }}
                    title={`Week ${i + 1}`}
                  />
                ))}
              </div>

              {/* Market List */}
              <div className="grid gap-[12px]">
                <div className="flex justify-between items-center py-[13px] px-[15px] bg-[#191d1d] rounded-[10px] text-[14px]">
                  <span className="text-neutral-300 font-medium">Myntra</span>
                  <span className="text-[#10c7b7] font-extrabold font-mono tabular-nums">₹4.8L</span>
                </div>

                <div className="flex justify-between items-center py-[13px] px-[15px] bg-[#191d1d] rounded-[10px] text-[14px]">
                  <span className="text-neutral-300 font-medium">Flipkart</span>
                  <span className="text-[#10c7b7] font-extrabold font-mono tabular-nums">₹4.2L</span>
                </div>

                <div className="flex justify-between items-center py-[13px] px-[15px] bg-[#191d1d] rounded-[10px] text-[14px]">
                  <span className="text-neutral-300 font-medium">Meesho</span>
                  <span className="text-[#10c7b7] font-extrabold font-mono tabular-nums">₹4.5L</span>
                </div>

                <div className="flex justify-between items-center py-[13px] px-[15px] bg-[#191d1d] rounded-[10px] text-[14px]">
                  <span className="text-neutral-300 font-medium">Shopsy</span>
                  <span className="text-[#10c7b7] font-extrabold font-mono tabular-nums">₹2.1L</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
