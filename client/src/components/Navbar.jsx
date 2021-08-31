import React from 'react'
import { Link } from 'react-router-dom';
import { GoBook } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar(props) {
    const { currentUser, handleLogout, toggle } = props;
    return (
        <div>
            <header className="text-white">

                {currentUser ? (
                    <div className="lg:py-8 lg:bg-blue-900 lg:flex lg:justify-evenly lg:font-serif lg:text-xl bg-blue-900 flex justify-evenly">
                        <GoBook size={40} />
                        <Link className='lg:text-4xl lg:italic' to='/'>Textbook Rails</Link>
                        <Link className="" to='/textbooks'>Textbooks</Link>
                        <Link className="" to='/add/textbooks'>Add Textbook</Link>
                        <button className='lg:pb-3' onClick={handleLogout}>LogOut</button>
                        <h3 className='lg:text-2xl lg:italic'>Hi {currentUser.username} !</h3>
                        <div className="px-4 cursor-pointer md:hidden " onClick={toggle}>
                            <GiHamburgerMenu />
                        </div>

                    </div>
                ) : (
                    <div className="lg:py-8 lg:bg-blue-900 lg:flex lg:justify-evenly lg:font-serif lg:text-xl">
                        <Link to='/'> <GoBook size={40} /></Link>
                        <Link className='lg:text-4xl lg:italic' to='/'>Textbook Rails</Link>
                        <Link to='/textbooks'>Textbooks</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </header>
        </div>
    )
}
