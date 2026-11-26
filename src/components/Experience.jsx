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

    const categories = [
        {
            label: 'Frontend',
            items: [
                { id: 1, img: html, name: 'HTML' },
                { id: 2, img: css, name: 'CSS' },
                { id: 3, img: js, name: 'Javascript' },
                { id: 4, img: react, name: 'React JS' },
                { id: 5, img: tailwind, name: 'Tailwind CSS' },
            ]
        },
        {
            label: 'Backend',
            items: [
                { id: 6, img: nodejs, name: 'Node JS' },
                { id: 7, img: express, name: 'Express JS' },
                { id: 8, img: ts, name: 'Typescript' },
                { id: 9, img: php, name: 'PHP' },
            ]
        },
        {
            label: 'Database',
            items: [
                { id: 10, img: mysql, name: 'MySQL' },
                { id: 11, img: postgresql, name: 'PostgreSQL' },
            ]
        },
        {
            label: 'Tools & Others',
            items: [
                { id: 12, img: rabbitmq, name: 'RabbitMQ' },
            ]
        },
    ];

    return (
        <div id="experience" className='w-full py-20 bg-brand-surface text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text'>
            <div className='h-full justify-center p-6 max-w-screen-lg mx-auto flex flex-col'>
                <div>
                    <p className='text-3xl text-center font-semibold mb-2'>Experience</p>
                </div>
                <br />
                <div ref={ref} className='flex flex-col gap-10'>
                    {categories.map((category) => (
                        <div key={category.label}>
                            {/* Label Kategori */}
                            <h3 className='text-lg font-semibold mb-4 pb-2 border-b-2 border-brand-border dark:border-brand-dark-border'>
                                {category.label}
                            </h3>
                            {/* Grid logo per kategori */}
                            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center'>
                                {category.items.map((logo) => (
                                    <motion.div
                                        key={logo.id}
                                        className='hover:scale-110 px-4 py-4 duration-200 flex flex-col items-center'
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        initial='hidden'
                                        animate={mainControls}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    >
                                        <img
                                            src={logo.img}
                                            alt={logo.name}
                                            className='w-16 h-16 object-contain mx-auto'
                                        />
                                        <p className='text-center py-2 text-sm font-semibold'>{logo.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
