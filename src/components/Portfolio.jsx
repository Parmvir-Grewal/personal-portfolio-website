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
import { HiArrowRight } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
    AOS.init();
    const portfolios = [
        {
            id: 1,
            src: aq,
            title:'Air Quality Research Project',
            description:'This is a research project investigating air quality across 5 US states, collecting and analyzing data from over 1,000 air quality monitoring stations. The project was led by me and my team, and involved advanced spatial analysis using IDW Interpolation, Kriging, Cluster Analysis, Empirical Variograms, and the Skater Algorithms on 2013 US EPA air pollution data to identify significant factors impacting ozone formation.',
            href:"https://github.com/Parmvir-Grewal/air-quality-research-project"
        },
        {
            id: 2,
            src: halton,
            title:'Urban Sprawl Research Project',
            description:'A research project on the impact of urban sprawl on Halton Regions demographics and physical environment, which was overseen by me. Our project utilized a multi-faceted approach, combining satellite imagery, spatial and non-spatial data, and advanced analytical tools to develop a detailed understanding of the effects of urban sprawl.',
            href:"https://github.com/Parmvir-Grewal/urban-sprawl-research-project"
        },
        {
            id: 3,
            src: bc,
            title:'Hospital Accessibility Research Project',
            description:'A look at hospital accessibility in northern British Columbia, which utilized geospatial tools, route files, network data sets, and census data to develop a comprehensive understanding of the regions healthcare access challenges. The project was led by me and aimed to identify areas of the region with the greatest unmet healthcare needs, in order to push for the development of new healthcare facilities.',
            href:"https://github.com/Parmvir-Grewal/hospital-accessibility-research-project"
        },
        {
            id: 4,
            src: terminal,
            title:'Fully Functional Linux Shell',
            description:'This is a fully functional shell implemented in C, with a wide range of features and functionalities. It includes dynamic memory allocation for variable storage and error handling, as well as advanced features such as recursive file traversal, background processing, and multi-connection server capabilities.',
            href:"https://github.com/Parmvir-Grewal/linux-shell"
        },
        {
            id: 5,
            src: chess,
            title:' Chess',
            description:'This is a Java implementation of the classic game of chess, coded entirely by me. The game has a graphical user interface (GUI) and allows two players to play against each other, on the same computer.',
            href:"https://github.com/Parmvir-Grewal/chess-game"
            
        },
        {
            id: 6,
            src: calc,
            title:'Calculator',
            description:'Replica of Apples Calculator app, created using HTML, CSS, and JavaScript. The project was inspired by Apples sleek and minimalist design, and involved recreating the apps functionality and user interface.',
            href:"https://github.com/Parmvir-Grewal/calculator"
        },
        {
            id: 7,
            src: paint,
            title:'Paint',
            description:'This is a basic paint program that was created as a simplified version of Microsoft Paint. It is designed to be easy to use and to provide the basic functionality that most users would need for simple image editing.',
            href:"https://github.com/Parmvir-Grewal/paint"
            
        },
        {
            id: 8,
            src: etch,
            title:'Etch A Sketch',
            description:'This is a digital version of the classic Etch-A-Sketch toy, created using HTML, CSS, and JavaScript. The project was inspired by the fun and nostalgia of the original toy, and involved recreating its unique drawing mechanism and user interface.',
            href:"https://github.com/Parmvir-Grewal/etch-a-sketch"
        },
        {
            id: 9,
            src: library,
            title:'Library',
            description:'This is a book tracker web application created using HTML, CSS, and JavaScript. The project allows you to track the books in your library, recording important information such as the books title, author, number of pages, and whether or not you have read the book.',
            href:"https://github.com/Parmvir-Grewal/library"
            
        }  
    ]
  return (
    <div name="portfolio" className="bg-slate-900 w-full ">
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pb-8" >
                <p className="text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200 px-1 py-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-lg duration-200">Portfolio</p>
                <p className='py-6 text-md text-slate-400'>Check out on some my projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 px-12 sm:mb-0 mb-20 sm:px-0' data-aos='fade-up'>

            {
                portfolios.map(({id, src, title, description, href}) => (
                    <div key={id} class="max-w-sm border border-slate-700 rounded-lg shadow bg-slate-800 hover:scale-105 duration-200 relative" >
                   
                        <img class="rounded-t-lg" src={src} alt="" />
                   
                    <div class="p-5">
                        
                            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-slate-200">{title}</h5>
                   
                        <p class="mb-10 font-normal  text-gray-400">{description}</p>
                        <a href={href} target='_blank' 
                rel="noreferrer" download={true} class="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer absolute bottom-0 mb-3">
                            View Project
                            <HiArrowRight size={15} className='ml-1 group-hover:rotate-90 duration-200'/>
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