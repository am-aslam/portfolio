import React from 'react'
import { 
    RxInstagramLogo,
    RxLinkedinLogo,
    RxGithubLogo,
    RxDiscordLogo,
    RxTwitterLogo 
} from "react-icons/rx";
import { FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full flex flex-wrap items-start justify-center gap-8">
                
                <div className="min-w-[200px] flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex items-center my-4 cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-2">Youtube</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-2">GitHub</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-2">Discord</span>
                    </p>
                </div>

                <div className="min-w-[200px] flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social-Media</div>
                    <p className="flex items-center my-4 cursor-pointer">
                        <RxInstagramLogo />
                        <span className="text-[15px] ml-2">Instagram</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-2">LinkedIn</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <FaWhatsapp />
                        <span className="text-[15px] ml-2">WhatsApp</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-2">Twitter</span>
                    </p>
                </div>

                <div className="min-w-[200px] flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex items-center my-4 cursor-pointer">
                        <span className="text-[15px] ml-2">Become Sponsor</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <span className="text-[15px] ml-2">Learn More</span>
                    </p>
                    <p className="flex items-center my-4 cursor-pointer">
                        <span className="text-[15px] ml-2">muhammedaslam.1363s@gmail.com</span>
                    </p>
                </div>

            </div>

            <div className="mt-8 text-[15px] text-center">
                &copy; AslamSadique 2025 Inc. All rights reserved
            </div>
        </div>        
    </div>
)
}

export default Footer
