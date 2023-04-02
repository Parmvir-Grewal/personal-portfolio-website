import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-slate-900 p-4'>
        <div className='flex flex-col p-4 justify-center max-w-7xl mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-400 text-slate-200 px-1 py-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:rounded-lg duration-200'>Contact</p>
                <p className='py-6 text-md text-slate-400'>Submit the form below if you would like to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/a956fcc9-3aa4-476e-a3cc-60d257c73ab2" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='email' placeholder='Enter your email' className='border text-white text-md rounded-lg p-4 bg-slate-800 border-slate-700 placeholder-slate-400'/>
                    <input type="text" name='name' placeholder='Enter your name' className='my-4 border text-white text-md rounded-lg p-4 bg-slate-800 border-slate-700 placeholder-slate-400'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='border v text-md rounded-lg p-4 bg-slate-800 border-slate-700 placeholder-slate-400'></textarea>
                    <button className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto flex items-center rounded-md hover:scale-105 duration-200'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact