import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { currentUser, handleLogout } = props;
    return (
        <div>
            <header className="text-white">

                {currentUser ? (
                    <div className="bg-blue-500">
                        <h1 >Textbook Rails</h1>
                        <h3>{currentUser.username}</h3>
                        <Link className="m-3" to='/textbooks'>Textbooks</Link>
                        <Link className="m-3" to='/categories'>Categories</Link>
                        <Link className="m-3" to='/add/textbooks'>Add your textbook</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="bg-yellow-300">
                        <h1 >Textbook Rails</h1>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/categories'>Categories</Link>
                        <Link to='/textbooks'>Textbooks</Link>


                    </div>
                )}

            </header>
        </div>
    )
}
