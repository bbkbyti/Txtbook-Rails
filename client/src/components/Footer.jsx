import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='py-6 bg-blue-900 flex justify-evenly'>
            <div className=" flex  transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                <a href="https://github.com/bbkbyti" target="_blank" rel="noreferrer">
                    <FaGithub size={30} color='white' />
                </a>
            </div>
            <div className="flex transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                <a href="https://www.linkedin.com/in/babak-bayati-8bb990202" target="_blank" rel="noreferrer">
                    <FaLinkedin size={30} color='white' />
                </a>
            </div>
            <div className="transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                <a href="https://twitter.com/babakBayattii" target="_blank" rel="noreferrer">
                    <FaTwitter size={30} color='white' />
                </a>
            </div>

            <h3 className='text-white font-serif mt-2 '>Ⓒ Babak Bayati 2021</h3>

        </div>
    )
}
