import { useParams } from "react-router-dom";
import { Redirect } from 'react-router';
import { useState, useEffect } from "react";
import { getAllCategories } from "../services/categories";
import { getOneTextbook, putTextbook } from "../services/textbook";


export default function TextbookEdit(props) {
    const [categories, setCategories] = useState([])
    const [textbook, setTextbook] = useState({
        title: "",
        img_url: "",
        author: "",
        ISBN: "",
        price: ""
    })
    const [isUpdated, setUpdated] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        const fetchTextbook = async () => {
            const textbook = await getOneTextbook(id)
            console.log(textbook);
            setTextbook(textbook);
        }
        fetchTextbook()
    }, [id]);
    const handleChange = (event) => {
        const { name, value } = event.target
        setTextbook({
            ...textbook,
            [name]: value,
        })
    }
    useEffect(() => {
        const fetchDropDowns = async () => {
            const categories = await getAllCategories()
            setCategories(categories)
        }
        fetchDropDowns()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = await putTextbook(id, textbook)
        setUpdated(updated)
    }
    if (isUpdated) {
        return <Redirect to={`/textbooks/${id}`} />
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    onChange={handleChange}
                    value={textbook.title}
                    placeholder="title"
                    name="title"
                    required
                />
                <input
                    onChange={handleChange}
                    value={textbook.img_url}
                    name="img_url"
                    required
                />
                <input
                    onChange={handleChange}
                    value={textbook.author}
                    name="author"
                    required
                />
                <input
                    onChange={handleChange}
                    value={textbook.price}
                    name="price"
                    required
                />
                <input
                    onChange={handleChange}
                    value={textbook.ISBN}
                    name="ISBN"
                />
                <select name="category_id">
                    <option default hidden required >
                        Select Category
                    </option>
                    {categories &&
                        categories.map((category) => (
                            <option value={category.id}>{category.name}</option>
                        ))}
                </select>
                <button type="submit">
                    EDIT
                </button>
            </form>
        </>
    )
}
