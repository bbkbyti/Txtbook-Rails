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
        <div>
            <select name="category_id">
          <option default hidden required>
            select the Categories
          </option>
          {categories &&
            categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
             {<Textbook img_url={textbook.img_url}/> 
             }
        </select>
        </div>
    )
}
