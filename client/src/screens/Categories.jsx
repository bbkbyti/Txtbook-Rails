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
            <h2>categories</h2>
            {categories.map((category) => (
                <p key={category.id}> {category.name}</p>
            ))}
        </div>
    )
}