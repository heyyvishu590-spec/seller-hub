import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="py-[35px] border-y border-[#ddd] bg-transparent">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        <div className="flex justify-between items-center gap-[25px] flex-wrap text-[#777] font-bold text-[15px] sm:text-[17px] tracking-wider">
          <a
            href="https://www.myntra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10a89b] transition-colors"
          >
            MYNTRA
          </a>
          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10a89b] transition-colors"
          >
            FLIPKART
          </a>
          <a
            href="https://www.shopsy.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10a89b] transition-colors"
          >
            SHOPSY
          </a>
          <a
            href="https://www.meesho.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10a89b] transition-colors"
          >
            MEESHO
          </a>
        </div>
      </div>
    </div>
  );
};
