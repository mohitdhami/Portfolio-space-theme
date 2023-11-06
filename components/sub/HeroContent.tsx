'use client';

import React from "react";
import {motion} from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
    return ( 
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center ml-12 mr-5 m-auto text-start">

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                    Providing
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the    best</span> project experience
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Developer with experience in website, mobile, and software development. check out my projects and skills.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex flex-col justify-center items-center mb-20 ml-12"
            >
                <Image
                    src="/profile-pic.png"
                    alt="work icons"
                    height={200}
                    width={200} 
                />
               <motion.p
               variants={slideInFromLeft(0.8)}
               className="text-transparent text-xl font-bold mt-3 bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
               >
                Mohit Singh Dhami
               </motion.p> 

               <motion.p
               variants={slideInFromLeft(0.8)}
               className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
               >
            Aspiring Software Engineer
               </motion.p> 
            </motion.div>

        </motion.div>
     )
}
 
export default HeroContent;