import React, { useEffect, useRef } from 'react'
import Hero from '../assets/Hero.jpeg'
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {
    const about = useRef(null);
    const isInView = useInView(about, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])
    return (
        <div
            id='about'
            className='w-full h-screen dark:text-slate-100 dark:bg-gradient-to-b dark:to-slate-800 
            dark:from-slate-900 text-slate-800 bg-slate-200 mb-1'>
            <div
                className='w-full h-full justify-center items-end md:items-center p-6 max-w-screen-lg mx-auto grid md:grid-cols-2'>
                <motion.div
                    ref={about}
                    className='mt-2 md:mt-0'
                    variants={{
                        hidden: { opacity: 0, x: -205 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 3, delay: 0.25 }}>
                    <img
                        src={Hero}
                        className='w-2/3 rounded-3xl mx-auto'
                        alt=""
                    />
                </motion.div>
                <motion.div
                    className='m-2'
                    variants={{
                        hidden: { opacity: 0, x: -205 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 3, delay: 0.25 }}>
                    <h1 className='text-2xl font-semibold'>About Me</h1>
                    <div className='py-4'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    </div>
                    <button
                        className='bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-2 text-white hover:scale-105 duration-300 hover:ring-green-700 hover:ring-2'>
                        <a href="#contact">Contact Me</a>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;