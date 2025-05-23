import React, { useEffect, useRef } from 'react'
import { BiLogoGmail, BiLogoWhatsapp, BiLogoLinkedinSquare } from "react-icons/bi"
import { motion, useInView, useAnimation } from 'framer-motion'

const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref} id="home" className='pt-20 md:pt-0 h-screen w-full bg-slate-50 text-slate-800 
        dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 
        dark:to-slate-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <motion.div
                    className=' p-2 md:p-0'
                    variants={{
                        hidden: { opacity: 0, y: -200 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.25 }}
                >
                    <p className='px-1 text-3xl md:text-6xl font-bold text-center'>Hello i'am <span className='text-green-500 '>Fahmi Aziz</span></p>
                    {/* <h1 className=' text-green-500  text-4xl md:text-6xl font-bold mb-2'>Fullstack Website Developer</h1> */}
                    <div className='text-center'>
                        <p className='text-md md:text-xl'>I am a fullstack website developer, I can create websites with good and responsive design, I am also used to working with databases</p>
                    </div>
                    <div className='flex justify-center p-3 gap-5'>
                        <a href="mailto:fahmiaziz031102@gmail.com" target='_blank' className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoGmail size={20} className='m-2' /></a>
                        <a href="https://www.linkedin.com/in/fahmi-aziz-463640272/" target='_blank' className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoLinkedinSquare size={20} className='m-2' /></a>
                        <a href="https://wa.me/6283896373574" target='_blank' className='border border-slate-700 dark:border-white hover:scale-110 duration-300 rounded-full'><BiLogoWhatsapp size={20} className='m-2' /></a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home