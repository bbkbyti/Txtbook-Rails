import React from 'react'
import { Link } from 'react-router-dom';
import { GoBook } from "react-icons/go";

export default function Navbar(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div>
            <header className="text-white">

                {currentUser ? (
                    <div className="py-8 bg-blue-900 flex justify-evenly font-serif text-xl">
                        <GoBook size={40}/>
                        <Link className='text-4xl italic' to='/'>Textbook Rails</Link>
                        <Link className="" to='/textbooks'>Textbooks</Link>
                        <Link className="" to='/categories'>Categories</Link>
                        <Link className="" to='/add/textbooks'>Add Textbook</Link>
                        <button className='pb-3' onClick={handleLogout}>LogOut</button>
                        <h3 className='text-2xl italic'>Hi {currentUser.username} !</h3>
                        
                    </div>
                ) : (
                    <div className="py-8 bg-blue-900 flex justify-evenly font-serif text-xl">
                       <Link to='/'> <GoBook size={40} /></Link> 
                        <Link className='text-4xl italic' to='/'>Textbook Rails</Link>
                        <Link to='/categories'>Categories</Link>
                        <Link to='/textbooks'>Textbooks</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
        </header>
    </div>
    )
}
