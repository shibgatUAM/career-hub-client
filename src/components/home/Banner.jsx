import React, { useEffect, useState } from 'react';
import bannerImage from '../../assets/images/banner.jpg';
import { motion } from 'motion/react';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { IoBriefcase } from 'react-icons/io5';
import { FaPeopleGroup } from 'react-icons/fa6';
import { BsBuildingFill, BsBuildingsFill } from 'react-icons/bs';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(inView);
  }, [inView]);

  return (
    <>
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Banner Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Banner dialog */}
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

          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-4xl mb-10">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="flex-1 px-8 py-5 text-sm text-black outline-none"
            />
            <div className="border-l h-6"></div>
            <select className="px-8 py-5 text-sm text-black/70 outline-none bg-white">
              <option>
                Select Location <FaAngleDown></FaAngleDown>
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chattogram">Chattogram</option>
              <option value="rajhshahi">Rajhshahi</option>
              <option value="khulna">Khulna</option>
              <option value="barisal">Barisal</option>
              <option value="sylhet">Sylhet</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="coxsbazar">Cox's Bazar</option>
              <option value="gazipur">Gazipur</option>
              <option value="narayanganj">Narayanganj</option>
              <option value="bogura">Bogura</option>
              <option value="noakhali">Noakhali</option>
              <option value="pabna">Pabna</option>
              <option value="jessore">Jessore</option>
              <option value="comilla">Comilla</option>
              <option value="dinajpur">Dinajpur</option>
            </select>
            <div className="border-l h-6"></div>
            <select className="px-8 py-5 mr-4 text-sm text-black/70 outline-none  bg-white">
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
            <button className="flex items-center gap-2 bg-[#309689] text-white px-8 py-5 rounded-r-full hover:bg-[#267f74] transition cursor-pointer">
              <FaSearch />
              Search Job
            </button>
          </div>
          {/* Banner Countdown */}
          <div className="grid grid-cols-3 gap-4 align-items-center justify-center text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#309689] rounded-full p-4">
                <IoBriefcase size={30}></IoBriefcase>
              </div>
              <div ref={ref}>
                <h1 className="font-bold text-lg">
                  {shouldAnimate && (
                    <CountUp
                      end={25850}
                      duration={2}
                      useEasing={false}
                    ></CountUp>
                  )}
                </h1>
                <h3 className="text-white text-base opacity-80">Jobs</h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#309689] rounded-full p-4">
                <FaPeopleGroup size={30}></FaPeopleGroup>
              </div>
              <div ref={ref}>
                <h1 className="font-bold text-lg">
                  {shouldAnimate && (
                    <CountUp
                      end={10250}
                      duration={2}
                      useEasing={false}
                    ></CountUp>
                  )}
                </h1>
                <h3 className="text-white text-base opacity-80">Candidates</h3>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-[#309689] rounded-full p-4">
                <BsBuildingsFill size={30}></BsBuildingsFill>
              </div>
              <div ref={ref}>
                <h1 className="font-bold text-lg">
                  {shouldAnimate && (
                    <CountUp
                      end={18400}
                      duration={2}
                      useEasing={false}
                    ></CountUp>
                  )}
                </h1>
                <h3 className="text-white text-base opacity-80">Companies</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
