import React from 'react'
import Hero from '../assets/Hero.jpeg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
    return (
        <div id="home" className='pt-20 md:pt-0 h-screen w-full bg-slate-50 text-slate-800 
        dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 
        dark:to-slate-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className=' p-2 md:p-0'>
                    <p className='px-1 text-lg font-semibold'>Hello i'am a</p>
                    <h1 className=' text-green-500  text-4xl md:text-6xl font-bold mb-2'>Fullstack Website Developer</h1>
                    <p className=' italic'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptates quos illo nemo dolorem deleniti accusamus mollitia eius beatae minus!
                    </p>
                    <div>
                        <button onClick={'#portofolio'} className='group w-fit bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg flex justify-center items-center mt-2 hover:scale-105 hover:ring-green-700 hover:ring-2'>
                            <a href="#portofolio">My Work</a>
                            <span className='pl-2 group-hover:rotate-90 duration-300'><AiOutlineArrowRight /></span>
                        </button>
                    </div>
                </div>
                <div className='mt-2 md:mt-0'>
                    <img src={Hero} className=' w-2/3 rounded-3xl mx-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home