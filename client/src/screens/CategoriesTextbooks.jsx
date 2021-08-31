import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export default function CategoriesTextbooks(props) {

  const { allCategories } = props
  const [category, setCategory] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    if (allCategories.length) {
      const oneCategory = allCategories.find(category => category.id === Number(id))
      setCategory(oneCategory)
    }
  }, [id])

  return (
    <div className="lg:min-h-screen lg:font-bold lg:font-serif min-h-screen font-bold font-serif">
      <div className="lg:flex lg:flex-row lg:justify-center lg:text-black">
        <div className="lg:grid lg:grid-cols-1">
          {category && (
            <div className="">
              
                <h4 className="lg:pb-5 my-10 lg:text-blue-900 lg:uppercase lg:text-4xl lg:italic text-3xl italic">
                  {category.name}</h4>
                {category.textbooks?.map(textbook => (
                  <Link to={`/textbooks/${textbook.id}`}>
                    <img className='lg:shadow-2xl lg:w-6/12 lg:ml-40 lg:rounded-2xl lg:my-3 lg:flex lg:justify-center lg:items-center shadow-2xl rounded-3xl w-6/12 ml-24 mt-7' src={textbook.img_url} alt={textbook.title} />
                    <p className=" lg:text-xl lg:mb-14 lg:rounded-full lg:text-blue-900 lg:italic lg:py-3 lg:px-16 text-lg italic bg-blue-200 mt-2 mx-6 py-3 px-6 rounded-full">{textbook.title}</p>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
