import React from 'react'
import logo from '../assets/logo.png'
import {AiOutlineCloudDownload} from 'react-icons/ai';

function Header() {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900">
    <div data-aos="fade-up">
        <img src={logo} alt="" width='50px'  />
    </div>
    <li className='flex text-white w-fit px-3 py-3 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200' >
                <a href='/Parmvir_Grewal_Resume.pdf'
                className="flex justify-between items-center w-full text-slate-300" 
                download={true}
                target='_blank' 
                rel="noreferrer">
                    <span className="hidden md:block pr-2">Resume/CV</span> <AiOutlineCloudDownload size={25}/>
                </a>
                </li>
    </div>
  )
}

export default Header