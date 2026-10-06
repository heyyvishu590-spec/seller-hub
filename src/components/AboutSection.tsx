import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="max-w-[700px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            ABOUT SELLERS HUB
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-[#111] mb-[18px]">
            Marketplace operations, without the complexity.
          </h2>

          <p className="text-[17px] text-[#666] leading-relaxed">
            SELLERS HUB is focused on helping online sellers
            manage their marketplace business more efficiently.
            From account management and brand approvals to
            catalogs and growth planning, we provide practical
            marketplace support under one roof.
          </p>
        </div>
      </div>
    </section>
  );
};
