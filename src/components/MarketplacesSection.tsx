import React from 'react';

export const MarketplacesSection: React.FC = () => {
  const marketplaces = [
    { name: 'MYNTRA', url: 'https://www.myntra.com' },
    { name: 'FLIPKART', url: 'https://www.flipkart.com' },
    { name: 'SHOPSY', url: 'https://www.shopsy.in' },
    { name: 'MEESHO', url: 'https://www.meesho.com' },
  ];

  return (
    <section id="marketplaces" className="bg-[#111] text-white py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head */}
        <div className="max-w-[700px] mb-[50px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            MARKETPLACES
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-white mb-[18px]">
            One partner.<br />
            Multiple marketplaces.
          </h2>

          <p className="text-[17px] text-[#888] leading-relaxed">
            Manage your marketplace business from one place.
          </p>
        </div>

        {/* 4 Marketplace Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
          {marketplaces.map((m) => (
            <a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[190px] border border-[#303535] rounded-[20px] p-[25px] flex flex-col justify-between transition-all duration-300 hover:border-[#10a89b] hover:-translate-y-1 group"
            >
              <small className="text-[#777] text-[12px] uppercase tracking-wider font-semibold">
                MARKETPLACE
              </small>

              <h3 className="text-[28px] font-black tracking-tight text-white group-hover:text-[#10a89b] transition-colors">
                {m.name}
              </h3>

              <small className="text-[#777] text-[13px] font-medium group-hover:text-white transition-colors">
                Visit marketplace →
              </small>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
