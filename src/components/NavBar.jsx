import React from "react";
import {Link} from 'react-scroll'
import AOS from 'aos';
import {AiOutlineHome, AiFillFolderOpen, AiFillEdit, AiOutlineAudit, AiOutlineBulb} from 'react-icons/ai';
import 'aos/dist/aos.css';



const NavBar = () => {
  AOS.init();
  const links = [
    {
      id: 1,
      link: "home",
      child: (
        <>
            <AiOutlineHome size={30}/> <span className="hidden md:block pl-4" >Home</span>
        </>
    ),
    },
    {
      id: 2,
      link: "about",
      child: (
        <>
            <AiOutlineBulb size={30}/><span className="hidden md:block pl-4" >About</span>
        </>
    ),
    },
    {
      id: 3,
      link: 'portfolio',
      child: (
        <>
            <AiFillFolderOpen size={30}/><span className="hidden md:block pl-4" >Portfolio</span>
        </>
    ),
    },
    {
      id: 4,
      link: "experience",
      child: (
        <>
            <AiFillEdit size={30}/><span className="hidden md:block pl-4" >Experience</span>
        </>
    ),
    },
    {
      id: 5,
      link: 'contact',
      child: (
        <>
            <AiOutlineAudit size={30}/><span className=" hidden md:block pl-4" >Contact</span>
        </>
    ),
    },
  ];
  return (
    <div id="#nav" className="w-full  fixed bottom-0 z-10">
      <div className="flex justify-center items-center h-20 mb-5 mx-auto text-white bg-slate-800 bg-blur opacity-90 z-10 rounded-3xl w-fit" data-aos='fade-up' data-aos-anchor="#home">
      <ul className="flex mx-2">
          {links.map(({id, link, child, name})=> (
            <li key={id} className=" cursor-pointer text-slate-400"> <Link to={link} smooth duration={500} className="flex justify-between items-center text-slate-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-lg hover:scale-105 duration-200 p-3 mx-2">{child}{name}</Link></li>
          ))}
        </ul>
      </div>
      
    </div>
    
  );
  
};

export default NavBar;