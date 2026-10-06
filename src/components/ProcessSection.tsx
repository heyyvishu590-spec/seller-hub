import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    { number: '01', title: 'Connect', desc: 'Tell us about your marketplace business.' },
    { number: '02', title: 'Audit', desc: 'We review your account, catalogs and opportunities.' },
    { number: '03', title: 'Optimize', desc: 'We improve the key areas affecting your marketplace.' },
    { number: '04', title: 'Grow', desc: 'We continuously work toward better marketplace performance.' },
  ];

  return (
    <section className="bg-[#e8f5f3] py-[70px] sm:py-[100px]">
      <div className="max-w-[1180px] w-[92%] mx-auto">
        
        {/* Section Head */}
        <div className="max-w-[700px] mb-[50px]">
          <span className="inline-block text-[12px] font-extrabold tracking-[2px] text-[#10a89b] mb-[20px] uppercase">
            OUR PROCESS
          </span>

          <h2 className="text-[35px] sm:text-[46px] lg:text-[55px] font-black leading-[1] tracking-[-2px] text-[#111] mb-[18px]">
            Simple process.<br />
            Better execution.
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {steps.map((s) => (
            <div key={s.number} className="border-t-2 border-[#111] pt-[20px]">
              <div className="text-[13px] text-[#10a89b] font-black tracking-wider">
                {s.number}
              </div>
              <h3 className="mt-[20px] text-[22px] font-bold text-[#111] tracking-tight mb-[6px]">
                {s.title}
              </h3>
              <p className="text-[14px] text-[#666] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
