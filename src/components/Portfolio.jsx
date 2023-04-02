import React from 'react'
import arrayDestruct from "../assets/portfolio/gis.jpeg";
import halton from "../assets/portfolio/haltonregion.jpg";
import { HiArrowRight } from "react-icons/hi";


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: halton,
            title:'GIS and Remote Sensing Integration Project',
            description:'Conducted a comprehensive group research project on the impact of urban sprawl on Halton Regions demographics and physical environment.',
            href:"/GISandRemoteSensingIntegrationProject.zip"
        },
        {
            id: 2,
            src: arrayDestruct
        },
        {
            id: 3,
            src: arrayDestruct
        },
        {
            id: 4,
            src: arrayDestruct
        },
        {
            id: 5,
            src: arrayDestruct
        },
        {
            id: 6,
            src: arrayDestruct
        },
    ]
  return (
    <div name="portfolio" className="bg-slate-900 w-full md:h-screen">
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200 px-1 py-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-lg duration-200">Portfolio</p>
                <p className='py-6 text-md text-slate-400'>Check out on some my projects I've worked on</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 px-12 sm:mb-0 mb-20 sm:px-0'>

            {
                portfolios.map(({id, src, title, description, href}) => (
                    <div key={id} class="max-w-sm border border-slate-700 rounded-lg shadow bg-slate-800 hover:scale-105 duration-200">
                   
                        <img class="rounded-t-lg" src={src} alt="" />
                   
                    <div class="p-5">
                        
                            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-slate-200">{title}</h5>
                   
                        <p class="mb-3 font-normal  text-gray-400">{description}</p>
                        <a href={href} target='_blank' 
                rel="noreferrer" download={true} class="group inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
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