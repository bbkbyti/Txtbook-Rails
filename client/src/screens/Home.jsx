import React from 'react'
import { useState, useEffect } from "react";
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
    <div className='min-h-screen bg-gray-100 font-serif'>
    <div>
      <div> 
        <h2 className='flex px-8 text-blue-800 italic text-4xl leading-relaxed'>
          Welcome to Textbook Rails<br/>Buy and Sell College Textbooks Online </h2>
      </div>
      <img className='flex w-5/12 ' src='https://www.pngkit.com/png/detail/126-1268278_faqs-for-students-college-student-students-icon.png' alt='students'/>
    </div>
    </div>
  )
}
