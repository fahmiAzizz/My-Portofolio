import React, { useEffect, useRef } from 'react'
import css from '../assets/logo/css.png'
import express from '../assets/logo/express.png'
import html from '../assets/logo/html.png'
import js from '../assets/logo/js.png'
import nodejs from '../assets/logo/nodejs.png'
import react from '../assets/logo/react.png'
import ts from '../assets/logo/ts.png'
import php from '../assets/logo/php2.png'
import rabbitmq from '../assets/logo/rabbitmq1.png'
import tailwind from '../assets/logo/tailwind.png'
import postgresql from '../assets/logo/postgresql.png'
import mysql from '../assets/logo/mysql2.png'
import { motion, useInView, useAnimation } from 'framer-motion'

const Experience = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const logos = [
        { id: 1, img: html, name: 'HTML', color: 'orange' },
        { id: 2, img: css, name: 'CSS', color: 'blue' },
        { id: 3, img: js, name: 'Javascript', color: 'yellow' },
        { id: 4, img: react, name: 'React JS', color: 'blue' },
        { id: 5, img: tailwind, name: 'Tailwind CSS', color: 'blue' },
        { id: 6, img: nodejs, name: 'Node JS', color: 'green' },
        { id: 7, img: express, name: 'Express JS', color: 'purple' },
        { id: 8, img: ts, name: 'Typescript', color: 'purple' },
        { id: 9, img: php, name: 'PHP', color: 'purple' },
        { id: 10, img: mysql, name: 'Mysql', color: 'orange' },
        { id: 11, img: postgresql, name: 'Postgresql', color: 'orange' },
        { id: 12, img: rabbitmq, name: 'Rabbit MQ', color: 'orange' },
    ];

    return (
        <div id="experience" className='w-full py-20 text-black bg-slate-200 dark:text-slate-100 dark:bg-slate-900'>
            <div className='h-full justify-center p-6 max-w-screen-lg mx-auto flex flex-col'>
                <div>
                    <p className='text-3xl text-center font-semibold mb-2'>Experience</p>
                </div>
                <br />
                <div ref={ref} className='grid grid-cols-2 md:grid-cols-3 md:gap-8 justify-items-center'>
                    {logos.map(logo => (
                        <motion.div
                            key={logo.id}
                            className='hover:scale-110 px-12 py-4 duration-200'
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial='hidden'
                            animate={mainControls}
                            transition={{ duration: 2, delay: 0.25 }}
                        >
                            <img
                                src={logo.img}
                                alt={logo.name}
                                className='w-28 h-28 object-contain mx-auto'
                            />
                            <p className='text-center py-2 font-semibold'>{logo.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
