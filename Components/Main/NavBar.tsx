import { Socials } from '../../constants/Index';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo_nav.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            AslamSadique
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-4 px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;