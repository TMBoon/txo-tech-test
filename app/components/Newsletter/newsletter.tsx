import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#F9F5EF] p-8 pt-40 pb-40 max-w-100%">
      <h2 className="text-7xl font-extralight text-[#736357] mb-6">Newsletter</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-transparent text-7xl font-light text-[#A9A9A9] placeholder-[#A9A9A9] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full bg-transparent text-7xl font-light text-[#A9A9A9] placeholder-[#A9A9A9] focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent text-7xl font-light text-[#A9A9A9] placeholder-[#A9A9A9] focus:outline-none"
        />
        <button 
          type="submit" 
          className="text-4xl font-light text-[#736357] hover:text-opacity-30 transition-all duration-300 ease-in-out mt-4 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newsletter;