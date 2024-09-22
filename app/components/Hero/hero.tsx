import React from 'react'

const hero = () => {
  return (
    <div className="w-full pb-16 pt-48 px-8">
      <div className="flex flex-col space-y-8">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#736357] leading-tight">
            We're hands-on and committed to evolving your business to strive for better.
          </h1>
        </div>
        <div className='w-[calc(80%-5px)]'>
          <div className="w-1/2 ml-auto">
          <h4 className="text-sm md:text-base font-medium text-[#736357] mb-2">OUR OFFERING</h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#736357] leading-relaxed">
            We provide physical, pragmatic and personal business guidance. Success is never static. Neither are we. We'll be your business partners for positive change.
          </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero