import React from 'react'
import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/categories';
export default function Categories(props) {

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
            <h3>Real Categories</h3>
            {categories.map((obj, index) => (
                    <div key={index}>
                        {obj.name}
                    </div>
                ))}
        </div>
    )
}