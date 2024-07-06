import React from 'react'
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/TextEffect';
import  Image  from 'next/image';
import {Glit} from './ui/Glit'
import MagicButton from './ui/MagicButton';
import { Navigation } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      Hero
      <div>
        <Spotlight className="-top-40 -left-10 md-left-32 md:-top-20 h-screen fill-white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] md-left-32 md:-top-20  fill-purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill-blue-400"/>
      </div>
      <div>
        <div className="h-screen  w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center
        absolute top-0 left-0 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        
      </p>
    </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web Magic With Next Js</h2>
            <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Your Vision, My Code: Creating Seamless Web Experiences"/>
            <h3 className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi, I&apos;m Kushank , A FrontEnd Developer based in India</h3>
            <div>
                {/* <Glit/> */}
            
        <Image className="border rounded-full"
        src="/IMG_0592.jpg" // Replace with the path to your image
        alt="Description of the image"
        width={250} // Set the width of the image
        height={330} // Set the height of the image
      />
            </div>
            <a className="mt-4 p-4" href="Kushank-Patil.pdf" download ><MagicButton title = "Resume"
            icon={<Navigation />}
            poistion='right'/></a>
            

        </div>

      </div>
      
    </div>
  )
}

export default Hero