import React from 'react';
import SkillDataProvider from '@/components/sub/SkillDataProvider';
import SkillText from '@/components/sub/SkillText';
import { Skills_L1, Skills_L2 } from '@/constants/index';

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20' style={{transform: "scale(0.9)"}}
        >
            <SkillText />
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skills_L1.map((image, index) => (
                    <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
                ))}
            </div>

            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skills_L2.map((image, index) => (
                    <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
                ))}
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video 
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>


        </section>
    )
}

export default Skills;