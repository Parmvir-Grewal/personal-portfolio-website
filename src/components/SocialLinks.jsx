import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephoneOutbound} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SocialLinks = () => {
    AOS.init();
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={32}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/parmvir-grewall/',
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={32}/>
                </>
            ),
            href: 'https://github.com/Parmvir-Grewal',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={32}/>
                </>
            ),
            href: 'mailto:parmg100@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Call <BsTelephoneOutbound size={32}/>
                </>
            ),
            href: 'tel:647-545-1647',
            style: "rounded-br-md",
        }
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style, }) => (
                <li key={id} className={`flex justify-between items-center w-40 h-16 px-4 ml-[-100px] hover:ml-[-10px] ${style} hover:rounded-md duration-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 bg-slate-800 backdrop-blur-md bg-slate-800/60 bg-blur`} >
                <a href={href} 
                className="flex justify-between items-center w-full text-slate-300" 
                target='_blank' 
                rel="noreferrer"
                data-aos="fade-right">
                    {child}
                </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks