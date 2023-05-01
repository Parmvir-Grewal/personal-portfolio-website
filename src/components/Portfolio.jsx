import React from 'react'
import halton from "../assets/portfolio/haltonregion.jpg";
import calc from "../assets/portfolio/calc.png";
import etch from "../assets/portfolio/etch.jpg";
import library from "../assets/portfolio/library.png";
import aq from "../assets/portfolio/aq.jpg";
import bc from "../assets/portfolio/bc.jpg";
import paint from "../assets/portfolio/paint.png";
import chess from "../assets/portfolio/chess.png";
import terminal from "../assets/portfolio/terminal.png";
import personal from "../assets/portfolio/personal.png";
import { TbView360 } from "react-icons/tb";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    AOS.init();
    const portfolios = [
        {
            id: 1,
            src: aq,
            title:'Air Quality Research Project',
            description:'This is a research project investigating air quality across 5 US states, collecting and analyzing data from over 1,000 air quality monitoring stations.',
            href:"https://github.com/Parmvir-Grewal/air-quality-research-project"
        },
        {
            id: 2,
            src: halton,
            title:'Urban Sprawl Research Project',
            description:'A research project on the impact of urban sprawl on Halton Regions demographics and physical environment, which was overseen by me.',
            href:"https://github.com/Parmvir-Grewal/urban-sprawl-research-project"
        },
        {
            id: 3,
            src: bc,
            title:'Hospital Accessibility Research Project',
            description:'A look at hospital accessibility in northern British Columbia, using GIS to develop a comprehensive understanding of the regions healthcare access challenges.',
            href:"https://github.com/Parmvir-Grewal/hospital-accessibility-research-project"
        },
        {
            id: 4,
            src: terminal,
            title:'Linux Shell',
            description:'This is a fully functional shell implemented in C, with a wide range of features and functionalities. ',
            href:"https://github.com/Parmvir-Grewal/linux-shell"
        },
        {
            id: 5,
            src: personal,
            title:'Personal Website',
            description:'This is my personal portfolio website that showcases my web development projects and skills.',
            href:"https://github.com/Parmvir-Grewal/personal-website"
            
        }, 
        {
            id: 6,
            src: chess,
            title:' Chess',
            description:'This is a Java implementation of the classic game of chess, coded entirely by me. The game has a graphical user interface (GUI).',
            href:"https://github.com/Parmvir-Grewal/chess-game"
            
        },
        {
            id: 7,
            src: calc,
            title:'Calculator',
            description:'Replica of Apples Calculator app, created using HTML, CSS, and JavaScript.',
            href:"https://github.com/Parmvir-Grewal/calculator"
        },
        {
            id: 8,
            src: paint,
            title:'Paint',
            description:'This is a basic paint program that was created as a simplified version of Microsoft Paint.',
            href:"https://github.com/Parmvir-Grewal/paint"
            
        },
        {
            id: 9,
            src: etch,
            title:'Etch A Sketch',
            description:'This is a digital version of the classic Etch-A-Sketch toy, created using HTML, CSS, and JavaScript.',
            href:"https://github.com/Parmvir-Grewal/etch-a-sketch"
        },
        {
            id: 10,
            src: library,
            title:'Library',
            description:'This is a book tracker web application created using HTML, CSS, and JavaScript.',
            href:"https://github.com/Parmvir-Grewal/library"
        },  
        
    ]
  return (
    <div name="portfolio" className="bg-slate-900 w-full h-screen sm:h-fit">
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full h-full sm:h-fit">
            <div className="pb-8" >
                <p className="text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200">Portfolio</p>
                <p className='py-6 text-md text-slate-400'>Check out on some my projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 px-12 sm:mb-0 mb-20 sm:px-0 overflow-auto' data-aos='fade-up'>

            {
                portfolios.map(({id, src, title, description, href}) => (
                    <div key={id} class="max-w-sm border border-slate-700 rounded-lg shadow bg-slate-800 backdrop-blur-md bg-slate-800/60  relative" >
                   
                        <img class="rounded-t-lg" src={src} alt="" width='px'/>
                   
                    <div class="p-5">
                        
                            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-slate-200">{title}</h5>
                   
                        <p class="mb-12 font-normal  text-slate-400">{description}</p>
                        <a href={href} target='_blank' 
                rel="noreferrer" download={true} class="group  bg-slate-800 backdrop-blur-md bg-slate-800/60 inline-flex items-center p-3 text-sm font-medium text-center text-slate-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white rounded-3xl hover:scale-105 duration-200  cursor-pointer absolute bottom-3">
                            View Project
                            <TbView360 size={19} className='ml-1 group-hover:rotate-90 duration-200'/>
                        </a>
                    </div>
                </div>
            

                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio