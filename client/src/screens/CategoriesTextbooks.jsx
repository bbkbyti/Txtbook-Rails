import React from 'react'
import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/categories';
export default function CategoriesTextbooks(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesList = await getAllCategories();
            setCategories(categoriesList);
        }
        fetchCategories();
    }, [])

    return (
        <div>
            <h3>Categories</h3>
            {categories
                && categories.map((obj, index) => (
                    <div key={index}>
                        {obj.textbooks.map((textbook) => (
                            <div key={textbook.id}>
                                {textbook.title}
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}