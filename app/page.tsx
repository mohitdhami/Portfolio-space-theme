import Hero from "@/components/main/Hero";
import Image from 'next/image'
import Skills from "@/components/main/Skills"
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flow flex-col gap-20'>
        <Hero />
        <Projects />
        <Skills />
        {/* <Encryption /> */}
      </div>
    </main>
  )
}
