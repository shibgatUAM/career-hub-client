import React from 'react';
import bannerImage from '../../assets/images/banner.jpg';
import { motion } from 'motion/react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text"
          >
            Find Your Dream Job Today!
          </motion.h1>
          <motion.p
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="text-2xl text-white/80 mb-10"
          >
            Connecting Talent with Opportunity- Your Gateway to Career Success
          </motion.p>

          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-4xl">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="flex-1 px-6 py-3 text-sm text-black outline-none"
            />
            <div className="border-l h-6"></div>
            <select className="px-6 py-3 text-sm text-black outline-none bg-white">
              <option className="text-gray-500">
                Select Location <FaAngleDown></FaAngleDown>
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chattogram">Chattogram</option>
              <option value="rajhshahi">Rajhshahi</option>
            </select>
            <div className="border-l h-6"></div>
            <select className="px-6 py-3 mr-4 text-sm text-black outline-none  bg-white">
              <option>
                Select Category <FaAngleDown></FaAngleDown>
              </option>
              <option value="it">Information Technology</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="design">Design</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="engineering">Engineering</option>
              <option value="sales">Sales</option>
              <option value="hr">Human Resources</option>
              <option value="construction">Construction</option>
            </select>
            <button className="flex items-center gap-2 bg-[#309689] text-white px-6 py-3 rounded-r-full hover:bg-[#267f74] transition">
              <FaSearch />
              Search Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
