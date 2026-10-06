import React from 'react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data/marketplaceData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head */}
        <div className="max-w-[700px] mb-[50px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            SIMPLE PRICING
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-[#111] mb-[18px]">
            Choose the marketplace support you need.
          </h2>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border border-[#e3e4e1] p-[30px] rounded-[20px] flex flex-col justify-between hover:border-[#10a89b] transition-all duration-300"
            >
              <div>
                <h3 className="text-[18px] font-bold text-[#111] mb-[20px] tracking-tight">
                  {plan.name}
                </h3>

                <div className="text-[36px] font-black text-[#111] font-mono leading-none mb-[20px]">
                  {plan.price}
                  {plan.period && (
                    <small className="text-[13px] text-[#777] font-normal ml-1">
                      {plan.period}
                    </small>
                  )}
                </div>

                <ul className="list-none text-[#666] text-[14px] mb-[25px] space-y-[9px]">
                  {plan.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-[#10a89b] font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#111] hover:bg-[#222] text-white font-bold text-[14px] py-[15px] px-[20px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5"
                >
                  {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
