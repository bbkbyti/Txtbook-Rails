import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export default function CategoriesTextbooks(props) {

    const {allCategories} = props
    const [category, setCategory] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        if (allCategories.length) {
            const oneCategory = allCategories.find(category => category.id === Number(id))
            setCategory(oneCategory)
        } 
    }, [])
    
    return (
        <div className="min-h-screen bg-home bg-cover ">
        <div className="flex flex-row justify-center text-black">
          <div className="grid grid-cols-1  min-h-screen ">
            {category && (
              <div className="p-3">
                <h4 className="pb-5 bg-blue-200 text-black uppercase text-2xl">{category.name}</h4>
                {category.textbooks?.map(textbook => (
                  <Link to={`/textbooks/${textbook.id}`}>
                    <p className="bg-blue-500 text-xl text-white">{textbook.title}</p>
                    <img src={textbook.img_url} alt="" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
}
