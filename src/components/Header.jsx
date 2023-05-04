import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineCloudDownload } from 'react-icons/ai';

function Header() {
  return (
    <div name="header" className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900">

      <div data-aos="fade-up">
        <img src={logo} alt="" width='50px' />
      </div>
      <div className='text-white bg-slate-800 backdrop-blur-md bg-slate-800/60 z-10 rounded-3xl w-fit' data-aos="fade-up">
        <li className='flex w-fit ' >
          <a href='/Parmvir_Grewal_Resume.pdf'
            className="flex justify-between items-center w-full text-slate-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white  hover:scale-105 duration-200 rounded-3xl py-3 px-4"
            download={true}
            target='_blank'
            rel="noreferrer">
            <span className="pr-2">Resume/CV</span> <AiOutlineCloudDownload size={25} />
          </a>
        </li>
      </div>

    </div>
  )
}

export default Header