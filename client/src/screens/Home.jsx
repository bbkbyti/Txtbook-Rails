import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllCategories } from "../services/categories";
import Textbook from "../components/Textbook"

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [textbook, setTextbooks] = useState([])
  useEffect(() => {
    const fetchDropDowns = async () => {
      const categories = await getAllCategories();

      setCategories(categories);

    };
    fetchDropDowns();
  }, []);

  return (
    <div className='grid grid-cols-2  min-h-screen bg-gray-100 font-serif'>
      <div>
        <div>
          <h2 className='px-8 py-10 text-blue-800 font-bold italic text-4xl leading-relaxed'>
            Welcome to Textbook Rails<br />Buy and Sell College Textbooks Online </h2>
        </div>
        <img className='w-9/12' src='https://www.pngkit.com/png/detail/126-1268278_faqs-for-students-college-student-students-icon.png' alt='students' />
      </div>
      <div>
        <div className='flex flex-col justify-evenly mb-4 mt-3'>
          <Link to='/textbooks' className='text-4xl text-gray-300 font-bold bg-blue-900 py-4 mx-32 mb-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' >Buy Textbooks</Link>
          <Link to='/add/textbooks' className='text-4xl text-blue-900 font-bold bg-gray-300 py-4 mx-32 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>Sell Textbooks</Link>
        </div>
        <div className='flex justify-center'>
          <Link to='/login' className='bg-blue-900 text-2xl text-gray-200 font-bold px-9 py-3 mx-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>LogIn</Link>
          <Link to='/register' className='bg-gray-300 text-2xl text-blue-900 font-bold px-6 py-3  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Register</Link>
        </div>

      </div>
    </div>
  )
}
