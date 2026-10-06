import React from 'react';

export const SpecializedSupport: React.FC = () => {
  return (
    <section id="specialized" className="py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head */}
        <div className="max-w-[700px] mb-[50px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            SPECIALIZED SUPPORT
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-[#111] mb-[18px]">
            Stuck with your marketplace account?
          </h2>

          <p className="text-[17px] text-[#666] leading-relaxed">
            We help sellers solve common marketplace setup, approval and account-management challenges.
          </p>
        </div>

        {/* 2 Special Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          
          <div className="bg-white rounded-[22px] p-[35px] border border-[#e4e5e2] hover:border-[#10a89b] transition-all duration-300">
            <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] uppercase">
              ACCOUNT
            </span>

            <h3 className="text-[25px] font-bold text-[#111] my-[12px] tracking-tight">
              Account Relaunch
            </h3>

            <p className="text-[#666] text-[15px] leading-relaxed">
              Rebuild and restart your marketplace operations with a structured relaunch approach.
            </p>

            <ul className="mt-[20px] pl-[20px] list-disc text-[#555] text-[14px] space-y-[7px]">
              <li>Account review</li>
              <li>Catalog review</li>
              <li>Listing improvement</li>
              <li>Growth planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-[22px] p-[35px] border border-[#e4e5e2] hover:border-[#10a89b] transition-all duration-300">
            <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] uppercase">
              BRAND
            </span>

            <h3 className="text-[25px] font-bold text-[#111] my-[12px] tracking-tight">
              Flipkart Brand Approval
            </h3>

            <p className="text-[#666] text-[15px] leading-relaxed">
              Assistance with brand approval requirements, documentation and marketplace submission.
            </p>

            <ul className="mt-[20px] pl-[20px] list-disc text-[#555] text-[14px] space-y-[7px]">
              <li>Brand documentation support</li>
              <li>Authorization letter guidance</li>
              <li>Submission assistance</li>
              <li>Requirement review</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
