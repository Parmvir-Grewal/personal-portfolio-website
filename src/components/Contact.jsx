import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    AOS.init();
    return (
        <div name='contact' className='w-full  bg-slate-900 p-4 h-screen'>
            <div className='flex flex-col p-4 justify-center max-w-7xl mx-auto mb-16 h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200' data-aos='fade-up'>Contact</p>
                    <p className='py-6 text-md text-slate-400' data-aos='fade-up'>Submit the form below if you would like to get in touch with me!</p>
                </div>
                <div className='flex justify-center items-center' >
                    <form action="https://getform.io/f/a956fcc9-3aa4-476e-a3cc-60d257c73ab2" method="POST" className='flex flex-col w-full md:w-1/2' >
                        <input type="text" name='email' placeholder='Enter your email' required className='border text-white text-md rounded-lg p-4 bg-slate-800 backdrop-blur-md bg-slate-800/30 border-slate-700 placeholder-slate-400' data-aos='fade-up'/>
                        <input type="text" name='name' placeholder='Enter your name' required className='my-4 border text-white text-md rounded-lg p-4 bg-slate-800 backdrop-blur-md bg-slate-800/30 border-slate-700 placeholder-slate-400' data-aos='fade-up'/>
                        <textarea name="message" rows="10" placeholder='Enter your message' required className='border v text-md rounded-lg p-4 bg-slate-800 backdrop-blur-md bg-slate-800/30 border-slate-700 placeholder-slate-400' data-aos='fade-up'></textarea>
                        <button className='bg-slate-800 backdrop-blur-md bg-slate-800/60 text-slate-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white  hover:scale-105 duration-200 rounded-3xl mx-auto flex items-center p-4 m-5' data-aos='fade-up'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact