import React from 'react'
import { Link } from "react-router-dom";

export default function DropDown({ isOpen, toggle }) {
    return (
        <div
            className={
                isOpen
                    ? "grid grid-rows-3 text-center items-center bg-blue-900"
                    : "hidden"
            }
            onClick={toggle}
        >
            <Link to="/" className="p-4 font-serif text-white">
                Home
            </Link>
            <Link to="/textbooks" className="p-4 font-serif text-white">
                Textbooks
            </Link>
            <Link to="/login" className="p-4 font-serif text-white">
                Login
            </Link>
            <Link to="/register" className="p-4 font-serif text-white">
                Register
            </Link>
        </div>
    );
}
