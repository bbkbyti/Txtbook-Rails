import React from 'react'
import { Link } from 'react-router-dom';
import { GoBook } from "react-icons/go";
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';


export default function Navbar(props) {
    const { currentUser, handleLogout, toggle } = props;
    return (
        <div className="navbar-container font-serif lg:font-bold lg:text-2xl">
            <div className="navbar">
                <ul className="navbar-nav">

                    <FiMenu onClick={toggle} className="navbar-dropdown" />

                    <Link to="/textbooks" className="nav-link">
                        Textbooks
                    </Link>


                    {currentUser ? (
                        <Link to="/add/textbooks" className="nav-link">
                            Add Textbook
                        </Link>
                    )
                        :
                        (
                            <Link to="/login" className="nav-link">
                                Add Textbook
                            </Link>
                        )}

                </ul>

                <div className="brand-container">
                    <Link className="lg:brand lg:m-2 lg:text-3xl lg:font-bold" to="/">
                        <p className=' lg:mx-5'>
                            Textbook Rails
                        </p>
                    </Link>
                    <GoBook size="40" />
                </div>

                <ul className="navbar-auth">

                    {currentUser ?
                        (
                            <div className='lg:flex '>
                                <p className='lg:mx-24 lg:px-3 lg:py-1 lg:rounded-full lg:text-blue-900 lg:bg-blue-200 font-serif italic mr-1 bg-blue-200 px-2 py-1 rounded-full text-sm'
                                >Hi {currentUser.username}!</p>
                                <button onClick={handleLogout} className="nav-link">
                                    Log Out
                                </button>
                            </div>
                        )
                        :
                        (

                            <>
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </>
                        )}

                </ul>
            </div>
        </div>
    );
}
