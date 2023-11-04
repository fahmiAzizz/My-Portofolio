import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import cn from 'clsx';
import { throttle } from 'lodash';

const Navbar = () => {


    useEffect(() => {
        // Temukan tombol Dark Mode
        var darkModeToggle = document.getElementById("darkModeToggle");

        // Periksa status mode gelap pada saat memuat halaman
        if (localStorage.getItem("darkMode") === "enabled") {
            document.documentElement.classList.add("dark");
        }

        // Tambahkan event listener untuk tombol
        darkModeToggle.addEventListener("click", function () {
            // Toggle kelas 'dark' pada elemen HTML root
            document.documentElement.classList.toggle("dark");

            // Simpan status mode gelap ke localStorage
            if (document.documentElement.classList.contains("dark")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    })


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
                'text-black flex justify-between items-center w-full h-20 fixed px-4 navbar z-10',
                {
                    'bg-slate-300 shadow-lg ': hasScrolled
                }
            )}>
            <div>
                <h1 className='text-5xl font-bold ml-8 logo'>Fahmi</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(link => (
                    <li key={link.id} className='text-xl px-4 mr-8 cursor-pointer font-medium text-gray-800 hover:scale-110 duration-200 '>{link.link}</li>
                ))}
                <li><button id='darkModeToggle'>mode</button></li>
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 pr-4 text-gray-800 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white'>
                    {links.map(link => (
                        <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link.link}</li>
                    ))}
                </ul>
            )}



        </div>
    )
}

export default Navbar 