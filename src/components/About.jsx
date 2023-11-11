import React from 'react'
import Hero from '../assets/Hero.jpeg'

const About = () => {
    return (
        <div id='about' className='w-full h-screen dark:text-slate-100 dark:bg-gradient-to-b dark:to-slate-800 
        dark:from-slate-900 text-slate-800 bg-slate-200'>
            <div className='w-full h-full justify-center items-end md:items-center p-6 max-w-screen-lg mx-auto grid md:grid-cols-2'>
                <div className='mt-2  md:mt-0'>
                    <img src={Hero} className=' w-2/3 rounded-3xl mx-auto' alt="" />
                </div>
                <div className='m-2'>
                    <h1 className='text-2xl font-semibold'>About Me</h1>
                    <div className='py-4'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit porro quod nemo vel ducimus quasi corporis, vitae id exercitationem officia dolore reiciendis perspiciatis, dignissimos deserunt, cum nam! Nam, voluptas unde?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur molestiae vel quisquam vitae ducimus voluptas corporis, optio provident deleniti.</p>
                    </div>
                    <button className='bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-2 text-white hover:scale-105 duration-300 hover:ring-green-700 hover:ring-2'><a href="#contact">Contact Me</a> </button>
                </div>
            </div>
        </div>
    )
}

export default About