import React from 'react'
import { BiLogoGmail, BiLogoWhatsapp, BiLogoLinkedinSquare } from "react-icons/bi"

const Home = () => {
    return (
        <div id="home" className='pt-20 md:pt-0 h-screen w-full bg-slate-50 text-slate-800 
        dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 
        dark:to-slate-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className=' p-2 md:p-0'>
                    <p className='px-1 text-4xl md:text-6xl font-bold text-center'>Hello i'am <span className='text-green-500'>Fahmi Aziz</span></p>
                    {/* <h1 className=' text-green-500  text-4xl md:text-6xl font-bold mb-2'>Fullstack Website Developer</h1> */}
                    <div className='text-center'>
                        <p className=''>
                            elit. Quaerat voluptates quos illo nemo dolorem deleniti accusamus mollitia eius beatae minus!
                        </p>
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex justify-center p-3 gap-5'>
                        <a href="" className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoGmail size={20} className='m-2' /></a>
                        <a href="" className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoLinkedinSquare size={20} className='m-2' /></a>
                        <a href="" className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoWhatsapp size={20} className='m-2' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home