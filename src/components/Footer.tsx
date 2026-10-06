import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0e0e] text-white py-[50px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="flex justify-between items-center gap-[30px] flex-wrap">
          <div>
            <div className="text-[23px] font-black tracking-[-1px] text-white">
              SELLERS <span className="text-[#10a89b]">HUB</span>
            </div>
            <p className="text-[#777] text-[14px] mt-[10px]">
              Marketplace Growth & Management
            </p>
          </div>

          <div>
            <p className="text-[#777] text-[14px]">
              Myntra · Flipkart · Shopsy · Meesho
            </p>
          </div>
        </div>

        <div className="mt-[45px] pt-[20px] border-t border-[#292d2d] text-[#666] text-[13px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 SELLERS HUB. All rights reserved.</span>
          <a
            href="https://wa.me/916203836621?text=Hello%20SELLERS%20HUB,%20I%20want%20to%20discuss%20my%20marketplace%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888] hover:text-[#10a89b] transition-colors"
          >
            Direct WhatsApp: +91 62038 36621
          </a>
        </div>
      </div>
    </footer>
  );
};
