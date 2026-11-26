import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { BiLogoGmail, BiLogoLinkedinSquare, BiLogoWhatsappSquare, BiLogoGithub, BiLogoInstagramAlt } from 'react-icons/bi'
import { motion, useInView, useAnimation } from 'framer-motion'

const Contact = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const form = useRef();
    const [formData, setFormData] = useState({
        from_name: '',
        email_name: '',
        message: '',
    });

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
        emailjs.sendForm('service_89y1tom', 'template_edy6xnd', form.current, 'ymDzoRuk6tD8secMs')
            .then((result) => {
                console.log(result.text);
                setFormData({
                    from_name: '',
                    email_name: '',
                    message: '',
                });
            }, (error) => {
                console.log(error.text);
            });
        Swal.fire({
            title: 'Pesan Terkirim',
            timer: 5000, // durasi dalam milidetik
            icon: 'success',
            showConfirmButton: false, // tombol OK tidak ditampilkan
        });
    }

    return (
        <div id='contact' className='md:h-screen items-center flex justify-center bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text w-full p-4 md:p-0'>
            <div ref={ref} className='md:h-[80%] justify-center flex items-center'>
                <motion.div
                    className='flex justify-center border-2 border-brand-border bg-brand-surface shadow-lg rounded-md p-3 items-center w-full mx-2 md:mx-32 h-full md:h-[80%] flex-col md:flex-row dark:bg-brand-dark-surface dark:border-brand-dark-border'
                    variants={{
                        hidden: { opacity: 0, x: -205 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.25 }}>
                    <div className='bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] mx-auto md:h-full md:1/2 lg:w-2/5 w-full justify-center items-center rounded-lg p-2'>
                        <h1 className='text-2xl p-2 font-semibold'>Contact Information</h1>
                        {mycontact.map((Contact) => {
                            return (
                                <div key={Contact.id} className='flex items-center p-1 text-lg gap-2'>
                                    <Contact.logo size={25} />
                                    <a href={Contact.link} target='_blank' rel='noopener noreferrer'>{Contact.name}</a>
                                </div>
                            )
                        })}
                    </div>
                    <form className='p-2 mx-auto gap-4 h-full md:1/2 lg:w-3/5 w-full' ref={form}>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <input
                                    className='w-full bg-brand-bg dark:bg-brand-dark-bg border-brand-border dark:border-brand-dark-border text-brand-text dark:text-brand-dark-text placeholder:text-brand-muted dark:placeholder:text-brand-dark-muted border-2 rounded-sm p-3'
                                    placeholder='Name'
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                                    required />
                            </div>
                            <div>
                                <input className='w-full bg-brand-bg dark:bg-brand-dark-bg border-brand-border dark:border-brand-dark-border text-brand-text dark:text-brand-dark-text placeholder:text-brand-muted dark:placeholder:text-brand-dark-muted border-2 rounded-sm p-3'
                                    placeholder='Email'
                                    type="email"
                                    name="email_name"
                                    value={formData.email_name}
                                    onChange={(e) => setFormData({ ...formData, email_name: e.target.value })}
                                    required />
                            </div>
                            <div className='col-span-2'>
                                <textarea className='w-full bg-brand-bg dark:bg-brand-dark-bg border-brand-border dark:border-brand-dark-border text-brand-text dark:text-brand-dark-text placeholder:text-brand-muted dark:placeholder:text-brand-dark-muted border-2 rounded-sm p-3 h-52'
                                    placeholder='Message'
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required />
                            </div>
                        </div>
                        <div className='w-full text-center mt-4'>
                            <button onClick={submitMessage} className='duration-300 text-center p-2 rounded-lg mx-auto bg-brand-accent dark:bg-brand-dark-accent text-[#F9F5ED] dark:text-[#171B21] font-semibold hover:scale-105 hover:ring-brand-accent dark:hover:ring-brand-dark-accent hover:ring-2' type="submit" value="Send" >Send Message</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
