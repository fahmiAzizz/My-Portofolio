import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import cn from 'clsx';
import { throttle } from 'lodash';

const Navbar = () => {


    // useEffect(() => {
    //     // Temukan tombol Dark Mode
    //     let darkModeToggle = document.getElementsByClassName("darkModeToggle");

    //     // Periksa status mode gelap pada saat memuat halaman
    //     if (localStorage.getItem("darkMode") === "enabled") {
    //         document.documentElement.classList.add("dark");
    //     }

    //     // Tambahkan event listener untuk tombol
    //     darkModeToggle.addEventListener("click", function () {
    //         // Toggle kelas 'dark' pada elemen HTML root
    //         document.documentElement.classList.toggle("dark");

    //         // Simpan status mode gelap ke localStorage
    //         if (document.documentElement.classList.contains("dark")) {
    //             localStorage.setItem("darkMode", "enabled");
    //         } else {
    //             localStorage.setItem("darkMode", "disabled");
    //         }
    //     });
    // }, [])
    // State untuk melacak status mode gelap
    const [darkMode, setDarkMode] = useState(false);

    // Menerapkan mode gelap saat komponen dimuat
    useEffect(() => {
        if (localStorage.getItem("darkMode") === "enabled") {
            setDarkMode(true);
        }
    }, []);

    // Menggunakan state darkMode untuk mengatur kelas dark pada elemen HTML
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // Mengubah status mode gelap dan menyimpannya di localStorage saat tombol diklik
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

        if (!darkMode) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    };



    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portofolio'
        },
        {
            id: 4,
            link: 'contact'
        }
    ]

    const [hasScrolled, setHasScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 50
            const scrolled = document.documentElement.scrollTop > offset

            // if (hasScrolled !== scrolled) 
            setHasScrolled(scrolled)
        }, 200)

        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [hasScrolled])
    console.log(hasScrolled);

    return (
        <div
            className={cn(
                ' text-black flex justify-between items-center w-full h-20 fixed px-4 navbar z-10',
                {
                    'bg-slate-300 dark:bg-slate-950 shadow-lg ': hasScrolled
                }
            )}>
            <div>
                <h1 className='text-5xl font-bold ml-8 logo dark:text-white'>Fahmi</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li key={link.id} className='dark:text-white text-xl px-4 mr-8 cursor-pointer font-medium text-gray-800 hover:scale-110 duration-200 '>{link.link}</li>
                ))}

                <li className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 dark:text-white">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                    <button onClick={toggleDarkMode} className='darkModeToggle w-10 h-5 p-0.5 rounded-full bg-slate-300'><div className='h-4 w-4 bg-white rounded-full dark:translate-x-5'></div></button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 dark:text-white">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                    </svg>

                </li>
            </ul>
            <div className='flex items-center gap-2 md:hidden'>
                <li className='flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 dark:text-white">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                    <button onClick={toggleDarkMode} className='darkModeToggle w-10 h-5 p-0.5 rounded-full bg-slate-300'><div className='h-4 w-4 bg-white rounded-full dark:translate-x-5'></div></button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 dark:text-white">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                    </svg>
                </li>
                <div onClick={() => setNav(!nav)} className='dark:text-white cursor-pointer z-10 pr-4 text-gray-800 md:hidden'>

                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-slate-700 dark:text-white'>
                        {links.map(link => (
                            <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link.link}</li>
                        ))}
                    </ul>
                )}
            </div>




        </div>
    )
}

export default Navbar 