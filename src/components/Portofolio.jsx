import React, { useEffect, useRef } from 'react'
import Project2 from '../assets/project/project2.png';
import Project3 from '../assets/project/project3.png';
import Project5 from '../assets/project/project5.png';
import { motion, useInView, useAnimation } from 'framer-motion';

const Portofolio = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const projects = [
        {
            id: 1,
            name: 'Wheater APP',
            pict: Project3,
            demo: 'https://weather-app-theta-smoky.vercel.app/',
            github: 'https://github.com/fahmiAzizz/WeatherApp'
        },
        {
            id: 2,
            name: 'PetX',
            pict: Project2,
            demo: 'https://pet-x-fahmiazizzs-projects.vercel.app/',
            github: 'https://github.com/fahmiAzizz/PetX'
        },
        {
            id: 3,
            name: 'CRUD Express JS',
            pict: Project5,
            demo: 'https://github.com/fahmiAzizz/CRUD_Rest_Api',
            github: 'https://github.com/fahmiAzizz/CRUD_Rest_Api'
        }
    ]


    return (
        <div id="portofolio" className='w-full py-20 text-slate-800 h-auto bg-slate-50 dark:text-slate-100 dark:bg-gradient-to-b dark:from-slate-800 
        dark:to-slate-900 '>
            <div className='p-6 max-w-screen-lg  mx-auto justify-center h-auto flex flex-col'>
                <div>
                    <p className='text-center  text-3xl  font-semibold '>Portofolio</p>
                </div>
                <br />
                <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div key={project.id}
                            className='border hover:shadow-md hover:shadow-slate-800 hover:dark:shadow-slate-100 border-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-200 dark:border-slate-100'
                            variants={{
                                hidden: { opacity: 0, y: 200 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial='hidden'
                            animate={mainControls}
                            transition={{ duration: 2, delay: 0.25 }}>
                            <div>
                                <img src={project.pict} alt="" className='w-full h-56' />
                                <p className=' border-b-2 border-slate-300 p-2 text-center'>{project.name}</p>
                                <div className='flex flex-row items-center justify-center  py-2'>
                                    <button className='w-2/3 hover:scale-105 duration-300'>
                                        <a href={project.demo} target="_blank">Demo</a>
                                    </button>
                                    <div className='w-1/2 hover:scale-105 duration-300'>
                                        <button className='flex items-center'>
                                            <a href={project.github} target="_blank">Code</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portofolio