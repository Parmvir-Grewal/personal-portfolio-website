import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import arcgis from "../assets/arcgis.png";
import erdas from "../assets/erdas.png";
import arcgispro from "../assets/arcgispro.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  AOS.init();
    const techs = [
        {
            id: 1,
            src: python,
            title: "Python",
        },
        {
            id: 2,
            src: java,
            title: "Java",
        },
        {
            id: 3,
            src: c,
            title: "C",
        },
        {
          id: 4,
          src: html,
          title: "HTML",
        },
        {
          id: 5,
          src: css,
          title: "CSS",
        },
        {
          id: 6,
          src: javascript,
          title: "JavaScript",
        },
        {
          id: 7,
          src: reactImage,
          title: "React",
        },
        {
          id: 8,
          src: tailwind,
          title: "Tailwind",
        },
        {
          id: 9,
          src: github,
          title: "GitHub",
        },
        {
            id: 10,
            src: arcgis,
            title: "ArcGIS",
          },
          {
            id: 11,
            src: arcgispro,
            title: "ArcGIS Pro",
          },
          {
            id: 12,
            src: erdas,
            title: "ERDAS Imagine",
          },
      ];
  return (
    <div name='experience' className='bg-slate-900 w-full'>
        <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full '>
            <div className='mt-20'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200'>Experience</p>
                <p className='py-6 text-md text-slate-400'>Prominent coding languages and softwares I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' data-aos='fade-up'>
            {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className='bg-slate-800 backdrop-blur-md bg-slate-800/30 hover:scale-105 duration-200 py-3 rounded-lg border border-slate-700 '
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-slate-400 font-semibold">{title}</p>
            </div>
          ))}
               
            </div>
        </div>
        
    </div>
  )
}

export default Experience