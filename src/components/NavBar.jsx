import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'
import logo from '../assets/logo1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  AOS.init();
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-slate-900 fixed z-10 ">
        <div data-aos="fade-up">
            <img src={logo} alt="" width='47px' className="rounded-md"  />
        </div>
        <ul className="hidden md:flex">
          {links.map(({id, link})=> (
            <li key={id} className=" cursor-pointer capitalize font-medium text-slate-400"> <Link to={link} smooth duration={500} className='px-4 py-3 mx-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-lg hover:scale-105 duration-200' data-aos="fade-up">{link}</Link></li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="px-4 cursor-pointer py-3 z-10 text-slate-400 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-lg hover:scale-105 duration-200 md:hidden" data-aos="fade-up">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>

        {nav && (
          <ul className="flex flex-col
          justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-900 text-slate-400">
           {links.map(({id, link})=> (
             <li key={id} className="cursor-pointer capitalize py-3 m-4 text-4xl" data-aos="fade-up">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500} className='px-4 py-3 mx-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-lg hover:scale-105 duration-200'>{link}</Link>
              </li>
           ))}
         </ul>
        )}
    </div>
  );
};

export default NavBar;