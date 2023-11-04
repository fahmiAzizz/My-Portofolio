import React from 'react'
import Hero from '../assets/Hero.jpeg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {
    return (
        <div name="home" className=' pt-20 h-screen w-full bg-slate-50'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className=' p-8 md:p-0'>
                    <p className='px-1'>Hello i'am a</p>
                    <h1 className='text-3xl text-green-600  md:text-5xl font-bold mb-2'>Fullstack Website Developer</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptates quos illo nemo dolorem deleniti accusamus mollitia eius beatae minus!
                    </p>
                    <div>
                        <button className='group w-fit bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-lg flex justify-center items-center mt-2 hover:scale-105 hover:ring-green-700 hover:ring-2'>
                            My Profile
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