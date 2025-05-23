'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '../../util/motion';
import Image from 'next/image';

const Encription = () => {
  return (
    <div className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full p-4">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '} & {' '}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center md:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] translate-y-3 md:translate-y-5 transition-all duration-200 group-hover:translate-y-8 md:group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 w-[60px] md:w-[70px]"
          />
        </div>

        <div className="Welcome-box px-3 py-1 z-[20] border my-5 border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[10px] md:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-5 px-2">
        <div className="cursive text-[16px] md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto object-cover"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};
export default Encription;