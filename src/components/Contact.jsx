import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { BiLogoGmail, BiLogoLinkedinSquare, BiLogoWhatsappSquare, BiLogoGithub, BiLogoInstagramAlt } from 'react-icons/bi'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_89y1tom', 'template_edy6xnd', form.current, 'ymDzoRuk6tD8secMs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const mycontact = [
        {
            id: 1,
            name: "fahmiaziz031102@gmail.com",
            logo: BiLogoGmail,
            link: "mailto:fahmiaziz031102@gmail.com"
        },
        {
            id: 2,
            name: "fahmiAzizz",
            logo: BiLogoGithub,
            link: "https://github.com/fahmiAzizz"
        },
        {
            id: 3,
            name: "Fahmi Aziz",
            logo: BiLogoLinkedinSquare,
            link: "https://www.linkedin.com/in/fahmi-aziz-463640272/"
        },
        {
            id: 4,
            name: "083896373574",
            logo: BiLogoWhatsappSquare,
            link: "https://wa.me/6283896373574"
        },
        {
            id: 5,
            name: "fahmii.azz",
            logo: BiLogoInstagramAlt,
            link: "https://www.instagram.com/fahmii.azz/"
        },
    ]

    function submitMessage() {
        Swal.fire(
            'Pesan Terkirim'
        )
    }

    return (
        <div className=' md:h-screen bg-white  w-full my-4 md:my-0 dark:text-slate-100 dark:bg-gradient-to-b dark:to-slate-950 
        dark:from-slate-900 text-slate-800'>
            <div className='md:h-screen flex items-center'>
                <div className='flex justify-center border-2 border-slate-300 bg-slate-200 shadow-lg rounded-md p-3 items-center w-full mx-2 md:mx-32 h-full  md:h-[80%] flex-col md:flex-row dark:bg-slate-800 dark:border-slate-900'>
                    <div className='bg-green-600 dark:bg-green-600 text-white mx-auto md:h-full md:1/2 lg:w-2/5  w-full justify-center items-center rounded-lg p-2'>
                        <h1 className='text-2xl p-2'>Contact Information</h1>
                        {mycontact.map((Contact) => {
                            return (
                                <div key={Contact.id} className='flex items-center p-1 text-lg'>
                                    <Contact.logo size={25} />
                                    <a href={Contact.link} target='_blank'>{Contact.name}</a>
                                </div>
                            )
                        })}
                    </div>
                    <form className='p-2 mx-auto gap-4 h-full md:1/2 lg:w-3/5 w-full' ref={form} onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <input className='w-full dark:bg-slate-700 dark:border-slate-800 dark:text-slate-50 border-slate-300 border-2 rounded-sm p-3' placeholder='Name' type="text" name="from_name" required />
                            </div>
                            <div>
                                <input className='w-full dark:bg-slate-700 dark:border-slate-800 dark:text-slate-50 border-slate-300 border-2 rounded-sm p-3' placeholder='Email' type="email" name="email_name" required />
                            </div>
                            <div className='col-span-2'>
                                <textarea className='w-full dark:bg-slate-700 dark:border-slate-800 dark:text-slate-50 border-slate-300 border-2 rounded-sm p-3 h-64' placeholder='Message' name="message" required />
                            </div>
                        </div>
                        <div className='w-full text-center mt-4 text-white'>
                            <button onClick={submitMessage} className='text-center p-2 rounded-lg mx-auto bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 hover:ring-green-700 hover:ring-2' type="submit" value="Send" >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact