import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute insert-0
        top-[120px] max-w-7xl mx-auto flex flex-row
        items-start gap-5`}>

          <div className='flex flex-col justify-center mt-5'>
              <div className='w-5 h- rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-89 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} 
            text-white`}>Hi , I'm <span className='text-[#915eff]'>Utkarsh</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100
            `}>
              I develop user interfaces and web applications.
            </p>
          </div>
        </div>

        <ComputersCanvas />

    </section>
  )
}

export default Hero