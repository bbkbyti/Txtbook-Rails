import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='py-6 bg-blue-900 flex justify-evenly'>
            <FaGithub size={30} color='white' /> 
            <FaLinkedin size={30} color='white' />
            <h3 className='text-white font-serif mt-2 '>Ⓒ Babak Bayati 2021</h3>
            
        </div>
    )
}
