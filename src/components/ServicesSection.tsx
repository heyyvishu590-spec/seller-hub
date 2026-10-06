import React from 'react';
import { SERVICES } from '../data/marketplaceData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head */}
        <div className="max-w-[700px] mb-[50px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            WHAT WE DO
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-[#111] mb-[18px]">
            Everything your marketplace business needs.
          </h2>

          <p className="text-[17px] text-[#666] leading-relaxed">
            From account setup to catalog management and growth, SELLERS HUB handles the operational side of your marketplace business.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="bg-white p-[30px] border border-[#e5e6e3] rounded-[20px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#10a89b] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="text-[20px] font-black text-[#10a89b] mb-[45px]">
                {s.number}
              </div>

              <h3 className="text-[21px] font-bold text-[#111] mb-[12px] tracking-tight">
                {s.title}
              </h3>

              <p className="text-[14px] text-[#777] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
