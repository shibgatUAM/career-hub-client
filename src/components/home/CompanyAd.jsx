import React from 'react';
import { motion } from 'motion/react';
import Image1 from '../../assets/images/spotify.png';
import Image2 from '../../assets/images/slack.png';
import Image3 from '../../assets/images/adobe.png';
import Image4 from '../../assets/images/asana.png';
import Image5 from '../../assets/images/linear.png';

const CompanyAd = () => {
  const logos = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="overflow-hidden bg-black py-6">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ['0%', '-50%'] }}
        whileHover={{ x: ['-50%', '0%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="w-[148px] h-[48px] object-contain"
          ></img>
        ))}
      </motion.div>
    </div>
  );
};

export default CompanyAd;
