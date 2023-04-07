import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
  return (
    <div name="home" className='h-screen w-full bg-slate-900 text-white'>
        <div className='max-w-screen-2xl mx-auto flex flex-col items-center
         justify-center h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center items-center h-full w-5/6'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-3 max-w-lg text-3xl' data-aos='fade-up'>Hi, my name is</p>
                <h2 className='text-slate-300 text-4xl sm:text-7xl font-bold' data-aos='fade-up'>
                Parmvir Grewal
                </h2>
                <h2 className='text-slate-400 text-center text-4xl sm:text-7xl py-2 font-light' data-aos='fade-up'>
                <Typewriter 
                  options={{
                    strings: ["GIS / CS Specialist"],
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    pauseFor: 800,	
                  }}
                />
                </h2>
                
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200' data-aos='fade-up'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-200'> 
                            <HiArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>

    
  )
  
}

export default Home