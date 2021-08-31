import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllCategories } from "../services/categories";


export default function Home(props) {
    const [categories, setCategories] = useState([]);
    const {allCategories} = props

    useEffect(() => {

        const fetchDropDowns = async () => {
            const categories = await getAllCategories();

            setCategories(categories);

        };
        fetchDropDowns();
    }, []);

    return (
        <div className='lg:grid lg:grid-cols-2 lg:min-h-screen lg:bg-gray-100 lg:font-serif flex flex-col font-serif min-h-screen'>
            <div>
                <div>
                    <h2 className='lg:px-8 lg:py-10 lg:text-blue-800 lg:font-bold lg:italic lg:text-4xl lg:leading-relaxed text-blue-800 text-xl font-bold italic px-3 pt-3 '>
                        Welcome to Textbook Rails<br />Buy and Sell College Textbooks Online </h2>
                </div>
                <img className='lg:w-9/11' src='https://www.pngkit.com/png/detail/126-1268278_faqs-for-students-college-student-students-icon.png' alt='students' />
            </div>
            <div>
                <div className='lg:flex lg:flex-col lg:justify-evenly lg:mb-4 lg:mt-3 flex justify-evenly py-2'>
                    <Link to='/textbooks' className='lg:text-4xl lg:text-gray-300 lg:font-bold lg:bg-blue-900 lg:py-4 lg:mx-32 lg:mb-4 lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 bg-blue-900 text-gray-300 font-bold px-3 py-2' >Buy Textbooks</Link>
                    <Link to='/add/textbooks' className='lg:text-4xl lg:text-blue-900 lg:font-bold lg:bg-gray-300 lg:py-4 lg:mx-32 lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 bg-gray-300 text-blue-900 font-bold px-3 py-2'>Sell Textbooks</Link>
                </div>
                <div className='lg:flex lg:justify-center flex justify-center py-5'>
                    <Link to='/login' className='lg:bg-green-400 lg:text-2xl lg:text-white lg:font-bold lg:px-9 lg:py-3 lg:mx-4  lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 bg-green-500 px-3 mx-2'>LogIn</Link>
                    <Link to='/register' className='lg:bg-yellow-300 lg:text-2xl lg:text-blue-900 lg:font-bold lg:px-6 lg:py-3  lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 bg-yellow-400 px-2'>Register</Link>
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:mt-3 grid grid-cols-3">
                {allCategories.map((obj, index) => (
                <Link to={`/categories/${obj.id}`} >
                    <div className="lg:bg-gray-200 lg:font-bold lg:text-xl lg:text-blue-900 lg:text-left lg:mt-2 lg:py-2 lg:px-4 lg:capitalize bg-gray-200 text-blue-900" key={index}>
                        {obj.name}
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    )
}
