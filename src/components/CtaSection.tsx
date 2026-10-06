import React from 'react';
import { getWhatsAppUrl } from '../data/marketplaceData';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-[70px] sm:py-[110px]" id="contact">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="bg-[#101313] text-white rounded-[30px] p-[45px_25px] sm:p-[70px] text-center border border-neutral-800">
          <h2 className="text-[38px] sm:text-[48px] lg:text-[60px] font-black leading-[1] tracking-[-2px] mb-[20px] text-white">
            Ready to grow your marketplace business?
          </h2>

          <p className="text-[#aaa] text-[16px] sm:text-[18px] max-w-[550px] mx-auto mb-[30px] leading-relaxed">
            Tell us what you're selling, where you're selling and where you want to go. We'll help you plan the next step.
          </p>

          <a
            href={getWhatsAppUrl("Hello SELLERS HUB, I want to discuss my marketplace business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#10a89b] hover:bg-[#0e968a] text-white font-bold text-[15px] px-[28px] py-[16px] rounded-[10px] transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
