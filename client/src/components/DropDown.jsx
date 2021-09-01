import React from "react";
import { Link } from "react-router-dom";

function DropDown({ isOpen, toggle, currentUser, handleLogout}) {
  return (
    <div
    className={
      isOpen
        ? "grid grid-rows-4 text-center items-center bg-gray-500 font-serif"
        : "hidden"
    }
    onClick={toggle}
  >
      
      {!currentUser && <Link to="/" className="pt-14 text-white text-lg font-bold">Home</Link>}
      {!currentUser && <Link to="/textbooks" className="text-white text-lg font-bold">Textbooks </Link>}
      {!currentUser && <Link to="/register" className=" text-white text-lg font-bold">Register</Link>}
      {!currentUser && <Link to="/login" className=" text-white text-lg font-bold">Login</Link>}

      {currentUser && <Link to="/" className="pt-14 text-white text-lg font-bold">Home</Link>}
      {currentUser && <Link to="/textbooks" className=" text-white text-lg font-bold"  > Textbooks</Link>}
      {currentUser && <Link to="/add/textbooks" className=" text-white text-lg font-bold">Add Textbook</Link>}
      {currentUser && <button onClick={handleLogout} className=" text-white text-lg font-bold">
                                Log Out
                            </button>
                            }
      
              
  </div>
  
  
);
}


export default DropDown;
