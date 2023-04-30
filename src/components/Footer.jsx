import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  AOS.init();
  const links = [
    {
        id: 1,
        child: (
            <>
                 <FaLinkedin size={27}/>
            </>
        ),
        href: 'https://www.linkedin.com/in/parmvir-grewall/',
    },
    {
        id: 2,
        child: (
            <>
                 <FaGithub size={27}/>
            </>
        ),
        href: 'https://github.com/Parmvir-Grewal',
    },
]
  return (
    
    <footer class="p-4 shadow hidden 2xl:block bg-slate-900 border-t-2 border-slate-800" >
    
    <div class="px-4 py-1 flex items-center justify-between">
        <span class="text-md text-slate-500 sm:text-center" >© 2023 Parmvir Grewal. All Rights Reserved.
        </span>
        <div class="flex sm:justify-center">
        {links.map(({id, child, href, download}) => (
        <a key={id} href={href} 
                className="flex justify-between items-center text-slate-500 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-lg hover:scale-105 duration-200 p-2 mx-2" 
                download={download} 
                target='_blank' 
                rel="noreferrer"
                >
                    {child}
        </a>
                    ))}

        </div>
      </div>
    </footer>
   

  )
}

export default Footer