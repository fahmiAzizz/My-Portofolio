import React from 'react'
import css from '../assets/logo/css.png'
import express from '../assets/logo/express.png'
import html from '../assets/logo/html.png'
import js from '../assets/logo/js.png'
import nodejs from '../assets/logo/nodejs.png'
import react from '../assets/logo/react.png'
import tailwind from '../assets/logo/tailwind.png'

const Experience = () => {

    const logos = [
        {
            id: 1,
            img: html,
            name: 'HTML',
            color: 'orange'
        },
        {
            id: 2,
            img: css,
            name: 'CSS',
            color: 'blue'
        },
        {
            id: 3,
            img: js,
            name: 'Javascript',
            color: 'yellow'
        },
        {
            id: 4,
            img: react,
            name: 'React JS',
            color: 'blue'
        },
        {
            id: 5,
            img: tailwind,
            name: 'Tailwind Css',
            color: 'blue'
        },
        {
            id: 6,
            img: nodejs,
            name: 'Node JS',
            color: 'green'
        },
        {
            id: 7,
            img: express,
            name: 'Express JS',
            color: 'gray'
        }
    ]


    return (
        <div name="experience" className='w-full text-black bg-slate-200'>
            <div className=' h-full justify-center p-6 max-w-screen-lg mx-auto flex flex-col'>
                <div>
                    <p className='text-3xl  text-center font-semibold mb-2'>Experience</p>
                </div>
                <br />
                <div className='grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>
                    {logos.map(logo => (
                        <div className={`shadow-md px-12 py-2 shadow-${logo.color}-400`}>
                            <img className='w-28 h-28' key={logo.id} src={logo.img} alt="" />
                            <p className='text-center py-2 font-semibold'>{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience