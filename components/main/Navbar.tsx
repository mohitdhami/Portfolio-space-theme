import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
    return ( 
        <div className="w-full h-[65px] fixed top-0 shadow-lg [#2A0EGI] bg-[#3001417] backdrop-blur-md z-50 px-10 flex flex-row items-center justify-between font-bold">
            
            <a href="about-me" className="h-auto w-auto mx-8 mt-2 text-white font-5xl line-clamp-1 align-middle">
               Mohit Singh Dhami
            </a>

            <div className="w-[500px] h-full flex flex-row items-center justify-between ml-5 md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#030015e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"
                >
                <a href="#about-me" className="cursor-pointer">Home</a>
                <a href="#projects" className="cursor-pointer">Projects</a>
                <a href="#skills" className="cursor-pointer">Skills</a>
                <a href="#blogs" className="cursor-pointer">Blogs</a>
            
                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>
                </div>
            </div>

            <div className="h-auto border border-[#7042f861] bg-[#030015e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a>Connect</a>
            </div>
        </div>
     );
}
 
export default Navbar;