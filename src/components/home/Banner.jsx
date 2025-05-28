import React from 'react';
import bannerImage from '../../assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold mb-4">Find Your Dream Job Today!</h1>
        <p className="text-lg text-white/80">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
      </div>
    </div>
  );
};

export default Banner;
