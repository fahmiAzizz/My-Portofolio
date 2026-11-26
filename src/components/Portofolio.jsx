import React, { useEffect, useRef, useState } from 'react'
import Project2 from '../assets/project/project2.png';
import Project3 from '../assets/project/project3.png';
import Projectw from '../assets/project/projectwd.png';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Portofolio = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const [selectedProject, setSelectedProject] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    // Lock body scroll saat modal terbuka
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProject]);

    const projects = [
        {
            id: 1,
            name: 'Weather APP',
            pict: Project3,
            demo: 'https://weather-app-theta-smoky.vercel.app/',
            github: 'https://github.com/fahmiAzizz/WeatherApp',
            description: 'Aplikasi cuaca real-time yang menampilkan kondisi cuaca berdasarkan kota yang dicari. Menggunakan OpenWeather API untuk mengambil data cuaca terkini.',
            tech: ['React', 'Tailwind CSS', 'OpenWeather API']
        },
        {
            id: 2,
            name: 'PetX',
            pict: Project2,
            demo: 'https://pet-x-fahmiazizzs-projects.vercel.app/',
            github: 'https://github.com/fahmiAzizz/PetX',
            description: 'Platform e-commerce untuk kebutuhan hewan peliharaan. Menampilkan berbagai produk dan kategori untuk pet owner.',
            tech: ['React', 'Tailwind CSS', 'JavaScript']
        },
        {
            id: 3,
            name: 'Wedding Invitation',
            pict: Projectw,
            demo: 'https://alya-dody2.vercel.app/',
            github: 'https://github.com/fahmiAzizz/wedding_invitation',
            description: 'Website undangan pernikahan digital yang elegan dan responsif, dilengkapi dengan countdown timer dan galeri foto.',
            tech: ['React', 'Tailwind CSS', 'Framer Motion']
        },
    ]

    const openModal = (project) => {
        setSelectedProject(project);
        setCarouselIndex(projects.findIndex(p => p.id === project.id));
    };

    const closeModal = () => setSelectedProject(null);

    const prevSlide = (e) => {
        e.stopPropagation();
        setCarouselIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = (e) => {
        e.stopPropagation();
        setCarouselIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div id="portofolio" className='w-full py-20 h-auto bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text'>
            <div className='p-6 max-w-screen-lg  mx-auto justify-center h-auto flex flex-col'>
                <div>
                    <p className='text-center  text-3xl  font-semibold '>Portofolio</p>
                </div>
                <br />
                <div ref={ref} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className='border bg-brand-surface dark:bg-brand-dark-surface hover:shadow-md hover:shadow-brand-accent dark:hover:shadow-brand-dark-accent border-brand-border dark:border-brand-dark-border rounded-lg overflow-hidden hover:scale-105 duration-200 cursor-pointer'
                            variants={{
                                hidden: { opacity: 0, y: 200 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial='hidden'
                            animate={mainControls}
                            transition={{ duration: 2, delay: 0.25 }}
                            onClick={() => openModal(project)}
                        >
                            <div>
                                <img src={project.pict} alt={project.name} className='w-full h-56 object-cover' />
                                <p className=' border-b-2 border-brand-border dark:border-brand-dark-border p-2 text-center'>{project.name}</p>
                                <div className='flex flex-row items-center justify-center py-2'>
                                    <button
                                        className='w-2/3 hover:scale-105 duration-300'
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                    </button>
                                    <div className='w-1/2 hover:scale-105 duration-300'>
                                        <button
                                            className='flex items-center'
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">Code</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ===== MODAL DETAIL PROJECT ===== */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative bg-brand-bg dark:bg-brand-dark-surface rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-brand-border dark:border-brand-dark-border"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Tombol Tutup */}
                            <button
                                className="absolute top-3 right-4 text-2xl font-bold text-brand-muted dark:text-brand-dark-muted hover:text-brand-text dark:hover:text-brand-dark-text z-10 leading-none"
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                            {/* ===== GAMBAR / CAROUSEL ===== */}
                            {projects.length > 3 ? (
                                // MODE CAROUSEL — aktif jika project lebih dari 3
                                <div className="relative">
                                    <img
                                        src={projects[carouselIndex].pict}
                                        alt={projects[carouselIndex].name}
                                        className="w-full h-56 object-cover"
                                    />
                                    {/* Tombol Prev */}
                                    <button
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-[#F9F5ED] rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 text-xl"
                                        onClick={prevSlide}
                                    >
                                        &#8249;
                                    </button>
                                    {/* Tombol Next */}
                                    <button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-[#F9F5ED] rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 text-xl"
                                        onClick={nextSlide}
                                    >
                                        &#8250;
                                    </button>
                                    {/* Dot Indicator */}
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                                        {projects.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`w-2 h-2 rounded-full transition-all ${i === carouselIndex ? 'bg-brand-bg scale-125' : 'bg-brand-bg/50'}`}
                                                onClick={(e) => { e.stopPropagation(); setCarouselIndex(i); }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                // MODE GAMBAR TUNGGAL — aktif jika project 3 atau kurang
                                <img
                                    src={selectedProject.pict}
                                    alt={selectedProject.name}
                                    className="w-full h-56 object-cover"
                                />
                            )}

                            {/* ===== KONTEN DETAIL ===== */}
                            {(() => {
                                const display = projects.length > 3 ? projects[carouselIndex] : selectedProject;
                                return (
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-brand-text dark:text-brand-dark-text mb-2">
                                            {display.name}
                                        </h2>
                                        <p className="text-sm text-brand-muted dark:text-brand-dark-muted mb-4">
                                            {display.description}
                                        </p>
                                        {/* Tech Badges */}
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {display.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-brand-surface dark:bg-brand-dark-bg text-brand-text dark:text-brand-dark-muted px-3 py-1 rounded-full border border-brand-border dark:border-brand-dark-border"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        {/* Tombol Demo */}
                                        <a
                                            href={display.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block w-full text-center bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] font-semibold py-2.5 rounded-xl hover:opacity-80 transition"
                                        >
                                            🔗 Live Demo
                                        </a>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Portofolio
