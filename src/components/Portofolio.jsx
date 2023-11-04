import React from 'react'
import Hero from '../assets/Hero.jpeg'
import Project1 from '../assets/project1.png'
import { AiOutlineGithub } from 'react-icons/ai'

const Portofolio = () => {
    return (
        <div className='w-full  text-slate-800 h-auto bg-slate-50'>
            <div className='p-6 max-w-screen-lg  mx-auto justify-center h-auto flex flex-col'>
                <div>
                    <p className='text-center  text-3xl  border-gray-800 font-semibold'>Portofolio</p>
                </div>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='border border-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-200 '>
                        <img src={Project1} alt="" className='w-full h-56' />
                        <p className=' border-b-2 border-slate-300 p-2 text-center'>Wheather App</p>
                        <div className='flex flex-row items-center justify-center  py-2'>
                            <button className='w-2/3 hover:scale-105 duration-300'>
                                Demo
                            </button>
                            <div className='w-1/2 hover:scale-105 duration-300'>
                                <button className='flex items-center'>
                                    <a href="https://github.com/fahmiAzizz/crud_nextjs" target="_blank">Code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border border-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-200 '>
                        <img src={Project1} alt="" className='w-full h-56' />
                        <p className=' border-b-2 border-slate-300 p-2 text-center'>Wheather App</p>
                        <div className='flex flex-row items-center justify-center  py-2'>
                            <button className='w-2/3 hover:scale-105 duration-300'>
                                Demo
                            </button>
                            <div className='w-1/2 hover:scale-105 duration-300'>
                                <button className='flex items-center'>
                                    <a href="https://github.com/fahmiAzizz/crud_nextjs" target="_blank">Code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='border border-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-200 '>
                        <img src={Project1} alt="" className='w-full h-56' />
                        <p className=' border-b-2 border-slate-300 p-2 text-center'>Wheather App</p>
                        <div className='flex flex-row items-center justify-center  py-2'>
                            <button className='w-2/3 hover:scale-105 duration-300'>
                                Demo
                            </button>
                            <div className='w-1/2 hover:scale-105 duration-300'>
                                <button className='flex items-center'>
                                    <a href="https://github.com/fahmiAzizz/crud_nextjs" target="_blank">Code</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio