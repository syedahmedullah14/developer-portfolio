import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect, TextGenerateEffectDemo } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div>
        <div className='pb-20 pt-36'>
             <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
             <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
             <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
            absolute top-0 left-0 flex items-center justify-center ">
        
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Dynamic Web Magic with Next.js
                </p>
                <TextGenerateEffect 
                    words="Transforming Concepts into Seamless User Experiences"
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                />
            </div>
        </div>

    </div>
  )
}

export default Hero