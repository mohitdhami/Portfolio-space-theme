import React from "react";
import ProjectCard from '@/components/sub/ProjectCard';

const Projects = () => {
    return ( 
        <div id="projects" className="flex flex-col items-center justify-center py-20">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap">
                <ProjectCard 
                    src="https://user-images.githubusercontent.com/38837994/280518364-6e6b2da4-c9f1-4ba3-94a2-877739a82238.JPG"
                    title="Notewise"
                    description="Repository for your Notes"
                />
                <ProjectCard 
                    src=""
                    title="Relay"
                    description="connect anyone with fun"
                />
                <ProjectCard 
                    src=""
                    title="Chat App"
                    description="Repository for your Notes"
                />
                <ProjectCard 
                    src=""
                    title="Canteen Managment System"
                    description="C++ CLI App for CMS"
                />

                <ProjectCard
                    src=""
                    title="Tetris Game"
                    description="Classic Tetris Game made using C++ and RayLib"
                />

                <ProjectCard 
                    src=""
                    title="NetClock"
                    description="Time related features like stopwatch, timer and IP based Clock"
                />

            </div>
        </div>
     );
}

export default Projects;