import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories(props) {
const {allCategories} = props
    return (
        <div>
            <h3>Real Categories</h3>
            {allCategories.map((obj, index) => (
                <Link to={`/categories/${obj.id}`} >
                    <div key={index}>
                        {obj.name}
                    </div>
                    </Link>
                ))}
        </div>
    )
}
